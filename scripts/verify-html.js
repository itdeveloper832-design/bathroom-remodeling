const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../out/index.html');
if (!fs.existsSync(filePath)) {
  console.error('out/index.html not found! Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');

console.log('=== HTML VERIFICATION ===');

// Check preloads
const preloadMatches = html.match(/<link[^>]*rel=["']preload["'][^>]*>/g) || [];
console.log(`\nFound ${preloadMatches.length} preload links in head:`);
preloadMatches.forEach(tag => console.log(`  ${tag}`));

// Check stylesheet links
const stylesheetMatches = html.match(/<link[^>]*rel=["']stylesheet["'][^>]*>|<link[^>]*onload=[^>]*>/g) || [];
console.log(`\nFound CSS links:`);
stylesheetMatches.forEach(tag => console.log(`  ${tag}`));

// Check inlined styles
const criticalMatch = html.includes('data-critical="true"');
console.log(`\nCritical CSS inlined: ${criticalMatch ? 'YES (Success)' : 'NO'}`);

// Check img tags related to logo
const imgTags = html.match(/<img[^>]*>/g) || [];
console.log(`\nFound ${imgTags.length} <img> tags. Logo details:`);
imgTags.forEach(tag => {
  if (tag.includes('web-logo-image') || tag.includes('logo')) {
    console.log(`  Logo tag: ${tag}`);
  }
});

// Check if there are any Google Font links left
const hasGoogleFonts = html.includes('fonts.googleapis.com') || html.includes('fonts.gstatic.com/s/inter');
console.log(`\nUses Google Fonts CDN (fonts.googleapis.com / fonts.gstatic.com): ${hasGoogleFonts ? 'YES (Failed)' : 'NO (Success - Self-hosted)'}`);
