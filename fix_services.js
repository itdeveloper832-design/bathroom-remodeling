const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('page.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Target: services={otherServices}
  if (content.includes('services={otherServices}')) {
    content = content.replace(/services=\{otherServices\}/g, 'services={otherServices.map(s => s.name)}');
    changed = true;
  }

  // Also check if some pages skipped the variable
  if (content.match(/services=\{bathroomServices[^}]*\}/)) {
      // It's safer to just let the script check `otherServices`. I saw they all use `otherServices`.
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
