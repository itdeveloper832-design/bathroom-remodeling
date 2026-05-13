import axios from "axios";
import { siteConfig } from "./site-config";


const INDEXNOW_API_URL = "https://api.indexnow.org/indexnow";
const API_KEY = "82d2e4a5c3f04f53a18605d9cb430c1a";
const HOST = "arzhomeremodeling.com";
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

/**
 * Submits a list of URLs to the IndexNow API.
 * @param urls A single URL or an array of URLs to submit.
 * @param retry Whether to retry once on failure.
 */
export async function submitToIndexNow(urls: string | string[], retry = true): Promise<boolean> {
  const urlList = Array.isArray(urls) ? urls : [urls];
  
  // Ensure absolute URLs and remove duplicates
  const uniqueUrls = [...new Set(urlList)]
    .map(url => url.startsWith("http") ? url : `${siteConfig.url}${url.startsWith("/") ? "" : "/"}${url}`)
    .slice(0, 100);
  
  if (uniqueUrls.length === 0) {
    console.log("[IndexNow] No URLs to submit.");
    return true;
  }

  // If we are in a browser environment, call the PHP script as a fallback 
  // since Node.js API routes might not be available in a static export.
  if (typeof window !== "undefined") {
    try {
      for (const url of uniqueUrls) {
        await fetch(`/submit-indexnow.php?url=${encodeURIComponent(url)}`);
      }
      return true;
    } catch (e) {
      console.error("[IndexNow] Browser-side submission failed, falling back to direct API call.", e);
    }
  }

  const data = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: uniqueUrls,
  };

  try {
    console.log(`[IndexNow] Submitting ${uniqueUrls.length} URLs to IndexNow...`);
    const response = await axios.post(INDEXNOW_API_URL, data, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    
    if (response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Success! Submitted: ${uniqueUrls.join(", ")}`);
      return true;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error: any) {
    console.error(`[IndexNow] Submission failed:`, error.response?.data || error.message);
    
    if (retry) {
      console.log(`[IndexNow] Retrying submission...`);
      return submitToIndexNow(uniqueUrls, false);
    }
    
    return false;
  }
}


