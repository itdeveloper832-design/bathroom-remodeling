import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateAllLocationSlugs } from "@/lib/chandler-locations";

import { generateLocationMetadata, LocationPageContent } from "./location-page";

// Only generate static params for location slugs.
// Service pages have their own dedicated directories (e.g. app/shower-remodeling/)
// and must NOT be duplicated here — that causes route conflicts and 404s.
export const dynamicParams = false;

export async function generateStaticParams() {
  const locationSlugs = generateAllLocationSlugs().map((loc) => ({
    slug: `chandler-az-${loc}`,
  }));

  return locationSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug.startsWith("chandler-az-")) {
    const locationSlug = slug.replace("chandler-az-", "");
    return generateLocationMetadata({ locationSlug });
  }

  return {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug.startsWith("chandler-az-")) {
    const locationSlug = slug.replace("chandler-az-", "");
    return <LocationPageContent locationSlug={locationSlug} />;
  }

  // Any slug not matching a location pattern is not found.
  // All service pages are handled by their own dedicated routes.
  notFound();
}
