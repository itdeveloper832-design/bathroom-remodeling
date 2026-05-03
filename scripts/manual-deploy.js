const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const FTP_SERVER = 'ftp.digitalskillshouse.pk';
const FTP_USER = 'digitalskills@arzhomeremodeling.com';
const FTP_PASS = 'Kj8TmL9pQx2wR5vA6z';
const REMOTE_DIR = 'arzhomeremodeling.com';
const LOCAL_DIR = 'out';

const CONCURRENCY = 2; // Lower concurrency to avoid server limits

function getAllFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, allFiles);
        } else {
            allFiles.push(fullPath);
        }
    }
    return allFiles;
}

async function uploadFile(localPath) {
    const normalizedLocalPath = localPath.replace(/\\/g, '/');
    const relativePath = path.relative(LOCAL_DIR, localPath).replace(/\\/g, '/');
    const fullRemotePath = REMOTE_DIR + '/' + relativePath;

    return new Promise((resolve) => {
        const cmd = `curl.exe --no-epsv -u "${FTP_USER}:${FTP_PASS}" --ftp-create-dirs -T "${normalizedLocalPath}" "ftp://${FTP_SERVER}/${fullRemotePath}"`;
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`\n[ERROR] ${relativePath}: ${stderr || error.message}`);
            } else {
                process.stdout.write('.');
            }
            resolve();
        });
    });
}

async function deploy() {
    console.log('Building file list...');
    const allFiles = getAllFiles(LOCAL_DIR);
    console.log(`Total files to upload: ${allFiles.length}`);

    const queue = [...allFiles];
    const workers = [];

    console.log(`Starting deployment (Concurrency: ${CONCURRENCY})...`);
    
    async function worker() {
        while (queue.length > 0) {
            const file = queue.shift();
            if (file) await uploadFile(file);
        }
    }

    for (let i = 0; i < CONCURRENCY; i++) {
        workers.push(worker());
    }

    await Promise.all(workers);
    console.log('\nDeployment complete!');
}

if (!fs.existsSync(LOCAL_DIR)) {
    console.error('Error: out/ directory not found.');
    process.exit(1);
}

deploy().catch(console.error);
