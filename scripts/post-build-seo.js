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
  
  // 1. Find all JSON-LD scripts
  const schemaRegex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  const schemas = [];
  let match;
  
  // Collect all unique schemas in the file
  while ((match = schemaRegex.exec(content)) !== null) {
    schemas.push(match[0]);
  }
  
  if (schemas.length === 0) return;
  
  // 2. Remove all JSON-LD scripts from their original locations
  let cleanedContent = content.replace(schemaRegex, '');
  
  // 3. Remove any empty nested head tags like <head></head> or <head/> that might have been rendered by React
  cleanedContent = cleanedContent.replace(/<head\s*>\s*<\/head\s*>/gi, '');
  cleanedContent = cleanedContent.replace(/<head\s*\/>/gi, '');
  
  // 4. Find the main closing </head> tag of the document
  const headEndIdx = cleanedContent.indexOf('</head>');
  if (headEndIdx === -1) {
    console.warn(`[Warning] </head> tag not found in ${filePath}`);
    return;
  }
  
  // 5. Format all gathered schemas uniquely (prevent duplicates)
  const uniqueSchemas = Array.from(new Set(schemas));
  const schemaBlock = '\n' + uniqueSchemas.join('\n') + '\n';
  
  // 6. Inject the unified schema block into the main head section right before </head>
  const finalContent = 
    cleanedContent.substring(0, headEndIdx) + 
    schemaBlock + 
    cleanedContent.substring(headEndIdx);
  
  fs.writeFileSync(filePath, finalContent, 'utf8');
  console.log(`Successfully hoisted ${uniqueSchemas.length} schema(s) into <head> for: ${path.relative(outDir, filePath)}`);
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
