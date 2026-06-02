/**
 * Bing Webmaster Guidelines Automated Compliance Audit Script
 * 
 * This script scans all compiled HTML pages in the `out/` directory and validates
 * compliance with the Bing Webmaster Guidelines (Canonicalization, Title/Meta, 
 * Heading Hierarchy, Alt tags, crawlable links, and thin content).
 * 
 * Run: node scripts/bing-guidelines-audit.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.join(__dirname, '../out');

console.log('🔍 STARTING BING WEBMASTER GUIDELINES COMPLIANCE AUDIT\n');
console.log('='.repeat(80));

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

const htmlFiles = getHtmlFiles(OUT_DIR);
console.log(`📊 Found ${htmlFiles.length} HTML files to inspect in: ${OUT_DIR}\n`);

let totalPages = 0;
let cleanPages = 0;
let pageViolationsCount = 0;
const reports = [];

htmlFiles.forEach(filePath => {
  const relPath = path.relative(OUT_DIR, filePath);
  
  // Skip admin pages from standard search compliance rules since they are disallowed in robots.txt
  if (relPath.startsWith('admin') || relPath.includes('admin/')) {
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip 404 pages and pages marked as noindex
  if (relPath.includes('404') || 
      content.includes('content="noindex') || 
      content.includes('name="robots" content="noindex')) {
    return;
  }
  
  totalPages++;
  const violations = [];

  // 1. Canonical Verification (Guideline 6: Consolidate Duplicate URLs)
  const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  if (!canonicalMatch) {
    violations.push({
      rule: 'Consolidate Duplicate URLs',
      severity: 'HIGH',
      description: 'Missing `<link rel="canonical">` tag'
    });
  } else {
    const href = canonicalMatch[1];
    if (!href.startsWith('https://arzhomeremodeling.com')) {
      violations.push({
        rule: 'Consolidate Duplicate URLs',
        severity: 'HIGH',
        description: `Canonical URL is not absolute or points to wrong domain: "${href}"`
      });
    }
  }

  // 2. Title Tag Verification (Guideline 13: Structure Content Using HTML)
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch) {
    violations.push({
      rule: 'HTML Content Structure',
      severity: 'HIGH',
      description: 'Missing `<title>` tag'
    });
  } else {
    const titleText = titleMatch[1].trim();
    if (titleText.length < 25) {
      violations.push({
        rule: 'HTML Content Structure',
        severity: 'MEDIUM',
        description: `Title too short (${titleText.length} chars): "${titleText}"`
      });
    } else if (titleText.length > 70) {
      violations.push({
        rule: 'HTML Content Structure',
        severity: 'MEDIUM',
        description: `Title too long (${titleText.length} chars): "${titleText}"`
      });
    }
  }

  // 3. Meta Description Verification (Guideline 13: Structure Content Using HTML)
  const metaDescMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i) || 
                         content.match(/<meta\s+content=["']([\s\S]*?)["']\s+name=["']description["']/i);
  if (!metaDescMatch) {
    violations.push({
      rule: 'HTML Content Structure',
      severity: 'HIGH',
      description: 'Missing `<meta name="description">`'
    });
  } else {
    const descText = metaDescMatch[1].trim();
    if (descText.length < 70) {
      violations.push({
        rule: 'HTML Content Structure',
        severity: 'MEDIUM',
        description: `Meta description too short (${descText.length} chars)`
      });
    } else if (descText.length > 170) {
      violations.push({
        rule: 'HTML Content Structure',
        severity: 'MEDIUM',
        description: `Meta description too long (${descText.length} chars)`
      });
    }
  }

  // 4. Heading Hierarchy (Guideline 13: Structure Content Using HTML)
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length === 0) {
    violations.push({
      rule: 'HTML Heading Hierarchy',
      severity: 'HIGH',
      description: 'Missing `<h1>` heading'
    });
  } else if (h1Matches.length > 1) {
    violations.push({
      rule: 'HTML Heading Hierarchy',
      severity: 'MEDIUM',
      description: `Multiple <h1> headings found (${h1Matches.length} instances)`
    });
  }

  // 5. Image Accessibility / Alt tags (Guideline 12: Optimize Images and Video)
  const imgTags = content.match(/<img[\s\S]*?>/gi) || [];
  let missingAltCount = 0;
  imgTags.forEach(img => {
    // Check if alt attribute is missing or empty
    const hasAltAttr = /alt\s*=\s*["']/i.test(img);
    const isEmptyAlt = /alt\s*=\s*["']["']/i.test(img);
    if (!hasAltAttr || isEmptyAlt) {
      // Exclude simple icon components if they are decorative, but flag major images
      if (!img.includes('icon') && !img.includes('logo') && !img.includes('badge')) {
        missingAltCount++;
      }
    }
  });
  if (missingAltCount > 0) {
    violations.push({
      rule: 'Optimize Images and Video',
      severity: 'MEDIUM',
      description: `Found ${missingAltCount} image(s) missing alt text`
    });
  }

  // 6. Crawlable links (Guideline 5: Use Links for Structure)
  const links = content.match(/<a\b[\s\S]*?>/gi) || [];
  let uncrawlableLinkCount = 0;
  const uncrawlableList = [];
  links.forEach(link => {
    const hrefMatch = link.match(/href\s*=\s*["'](.*?)["']/i);
    if (!hrefMatch) {
      uncrawlableLinkCount++;
      uncrawlableList.push(link);
    } else {
      const href = hrefMatch[1].trim();
      if (href === '' || href.startsWith('javascript:') || href === '#') {
        // Only count if it looks like an active element that should be crawlable
        if (!link.includes('role="button"') && !link.includes('aria-hidden')) {
          uncrawlableLinkCount++;
          uncrawlableList.push(link);
        }
      }
    }
  });
  if (uncrawlableLinkCount > 0) {
    violations.push({
      rule: 'Link Crawlability',
      severity: 'MEDIUM',
      description: `Found ${uncrawlableLinkCount} non-crawlable link(s): ${uncrawlableList.map(l => l.replace(/</g, '&lt;').replace(/>/g, '&gt;')).join(', ')}`
    });
  }

  // 7. Content Quality / Thin Content (Guideline 11: Clear, Focused, Useful Content)
  // Strip HTML tags to get approximate word count
  const textContent = content.replace(/<script[\s\S]*?<\/script>/gi, '')
                             .replace(/<style[\s\S]*?<\/style>/gi, '')
                             .replace(/<[\s\S]*?>/g, ' ')
                             .replace(/\s+/g, ' ')
                             .trim();
  const words = textContent.split(' ').filter(w => w.length > 0);
  if (words.length < 250) {
    violations.push({
      rule: 'Avoid Thin Content',
      severity: 'HIGH',
      description: `Thin content detected (${words.length} words, recommend > 300)`
    });
  }

  if (violations.length > 0) {
    pageViolationsCount++;
    reports.push({
      file: relPath,
      violations
    });
  } else {
    cleanPages++;
  }
});

console.log('='.repeat(80));
console.log('\n📊 AUDIT STATISTICS:\n');
console.log(`Total Pages Screened:    ${totalPages}`);
console.log(`Fully Compliant Pages:   ${cleanPages} ✅`);
console.log(`Pages with Violations:   ${pageViolationsCount} ⚠️`);
console.log(`Compliance Rate:         ${((cleanPages / totalPages) * 100).toFixed(2)}%`);
console.log('\n' + '='.repeat(80));

// Output detailed violations in Markdown format
if (reports.length > 0) {
  console.log('\n⚠️ DETAILED VIOLATIONS REPORT:\n');
  reports.forEach(r => {
    console.log(`📄 Page: ${r.file}`);
    r.violations.forEach(v => {
      console.log(`   [${v.severity}] Rule: ${v.rule} - ${v.description}`);
    });
    console.log('');
  });
  
  // Write report to markdown file in the workspace
  const reportPath = path.join(__dirname, 'bing-guidelines-audit-report.md');
  let mdContent = `# Bing Webmaster Guidelines Compliance Audit Report\n\n`;
  mdContent += `**Date:** ${new Date().toISOString().split('T')[0]}\n`;
  mdContent += `**Total Pages Audited:** ${totalPages}\n`;
  mdContent += `**Fully Compliant:** ${cleanPages} ✅\n`;
  mdContent += `**With Violations:** ${pageViolationsCount} ⚠️\n`;
  mdContent += `**Compliance Rate:** ${((cleanPages / totalPages) * 100).toFixed(2)}%\n\n`;
  mdContent += `## Detailed Page Violations\n\n`;
  
  reports.forEach(r => {
    mdContent += `### [${r.file}](file:///${path.join(OUT_DIR, r.file).replace(/\\/g, '/')})\n`;
    r.violations.forEach(v => {
      const emoji = v.severity === 'HIGH' ? '🔴' : '🟡';
      mdContent += `- ${emoji} **[${v.severity}]** *Rule: ${v.rule}* - ${v.description}\n`;
    });
    mdContent += `\n`;
  });
  
  fs.writeFileSync(reportPath, mdContent, 'utf8');
  console.log(`\n📝 Generated detailed markdown report at: ${reportPath}`);
} else {
  console.log('\n🎉 ALL PAGES FULLY COMPLY WITH BING WEBMASTER GUIDELINES!');
}
