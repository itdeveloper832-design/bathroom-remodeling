import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

import { Inter } from 'next/font/google'
import { StickyCallButton } from '@/components/layout/sticky-call-button'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Bathroom Remodeling in Chandler AZ - Professional Contractor`,
    template: `%s - ARZ Home Remodeling`
  },
  description: siteConfig.description,
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
    title: `Bathroom Remodeling in Chandler AZ - Professional Contractor`,
    description: siteConfig.description,
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
    title: `Bathroom Remodeling in Chandler AZ - Professional Contractor`,
    description: siteConfig.description,
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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/optimized/photo-1620626011761-996317b8d101.avif"
          type="image/avif"
          fetchPriority="high"
        />

        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Chandler" />
        <meta name="geo.position" content={`${siteConfig.address.coordinates.lat};${siteConfig.address.coordinates.lng}`} />
        <meta name="ICBM" content={`${siteConfig.address.coordinates.lat}, ${siteConfig.address.coordinates.lng}`} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20" suppressHydrationWarning>
        {children}
        <StickyCallButton />

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9CGXJLLVJ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
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

