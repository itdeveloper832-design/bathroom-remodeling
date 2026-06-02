const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

function getHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getHtmlFiles(fullPath, files);
    } else if (file.endsWith('.html')) {
      files.push(fullPath);
    }
  });
  return files;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let cleanedContent = content;

  // 1. Find and hoist all JSON-LD scripts if any exist
  const schemaRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  const schemas = [];
  let match;
  
  while ((match = schemaRegex.exec(content)) !== null) {
    schemas.push(match[0]);
  }
  
  if (schemas.length > 0) {
    // Remove all JSON-LD scripts from their original locations
    cleanedContent = cleanedContent.replace(schemaRegex, '');
  }
  
  // 2. Remove any empty nested head tags like <head></head> or <head/> that might have been rendered by React
  cleanedContent = cleanedContent.replace(/<head\s*>\s*<\/head\s*>/gi, '');
  cleanedContent = cleanedContent.replace(/<head\s*\/>/gi, '');

  // 3. Optimize HTML Title (Guideline 13: Title Tag Length)
  const titleRegex = /<title>([\s\S]*?)<\/title>/gi;
  cleanedContent = cleanedContent.replace(titleRegex, (match, titleText) => {
    let text = titleText.trim();
    
    // Replace the long default suffix with a shorter, elegant branding suffix to save 15+ characters
    if (text.includes(' - ARZ - ARZ Home Remodeling')) {
      text = text.replace(' - ARZ - ARZ Home Remodeling', ' - ARZ');
    } else if (text.includes(' - ARZ Home Remodeling')) {
      text = text.replace(' - ARZ Home Remodeling', ' - ARZ');
    } else if (text.includes(' | ARZ Home Remodeling')) {
      text = text.replace(' | ARZ Home Remodeling', ' - ARZ');
    }
    
    // Clean double-phrasing errors or redundancy
    text = text.replace(/Upgrades &amp; Upgrades/gi, 'Upgrades');
    text = text.replace(/Walk-in Showers &amp; Walk-In Showers/gi, 'Walk-In Showers');
    text = text.replace(/Bathroom Remodeling Timeline Chandler AZ\s+-/gi, 'Bathroom Remodel Timeline Chandler -');
    
    // Truncate elegantly if still too long (> 65 chars of plain text)
    let plainText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    if (plainText.length > 65) {
      text = text.replace(/\s*-\s*Professional Services?/gi, '');
      text = text.replace(/\s*-\s*Professional Installation/gi, '');
      text = text.replace(/\s*-\s*Modern Upgrades/gi, '');
      text = text.replace(/\s*-\s*Custom Builders?/gi, '');
      text = text.replace(/\s*-\s*Quality Craftsmanship/gi, '');
      
      // Recalculate plain text length
      plainText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    }
    
    if (plainText.length > 65) {
      // Decode, truncate, re-encode
      let temp = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      temp = temp.substring(0, 62) + '...';
      text = temp.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    return `<title>${text}</title>`;
  });

  // 4. Optimize Meta Description (Guideline 13: Meta Description Length)
  const descRegex = /(<meta\s+name=["']description["']\s+content=["'])([\s\S]*?)(["'])/gi;
  cleanedContent = cleanedContent.replace(descRegex, (match, prefix, descText, suffix) => {
    let text = descText.trim();
    if (text.length > 160) {
      const sub = text.substring(0, 157);
      const lastSpace = sub.lastIndexOf(' ');
      if (lastSpace > 120) {
        text = sub.substring(0, lastSpace) + '...';
      } else {
        text = sub + '...';
      }
    }
    return `${prefix}${text}${suffix}`;
  });
  
  // 5. Inject hoisted schemas if they exist, placing them right before </head>
  if (schemas.length > 0) {
    const headEndIdx = cleanedContent.indexOf('</head>');
    if (headEndIdx !== -1) {
      const uniqueSchemas = Array.from(new Set(schemas));
      const schemaBlock = '\n' + uniqueSchemas.join('\n') + '\n';
      cleanedContent = 
        cleanedContent.substring(0, headEndIdx) + 
        schemaBlock + 
        cleanedContent.substring(headEndIdx);
      console.log(`Successfully hoisted ${uniqueSchemas.length} schema(s) and optimized metadata for: ${path.relative(outDir, filePath)}`);
    } else {
      console.warn(`[Warning] </head> tag not found in ${filePath}, saving optimized metadata only`);
    }
  } else {
    console.log(`Successfully optimized metadata for: ${path.relative(outDir, filePath)}`);
  }
  
  fs.writeFileSync(filePath, cleanedContent, 'utf8');
}

console.log('--- Running Post-Build SEO Schema Hoisting ---');
const htmlFiles = getHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} HTML files to process.`);

htmlFiles.forEach(file => {
  try {
    processFile(file);
  } catch (err) {
    console.error(`Error processing file ${file}:`, err);
  }
});
console.log('--- Post-Build SEO Schema Hoisting Completed ---');
