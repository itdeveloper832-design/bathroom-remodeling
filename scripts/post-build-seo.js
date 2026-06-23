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

const CRITICAL_CSS = `
/* CRITICAL INLINED CSS TO PREVENT FOUC AND ACCELERATE FCP/LCP */
:root {
  --background: #FFFFFF;
  --foreground: #222222;
  --primary: #1A2E4A;
  --accent: #C9972B;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 112px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
  margin: 0;
}
* {
  box-sizing: border-box;
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: var(--foreground);
  color: var(--background);
  height: 40px;
  display: flex;
  align-items: center;
}
header {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 40;
  background-color: var(--background);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  align-items: center;
}
@media (min-width: 1024px) {
  header {
    height: 72px;
  }
}
main section[aria-label="Hero section"], section.hero {
  position: relative;
  min-height: 75vh;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #FFFFFF;
  padding-top: 6rem;
}
@media (min-width: 768px) {
  main section[aria-label="Hero section"], section.hero {
    padding-top: 7rem;
  }
}
@media (min-width: 1024px) {
  main section[aria-label="Hero section"], section.hero {
    padding-top: 8rem;
  }
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(26, 46, 74, 0.75);
}
@media (min-width: 1024px) {
  .hero-overlay {
    background-color: rgba(26, 46, 74, 0.70);
  }
}
.hero-container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 10;
  padding-top: 3rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: center;
}
@media (min-width: 1024px) {
  .hero-container {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 4rem;
    padding-bottom: 5rem;
  }
}
.hero-content {
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
@media (min-width: 768px) {
  .hero-badges {
    font-size: 0.875rem;
  }
}
.badge-gold {
  background-color: var(--accent);
  color: #1A2E4A;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.badge-glass {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.hero-title {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: #FFFFFF;
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}
@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}
@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
}
.hero-subtitle {
  font-size: 1.125rem;
  color: var(--accent);
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  margin-bottom: 1.5rem;
  line-height: 1.625;
  font-weight: 600;
  font-style: italic;
  max-width: 42rem;
}
@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 1.25rem;
  }
}
.hero-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.625;
  font-weight: 300;
  max-width: 48rem;
}
@media (min-width: 768px) {
  .hero-description {
    font-size: 1.125rem;
  }
}
.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  align-items: center;
}
@media (min-width: 640px) {
  .hero-buttons {
    flex-direction: row;
    width: auto;
  }
}
.hero-btn-primary {
  background-color: var(--accent);
  color: #1A2E4A;
  font-size: 1.125rem;
  padding: 1.75rem 2rem;
  font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  line-height: 1;
}
.hero-btn-secondary {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: underline;
  transition: color 0.2s;
  padding: 0.5rem 1rem;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let cleanedContent = content;

  // 0. Inline local stylesheets if under threshold, otherwise defer them to improve FCP/LCP
  const linkRegex = /<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']stylesheet["'][^>]*\/?>|<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi;
  const MAX_INLINE_CSS_SIZE = 15360; // 15 KB threshold
  let hasDeferredCss = false;
  
  cleanedContent = cleanedContent.replace(linkRegex, (match, href1, href2) => {
    const href = href1 || href2;
    if (href && href.startsWith('/')) {
      const localPath = path.join(outDir, href);
      if (fs.existsSync(localPath)) {
        const stats = fs.statSync(localPath);
        if (stats.size <= MAX_INLINE_CSS_SIZE) {
          const cssContent = fs.readFileSync(localPath, 'utf8');
          console.log(`Inlining CSS: ${href} (${(stats.size/1024).toFixed(1)} KB) into ${path.relative(outDir, filePath)}`);
          return `<style data-inlined="true">${cssContent}</style>`;
        } else {
          console.log(`Keeping CSS (deferring loading): ${href} (${(stats.size/1024).toFixed(1)} KB) in ${path.relative(outDir, filePath)}`);
          hasDeferredCss = true;
          return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      }
    }
    return match;
  });

  // Remove preloads for inlined stylesheets, adjust for deferred
  const preloadRegex = /<link\s+[^>]*rel=["']preload["'][^>]*as=["']style["'][^>]*href=["']([^"']+)["'][^>]*\/?>|<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']preload["'][^>]*as=["']style["'][^>]*\/?>|<link\s+[^>]*as=["']style["'][^>]*rel=["']preload["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi;
  cleanedContent = cleanedContent.replace(preloadRegex, (match, href1, href2, href3) => {
    const href = href1 || href2 || href3;
    if (href && href.startsWith('/')) {
      const localPath = path.join(outDir, href);
      if (fs.existsSync(localPath)) {
        const stats = fs.statSync(localPath);
        if (stats.size <= MAX_INLINE_CSS_SIZE) {
          console.log(`Removing CSS preload (inlined): ${href} in ${path.relative(outDir, filePath)}`);
          return '';
        } else {
          console.log(`Keeping CSS preload (deferred): ${href} in ${path.relative(outDir, filePath)}`);
        }
      }
    }
    return match;
  });

  // Inject critical styles block if large stylesheet was deferred
  if (hasDeferredCss) {
    const headEndIdx = cleanedContent.indexOf('</head>');
    if (headEndIdx !== -1) {
      cleanedContent = 
        cleanedContent.substring(0, headEndIdx) + 
        `\n<style data-critical="true">${CRITICAL_CSS}</style>\n` + 
        cleanedContent.substring(headEndIdx);
    }
  }

  // Preload LCP hero images (fetchpriority="high")
  const imgRegex = /<img\s+[^>]*fetch[pP]riority=["']high["'][^>]*>/gi;
  const lcpMatches = cleanedContent.match(imgRegex);
  if (lcpMatches) {
    lcpMatches.forEach(tag => {
      const srcMatch = tag.match(/src=["']([^"']+)["']/i);
      if (srcMatch) {
        const src = srcMatch[1];
        // Only preload if it's not already preloaded in some other way
        if (!cleanedContent.includes(`href="${src}"`) || !cleanedContent.includes('rel="preload"')) {
          console.log(`Injecting image preload for LCP resource: ${src} in ${path.relative(outDir, filePath)}`);
          const headEndIdx = cleanedContent.indexOf('</head>');
          if (headEndIdx !== -1) {
            let preloadTag = `<link rel="preload" as="image" href="${src}" fetchpriority="high">`;
            if (src === '/images/hero/luxury-shower-remodel-chandler.avif') {
              const fs = require('fs');
              const path = require('path');
              let base64MobileHero = "";
              try {
                const filePath = path.join(__dirname, '../public/images/hero/luxury-shower-remodel-chandler-640.avif');
                if (fs.existsSync(filePath)) {
                  base64MobileHero = `data:image/avif;base64,${fs.readFileSync(filePath).toString('base64')}`;
                }
              } catch (e) {
                console.error("Failed to read image in post-build-seo:", e.message);
              }
              const mobileSrc = base64MobileHero || "/images/hero/luxury-shower-remodel-chandler-640.avif";
              preloadTag = `<link rel="preload" as="image" href="${src}" imagesrcset="${mobileSrc} 640w, /images/hero/luxury-shower-remodel-chandler-828.avif 828w, /images/hero/luxury-shower-remodel-chandler.avif 1200w" imagesizes="100vw" fetchpriority="high">`;
            }
            cleanedContent = 
              cleanedContent.substring(0, headEndIdx) + 
              `\n${preloadTag}\n` + 
              cleanedContent.substring(headEndIdx);
          }
        }
      }
    });
  }

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

  // 3. Optimize HTML Title (Enforce under 60 characters)
  let finalTitle = "";
  let finalDesc = "";

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
    
    // Truncate elegantly if still too long (>= 60 chars of plain text)
    let plainText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    if (plainText.length >= 60) {
      text = text.replace(/\s*-\s*Professional Services?/gi, '');
      text = text.replace(/\s*-\s*Professional Installation/gi, '');
      text = text.replace(/\s*-\s*Modern Upgrades/gi, '');
      text = text.replace(/\s*-\s*Custom Builders?/gi, '');
      text = text.replace(/\s*-\s*Quality Craftsmanship/gi, '');
      text = text.replace(/\s*-\s*ARZ/g, ''); // strip branding if it makes it too long
      
      // Recalculate plain text length
      plainText = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    }
    
    if (plainText.length >= 60) {
      // Decode, truncate, re-encode to ensure it fits under 60 characters
      let temp = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      temp = temp.substring(0, 56) + '...';
      text = temp.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    
    finalTitle = text;
    return `<title>${text}</title>`;
  });

  // 4. Optimize Meta Description (Enforce between 120 and 158 characters)
  const descRegex = /(<meta\s+name=["']description["']\s+content=["'])([\s\S]*?)(["'])/gi;
  cleanedContent = cleanedContent.replace(descRegex, (match, prefix, descText, suffix) => {
    let text = descText.trim();
    
    // If it's too short, pad it elegantly
    if (text.length < 120) {
      const padding = " Licensed, bonded, and insured bathroom remodelers. Call for a free estimate today!";
      text = (text + padding).substring(0, 155);
    }
    
    // If it's too long, truncate it
    if (text.length > 158) {
      const sub = text.substring(0, 155);
      const lastSpace = sub.lastIndexOf(' ');
      if (lastSpace > 120) {
        text = sub.substring(0, lastSpace) + '...';
      } else {
        text = sub + '...';
      }
    }
    
    // Double check that it meets the min-length of 120 after truncation
    if (text.length < 120) {
      text = descText.trim().substring(0, 155) + '...';
    }
    
    finalDesc = text;
    return `${prefix}${text}${suffix}`;
  });

  // 4b. Sync OG & Twitter Title Meta Tags
  if (finalTitle) {
    const ogTitleRegex = /(<meta\s+(?:property|name)=["']og:title["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(ogTitleRegex, (match, prefix, content, suffix) => {
      return `${prefix}${finalTitle}${suffix}`;
    });
    const twitterTitleRegex = /(<meta\s+(?:property|name)=["']twitter:title["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(twitterTitleRegex, (match, prefix, content, suffix) => {
      return `${prefix}${finalTitle}${suffix}`;
    });
  }

  // 4c. Sync OG & Twitter Description Meta Tags
  if (finalDesc) {
    const ogDescRegex = /(<meta\s+(?:property|name)=["']og:description["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(ogDescRegex, (match, prefix, content, suffix) => {
      return `${prefix}${finalDesc}${suffix}`;
    });
    const twitterDescRegex = /(<meta\s+(?:property|name)=["']twitter:description["']\s+content=["'])([\s\S]*?)(["'])/gi;
    cleanedContent = cleanedContent.replace(twitterDescRegex, (match, prefix, content, suffix) => {
      return `${prefix}${finalDesc}${suffix}`;
    });
  }
  
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
