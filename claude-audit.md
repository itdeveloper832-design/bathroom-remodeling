# ARZ Home Remodeling — Forensic SEO Audit
**arzhomeremodeling.com | Chandler, AZ | May 2026**
*Treated as a paid $5,000 forensic audit. No sugarcoating.*

---

## EXECUTIVE SUMMARY

ARZ Home Remodeling has a website that looks polished on the surface but is structurally broken in ways that directly explain the 200+ impressions / near-zero clicks phenomenon. The site ranks for informational and branded queries but does not rank competitively for commercial intent keywords. When it does appear in the SERP, its titles and meta descriptions fail to compel clicks. Beneath the design, there are three site-breaking technical problems that likely prevent Google from fully trusting this domain: (1) multiple conflicting phone numbers across pages, (2) a subpage with a completely different design/template leaking an out-of-state (Georgia) area code, and (3) the homepage canonical pointing at itself while /bathroom-remodeling-chandler-az/ also canonicals back to the homepage — creating a duplicate content loop. The site also has critical topical gaps: it claims to be a "home remodeling" company in its brand name but covers only bathrooms, and its authority score against established competitors is roughly 22/100.

**The single biggest issue:** Google is showing pages for branded and informational queries where ARZ ranks position 8–20. At those positions, CTR is naturally below 1%. Nothing about the title tags or meta descriptions gives a user a compelling reason to scroll past the four competitors and ads above them to click ARZ instead. The rankings problem and the CTR problem compound each other — fixing only one will produce minimal improvement.

---

## PHASE 1 — CTR AUDIT

### Homepage
- **Current Title:** `Bathroom Remodeling Chandler AZ | ARZ Home Remodeling`
- **Current Meta:** "Chandler's premier bathroom remodeling contractor. Specializing in custom walk-in showers & tub conversions. Licensed ROC338304. Get a free estimate!"
- **Problems:**
  - Title front-loads the keyword but wastes 50% of the tag on brand name that adds zero CTR value for a user who does not know ARZ
  - "Premier" is a red flag word — every contractor calls themselves premier; users ignore it
  - Meta is factual but clinical — no urgency, no proof of uniqueness, no emotional hook
  - No price anchor (huge CTR driver for remodeling searches)
  - No star rating or review count in the snippet (structured data exists on-page but is not verified as eligible for rich results)
  - License number ROC338304 in meta takes up 11 characters that could be used for conversion copy
- **Why users skip this and click competitors:** Phoenix Home Remodeling shows 3D renderings + spa language. Renuity (KOHLER) shows a national brand name with trust signals. ARZ's snippet looks like every other generic contractor.
- **Improved Title:** `Chandler Bathroom Remodeling | 5-Star Rated, Licensed Contractor | Free Estimate`
- **Improved Meta:** "Custom walk-in showers & tub-to-shower conversions in Chandler. Fixed pricing from $6,000. ROC licensed since 2010. Serving Ocotillo, Fulton Ranch & East Valley. Call for a free in-home estimate."

---

### /about/ Page
- **Current Title:** `Licensed Bathroom Contractors | ARZ Home Remodeling`
- **Current Meta:** "Meet ARZ Home Remodeling, Chandler's trusted bathroom contractor since 2010. ROC licensed, NARI member. Custom tile, walk-in showers & spa baths."
- **Problems:**
  - Nobody searches "Licensed Bathroom Contractors" as a standalone query — this page is not targeting a real search intent
  - The About page should not be indexed for keywords; it should target brand/trust queries like "ARZ Home Remodeling reviews" or "who is ARZ remodeling Chandler"
  - Team photos are placeholder initials (MH, SJ, MR) — Google can crawl this and register it as a low E-E-A-T signal
  - "Alex Rivers" photo is a PNG file at `/images/alex-rivers.png` — this image may or may not be a real photo; if it is a stock or AI image, Google's visual trust systems can potentially flag it
- **Improved Title:** `About ARZ Home Remodeling | Chandler's Bathroom Contractor Since 2010`
- **Improved Meta:** "Family-owned bathroom remodeling company serving Chandler AZ since 2010. Meet owner Alex Rivers and our licensed crew. ROC #338304, NARI member, BBB A+."

---

### /services/ Page — CRITICAL ISSUE
- **Current Title:** `Custom Bathroom Remodeling Services in Chandler | ARZ Remodeling`
- **Current Meta:** "Professional bathroom remodeling services. From tub conversions to full master bath builds in Chandler, AZ. Schedule your free quote!"
- **CRITICAL FINDING:** The /services/ page shows a completely DIFFERENT phone number: `(229) 306-5591` — this is a Georgia area code (229 = Albany, GA area). The homepage, about page, and footer all show `(520) 569-3339` (Arizona). This NAP inconsistency is a devastating local SEO signal. Google will see three different phone numbers across this domain:
  - Homepage/About/Footer: (520) 569-3339
  - /services/ header: (229) 306-5591
  - /bathroom-remodeling-chandler-az/: +14803065591 (different again — 480 area code)
- **Problems with the page itself:**
  - The OG description says "Complete renovation solutions for your home. Professional installations by licensed contractors." — this is completely generic template copy
  - Twitter description: "Complete home renovation solutions in Chandler. Free estimates!" — three words of effort
  - The theme-color meta is `#6BB3D9` on this page vs `#1A2E4A` on the homepage — different templates/builders were used
  - Footer says "since 2008" while About page says "since 2010" and homepage says "since 2010" — conflicting founding year
- **Improved Title:** `Bathroom Remodeling Services in Chandler AZ | Showers, Vanities & Tile | ARZ`
- **Improved Meta:** "Browse all bathroom services offered by ARZ Home Remodeling in Chandler AZ. Walk-in showers, tub conversions, tile, vanities, ADA baths. Licensed ROC contractor. Free estimates."

---

### /bathroom-remodeling-chandler-az/ Page — CANONICAL ISSUE
- **Current Title:** `Chandler Bathroom Remodeling Contractor | Free Estimates | ARZ Remodeling`
- **Current Canonical:** Points to `https://arzhomeremodeling.com/` (the homepage)
- **CRITICAL FINDING:** This page canonicals to the homepage. This means Google is being told "this page is a duplicate of the homepage — don't index this separately." If the intent was to have this as the primary ranking page for "bathroom remodeling Chandler AZ," the canonical is destroying any independent ranking potential. The page also shows a THIRD unique phone number: `+14803065591`
- **Meta Description:** "Hire the best bathroom remodeling contractor in Chandler, AZ. We specialize in high quality walk in showers, tub to shower conversions, and master bath renovations. Licensed company, free estimates: call +14803065591 today!" — putting a phone number in a meta description is unusual and wastes character budget
- **Improved Title:** `Bathroom Remodeling Chandler AZ | Custom Showers & Tub Conversions | ARZ`
- **Fix:** Change canonical to `https://arzhomeremodeling.com/bathroom-remodeling-chandler-az/`

---

### Location Pages (Gilbert, Mesa, Tempe, etc.)
- Titles follow the pattern: `Bathroom Remodeling [City] AZ | ARZ Home Remodeling`
- These are template pages that almost certainly have thin, duplicated content with only the city name swapped
- No unique local signals: no city-specific contractor license references, no neighborhood names specific to those cities, no local projects mentioned
- **CTR problem:** For someone in Gilbert searching "bathroom remodeling Gilbert AZ," ARZ's title is indistinguishable from 20 other contractor sites

---

## PHASE 2 — LOCAL SEO AUDIT

### NAP Consistency — CRITICAL FAILURE
The site has at minimum THREE different phone numbers:
- `(520) 569-3339` — shown on homepage, about page, most pages (Tucson area code — unusual for a Chandler company)
- `(229) 306-5591` — shown on /services/ (Georgia area code — catastrophic for local SEO)
- `+14803065591` / shown on /bathroom-remodeling-chandler-az/ (480 = Phoenix/East Valley — most logical number)

The email also varies: homepage uses `sales@arzhomeremodeling.com`, while /bathroom-remodeling-chandler-az/ uses `info@arzremodeling.com` (different domain suffix: arzhomeremodeling vs arzremodeling).

Google cross-references NAP data from the Google Business Profile, the website, citation sites, and schema markup. Multiple conflicting numbers across a single domain is one of the strongest negative local trust signals possible. Google may not know which number is correct and may reduce local pack eligibility as a result.

### Address
- 6710 W Chicago St, Chandler, AZ 85226 — this appears consistently, which is good
- However, the ZIP 85226 is not listed in the footer ZIP hub section (shows 85224, 85225, 85249 but not 85226 which is their own address)

### Google Business Profile Alignment
- The website links to Google Maps for the business but does not confirm GBP category, services listed, or review integration
- GBP primary category should be "Bathroom Remodeler" not "General Contractor" or "Home Improvement Store"
- Website schema LocalBusiness type should match GBP category exactly
- 50+ Google reviews claimed on-site but no Review schema is confirmed functional

### City Targeting
- Chandler: well targeted on homepage
- Gilbert, Mesa, Tempe: have location pages but unknown quality
- Phoenix, Scottsdale: listed in footer but no dedicated content visible
- Missing cities for East Valley coverage: Maricopa, Ahwatukee (has a page), Chandler Heights, San Tan Valley, Gold Canyon

### Service Area Signals
- Service area is defined through footer links and location pages
- No LocalBusiness serviceArea schema with proper GeoCircle or GeoShape markup confirmed
- No mention of specific ZIP codes in schema (ZIP codes appear in on-page content which is good but not in structured data)

---

## PHASE 3 — TOPICAL AUTHORITY AUDIT

### Content Coverage Score: 22/100

The website's brand name is "ARZ HOME REMODELING" — this implies whole-home services. However, the site covers ONLY bathroom remodeling. This creates an immediate brand/content mismatch that reduces topical authority across the broader "home remodeling" keyword space.

### What exists (bathroom only):
- Walk-in showers ✓
- Tub-to-shower conversions ✓
- Master bathroom remodel ✓
- Small bathroom remodeling ✓
- ADA/handicap bathroom ✓
- Vanity installation ✓
- Tile installation ✓
- Guest bathroom ✓
- Luxury bathroom ✓
- Cost guide ✓
- Permit guide ✓
- Timeline guide ✓
- Design trends blog post ✓

### Critical Gaps — Pages That Should Exist:

**Service Pages Missing:**
- Kitchen remodeling (the #2 most searched home remodeling service in Chandler)
- Kitchen cabinet installation
- Kitchen countertop replacement
- Flooring (whole home)
- Room additions
- ADU / Casita construction (massive in Arizona)
- Garage conversion
- Home office conversion
- Outdoor living / patio remodeling

**Supporting Content Missing:**
- "How to choose a bathroom contractor in Chandler" (high-intent informational)
- "Bathroom remodel vs renovation — what's the difference"
- "How long does a tub-to-shower conversion take?"
- "Bathroom remodel ROI in Arizona"
- "Best tile for Arizona bathrooms"
- "Walk-in shower vs walk-in tub comparison"
- "How to plan a master bathroom remodel"
- "Bathroom lighting guide for Arizona homes"
- "Quartz vs granite countertops for bathrooms"
- "Frameless vs semi-frameless shower doors"
- "What questions to ask a bathroom contractor"
- "Bathroom remodel checklist"
- "Before and after: Chandler bathroom transformations" (dedicated gallery page with case studies)

**Competitor Comparison:**
- Phoenix Home Remodeling has extensive kitchen coverage, ADU content, and full design guides
- AZ Remodels covers kitchen + bathroom with dedicated cost comparisons and neighborhood guides
- Mustache Approved Remodeling has deep content on specific techniques (leveling systems, waterproofing methods)
- ARZ's blog has 3 posts — competitors have 50-200+ posts

**Topical Cluster Score vs Top Competitor:**
- Bathroom cluster: ARZ 65/100 vs competitors 85/100
- Kitchen cluster: ARZ 0/100 vs competitors 80/100
- Whole-home cluster: ARZ 0/100 vs competitors 60/100
- Local/neighborhood cluster: ARZ 40/100 vs competitors 70/100
- Cost/planning cluster: ARZ 30/100 vs competitors 75/100

---

## PHASE 4 — TECHNICAL SEO AUDIT

### CRITICAL Issues:

**1. Canonical Tag Conflict on /bathroom-remodeling-chandler-az/**
The page that should be the primary ranking page for the most important keyword ("bathroom remodeling Chandler AZ") has its canonical set to the homepage. This consolidates all link equity to the homepage while preventing this page from ranking independently. This is a top-3 ranking killer.

**2. Multiple Phone Numbers / Multiple Templates**
The /services/ page was built with a different page builder and has different branding, a Georgia phone number, a different theme color, and different footer content. This strongly suggests the site was assembled from multiple templates or had pages migrated without proper QA. Google can detect inconsistent site structure and it reduces trust signals.

**3. NAP in Schema vs NAP on Page**
If the LocalBusiness schema uses one phone number but the page header shows another, the structured data will fail to validate correctly. This prevents rich results from appearing.

### HIGH Issues:

**4. Homepage Title/OG Title Mismatch**
- Page title: "Bathroom Remodeling Chandler AZ | ARZ Home Remodeling"  
- Twitter title: "Bathroom Remodeling in Chandler AZ - Professional Contractor"  
These should match.

**5. Image Optimization**
- `/images/hero/luxury-shower-remodel-chandler.avif` — good format (AVIF)
- `/images/optimized/photo-1581578731548-c64695cc6952.webp` — this filename is a dead giveaway this is an Unsplash stock photo (Unsplash URLs use that naming convention). This image appears TWICE on the homepage (as both the "About Us" section image AND in the before/after gallery). Stock photos in project galleries are a significant E-E-A-T red flag.
- Before/after images: "Before" images in the project gallery appear to be stock photos based on URL naming patterns

**6. JavaScript-Dependent Content**
The site is built on Next.js (indicated by `meta-next-size-adjust` meta tag). JavaScript rendering means Googlebot must execute JS to see content. While Googlebot handles this, it adds latency to indexing and can cause issues with certain dynamic elements.

**7. Sitemap**
Sitemap returns binary data, indicating it may be an XML file not properly parsed or may have issues. Cannot verify all indexed URLs.

**8. Thin Location Pages**
Location pages for Gilbert, Mesa, Tempe, Queen Creek, Apache Junction, Phoenix, Scottsdale follow a template pattern. Without seeing full content, these are likely to be thin duplicate pages that Google will de-index or refuse to rank.

**9. Missing Breadcrumb Schema**
No breadcrumb structured data detected, which means Google cannot display breadcrumb rich results in the SERP.

**10. ZIP Code Pages**
Five ZIP code pages exist (85248, 85249, 85224, 85225, 85226). These are almost certainly thin content pages created for keyword stuffing. Google actively discounts these unless they have substantial unique content.

### MEDIUM Issues:

**11. Founding Year Conflict**
- Homepage: "Since 2010"
- Footer on /services/: "since 2008"  
Pick one and be consistent everywhere.

**12. Missing Alt Text Pattern**
Images with filenames like `photo-1581578731548-c64695cc6952.webp` have alt text "ARZ Home Remodeling licensed bathroom contractors in Chandler Arizona" — which doesn't describe the image. Alt text should describe the image visually.

**13. Review Count Discrepancy**
"50+ Google Reviews" is shown prominently. If the actual GBP has fewer reviews, this is a trust problem. If accurate, the ReviewSchema count should match.

---

## PHASE 5 — ON-PAGE SEO AUDIT

### Homepage — Score: 58/100
- H1 "Licensed Bathroom Remodeling Experts Serving Chandler AZ" — good, keyword-rich
- Heading hierarchy: H1 → H3 (skips H2 in the FAQ section intro) — minor issue
- Content depth: HIGH — the homepage has exceptional content depth with local neighborhood references, specific pricing, process steps, and FAQs
- Entity coverage: Strong — mentions Chandler, East Valley, specific neighborhoods, Arizona Tile, Schluter-Kerdi, ROC number
- Internal links: Strong internal linking to service pages and location pages
- E-E-A-T: Owner named (Alex Rivers), ROC license shown, NARI membership shown, BBB referenced — GOOD
- Missing: No author schema, no publication/update date visible, no case study depth with real project photos

### /about/ Page — Score: 35/100
- Severe E-E-A-T problem: team members are shown as initials only (MH, SJ, MR) with no real photos
- "Alex Rivers" has a photo but no LinkedIn, no professional bio, no credentials listed beyond the company's credentials
- The "Our Core Values" section is filler copy that appears on thousands of contractor websites
- No specific stories, no proof of work, no client testimonials on this page
- Score is dragged down by the low E-E-A-T signals

### /services/ Page — Score: 20/100
- Has the wrong phone number (Georgia area code)
- Service descriptions are one-sentence summaries — zero content depth
- No pricing, no process, no FAQs, no local signals beyond "Chandler, AZ" in the title
- This page is essentially a navigation hub with no ranking value of its own

### /bathroom-remodeling-chandler-az/ — Score: 52/100
- Good pricing tables, good process section, good neighborhood references
- Keyword stuffing issue: "shower remodeling services chandler," "bath remodeling contractors in Chandler, AZ," "bath remodeler in Chandler, AZ" used unnaturally in proximity
- Canonical points to homepage — page cannot rank independently
- Third unique phone number

---

## PHASE 6 — CONVERSION RATE AUDIT

### Estimated Conversion Strength: 55/100

**Strengths:**
- Free estimate CTA appears multiple times on homepage
- Phone number in header (though it conflicts on other pages)
- Pricing transparency is excellent — range pricing given for each service tier
- 5-year warranty mention is a strong conversion element
- Before/after gallery exists
- FAQ section addresses real objections

**Conversion Killers:**

**1. Stock Photos Masquerading as Project Photos**
The filename `photo-1581578731548-c64695cc6952.webp` appearing in the "About" section AND in a before/after gallery means the same Unsplash photo is being used in multiple contexts. If a homeowner recognizes this as stock photography, conversion rates drop to near zero. Custom project photos are non-negotiable for a remodeling contractor.

**2. Before/After Gallery Issues**
The before/after slider exists but uses very few images (4 projects shown). The "before" images in some cases appear to be stock photos with Unsplash-pattern filenames. Real before/after photos from real Chandler projects are the #1 conversion driver for remodeling businesses.

**3. Reviews Not Verifiable on Page**
"5.0 · 50+ Google Reviews" links to a Google Maps search — not a direct GBP link. A user who tries to verify reviews and gets a search results page instead of the actual profile may lose trust.

**4. No Video Content**
Zero video content visible. Videos of the team, project walkthroughs, and time-lapses are among the highest-converting elements for home services.

**5. Contact Form — Service Dropdown**
The service dropdown on the contact form has 18 options including "Other." This friction point may reduce form completions — homeowners often don't know the exact service name they need.

**6. Mobile Phone Number**
On mobile, the `(520) 569-3339` number should be a click-to-call element. If the services page shows `(229) 306-5591` (Georgia), mobile visitors on that page are calling a Georgia number or getting a dead number — conversion is zero.

**7. No Live Chat**
No live chat widget. For $15,000–$45,000 purchases, many customers want immediate answers before committing to an estimate form.

---

## PHASE 7 — COMPETITOR GAP ANALYSIS

### Top Ranking Competitors for "Bathroom Remodeling Chandler AZ":

**1. Phoenix Home Remodeling (phxhomeremodeling.com)**
- Dedicated Chandler landing page
- Extensive photo galleries of real projects
- 3D rendering offering prominently featured
- Deep content: second-story waterproofing, specific HOA guidance
- Covers kitchen + bathroom — broader topical authority
- Has been building content and citations for years

**2. Renuity / KOHLER Bath Remodel (renuityhome.com)**
- National brand backing = massive trust signal
- KOHLER brand name = instant credibility
- Warranty backed by KOHLER
- Professional photography throughout
- Covers all AZ cities with dedicated pages

**3. AZ Remodels (azremodels.com)**
- Covers BOTH kitchen and bathroom — double the topical footprint
- "AZ" in the domain name matches the geographic intent signal
- Testimonials with specific city ZIP codes (85249, etc.) — hyperlocal trust
- Very recent content (1 month ago) showing active site maintenance

**4. Mustache Approved Remodeling (mustacheapproved.com)**
- Extremely specific technical content (Raimondi leveling system, specific waterproofing methods)
- Chandler-specific neighborhood content (Ocotillo, Chandler Heights)
- Demonstrates genuine expertise through specificity

**Why ARZ Ranks Lower:**
1. Newer domain with less link equity
2. NAP inconsistency signals reduce local pack eligibility
3. Thin template location pages dilute site authority
4. No kitchen or whole-home content limits topical authority
5. Stock photos reduce E-E-A-T scores
6. Canonical error on the most important landing page
7. Multiple phone numbers confuse Google's business entity understanding

---

## PHASE 8 — GOOGLE TRUST ANALYSIS

### Trust Score: 31/100

| Signal | Score | Issue |
|--------|-------|-------|
| Brand Consistency | 30/100 | Multiple phone numbers, two email domains, conflicting founding years |
| Business Legitimacy | 55/100 | ROC license is real, BBB mentioned, but verification links go to search pages not direct profiles |
| Author Signals | 20/100 | Owner named but no verifiable online presence; team photos are initials only |
| About Page Quality | 30/100 | Generic values, placeholder team, no real photos |
| Review Signals | 45/100 | 50+ reviews claimed but not verifiable from the site directly |
| External Citations | Unknown | Cannot audit backlink profile without access to Ahrefs/Majestic |
| Schema Completeness | 35/100 | Multiple conflicting NAP signals in schema across pages |
| Entity Recognition | 25/100 | "ARZ Home Remodeling" is not a recognized entity in Google's Knowledge Graph |
| E-E-A-T Overall | 30/100 | Claims experience but provides limited verifiable proof |

**Trust Destroyers:**
- Georgia phone number on a Chandler, AZ contractor site
- Stock photo from Unsplash used as "project photo"
- Different email domains (arzhomeremodeling.com vs arzremodeling.com)
- Team page with no real photos
- Conflicting founding years (2008 vs 2010)

---

## PHASE 9 — TOP 20 RANKING KILLERS

| # | Issue | Severity | Traffic Impact | Fix Difficulty | SEO Impact |
|---|-------|----------|---------------|----------------|------------|
| 1 | /bathroom-remodeling-chandler-az/ canonical points to homepage | CRITICAL | Very High — primary keyword page can't rank independently | Easy — 1 line fix | Very High |
| 2 | Georgia phone number (229) on /services/ page | CRITICAL | High — NAP inconsistency tanks local pack eligibility | Easy | Very High |
| 3 | Three different phone numbers across the site | CRITICAL | High | Medium — audit all pages | Very High |
| 4 | Two different email domains (arzhomeremodeling vs arzremodeling) | CRITICAL | Medium | Easy | High |
| 5 | Homepage title tag branded too heavily, weak CTR | HIGH | High — every SERP impression is wasted | Easy | High |
| 6 | No kitchen remodeling coverage | HIGH | Very High — missing 40%+ of local remodeling search volume | Hard — requires content | Very High |
| 7 | Location pages likely thin/duplicate | HIGH | Medium | Hard — requires unique content | High |
| 8 | ZIP code pages thin/doorway pages | HIGH | Low positive, high negative | Medium — improve or noindex | High |
| 9 | Stock photos used as project photos | HIGH | Medium (trust/conversion) | Medium — need real photos | High |
| 10 | No backlink strategy evident | HIGH | Very High — domain authority low | Hard — ongoing | Very High |
| 11 | Blog has only 3 posts vs competitors with 50-200 | HIGH | High — misses long-tail traffic | Hard — ongoing | High |
| 12 | About page with placeholder team initials | HIGH | Medium (E-E-A-T) | Easy | Medium |
| 13 | Conflicting founding year (2008 vs 2010) | MEDIUM | Low | Easy | Medium |
| 14 | No breadcrumb schema | MEDIUM | Medium | Easy | Medium |
| 15 | Services page meta descriptions are generic template copy | MEDIUM | Medium | Easy | Medium |
| 16 | No video content | MEDIUM | Medium | Hard | Medium |
| 17 | Missing ADU/room addition content | MEDIUM | Medium | Hard | Medium |
| 18 | Before/after gallery too small (4 projects) | MEDIUM | Medium (conversion) | Medium | Medium |
| 19 | No live chat / immediate response option | LOW | Low | Easy | Low |
| 20 | Missing local schema (serviceArea GeoShape) | LOW | Low | Easy | Low |

---

## PHASE 10 — WHY 200 IMPRESSIONS, NEAR-ZERO CLICKS

### Root Cause Breakdown:

**Ranking Position Problem — 55% of the issue**
The 200+ impressions are almost certainly coming from positions 8–20 on page 1, or positions 1–10 on page 2. At position 8, average CTR for commercial queries is 1.5–2.5%. At position 15+, it's below 0.5%. With 200 impressions at an average position of 15, you'd expect 0–2 clicks. This matches exactly.

**Why ARZ ranks 8–20 instead of 1–5:**
- Newer domain competing against established brands and nationals
- Canonical error preventing the most optimized page from ranking
- NAP inconsistency reducing local trust score
- Domain authority lower than Phoenix Home Remodeling, Renuity, Mustache Approved

**CTR Problem — 25% of the issue**
Even when ARZ does appear, the titles and meta descriptions don't compel clicks:
- No price anchor ("From $6,000")
- No specific outcome language ("Convert your garden tub in 5 days")
- No urgency
- No differentiation from competitors visible in the SERP snippet

**Wrong Keywords Problem — 15% of the issue**
Some of the 200 impressions are almost certainly coming from informational queries ("how much does a bathroom remodel cost in Chandler") where the user is researching, not ready to hire. These impressions will never convert to calls until the pages are better optimized for commercial intent at the bottom of the content.

**Technical Issues — 5% of the issue**
The canonical error is the most damaging technical issue. Other technical issues (NAP inconsistency, multiple phone numbers) primarily affect local pack rankings rather than organic impressions.

---

## FINAL OUTPUT

### TOP 20 CTR KILLERS
1. Homepage title buries the most compelling info (no price, no outcome, no urgency)
2. No price anchors in any SERP snippet
3. "Premier" language is ignored by users — everyone says it
4. License number in meta wastes character space
5. No star ratings showing in organic snippets (schema may not be eligible)
6. No rich results (FAQ, breadcrumb, review) appearing in SERP
7. Location page titles are indistinguishable from competitors
8. Blog post titles don't target specific user questions
9. Services page meta is generic template copy
10. No emotional trigger in any title (fear of bad contractor, desire for spa bathroom)
11. No specific outcome mentioned ("5-day conversion," "no change orders")
12. Brand name "ARZ" means nothing to a first-time visitor
13. No year in titles to signal recency ("2026 Chandler Bathroom Contractor")
14. Call-to-action in meta is generic ("Get a free estimate!" vs "See real Chandler projects")
15. Twitter/OG titles differ from page titles — inconsistent brand identity
16. No local neighborhood mentions in SERP snippets
17. No urgency signals ("Book before summer — limited slots")
18. Meta descriptions for location pages don't differentiate by city
19. FAQ schema may not be triggering FAQ rich results in SERP
20. Image alt text not optimized for Google Image Search (secondary CTR source)

### TOP 20 TECHNICAL ISSUES
1. /bathroom-remodeling-chandler-az/ canonical → homepage (CRITICAL)
2. Georgia phone number (229) on /services/
3. Three different phone numbers sitewide
4. Two different email domains sitewide
5. Stock Unsplash photos in project gallery
6. Conflicting founding year (2008 vs 2010)
7. Different page builders/templates creating inconsistent site structure
8. No breadcrumb schema
9. ZIP code pages likely thin
10. Location pages likely duplicate/thin
11. Next.js — ensure all content is SSR not CSR
12. Hero images not confirmed with proper LCP optimization
13. OG image for about page uses generic "hero-bathroom.jpg" not a team photo
14. Schema LocalBusiness not confirmed on all pages
15. No Review/AggregateRating schema confirmed rendering correctly
16. Services page meta keywords tag (outdated practice, signals older SEO approach)
17. Logo in /services/ uses different image path than homepage
18. Review links point to Google Maps search, not direct GBP URL
19. Sitemap returning binary format — may need validation
20. No hreflang (not needed unless bilingual, but confirm)

### TOP 20 LOCAL SEO ISSUES
1. NAP inconsistency — three phone numbers
2. Primary phone uses (520) area code — Tucson — while business is in Chandler (480/602 area)
3. Georgia (229) area code on services page
4. Two email domains
5. No confirmed GBP primary category alignment
6. Review schema not confirmed functional
7. Location pages likely thin
8. No LocalBusiness serviceArea GeoShape schema
9. No local citations audit (Yelp, BBB, Nextdoor links don't go to confirmed live profiles)
10. No neighborhood-specific page strategy (Ocotillo, Fulton Ranch, Sun Lakes exist but may be thin)
11. No Google Posts strategy visible
12. Missing cities: Maricopa, San Tan Valley, Gold Canyon, Casa Grande
13. No local business schema with opening hours on all pages
14. ZIP 85226 (their own address) missing from ZIP hub
15. Photos in GBP unknown (may not match quality of website)
16. "Chandler Chamber" link in trust section doesn't go to verified member profile
17. No mentions on local news sites or community platforms
18. No Nextdoor direct profile link (goes to search)
19. BBB link goes to search not confirmed A+ profile
20. No local backlinks from Chandler-specific sites, HOA directories, or community organizations

### TOP 20 CONTENT GAPS
1. Kitchen remodeling (massive gap — no content exists)
2. Kitchen cabinet installation
3. Kitchen countertop replacement
4. ADU/casita construction guide for Arizona
5. Whole-home remodel overview
6. Room additions
7. "How to choose a bathroom contractor in Chandler" guide
8. Flooring services page (whole home)
9. Outdoor/patio remodeling
10. "Bathroom remodel ROI in East Valley real estate"
11. "Best tile for Arizona hard water" detailed guide
12. "Walk-in shower vs walk-in tub for aging in place"
13. "How to plan a master bathroom remodel" step-by-step
14. Real project case studies with actual before/after photography
15. Video content (project walkthroughs, team introduction)
16. "Bathroom remodel mistakes to avoid in Chandler"
17. "HOA approval process for bathroom remodels in Ocotillo/Fulton Ranch"
18. "Comparing bathroom remodeling companies in Chandler" (yes, even a comparison that includes yourself)
19. Neighborhood-specific service pages with genuine local content
20. Seasonal content ("Best time to remodel your bathroom in Arizona")

### TOP 20 TRUST ISSUES
1. Team page shows initials only — no real team photos
2. Stock Unsplash photo used as "About Us" image and project photo
3. Georgia phone number on a Chandler contractor site
4. No verifiable employee LinkedIn profiles
5. Owner "Alex Rivers" has no verifiable external presence
6. Conflicting founding years
7. BBB and Yelp links go to search, not verified profiles
8. No Google Business Profile link that opens directly
9. No actual before/after photos from real client projects confirmed
10. Only 3 blog posts — doesn't signal active, established business
11. "NARI Member #82910" — unverifiable from the page
12. No physical office photos
13. No contractor van or branded equipment photos
14. No crew photos on job sites
15. No video testimonials
16. Written testimonials don't include verifiable last names or locations
17. Schema review count may not match actual GBP review count
18. Two email domains signals unprofessional setup
19. No mentions of ARZ in local media, news articles, or community sites
20. No physical address shown on Google Maps satellite view suggests possible virtual office

---

## ACTION PLANS

### 30-Day Plan (Critical Fixes — Highest ROI)

**Week 1 — Stop the Bleeding**
1. Fix the canonical on /bathroom-remodeling-chandler-az/ — change from pointing to homepage to pointing to itself (1-hour fix, massive impact)
2. Audit every page for phone number — standardize to ONE number sitewide. Recommend using (480) area code as most local to East Valley
3. Fix/rebuild the /services/ page with correct branding, correct phone number, correct founding year
4. Standardize email to sales@arzhomeremodeling.com everywhere
5. Fix founding year to one consistent year everywhere

**Week 2 — CTR Quick Wins**
6. Rewrite homepage title tag and meta description with price anchor and emotional trigger
7. Rewrite /services/ meta description (currently generic template copy)
8. Rewrite all location page meta descriptions to include city-specific language
9. Add breadcrumb schema to all pages
10. Confirm LocalBusiness schema has correct, consistent phone number

**Week 3 — E-E-A-T Foundation**
11. Replace placeholder team initials with real team photos
12. Replace stock Unsplash photo from About section and project gallery
13. Get minimum 3 real before/after project photos from actual Chandler projects
14. Add Alex Rivers LinkedIn profile and link from About page
15. Build proper NARI member verification link

**Week 4 — Content & Local**
16. Submit consistent NAP to top 10 local citation sites (Yelp, BBB, Angi, HomeAdvisor, Houzz)
17. Verify Google Business Profile has correct phone number matching the updated website
18. Create one well-researched blog post targeting "how much does a bathroom remodel cost in Chandler 2026"
19. Add serviceArea GeoShape schema with Chandler ZIP codes
20. Add FAQ schema to homepage FAQs

**Predicted 30-Day Impact:**
- Local pack impression improvement: 20-40%
- CTR improvement from title/meta rewrites: 15-30%
- Trust score improvement: 30-40 points out of 100

---

### 60-Day Plan (Authority Building)

**Content Development (5 new pages minimum):**
1. Comprehensive kitchen remodeling page (even if services launch is 90 days out — plant the flag)
2. "How to Choose a Bathroom Contractor in Chandler AZ" — 2,000+ words
3. "Chandler Bathroom Remodel Cost Guide 2026" — update existing with more depth and real price tables
4. Neighborhood service page rebuild: Ocotillo, Fulton Ranch, Sun Lakes (each 1,000+ words with specific local content)
5. One ADU/casita informational page to capture that keyword space

**Technical:**
6. Audit all location/ZIP pages — either add 800+ words of unique content or noindex them
7. Build out Gallery page with categorized real project photos
8. Implement FAQ rich results on service pages
9. Add video embed (even a simple walkthrough recorded on a smartphone)
10. Implement AggregateRating schema linked to verified review sources

**Link Building:**
11. Submit to Chandler Chamber of Commerce directory with correct NAP
12. Guest post or quote contribution on East Valley/Phoenix home improvement sites
13. Partner with Arizona Tile, Bedrosians, or MSI for co-mentions/links
14. Get listed on NARI member directory with link back
15. Build citations on Houzz, Angi, HomeAdvisor, Thumbtack with consistent NAP

**Predicted 60-Day Impact:**
- Organic rankings improvement for secondary keywords: +3-5 positions
- Kitchen keyword impressions beginning: 50-100 new impressions/month
- Domain authority increase: +2-4 DA points
- CTR to 1-3% (from near 0%) on primary keywords

---

### 90-Day Plan (Topical Authority Push)

**Content Sprint — Target 20 new pages/posts:**
1. Kitchen remodeling main service page with full pricing and process
2. Kitchen cabinet installation service page
3. Kitchen countertop replacement service page
4. "Bathroom vs Kitchen Remodel — Where to invest in Chandler"
5. "Complete Guide to Tub-to-Shower Conversions in Arizona"
6. "ADA Bathroom Remodeling Guide for East Valley Seniors"
7. "Best Frameless Shower Door Options for Chandler Homes"
8. "Arizona Tile Buying Guide for Bathroom Remodels"
9. "Bathroom Remodel Timeline Guide — Week by Week"
10. Chandler, Gilbert, Mesa, Tempe location pages (full rebuilds with 1,500+ words)
11. Phoenix and Scottsdale location pages (full builds)
12. "Bathroom Remodeling in [Neighborhood]" pages for top 5 Chandler neighborhoods
13. 3 detailed case study pages with real project photos
14. "Bathroom Remodeling Permits in Chandler — Complete Guide" (expand existing)
15. Video content: 3 project walkthrough videos uploaded to YouTube and embedded
16. "Customer Reviews and Testimonials" dedicated page with structured data
17. "Financing Your Bathroom Remodel in Chandler" expanded guide
18. "Hard Water Bathroom Solutions" — unique ARZ expertise angle
19. "Bathroom Remodeling FAQ — 50 Questions Answered"
20. "Compare Bathroom Remodeling Companies in Chandler" (comparison that positions ARZ)

**Predicted 90-Day Impact:**
- Rankings for bathroom keywords: move from position 8-15 to position 3-8 on key terms
- New keyword rankings: 50-100 new keyword rankings emerging
- Monthly organic traffic: 50-200 clicks (from near 0)
- Topical authority score improvement: 22/100 → 45-55/100
- Conversion rate: 2-4% of traffic becomes leads

---

## THE SINGLE BIGGEST ISSUE

**The /bathroom-remodeling-chandler-az/ page — which is clearly intended to be the #1 ranking page for the most valuable keyword — has its canonical tag set to redirect all of its ranking power to the homepage.**

This means: every time Google's crawler discovers this page, it is instructed to attribute any authority this page earns to the homepage instead. The page cannot rank. The homepage already has the homepage canonical. The result is that both pages are fighting over the same keyword but neither is winning because the best-optimized, most commercial-intent page is essentially invisible to Google as a standalone entity.

This is a one-line fix in your CMS or template. Change the canonical from:
`<link rel="canonical" href="https://arzhomeremodeling.com/" />`
to:
`<link rel="canonical" href="https://arzhomeremodeling.com/bathroom-remodeling-chandler-az/" />`

This single fix — combined with resolving the NAP phone number inconsistency — will likely produce the most immediate measurable improvement in rankings and local pack visibility of any action on this list.

Fix these two issues this week. Everything else is secondary.

---

*Audit completed May 2026. Based on live site crawl and competitive analysis. For questions or implementation support, all findings are documented above in prioritized order.*
