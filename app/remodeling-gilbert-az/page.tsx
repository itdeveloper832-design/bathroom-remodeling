import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Home,
  ChefHat,
  Bath,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Gilbert AZ | Luxury Bath Renovations",
  description: "Expert bathroom remodeling services in Gilbert, AZ. Specializing in luxury master bath renovations, walk-in showers, and tub-to-shower conversions. Licensed & Insured. Free quotes!",
  openGraph: {
    title: "Bathroom Remodeling Gilbert AZ | Luxury Bath Renovations",
    description: "Transform your Gilbert home with the East Valley's trusted bathroom remodelers. Quality master bath and shower renovations. Free estimates!",
    url: `${siteConfig.url}/remodeling-gilbert-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/remodeling-gilbert-az/`,
  },
};

const gilbertFaqs = [
  {
    question: "Do you offer bathroom remodeling in Gilbert, AZ?",
    answer:
      "Yes! We are licensed contractors providing complete bathroom renovations, including master bath remodels, walk-in shower installations, and tub-to-shower conversions across Gilbert and the East Valley.",
  },
  {
    question: "How much does it cost to remodel a bathroom in Gilbert?",
    answer:
      "Bathroom remodels in Gilbert typically range from $8,000 to $35,000+. We provide free, itemized estimates tailored to your specific project needs.",
  },
  {
    question: "How long do most bathroom remodeling projects take in Gilbert?",
    answer:
      "A standard bathroom remodel usually takes 2-3 weeks, while a luxury master bathroom transformation may take 3-4 weeks. We provide a firm schedule before any construction begins.",
  },
  {
    question: "Are you licensed and insured bathroom remodelers in Gilbert?",
    answer:
      "Yes. We are a licensed Arizona contractor serving Gilbert homeowners with full insurance coverage and a 2-year workmanship warranty on all projects.",
  },
];

const services = [
  {
    title: "Master Bath Remodel",
    href: "/master-bathroom-remodel/",
    icon: Bath,
    description: "Luxury master suite transformations with freestanding tubs, dual vanities, and premium tile designs.",
  },
  {
    title: "Shower Remodeling",
    href: "/shower-remodeling/",
    icon: Bath,
    description: "Expert walk-in shower installations, frameless glass enclosures, and modern waterproof systems.",
  },
  {
    title: "Tub to Shower",
    href: "/tub-to-shower-conversion/",
    icon: Bath,
    description: "The most popular Gilbert upgrade: converting outdated garden tubs into spacious, modern walk-in showers.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "AZ Licensed & Insured",
    body: "Fully compliant with Arizona ROC standards for your peace of mind.",
  },
  {
    icon: Star,
    title: "Local Expertise",
    body: "Serving Gilbert neighborhoods from Morrison Ranch to Power Ranch.",
  },
  {
    icon: Clock,
    title: "Firm Schedules",
    body: "We respect your time and stick to our project timelines.",
  },
];

const neighborhoods = [
  "Morrison Ranch", "Power Ranch", "Val Vista Lakes", "Agritopia",
  "Seville", "Lyons Gate", "Adora Trails", "Finley Farms",
  "85233", "85234", "85295", "85296", "85297", "85298",
];

export default function GilbertRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling in Gilbert, Arizona"
        serviceDescription="Professional bathroom remodeling services in Gilbert, AZ. Licensed general contractors specializing in luxury bathroom renovations."
        serviceUrl={`${siteConfig.url}/remodeling-gilbert-az/`}
      />
      <FAQSchema faqs={gilbertFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Expert Bathroom Remodeling in Gilbert, AZ"
          subtitle="Luxury Master Baths & Shower Conversions"
          description="Transform your bathroom with Gilbert's trusted remodeling experts. From modern shower redesigns to luxury master suites, we deliver quality craftsmanship and a stress-free experience."
          image="/images/optimized/photo-1600585154340-be6161a56a0c.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Gilbert AZ", url: `${siteConfig.url}/remodeling-gilbert-az/` },
          ]}
        />

        {/* Intro */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Premier Bathroom Remodeling Contractors Serving Gilbert
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At ARZ Remodeling, we understand that your bathroom is a vital part of your home. 
              Our team of licensed professionals is dedicated to providing high-quality 
              <strong className="text-foreground"> bathroom remodeling in Gilbert, AZ</strong>. 
              Whether you're looking to upgrade a small guest bath or transform an outdated master bathroom 
              into a spa-like retreat, we bring your vision to life with precision and care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Renovation Solutions for Gilbert Homeowners
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((svc) => (
                <div key={svc.title} className="bg-background rounded-2xl p-8 border border-border flex flex-col shadow-sm hover:shadow-md transition-shadow">
                  <svc.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{svc.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {svc.description}
                  </p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-auto"
                  >
                    View Service Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {trustPoints.map((pt) => (
                <div key={pt.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <pt.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{pt.title}</h3>
                  <p className="text-muted-foreground">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-foreground">
              Local Gilbert Service Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-background border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={gilbertFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Start Your Gilbert Bathroom Remodel?"
          description="Contact us today for a free, no-obligation consultation and estimate."
        />
      </main>
      <Footer />
    </>
  );
}
