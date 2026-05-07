import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Remodel Portfolio Chandler AZ | Past Work",
  description: "View our stunning bathroom remodel portfolio in Chandler AZ. See recent master bath and shower transformations. Get inspired!",
  openGraph: {
    title: "Bathroom Remodeling Photos Chandler AZ | Gallery",
    description: "View bathroom remodeling before and after photos in Chandler, AZ.",
    url: `${siteConfig.url}/gallery`,
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
    title: "Bathroom Remodeling Photos Chandler AZ | Gallery",
    description: "View bathroom remodeling before and after photos in Chandler, AZ.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
