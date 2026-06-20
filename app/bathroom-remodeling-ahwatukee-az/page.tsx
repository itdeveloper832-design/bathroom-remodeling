import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema, PriceSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import AreaBenefits from "@/components/area-benefits";
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
    absolute: "Ahwatukee Bath Remodel | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore ahwatukee bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "Ahwatukee Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore ahwatukee bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-ahwatukee.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Ahwatukee Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Ahwatukee Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore ahwatukee bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-ahwatukee.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`,
  },
};

const ahwatukeeFaqs = [
  {
    question: "How long does a bathroom remodel take in Ahwatukee, AZ?",
    answer:
      "A guest bathroom remodel typically takes two to three weeks of active construction. Full master bathroom renovations in areas like Foothills or Club West run four to six weeks depending on complexity. We provide a firm timeline in your written proposal."
  },
  {
    question: "Do you need a permit for bathroom remodeling in Ahwatukee?",
    answer:
      "Cosmetic upgrades generally do not require permits. However, structural changes or significant plumbing/electrical work require a permit from the City of Phoenix (which governs Ahwatukee). We handle all permitting and inspections as part of our service."
  },
  {
    question: "How much does a bathroom remodel cost in Ahwatukee, AZ?",
    answer:
      "Bathroom remodeling costs in Ahwatukee are highly customized, depending on the layout, materials, and complexity of the project. We provide free on-site inspections and prepare detailed, line-item written estimates before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Can you remodel my shower without replacing the whole bathroom?",
    answer:
      "Yes. We specialize in partial remodels, including shower-only replacements and tub-to-shower conversions, which are very popular among Ahwatukee homeowners looking for a modern upgrade."
  },
  {
    question: "Are you licensed to do bathroom remodeling in Arizona?",
    answer:
      "Yes. We are a licensed Arizona contractor operating under license Licensed Contractor - ROC #338304. We carry full insurance and provide a two year workmanship warranty on every project. We are familiar with the specific building standards in Ahwatukee."
  },
  {
    question: "Do you serve neighborhoods throughout Ahwatukee Foothills?",
    answer:
      "We serve all of Ahwatukee, including The Foothills, Mountain Park Ranch, Club West, and the Lakewood areas, plus surrounding communities like Chandler, Tempe, and Gilbert."
  },
];

const services = [
  {
    title: "Walk-In Shower Installation",
    href: "/shower-remodeling/",
    description:
      "We convert outdated tub and shower combos into open, curbless walk-in showers with frameless glass, custom tile, and rainfall showerheads. We use the Schluter waterproofing system for a leak-proof result.",
    price: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "A highly requested service in Ahwatukee. We remove existing tubs, waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds usable space and ROI.",
    price: "Free Custom Estimate",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: three to five weeks. We manage all coordination and trades.",
    price: "Free Custom Estimate",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "AZ Licensed & Insured",
    body: "Every project fully covered. We carry all required Arizona contractor licensing.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand behind our craftsmanship. If it fails within two years, we fix it at no charge.",
  },
  {
    icon: MapPin,
    title: "Ahwatukee Local",
    body: "We have remodeled bathrooms in The Foothills, Club West, and Mountain Park Ranch.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "You receive a written quote before any work starts. No surprises, no hidden fees.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We specify tile and grout systems that resist Ahwatukee's mineral-heavy water supply.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    body: "We provide a firm written schedule. We show up when we say we will.",
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
  { step: "01", title: "Free Phone Consultation", body: "We discuss your goals, budget, and timeline to ensure we are a great fit." },
  { step: "02", title: "In-Home Evaluation", body: "We measure, assess plumbing, and review your selections on-site in Ahwatukee." },
  { step: "03", title: "Fixed Written Proposal", body: "You see the complete price before we start. No hidden costs or surprises." },
  { step: "04", title: "Design & Material Selection", body: "Tile, fixtures, and finishes chosen together to match your style and needs." },
  { step: "05", title: "Construction", body: "Our in-house team handles demo, waterproofing, tile, plumbing, and finishing." },
  { step: "06", title: "Final Walkthrough", body: "You inspect every detail before we close the job. 100% satisfaction required." },
];

const neighborhoods = [
  "The Foothills", "Mountain Park Ranch", "Club West", "Lakewood",
  "Canyon Estates", "Pecos Vistas", "Desert Foothills",
  "85044", "85045", "85048",
];

export default function AhwatukeePage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Ahwatukee Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-ahwatukee-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Ahwatukee, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Ahwatukee, AZ. Custom shower installation, tub-to-shower conversions, master bath renovations, and complete bathroom remodels. Serving The Foothills, Club West, and Lakewood."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`}
      />
      <FAQSchema faqs={ahwatukeeFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Ahwatukee AZ"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-ahwatukee-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Ahwatukee’s Top-Rated Bathroom Remodeling Contractor"
          subtitle="Hire the Best Local Remodelers in Ahwatukee - Free Estimates"
          description="Bringing our 5-star bathroom remodeling services to homeowners in Ahwatukee, AZ. Licensed AZ contractors specializing in high-quality renovations, custom shower installs, and full bathroom transformations."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Ahwatukee", url: `${siteConfig.url}/bathroom-remodeling-ahwatukee-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ahwatukee homeowners deserve a bathroom that matches the beauty of the surrounding Foothills. 
              While we are known for our expert kitchen and bathroom designs, we can also advise on structural modifications similar to what an <strong>ahwatukee az room addition company</strong> would handle, helping you expand your layout for a larger master suite or new vanity footprint.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in{" "}
              <strong className="text-foreground">bathroom remodeling in Ahwatukee, AZ</strong>: from custom 
              walk-in showers in Club West to full master bath transformations in The Foothills. We are a 
              licensed Arizona contractor, serving homeowners across{" "}
              <span className="text-primary font-semibold">85044, 85045, and 85048</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for Your Free No-Obligation Bathroom Quote!
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
              Ahwatukee Community Landmarks & Local Bathroom Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ahwatukee is a unique and scenic community bounded by the spectacular <strong>Ahwatukee Foothills</strong> and <strong>South Mountain Park</strong>, providing homeowners with beautiful desert backdrops. When we remodel bathrooms in Ahwatukee, we take inspiration from this rugged landscape. In golf communities like <strong>Club West</strong> or family-focused neighborhoods like <strong>Mountain Park Ranch</strong>, we focus on designs that match the luxurious, natural aesthetic of the area.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Ahwatukee Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near the <strong>Foothills Golf Club</strong> area involved converting a dated garden tub into a spacious curbless walk-in shower. We used large-format porcelain tile designed to resist local hard water mineral deposits, installed sleek frameless glass panels, and replaced the outdated vanity with a modern floating double-sink vanity in a rich wood finish.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Ahwatukee Permitting & Building Safety Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Ahwatukee is part of Phoenix, structural modifications, layout reconfigurations, or major plumbing updates must be reviewed by the <strong>City of Phoenix Planning & Development Department</strong>. Our team handles all drafting, permit applications, and structural inspections, ensuring that your home's renovations are fully safe, code-compliant, and compliant with all local subdivision guidelines.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground text-balance">
                Our Ahwatukee Bathroom Remodeling Services
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
                Why Ahwatukee Homeowners Choose Us
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

        {/* HARD WATER EXPERTISE */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Solving Ahwatukee's Hard Water Challenges
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Ahwatukee's water supply is known for its high mineral content, which can lead to scale buildup and damage to 
                  bathroom finishes. We use materials designed to withstand the local environment.
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Epoxy Grout:</strong> Highly resistant to mineral absorption and staining.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Nano-Coated Glass:</strong> Repels water and prevents calcium spots on shower doors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Schluter Systems:</strong> Providing a lifetime waterproof seal for your shower.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COST GUIDE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Transparent Pricing</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Ahwatukee Bathroom Remodel Cost Guide
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
              Serving All of Ahwatukee, AZ
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/bathroom-remodeling-chandler-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Chandler AZ →</Link>
              <Link href="/bathroom-remodeling-gilbert-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Gilbert AZ →</Link>
              <Link href="/bathroom-remodeling-tempe-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Tempe AZ →</Link>
            </div>
          </div>
        </section>

        <AreaBenefits 
          benefits={[
            "Custom Master Bathroom Renovation",
            "Expert Tub-to-Shower Conversions",
            "Premium Tile & Stone Installation",
            "Luxury Walk-in Shower Enclosures",
            "Full Bathroom Design & Permitting",
            "Limited 2-Year Workmanship Warranty"
          ]} 
          cityName="Ahwatukee" 
        />
        <ServiceFAQ faqs={ahwatukeeFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready for a Free Estimate in Ahwatukee, AZ?"
          description="Call us directly to speak with a project supervisor. We will walk through your ideas, discuss budgeting, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
