import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";

export const metadata: Metadata = {title: "Bathroom Remodeling Costs Chandler AZ | Pricing Guide | ARZ",description: "Compare average bathroom remodel costs in Chandler, AZ. Breakdown of guest bath updates, walk-in shower installs, and custom master suite pricing.",
  openGraph: {title: "Bath Remodel Cost Chandler | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bath remodel cost chandler, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodel-cost-chandler/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodel-cost-chandler/`,
  },
};

const faqs = [
  {
    question: "What is the average bathroom remodel chandler az cost?",
    answer:
      "Bathroom remodeling costs depend on layout changes, square footage, tile selections, and fixture choices. Entry-level updates for guest baths are very cost-effective, while custom master bath renovations represent a larger investment. We provide free on-site inspections and prepare a detailed, line-item written estimate before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote.",
  },
  {
    question: "Why does bathroom remodeling cost more in Chandler than national averages?",
    answer:
      "Chandler's hard water (300+ mg/L dissolved minerals) requires premium waterproofing materials, epoxy grout, and nano-coated glass - all of which cost more upfront but prevent early failure. Arizona labor costs and permit fees also factor in.",
  },
  {
    question: "How can I save money on my bathroom remodel in Chandler?",
    answer:
      "Keep the existing plumbing layout to avoid relocation costs. Choose porcelain tile over natural stone. Opt for stock vanities rather than custom cabinetry. Focus high-end selections on the shower - the most-used element - and go mid-grade everywhere else.",
  },
  {
    question: "What drives up bathroom remodel costs the most?",
    answer:
      "Plumbing relocation is the biggest cost factor. Shifting toilet drains, moving shower valves, or adding new lines underneath subfloors requires additional framing and plumbing labor. Intricate custom tile layouts, frameless heavy glass shower enclosures, and premium solid brass fixtures also increase the budget.",
  },
  {
    question: "Does a bathroom remodel add value to my Chandler home?",
    answer:
      "Yes. Mid-range bathroom remodels in the Phoenix metro recover a high percentage of their cost at resale, with master bath upgrades often recouping more due to buyer demand. Tub-to-shower conversions are particularly high-ROI in Chandler's 35–55 buyer demographic.",
  },
  {
    question: "Do you offer financing for bathroom remodels in Chandler?",
    answer:
      "Yes. We offer financing options and custom monthly payment plans for qualified homeowners. This helps keep your bathroom upgrades affordable while ensuring the job is done by licensed professionals. Contact us today to discuss financing options.",
  },
];

const pricingData = [
  {
    category: "Guest Bathroom Update",
    description: "Cosmetic refresh - no structural changes",
    items: [
      { name: "Vanity & countertop replacement", cost: "Standard Level" },
      { name: "Toilet replacement", cost: "Standard Level" },
      { name: "Fixture & faucet upgrade", cost: "Standard Level" },
      { name: "Paint & accessories", cost: "Standard Level" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
  {
    category: "Guest Bathroom Full Remodel",
    description: "Complete gut and rebuild",
    items: [
      { name: "Shower tile & waterproofing", cost: "Mid-Range Scope" },
      { name: "Floor tile installation", cost: "Mid-Range Scope" },
      { name: "Vanity, countertop & sink", cost: "Mid-Range Scope" },
      { name: "Plumbing & fixture upgrades", cost: "Mid-Range Scope" },
      { name: "Demo, drywall & finishing", cost: "Mid-Range Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: true,
  },
  {
    category: "Tub-to-Shower Conversion",
    description: "Remove tub, install walk-in shower",
    items: [
      { name: "Tub removal & plumbing modification", cost: "Mid-Range Scope" },
      { name: "Schluter waterproofing system", cost: "Mid-Range Scope" },
      { name: "Custom tile shower", cost: "Mid-Range Scope" },
      { name: "Frameless glass door or enclosure", cost: "Mid-Range Scope" },
      { name: "Drain, valve & fixture installation", cost: "Mid-Range Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
  {
    category: "Master Bathroom Remodel",
    description: "Full-scope master suite renovation",
    items: [
      { name: "Walk-in shower enclosure & tile", cost: "Luxury Custom Scope" },
      { name: "Double vanity with quartz countertop", cost: "Luxury Custom Scope" },
      { name: "Tile flooring (heated optional)", cost: "Luxury Custom Scope" },
      { name: "Lighting, mirrors & accessories", cost: "Luxury Custom Scope" },
      { name: "Plumbing & electrical coordination", cost: "Luxury Custom Scope" },
      { name: "Demo, drywall & finishing", cost: "Luxury Custom Scope" },
    ],
    total: "Free Custom Estimate",
    highlight: false,
  },
];

const costFactors = [
  {
    title: "Plumbing Relocation",
    impact: "High",
    detail: "Moving a toilet, shower drain, or supply lines adds significant complexity and labor to any project.",
  },
  {
    title: "Hard Water Materials",
    impact: "Medium",
    detail: "Epoxy grout and nano-coated glass cost more upfront but prevent the 18-month failure cycle Chandler's minerals cause.",
  },
  {
    title: "Tile Selection",
    impact: "High",
    detail: "Builder-grade ceramic vs. natural stone or large-format porcelain can swing layout and labor times.",
  },
  {
    title: "Glass Enclosure Style",
    impact: "Medium",
    detail: "Frameless glass enclosures require custom-fit measurement and heavy hardware compared to framed units.",
  },
  {
    title: "Fixture Grade",
    impact: "Medium",
    detail: "Entry-level to luxury fixtures vary based on solid brass bodies, finish options, and smart valves.",
  },
  {
    title: "Permit Requirements",
    impact: "Low",
    detail: "Chandler permits for structural/plumbing/electrical work are required for code compliance. We handle the process.",
  },
];

const otherServices = getRelatedServices("/bathroom-remodel-cost-chandler/");

export default function CostPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodel Cost Chandler", url: "https://arzhomeremodeling.com/bathroom-remodel-cost-chandler/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling Cost Guide - Chandler, AZ"
        serviceDescription="Comprehensive bathroom remodeling cost guide for Chandler, AZ homeowners. Transparent pricing for guest bath updates, full remodels, tub-to-shower conversions, and master bathroom renovations."
        serviceUrl={`${siteConfig.url}/bathroom-remodel-cost-chandler/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="How Much Does a Bathroom Remodel Cost in Chandler, AZ? (2025 Pricing Guide)"
          subtitle="Transparent 2025 Pricing"
          description="Straight answers on what bathroom remodeling costs in Chandler. Every tier broken down by line item - no guessing, no surprises."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
            { name: "Cost Guide", url: `${siteConfig.url}/bathroom-remodel-cost-chandler/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              The most common question we get from Chandler homeowners is:{" "}
              <em>"What will this actually cost?"</em> The answer depends on your project type, material grade, and whether
              any plumbing is being relocated. This guide breaks down every tier with real line-item estimates so you can plan
              accurately. To see an extensive neighborhood breakdown, read our comprehensive [2025 Chandler bathroom remodel cost guide](/blog/bathroom-remodel-cost-chandler-az-2025/). Whether you're looking for <strong>cheap bathroom remodeling in Chandler AZ</strong> that doesn't sacrifice quality, 
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
          description="Tell us your project - we'll give you a ballpark on the call and schedule a free in-home evaluation within 48 hours. No obligation."
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

