const sharp = require('sharp');
const fs = require('fs');
const files = ['bbb-badge.png', 'chamber-badge.png', 'nextdoor-badge.png', 'yelp-badge.png'];

files.forEach(file => {
  const inputPath = 'public/' + file;
  const outputPath = 'public/' + file.replace('.png', '.webp');
  
  if (fs.existsSync(inputPath)) {
    sharp(inputPath)
      .resize(150)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log('Converted ' + file + ' to ' + outputPath);
        fs.unlinkSync(inputPath); // Remove original PNG
      })
      .catch(console.error);
  }
});
