import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=75&w=800&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2576&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2574&auto=format&fit=crop&fm=webp",
  "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2574&auto=format&fit=crop&fm=webp"
];

const dir = path.join(process.cwd(), 'public', 'images', 'optimized');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    let finalUrl = url;
    if (!finalUrl.includes('fm=webp')) {
      finalUrl += '&fm=webp';
    }

    const request = https.get(finalUrl, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${finalUrl}' (${response.statusCode})`));
      }

      const file = fs.createWriteStream(dest);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    });

    request.on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  for (const url of images) {
    const match = url.match(/photo-([a-zA-Z0-9-]+)/);
    if (match) {
      const id = match[1];
      const dest = path.join(dir, `photo-${id}.webp`);
      console.log(`Downloading ${id}...`);
      try {
        await download(url, dest);
        console.log(`Saved to ${dest}`);
      } catch (err) {
        console.error(`Error downloading ${id}:`, err);
      }
    }
  }
}

run();
