import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getIndexableChandlerLocationSlugs } from "@/lib/seo-canonical-map";
import { getPublishedPosts } from "@/lib/actions/blog";
import {
  getAppRoutes,
  getRoutePriority,
  getRouteFrequency,
  getRouteLastMod,
  isNoIndexRoute,
} from "@/lib/seo-utils";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const discoveredRoutes = getAppRoutes();

  const fileEntries = discoveredRoutes.map((route) => {
    const normalizedRoute = route === "/" ? "" : route.endsWith("/") ? route : `${route}/`;
    const url = `${baseUrl}${normalizedRoute}`;

    return {
      url,
      lastModified: getRouteLastMod(route),
      changeFrequency: getRouteFrequency(route),
      priority: getRoutePriority(route),
    };
  });

  // ZIP hub pages only (no duplicate neighborhood/combined programmatic URLs)
  const indexableLocationSlugs = getIndexableChandlerLocationSlugs();
  const zipHubEntries = indexableLocationSlugs
    .filter((slug) => /^\d{5}$/.test(slug))
    .map((slug) => {
      const route = `/chandler-az-${slug}/`;
      return {
        url: `${baseUrl}${route}`,
        lastModified: getRouteLastMod(route),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      };
    });

  // Programmatic neighborhood pages without a dedicated route
  const programmaticHoodEntries = indexableLocationSlugs
    .filter((slug) => !/^\d{5}$/.test(slug))
    .map((slug) => {
      const route = `/chandler-az-${slug}/`;
      return {
        url: `${baseUrl}${route}`,
        lastModified: getRouteLastMod(route),
        changeFrequency: "monthly" as const,
        priority: 0.72,
      };
    });

  // Dynamic published blog posts
  const posts = await getPublishedPosts();
  const blogEntries = posts.map((post) => {
    const route = `/blog/${post.slug}/`;
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt || "2026-05-19"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  const allEntries = [
    ...fileEntries,
    ...zipHubEntries,
    ...programmaticHoodEntries,
    ...blogEntries,
  ];

  const uniqueEntriesMap = new Map<string, MetadataRoute.Sitemap[number]>();

  const excludePatterns = [
    "/bathroom-remodeling-areas/",
    "/walk-in-showers/",
    "/shower-replacement/",
    "/shower-bathtub-upgrade/",
    "/tub-removal/",
  ];

  allEntries.forEach((entry) => {
    if (entry.url.includes("[") || entry.url.includes("]")) return;

    const route = entry.url.replace(baseUrl, "").replace(/\/$/, "") || "/";

    if (isNoIndexRoute(route)) return;

    if (excludePatterns.some((p) => entry.url.includes(p))) return;

    // Drop combined chandler-az URLs if any slipped through
    if (/\/chandler-az-.+-\d{5}\/?$/.test(entry.url)) return;

    uniqueEntriesMap.set(entry.url, entry);
  });

  return Array.from(uniqueEntriesMap.values());
}
