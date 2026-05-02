import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const openSans = Open_Sans({ 
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Bathroom Remodeling in Chandler & Phoenix, AZ | Licensed Contractors',
  description: 'Professional bathroom remodeling, shower renovations, and tub-to-shower conversions in Chandler, Phoenix, and Arizona. Licensed contractors with 20+ years experience. Free quotes.',
  keywords: 'bathroom remodeling Arizona, shower renovation Chandler, tub to shower conversion, bathroom contractors Phoenix',
  generator: 'v0.app',
  robots: 'index, follow',
  openGraph: {
    title: 'Bathroom Remodeling Experts | ARZ Remodeling',
    description: 'Professional bathroom and shower remodeling in Arizona',
    type: 'website',
    url: 'https://arzhomeremodeling.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'ARZ Remodeling',
  'description': 'Professional bathroom remodeling and shower renovation services in Arizona',
  'url': 'https://arzhomeremodeling.com',
  'telephone': '(480) 555-1234',
  'email': 'info@arzhomeremodeling.com',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'US',
    'addressRegion': 'AZ',
  },
  'areaServed': ['Chandler', 'Phoenix', 'Tempe', 'Arizona'],
  'serviceType': ['Bathroom Remodeling', 'Shower Renovation', 'Tub to Shower Conversion'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="font-open-sans bg-white text-slate-900 antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
