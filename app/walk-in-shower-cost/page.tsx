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
  title: "Walk In Shower Cost Chandler AZ | Free Estimate",
  description: "Professional walk in shower cost in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
  openGraph: {
    title: "Walk-In Shower Cost Chandler AZ - 2025 Pricing Guide",
    description:
      "A complete guide to walk-in shower installation costs in Chandler. Transparent pricing for materials, plumbing moves, and waterproofing.",
    url: `${siteConfig.url}/walk-in-shower-cost/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/walk-in-shower-cost/`,
  },
};

const showerFaqs = [
  {
    question: "What is the average cost to install a walk-in shower in Chandler?",
    answer:
      "A standard walk-in shower installation ranges from $6,000 to $13,500. A basic project utilizing a prefabricated acrylic base and tiled walls starts around $6,000. Custom tiled curbless showers with frameless glass and high-end tile typically range from $10,000 to $18,000+ depending on sizing and plumbing updates."
  },
  {
    question: "How does a curbless walk-in shower affect the price?",
    answer:
      "A curbless (zero-threshold) walk-in shower adds $1,500 to $3,000 to the cost. This is because the floor joists must be lowered or the concrete slab must be trenched to slope the shower floor down to the drain level. This requires expert plumbing, framing, and waterproofing work."
  },
  {
    question: "Why does shower waterproofing cost so much?",
    answer:
      "Waterproofing is the most critical step of shower construction. We use the Schluter-KERDI membrane system. The materials and precise installation process add $800 to $1,500 to the budget, but this system protects your studs from rot and guarantees a lifetime leak-free shower."
  },
  {
    question: "How much does frameless shower glass cost?",
    answer:
      "A professional 3/8-inch thick frameless glass enclosure costs between $1,200 and $3,200. The cost depends on the width of the glass, the number of panels, and whether you add a specialized hydrophobic coating like EnduroShield to repel hard water spots."
  },
  {
    question: "Can I convert my existing bathtub to a walk-in shower?",
    answer:
      "Yes. Tub-to-shower conversions are our specialty. This conversion costs between $6,000 and $14,000, which includes removing the old tub, relocating the drain line to the center, upgrading the mixing valve, and tiling the walls."
  },
];

const pricingData = [
  {
    category: "Prefabricated Walk-In Shower",
    description: "Standard acrylic base with basic tiled walls",
    items: [
      { name: "Demo of old shower unit", cost: "$500–$1,000" },
      { name: "Acrylic pan & standard drain", cost: "$600–$1,200" },
      { name: "Ceramic tile walls (standard layout)", cost: "$2,500–$4,000" },
      { name: "Basic semi-frameless sliding glass door", cost: "$500–$900" },
      { name: "Standard chrome fixture set", cost: "$250–$500" },
    ],
    total: "$6,000–$9,000",
    highlight: false,
  },
  {
    category: "Custom Tiled Walk-In Shower",
    description: "Full tile pan, custom walls, and frameless glass",
    items: [
      { name: "Demo to studs & subfloor repair", cost: "$800–$1,500" },
      { name: "Schluter waterproofing system", cost: "$800–$1,500" },
      { name: "Porcelain tile pan & walls", cost: "$4,500–$7,500" },
      { name: "3/8-inch frameless glass door & panel", cost: "$1,400–$2,800" },
      { name: "Mixing valve, showerhead & trim set", cost: "$500–$1,200" },
    ],
    total: "$10,000–$15,500",
    highlight: true,
  },
  {
    category: "Luxury Curbless Shower Suite",
    description: "Zero-threshold walk-in with linear drain",
    items: [
      { name: "Concrete slab/joist lowering for curbless", cost: "$1,800–$3,200" },
      { name: "Schluter waterproofing & linear drain", cost: "$1,500–$2,500" },
      { name: "Large-format tile & mosaic accent walls", cost: "$6,000–$9,500" },
      { name: "Frameless glass with hydrophobic coating", cost: "$1,800–$3,500" },
      { name: "Dual rainfall fixtures & handheld sprayer", cost: "$1,200–$2,800" },
    ],
    total: "$16,000–$24,000+",
    highlight: false,
  },
];

const costFactors = [
  {
    title: "Shower Pan Construction",
    impact: "High",
    detail: "A prefabricated acrylic base is the cheapest option. A custom-tiled mortar bed requires precision tiling, and a curbless entry requires structural alterations.",
  },
  {
    title: "Waterproofing Integrity",
    impact: "High",
    detail: "Substandard waterproofing will fail within 2 years. Investing in premium vapor-tight membranes (Schluter-KERDI) is mandatory for long-term home protection.",
  },
  {
    title: "Glass Enclosures",
    impact: "Medium",
    detail: "Off-the-shelf framed doors are affordable. Custom-cut frameless panels require heavy structural studs and professional hardware.",
  },
  {
    title: "Plumbing Adjustments",
    impact: "Medium",
    detail: "Upgrading from a 1.5-inch tub drain to a 2-inch shower drain is required by building codes and costs $600 to $1,500 during rough-in.",
  },
];

export default function WalkInShowerCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          { name: "Walk-In Shower Cost", url: "https://arzhomeremodeling.com/walk-in-shower-cost/" },
        ]}
      />
      <ServiceSchema
        serviceName="Walk-In Shower Cost Guide"
        serviceDescription="Detailed cost and pricing analysis for installing custom, curbless, and prefabricated walk-in showers in Chandler, AZ."
        serviceUrl={`${siteConfig.url}/walk-in-shower-cost/`}
      />
      <FAQSchema faqs={showerFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Walk-In Shower Installation Costs (2025 Pricing Guide)"
          subtitle="Transparent Shower Budgets"
          description="Detailed breakdown of the costs to build or convert a walk-in shower in Chandler, AZ. Prefabricated, custom tile, and curbless designs explained."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Walk-In Showers", url: `${siteConfig.url}/walk-in-showers/` },
            { name: "Cost Guide", url: `${siteConfig.url}/walk-in-shower-cost/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Planning Your Walk-In Shower Budget
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A modern walk-in shower is the centerpiece of the modern bathroom. It provides easier access, a spacious feel, and a massive return on investment. However, because every home is different, the cost to build a walk-in shower varies significantly based on structural framing, plumbing, and tile options.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we believe in transparent pricing. We do not use hidden fees or sales pressure. This guide breaks down the three primary tiers of walk-in showers so you can align your design with your financial goals.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Need an exact figure? We provide <strong className="text-foreground">free, itemized written estimates</strong> for homeowners in Chandler, Gilbert, Sun Lakes, and Tempe. Call us at <a href="tel:+15205693339" className="text-primary hover:underline font-medium">(520) 569-3339</a> to set up your consultation.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
              Cost Breakdown by Shower Type
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
              Variables That Influence Your Walk-In Shower Price
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              When reviewing quotes, ensure you are comparing equivalent quality. These four details drive the bulk of shower costs.
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
              Explore Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/walk-in-showers/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Walk-In Shower Services
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/tub-to-shower-conversion-cost/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub Conversion Cost
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodel-cost-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Full Remodel Cost Guide
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={showerFaqs} />
        <Testimonials />
        <ServiceCTA
          title="Get a Free Written Shower Estimate"
          description="Speak to our design team. We provide free, accurate written estimates detailing every line item of your walk-in shower project."
        />
      </main>
      <Footer />
    </>
  );
}
