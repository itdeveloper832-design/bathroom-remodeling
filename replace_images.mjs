import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  const regex = /"https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9-]+)[^"]*"/g;
  
  newContent = newContent.replace(regex, (match, id) => {
    return `"/images/optimized/${id}.webp"`;
  });

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walk(path.join(process.cwd(), 'app'), processFile);
walk(path.join(process.cwd(), 'components'), processFile);
