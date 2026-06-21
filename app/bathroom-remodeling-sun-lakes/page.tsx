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

export const metadata: Metadata = {title: "Licensed Bath Renovations Sun Lakes | Custom Tile | ARZ",description: "Beautiful bathroom renovations in Sun Lakes, AZ. High-quality curbless showers, tile installation, and vanity updates. Schedule a free quote today!",
  openGraph: {title: "Sun Lakes Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore sun lakes bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-sun-lakes/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Sun Lakes Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore sun lakes bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`],
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
    price: "Free Custom Estimate",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Step safely into your shower. We replace hazardous tubs with low-profile or zero-threshold walk-in showers, complete with built-in shower seats and grab bars.",
    price: "Free Custom Estimate",
  },
  {
    title: "Walk-In Shower Installation",
    href: "/walk-in-showers/",
    description:
      "Open walk-in showers with frameless glass enclosures, handheld shower wands, and customized niche storage. Built with commercial-grade Schluter waterproofing.",
    price: "Free Custom Estimate",
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
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-sun-lakes/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Accessible Bathroom Remodeling in Sun Lakes, AZ"
          subtitle="Zero-Threshold Showers & Senior Safety Renovations"
          description="Maintain your independence with a safety-first bathroom upgrade. Serving active adult communities throughout Sun Lakes, we design low-threshold walk-in showers and ADA-compliant spaces with an ROC Licensed guarantee."
          image="/images/services/chandler-bathroom-remodel.webp"
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
              As we plan for long-term comfort and security in our homes, standard builder-grade bathrooms present significant hazards. In Sun Lakes, AZ, many properties built in the 1970s through the late 1990s feature high-sided cast iron or fiberglass bathtubs, narrow doorways, slick vinyl flooring, and cramped layouts. These elements create serious fall risks for seniors. Upgrading your space with professional, barrier-free walk-in showers and age-in-place layout reconfigurations improves daily utility, ensures safety, and provides peace of mind.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in design-build bathroom remodeling tailored to the requirements of active adult communities in Sun Lakes, AZ. From zero-threshold curbless roll-in showers and customized walk-in tubs to floating, wheelchair-accessible vanities and structural blocking for secure grab bars, we handle every detail. We carry full Arizona contractor licensing (ROC #338304), providing premium workmanship across ZIP codes **85248 and 85249**.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              To ensure full safety compliance, we adhere strictly to the <Link href="/blog/ada-bathroom-requirements-arizona/" className="text-primary hover:underline font-medium">ADA requirements for Arizona bathrooms</Link>. We reinforce the wall framing by installing solid wood blocking behind the drywall or tile backing. This allows our heavy-duty grab bars to support up to 250 pounds of downward force, preventing failure when under stress. We also select floor materials that feature high coefficient of friction (COF 0.60 or higher per ANSI A326.3 standards), utilizing small-format slip-resistant mosaic tiling that increases traction under wet conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Mike Hernandez for a Free Safety Consultation
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
              Sun Lakes Landmarks & Local Safety Remodeling Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sun Lakes is a premier active adult community featuring beautiful local landmarks like the <strong>Oakwood Country Club</strong>, <strong>Cottonwood Golf Course</strong>, <strong>Palo Verde Country Club</strong>, and pristine residential lakes. When we execute bathroom renovations in Sun Lakes, we customize the layout to match the community contexts. For properties in Oakwood or Ironwood, we deliver curbless shower conversions that feature high-end porcelain tile, custom linear drains, and handheld shower wands. For residents near Cottonwood or Palo Verde, we specialize in retrofitting older alcove tubs with low-threshold entry bases and safety fixtures.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Sun Lakes Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near the <strong>Palo Verde Country Club</strong> area involved a tub-to-shower safety conversion. We removed a high-sided fiberglass tub and built a custom zero-threshold roll-in tiled shower with solid-wood wall backing supporting heavy-duty grab bars, a built-in tiled shower seat, slip-resistant mosaic flooring, and EPA WaterSense certified fixtures.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Maricopa County Permitting & Safety Compliance:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Sun Lakes is an unincorporated community in Maricopa County, any structural, plumbing stack, or electrical sub-panel modifications require formal building permit submittals and code inspections through the <strong>Maricopa County Planning & Development Department</strong>. We manage the entire county permit process, drafting code-compliant plans, coordinating field inspections, and ensuring that your remodel meets all safety standards.
            </p>
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
