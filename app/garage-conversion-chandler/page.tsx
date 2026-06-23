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

export const metadata: Metadata = {title: "Licensed Garage Conversions Chandler AZ | Custom ADUs | ARZ",description: "Convert your garage into a master suite, bedroom, or home office in Chandler, AZ. ROC licensed design-build contractor. Get a free custom estimate!",
  openGraph: {title: "Garage Conversion Baths | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore garage conversion baths, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/garage-conversion-chandler/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Garage Conversion Baths | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore garage conversion baths, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/garage-conversion-chandler/`,
  },
};

const conversionFaqs = [
  {
    question: "Is a permit required for a garage conversion in Chandler, AZ?",
    answer:
      "Yes. The City of Chandler requires a comprehensive building permit to convert any garage into living space. This is to ensure compliance with structural framing, electrical codes, insulation standards, ceiling heights, and safety egress windows. Unpermitted conversions are illegal and can complicate home sales. We handle the entire engineering, drafting, and permit filing pipeline."
  },
  {
    question: "How do you heat and cool a converted garage in the Arizona heat?",
    answer:
      "Garages are typically uninsulated shells. We frame insulated walls (R-13 to R-21) and insulate the ceiling (R-30 to R-38). For climate control, we recommend installing a dedicated high-efficiency ductless mini-split HVAC system. This offers independent, zone-controlled cooling and heating without straining your primary home's AC unit."
  },
  {
    question: "How do you handle the plumbing for a master suite conversion?",
    answer:
      "Adding a custom bathroom or laundry line to a converted garage requires routing plumbing through the concrete slab. We use concrete saw-cutting to trench the slab, lay structural drainage lines (sloped at the required pitch to tap into your main sewer stack), and pour new concrete. We then install state-of-the-art waterproofing substrates before tiling."
  },
  {
    question: "What is the timeline for a full garage conversion?",
    answer:
      "A complete 2-car garage conversion into a fully finished bedroom, master suite, or home office takes between three to five weeks of active construction. This includes slab prep, wall framing, insulation, electrical rough-ins, HVAC installation, drywall, painting, and interior tiling."
  },
  {
    question: "Do I need to replace the garage door with a solid wall?",
    answer:
      "Yes, to meet building codes, the original garage door must be removed and replaced with a weather-tight structural wall. Homeowners often choose to install elegant french doors, large-format sliding glass panels, or a solid matching stucco wall with energy-efficient windows to allow natural light while blending seamlessly with the home's exterior."
  }
];

const services = [
  {
    title: "Complete Master Suite Conversions",
    href: "/contact/",
    description:
      "Convert your underutilized 2-car or 3-car garage into a spectacular, spacious master suite addition. Includes concrete slab trenching, custom spa-like walk-in tiled shower installation, custom walk-in closet, and premium insulation.",
    price: "Free Custom Estimate",
  },
  {
    title: "Luxury Guest Quarters & Casitas",
    href: "/contact/",
    description:
      "Transform your garage into an attached guest casita with private exterior entry, high-efficiency ductless mini-split climate controls, luxury quartz kitchenette, and beautiful custom tile flooring.",
    price: "Free Custom Estimate",
  },
  {
    title: "Professional Home Offices & Studios",
    href: "/contact/",
    description:
      "Create a private, insulated sanctuary to work from home. Complete with soundproof wall framing, recessed LED ambient lighting, dedicated ethernet/power drops, and elegant double french doors.",
    price: "Free Custom Estimate",
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
    body: "We stand behind all framing, HVAC mini-splits, rough-in plumbing, and custom tile finishes with a full 2-year warranty.",
  },
  {
    icon: MapPin,
    title: "Chandler Local Expertise",
    body: "In-depth understanding of City of Chandler development codes, setback rules, and HOA compliance.",
  },
  {
    icon: DollarSign,
    title: "Guaranteed Fixed Proposals",
    body: "No hidden fees or unexpected changes. Your structural blueprints and fixed pricing are locked before demo starts.",
  },
  {
    icon: Droplets,
    title: "Thermal & Climate Specialists",
    body: "Professional execution of radiant barrier foil wraps, R-38 thermal insulation, and dedicated mini-split installations.",
  },
  {
    icon: Clock,
    title: "Consecutive Clean Schedule",
    body: "Our crew works consecutively on your home every business day until the final walkthrough is complete.",
  },
];

const pricingTiers = [
  {
    label: "Garage Home Office / Studio Conversion",
    detail: "Wall framing, R-19 insulation, drywall, flooring, mini-split AC",
    range: "Free Custom Estimate",
  },
  {
    label: "Garage Guest Quarters (Attached Casita)",
    detail: "Framing, insulation, plumbing, private entry, kitchenette",
    range: "Free Custom Estimate",
  },
  {
    label: "Garage Master Suite Conversion",
    detail: "Full custom layout: custom master bathroom, walk-in closet",
    range: "Free Custom Estimate",
  },
];

const process = [
  { step: "01", title: "Zoning & Feasibility Consultation", body: "We check HOA guidelines, verify off-street parking rules, and confirm permit feasibility." },
  { step: "02", title: "Structural Drafting & Blueprints", body: "We draft complete slab, framing, utility hookup, and insulation plans." },
  { step: "03", title: "City Permitting", body: "We submit plans and handle permit acquisition with Chandler Development Services." },
  { step: "04", title: "Slab & Plumbing Trenching", body: "We cut concrete slabs to route drain lines, pour new concrete, and seal substrates." },
  { step: "05", title: "Framing & Thermal Insulation", body: "We remove garage doors, frame matching exterior/interior walls, and pack high-grade insulation." },
  { step: "06", title: "Mechanicals & Custom Finish", body: "We install electrical wiring, drywall, mini-split AC, custom bathroom tiling, and trim." },
];

export default function GarageConversionPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Garage Conversion", url: "https://arzhomeremodeling.com/garage-conversion-chandler/" } ]} />
      <ServiceSchema
        serviceName="Garage Conversion in Chandler, Arizona"
        serviceDescription="Licensed residential contractor specializing in premium garage conversions in Chandler, AZ. Turnkey conversions into master suites, guest apartments, and home offices."
        serviceUrl={`${siteConfig.url}/garage-conversion-chandler/`}
      />
      <FAQSchema faqs={conversionFaqs} />
      <PriceSchema
        serviceName="Garage Conversion in Chandler AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/garage-conversion-chandler/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium Garage Conversion in Chandler, AZ"
          subtitle="Convert Underutilized Space Into Luxury Living Areas"
          description="Unlock the hidden square footage of your home. Specializing in turnkey garage conversions in Chandler, Arizona: converting uninsulated garages into beautiful master suites, guest apartments, or professional home offices with ROC licensed expertise."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Garage Conversion Chandler AZ", url: `${siteConfig.url}/garage-conversion-chandler/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Garages represent some of the most underutilized square footage in Arizona homes. If your cars are parked in the driveway and you are feeling cramped inside, a professional garage room conversion is the most cost-effective way to add substantial living space without the massive cost of building a detached addition. Whether you own a beautiful master-planned home in **Ocotillo** or custom property in **Fulton Ranch**, converting a garage delivers incredible layout functionality. If you've been looking for an expert **garage conversion chandler**, a trusted **garage remodeler chandler**, or a licensed **room addition contractor in chandler az**, ARZ Home Remodeling is your premier local partner.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-end, turnkey **garage conversions in Chandler, AZ**. We are a residential contracting firm licensed under **ROC #ROC338304**, managing all slab saw-cutting, subfloor plumbing routing, wall framing, high-density thermal insulation, HVAC mini-split installation, drywall, custom bathroom tiling, and trim work.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Master Suite & Attached Casita Specialties:** Adding a luxury master suite requires meticulous plumbing execution. We cut and trench the existing concrete slab to connect toilet and shower drains directly into your home's main sewer stack. We pack structural wall framing with high-performance R-19 fiberglass insulation and ceiling joists with R-38 thermal batts. To ensure perfect year-round comfort, we install high-efficiency ductless mini-split systems for zone-controlled cooling, preventing main AC strain.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Zoning Laws & City Permitting:** The City of Chandler requires a comprehensive permit for all garage conversions. City codes mandate replacing the garage door with an insulated, weather-tight wall that architecturally matches the primary residence's stucco and color. Homeowners often install elegant french doors, large-format sliding glass panels, or a solid stucco wall with egress windows. We handle the complete engineering review, blueprint submittal, and city inspections process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Your Free In-Home Garage Conversion Consultation!
                </a>
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

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Room Conversion Services
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
                Chandler Garage Conversion Cost Guide
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
                Our Conversion Process
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

        <ServiceFAQ faqs={conversionFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Convert Your Garage in Chandler, AZ?"
          description="Call us directly to speak with a project supervisor. We will walk through your ideas, discuss budgeting, and schedule your free structural layout evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
