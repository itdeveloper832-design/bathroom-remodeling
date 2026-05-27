import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

import { StickyCallButton } from '@/components/layout/sticky-call-button'
import { LocalBusinessSchema, OrganizationSchema } from '@/components/seo/json-ld'


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
  themeColor: '#1A2E4A',
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="geo.region" content="US-AZ" />
        <meta name="geo.placename" content="Chandler" />
        <meta name="geo.position" content={`${siteConfig.address.coordinates.lat};${siteConfig.address.coordinates.lng}`} />
        <meta name="ICBM" content={`${siteConfig.address.coordinates.lat}, ${siteConfig.address.coordinates.lng}`} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Microsoft Clarity Tracking Script */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wwkr52xfsa");
          `}
        </Script>
      </head>
      <body className="antialiased bg-background text-foreground selection:bg-primary/20" suppressHydrationWarning>
        <LocalBusinessSchema />
        <OrganizationSchema />
        {children}
        <StickyCallButton />

        {/* Umami Analytics (Conditional on Website ID) */}
        {siteConfig.umamiWebsiteId && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={siteConfig.umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}

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

