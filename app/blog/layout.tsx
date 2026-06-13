import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {title: {
    absolute: "Bathroom Remodel Blog | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel blog, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "Bathroom Remodel Blog | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel blog, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/blog-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Blog - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodel Blog | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom remodel blog, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/blog-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

