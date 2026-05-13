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
  title: "Home Remodeling Tempe AZ | Kitchen & Bath Renovations",
  description: "Expert home remodeling services in Tempe, AZ. Specializing in kitchen renovations, bathroom remodels, and whole-house transformations. Licensed & Insured. Free quotes!",
  openGraph: {
    title: "Home Remodeling Tempe AZ | Kitchen & Bath Renovations",
    description: "Transform your Tempe home with the East Valley's trusted remodeling team. Quality kitchen, bath, and home renovations. Free estimates!",
    url: `${siteConfig.url}/remodeling-tempe-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/remodeling-tempe-az/`,
  },
};

const tempeFaqs = [
  {
    question: "Do you offer full home remodeling in Tempe, AZ?",
    answer:
      "Yes! We are licensed general contractors providing complete home renovations, including kitchen and bathroom remodeling, flooring, painting, and structural changes across Tempe and the East Valley.",
  },
  {
    question: "How much does it cost to remodel a kitchen or bath in Tempe?",
    answer:
      "Kitchen remodels in Tempe typically range from $15,000 to $50,000+, while bathrooms range from $8,000 to $35,000+. We provide free, itemized estimates tailored to your specific project needs.",
  },
  {
    question: "How long do most remodeling projects take?",
    answer:
      "Bathroom remodels usually take 2-4 weeks, kitchens 4-8 weeks, and full home renovations 3-6 months. We provide a firm schedule before any construction begins.",
  },
  {
    question: "Are you licensed and insured in Tempe?",
    answer:
      "Yes. We are a licensed Arizona contractor serving Tempe homeowners with full insurance coverage and a 2-year workmanship warranty on all projects.",
  },
];

const services = [
  {
    title: "Kitchen Remodeling",
    href: "/kitchen-remodeling-chandler-az/",
    icon: ChefHat,
    description: "Custom cabinetry, quartz countertops, and open-concept designs tailored for your Tempe home.",
  },
  {
    title: "Bathroom Remodeling",
    href: "/bathroom-remodeling-chandler-az/",
    icon: Bath,
    description: "Luxury master bath renovations, walk-in showers, and tub-to-shower conversions with premium tile.",
  },
  {
    title: "Whole-Home Renovation",
    href: "/home-renovation-chandler-az/",
    icon: Home,
    description: "Complete interior transformations, structural wall removal, and modern open floor plans.",
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
    body: "Serving Tempe neighborhoods from Warner Estates to Tally Ho Farms.",
  },
  {
    icon: Clock,
    title: "Firm Schedules",
    body: "We respect your time and stick to our project timelines.",
  },
];

const neighborhoods = [
  "South Tempe", "Warner Estates", "Tally Ho Farms", "Sandahl",
  "Kyrene", "Alta Mira", "Optimist Park", "Superstition Estates",
  "85281", "85282", "85283", "85284",
];

export default function TempeRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Home Remodeling in Tempe, Arizona"
        serviceDescription="Professional home, kitchen, and bathroom remodeling services in Tempe, AZ. Licensed general contractors specializing in luxury renovations."
        serviceUrl={`${siteConfig.url}/remodeling-tempe-az/`}
      />
      <FAQSchema faqs={tempeFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Expert Home Remodeling in Tempe, AZ"
          subtitle="Kitchen, Bath & Whole-House Renovations"
          description="Transform your living space with Tempe's trusted remodeling experts. From modern kitchen redesigns to luxury bathroom suites and complete home renovations, we deliver quality craftsmanship and a stress-free experience."
          image="/images/optimized/photo-1600585154340-be6161a56a0c.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Remodeling Tempe AZ", url: `${siteConfig.url}/remodeling-tempe-az/` },
          ]}
        />

        {/* Intro */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              Premier Remodeling Contractors Serving Tempe
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At ARZ Home Remodeling, we understand that your home is your most significant investment. 
              Our team of licensed professionals is dedicated to providing high-quality 
              <strong className="text-foreground"> home remodeling in Tempe, AZ</strong>. 
              Whether you're looking to open up your kitchen layout or transform an outdated bathroom 
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
                Renovation Solutions for Tempe Homeowners
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
              Local Tempe Service Areas
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

        <ServiceFAQ faqs={tempeFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Start Your Tempe Remodel?"
          description="Contact us today for a free, no-obligation consultation and estimate."
        />
      </main>
      <Footer />
    </>
  );
}
