const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        filelist = walkSync(dir + '/' + file, filelist);
      }
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(dir + '/' + file);
      }
    }
  });
  return filelist;
};

const files = walkSync('./app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // If file contains "use client" or 'use client', move it to the very top.
  if (content.includes('"use client"') || content.includes("'use client'")) {
    const lines = content.split('\n');
    let useClientIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '"use client"' || lines[i].trim() === "'use client'" || lines[i].trim() === '"use client";' || lines[i].trim() === "'use client';") {
        useClientIndex = i;
        break;
      }
    }
    if (useClientIndex > 0) {
      const useClientLine = lines[useClientIndex];
      lines.splice(useClientIndex, 1);
      lines.unshift(useClientLine);
      content = lines.join('\n');
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed use client in:', file);
    }
  }
});
