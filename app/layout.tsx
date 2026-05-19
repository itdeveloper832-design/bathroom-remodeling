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
  adjustFontFallback: true, // Prevents layout shift
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
  adjustFontFallback: true, // Prevents layout shift
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Bathroom Remodeling Contractors Chandler AZ | ARZ Home Remodeling`,
    template: `%s | ARZ Home Remodeling`
  },
  description: 'Top-rated bathroom remodel Chandler. Expert bathroom remodeling Chandler AZ services including tub to shower conversion, accessible showers, and tile installation. Free quotes!',
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
    title: `Bathroom Remodeling Contractors Chandler AZ | ARZ Home Remodeling`,
    description: 'Top-rated bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel cost, free estimates!',
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
    title: `Bathroom Remodeling Contractors Chandler AZ | ARZ Home Remodeling`,
    description: 'Top-rated bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel cost, free estimates!',
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  verification: {
    google: 'FFV2ndN2ia6STi_P5mni2D73Ec1dbptXHNQuIVIl3YA',
    other: {
      'msvalidate.01': 'B0C98ADCACAB379AE270B05F347ED07F',
    },
  },
  icons: {
    icon: "/images/compressed-favicon.png",
    shortcut: "/images/compressed-favicon.png",
    apple: "/images/compressed-favicon.png",
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
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload critical LCP image */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/optimized/photo-1620626011761-996317b8d101.webp" 
          type="image/webp" 
          fetchPriority="high"
        />

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
              "@type": "HomeAndConstructionBusiness",
              "name": "ARZ Home Remodeling",
              "url": "https://arzhomeremodeling.com",
              "telephone": "(229) 306-5591",
              "email": "info@arzremodeling.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6710 W Chicago St",
                "addressLocality": "Chandler",
                "addressRegion": "AZ",
                "postalCode": "85226",
                "addressCountry": "US"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 33.3009334, "longitude": -111.9605964 },
              "priceRange": "$$-$$$",
              "openingHoursSpecification": [
                {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"18:00"},
                {"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"09:00","closes":"16:00"}
              ],
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "50", "bestRating": "5" }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20" suppressHydrationWarning>
        {children}
        <StickyCallButton />

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9CGXJLLVJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y9CGXJLLVJ');
          `}
        </Script>
      </body>
    </html>
  )
}

