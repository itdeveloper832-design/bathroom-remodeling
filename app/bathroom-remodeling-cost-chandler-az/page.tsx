import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Cost Chandler AZ | 2024 Pricing Guide",
  description:
    "Complete bathroom remodeling cost guide for Chandler, AZ. Guest bath updates from $4,500, tub-to-shower conversions $6,000–$13,000, master bath remodels $18,000–$45,000+. Free itemized estimates.",
  openGraph: {
    title: "Bathroom Remodeling Cost Chandler AZ | 2024 Pricing Guide",
    description:
      "Transparent bathroom remodeling pricing for Chandler, AZ homeowners. All project types covered.",
    url: `${siteConfig.url}/bathroom-remodeling-cost-chandler-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-cost-chandler-az/`,
  },
};

const faqs = [
  {
    question: "What is the average bathroom remodel chandler az cost?",
    answer:
      "The average bathroom remodel chandler az cost depends on scope. A guest bathroom cosmetic update runs $4,500–$9,000. A full guest bath remodel costs $10,000–$18,000. Master bathroom remodels range from $18,000–$45,000+. We provide free, itemized estimates with competitive bathroom remodel chandler az prices.",
  },
  {
    question: "Why does bathroom remodeling cost more in Chandler than national averages?",
    answer:
      "Chandler's hard water (300+ mg/L dissolved minerals) requires premium waterproofing materials, epoxy grout, and nano-coated glass — all of which cost more upfront but prevent early failure. Arizona labor costs and permit fees also factor in.",
  },
  {
    question: "How can I save money on my bathroom remodel in Chandler?",
    answer:
      "Keep the existing plumbing layout to avoid relocation costs. Choose porcelain tile over natural stone. Opt for stock vanities rather than custom cabinetry. Focus high-end selections on the shower — the most-used element — and go mid-grade everywhere else.",
  },
  {
    question: "What drives up bathroom remodel costs the most?",
    answer:
      "Plumbing relocation is the biggest cost driver. Moving a toilet, shower valve, or drain adds $2,000–$6,000 to a project. Custom tile layouts, frameless glass, and high-end fixture packages also significantly increase costs.",
  },
  {
    question: "Does a bathroom remodel add value to my Chandler home?",
    answer:
      "Yes. Mid-range bathroom remodels in the Phoenix metro recover approximately 55–70% of their cost at resale, with master bath upgrades often recouping more due to buyer demand. Tub-to-shower conversions are particularly high-ROI in Chandler's 35–55 buyer demographic.",
  },
  {
    question: "Do you offer financing for bathroom remodels in Chandler?",
    answer:
      "Yes. We offer financing options for qualified homeowners. We can discuss financing during your free estimate — many Chandler homeowners finance master bath remodels with monthly payments starting around $350–$450/month.",
  },
];

const pricingData = [
  {
    category: "Guest Bathroom Update",
    description: "Cosmetic refresh — no structural changes",
    items: [
      { name: "Vanity & countertop replacement", cost: "$800–$2,500" },
      { name: "Toilet replacement", cost: "$300–$800" },
      { name: "Fixture & faucet upgrade", cost: "$200–$600" },
      { name: "Paint & accessories", cost: "$300–$500" },
    ],
    total: "$4,500–$9,000",
    highlight: false,
  },
  {
    category: "Guest Bathroom Full Remodel",
    description: "Complete gut and rebuild",
    items: [
      { name: "Shower tile & waterproofing", cost: "$3,000–$6,000" },
      { name: "Floor tile installation", cost: "$1,500–$3,500" },
      { name: "Vanity, countertop & sink", cost: "$1,200–$3,000" },
      { name: "Plumbing & fixture upgrades", cost: "$800–$2,000" },
      { name: "Demo, drywall & finishing", cost: "$1,500–$3,000" },
    ],
    total: "$10,000–$18,000",
    highlight: true,
  },
  {
    category: "Tub-to-Shower Conversion",
    description: "Remove tub, install walk-in shower",
    items: [
      { name: "Tub removal & plumbing modification", cost: "$800–$2,000" },
      { name: "Schluter waterproofing system", cost: "$600–$1,200" },
      { name: "Custom tile shower", cost: "$2,500–$5,500" },
      { name: "Frameless glass door or enclosure", cost: "$800–$2,500" },
      { name: "Drain, valve & fixture installation", cost: "$600–$1,500" },
    ],
    total: "$6,000–$13,000",
    highlight: false,
  },
  {
    category: "Master Bathroom Remodel",
    description: "Full-scope master suite renovation",
    items: [
      { name: "Walk-in shower enclosure & tile", cost: "$5,000–$12,000" },
      { name: "Double vanity with quartz countertop", cost: "$2,500–$7,000" },
      { name: "Tile flooring (heated optional)", cost: "$2,000–$5,000" },
      { name: "Lighting, mirrors & accessories", cost: "$800–$2,500" },
      { name: "Plumbing & electrical coordination", cost: "$2,000–$6,000" },
      { name: "Demo, drywall & finishing", cost: "$2,000–$5,000" },
    ],
    total: "$18,000–$45,000+",
    highlight: false,
  },
];

const costFactors = [
  {
    title: "Plumbing Relocation",
    impact: "High",
    detail: "Moving a toilet, shower drain, or supply lines adds $2,000–$6,000 to any project.",
  },
  {
    title: "Hard Water Materials",
    impact: "Medium",
    detail: "Epoxy grout and nano-coated glass cost more upfront but prevent the 18-month failure cycle Chandler's minerals cause.",
  },
  {
    title: "Tile Selection",
    impact: "High",
    detail: "Builder-grade ceramic vs. natural stone or large-format porcelain can swing costs by $3,000–$8,000.",
  },
  {
    title: "Glass Enclosure Style",
    impact: "Medium",
    detail: "Frameless glass runs $800–$2,500 more than framed alternatives. Worth it for resale value.",
  },
  {
    title: "Fixture Grade",
    impact: "Medium",
    detail: "Entry-level to luxury fixtures vary by $500–$3,000 depending on brand and finish.",
  },
  {
    title: "Permit Requirements",
    impact: "Low",
    detail: "Chandler permits for structural/plumbing/electrical work typically cost $300–$800. We handle all permitting.",
  },
];

const otherServices = bathroomServices.slice(0, 3);

export default function CostPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling Cost Guide — Chandler, AZ"
        serviceDescription="Comprehensive bathroom remodeling cost guide for Chandler, AZ homeowners. Transparent pricing for guest bath updates, full remodels, tub-to-shower conversions, and master bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-cost-chandler-az/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Remodeling Cost Guide — Chandler, AZ"
          subtitle="Transparent 2024 Pricing"
          description="Straight answers on what bathroom remodeling costs in Chandler. Every tier broken down by line item — no guessing, no surprises."
          image="/images/optimized/photo-1507089947368-19c1da9775ae.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
            { name: "Cost Guide", url: `${siteConfig.url}/bathroom-remodeling-cost-chandler-az/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The most common question we get from Chandler homeowners is:{" "}
              <em>"What will this actually cost?"</em> The answer depends on your project type, material grade, and whether
              any plumbing is being relocated. This guide breaks down every tier with real line-item estimates so you can plan
              accurately. Whether you're looking for <strong>cheap bathroom remodeling in Chandler AZ</strong> that doesn't sacrifice quality, 
              or a high-end master suite renovation, we provide options for every budget.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                All pricing reflects Chandler, AZ market rates including hard water material requirements. We provide{" "}
                <strong className="text-foreground">free, itemized written estimates</strong> before any work starts.{" "}
                <Link href="/contact/" className="text-primary hover:underline">
                  Request yours here.
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* PRICING TIERS */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
              Chandler Bathroom Remodel Pricing by Project Type
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
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
                    {tier.highlight && (
                      <span className="text-xs bg-primary-foreground text-primary rounded-full px-3 py-1 font-semibold">
                        Most Popular
                      </span>
                    )}
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
                      Total Estimate
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

        {/* COST FACTORS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              What Drives Bathroom Remodel Costs in Chandler?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              These are the six biggest variables that affect your final price. Understanding them helps you prioritize where to
              invest and where to save.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {costFactors.map((f) => (
                <div key={f.title} className="bg-secondary border border-border rounded-xl p-5 flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground">{f.title}</p>
                      <span
                        className={`text-xs rounded-full px-2 py-0.5 font-medium ${
                          f.impact === "High"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : f.impact === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {f.impact} Impact
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Ready to Get a Real Number?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/bathroom-remodeling-chandler-az/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Chandler Bathroom Remodeling
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub-to-Shower Conversion
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/master-bathroom-remodel/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Master Bathroom Remodel
                </p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <SubServices
          title="Services Included in Our Estimates"
          subtitle="What We Offer"
          description="Every estimate includes professional project management and high-quality materials."
          services={otherServices.map((s) => s.name)}
        />

        <ServiceCTA
          title="Get a Free Itemized Estimate in Chandler, AZ"
          description="Tell us your project — we'll give you a ballpark on the call and schedule a free in-home evaluation within 48 hours. No obligation."
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

