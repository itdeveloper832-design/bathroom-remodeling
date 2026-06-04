import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  findLocationBySlug,
  getRelatedLocations,
} from "@/lib/chandler-locations";
import { getZipHubFaqs } from "@/lib/chandler-zip-faqs";
import { getCanonicalNeighborhoodLink } from "@/lib/seo-canonical-map";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, Phone, ShieldCheck, DollarSign, Droplets, ArrowRight } from "lucide-react";
import CustomFAQ from "@/components/custom-faq";

// Generate metadata
export async function generateLocationMetadata({
  locationSlug,
}: {
  locationSlug: string;
}): Promise<Metadata> {
  const location = findLocationBySlug(locationSlug);
  if (!location) return {};

  let locationOverrides: Record<string, { title: string; description: string }> = {};
  try {
    locationOverrides = require("../../lib/location-metadata-overrides.json");
  } catch (e) {
    // Safe fallback
  }

  const override = locationOverrides[locationSlug];

  const displayName =
    location.type === "zip"
      ? `Chandler, AZ ${location.zipData.zip}`
      : location.neighborhood
        ? location.neighborhood.name
        : "Chandler, AZ";

  const isZip = /^\d{5}$/.test(locationSlug);
  const defaultTitle = isZip
    ? `Bathroom Remodeling ZIP ${location.zipData.zip} | ARZ Home Remodeling`
    : `Bathroom Remodeling ${displayName} | ARZ Home Remodeling`;
  const defaultDescription = isZip
    ? `Licensed bathroom remodeling contractor in ZIP ${location.zipData.zip}, Chandler AZ. Custom walk-in showers & tub conversions. Free estimates!`
    : `Licensed bathroom remodeling contractor in ${displayName}, Chandler AZ. Custom walk-in showers & tub conversions. Free estimates!`;

  const title = override ? override.title : defaultTitle;
  const description = override ? override.description : defaultDescription;

  return {
    title: {
      absolute: title
    },
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/chandler-az-${locationSlug}/`,
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/chandler-az-${locationSlug}/`,
    },
  };
}

// Helper to generate hyper-local, 100% human-optimized FAQs dynamically
function getDynamicLocationFaqs(displayName: string, isZip: boolean, zipCode: string, name: string) {
  return [
    {
      question: `How long does a bathroom remodel take in ${displayName}?`,
      answer: `A standard guest bathroom renovation in ${displayName} typically takes ten to fourteen days of active construction. Larger master suite remodels or custom renovations in upscale developments can take three to four weeks. We provide a complete itemized schedule before any demolition starts.`
    },
    {
      question: `Do I need a permit for bathroom remodeling in ${displayName}?`,
      answer: `Yes, the City of Chandler requires permits for structural updates, major plumbing changes, or new electrical circuits. We coordinate directly with the City of Chandler Building Division to secure all required permits and schedule inspections, ensuring your project is fully compliant with local safety codes.`
    },
    {
      question: `How do you protect bathrooms in ${displayName} from hard water damage?`,
      answer: `Chandler municipal water is highly mineralized, often exceeding eighteen grains of hardness. To prevent white calcium buildup and scale on your new fixtures, we install premium non-porous porcelain tiles and high-performance stain-resistant epoxy grout. We also treat all glass shower enclosures with durable hydrophobic coatings that repel water and resist scaling.`
    },
    {
      question: `What is the average cost of a bathroom remodel in ${displayName}?`,
      answer: isZip 
        ? `In the ${zipCode} area, guest bathroom updates typically range from ten thousand to eighteen thousand dollars, while luxury master bath transformations range from twenty five thousand to seventy five thousand dollars. We provide a fixed, detailed written quote with zero hidden charges.`
        : `For homes in ${name}, bathroom updates typically range from ten thousand to eighteen thousand dollars, and full master suite renovations range from twenty five thousand to seventy five thousand dollars depending on scope and finishes. We offer free on-site consultations to discuss your specific budget.`
    }
  ];
}

export async function LocationPageContent({
  locationSlug,
}: {
  locationSlug: string;
}) {
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

  const localFaqs = isZipPage
    ? getZipHubFaqs(zipData)
    : getDynamicLocationFaqs(
        displayName,
        isZipPage,
        zipData.zip,
        neighborhood?.name || ""
      );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 lg:pt-48 pb-16 bg-gradient-to-b from-primary/10 to-transparent animate-in fade-in duration-700">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              {!isZipPage && (
                <>
                  <Link
                    href={`/chandler-az-${zipData.slug}/`}
                    className="hover:text-primary transition-colors"
                  >
                    {zipData.city}, AZ {zipData.zip}
                  </Link>
                  <ChevronRight className="w-4 h-4 flex-shrink-0" />
                </>
              )}
              <span className="text-foreground font-medium">{displayName}</span>
            </div>

            {/* Hero Content */}
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight">
                Bathroom Remodeling in {displayName}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {isZipPage
                  ? zipData.description
                  : neighborhood
                    ? neighborhood.description
                    : "Professional bathroom remodeling services with local expertise."}
                {" "}As your trusted local experts for bathroom remodeling in Chandler, AZ, we deliver exceptional craftsmanship designed specifically for your neighborhood's unique homes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="bg-primary text-white px-8 py-3.5 rounded-lg hover:bg-primary/90 transition font-medium text-center">
                  Get Free Estimate
                </Link>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="border border-primary text-primary px-8 py-3.5 rounded-lg hover:bg-primary/5 transition font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context Section for Neighborhoods */}
        {neighborhood && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                  {neighborhood.name} Bathroom Remodeling Contractor
                </h2>

                {/* Market Insights */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-background p-6 rounded-xl border border-border">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      Local Market Insight
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {neighborhood.marketInsight}
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl border border-border">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      Community Character
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {neighborhood.localContext}
                    </p>
                  </div>
                </div>

                {/* Home Styles */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-foreground">
                    Popular Home Styles in {neighborhood.name}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {neighborhood.homeStylesCommon &&
                      neighborhood.homeStylesCommon.map((style, idx) => (
                        <span
                          key={idx}
                          className="bg-background px-4 py-2 rounded-lg text-sm font-medium border border-border text-foreground"
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

        {/* Local Context Section for ZIP Pages (Massive SEO Upgrade!) */}
        {isZipPage && (
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-foreground">
                Premium Neighborhoods We Serve in {zipData.zip}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide premium, custom bathroom remodeling services across all communities in the {zipData.zip} area. 
                Each neighborhood features unique home designs, varying family needs, and distinct architectural guidelines:
              </p>
              <div className="grid gap-6">
                {zipData.neighborhoods.map((n) => (
                  <div key={n.slug} className="bg-background p-6 rounded-xl border border-border hover:border-primary/35 transition">
                    <h3 className="font-semibold text-lg mb-2 text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      {n.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{n.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {n.homeStylesCommon.map((style, idx) => (
                        <span key={idx} className="bg-secondary px-3 py-1 rounded text-xs font-medium text-foreground">
                          {style}
                        </span>
                      ))}
                    </div>
                    <Link href={getCanonicalNeighborhoodLink(n.slug)} className="text-primary text-sm font-semibold hover:underline flex items-center gap-1.5">
                      View {n.name} bathroom remodeling <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust Signals */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-foreground">
              Why Homeowners Choose ARZ Home Remodeling
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-xl border border-border text-center">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Licensed Contractor - ROC #338304</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">Fully bonded and insured for complete residential renovations in Arizona.</p>
              </div>
              <div className="bg-secondary p-6 rounded-xl border border-border text-center">
                <Droplets className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Hard Water Mitigation</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">Epoxy grout and non-porous tile systems to resist high mineral buildup.</p>
              </div>
              <div className="bg-secondary p-6 rounded-xl border border-border text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Fixed Quote Guarantee</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">Zero hidden fees or change order surprises. The price you see is the price you pay.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-foreground">
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
                  desc: "Create detailed layout plans and select high quality, low maintenance materials.",
                },
                {
                  step: "03",
                  title: "Permitting & Prep",
                  desc: "Our contractor team handles all local permits with the City of Chandler Building Division safely.",
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
                <div key={item.step} className="flex gap-6 items-start bg-background p-6 rounded-xl border border-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic local FAQs (Massive AEO / GEO Edge!) */}
        <CustomFAQ
          title={`Frequently Asked Questions About Bathroom Remodeling in ${displayName}`}
          description={`Get direct, factual answers about our customized bathroom remodeling services in the ${displayName} area.`}
          faqs={localFaqs}
        />

        {/* Related Locations */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center text-foreground">
              Other Service Areas in {zipData.city}
            </h2>

            {/* Same ZIP neighborhoods */}
            {relatedLocations.sameZipNeighborhoods.length > 0 && (
              <div className="mb-12 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Other neighborhoods in {zipData.zip}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedLocations.sameZipNeighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={getCanonicalNeighborhoodLink(n.slug)}
                      className="p-4 border border-border bg-background rounded-lg hover:border-primary/50 transition"
                    >
                      <h4 className="font-semibold mb-2 text-foreground">{n.name}</h4>
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
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Service areas by ZIP code
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedLocations.otherZips.map((zip) => (
                    <Link
                      key={zip.zip}
                      href={`/chandler-az-${zip.slug}/`}
                      className="p-4 border border-border bg-background rounded-lg hover:border-primary/50 transition"
                    >
                      <h4 className="font-semibold mb-2 text-foreground">{zip.zip}</h4>
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
              Ready to remodel your {displayName} bathroom?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our local remodeling contractors for a free consultation and detailed estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-center">
                Schedule Consultation
              </Link>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-semibold"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
