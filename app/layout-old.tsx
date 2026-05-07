import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Expert Home Remodeling – Chandler, AZ | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: 'Professional bathroom and kitchen remodeling in Chandler, Arizona. Expert contractors, luxury renovations, free estimates. Top-rated home remodeling services.',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Expert Home Remodeling – Chandler, Arizona | ${siteConfig.name}`,
    description: 'Professional bathroom and kitchen remodeling services in Chandler, Arizona. Transform your home with expert craftsmanship and quality service.',
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Home Remodeling`,
        type: 'image/jpeg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `Expert Home Remodeling – Chandler, AZ | ${siteConfig.name}`,
    description: 'Professional bathroom and kitchen remodeling in Chandler, Arizona. Expert contractors, luxury renovations.',
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
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
  alternates: {
    canonical: siteConfig.url,
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
    <html lang="en">
      <head>
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
    </html>
  )
}
