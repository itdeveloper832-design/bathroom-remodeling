const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../out/index.html');
if (!fs.existsSync(filePath)) {
  console.error('out/index.html not found!');
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');

// Strip all script tags
const htmlWithoutScripts = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

const targetWord = 'licensed crew';
const inFullHtml = html.includes(targetWord);
const inBodyHtml = htmlWithoutScripts.includes(targetWord);

console.log(`=== RSC SERIALIZATION CHECK ===`);
console.log(`Text in full HTML: ${inFullHtml ? 'YES' : 'NO'}`);
console.log(`Text in body (without script tags): ${inBodyHtml ? 'YES (Rendered as HTML)' : 'NO (Only in JS/RSC payload!)'}`);
