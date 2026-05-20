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

export const metadata: Metadata = {
  title: "Bathroom Remodeling Sun Lakes AZ | ADA & Walk-In Showers",
  description: "Senior-friendly bathroom remodeling in Sun Lakes, AZ. Licensed specialists for zero-threshold walk-in showers, grab bars, and ADA renovations in 85248.",
  openGraph: {
    title: "Bathroom Remodeling Sun Lakes AZ | ADA & Walk-In Showers",
    description: "Expert safety-focused bathroom remodeling in Sun Lakes, AZ. Zero-threshold walk-in showers, handicap accessible layouts, and custom safety bars. Free quotes: (229) 306-5591.",
    url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Sun Lakes AZ | ADA & Walk-In Showers",
    description: "Licensed Sun Lakes bathroom contractors. ADA walk-in showers, tub conversions, senior safety upgrades.",
    images: [`${siteConfig.url}/images/optimized/photo-1552321554-5fefe8c9ef14.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
  },
};

const sunLakesFaqs = [
  {
    question: "Do you specialize in ADA-compliant bathroom renovations?",
    answer:
      "Yes. We specialize in age-in-place remodeling. We install ADA-compliant zero-threshold walk-in showers, slip-resistant flooring, secure blocking for grab bars, comfort-height toilets, and lever-style faucets for easy operation."
  },
  {
    question: "How long does a tub-to-shower conversion take in Sun Lakes?",
    answer:
      "A typical tub-to-shower conversion takes two to three weeks. This includes removing the old cast-iron or acrylic tub, updating water lines, placing a slip-resistant shower tray, installing custom tile, and fitting grab bars."
  },
  {
    question: "Are you licensed and insured to work in Sun Lakes, AZ?",
    answer:
      "Yes, we are a licensed residential contractor with the Arizona Registrar of Contractors under license number ROC338304. We carry full liability insurance and workers' compensation for your complete protection."
  },
  {
    question: "Can we install grab bars without remodeling the entire bathroom?",
    answer:
      "To ensure grab bars are safe and can support full weight, they must be anchored directly into wood blocking behind the wall. We offer minor renovation services to open localized sections, install secure backing, retile, and mount grab bars safely."
  },
  {
    question: "What communities in Sun Lakes do you serve?",
    answer:
      "We serve all of Sun Lakes, including Oakwood, Ironwood, Cottonwood, Palo Verde, and the original Sun Lakes country club area, as well as adjacent neighborhoods in Chandler and Gilbert."
  },
];

const services = [
  {
    title: "ADA Bathroom Renovations",
    href: "/ada-bathroom-remodeling/",
    description:
      "We design accessible bathrooms featuring curbless entries, wider doorways, wheelchair-accessible vanities, and wall-mounted toilets. Safety and style blended perfectly.",
    price: "From $8,000",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Step safely into your shower. We replace hazardous tubs with low-profile or zero-threshold walk-in showers, complete with built-in shower seats and grab bars.",
    price: "$6,000 to $13,000",
  },
  {
    title: "Walk-In Shower Installation",
    href: "/walk-in-showers/",
    description:
      "Open walk-in showers with frameless glass enclosures, handheld shower wands, and customized niche storage. Built with commercial-grade Schluter waterproofing.",
    price: "From $6,000",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Arizona ROC Licensed",
    body: "Operating under license ROC338304. We pull all necessary permits and pass city inspections.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand behind our work. If any grout, tile, or fixture needs adjustment within two years, we fix it.",
  },
  {
    icon: MapPin,
    title: "Sun Lakes Specialists",
    body: "We have updated hundreds of bathrooms in Oakwood, Cottonwood, and Palo Verde country clubs.",
  },
  {
    icon: DollarSign,
    title: "Fixed Written Estimates",
    body: "No hourly rates or hidden surcharges. You receive a contract outlining the exact cost before work begins.",
  },
  {
    icon: Droplets,
    title: "Slip-Resistant Materials",
    body: "We source certified slip-resistant mosaic floor tiles and low-maintenance solid surfaces.",
  },
  {
    icon: Clock,
    title: "Clean Construction Pledge",
    body: "We use dust barriers and floor runners to protect your home and clean up thoroughly every day.",
  },
];

export default function SunLakesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Bathroom Remodeling Sun Lakes", url: "https://arzhomeremodeling.com/bathroom-remodeling-sun-lakes/" }
      ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Sun Lakes, AZ"
        serviceDescription="Licensed contractor specializing in accessible, ADA-compliant bathroom renovations and tub-to-shower conversions in Sun Lakes, AZ."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <FAQSchema faqs={sunLakesFaqs} />
      <PriceSchema
        serviceName="Sun Lakes Bathroom Remodeling"
        priceRange="$6,000 - $40,000+"
        url={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Accessible Bathroom Remodeling in Sun Lakes, AZ"
          subtitle="Zero-Threshold Showers & Senior Safety Renovations"
          description="Maintain your independence with a safety-first bathroom upgrade. Serving active adult communities throughout Sun Lakes, we design low-threshold walk-in showers and ADA-compliant spaces with an ROC Licensed guarantee."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Sun Lakes Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Age-in-Place Bathroom Upgrades in Sun Lakes (85248)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As we plan for the future, home safety becomes a top priority. Standard residential bathrooms built in the 1980s and 1990s in Sun Lakes often feature high-sided acrylic tubs, cramped shower stalls, and slick sheet flooring. These elements represent serious fall hazards. Upgrading to a modern, barrier-free walk-in shower reduces stress and creates a safe environment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in adapting master and guest bathrooms for seniors. We install heavy-duty backing boards for grab bars, wide curbless shower entries, built-in benches, and handheld shower wands. We utilize the <Link href="/blog/ada-bathroom-requirements-arizona/" className="text-primary hover:underline font-medium">ADA requirements for Arizona bathrooms</Link> to ensure full comfort, accessibility, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Mike Hernandez for a Free Safety Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:2293065591" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (229) 306-5591
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
                Sun Lakes Accessible Services
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
                Why Sun Lakes Homeowners Recommend Us
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
                  Low-Maintenance Design for Sun Lakes Homes
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Cleaning a tiled shower can be tough on your back and joints, especially with the high level of minerals in Sun Lakes water.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  We integrate low-maintenance products to keep your shower pristine with minimal scrub time:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Epoxy Grout Upgrades:</strong> Resists mold and mineral locking, wipe clean only.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Solid Surface Panels:</strong> Wall panels without grout lines for the ultimate easy cleaning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Water Softener Prep:</strong> Plumbing loops ready for hard water treatment installation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={sunLakesFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Start Planning Your Safety Remodel Today"
          description="Contact us to schedule a free in-home consultation. We'll evaluate your layout, take measurements, and map out a stress-free transition plan."
        />
      </main>
      <Footer />
    </>
  );
}
