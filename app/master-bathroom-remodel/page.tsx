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
import SubServices from "@/components/sub-services";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, ArrowRight } from "lucide-react";

export const metadata: Metadata = {title: {
    absolute: "Master Bath Remodel | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore master bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "Master Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore master bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/master-bathroom-remodel/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-master-suite.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Luxury Master Bathroom Remodel in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Master Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore master bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-master-suite.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/master-bathroom-remodel/`,
  },
};

const faqs = [
  {
    question: "What is included in a master bathroom remodel?",
    answer:
      "Our master bath remodels typically include converting old bathtubs into walk in tile showers with frameless glass enclosures, replacing low double vanities with premium quartz countertops, laying non slip porcelain flooring, updating LED lighting systems, and coordinating all Chandler city plumbing permits."
  },
  {
    question: "How long does a master bathroom remodel take in Chandler?",
    answer:
      "A comprehensive master bathroom remodel typically takes three to five weeks depending on scope. Custom cabinetry, detailed tile work, and layout changes can extend the timeline. We provide a firm schedule in your written proposal."
  },
  {
    question: "How much does a master bathroom remodel cost in Chandler, AZ?",
    answer:
      "Master bathroom remodels in Chandler range from eighteen thousand to forty five thousand dollars depending on the size, material selections, and whether plumbing is being relocated. We provide free, itemized written estimates before any work starts."
  },
  {
    question: "Do you handle permits for master bathroom remodels in Chandler?",
    answer:
      "Yes. Anytime structural changes, plumbing relocation, or electrical upgrades are involved, we pull all required Chandler city permits and manage the inspection process."
  },
  {
    question: "What features are popular in master bathrooms in Chandler?",
    answer:
      "Chandler homeowners most often request curbless walk-in showers with frameless glass, double vanities with quartz countertops, heated tile floors, rainfall showerheads, and custom tile work. We also recommend epoxy grout to combat Chandler's hard water mineral staining."
  }
];

const included = [
  "Walk-in shower enclosure with frameless glass",
  "Custom tile work including shower walls, floors, and niches",
  "Vanity and countertop replacement",
  "Double sink plumbing upgrade",
  "Tile or luxury vinyl plank flooring",
  "Updated lighting and mirrors",
  "Plumbing and electrical coordination",
  "Final inspection and walkthrough"
];

const otherServices = getRelatedServices("/master-bathroom-remodel/");

export default function MasterBathPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Master Bathroom Remodel", url: "https://arzhomeremodeling.com/master-bathroom-remodel/" } ]} />
<ServiceSchema
        serviceName="Master Bathroom Remodel in Chandler, Arizona"
        serviceDescription="Full-scope master bathroom renovations in Chandler, AZ. Shower enclosures, vanity replacement, tile flooring, plumbing and lighting upgrades managed by one licensed Arizona contractor."
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
          title="Licensed Master Bathroom Remodeling in Chandler, AZ"
          subtitle="Luxury Transformations Managed by One Local Team"
          description="Elevate your master suite with a luxury renovation tailored to your style. We handle everything: from custom walk-in showers and double vanities to premium tile and lighting. Enjoy a stress-free transformation with a fixed-price guarantee."
          image="/images/projects/modern-double-vanity-chandler.webp"
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
                  contact, one fixed price, and one team handling demolition through final walkthrough. To see what options fit your budget, review our detailed [master bathroom remodel cost Chandler](/blog/master-bathroom-remodel-cost-chandler/) guide. We manage all trade specialists including plumbing and electrical coordination.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Timeline: <strong className="text-foreground">three to five weeks</strong> depending on scope. We specify{" "}
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
                <p className="text-2xl font-bold text-primary">$18K to $45K+</p>
                <p className="text-muted-foreground text-sm">Based on scope and selections</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground">Project Timeline</p>
                <p className="text-2xl font-bold text-primary">3 to 5 Weeks</p>
                <p className="text-muted-foreground text-sm">Written schedule provided upfront</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground">Warranty</p>
                <p className="text-2xl font-bold text-primary">2 Years</p>
                <p className="text-muted-foreground text-sm">Workmanship guaranteed</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-foreground font-medium">
                Flexible payment plans available. 
                <Link href="/financing/" className="text-primary hover:underline ml-1">
                  View our zero percent APR financing for master bath projects
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* DOUBLE VANITIES & DUAL SHOWER PLUMBING DESIGN */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Double Vanity Reconfigurations & Dual Shower Plumbing Design
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">
              Our <strong>master bathroom remodeling in Chandler AZ</strong> delivers high end transformations near Fulton Ranch. 
              We utilize advanced waterproofing and professional mechanical design to engineer high performance personal suites.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Double Vanity Drain Splits</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Many older master bathrooms only have a single sink vanity. We open the drywall to split the single drain line into two dedicated 
                  plumbing drains, venting them properly to code so you can enjoy separate private sink stations.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Dual Shower Head Mechanical Loops</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  True master showers utilize multiple fixtures including a ceiling mount rainfall shower head and a wall mount slide bar wand. 
                  We run dedicated supply loops with solid brass pressure balance cartridges to ensure stable water pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-secondary/50 border-t border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
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
                href="/bathroom-remodel-cost-chandler"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between"
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
          description="Schedule a free in-home consultation. We will measure, assess your plumbing, and give you a fixed written estimate: no pressure."
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
