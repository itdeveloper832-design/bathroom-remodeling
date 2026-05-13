import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getAllAreaSlugs } from '@/lib/bathroom-remodeling-areas'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  
  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/gallery', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/financing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/offers', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/terms-of-service', priority: 0.6, changeFrequency: 'yearly' as const },
  ]

  const staticEntries = staticPages.map((page) => ({
    // Trailing slash is required - Apache serves /page/ not /page for static exports
    url: page.url === '' ? `${baseUrl}/` : `${baseUrl}${page.url}/`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Main service pages
  const servicePages = [
    { url: '/bathroom-remodeling-chandler-az', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/shower-remodeling', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathtub-remodeling', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/walk-in-showers', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/shower-replacement', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/tub-to-shower-conversion', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/tub-removal', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/shower-bathtub-upgrade', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/cabinet-countertop-installation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/bathroom-vanity-installation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/bathroom-tile-installation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/bathroom-flooring-installation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/bathroom-lighting-installation', priority: 0.75, changeFrequency: 'monthly' as const },
    { url: '/handicap-accessible-bathroom-chandler', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/small-bathroom-remodeling', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/master-bathroom-remodel', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodel-cost-chandler', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/bathroom-remodeling-mesa-az', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-gilbert-az', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-tempe-az', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-ahwatukee-az', priority: 0.85, changeFrequency: 'monthly' as const },
  ]

  const serviceEntries = servicePages.map((page) => ({
    url: `${baseUrl}${page.url}/`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Area-specific pages (legacy)
  const areaPages = [
    { url: '/bathroom-remodeling-ocotillo', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-sun-lakes', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-downtown-chandler', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-fulton-ranch', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-cooper-commons', priority: 0.85, changeFrequency: 'monthly' as const },
    { url: '/bathroom-remodeling-fox-crossing', priority: 0.85, changeFrequency: 'monthly' as const },
  ]

  const areaEntries = areaPages.map((page) => ({
    url: `${baseUrl}${page.url}/`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Dynamic area pages from [area] route
  const areaSlugs = getAllAreaSlugs()
  const dynamicAreaEntries = areaSlugs.map((slug) => ({
    url: `${baseUrl}/bathroom-remodeling-areas/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // NOTE: chandler-az-[location] programmatic pages are intentionally excluded from
  // the sitemap. Google flagged 66 of them as "Discovered - currently not indexed"
  // which wastes crawl budget. These pages are noindexed via their own metadata.

  return [
    ...staticEntries,
    ...serviceEntries,
    ...areaEntries,
    ...dynamicAreaEntries,
  ]
}
