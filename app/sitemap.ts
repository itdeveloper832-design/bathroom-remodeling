import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getAllAreaSlugs } from '@/lib/bathroom-remodeling-areas'
import { generateAllLocationSlugs } from '@/lib/chandler-locations'
import { getAppRoutes, getRoutePriority, getRouteFrequency, getRouteLastMod, isNoIndexRoute } from '@/lib/seo-utils'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  
  // 1. Discover all file-based routes automatically
  const discoveredRoutes = getAppRoutes()
  
  const fileEntries = discoveredRoutes.map((route) => {
    // Normalize path and ensure trailing slash
    const normalizedRoute = route === '/' ? '' : route.endsWith('/') ? route : `${route}/`
    const url = `${baseUrl}${normalizedRoute}`
    
    return {
      url,
      lastModified: getRouteLastMod(route),
      changeFrequency: getRouteFrequency(route),
      priority: getRoutePriority(route),
    }
  })

  // 2. Add Programmatic Area Pages
  const areaSlugs = getAllAreaSlugs()
  const dynamicAreaEntries = areaSlugs.map((slug) => {
    const route = `/bathroom-remodeling-areas/${slug}/`
    return {
      url: `${baseUrl}${route}`,
      lastModified: getRouteLastMod(route),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }
  })

  // 3. Add Programmatic Location Pages
  // These are critical for Rank & Rent local SEO discovery
  const locationSlugs = generateAllLocationSlugs()
  const dynamicLocationEntries = locationSlugs.map((slug) => {
    const route = `/chandler-az-${slug}/`
    return {
      url: `${baseUrl}${route}`,
      lastModified: getRouteLastMod(route),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  })

  // 4. Combine and Filter
  const allEntries = [
    ...fileEntries,
    ...dynamicAreaEntries,
    ...dynamicLocationEntries,
  ]

  const uniqueEntriesMap = new Map()
  
  allEntries.forEach(entry => {
    // 1. Skip dynamic route placeholders like [location]
    if (entry.url.includes('[') || entry.url.includes(']')) return;
    
    // 2. Extract route from URL for checking noindex
    const route = entry.url.replace(baseUrl, '').replace(/\/$/, '') || '/';
    
    // 3. Skip if noindex is detected
    if (isNoIndexRoute(route)) return;

    uniqueEntriesMap.set(entry.url, entry)
  })

  return Array.from(uniqueEntriesMap.values())

}


