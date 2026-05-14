const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  'public/images',
  'public/images/badges',
  'public/images/projects'
];

const optimizeImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const fileName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);
  
  // Create WebP version
  const webpPath = path.join(dirName, `${fileName}.webp`);
  if (!fs.existsSync(webpPath) || fs.statSync(filePath).mtime > fs.statSync(webpPath).mtime) {
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      console.log(`Optimized (WebP): ${webpPath}`);
    } catch (err) {
      console.error(`Error optimizing ${filePath} to WebP:`, err);
    }
  }

  // Create AVIF version
  const avifPath = path.join(dirName, `${fileName}.avif`);
  if (!fs.existsSync(avifPath) || fs.statSync(filePath).mtime > fs.statSync(avifPath).mtime) {
    try {
      await sharp(filePath)
        .avif({ quality: 65 }) // AVIF can have lower quality for same visual result
        .toFile(avifPath);
      console.log(`Optimized (AVIF): ${avifPath}`);
    } catch (err) {
      console.error(`Error optimizing ${filePath} to AVIF:`, err);
    }
  }
};

const processDirectory = async (dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'optimized') { // Skip already optimized dir if needed, but we want to process everything
        await processDirectory(fullPath);
      }
    } else {
      await optimizeImage(fullPath);
    }
  }
};

(async () => {
  for (const dir of directories) {
    await processDirectory(dir);
  }
  // Also process public/images/optimized just in case
  await processDirectory('public/images/optimized');
})();
