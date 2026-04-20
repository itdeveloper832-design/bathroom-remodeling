import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Blog | Expert Tips & Design Ideas - Chandler, AZ",
  description: "Discover expert bathroom remodeling tips, design trends, and inspiration from Chandler, Arizona's top bathroom remodelers. Learn about costs, materials, and latest design ideas.",
  keywords: ["bathroom remodeling blog", "bathroom design tips", "chandler az bathroom renovation", "bathroom remodel ideas", "modern bathroom design", "bathroom renovation costs"],
  openGraph: {
    title: "Bathroom Remodeling Blog | Chandler Bathroom Remodeling",
    description: "Expert bathroom remodeling tips, design trends, and inspiration from Chandler, Arizona's trusted remodeling company.",
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
    card: "summary_large_image",
    title: "Bathroom Remodeling Blog | Chandler Bathroom Remodeling",
    description: "Expert bathroom remodeling tips, design trends, and inspiration from Chandler, Arizona's trusted remodeling company.",
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
