import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateAllLocationSlugs } from "@/lib/chandler-locations";
import { generateLocationMetadata, LocationPageContent } from "./location-page";
import { getChandlerLocationRedirect } from "@/lib/seo-canonical-map";
import PermanentRedirectPage from "@/components/seo/permanent-redirect-page";

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
    const redirectTo = getChandlerLocationRedirect(locationSlug);

    if (redirectTo) {
      return {
        title: "Redirecting",
        alternates: { canonical: redirectTo },
        robots: { index: false, follow: true },
      };
    }

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
    const redirectTo = getChandlerLocationRedirect(locationSlug);

    if (redirectTo) {
      return <PermanentRedirectPage destination={redirectTo} />;
    }

    return <LocationPageContent locationSlug={locationSlug} />;
  }

  notFound();
}
