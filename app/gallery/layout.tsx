import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Gallery Chandler AZ | Projects",
  description: "Browse completed bathroom remodeling projects in Chandler, AZ. Get inspiration for your next renovation project.",
  openGraph: {
    title: "Bathroom Remodel Project Gallery | ARZ Home Remodeling",
    description: "Explore our stunning gallery of completed bathroom remodels in Chandler, AZ. See custom tiled walk-in showers, master bath retreats & vanity upgrades.",
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
    card: "summary_large_image",
    title: "Bathroom Remodel Project Gallery | ARZ Home Remodeling",
    description: "Explore our stunning gallery of completed bathroom remodels in Chandler, AZ. See custom tiled walk-in showers, master bath retreats & vanity upgrades.",
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

