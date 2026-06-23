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

export const metadata: Metadata = {title: "San Tan Valley Bathroom Remodeling | Free Estimates | ARZ",description: "Looking for a licensed bath remodeler in San Tan Valley, AZ? ARZ specializes in custom tile showers, layouts, & fixtures. Call for your free consultation!",
  openGraph: {title: "San Tan Valley Bath | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore san tan valley bath, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-san-tan-valley-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "San Tan Valley Bath | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore san tan valley bath, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-san-tan-valley-az/`,
  },
};

const sanTanValleyFaqs = [
  {
    question: "Do I need a building permit for a bathroom remodel in San Tan Valley?",
    answer:
      "Yes, as an unincorporated community in Pinal County, all major residential remodeling permits are processed by the Pinal County Planning & Development Department (based out of Florence, AZ). Permits are required if you alter structural walls, relocate primary plumbing fixtures, or run new electrical sub-circuits. ARZ Home Remodeling manages the entire blueprint, county submission, and inspection pipeline."
  },
  {
    question: "What is the benefit of a tub-to-shower conversion in master-planned communities?",
    answer:
      "Standard master-planned floor plans in communities like Encanterra or Johnson Ranch often feature small, dark guest tubs or cramped master showers next to massive, underutilized garden tubs. Converting these into a single, expansive walk-in tile shower optimizes floor space, increases physical accessibility, and dramatically improves visual appeal and home value at resale."
  },
  {
    question: "What are the latest bathroom design trends in San Tan Valley, AZ?",
    answer:
      "San Tan Valley homeowners currently prefer a clean 'modern desert' or 'warm organic' aesthetic. Floating wood vanities with dual undermount sinks, quartz countertops, champagne bronze or matte black fixtures, and large-format porcelain wall tiles are highly popular. Frameless zero-threshold walk-in tile showers with built-in storage niches are the most requested feature."
  },
  {
    question: "How do you coordinate with local HOAs in Encanterra or Johnson Ranch?",
    answer:
      "Master-planned developments have strict architectural rules regarding contractor check-ins, heavy vehicle parking, and work schedules (typically 7:00 AM to 6:00 PM on weekdays). ARZ Home Remodeling coordinates directly with your ARC/HOA manager to submit required paperwork, set up gate codes, and maintain community compliance throughout the remodel."
  },
  {
    question: "How does San Tan Valley's water hardness affect custom showers?",
    answer:
      "San Tan Valley water features high mineral concentrations, averaging 18+ grains of hardness. This causes solid white calcium scaling on standard cement grouts and tiles. To defend your investment, we exclusively install dense, non-porous porcelain tiles and high-grade resin epoxy grout, which completely prevents mineral stains and scaling."
  }
];

const services = [
  {
    title: "Zero-Threshold Curbless Showers",
    href: "/ada-bathroom-remodeling/",
    description:
      "Ideal for modern luxury and universal access. We lower the subfloor substrate to build a perfectly flat, barrier-free tiled shower entry, equipped with safety grab bars, linear drains, and frameless glass panels.",
    price: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "We replace old, high-sided acrylic bathtubs or fiberglass surrounds with spacious tiled walk-in showers. This is our most popular service to optimize floor plans.",
    price: "Free Custom Estimate",
  },
  {
    title: "Complete Master Bath Overhauls",
    href: "/master-bathroom-remodel/",
    description:
      "Transform your master bath with custom double vanities, premium quartz tops, luxury freestanding tubs, custom porcelain wall tiling, and updated ambient led lighting setups.",
    price: "Free Custom Estimate",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "AZ Licensed ROC338304",
    body: "Fully licensed residential contracting firm, verified with the Arizona Registrar of Contractors.",
  },
  {
    icon: Star,
    title: "2-Year Written Warranty",
    body: "We stand behind every joint, valve, and tile seam with a full 2-year workmanship warranty.",
  },
  {
    icon: MapPin,
    title: "San Tan Valley Local Specialist",
    body: "Remodeling bathrooms in premium master-planned neighborhoods and active-adult developments.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Guarantee",
    body: "You receive a fully itemized proposal with guaranteed final pricing. No hidden costs, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Mineral Water Defence",
    body: "We utilize industrial-grade epoxy grouts and hydrophobic nano-coated glass to resist scale scaling.",
  },
  {
    icon: Clock,
    title: "Firm Project Timelines",
    body: "Our crew works consecutively on your home every business day until the final walkthrough is complete.",
  },
];

const pricingTiers = [
  {
    label: "Guest Bathroom Update",
    detail: "Vanity, toilet, fixtures, paint",
    range: "Free Custom Estimate",
  },
  {
    label: "Guest Bathroom Full Remodel",
    detail: "Tile, shower, vanity, flooring",
    range: "Free Custom Estimate",
  },
  {
    label: "Tub-to-Shower Conversion",
    detail: "Demo, waterproofing, custom shower build",
    range: "Free Custom Estimate",
  },
  {
    label: "Master Bathroom Remodel",
    detail: "Full scope: shower, vanity, tile, lighting",
    range: "Free Custom Estimate",
  },
];

const process = [
  { step: "01", title: "Free Phone Consultation", body: "We discuss your specific safety and aesthetic goals, layout ideas, and budget." },
  { step: "02", title: "In-Home Assessment", body: "We evaluate your current plumbing, take precise measurements, and review catalogs." },
  { step: "03", title: "Detailed Fixed Proposal", body: "You get a transparent, fully itemized quote outlining all labor, materials, and permits." },
  { step: "04", title: "Zoning & Permitting", body: "We pull all necessary permits through Pinal County and City of Florence offices." },
  { step: "05", title: "Execution & Clean Build", body: "Our clean, licensed crew completes all demolition, waterproofing, plumbing, and tiling." },
  { step: "06", title: "Milestone Walkthrough", body: "You inspect every square inch with our supervisor. 100% satisfaction guarantee." },
];

const neighborhoods = [
  "Encanterra", "Johnson Ranch", "Pecan Creek", "Copper Basin", "Skyline Ranch", 
  "San Tan Heights", "85140", "85143"
];

export default function SanTanValleyPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling San Tan Valley Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-san-tan-valley-az/" } ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in San Tan Valley, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving San Tan Valley, AZ. High-end master suite overhauls, zero-threshold tile walk-in showers, and tub-to-shower conversions in Encanterra and Johnson Ranch."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-san-tan-valley-az/`}
      />
      <FAQSchema faqs={sanTanValleyFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in San Tan Valley AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-san-tan-valley-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Licensed Bathroom Remodeling in San Tan Valley, AZ"
          subtitle="Custom Tiled Showers & Luxury Master Suite Transformations"
          description="Elegantly transform your bathroom into a beautiful, functional retreat. Specializing in high-end curbless walk-in showers, tub-to-shower conversions, and premium master suite bathroom renovations in Encanterra, Johnson Ranch, and across San Tan Valley."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling San Tan Valley AZ", url: `${siteConfig.url}/bathroom-remodeling-san-tan-valley-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              San Tan Valley homes feature spacious, modern floor plans that deserve matching custom interiors. Whether you own a beautiful resort property in the gated **Encanterra** community or a spacious family home in **Johnson Ranch**, a custom bathroom remodel is one of the most reliable ways to improve comfort, safety, and home equity. If you are seeking an expert **bathroom remodel san tan valley**, a trusted **bathroom remodeling san tan valley**, or a premium **bath remodeler in san tan valley**, ARZ Home Remodeling is at your service.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-end **bathroom remodeling in San Tan Valley, AZ**: delivering custom walk-in tiled showers, zero-threshold safety entryways, and premium master bathroom transformations across **85140 and 85143**. We are a residential contracting firm licensed under **ROC #ROC338304**, ensuring expert craftsmanship, code-compliant plumbing, and fixed-price contracts.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Resort-Style Upgrades in Encanterra:** Resort homes require a high degree of luxury and clean finishing. We specialize in retrofitting master baths with premium zero-threshold linear drain showers, custom wood double vanities with natural stone countertops, freestanding soaking tubs, and custom smart ambient LED backlit mirrors. We ensure complete HOA compliance regarding contractor registration, gate codes, and dumpster placements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Pinal County Permitting & Building Safety:** Any structural framing modifications (like removing a wall) or mechanical relocations (like moving a toilet plumbing stack) require a permit through the **Pinal County Planning & Development Department** (located in Florence, AZ). ARZ Home Remodeling manages the entire drafting, engineering, permit submission, and county inspections pipeline, ensuring absolute safety and structural code compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Your Free In-Home Consultation Today!
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

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              San Tan Valley Scenery & Recent Renovations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              San Tan Valley is a thriving, picturesque community situated near **San Tan Mountain Regional Park**, **Encanterra Golf Club**, and the famous **Schnepf Farms**. The beautiful desert landscapes inspire many of our rustic modern designs. Homes in newer developments like **San Tan Heights**, **Pecan Creek**, and **Skyline Ranch** benefit significantly from our professional hard water scaling defense systems.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent San Tan Valley Project Highlight:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We recently completed a luxury master suite remodel in an Encanterra resort home. We removed a cramped corner fiberglass shower and outdated builder-grade garden tub, expanding the footprint to construct a massive double-entry custom walk-in shower with linear drains, integrated heated floor systems, custom oak double vanities with quartzite tops, and floor-to-ceiling textured porcelain tiles, utilizing stain-resistant epoxy grout.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our San Tan Valley Remodeling Services
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
                Why San Tan Valley Resort Neighborhoods Choose ARZ
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
                San Tan Valley Bathroom Remodel Cost Guide
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
                Our Remodeling Process
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

        {/* SERVICE AREAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Service Area</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 text-foreground">
              Serving All of San Tan Valley, AZ
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={sanTanValleyFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in San Tan Valley, AZ?"
          description="Call us directly to speak with a project supervisor. We will discuss your project, provide a phone estimate, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
