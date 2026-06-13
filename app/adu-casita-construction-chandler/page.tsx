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

export const metadata: Metadata = {title: {
    absolute: "ADU Bathroom Planning | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore adu bathroom planning, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "ADU Bathroom Planning | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore adu bathroom planning, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/adu-casita-construction-chandler/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "ADU Bathroom Planning | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore adu bathroom planning, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/adu-casita-construction-chandler/`,
  },
};

const aduFaqs = [
  {
    question: "What are the zoning rules for building an ADU (Casita) in Chandler, AZ?",
    answer:
      "Under City of Chandler zoning codes, an Accessory Dwelling Unit (ADU) or detached casita is permitted in residential districts. It must not exceed 800 square feet or 50% of the primary dwelling's square footage (whichever is smaller). The casita must match the architectural style, color, and roof pitch of the main home, and maintain required side and rear setbacks. We manage the complete code audit and drafting approvals."
  },
  {
    question: "How are sewer and utility hookups handled for a detached casita?",
    answer:
      "Detached casitas require dedicated water, sewer, electrical, and HVAC connections. We trench the yard to tap into your home's main sewer line, scale your electrical panel to handle the new load (often installing a subpanel), and route local water lines. For HVAC, we specify high-efficiency ductless mini-split systems for zone-controlled comfort."
  },
  {
    question: "How long does it take to construct a guest house or ADU?",
    answer:
      "A complete design-build ADU/casita construction project takes between 8 to 12 weeks of active construction. This timeline includes foundation excavation, slab pouring, structural framing, utility routing, insulation, drywall, and luxury interior finishes. Permits and HOA approvals add about 4 to 8 weeks of pre-construction planning."
  },
  {
    question: "Do I need a building permit to build a casita in Chandler?",
    answer:
      "Yes. The City of Chandler requires a comprehensive building permit for all guest houses and ADUs. This involves submitting civil engineering blueprints, foundation plans, electrical schematics, and structural calculations. ARZ Home Remodeling handles the entire permit application, engineering coordination, and city inspections pipeline."
  },
  {
    question: "Does building a guest house add value to my Arizona property?",
    answer:
      "Absolutely. An ADU or detached casita adds immense functional space and is one of the highest ROI investments in Arizona. It provides independent multigenerational housing, a high-end private home office, or a premium guest suite, substantially raising your overall property appraisal value and buyer demand at resale."
  }
];

const services = [
  {
    title: "Detached Casitas & Pool Houses",
    href: "/contact/",
    description:
      "Complete design-build detached guest houses, mother-in-law suites, and pool houses. We manage the entire excavation, concrete foundation, structural framing, utility routing, and luxury custom interior finishes.",
    price: "From $85,000",
  },
  {
    title: "Attached Guest Suite Additions",
    href: "/home-renovation-chandler-az/",
    description:
      "Expand your existing floor plan with an attached suite addition. Perfect for multi-generational living, featuring private exterior entrances, luxury custom spa bathrooms, and independent zone climate controls.",
    price: "From $65,000",
  },
  {
    title: "Premium ADU Bathroom & Kitchenette Tiling",
    href: "/bathroom-tile-installation/",
    description:
      "Specialized interior finishing for existing ADU shells. We build spectacular custom walk-in tile showers, install luxury quartz countertops, custom vanities, and premium moisture-proof flooring.",
    price: "From $12,000",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Licensed ROC338304 Contractor",
    body: "Fully licensed for residential additions and structural construction, verified with the Arizona ROC.",
  },
  {
    icon: Star,
    title: "2-Year Structural Warranty",
    body: "We stand behind all framing, foundations, utility rough-ins, and finishes with a full 2-year warranty.",
  },
  {
    icon: MapPin,
    title: "Chandler Local Expertise",
    body: "In-depth understanding of City of Chandler development codes, setback rules, and HOA compliance.",
  },
  {
    icon: DollarSign,
    title: "Guaranteed Fixed Proposals",
    body: "No hidden fees or unexpected changes. Your structural blueprints and fixed pricing are locked before break-ground.",
  },
  {
    icon: Droplets,
    title: "Complete Utilities Management",
    body: "Professional management of all slab trenching, main sewer taps, electrical panel upgrades, and mini-splits.",
  },
  {
    icon: Clock,
    title: "Dedicated Project Supervisor",
    body: "A designated English-speaking supervisor remains on-site daily to coordinate municipal safety inspections.",
  },
];

const pricingTiers = [
  {
    label: "Detached Casita Shell (Framing & Utility Rough-Ins)",
    detail: "Foundation, framing, roof, rough-in plumbing/electric",
    range: "From $55,000",
  },
  {
    label: "Attached Suite Addition (Complete)",
    detail: "Excavation, framing, custom spa bath, bedroom layout",
    range: "From $65,000",
  },
  {
    label: "Complete Detached ADU (Custom Finished)",
    detail: "Move-in ready guest house with kitchenette & custom bath",
    range: "From $95,000+",
  },
];

const process = [
  { step: "01", title: "Site Layout & Zoning Consultation", body: "We audit your plot size, check rear setbacks, and confirm Chandler zoning compliance." },
  { step: "02", title: "Architectural & Civil Drafting", body: "We draft complete foundation, structural framing, and mechanical plans." },
  { step: "03", title: "Engineering & City Submissions", body: "We coordinate structural calculations and submit plans to Chandler Development Services." },
  { step: "04", title: "Excavation & Foundation", body: "We trench utility lines, set reinforcement steel rebar, and pour the concrete slab." },
  { step: "05", title: "Structural Framing & Shell", body: "We construct wall framing, trusses, roofing, moisture-barrier wrapping, and windows." },
  { step: "06", title: "Utilities & Luxury Interiors", body: "We complete rough-in plumbing, electric, HVAC, drywall, custom tiling, and cabinetry." },
];

export default function AduPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "ADU & Casita Construction", url: "https://arzhomeremodeling.com/adu-casita-construction-chandler/" } ]} />
      <ServiceSchema
        serviceName="ADU & Casita Construction in Chandler, Arizona"
        serviceDescription="Licensed residential contractor specializing in premium ADU and casita guest house construction in Chandler, AZ. Turnkey design-build detached guest suites, mother-in-law houses, and pool suites."
        serviceUrl={`${siteConfig.url}/adu-casita-construction-chandler/`}
      />
      <FAQSchema faqs={aduFaqs} />
      <PriceSchema
        serviceName="ADU & Casita Construction in Chandler AZ"
        priceRange="$55,000 - $95,000+"
        url={`${siteConfig.url}/adu-casita-construction-chandler/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium ADU & Casita Construction in Chandler, AZ"
          subtitle="Custom Detached Guest Houses & Suite Additions"
          description="Expand your living space and maximize your property value with Chandler's leading design-build ADU team. From luxurious detached mother-in-law suites in Fulton Ranch to attached pool casitas in Ocotillo: we manage the complete zoning, engineering, permits, and premium construction pipeline."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "ADU & Casita Construction Chandler AZ", url: `${siteConfig.url}/adu-casita-construction-chandler/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Accessory Dwelling Units (ADUs) and detached guest casitas are transforming the Arizona residential market. Whether you require private multi-generational housing for aging parents, an independent guest suite, or a premium detached home office in master-planned developments like **Fulton Ranch** or custom acreage in **Ocotillo**, constructing a casita delivers unbeatable daily functionality and substantial long-term appraisal value. If you've been looking for an expert **adu builder chandler**, a trusted **casita contractor chandler**, or a licensed **guest house builder in chandler az**, ARZ Home Remodeling is your premier local partner.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-end, turnkey **ADU & casita construction in Chandler, AZ**. We are a residential contracting firm licensed under **ROC #ROC338304**, managing every stage from initial site surveying and structural engineering to county/city zoning approvals, concrete foundation pouring, custom utilities layout, framing, and luxury interior tiling.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Zoning Compliance & Plot Scoping:** Chandler zoning code requires strict compliance regarding accessory dwelling footprints. Detached casitas must be situated in the rear yard, maintaining designated side and rear setbacks (typically 3 to 5 feet depending on utility easements). Additionally, the guest house must match the architectural style, stucco finish, paint color, and clay tile roof pitch of your primary residence. We handle the complete engineering review and community ARC clearances to ensure a smooth, worry-free process.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **City Permitting & Utilities Engineering:** Tapping into your home's main sewer line, routing fresh water pipes, scaling your electrical subpanel (to manage new HVAC and appliance loads), and pouring structural concrete foundations requires a permit through the **City of Chandler Development Services Department** (located at 215 E Buffalo St). We coordinate the complete drafting and inspection pipelines, giving you absolute assurance that your casita is constructed to the highest safety and building code standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Your Free In-Home Casita Consultation!
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+14805693339" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our ADU & Casita Services
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
                Why Chandler Homeowners Choose ARZ
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
                Chandler Casita & ADU Cost Guide
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
                Our Casita Building Process
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

        <ServiceFAQ faqs={aduFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Build Your Custom Casita in Chandler, AZ?"
          description="Call us or fill out the form. We will discuss your project and schedule your free structural layout evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
