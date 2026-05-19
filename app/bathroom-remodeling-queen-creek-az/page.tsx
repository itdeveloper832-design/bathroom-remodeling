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

export const metadata: Metadata = {
  title: "Professional Bathroom Remodeling Queen Creek AZ | Free Estimates",
  description:
    "Hire Queen Creek's top-rated bathroom remodeling company. We specialize in family-friendly renovations, walk-in showers, and master bath updates. Licensed company, free quotes: call (229) 306-5591 today!",
  openGraph: {
    title: "Bathroom Remodeling Queen Creek AZ | ARZ Home Remodeling",
    description:
      "Licensed Queen Creek bathroom contractors. Walk-in showers, tub-to-shower conversions, and complete bathroom renovations. Free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/`,
  },
};

const queenCreekFaqs = [
  {
    question: "How long does a bathroom remodel take in Queen Creek, AZ?",
    answer:
      "Most Queen Creek projects are completed in two to four weeks. Guest bathroom updates often take just ten to fourteen days, while full master suite transformations typically run three to five weeks."
  },
  {
    question: "Do you serve San Tan Valley as well?",
    answer:
      "Yes. We provide full bathroom remodeling services throughout Queen Creek and San Tan Valley, including neighborhoods like Encanterra, Johnson Ranch, and Queen Creek Station."
  },
  {
    question: "What is the most popular bathroom upgrade in Queen Creek?",
    answer:
      "Tub to shower conversions are highly popular in Queen Creek. Homeowners are opting for spacious walk-in showers with modern tile and frameless glass for better functionality and style."
  }
];

export default function QueenCreekPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Queen Creek Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-queen-creek-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Queen Creek, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Queen Creek, AZ. Custom showers, master bath renovations, and tub-to-shower conversions for local families."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-queen-creek-az/`}
      />
      <FAQSchema faqs={queenCreekFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Queen Creek"
        priceRange="$8,000 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-queen-creek-az/`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Queen Creek’s Trusted Bathroom Remodeling Experts"
          subtitle="Quality Craftsmanship for Queen Creek Families"
          description="Looking to upgrade your space? We provide professional bathroom remodeling services tailored to Queen Creek homeowners. From modern guest baths to luxury master retreats, we deliver beautiful results on time and on budget."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Queen Creek", url: `${siteConfig.url}/bathroom-remodeling-queen-creek-az/` },
          ]}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6">Local Bathroom Renovations in Queen Creek</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Queen Creek is one of Arizona's fastest growing communities, and we're proud to help local families 
              enhance their homes with professional bathroom updates. Whether you are in a newer build in San Tan Valley 
              or a custom home in the heart of Queen Creek, our team has the local expertise you need.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in <strong>bathroom remodeling in Queen Creek, AZ</strong>, offering everything from 
              waterproof walk-in shower systems to complete master suite reconfigurations. We serve all local 
              zip codes including <strong>85142 and 85140</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Get Your Free Queen Creek Quote</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="tel:2293065591">Call {siteConfig.phone}</Link>
              </Button>
            </div>
          </div>
        </section>

        <AreaBenefits 
          benefits={[
            "Custom Walk-in Shower Installs",
            "Modern Tub-to-Shower Conversions",
            "Family-Friendly Bathroom Design",
            "Durable Tile & Grout Systems",
            "Licensed AZ Contractor Support",
            "Fixed Pricing: No Hidden Fees"
          ]} 
          cityName="Queen Creek" 
        />
        
        <ServiceFAQ faqs={queenCreekFaqs} />
        <Testimonials />
        <ContactSection />
        
        <ServiceCTA
          title="Ready for a New Bathroom in Queen Creek?"
          description="Contact us today to schedule your free in-home evaluation and see why your neighbors trust us for their renovations."
        />
      </main>
      <Footer />
    </>
  );
}
