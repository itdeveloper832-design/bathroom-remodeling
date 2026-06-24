import { generateAllLocationSlugs } from "@/lib/chandler-locations";
import { getAllAreaSlugs } from "@/lib/bathroom-remodeling-areas";
import { siteConfig } from "@/lib/site-config";

/** Primary indexed URL for Chandler neighborhoods with a dedicated route */
export const DEDICATED_NEIGHBORHOOD_PATHS: Record<string, string> = {
  ocotillo: "/bathroom-remodeling-ocotillo/",
  "fulton-ranch": "/bathroom-remodeling-fulton-ranch/",
  "sun-lakes": "/bathroom-remodeling-sun-lakes/",
  "downtown-chandler": "/bathroom-remodeling-downtown-chandler/",
  "cooper-commons": "/bathroom-remodeling-cooper-commons/",
  "fox-crossing": "/bathroom-remodeling-cooper-commons/",
  "chandler-heights": "/bathroom-remodeling-chandler-heights/",
  "andersen-springs": "/bathroom-remodeling-andersen-springs/",
  "layton-lakes": "/bathroom-remodeling-layton-lakes/",
  "the-islands": "/bathroom-remodeling-the-islands/",
  "pecos-ranch": "/bathroom-remodeling-pecos-ranch/",
};

/** Shower cluster: thin pages canonical to hub */
export const SERVICE_CANONICAL_HUBS: Record<string, string> = {
  "/walk-in-showers/": "/shower-remodeling/",
  "/shower-replacement/": "/shower-remodeling/",
  "/shower-bathtub-upgrade/": "/shower-remodeling/",
  "/tub-removal/": "/tub-to-shower-conversion/",
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${siteConfig.url}${withSlash}`;
}

export function getDedicatedNeighborhoodPath(slug: string): string | null {
  return DEDICATED_NEIGHBORHOOD_PATHS[slug] ?? null;
}

/** Legacy /bathroom-remodeling-areas/{slug} → canonical */
export function getAreaPageRedirect(areaSlug: string): string | null {
  const dedicated = getDedicatedNeighborhoodPath(areaSlug);
  if (dedicated) return absoluteUrl(dedicated);
  if (areaSlug === "sun-lakes") return absoluteUrl("/bathroom-remodeling-sun-lakes/");
  return null;
}

/**
 * Legacy /chandler-az-{slug}/ → canonical
 * - combined hood-zip → dedicated or /chandler-az-hood/
 * - hood with dedicated page → dedicated
 * - zip-only → keep (null)
 * - hood without dedicated → keep (null)
 */
export function getChandlerLocationRedirect(locationSlug: string): string | null {
  const combinedMatch = locationSlug.match(/^(.+)-(\d{5})$/);
  if (combinedMatch) {
    const [, hoodSlug] = combinedMatch;
    const dedicated = getDedicatedNeighborhoodPath(hoodSlug);
    if (dedicated) return absoluteUrl(dedicated);
    return absoluteUrl(`/chandler-az-${hoodSlug}/`);
  }

  const dedicated = getDedicatedNeighborhoodPath(locationSlug);
  if (dedicated) return absoluteUrl(dedicated);

  if (/^\d{5}$/.test(locationSlug)) return null;

  return null;
}

export function getCanonicalNeighborhoodLink(slug: string): string {
  const dedicated = getDedicatedNeighborhoodPath(slug);
  if (dedicated) return dedicated;
  return `/chandler-az-${slug}/`;
}

/** Slugs that remain indexable under /chandler-az-{slug}/ */
export function getIndexableChandlerLocationSlugs(): string[] {
  return generateAllLocationSlugs().filter((slug) => {
    if (/^\d{5}$/.test(slug)) return true;
    if (/-\d{5}$/.test(slug)) return false;
    if (DEDICATED_NEIGHBORHOOD_PATHS[slug]) return false;
    return true;
  });
}

/** Build Next.js + static host redirect rules */
export function buildSeoRedirectRules(): { source: string; destination: string; permanent: boolean }[] {
  const rules: { source: string; destination: string; permanent: boolean }[] = [];

  for (const areaSlug of getAllAreaSlugs()) {
    const dest = getAreaPageRedirect(areaSlug);
    if (dest) {
      rules.push({
        source: `/bathroom-remodeling-areas/${areaSlug}/`,
        destination: dest.replace(siteConfig.url, ""),
        permanent: true,
      });
    }
  }

  for (const slug of generateAllLocationSlugs()) {
    const dest = getChandlerLocationRedirect(slug);
    if (dest) {
      rules.push({
        source: `/chandler-az-${slug}/`,
        destination: dest.replace(siteConfig.url, ""),
        permanent: true,
      });
    }
  }

  for (const [from, to] of Object.entries(SERVICE_CANONICAL_HUBS)) {
    rules.push({ source: from, destination: to, permanent: true });
  }

  return rules;
}
