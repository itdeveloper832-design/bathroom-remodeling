import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/', 
          '/api/', 
          '/_next/', 
          '/private/',
          '/cgi-bin/',
          '/wp-admin/',
          '/*?', // Prevent indexing of query parameters
          '/*.json$', // Block JSON data files
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Optional: Block AI scrapers to preserve crawl budget for search engines
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}


