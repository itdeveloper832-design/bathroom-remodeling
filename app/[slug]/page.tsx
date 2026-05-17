import { Metadata } from "next";
import { notFound } from "next/navigation";
import { bathroomServices } from "@/lib/bathroom-services";
import { generateAllLocationSlugs } from "@/lib/chandler-locations";

import { generateServiceMetadata, ServicePageContent } from "./service-page";
import { generateLocationMetadata, LocationPageContent } from "./location-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  const serviceSlugs = bathroomServices.map((service) => ({
    slug: service.href.replace(/\//g, ""),
  }));
  
  const locationSlugs = generateAllLocationSlugs().map((loc) => ({
    slug: `chandler-az-${loc}`,
  }));

  return [...serviceSlugs, ...locationSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  if (slug.startsWith("chandler-az-")) {
    const locationSlug = slug.replace("chandler-az-", "");
    return generateLocationMetadata({ locationSlug });
  } else {
    return generateServiceMetadata({ serviceSlug: slug });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  if (slug.startsWith("chandler-az-")) {
    const locationSlug = slug.replace("chandler-az-", "");
    return <LocationPageContent locationSlug={locationSlug} />;
  } else {
    return <ServicePageContent serviceSlug={slug} />;
  }
}
