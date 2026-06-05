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

export const metadata: Metadata = {
  title: "Master Bathroom Remodel Cost Chandler AZ | Guide",
  description: "Discover master bathroom remodeling costs, budgeting tips, and pricing insights for Chandler homeowners.",
  openGraph: {
    title: "Master Bathroom Remodel Cost Chandler AZ - 2025 Pricing Guide",
    description:
      "Planning a master bathroom renovation in Chandler? Explore transparent budgets for custom design layouts, waterproofing, and tile options.",
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
      "A complete master bathroom remodel in Chandler, AZ averages between $18,000 and $45,000+. A mid-tier master renovation with a standard vanity and tiled walk-in shower ranges from $18,000 to $26,000. Full custom renovations that include plumbing relocations, quartz double vanities, freestanding soaking tubs, and curbless tile showers range from $28,000 to $50,000+."
  },
  {
    question: "What are the biggest cost drivers in a master bath remodel?",
    answer:
      "Plumbing relocation is the largest cost driver. Moving toilets, shower drains, or vanity locations requires slab cutting and adds $2,000 to $6,000. Other major drivers include custom double vanities, frameless glass enclosures, linear drains, and premium stone or porcelain tile selections."
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
      "Yes. We offer financing options to help Chandler homeowners fund their master bathroom renovations. Qualifying customers can secure monthly payments starting around $350 to $480 depending on the scope of the project."
  },
];

const pricingData = [
  {
    category: "Mid-Tier Master Remodel",
    description: "Complete update within the existing layout",
    items: [
      { name: "Demo and disposal of old fixtures", cost: "$1,200–$2,000" },
      { name: "Tiled walk-in shower with Schluter system", cost: "$4,500–$7,500" },
      { name: "Stock double vanity with quartz top", cost: "$2,200–$4,000" },
      { name: "Porcelain tile flooring (standard)", cost: "$1,800–$3,200" },
      { name: "New toilet, plumbing valves & faucets", cost: "$1,200–$2,500" },
      { name: "Drywall prep, paint & lighting", cost: "$1,200–$2,200" },
    ],
    total: "$18,000–$26,000",
    highlight: false,
  },
  {
    category: "Full Custom Master Suite",
    description: "Layout expansion, premium tile & glass",
    items: [
      { name: "Demo, wall changes & framing moves", cost: "$2,000–$4,000" },
      { name: "Custom tiled shower & frameless glass", cost: "$6,500–$11,500" },
      { name: "Freestanding soaking tub & floor filler", cost: "$2,500–$4,500" },
      { name: "Custom double vanity & quartz top", cost: "$3,800–$7,500" },
      { name: "Upgraded porcelain flooring & niches", cost: "$3,000–$5,500" },
      { name: "Plumbing, electrical & permit fees", cost: "$2,500–$5,500" },
    ],
    total: "$28,000–$42,500",
    highlight: true,
  },
  {
    category: "Luxury Home Spa Suite",
    description: "Curbless double shower, heated floors & tech",
    items: [
      { name: "Structural framing & slab trenching", cost: "$3,500–$6,500" },
      { name: "Curbless shower with dual heads & bench", cost: "$8,500–$15,000" },
      { name: "Heated tile floors & smart thermostat", cost: "$2,000–$4,500" },
      { name: "Designer vanities, fixtures & smart mirror", cost: "$5,500–$11,000" },
      { name: "Custom stone/porcelain tiles & details", cost: "$6,500–$12,000" },
      { name: "Plumbing relocations & luxury upgrades", cost: "$4,500–$9,000" },
    ],
    total: "$45,000–$68,000+",
    highlight: false,
  },
];

const costFactors = [
  {
    title: "Layout Alterations",
    impact: "High",
    detail: "Keeping the existing placement of the toilet, shower, and sink keeps costs low. Rearranging the layout adds $3,000–$8,000 for slab trenching and pipe moves.",
  },
  {
    title: "Cabinetry & Vanities",
    impact: "High",
    detail: "Pre-assembled double vanities cost $1,500–$3,500. Custom cabinetry tailored to your walls with custom quartz or marble slabs runs $4,000–$9,000.",
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
