import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  findLocationBySlug,
  getRelatedLocations,
  generateAllLocationSlugs,
} from "@/lib/chandler-locations";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, Phone } from "lucide-react";

// Generate static pages for all locations
export async function generateStaticParams() {
  const slugs = generateAllLocationSlugs();
  return slugs.map((slug) => ({
    location: slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const location = findLocationBySlug(resolvedParams.location);
  if (!location) return {};

  const displayName =
    location.type === "zip"
      ? `Chandler, AZ ${location.zipData.zip}`
      : location.neighborhood
        ? location.neighborhood.name
        : "Chandler, AZ";

  const title = `Bathroom Remodeling in ${displayName} | Local Contractors`;
  const description = `Expert bathroom remodeling Chandler AZ serving ${displayName}. Licensed local contractors delivering custom showers, tubs, and full renovations. Get a free quote!`;
  const url = `${siteConfig.url}/chandler-az-${resolvedParams.location}`;

  return {
    title,
    description,
    // noindex: these are thin programmatic pages; removing from sitemap + noindex
    // prevents them from being "Discovered - currently not indexed" in GSC
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    alternates: {
      canonical: `${siteConfig.url}/chandler-az-${resolvedParams.location}/`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const resolvedParams = await params;
  const locationSlug = resolvedParams.location;
  const location = findLocationBySlug(locationSlug);

  if (!location) {
    notFound();
  }

  const { type, zipData, neighborhood } = location;
  const isZipPage = type === "zip";

  const displayName = neighborhood
    ? neighborhood.name
    : `${zipData.city}, AZ ${zipData.zip}`;

  const relatedLocations = getRelatedLocations(
    zipData.zip,
    neighborhood?.slug
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 lg:pt-48 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              {!isZipPage && (
                <>
                  <Link
                    href={`/chandler-az-${zipData.slug}`}
                    className="hover:text-primary"
                  >
                    {zipData.city}, AZ {zipData.zip}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
              <span className="text-foreground font-medium">{displayName}</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
                Bathroom Remodeling in {displayName}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {isZipPage
                  ? zipData.description
                  : neighborhood
                    ? neighborhood.description
                    : "Professional bathroom remodeling services with local expertise."}
                {" "}As your trusted local experts for bathroom remodeling in Chandler, AZ, we deliver exceptional craftsmanship tailored to your neighborhood's unique homes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-medium text-center">
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+14803065591"
                  className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context Section */}
        {neighborhood && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-semibold mb-6">
                  {neighborhood.name} Bathroom Remodeling Contractor
                </h2>

                {/* Market Insights */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Local Market Insight
                    </h3>
                    <p className="text-muted-foreground">
                      {neighborhood.marketInsight}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Community Character
                    </h3>
                    <p className="text-muted-foreground">
                      {neighborhood.localContext}
                    </p>
                  </div>
                </div>

                {/* Home Styles */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Popular Home Styles in {neighborhood.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {neighborhood.homeStylesCommon &&
                      neighborhood.homeStylesCommon.map((style, idx) => (
                        <span
                          key={idx}
                          className="bg-background px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {style}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Service Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-semibold mb-12">
              Our Professional Remodeling Process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "Meet at your home to discuss your bathroom remodel vision and budget.",
                },
                {
                  step: "02",
                  title: "Design & Planning",
                  desc: "Create detailed layout plans and 3D renderings for your Chandler AZ home.",
                },
                {
                  step: "03",
                  title: "Permitting & Prep",
                  desc: "Our contractor team handles all local permits and site preparation safely.",
                },
                {
                  step: "04",
                  title: "Expert Installation",
                  desc: "Professional installation ensuring quality craftsmanship from start to finish.",
                },
                {
                  step: "05",
                  title: "Final Inspection",
                  desc: "Thorough walkthrough and punch list completion for your new bathroom.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Locations */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Other Service Areas in {zipData.city}
            </h2>

            {/* Same ZIP neighborhoods */}
            {relatedLocations.sameZipNeighborhoods.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">
                  Other neighborhoods in {zipData.zip}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedLocations.sameZipNeighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/chandler-az-${n.slug}`}
                      className="p-4 border border-border bg-background rounded-lg hover:border-primary/50 transition"
                    >
                      <h4 className="font-semibold mb-2">{n.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {n.zipCode}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other ZIP codes */}
            {relatedLocations.otherZips.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Service areas by ZIP code
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedLocations.otherZips.map((zip) => (
                    <Link
                      key={zip.zip}
                      href={`/chandler-az-${zip.slug}`}
                      className="p-4 border border-border bg-background rounded-lg hover:border-primary/50 transition"
                    >
                      <h4 className="font-semibold mb-2">{zip.zip}</h4>
                      <p className="text-sm text-muted-foreground">
                        {zip.neighborhoods.length} neighborhoods
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-serif font-semibold mb-6">
              Ready to transform your {displayName} bathroom?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our local remodeling contractors for a free consultation and detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-center">
                Schedule Consultation
              </Link>
              <a
                href="tel:+14803065591"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold"
              >
                +14803065591
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
