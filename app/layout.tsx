import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

// Preload critical fonts
const geistSans = `
@font-face {
  font-family: 'system-ui';
  font-weight: 400;
  font-style: normal;
}
`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Bathroom Remodeling Contractors Chandler AZ | Best`,
    template: `%s | ARZ Home Remodeling`
  },
  description: 'Best bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel cost, licensed bathroom renovation contractors. Free bathroom remodel quote!',
  keywords: ['bathroom remodeling contractors chandler az', 'bathroom remodel cost chandler az', 'bathroom remodel services chandler az', 'hire bathroom remodel contractor chandler az', 'bathroom renovation contractors chandler az', 'best bathroom remodeling contractors chandler az', 'affordable bathroom remodeling contractors chandler az', 'licensed bathroom remodeling contractors chandler az'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Bathroom Remodeling Contractors Chandler AZ | Best`,
    description: 'Best bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel cost, free estimates!',
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: 'ARZ Home Remodeling - Chandler Arizona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Bathroom Remodeling Contractors Chandler AZ`,
    description: 'Best bathroom remodeling contractors Chandler AZ. Free bathroom remodel quote!',
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'FFV2ndN2ia6STi_P5mni2D73Ec1dbptXHNQuIVIl3YA',
  },
  icons: {
    icon: '/images/logo-main.png',
    apple: '/images/logo-main.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#6BB3D9',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Critical performance optimizations - Resource Hints */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Preload critical LCP image with fetchpriority */}
        <link rel="preload" fetchPriority="high" href="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop&fm=webp" as="image" type="image/webp" />
        <link rel="preload" fetchPriority="high" href="/images/logo-main.png" as="image" type="image/png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Chandler" />
        <meta name="geo.position" content="33.3062;-111.8413" />
        <meta name="ICBM" content="33.3062, -111.8413" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${siteConfig.url}/#organization`,
              "name": siteConfig.name,
              "url": siteConfig.url,
              "logo": `${siteConfig.url}/images/logo-main.png`,
              "image": `${siteConfig.url}/images/hero-bathroom.jpg`,
              "description": siteConfig.description,
              "telephone": siteConfig.phone,
              "email": siteConfig.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": siteConfig.address.street,
                "addressLocality": siteConfig.address.city,
                "addressRegion": siteConfig.address.state,
                "postalCode": siteConfig.address.zip,
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": siteConfig.address.coordinates.lat,
                "longitude": siteConfig.address.coordinates.lng
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00"
              ],
              "priceRange": "$$",
              "areaServed": siteConfig.serviceAreas,
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": siteConfig.address.coordinates.lat,
                  "longitude": siteConfig.address.coordinates.lng
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bathroom Remodeling Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bathroom Remodeling Contractors Chandler AZ",
                      "description": "Professional bathroom remodeling contractors in Chandler, AZ with affordable bathroom remodel cost"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bathroom Renovation Services",
                      "description": "Licensed bathroom renovation contractors offering bathroom installation services"
                    }
                  }
                ]
              },
              "sameAs": [
                siteConfig.social.facebook,
                siteConfig.social.instagram,
                siteConfig.social.twitter,
                siteConfig.social.pinterest
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
      {/* Defer Vercel analytics - not critical for rendering */}
      <Script src="/_vercel/insights/script.js" strategy="lazyOnload" />
    </html>
  )
}
