# PPC Compliance & Pricing Cleanup Status Report

This report outlines the current status of the bathroom remodeling website's optimization for Pay-Per-Call conversions and LeadsMarket compliance. The goal is the **100% elimination of all service pricing dollar amounts (both numbers and spelled-out figures)** across all sub-pages, location pages, service pages, cost guides, and metadata, replacing them with qualitative project scopes and direct calls-to-action (CTAs).

---

## 1. Work Completed (Files Edited)

The following files have been successfully edited to remove pricing figures and replace them with qualitative descriptors ("Standard Level", "Mid-Range Scope", "Luxury Custom Scope") and "Free Custom Estimate" totals:

### **Cost Guides & Service Pages**
*   **[tub-to-shower-conversion-cost/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/tub-to-shower-conversion-cost/page.tsx)**:
    *   Removed starting price FAQ ranges (e.g., "$6,000 to $14,000", "$600 to $1,500").
    *   Replaced all prices in the `pricingData` package breakdown table with qualitative scopes (e.g., "Standard Level", "Mid-Range Scope", "Luxury Custom Scope") and set estimated totals to "Free Custom Estimate".
    *   Scrubbed price numbers from `costFactors` details (e.g., "$500–$2,500", "$1,000 to $2,500").
    *   Renamed the ServiceHero title to "Tub-to-Shower Conversion Guide (Project Scopes)".
*   **[walk-in-shower-cost/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/walk-in-shower-cost/page.tsx)**:
    *   Removed all specific dollar amounts from the shower installation FAQs (e.g., "$6,000 to $13,500", "$1,500 to $3,000").
    *   Updated the `pricingData` package breakdown table to use qualitative scopes ("Standard Level", "Mid-Range Scope", "Luxury Custom Scope") and set totals to "Free Custom Estimate".
    *   Removed pricing references and the subjective "cheapest option" claim from `costFactors`.
    *   Renamed the ServiceHero title to "Walk-In Shower Guide (Project Scopes)".
*   **[app/blog/tub-to-shower-conversion-chandler-az-guide/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/blog/tub-to-shower-conversion-chandler-az-guide/page.tsx)**:
    *   Replaced pricing tables and FAQ ranges in the blog post body with qualitative scopes.

### **Dynamic Layouts & Routing**
*   **[[slug]/location-page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/[slug]/location-page.tsx)**:
    *   Scrubbed the spelled-out dollar amounts (e.g., "ten thousand to eighteen thousand dollars", "twenty five thousand to seventy five thousand dollars") from dynamic FAQ answers, replacing them with qualitative scope descriptions.
*   **[chandler-zip-faqs.ts](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/lib/chandler-zip-faqs.ts)**:
    *   Replaced hardcoded price ranges (e.g., "$10,000–$18,000", "$25,000–$55,000+") on line 12 with a message emphasizing customized estimates.

### **Blog Content Database (Seed Script)**
*   **[seed-blog.ts](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/lib/seed-blog.ts)**:
    *   Replaced all hardcoded pricing tables, ranges, and factors across 12 separate blog posts (including `post_1`, `post_3`, `post_7`, `post_9`, `post_11`, `post_12`, `post_14`, `post_15`, `post_17`, `post_18`, `post_20`, and `post_21`) with qualitative descriptions and "Free Custom Estimate" / "Contact for Estimate" scopes.

### **Hub & Info Pages**
*   **[app/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/page.tsx)**:
    *   Removed the `PriceSchema` metadata block and imports to eliminate hidden pricing values from search engine index tags.
*   **[bathroom-remodeling-ocotillo/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/bathroom-remodeling-ocotillo/page.tsx)**:
    *   Cleared all dollar prices from Ocotillo FAQs and services listings.
*   **[bathroom-remodeling-permits-chandler/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/bathroom-remodeling-permits-chandler/page.tsx)**:
    *   Removed municipal permit fee dollar ranges ($250 to $800) and described the fee calculations qualitatively.

### **Service Content Data**
*   **[service-content-data.ts](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/lib/service-content-data.ts)**:
    *   Removed dollar prices from the bathroom remodeling, shower glass, and whole-home renovation FAQ answers, replacing them with qualitative scope descriptions and estimate CTAs.

### **Components**
*   **[components/home/financing.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/components/home/financing.tsx)**:
    *   Removed the hardcoded "$5,000" project threshold, keeping financing details generic.
*   **[components/seo/json-ld.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/components/seo/json-ld.tsx)**:
    *   Removed the `offers` schema block containing pricing ranges ($12,500 - $38,000) from `ServiceSchema` to ensure no metadata pricing leaks.
*   **[components/shower-cost-section.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/components/shower-cost-section.tsx)**:
    *   Replaced all price ranges with qualitative categories ("Standard Level", "Mid-Range Scope", "Luxury Custom Scope") and updated the header from "Typical Range" to "Project Scope".

---

## 2. Remaining Work (Files left to edit)

Only **one component file** containing active service pricing ranges remains to be updated:

### 🔴 **[components/shower-types.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/components/shower-types.tsx)** (Lines 19, 25, 31, 37, 43, 49)
*   This file still contains hardcoded price ranges:
    *   Line 19: `priceRange: "$6,500–$14,000",`
    *   Line 25: `priceRange: "$1,800–$4,500",`
    *   Line 31: `priceRange: "$8,000–$14,000",`
    *   Line 37: `priceRange: "$5,500–$12,000",`
    *   Line 43: `priceRange: "$3,500–$6,500",`
    *   Line 49: `priceRange: "$10,000–$18,000+",`
*   **Action Required**: Replace these price ranges with qualitative scopes (e.g. "Standard", "Custom", "Luxury").

---

## 3. Reviewed and Deemed Compliant

The following files contain the `$` sign but do not require editing:
*   **[app/careers/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/careers/page.tsx)**: Salary ranges (e.g., "$50,000 - $70,000/year") for employment posts (compliant because they are not service prices).
*   **[app/terms-of-service/page.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/app/terms-of-service/page.tsx)**: A legal contract threshold ("for all projects exceeding $500") which is compliant.
*   **[components/seo/json-ld.tsx](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/components/seo/json-ld.tsx)** (Line 423): Comment code describing type interface properties (`priceRange?: string; // e.g., "$15,000 - $45,000"`).
*   **[lib/blog-utils.ts](file:///c:/Users/DELL/Desktop/arz-remodeling/bathroom-remodelings/lib/blog-utils.ts)** (Line 7): Regex syntax backreference (`$1`).

---

## 4. Next Steps for Completion

1.  **Edit `components/shower-types.tsx`**: Change the hardcoded `priceRange` properties to qualitative descriptors (e.g. "Standard", "Custom", "Luxury").
2.  **Run Compilation Build**:
    ```powershell
    npm run build
    ```
    This verifies that all changes compile successfully and generates the static HTML files in the `out/` folder.
3.  **Run Webmaster Guidelines Audit**:
    ```powershell
    node scripts/bing-guidelines-audit.mjs
    ```
    This verifies that the site remains 100% compliant with standard SEO and search guidelines.
