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

export const metadata: Metadata = {title: "Master Bath Remodel Cost Chandler AZ | Pricing Guide | ARZ",description: "How much does a master bathroom remodel cost in Chandler, AZ? Compare pricing for custom double vanities, tile flooring, walk-in showers, and tubs.",
  openGraph: {title: "Master Bath Remodel Cost | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore master bath remodel cost, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/master-bathroom-remodel-cost/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/master-bathroom-remodel-cost/`,
  },
};

const masterFaqs = [
  {
    question: "What is the average cost of a master bathroom remodel in Chandler?",
    answer:
      "The cost of a master bathroom remodel depends on layout changes, material selections, and project scope. Mid-tier master renovations utilizing the existing footprint are very cost-effective, while custom luxury suites featuring layout alterations, curbless walk-in showers, freestanding tubs, and premium double vanities represent a larger investment. We provide free on-site inspections and prepare detailed, line-item written estimates before any work begins."
  },
  {
    question: "What are the biggest cost drivers in a master bath remodel?",
    answer:
      "Plumbing relocation is the largest cost driver. Moving toilets, shower drains, or vanity locations requires concrete slab trenching or framing modifications and increases labor. Other major drivers include custom cabinetry, quartz or marble double vanities, frameless glass enclosures, linear drains, and premium large-format porcelain tile selections."
  },
  {
    question: "How long does a master bathroom remodel take?",
    answer:
      "A complete master bathroom gut-and-rebuild takes between four and six weeks of active construction. If the project requires moving load-bearing walls or extensive plumbing changes, it may extend to seven or eight weeks. Guest bathrooms are faster, usually taking two to three weeks."
  },
  {
    question: "Should I keep a bathtub in my master bathroom?",
    answer:
      "If you use it, yes. However, if you rarely take baths, converting a large garden tub into a massive glass walk-in shower is highly popular. As long as your home has one other bathtub (in a guest or kids' bathroom), removing the master tub will not hurt resale value and often increases appeal."
  },
  {
    question: "Do you offer financing for master bathroom remodels?",
    answer:
      "Yes. We offer flexible financing options and custom monthly payment plans to help homeowners fund their master bathroom renovations. Qualifying customers can secure affordable monthly payments tailored to their project's scope. Contact us today to discuss financing."
  },
];

const pricingData = [
  {
    category: "Mid-Tier Master Remodel",
    description: "Complete update within the existing layout",
    items: [
      { name: "Demo and disposal of old fixtures", cost: "Standard Level" },
      { name: "Tiled walk-in shower with Schluter system", cost: "Standard Level" },
      { name: "Stock double vanity with quartz top", cost: "Standard Level" },
      { name: "Porcelain tile flooring (standard)", cost: "Standard Level" },
      { name: "New toilet, plumbing valves & faucets", cost: "Standard Level" },
      { name: "Drywall prep, paint & lighting", cost: "Standard Level" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
  {
    category: "Full Custom Master Suite",
    description: "Layout expansion, premium tile & glass",
    items: [
      { name: "Demo, wall changes & framing moves", cost: "Mid-Range Scope" },
      { name: "Custom tiled shower & frameless glass", cost: "Mid-Range Scope" },
      { name: "Freestanding soaking tub & floor filler", cost: "Mid-Range Scope" },
      { name: "Custom double vanity & quartz top", cost: "Mid-Range Scope" },
      { name: "Upgraded porcelain flooring & niches", cost: "Mid-Range Scope" },
      { name: "Plumbing, electrical & permit fees", cost: "Mid-Range Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: true,
  },
  {
    category: "Luxury Home Spa Suite",
    description: "Curbless double shower, heated floors & tech",
    items: [
      { name: "Structural framing & slab trenching", cost: "Luxury Custom Scope" },
      { name: "Curbless shower with dual heads & bench", cost: "Luxury Custom Scope" },
      { name: "Heated tile floors & smart thermostat", cost: "Luxury Custom Scope" },
      { name: "Designer vanities, fixtures & smart mirror", cost: "Luxury Custom Scope" },
      { name: "Custom stone/porcelain tiles & details", cost: "Luxury Custom Scope" },
      { name: "Plumbing relocations & luxury upgrades", cost: "Luxury Custom Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
];

const costFactors = [
  {
    title: "Layout Alterations",
    impact: "High",
    detail: "Keeping the existing placement of the toilet, shower, and sink keeps costs low. Rearranging the layout requires subfloor slab trenching, framing adjustments, and new drainage pipe routing.",
  },
  {
    title: "Cabinetry & Vanities",
    impact: "High",
    detail: "Pre-assembled double vanities offer a standard setup. Custom cabinetry tailored to your walls with custom quartz or marble slabs represents a premium custom option.",
  },
  {
    title: "Shower & Tub Scope",
    impact: "High",
    detail: "Installing a freestanding soaking tub in addition to a walk-in shower requires dedicated plumbing, floor drains, and extra square footage.",
  },
  {
    title: "Hard Water Protections",
    impact: "Medium",
    detail: "Upgrading to epoxy grouts and nano-coated glass is highly recommended in Chandler to protect the look and structural durability of your master bathroom.",
  },
];

export default function MasterBathroomRemodelCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          { name: "Master Bathroom Remodel Cost", url: "https://arzhomeremodeling.com/master-bathroom-remodel-cost/" },
        ]}
      />
      <ServiceSchema
        serviceName="Master Bathroom Remodel Cost Guide"
        serviceDescription="Detailed cost and pricing analysis for custom master bathroom remodeling, vanities, and soaking tubs in Chandler, AZ."
        serviceUrl={`${siteConfig.url}/master-bathroom-remodel-cost/`}
      />
      <FAQSchema faqs={masterFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Master Bathroom Remodel Costs (2025 Pricing Guide)"
          subtitle="Transparent Master Suite Budgets"
          description="Detailed breakdown of the costs to remodel a master bathroom in Chandler, AZ. Mid-tier updates, custom layouts, and luxury home spa packages."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Master Bathroom Remodeling", url: `${siteConfig.url}/master-bathroom-remodel/` },
            { name: "Cost Guide", url: `${siteConfig.url}/master-bathroom-remodel-cost/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Budgeting for Your Master Bathroom Transformation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A master bathroom is more than just a place to get ready. It is a private sanctuary where you start and end your day. A well-designed master suite also represents a massive selling point that adds substantial value to your property and improves daily living.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Because master bathrooms are larger and feature more complex fixtures (like double sinks, toilets, soaking tubs, and custom showers), they require a larger investment. This guide outlines the options and costs so you can plan your renovation with clarity.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                We provide <strong className="text-foreground">free, itemized written bids</strong>. No estimates scribbled on a napkin. We detail every line item of labor and materials so you know exactly what you are paying for. Call us at <a href="tel:+15205693339" className="text-primary hover:underline font-medium">(520) 569-3339</a> to set up your consultation.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
              Master Bathroom Cost Breakdown
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
              What Drives Master Suite Costs?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Consider these four core components when allocating your master bathroom remodeling budget.
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
                href="/master-bathroom-remodel/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Master Remodel Services
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

        <ServiceFAQ faqs={masterFaqs} />
        <Testimonials />
        <ServiceCTA
          title="Plan Your Dream Master Bathroom Suite"
          description="Speak with our designer. Contact us today to set up your free in-home consultation and receive a comprehensive, itemized written proposal."
        />
      </main>
      <Footer />
    </>
  );
}
