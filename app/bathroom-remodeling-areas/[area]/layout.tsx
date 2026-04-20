import { Metadata, ResolvingMetadata } from "next"
import { siteConfig } from "@/lib/site-config"
import { getAreaData, getAllAreaSlugs } from "@/lib/bathroom-remodeling-areas"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ area: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { area } = await params
  const areaData = getAreaData(area)

  if (!areaData) {
    notFound()
  }

  const title = `${areaData.fullName} – Bathroom Remodeling`
  const description = `Professional bathroom remodeling in ${areaData.areaName}. ${areaData.description} Expert contractors serving ${areaData.areaName} with quality renovations.`
  const url = `${siteConfig.url}/bathroom-remodeling-areas/${area}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${areaData.fullName} - Bathroom Remodeling`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
  }
}

export async function generateStaticParams() {
  const areaSlugs = getAllAreaSlugs()
  return areaSlugs.map((slug) => ({
    area: slug,
  }))
}

export default function AreaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
