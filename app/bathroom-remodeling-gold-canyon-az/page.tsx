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

export const metadata: Metadata = {title: "Bath Remodel Gold Canyon | Licensed Pro | ARZ Chandler",description: "Top-rated bathroom remodeling in Gold Canyon, AZ by ARZ. Specialized in custom walk-in showers, tub conversions, & tile work. Call for a free quote!",
  openGraph: {title: "Gold Canyon Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore gold canyon bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-gold-canyon-az/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Gold Canyon Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore gold canyon bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-gold-canyon-az/`,
  },
};

const goldCanyonFaqs = [
  {
    question: "Do I need a permit for a bathroom remodel in Gold Canyon, AZ?",
    answer:
      "Since Gold Canyon is an unincorporated community, all residential building permits are processed through the Pinal County Planning & Development Department (located in Florence). Any layout expansions, structural modifications, or major plumbing redistributions require county permits and inspections. ARZ Home Remodeling coordinates the complete drafting, permit filing, and county inspections pipeline."
  },
  {
    question: "How do you handle septic and private sewer configurations in Gold Canyon?",
    answer:
      "Many luxury homes in Gold Canyon (especially near the foothills or Superstition Mountain) operate on private septic or pressurized sewer systems. When remodeling, we evaluate the venting and drainage layout to ensure the custom tile shower tray or freestanding tub functions seamlessly with your septic tank configuration, avoiding slow drains or gas backup issues."
  },
  {
    question: "What are the top bathroom design styles for Gold Canyon homes?",
    answer:
      "Homeowners in Gold Canyon prefer 'modern rustic' or 'desert transitional' design styles. We combine warm natural-look textured porcelain tiles (resembling travertine or stone), champagne bronze hardware, floating custom oak vanities, and frameless zero-threshold walk-in tile showers. This matches the beautiful surrounding Superstition landscape while maintaining a clean, upscale aesthetic."
  },
  {
    question: "Do I need HOA clearance for a remodel in Gold Canyon?",
    answer:
      "Yes, premium gated developments (such as Superstition Mountain Golf & Country Club and Mountainbrook Village) have strict architectural review committees (ARC/HOA) regulating working hours, dumpster spots, and heavy truck parking. We handle the direct gate clearance and coordinate with your community manager to ensure a completely smooth process."
  },
  {
    question: "Why is water quality a major concern for Gold Canyon showers?",
    answer:
      "The municipal and private well water in Pinal County features extremely high levels of calcium carbonate, averaging 18+ grains per gallon. This mineral scale will quickly ruin standard grout and cloud glass panels. We exclusively specify premium non-porous resin epoxy grout and apply hydrophobic glass treatments to protect your shower from mineral spots."
  }
];

const services = [
  {
    title: "Luxury Walk-In Tiled Showers",
    href: "/shower-remodeling/",
    description:
      "We convert standard tub surrounds into open, curbless walk-in showers with frameless glass enclosures, custom porcelain tile surrounds, built-in niches, and premium rainfall fixtures. Schluter-KERDI waterproofed substrate guarantees zero leaks.",
    price: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "We remove dated alcove tubs and replace them with spacious tiled walk-in showers. This is our most requested service to optimize guest baths and master layouts.",
    price: "Free Custom Estimate",
  },
  {
    title: "Complete Master Suite Remodels",
    href: "/master-bathroom-remodel/",
    description:
      "Luxury master transformations featuring freestanding copper or acrylic soaking tubs, custom quartzite double vanities, tiled backsplashes, custom ambient lighting, and zero-threshold layouts.",
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
    title: "Gold Canyon Local Specialist",
    body: "Remodeling bathrooms in premium mountain communities and master-planned neighborhoods.",
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
  "Superstition Mountain", "Mountainbrook Village", "Peralta Trails", "Gold Canyon East", 
  "Dinosaur Mountain", "Superstition Foothills", "85118"
];

export default function GoldCanyonPage() {
  return (
    <>
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Gold Canyon Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-gold-canyon-az/" } ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Gold Canyon, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Gold Canyon, AZ. Specializing in luxury master suite renovations, zero-threshold tiled walk-in showers, and custom tile installations in Superstition Mountain and Mountainbrook Village."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-gold-canyon-az/`}
      />
      <FAQSchema faqs={goldCanyonFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Gold Canyon AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-gold-canyon-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium Bathroom Remodeling in Gold Canyon, AZ"
          subtitle="Custom Tiled Showers & Luxury Master Suite Transformations"
          description="Elevate your desert lifestyle with Gold Canyon's leading luxury bathroom remodeling team. Specializing in premium walk-in tile showers, freestanding spa tubs, and custom double vanities in gated golf developments and mountain properties across Gold Canyon."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Gold Canyon AZ", url: `${siteConfig.url}/bathroom-remodeling-gold-canyon-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gold Canyon properties offer spectacular scenery that demands a matching interior aesthetic. Whether you own a luxurious custom home in the gated **Superstition Mountain Golf & Country Club** or a comfortable golf course estate in **Mountainbrook Village**, a professional bathroom transformation is one of the highest-converting home improvements you can invest in. If you are seeking an expert **bathroom remodel gold canyon**, a reliable **bathroom remodeling gold canyon**, or a premium **bath remodeler in gold canyon**, ARZ Home Remodeling is at your service.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-end **bathroom remodeling in Gold Canyon, AZ**, delivering custom tiled curbless showers, quartz vanity setups, and luxury master bath renovations in zip code **85118**. We operate under license **ROC #ROC338304**, utilizing Pinal County building code standards, advanced Schluter moisture waterproofing backing systems, and non-porous resin epoxy grouts.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Custom Septic & Specialized Drainage Inspections:** Homes in the scenic Gold Canyon foothills often feature private septic tanks or custom gravity drainage lines. Altering your plumbing footprint - such as moving a toilet drain or replacing an alcove tub with a zero-threshold custom sloped shower bed - requires precise venting knowledge to ensure perfect code compliance. We audit the drainage stack before tiling to prevent backup or slow drain issues, ensuring years of worry-free operation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Pinal County Permitting & Building Safety:** Any structural alterations or major mechanical modifications require a permit through the **Pinal County Planning & Development Department** (processed out of Florence, AZ). ARZ Home Remodeling coordinates the entire structural framing blueprint creation, permit submission, and county inspections pipeline, ensuring complete building code compliance.
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
              Gold Canyon Scenery & Premium Home Renovations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Gold Canyon is an unincorporated community in Pinal County, featuring the iconic **Superstition Mountain**, the prestigious **Superstition Mountain Golf & Country Club**, and the gorgeous **Gold Canyon Golf Resort**. The unique topography and luxury desert lifestyles demand experienced contractors. Homes in **Peralta Trails** and **Gold Canyon East** benefit significantly from our professional hard water scaling defense systems.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Gold Canyon Project Highlight:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We recently completed a luxury master suite transformation in a modern transitional home near **Dinosaur Mountain**. We replaced a bulky green garden tub with a gorgeous freestanding acrylic soaking tub with a floor-mounted champagne bronze tub filler. We expanded the shower footprint to build a massive zero-barrier custom walk-in shower featuring custom wood-grain-patterned porcelain wall tiles and a custom linear drain, fully integrated with high-performance epoxy grout.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Gold Canyon Bathroom Services
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
                Why Gold Canyon Gated Communities Choose ARZ
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
                Gold Canyon Bathroom Remodel Cost Guide
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
              Serving All of Gold Canyon, AZ
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

        <ServiceFAQ faqs={goldCanyonFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Gold Canyon, AZ?"
          description="Call us directly to speak with a project supervisor. We will discuss your project, provide a phone estimate, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
