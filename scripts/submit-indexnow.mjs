/**
 * Microsoft IndexNow Bulk URL Submission Script
 * 
 * This script reads all URLs from the compiled sitemap.xml (in out/) 
 * and submits them in bulk to the IndexNow API using the newly configured key.
 * 
 * Usage: node scripts/submit-indexnow.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- CONFIGURATION ---
const HOST = 'arzhomeremodeling.com';
const API_KEY = 'da8afcc853004a0e818760ae4b6b668e';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_PATH = path.join(__dirname, '../out/sitemap.xml');
// ---------------------

console.log('🚀 Starting Microsoft IndexNow Bulk Submission');
console.log(`🔑 Using Key: ${API_KEY}`);
console.log(`📍 Key Location: ${KEY_LOCATION}\n`);

// Extract URLs from sitemap.xml
let urls = [];
try {
  if (fs.existsSync(SITEMAP_PATH)) {
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const locRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = locRegex.exec(sitemapContent)) !== null) {
      urls.push(match[1]);
    }
    console.log(`✓ Read ${urls.length} URLs from local sitemap: ${SITEMAP_PATH}`);
  } else {
    console.warn(`⚠️ Local sitemap not found at ${SITEMAP_PATH}`);
    console.log('🔄 Attempting to fetch live sitemap from the web...');
    
    const response = await fetch(`https://${HOST}/sitemap.xml`);
    if (response.ok) {
      const sitemapContent = await response.text();
      const locRegex = /<loc>(.*?)<\/loc>/g;
      let match;
      while ((match = locRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
      }
      console.log(`✓ Fetched ${urls.length} URLs from live sitemap.`);
    } else {
      throw new Error(`Failed to fetch sitemap: ${response.statusText}`);
    }
  }
} catch (error) {
  console.error('❌ Error reading sitemap:', error.message);
  process.exit(1);
}

if (urls.length === 0) {
  console.error('❌ No URLs found to submit.');
  process.exit(1);
}

// Clean up duplicate or empty URLs
urls = [...new Set(urls)].filter(url => url && url.startsWith('http'));
console.log(`📊 Unique URLs prepared for submission: ${urls.length}\n`);

// Batch submission in chunks of 100 as per IndexNow guidelines
const BATCH_SIZE = 100;
let successCount = 0;
let failCount = 0;

for (let i = 0; i < urls.length; i += BATCH_SIZE) {
  const batch = urls.slice(i, i + BATCH_SIZE);
  console.log(`📤 Submitting batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} URLs)...`);

  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: batch
  };

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ Batch ${Math.floor(i / BATCH_SIZE) + 1} submitted successfully! (HTTP ${response.status})`);
      successCount += batch.length;
    } else {
      const errorText = await response.text();
      console.error(`❌ Batch failed (HTTP ${response.status}):`, errorText);
      failCount += batch.length;
    }
  } catch (error) {
    console.error(`❌ Network error submitting batch:`, error.message);
    failCount += batch.length;
  }
}

console.log('\n=============================================');
console.log('📈 SUBMISSION SUMMARY');
console.log('=============================================');
console.log(`Total URLs:       ${urls.length}`);
console.log(`Successfully Sent: ${successCount} ✅`);
console.log(`Failed:           ${failCount} ❌`);
console.log('=============================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 IndexNow Submission Completed Successfully!');
  process.exit(0);
}
