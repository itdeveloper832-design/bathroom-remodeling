import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

export const metadata: Metadata = {title: "Tub-to-Shower Conversion Cost Guide | Chandler AZ | ARZ",description: "How much does a tub-to-shower conversion cost in Chandler, AZ? Learn about demolition, plumbing relocations, waterproofing, and tile costs.",
  openGraph: {title: "Tub To Shower Convert Cost | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tub to shower convert cost, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/tub-to-shower-conversion-cost/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion-cost/`,
  },
};

const conversionFaqs = [
  {
    question: "What is the average cost to convert a tub to a walk-in shower in Chandler?",
    answer:
      "The cost of a tub-to-shower conversion in Chandler, AZ varies based on layout design, waterproofing requirements, and finish selections. Acrylic or fiberglass insert packages represent a standard scope. Custom tiled conversions featuring the Schluter-KERDI waterproofing membrane system represent a customized scope, while high-end luxury conversions with curbless pans and premium frameless glass panels represent a premium layout. We offer free on-site consultations to prepare detailed, line-item written estimates."
  },
  {
    question: "Why do we have to upgrade the drain line during a tub conversion?",
    answer:
      "Building codes require a 2-inch drain line for showers, whereas standard bathtubs only use a 1.5-inch line. This is to handle the high volume of water from modern showerheads and prevent overflow. Modifying the drain under concrete or wood joists requires specialized plumbing, structural trenching, and framing revisions."
  },
  {
    question: "Does removing a bathtub hurt my home's resale value?",
    answer:
      "Generally, no, as long as your home retains at least one standard bathtub for children or pets. Buyers in Chandler heavily favor spacious, glass-enclosed walk-in showers over small shower-tub combos. Converting an unused guest tub into a walk-in shower is typically a high-return project."
  },
  {
    question: "What is the timeline for a tub-to-shower conversion?",
    answer:
      "A tub-to-shower conversion takes between two and three weeks of active construction. This timeline includes demolition of the tub surround, plumbing rough-in, framing adjustments, waterproofing, tile laying, grouting, and final glass installation."
  },
  {
    question: "Are permits required for tub-to-shower conversions in Chandler?",
    answer:
      "Yes. A plumbing and building permit is required by the City of Chandler because we modify the drain line, relocate water valves, and update wall framing. We coordinate all permits, paperwork, and city inspections as part of our comprehensive service."
  },
];

const pricingData = [
  {
    category: "Standard Conversion Package",
    description: "Remove tub, install acrylic shower base & basic tiled surround",
    items: [
      { name: "Demo of cast-iron or acrylic tub", cost: "Standard Level" },
      { name: "Drain upgrade to 2-inch & valve rough-in", cost: "Standard Level" },
      { name: "Standard acrylic base", cost: "Standard Level" },
      { name: "Ceramic tile walls (subway/standard)", cost: "Standard Level" },
      { name: "Semi-frameless glass sliding door", cost: "Standard Level" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
  {
    category: "Custom Tiled Conversion",
    description: "Remove tub, custom mud-pan, full tile & frameless glass",
    items: [
      { name: "Demo of tub and wall surround", cost: "Mid-Range Scope" },
      { name: "Plumbing modifications (drain & valve)", cost: "Mid-Range Scope" },
      { name: "Schluter waterproofing system", cost: "Mid-Range Scope" },
      { name: "Custom porcelain tile pan & walls", cost: "Mid-Range Scope" },
      { name: "3/8-inch thick frameless glass", cost: "Mid-Range Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: true,
  },
  {
    category: "Luxury Barrier-Free Conversion",
    description: "Curbless walk-in shower with premium finishes",
    items: [
      { name: "Demo and concrete slab trenching", cost: "Luxury Custom Scope" },
      { name: "Plumbing, valve moves & linear drain", cost: "Luxury Custom Scope" },
      { name: "KERDI waterproofing & sloped pan", cost: "Luxury Custom Scope" },
      { name: "High-end large format tile & niches", cost: "Luxury Custom Scope" },
      { name: "Custom nano-coated frameless glass panel", cost: "Luxury Custom Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
];

const costFactors = [
  {
    title: "Sub-Floor & Framing Condition",
    impact: "High",
    detail: "Old bathtubs often hide slow leaks that rot wood joists or degrade concrete. Repairing water damage requires specialized subfloor rebuilding during the rough-in phase.",
  },
  {
    title: "Drain Line Retrofitting",
    impact: "High",
    detail: "Converting from a 1.5-inch tub drain to a 2-inch shower drain requires trenching concrete or re-routing wood framing to pass inspections.",
  },
  {
    title: "Waterproofing Integrity",
    impact: "High",
    detail: "We use the premium Schluter-KERDI vapor-tight system. This guarantees you won't suffer mold or water damage behind your new tile.",
  },
  {
    title: "Enclosure Selection",
    impact: "Medium",
    detail: "Frameless glass enclosures look spectacular and add massive resale value, but represent a premium upgrade over standard framed tracks.",
  },
];

export default function TubToShowerConversionCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          { name: "Tub-to-Shower Conversion Cost", url: "https://arzhomeremodeling.com/tub-to-shower-conversion-cost/" },
        ]}
      />
      <ServiceSchema
        serviceName="Tub-to-Shower Conversion Cost Guide"
        serviceDescription="Pricing guide and material cost analysis for removing bathtubs and installing modern walk-in tile showers in Chandler, AZ."
        serviceUrl={`${siteConfig.url}/tub-to-shower-conversion-cost/`}
      />
      <FAQSchema faqs={conversionFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Tub-to-Shower Conversion Guide (Project Scopes)"
          subtitle="Transparent Project Pricing"
          description="A complete guide on what it costs to remove an old bathtub and build a spacious walk-in shower in Chandler, AZ. All options detailed."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub-to-Shower Conversion", url: `${siteConfig.url}/tub-to-shower-conversion/` },
            { name: "Cost Guide", url: `${siteConfig.url}/tub-to-shower-conversion-cost/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              What Does a Tub-to-Shower Conversion Cost?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Removing a low, unused bathtub and replacing it with a spacious walk-in tiled shower is the single most popular bathroom project in Chandler. It opens up your bathroom's footprint, removes a trip hazard, and replaces outdated design with a modern, high-value asset.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The cost depends on whether you choose a basic insert or go with custom porcelain tile, frameless glass, and premium fixtures. This guide covers the options, permit requirements, and materials so you can budget with confidence.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                We provide <strong className="text-foreground">free, itemized written quotes</strong> with zero hidden fees. Call us at <a href="tel:+15205693339" className="text-primary hover:underline font-medium">(520) 569-3339</a> to speak with a contractor today.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
              Tub-to-Shower Cost Breakdown
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingData.map((tier) => (
                <div
                  key={tier.category}
                  className={`rounded-2xl border p-8 ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`font-serif text-xl font-semibold ${
                        tier.highlight ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {tier.category}
                    </h3>
                  </div>
                  <p className={`text-sm mb-5 ${tier.highlight ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {tier.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between text-sm">
                        <span className={tier.highlight ? "text-primary-foreground/85" : "text-muted-foreground"}>
                          {item.name}
                        </span>
                        <span
                          className={`font-medium ml-2 whitespace-nowrap ${
                            tier.highlight ? "text-primary-foreground" : "text-foreground"
                          }`}
                        >
                          {item.cost}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`border-t pt-4 flex items-center justify-between ${
                      tier.highlight ? "border-primary-foreground/30" : "border-border"
                    }`}
                  >
                    <span className={`font-semibold ${tier.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                      Estimated Total
                    </span>
                    <span
                      className={`text-xl font-bold ${tier.highlight ? "text-primary-foreground" : "text-primary"}`}
                    >
                      {tier.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FACTOR ANALYSIS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              What Drives Tub Conversion Costs?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Bathtub removals can reveal unexpected issues. Make sure your contractor addresses these key items.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {costFactors.map((f) => (
                <div key={f.title} className="bg-secondary border border-border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-foreground">{f.title}</p>
                    <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-semibold">
                      {f.impact} Impact
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Explore Related Resources
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub Conversion Service
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/walk-in-shower-cost/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Walk-In Shower Cost
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodel-cost-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Full Cost Guide
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={conversionFaqs} />
        <Testimonials />
        <ServiceCTA
          title="Schedule Your Tub Conversion Estimate"
          description="Ready to convert your unused tub into a stunning walk-in shower? Contact us to set up your free consultation and receive a clear, itemized quote."
        />
      </main>
      <Footer />
    </>
  );
}
