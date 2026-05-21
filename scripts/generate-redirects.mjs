/**
 * Generates public/_redirects, public/.htaccess, and lib/seo-redirects.generated.json
 */
import { writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const siteUrl = "https://arzhomeremodeling.com";

const DEDICATED = {
  ocotillo: "/bathroom-remodeling-ocotillo/",
  "fulton-ranch": "/bathroom-remodeling-fulton-ranch/",
  "sun-lakes": "/bathroom-remodeling-sun-lakes/",
  "downtown-chandler": "/bathroom-remodeling-downtown-chandler/",
  "cooper-commons": "/bathroom-remodeling-cooper-commons/",
  "fox-crossing": "/bathroom-remodeling-cooper-commons/",
};

const AREA_SLUGS = [
  "ocotillo",
  "sun-lakes",
  "downtown-chandler",
  "fulton-ranch",
  "cooper-commons",
  "fox-crossing",
];

const LOCATION_SLUGS = [
  "85248", "ocotillo", "ocotillo-85248", "fulton-ranch", "fulton-ranch-85248",
  "arden-park", "arden-park-85248", "85249", "circle-g", "circle-g-85249",
  "riggs-ranch", "riggs-ranch-85249", "sun-groves", "sun-groves-85249",
  "85224", "warner-ranch", "warner-ranch-85224", "dobson-place", "dobson-place-85224",
  "85225", "downtown-chandler", "downtown-chandler-85225", "clemente-ranch", "clemente-ranch-85225",
  "85226", "kyrene-corridor", "kyrene-corridor-85226", "stellar-airpark", "stellar-airpark-85226",
];

const SERVICE_HUBS = {
  "/walk-in-showers/": "/shower-remodeling/",
  "/shower-replacement/": "/shower-remodeling/",
  "/shower-bathtub-upgrade/": "/shower-remodeling/",
  "/tub-removal/": "/tub-to-shower-conversion/",
};

function chandlerRedirect(slug) {
  const combined = slug.match(/^(.+)-(\d{5})$/);
  if (combined) {
    const hood = combined[1];
    if (DEDICATED[hood]) return DEDICATED[hood];
    return `/chandler-az-${hood}/`;
  }
  if (DEDICATED[slug]) return DEDICATED[slug];
  if (/^\d{5}$/.test(slug)) return null;
  return null;
}

const rules = [];

for (const areaSlug of AREA_SLUGS) {
  if (DEDICATED[areaSlug]) {
    rules.push({
      source: `/bathroom-remodeling-areas/${areaSlug}/`,
      destination: DEDICATED[areaSlug],
      permanent: true,
    });
  }
}

for (const slug of LOCATION_SLUGS) {
  const dest = chandlerRedirect(slug);
  if (dest) {
    rules.push({
      source: `/chandler-az-${slug}/`,
      destination: dest,
      permanent: true,
    });
  }
}

for (const [from, to] of Object.entries(SERVICE_HUBS)) {
  rules.push({ source: from, destination: to, permanent: true });
}

const netlifyLines = rules.map(
  (r) => `${r.source} ${siteUrl}${r.destination} ${r.permanent ? 301 : 302}`
);
writeFileSync(path.join(root, "public/_redirects"), netlifyLines.join("\n") + "\n");

const htaccessLines = [
  "# ARZ SEO redirects — run: node scripts/generate-redirects.mjs",
  ...rules.map((r) => `Redirect permanent ${r.source} ${siteUrl}${r.destination}`),
];
writeFileSync(path.join(root, "public/.htaccess"), htaccessLines.join("\n") + "\n");

writeFileSync(
  path.join(root, "lib/seo-redirects.generated.json"),
  JSON.stringify(rules, null, 2)
);

console.log(`Generated ${rules.length} redirect rules.`);
