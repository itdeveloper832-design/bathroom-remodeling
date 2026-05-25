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
import { ArrowRight, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Permits Chandler AZ - Guide & Requirements",
  description:
    "Do you need a permit for a bathroom remodel in Chandler, AZ? Learn City of Chandler permit rules, fees, and inspection guidelines.",
  openGraph: {
    title: "Bathroom Remodeling Permits Chandler AZ - Guide & Requirements",
    description:
      "A complete guide to Chandler, AZ bathroom remodeling permits. Learn when city approval is required, fee schedules, and the inspection process.",
    url: `${siteConfig.url}/bathroom-remodeling-permits-chandler/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-permits-chandler/`,
  },
};

const permitFaqs = [
  {
    question: "Do you need a permit to remodel a bathroom in Chandler, AZ?",
    answer:
      "It depends on the scope of work. Simple cosmetic upgrades, like replacing a toilet, updating a vanity, or retiling a wall within the existing footprint, do not require a permit. However, any structural modifications, plumbing relocations, adding new electrical outlets (GFCI), or expanding layout sizes require a permit from the City of Chandler Development Services."
  },
  {
    question: "How much do bathroom remodeling permits cost in Chandler?",
    answer:
      "For a typical residential bathroom remodel, City of Chandler permit fees range from $250 to $800. The cost depends on the project valuation and the number of trade categories involved (structural, electrical, plumbing, mechanical). We include all permit procurement and coordination fees in our written bids."
  },
  {
    question: "How long does it take to get a bathroom permit in Chandler?",
    answer:
      "Over-the-counter permits for simple projects can be issued on the same day. For more complex projects requiring layout plans and plan review, the City of Chandler Development Services Department typically takes two to four weeks to review and issue the permits."
  },
  {
    question: "What inspections are required for a Chandler bathroom remodel?",
    answer:
      "The city requires a minimum of two inspection visits: a 'rough-in' inspection and a 'final' inspection. The rough-in inspection occurs after demolition, framing, plumbing pipe expansion, and electrical wiring are complete but BEFORE drywall and tile are installed. The final inspection happens after all fixtures, tile, outlets, and paint are complete and operational."
  },
  {
    question: "Can I pull the bathroom permits myself as the homeowner?",
    answer:
      "Yes, Chandler allows an 'owner-builder' to pull permits. However, you assume full legal liability for construction codes and must be present for inspections. Working with a licensed contractor (ROC338304) who pulls the permits guarantees that the work is completed to code and protects your home's insurance eligibility."
  },
];

const permitRules = [
  {
    type: "No Permit Required (Cosmetic Only)",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-950/20",
    border: "border-green-100 dark:border-green-900/30",
    items: [
      "Replacing existing plumbing fixtures (sink, faucet, toilet) in the exact same location.",
      "Replacing cabinets, vanities, or countertops.",
      "Replacing drywall or backing boards without altering framing studs.",
      "Installing flooring, wall tile, or paint.",
    ],
  },
  {
    type: "Permit Required (Structural & Trades)",
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-amber-100 dark:border-amber-900/30",
    items: [
      "Moving or removing any wall (load-bearing or partition).",
      "Relocating drainage pipes, sewer lines, or supply lines (e.g. moving a toilet or tub).",
      "Running new electrical wiring or adding GFCI outlets.",
      "Adding a window or ventilation fan where none existed.",
      "Expanding the physical footprint of the bathroom.",
    ],
  },
];

export default function PermitsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          { name: "Bathroom Remodeling Permits Chandler", url: "https://arzhomeremodeling.com/bathroom-remodeling-permits-chandler/" },
        ]}
      />
      <FAQSchema faqs={permitFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Remodeling Permits in Chandler, AZ"
          subtitle="Navigating Municipal Building Codes"
          description="A complete guide on when you need a permit to remodel a bathroom in Chandler, what fees to expect, and how the city inspection process works."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Chandler Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
            { name: "Permit Guide", url: `${siteConfig.url}/bathroom-remodeling-permits-chandler/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Do I Need a Permit to Remodel My Bathroom?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              When planning a bathroom remodel, understanding local building codes is vital. A permit is a legal document issued by the City of Chandler that certifies your design and construction methods meet the International Residential Code (IRC) and local safety amendments.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Failing to secure required permits can lead to severe consequences. Homeowner's insurance policies often refuse to cover water damage or fire losses caused by unpermitted work. Furthermore, you may face fines and be forced to tear down finished tile work if code violations are discovered during a future home sale.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                As a licensed contractor (<strong className="text-foreground">ROC338304</strong>), ARZ Home Remodeling handles the entire permit process. We prepare the design drawings, submit documentation to the City of Chandler, and host inspectors at your home. Call us at <a href="tel:+15205693339" className="text-primary hover:underline font-medium">(520) 569-3339</a> to discuss your plans.
              </p>
            </div>
          </div>
        </section>

        {/* PERMIT REQUIREMENTS TIERS */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-center mb-12 text-foreground">
              Chandler Permit Guidelines by Project Scope
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {permitRules.map((rule) => (
                <div
                  key={rule.type}
                  className={`rounded-2xl border p-8 bg-background border-border`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <rule.icon className={`w-6 h-6 ${rule.color}`} />
                    <h3 className="font-serif text-lg font-semibold text-foreground">{rule.type}</h3>
                  </div>
                  <ul className="space-y-3">
                    {rule.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS AND INSPECTIONS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              The City of Chandler Inspection Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The City of Chandler Development Services Department is located at <strong className="text-foreground">215 E Buffalo St</strong> in Downtown Chandler. We coordinate all meetings, plan submissions, and inspections with their code enforcement officers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              During a typical permitted remodel, we host the inspector for two key milestones:
            </p>
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Rough-In Inspection</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Completed after we demolish the old space, frame any new walls, run plumbing supply/drain modifications, and lay down new electrical wiring. The inspector checks wall framing, pipe pressure, and electrical junction boxes BEFORE we hang drywall or lay waterproofing membranes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Final Inspection</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Completed after construction is 100% finished. The inspector verifies that all GFCI outlets operate correctly, shower valves are pressure-balanced, fans vent outside properly, and fixtures are leak-free. Passing this inspection closes the permit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Related Cost & Design Guides
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/bathroom-remodel-cost-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Bathroom Remodeling Costs
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodeling-timeline/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Remodeling Timeline Guide
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

        <ServiceFAQ faqs={permitFaqs} />
        <Testimonials />
        <ServiceCTA
          title="Have Questions About Chandler Permits?"
          description="Speak to our permit specialist. Call us today to discuss your project scope and find out exactly what permit requirements apply."
        />
      </main>
      <Footer />
    </>
  );
}
