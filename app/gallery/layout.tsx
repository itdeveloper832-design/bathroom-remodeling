import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {title: "Bathroom Remodeling Project Gallery | Custom Showers | ARZ",description: "Explore our stunning gallery of completed bathroom remodels in Chandler, AZ. Custom tiled walk-in showers, luxury master baths, & vanity upgrades.",
  openGraph: {title: "Project Gallery Ideas | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore project gallery ideas, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/gallery/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Project Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Project Gallery Ideas | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore project gallery ideas, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery/`,
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

