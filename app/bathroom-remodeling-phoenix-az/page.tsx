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
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {title: {
    absolute: "Phoenix Bath Remodel | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore phoenix bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "Phoenix Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore phoenix bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-phoenix-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-phoenix-az/`,
  },
};

const phoenixFaqs = [
  {
    question: "How much does a bathroom remodel cost in Phoenix, AZ?",
    answer:
      "Bathroom remodeling costs in Phoenix are highly customized, depending on the layout, materials, and complexity of the project. We provide free on-site inspections and prepare detailed, line-item written estimates before any work begins, ensuring a fixed-price guarantee. Contact us today to schedule your quote."
  },
  {
    question: "Are you licensed to work in Phoenix?",
    answer:
      "Yes. We are a fully licensed Arizona contractor operating under license Licensed Contractor - ROC #338304 and carry comprehensive insurance for all Phoenix area residential remodeling projects."
  },
  {
    question: "Do you handle the entire project from start to finish?",
    answer:
      "Absolutely. We manage everything: design, demolition, plumbing, electrical, tile work, and final fixtures. You get a single point of contact and a guaranteed timeline."
  }
];

export default function PhoenixPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Phoenix Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-phoenix-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Phoenix, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving the greater Phoenix area. Custom showers, master bath renovations, and professional bathroom makeovers."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-phoenix-az/`}
      />
      <FAQSchema faqs={phoenixFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Phoenix"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-phoenix-az/`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Phoenix’s Top Choice for Bathroom Remodeling"
          subtitle="Licensed Contractors - High-Quality Results"
          description="Transform your Phoenix home with a professionally remodeled bathroom. We bring years of expertise, transparent pricing, and superior craftsmanship to every project in the Valley of the Sun."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Phoenix", url: `${siteConfig.url}/bathroom-remodeling-phoenix-az/` },
          ]}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6">Expert Bathroom Renovations in Phoenix</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As one of the largest cities in the country, Phoenix homes range from historic bungalows to 
              modern desert estates. Our team has experience working with all types of Phoenix architecture, 
              ensuring your new bathroom complements your home's style while providing modern functionality.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in <strong>bathroom remodeling in Phoenix, AZ</strong>, focusing on durable materials 
              and expert installation that stands up to the desert climate. We serve neighborhoods across 
              Phoenix, including <strong>Arcadia, Biltmore, Ahwatukee, and Desert Ridge</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Phoenix Community Landmarks & Local Bathroom Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Phoenix is a vast and dynamic metropolis distinguished by iconic desert landmarks like <strong>Camelback Mountain</strong>, the <strong>Desert Botanical Garden</strong>, and the historical hiking trails of <strong>Papago Park</strong>. When we execute bathroom upgrades across Phoenix, we adapt our designs to the local neighborhood contexts. For properties in the high-end <strong>Biltmore</strong> area or family estates near <strong>Desert Ridge</strong>, we deliver pristine custom craftsmanship.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Phoenix Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near the <strong>Arcadia</strong> neighborhood involved a full guest bathroom space-optimization. We replaced a cramped tub enclosure with an open curbless shower featuring non-porous large-format porcelain slabs, a modern wall-mounted floating vanity with soft-close drawers, and energy-efficient LED backlit vanity mirrors.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Phoenix Permitting & Building Safety Guidelines:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              If your Phoenix bathroom renovation involves plumbing relocations, partition wall demo, or electrical circuit modifications, we coordinate the complete permitting process with the <strong>City of Phoenix Planning & Development Department</strong> (located at 200 W Washington St). We manage all planning, blueprint submissions, and municipal building inspections directly for code-compliant security.
            </p>
          </div>
        </section>

        <AreaBenefits 
          benefits={[
            "Full Master Bathroom Gut & Remodel",
            "Professional Walk-in Shower Systems",
            "Expert Tile & Stone Installation",
            "Licensed Plumbing & Electrical",
            "Fixed-Price Written Quotes",
            "2-Year Workmanship Warranty"
          ]} 
          cityName="Phoenix" 
        />
        
        <ServiceFAQ faqs={phoenixFaqs} />
        <Testimonials />
        <ContactSection />
        
        <ServiceCTA
          title="Ready for a Better Bathroom in Phoenix?"
          description="Contact us today for a free phone consultation and schedule your on-site estimate."
        />
      </main>
      <Footer />
    </>
  );
}
