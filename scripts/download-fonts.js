const fs = require('fs');
const path = require('path');
const https = require('https');

const fontDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir, { recursive: true });
}

// User-Agent of a modern Chrome browser to get the woff2 format from Google Fonts API
const options = {
  hostname: 'fonts.googleapis.com',
  path: '/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

console.log('Fetching Google Fonts stylesheet...');
https.get(options, (res) => {
  let css = '';
  res.on('data', (chunk) => { css += chunk; });
  res.on('end', () => {
    // Regex to find all src: url(...) formats for the latin subset.
    const sections = css.split('/* ');
    let latinSection = '';
    for (const section of sections) {
      if (section.startsWith('latin */')) {
        latinSection = section;
        break;
      }
    }
    
    if (!latinSection) {
      console.log('Latin section comment not found, using full CSS');
      latinSection = css;
    }

    const urlRegex = /url\((https:\/\/fonts\.gstatic\.com\/s\/inter\/[^)]+\.woff2)\)/g;
    const urls = [];
    let match;
    while ((match = urlRegex.exec(latinSection)) !== null) {
      urls.push(match[1]);
    }

    if (urls.length === 0) {
      // Fallback: search entire CSS if latin section split failed to find URLs
      const fallbackMatch = css.match(/url\((https:\/\/fonts\.gstatic\.com\/s\/inter\/[^)]+\.woff2)\)/);
      if (fallbackMatch) {
        urls.push(fallbackMatch[1]);
      }
    }

    if (urls.length === 0) {
      console.error('Could not find any woff2 font URLs in the stylesheet.');
      console.log('Stylesheet returned:\n', css);
      process.exit(1);
    }

    const fontUrl = urls[0];
    console.log(`Found font URL: ${fontUrl}`);
    console.log('Downloading font file...');

    const destPath = path.join(fontDir, 'inter-var.woff2');
    const file = fs.createWriteStream(destPath);
    https.get(fontUrl, (fontRes) => {
      fontRes.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Font downloaded successfully and saved as public/fonts/inter-var.woff2');
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error(`Error downloading font file: ${err.message}`);
    });
  });
}).on('error', (err) => {
  console.error(`Error fetching stylesheet: ${err.message}`);
});
