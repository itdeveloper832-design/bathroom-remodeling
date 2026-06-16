const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../out/index.html');
if (!fs.existsSync(filePath)) {
  console.error('out/index.html not found! Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');

const targetWord = 'licensed crew';
const containsWord = html.includes(targetWord);

console.log(`=== SEO / SSR HTML CHECK ===`);
console.log(`Searching for "${targetWord}" in out/index.html...`);
console.log(`Found: ${containsWord ? 'YES (Server-rendered successfully)' : 'NO (Omitted from Server-rendered HTML!)'}`);
