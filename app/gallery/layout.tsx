import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Photos Chandler AZ | Gallery",
  description: "View bathroom remodeling photos in Chandler, AZ. Before and after gallery of shower remodels, bathtub renovations, and luxury bathroom projects.",
  openGraph: {
    title: "Bathroom Remodeling Photos Chandler AZ | Gallery",
    description: "View bathroom remodeling before and after photos in Chandler, AZ.",
    url: `${siteConfig.url}/gallery`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
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
    images: [`${siteConfig.url}/og-image.jpg`],
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
