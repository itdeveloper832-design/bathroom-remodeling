import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAreaData, getAllAreaSlugs } from "@/lib/bathroom-remodeling-areas";
import { getAreaPageRedirect } from "@/lib/seo-canonical-map";
import PermanentRedirectPage from "@/components/seo/permanent-redirect-page";

export async function generateStaticParams() {
  const slugs = getAllAreaSlugs();
  return slugs.map((slug) => ({
    area: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const redirectTo = getAreaPageRedirect(areaSlug);

  if (redirectTo) {
    return {
      title: "Redirecting",
      alternates: { canonical: redirectTo },
      robots: { index: false, follow: true },
    };
  }

  const areaData = getAreaData(areaSlug);
  if (!areaData) return {};

  return {
    title: `${areaData.areaName} Bathroom Remodeling Chandler AZ | ARZ`,
    description: areaData.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://arzhomeremodeling.com"}/bathroom-remodeling-areas/${areaSlug}/`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaSlug } = await params;
  const redirectTo = getAreaPageRedirect(areaSlug);

  if (redirectTo) {
    return <PermanentRedirectPage destination={redirectTo} />;
  }

  const areaData = getAreaData(areaSlug);
  if (!areaData) {
    notFound();
  }

  notFound();
}
