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

export const metadata: Metadata = {title: "Fulton Ranch Bathroom Remodeling | Free Estimates | ARZ",description: "Looking for a licensed bath remodeler in Fulton Ranch, Chandler? ARZ specializes in custom tile showers, layouts, & fixtures. Call for your free consultation!",
  openGraph: {title: "Fulton Ranch Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore fulton ranch bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-fulton-ranch/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Fulton Ranch Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore fulton ranch bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-fulton-ranch/`,
  },
};

const fultonRanchFaqs = [
  {
    question: "Do you have experience working with Fulton Ranch HOA rules?",
    answer:
      "Yes. Fulton Ranch has strict architectural and landscaping rules, even for interior modifications that require waste containers on-site. We submit all required plans, certificate of insurance forms, and scheduling details to the Fulton Ranch HOA to ensure a quick approval."
  },
  {
    question: "How much does a master bathroom remodel cost in Fulton Ranch?",
    answer:
      "Full master bathroom renovations in Fulton Ranch custom homes vary depending on layout changes, plumbing moves, and material selections (such as custom stone, marble, or quartz). We provide detailed, itemized quotes before any construction starts, ensuring a fixed-price guarantee."
  },
  {
    question: "What is your workmanship warranty for Fulton Ranch remodels?",
    answer:
      "We offer a 2-year workmanship warranty on all our remodeling services. We stand behind our installation of tile, waterproof membranes, plumbing extensions, and electrical routing. If any issues arise, we resolve them at no cost."
  },
  {
    question: "Can you convert my garden tub into a walk-in shower?",
    answer:
      "Yes. Replacing unused garden tubs with spacious walk-in showers is our most requested service. We design custom curbless entries, frameless glass enclosures, built-in shampoo niches, and integrated seating."
  },
  {
    question: "Are you licensed to perform plumbing and electrical work in Arizona?",
    answer:
      "Yes, we are fully licensed by the Arizona Registrar of Contractors under license number ROC338304. We handle all city permits and inspections for plumbing relocation, layout expansions, and electrical upgrades."
  },
];

const services = [
  {
    title: "Custom Master Renovations",
    href: "/master-bathroom-remodel/",
    description:
      "We design custom master suites featuring floating vanities, quartz countertops, heated floors, and freestanding tubs. We handle the entire process from design to construction.",
    price: "Free Custom Estimate",
  },
  {
    title: "Walk-In Shower Design",
    href: "/walk-in-showers/",
    description:
      "Convert your standard shower into a resort-style walk-in shower. Featuring curbless entries, custom tile work, built-in benches, and high-flow fixtures.",
    price: "Free Custom Estimate",
  },
  {
    title: "Premium Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Professional layout and installation of porcelain, ceramic, or natural stone tiles. We use high-performance epoxy grout to resist hard water stains.",
    price: "Free Custom Estimate",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "ROC Licensed (ROC338304)",
    body: "Rest assured that all work is completed under active Arizona contractor registration and full insurance.",
  },
  {
    icon: Star,
    title: "2-Year Craftsmanship Guarantee",
    body: "We guarantee the quality of our bathroom work. If it fails within two years, we will repair it for free.",
  },
  {
    icon: MapPin,
    title: "Fulton Ranch Local",
    body: "Proudly serving custom estates and townhomes near the Fulton Ranch Promenade.",
  },
  {
    icon: DollarSign,
    title: "No-Surprise Pricing",
    body: "We provide complete pricing in a written contract before demo begins. No hidden fees.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Focus",
    body: "We construct leak-proof showers using the advanced Schluter-KERDI membrane system.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    body: "We coordinate all sub-trades, city inspectors, and materials to finish on schedule.",
  },
];

export default function FultonRanchPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Bathroom Remodeling Fulton Ranch", url: "https://arzhomeremodeling.com/bathroom-remodeling-fulton-ranch/" }
      ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Fulton Ranch, Chandler"
        serviceDescription="Licensed bathroom contractor specializing in master bathroom remodeling, walk-in showers, and custom tile installation in Fulton Ranch, Chandler, AZ."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-fulton-ranch/`}
      />
      <FAQSchema faqs={fultonRanchFaqs} />
      <PriceSchema
        serviceName="Fulton Ranch Bathroom Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-fulton-ranch/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Custom Bathroom Remodeling in Fulton Ranch, Chandler"
          subtitle="Luxury Master Renovations & Walk-In Showers"
          description="Upgrade your Fulton Ranch property with the East Valley's premier custom builder. Specializing in high-end tile, curbless walk-in showers, and master suite layouts, we offer fixed written quotes and ROC Licensed peace of mind."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Fulton Ranch Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling-fulton-ranch/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Master Bathroom Transformations in Fulton Ranch (85248)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fulton Ranch is one of Chandler's most prestigious master-planned communities, known for its beautiful lakes, lush landscaping, and luxurious custom homes. While these homes offer outstanding structural bones, many bathrooms built in the early 2000s are due for a modern upgrade. Outdated garden tubs, builder-grade tile, and inefficient lighting systems are common frustrations for local homeowners.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we deliver turn-key custom solutions. From layout redesigns to high-end material selection, we handle every phase. We use the robust <Link href="/blog/schluter-kerdi-vs-redgard-arizona/" className="text-primary hover:underline font-medium">Schluter waterproofing system</Link> to ensure your custom tile shower is structurally sound, vapor-proof, and built to withstand Arizona's dry conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Request Your Free Fulton Ranch Consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+15205693339" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (520) 569-3339
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Fulton Ranch Landmarks & Local Remodeling Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fulton Ranch is an exclusive master-planned oasis in south Chandler, distinguished by its scenic <strong>Fulton Ranch Lakes</strong>, private walking trails, and premium custom estates. When we remodel master bathrooms in Fulton Ranch, we deliver top-tier craftsmanship that aligns with the neighborhood's high-end requirements. For homes near the <strong>Fulton Ranch Towne Center</strong>, we design custom spaces that provide a genuine resort experience.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Fulton Ranch Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed on a custom estate near <strong>Arizona Avenue and Ocotillo Road</strong> involved removing an outdated builder-grade garden tub. We converted the space into a massive, curbless walk-in master shower with dual shower head plumbing loops, digital Moen temperature controls, and solid-wood floating double vanities with premium quartz tops.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Chandler Permitting & Inspections for Fulton Ranch:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Fulton Ranch is part of Chandler, structural framing modifications, major plumbing movements, or new electrical circuits require a building permit from the <strong>Chandler Development Services Department</strong> (located at 175 S Arizona Ave). We manage all design drawings, permit submittals, and inspection scheduling directly, ensuring that your home's luxury upgrades comply fully with all local safety standards.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Offer</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Fulton Ranch Bathroom Services
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
                Why Fulton Ranch Homeowners Choose Us
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

        {/* HARD WATER */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4">
              <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Protecting Fulton Ranch Bathrooms from Hard Water
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Fulton Ranch's water lines carry significant mineral scale. Standard cement-based grouts and untreated shower glass can cloud and degrade quickly.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  We use special materials to ensure longevity:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>High-Performance Epoxy Grout:</strong> Waterproof, non-porous grout that resists staining.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Hydrophobic Glass Coatings:</strong> Causes water to bead off, stopping mineral build-up.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Brass Fixture Selections:</strong> Quality internal valves that resist calcification.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={fultonRanchFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Start Your Fulton Ranch Remodel?"
          description="Get in touch with us to schedule your complimentary in-home layout evaluation and receive a detailed, fixedwritten estimate."
        />
      </main>
      <Footer />
    </>
  );
}
