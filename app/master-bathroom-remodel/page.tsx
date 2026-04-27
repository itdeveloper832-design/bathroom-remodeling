import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Master Bathroom Remodel Chandler AZ | Full-Scope Renovations",
  description:
    "Complete master bathroom remodel in Chandler AZ. Shower enclosures, vanity replacement, tile flooring, updated lighting — all managed by one licensed AZ contractor. Free estimates.",
  keywords: [
    "master bathroom remodel Chandler AZ",
    "master bath renovation Chandler",
    "luxury master bathroom Chandler AZ",
    "master suite remodel Chandler",
    "complete master bathroom renovation AZ",
    "master bathroom contractor Chandler",
  ],
  openGraph: {
    title: "Master Bathroom Remodel Chandler AZ | ARZ Home Remodeling",
    description:
      "Full-scope master bathroom renovations in Chandler, AZ. One licensed contractor for plumbing, tile, vanity, lighting, and fixtures.",
    url: `${siteConfig.url}/master-bathroom-remodel`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: "Master Bathroom Remodel Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Bathroom Remodel Chandler AZ",
    description: "Full-scope master bath renovations in Chandler. One contractor, fixed pricing, free estimates.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/master-bathroom-remodel`,
  },
};

const faqs = [
  {
    question: "What is included in a master bathroom remodel?",
    answer:
      "Our master bath remodels typically include: new shower enclosure or walk-in shower, vanity and countertop replacement, tile flooring, updated lighting, plumbing fixture upgrades, and mirror or medicine cabinet installation. We manage plumbing and electrical coordination so you never need multiple contractors.",
  },
  {
    question: "How long does a master bathroom remodel take in Chandler?",
    answer:
      "A comprehensive master bathroom remodel typically takes 3–5 weeks depending on scope. Custom cabinetry, detailed tile work, and layout changes can extend the timeline. We provide a firm schedule in your written proposal.",
  },
  {
    question: "How much does a master bathroom remodel cost in Chandler, AZ?",
    answer:
      "Master bathroom remodels in Chandler range from $18,000 to $45,000+ depending on the size, material selections, and whether plumbing is being relocated. We provide free, itemized written estimates before any work starts.",
  },
  {
    question: "Do you handle permits for master bathroom remodels in Chandler?",
    answer:
      "Yes. Anytime structural changes, plumbing relocation, or electrical upgrades are involved, we pull all required Chandler city permits and manage the inspection process.",
  },
  {
    question: "What features are popular in master bathrooms in Chandler?",
    answer:
      "Chandler homeowners most often request: curbless walk-in showers with frameless glass, double vanities with quartz countertops, heated tile floors, rainfall showerheads, and custom tile work. We also recommend epoxy grout to combat Chandler's hard water mineral staining.",
  },
];

const included = [
  "Walk-in shower enclosure with frameless glass",
  "Custom tile work — shower walls, floors, niches",
  "Vanity & countertop replacement",
  "Double sink plumbing upgrade",
  "Tile or LVP flooring",
  "Updated lighting & mirrors",
  "Plumbing & electrical coordination",
  "Final inspection & walkthrough",
];

const otherServices = bathroomServices
  .filter((s) => s.href !== "/master-bathroom-remodel")
  .slice(0, 3);

export default function MasterBathPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Master Bathroom Remodel in Chandler, Arizona"
        serviceDescription="Full-scope master bathroom renovations in Chandler, AZ. Shower enclosures, vanity replacement, tile flooring, plumbing and lighting upgrades — all managed by one licensed Arizona contractor."
        serviceUrl={`${siteConfig.url}/master-bathroom-remodel`}
      />
      <FAQSchema faqs={faqs} />
      <PriceSchema
        serviceName="Master Bathroom Remodel Chandler AZ"
        priceRange="$18,000 - $45,000+"
        url={`${siteConfig.url}/master-bathroom-remodel`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Master Bathroom Remodel Chandler AZ"
          subtitle="Full-Scope Renovations — One Licensed Contractor"
          description="From walk-in showers and custom tile to vanity replacement and lighting — we handle every trade so you don't have to. Fixed pricing, firm timelines, 2-year warranty."
          image="/images/optimized/photo-1600607687939-ce8a6c25118c.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Master Bathroom Remodel", url: `${siteConfig.url}/master-bathroom-remodel` },
          ]}
        />

        {/* OVERVIEW */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-medium tracking-wider uppercase">What's Included</span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 text-foreground">
                  Complete Master Bathroom Remodel
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our master bath remodels in Chandler are designed to be true single-contractor experiences. You get one point of
                  contact, one fixed price, and one team handling demolition through final walkthrough — including plumbing and
                  electrical coordination.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Timeline: <strong className="text-foreground">3–5 weeks</strong> depending on scope. We specify{" "}
                  <strong className="text-foreground">epoxy grout and nano-coated glass</strong> to combat Chandler's hard water
                  mineral buildup.
                </p>
              </div>
              <div>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COST CALLOUT */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <DollarSign className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground">Investment Range</p>
                <p className="text-2xl font-bold text-primary">$18K – $45K+</p>
                <p className="text-muted-foreground text-sm">Based on scope and selections</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground">Project Timeline</p>
                <p className="text-2xl font-bold text-primary">3–5 Weeks</p>
                <p className="text-muted-foreground text-sm">Written schedule provided upfront</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground">Warranty</p>
                <p className="text-2xl font-bold text-primary">2 Years</p>
                <p className="text-muted-foreground text-sm">Workmanship guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/bathroom-remodeling-chandler-az"
                className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Bathroom Remodeling Chandler AZ
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Our full Chandler services overview</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/bathroom-remodeling-cost-chandler-az"
                className="bg-secondary border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Chandler Bathroom Remodel Cost Guide
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">Detailed pricing for every project type</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <SubServices
          title="Complementary Services"
          subtitle="Complete Transformations"
          description="We handle every aspect of your master bath project, from tile to custom vanities."
          services={otherServices.map((s) => s.name)}
        />

        <ServiceCTA
          title="Ready to design your dream master bath in Chandler?"
          description="Schedule a free in-home consultation. We'll measure, assess your plumbing, and give you a fixed written estimate — no pressure."
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
