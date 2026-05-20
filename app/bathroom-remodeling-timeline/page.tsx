import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site-config";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Timeline Chandler AZ | Project Schedule",
  description:
    "How long does a bathroom remodel take in Chandler, AZ? Complete step-by-step schedule from demolition and inspections to final tile and handoff.",
  openGraph: {
    title: "Bathroom Remodeling Timeline Chandler AZ | Project Schedule",
    description:
      "Planning a bathroom remodel in Chandler? Learn about the exact day-by-day construction timeline and key milestones.",
    url: `${siteConfig.url}/bathroom-remodeling-timeline/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-timeline/`,
  },
};

const timelineFaqs = [
  {
    question: "What is the typical timeline for a guest bathroom remodel?",
    answer:
      "A standard guest bathroom remodel takes two to three weeks of active construction. This timeline includes minor drywall work, standard plumbing hookups, vanity mounting, flooring, and tiling. Keeping fixtures in their original positions keeps the process fast."
  },
  {
    question: "How long does a custom master bathroom remodel take?",
    answer:
      "A complete master bathroom renovation takes between four and six weeks. This extended timeline is due to layout modifications, structural wall alterations, complex double vanities, freestanding tubs, and large custom tile layouts with extensive waterproofing steps."
  },
  {
    question: "Does the city inspection process cause delays?",
    answer:
      "City inspections do require construction to pause temporarily. We coordinate plumbing and electrical rough-in inspections as soon as trades are complete. Chandler inspectors typically visit within 24 to 48 hours, so we program this into our schedule to avoid downtime."
  },
  {
    question: "When should we order bathroom materials?",
    answer:
      "All major materials (vanities, custom tile, plumbing fixtures, tub, lighting) should be ordered and delivered BEFORE demolition starts. Starting a project without having materials on-site is the #1 cause of construction delays."
  },
  {
    question: "Will I be without a bathroom during the entire remodel?",
    answer:
      "Yes, the specific bathroom under renovation will be unusable during construction. Demolition cuts off water lines temporarily, and plumbing valves remain exposed until fixture trim is installed in the final week. If this is your only bathroom, we can coordinate toilet access during evenings."
  },
];

const phases = [
  {
    title: "Phase 1: Planning & Design (Weeks 1-2)",
    icon: Calendar,
    details: "Choose layouts, draw blueprints, choose tiles and finishes, and sign agreements. We submit plans to the City of Chandler for trade permits and order materials to ensure everything is on-site.",
  },
  {
    title: "Phase 2: Demolition & Framing (Days 1-3)",
    icon: Clock,
    details: "Tear down tile walls, remove the old vanity, pull the toilet and tub, and strip walls to studs. Inspect framing for hidden leaks, replace rotten studs, and frame new niches or benches.",
  },
  {
    title: "Phase 3: Plumbing & Electrical Rough-In (Days 4-7)",
    icon: Clock,
    details: "Upgrading drains (2-inch required for showers), running PEX water lines, relocating shower valves, wiring new GFCI outlets and lighting, and installing ventilation fans. Host the city rough-in inspection.",
  },
  {
    title: "Phase 4: Waterproofing & Backer Board (Days 8-10)",
    icon: Clock,
    details: "Install cement backing board on walls. Lay down mortar beds and seal walls with the vapor-tight Schluter-KERDI waterproofing system to guarantee a leak-free structure.",
  },
  {
    title: "Phase 5: Custom Tile Installation (Days 11-17)",
    icon: Clock,
    details: "Lay porcelain or stone tiles on walls and floors. Apply specialized epoxy grout to resist hard water scale, and seal grout joints for maximum durability.",
  },
  {
    title: "Phase 6: Trim Out & Fixtures (Days 18-21)",
    icon: Clock,
    details: "Install the new toilet, mount double vanities and faucets, hook up the showerhead and trim, connect lighting and mirrors, install frameless glass enclosures, paint, and pass the final inspection.",
  },
];

const comparisonData = [
  {
    scope: "Cosmetic Refresh",
    duration: "5 - 8 Days",
    idealFor: "Replacing vanity, toilet, faucets, and paint without tiling or wall moves.",
  },
  {
    scope: "Standard Full Remodel / Conversion",
    duration: "10 - 15 Days",
    idealFor: "Complete gut, new walk-in shower tile, floor tile, vanity, and plumbing hookups.",
  },
  {
    scope: "Custom Master Suite Upgrade",
    duration: "20 - 30 Days",
    idealFor: "Layout changes, wall moves, custom tile showers, freestanding tubs, double vanities, and drywall.",
  },
];

export default function TimelinePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          { name: "Bathroom Remodeling Timeline", url: "https://arzhomeremodeling.com/bathroom-remodeling-timeline/" },
        ]}
      />
      <FAQSchema faqs={timelineFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Remodeling Timelines (Step-by-Step Guide)"
          subtitle="What to Expect from Demo to Final Handoff"
          description="Learn exactly how long it takes to remodel a bathroom in Chandler, AZ. Explore our daily schedules, permit inspection milestones, and project management timelines."
          image="/images/optimized/photo-1507089947368-19c1da9775ae.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Costs", url: `${siteConfig.url}/bathroom-remodel-cost-chandler/` },
            { name: "Timeline Guide", url: `${siteConfig.url}/bathroom-remodeling-timeline/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Planning Your Remodeling Schedule
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A bathroom remodel is an exciting home improvement project, but it can disrupt your daily routine. Understanding the construction schedule—knowing when water will be shut off, when inspections will happen, and when tile will dry—helps reduce stress.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we manage timelines using professional scheduling software. We align sub-trades, municipal inspectors, and materials before we pick up a sledgehammer. This guide breaks down our step-by-step construction schedule.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                We guarantee our schedules in writing. If we run over our contract completion date, we pay you back. Call us at <a href="tel:2293065591" className="text-primary hover:underline font-medium">(229) 306-5591</a> to plan your project timeline.
              </p>
            </div>
          </div>
        </section>

        {/* TIMELINE COMPARISON */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-center mb-12 text-foreground">
              Timelines by Project Scope
            </h2>
            <div className="space-y-4">
              {comparisonData.map((tier) => (
                <div key={tier.scope} className="bg-background border border-border rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{tier.scope}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{tier.idealFor}</p>
                  </div>
                  <div className="text-right sm:text-right shrink-0">
                    <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-semibold block sm:inline-block">
                      Duration: {tier.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHRONOLOGICAL PHASES */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-center mb-12 text-foreground">
              Day-by-Day Construction Steps
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-border before:my-4">
              {phases.map((phase, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 z-10 font-serif">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.details}</p>
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
              Explore Related Resources
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/bathroom-remodel-cost-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Full Cost Guide
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodeling-permits-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Permits Guide
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodeling-chandler-az/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Chandler Contractors
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={timelineFaqs} />
        <Testimonials />
        <ServiceCTA
          title="Start Your Project on Schedule"
          description="Speak to our design team. Contact us today to set up your free consultation and receive a clear project plan detailing costs and dates."
        />
      </main>
      <Footer />
    </>
  );
}
