import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Maricopa AZ | Free Estimate",
  description: "Transform your Maricopa bathroom with modern remodeling solutions. Trusted contractors, premium finishes & free quotes.",
  openGraph: {
    title: "Bathroom Remodeling Maricopa AZ - Licensed & Insured - ARZ",
    description: "Expert bathroom remodeling in Maricopa, AZ. Specialized ADA curbless showers, tub-to-shower conversions, and guest bath transformations. Free quotes.",
    url: `${siteConfig.url}/bathroom-remodeling-maricopa-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Maricopa AZ - Licensed & Insured - ARZ",
    description: "Expert bathroom remodels and curbless shower conversions in Maricopa, AZ. Fully licensed ROC338304.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-maricopa-az/`,
  },
};

const maricopaFaqs = [
  {
    question: "Do I need HOA approval for a bathroom remodel in Maricopa active adult communities?",
    answer:
      "Yes, active adult communities in Maricopa (such as Province) have strict guidelines regarding contractor gate access, dumpster placements, and working hours. Cosmetic interior updates typically do not need formal approval, but layout shifts, slab trenching, or window adjustments require compliance. ARZ Home Remodeling manages the gate clearances and coordinates with the HOA board directly."
  },
  {
    question: "What is the benefit of a curbless walk-in shower for Maricopa seniors?",
    answer:
      "A curbless (zero-threshold) walk-in shower removes the 5-inch step-over curb, eliminating the #1 trip hazard in the bathroom. This allows seamless entry, fits roll-in wheelchair requirements, and looks incredibly modern. When paired with slip-resistant porcelain tiles and structural grab bars, it guarantees safety and independence."
  },
  {
    question: "What are the permit requirements for a bathroom remodel in Maricopa, AZ?",
    answer:
      "Under City of Maricopa regulations, a permit is required for structural framing modifications, plumbing layout changes (like moving a toilet or drain), or major electrical subpanel runs. ARZ Home Remodeling handles the entire permit submission and inspections process with the City of Maricopa Planning & Development Department."
  },
  {
    question: "How long does a master bathroom renovation take?",
    answer:
      "A complete master suite remodel in Maricopa generally takes four to six weeks of active construction. A tub-to-shower conversion or a simple guest bathroom refresh can be completed in five to ten days. We provide a firm written schedule before any demolition begins."
  },
  {
    question: "How does Maricopa's hard water affect tile showers?",
    answer:
      "Maricopa's municipal water has high concentrations of calcium and magnesium minerals. To protect your investment, we specify high-density, non-porous porcelain tiles and install commercial-grade resin epoxy grout, which prevents hard water minerals from penetrating and staining the joints."
  }
];

const services = [
  {
    title: "Zero-Threshold Curbless Showers",
    href: "/ada-bathroom-remodeling/",
    description:
      "Designed specifically for senior safety and modern aesthetic appeal. We lower the subfloor to build a flat, seamless entry tile shower, equipped with heavy-duty grab bars, custom seating, and high-flow linear drains.",
    price: "From $8,500",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "We remove old, unused acrylic bathtubs or high-sided garden tubs and replace them with spacious tiled walk-in showers. This is our most requested service for homeowners looking to maximize space.",
    price: "$6,000 to $14,000",
  },
  {
    title: "Complete Master Bath Renovations",
    href: "/master-bathroom-remodel/",
    description:
      "Luxury master transformations featuring freestanding soaking tubs, custom double vanities with quartz tops, porcelain tile surrounds, custom lighting, and modern frameless glass enclosures.",
    price: "$18,000 to $45,000+",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "AZ Licensed ROC338304",
    body: "Fully licensed residential contracting firm, verified with the Arizona Registrar of Contractors.",
  },
  {
    icon: Star,
    title: "2-Year Written Warranty",
    body: "We stand behind every joint, valve, and tile seam with a full 2-year workmanship warranty.",
  },
  {
    icon: MapPin,
    title: "Maricopa Local Specialist",
    body: "Remodeling bathrooms in active adult communities like Province and master-planned neighborhoods.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Guarantee",
    body: "You receive a fully itemized proposal with guaranteed final pricing. No hidden costs, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Mineral Water Defence",
    body: "We utilize industrial-grade epoxy grouts and hydrophobic nano-coated glass to resist scale scaling.",
  },
  {
    icon: Clock,
    title: "Firm Project Timelines",
    body: "Our crew works consecutively on your home every business day until the final walkthrough is complete.",
  },
];

const pricingTiers = [
  {
    label: "Guest Bathroom Update",
    detail: "Vanity, toilet, fixtures, paint",
    range: "$4,500 to $9,000",
  },
  {
    label: "Guest Bathroom Full Remodel",
    detail: "Tile, shower, vanity, flooring",
    range: "$10,000 to $18,000",
  },
  {
    label: "Tub-to-Shower Conversion",
    detail: "Demo, waterproofing, custom shower build",
    range: "$6,000 to $13,000",
  },
  {
    label: "Master Bathroom Remodel",
    detail: "Full scope: shower, vanity, tile, lighting",
    range: "$18,000 to $45,000+",
  },
];

const process = [
  { step: "01", title: "Free Phone Consultation", body: "We discuss your specific safety and aesthetic goals, layout ideas, and budget." },
  { step: "02", title: "In-Home Assessment", body: "We evaluate your current plumbing, take precise measurements, and review catalogs." },
  { step: "03", title: "Detailed Fixed Proposal", body: "You get a transparent, fully itemized quote outlining all labor, materials, and permits." },
  { step: "04", title: "Zoning & Permitting", body: "We pull all necessary permits through Pinal County and City of Maricopa offices." },
  { step: "05", title: "Execution & Clean Build", body: "Our clean, licensed crew completes all demolition, waterproofing, plumbing, and tiling." },
  { step: "06", title: "Milestone Walkthrough", body: "You inspect every square inch with our supervisor. 100% satisfaction guarantee." },
];

const neighborhoods = [
  "Province", "Tortosa", "Glennwilde", "Homestead", "Cobblestone", "Senita",
  "85138", "85139", "Maricopa Meadows", "Rancho El Dorado", "Lakes at Rancho El Dorado"
];

export default function MaricopaPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Maricopa Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-maricopa-az/" } ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Maricopa, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Maricopa, AZ. Specialized curbless tile walk-in showers, active-adult safety tub conversions, and complete bathroom renovations in Province and Rancho El Dorado."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-maricopa-az/`}
      />
      <FAQSchema faqs={maricopaFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Maricopa AZ"
        priceRange="$4,500 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-maricopa-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Licensed Bathroom Remodeling in Maricopa, AZ"
          subtitle="Zero-Threshold Curbless Showers & Full Renovations"
          description="Transform your bathroom into a safe, luxurious, and functional retreat. Specializing in curbless walk-in showers, tub-to-shower conversions, and premium master bathroom renovations tailored for active adults in Province, Rancho El Dorado, and across Maricopa."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Maricopa AZ", url: `${siteConfig.url}/bathroom-remodeling-maricopa-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Maricopa homeowners deserve custom bathrooms built to stand the test of time. Whether you live in a beautiful active adult community like **Province** or a spacious family estate in **Rancho El Dorado**, upgrading your bathroom is one of the most reliable ways to improve daily comfort, enhance accessibility, and boost home resale value. If you've been looking for an expert **bathroom remodel maricopa**, a trusted **bathroom remodeling maricopa**, or a licensed **bath remodeler in maricopa**, our team is ready to serve.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we are proud to offer premium **bathroom remodeling in Maricopa, AZ**. We specialize in senior-friendly **zero-threshold walk-in showers**, custom tub conversions, and high-end master bathroom transformations across **85138 and 85139**. We are fully licensed under **ROC #ROC338304**, ensuring your home receives professional-grade craftsmanship, absolute integrity, and fixed-price contracts.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Specialized Active-Adult Community Integrations (Province):** Active adult homes require unique safety designs. We specialize in retrofitting guest and master baths with ADA-compliant curbless showers. By lowering the concrete slab or structural subfloor, we install zero-threshold entries that eliminate the trip hazard. We integrate concealed support blocking behind the walls to anchor heavy-duty safety grab bars, built-in tiled shower benches, and high-pressure hand showers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Maricopa Building Codes & City Permits:** Relocating drainage lines, shifting load-bearing partitions, or expanding electrical wiring requires a permit from the **City of Maricopa Planning & Development Department** (located at 39700 W Civic Center Plaza). ARZ Home Remodeling manages the complete structural drafting, code compliance review, permit acquisition, and municipal inspection pipeline, guaranteeing that your renovation is fully code-compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Your Free In-Home Consultation Today!
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+15205693339" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Maricopa Community Landmarks & Recent Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Maricopa is a thriving city in Pinal County, featuring wonderful family spots like the **Copper Sky Recreation Complex**, the beautiful **Pacana Park**, and the modern **Maricopa Public Library**. When we perform bathroom transformations here, we adapt our designs to the regional environment. Homes near **Lakes at Rancho El Dorado** and new construction areas benefit significantly from our advanced water scaling mitigation techniques.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Maricopa Project Highlight:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We recently completed a comprehensive guest bathroom safety conversion in a premium property within the **Province** adult community. We removed a high-walled fiberglass tub and installed an elegant, zero-barrier curbless tile walk-in shower. The design integrated beautiful non-slip ivory porcelain tiles, commercial-grade stain-resistant epoxy grout, and double-brushed nickel safety grab bars, creating a secure, spa-like environment.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Maricopa Remodeling Services
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div key={svc.title} className="bg-background rounded-2xl p-8 border border-border flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">{svc.price}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{svc.description}</p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Promise</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Why Maricopa Homeowners Trust ARZ
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((pt) => (
                <div key={pt.title} className="flex gap-4 p-6 bg-secondary rounded-2xl border border-border">
                  <pt.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COST GUIDE */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Transparent Pricing</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Maricopa Bathroom Remodel Cost Guide
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {pricingTiers.map((tier) => (
                <div key={tier.label} className="bg-secondary rounded-2xl p-6 border border-border flex justify-between items-center gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{tier.label}</p>
                    <p className="text-muted-foreground text-sm">{tier.detail}</p>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap">{tier.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">How It Works</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Process
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {process.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border">
                  <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Service Area</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 text-foreground">
              Serving All of Maricopa, AZ
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={maricopaFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Maricopa, AZ?"
          description="Call us or fill out the form. We will discuss your project and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
