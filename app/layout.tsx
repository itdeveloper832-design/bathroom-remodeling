import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

import { Inter, Outfit } from 'next/font/google'
import { StickyCallButton } from '@/components/layout/sticky-call-button'

// Load only 2 specific weights instead of the full variable font range
// → eliminates ~60-80KB of font data the browser would otherwise parse
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
  fallback: ['Georgia', 'serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Bathroom Remodeling Chandler AZ | Expert Contractors`,
    template: `%s | ARZ Remodeling`
  },
  description: 'Best bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel cost, licensed bathroom renovation contractors. Free bathroom remodel quote!',
  keywords: [
    'bathroom remodeling chandler az',
    'bath remodel chandler',
    'shower remodeling chandler',
    'tub to shower conversion chandler',
    'master bath renovation chandler',
    'licensed bathroom contractor chandler',
  ],

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
    title: `Bathroom Remodeling Chandler AZ | Expert Contractors`,
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
  verification: {
    google: 'FFV2ndN2ia6STi_P5mni2D73Ec1dbptXHNQuIVIl3YA',
    other: {
      'msvalidate.01': 'B0C98ADCACAB379AE270B05F347ED07F',
    },
  },
  icons: {
    // Use optimized SVG icon - removes the 308KB favicon.png from critical path
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Preloads handled by Next.js Image component priority={true} */}

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Chandler" />
        <meta name="geo.position" content={`${siteConfig.address.coordinates.lat};${siteConfig.address.coordinates.lng}`} />
        <meta name="ICBM" content={`${siteConfig.address.coordinates.lat}, ${siteConfig.address.coordinates.lng}`} />
        
        {/* Security & Performance Headers (Simulated via Meta) */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

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
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "Arizona Registrar of Contractors License",
                "credentialId": siteConfig.license,
                "url": "https://roc.az.gov/"
              },
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
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20" suppressHydrationWarning>
        {children}
        <StickyCallButton />
      </body>
    </html>
  )
}
