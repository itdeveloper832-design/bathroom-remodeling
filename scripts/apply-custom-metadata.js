const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const workspaceDir = path.join(__dirname, '..');
const excelPath = path.join(workspaceDir, 'ARZ_Custom_Meta.xlsx');
const blogOverridesPath = path.join(workspaceDir, 'lib/blog-metadata-overrides.json');
const locationOverridesPath = path.join(workspaceDir, 'lib/location-metadata-overrides.json');

function findMetadataObjectRange(content) {
  const startKeyword = 'export const metadata';
  const startIdx = content.indexOf(startKeyword);
  if (startIdx === -1) return null;
  
  const openBraceIdx = content.indexOf('{', startIdx);
  if (openBraceIdx === -1) return null;
  
  let braceCount = 1;
  let i = openBraceIdx + 1;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') {
      braceCount++;
    } else if (content[i] === '}') {
      braceCount--;
    }
    i++;
  }
  
  if (braceCount === 0) {
    return {
      start: openBraceIdx,
      end: i
    };
  }
  return null;
}

try {
  const workbook = XLSX.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(sheet);

  console.log(`Loaded Excel sheet. Processing ${rows.length} rows...`);

  const blogOverrides = {};
  const locationOverrides = {};
  
  let staticPagesUpdatedCount = 0;
  let skippedCount = 0;

  rows.forEach((row) => {
    const url = row.URL;
    const optimizedTitle = row['Optimized Meta Title'];
    const optimizedDesc = row['Optimized Meta Description'];

    if (!url || !optimizedTitle || !optimizedDesc) {
      console.warn('Skipping incomplete row:', row);
      skippedCount++;
      return;
    }

    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;

    if (pathname.startsWith('/blog/')) {
      if (pathname === '/blog/') {
        // Blog index page is static
        updateStaticFile('app/blog/page.tsx', optimizedTitle, optimizedDesc);
      } else {
        // Dynamic blog post
        const slug = pathname.replace(/^\/blog\/|\/$/g, '');
        blogOverrides[slug] = {
          title: optimizedTitle,
          description: optimizedDesc
        };
      }
    } else if (pathname.startsWith('/chandler-az-')) {
      // Dynamic location landing page
      const slug = pathname.replace(/^\/chandler-az-|\/$/g, '');
      locationOverrides[slug] = {
        title: optimizedTitle,
        description: optimizedDesc
      };
    } else {
      // Static page
      let relativeFilePath;
      if (pathname === '/') {
        relativeFilePath = 'app/page.tsx';
      } else {
        const cleanPath = pathname.replace(/^\/|\/$/g, '');
        relativeFilePath = `app/${cleanPath}/page.tsx`;
      }
      
      updateStaticFile(relativeFilePath, optimizedTitle, optimizedDesc);
    }
  });

  // Write dynamic JSON overrides
  fs.writeFileSync(blogOverridesPath, JSON.stringify(blogOverrides, null, 2), 'utf8');
  console.log(`Wrote blog overrides map to: lib/blog-metadata-overrides.json (${Object.keys(blogOverrides).length} posts)`);
  
  fs.writeFileSync(locationOverridesPath, JSON.stringify(locationOverrides, null, 2), 'utf8');
  console.log(`Wrote location overrides map to: lib/location-metadata-overrides.json (${Object.keys(locationOverrides).length} locations)`);

  console.log(`\nUpdates Complete:`);
  console.log(`- Static pages updated in-place: ${staticPagesUpdatedCount}`);
  console.log(`- Dynamic blog overrides saved: ${Object.keys(blogOverrides).length}`);
  console.log(`- Dynamic location overrides saved: ${Object.keys(locationOverrides).length}`);
  console.log(`- Rows skipped/warnings: ${skippedCount}`);

  function updateStaticFile(relativeFilePath, title, description) {
    const fullPath = path.join(workspaceDir, relativeFilePath);
    if (!fs.existsSync(fullPath)) {
      console.error(`Static page file not found: ${fullPath}`);
      return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    const range = findMetadataObjectRange(content);
    if (!range) {
      // Fallback: If it's page.tsx and has no metadata block (e.g. "use client" page), check layout.tsx in the same folder
      if (relativeFilePath.endsWith('page.tsx')) {
        const layoutFilePath = relativeFilePath.replace('page.tsx', 'layout.tsx');
        const layoutFullPath = path.join(workspaceDir, layoutFilePath);
        if (fs.existsSync(layoutFullPath)) {
          console.log(`Page has "use client" or no metadata block. Falling back to layout file: ${layoutFilePath}`);
          updateStaticFile(layoutFilePath, title, description);
          return;
        }
      }
      console.warn(`Could not find metadata block in static file: ${relativeFilePath}`);
      return;
    }

    const originalMetaBlock = content.substring(range.start, range.end);
    
    // Perform regex replacements
    let updatedMetaBlock = originalMetaBlock.replace(
      /title\s*:\s*({[\s\S]*?}|"[^"]*"|'[^']*'|`[^`]*`)/,
      `title: "${title}"`
    );

    updatedMetaBlock = updatedMetaBlock.replace(
      /description\s*:\s*("[^"]*"|'[^']*'|`[^`]*`|siteConfig\.[a-zA-Z_0-9]*)/,
      `description: "${description}"`
    );

    if (originalMetaBlock === updatedMetaBlock) {
      return;
    }

    const newContent = content.substring(0, range.start) + updatedMetaBlock + content.substring(range.end);
    fs.writeFileSync(fullPath, newContent, 'utf8');
    staticPagesUpdatedCount++;
    console.log(`Successfully updated static page metadata for: ${relativeFilePath}`);
  }

} catch (err) {
  console.error('Error applying custom metadata:', err);
}
