import { submitToIndexNow } from "@/lib/indexnow";

/**
 * Fetches all URLs from the sitemap and submits them to IndexNow.
 * This file is server-only and should only be used in build scripts or cron jobs.
 */
export async function submitSitemapToIndexNow(): Promise<boolean> {
  try {
    console.log("[IndexNow] Starting sitemap submission...");
    const sitemapModule = await import("@/app/sitemap");
    const sitemap = sitemapModule.default;
    const sitemapEntries = sitemap();
    const urls = sitemapEntries.map(entry => entry.url);
    
    // Batch in groups of 100
    let success = true;
    for (let i = 0; i < urls.length; i += 100) {
      const batch = urls.slice(i, i + 100);
      const batchSuccess = await submitToIndexNow(batch);
      if (!batchSuccess) success = false;
    }
    
    return success;
  } catch (error: any) {
    console.error("[IndexNow] Sitemap submission error:", error.message);
    return false;
  }
}
