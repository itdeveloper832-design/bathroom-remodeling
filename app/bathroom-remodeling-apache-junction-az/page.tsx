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
  title: "Bathroom Remodeling Apache Junction AZ - Free Estimates",
  description:
    "Hire Apache Junction's top-rated bathroom remodeling contractor. Specializing in walk-in showers, tub-to-shower conversions, and premium desert-safe tiling. Licensed company, free quotes: call (480) 306-5591 today!",
  openGraph: {
    title: "Bathroom Remodeling Apache Junction AZ - ARZ Home Remodeling",
    description:
      "Licensed Apache Junction bathroom contractors. Custom walk-in showers, tub conversions, and complete bathroom renovations. Free estimates.",
    url: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/`,
  },
};

const apacheJunctionFaqs = [
  {
    question: "How much does a bathroom remodel cost in Apache Junction?",
    answer:
      "A professional bathroom remodel in Apache Junction, Arizona typically averages between nine thousand five hundred and thirty four thousand dollars. Small guest bathroom updates or tub swaps range from seven thousand five hundred to sixteen thousand dollars, while custom master bathroom overhauls with high performance tile and frameless glass can go from twenty thousand to over forty five thousand dollars. We provide transparent, itemized quotes."
  },
  {
    question: "Do you need a permit for bathroom remodeling in Apache Junction?",
    answer:
      "Yes, major structural, electrical, or plumbing alterations require building permits from the City of Apache Junction Building Division. Permits ensure all safety codes are met, especially in older East Valley homes. Simple cosmetic swaps like replacing vanity cabinets or standard floor tile updates do not require permits. We manage the entire permitting process for you."
  },
  {
    question: "What materials work best in Apache Junction's hard water?",
    answer:
      "Apache Junction's municipal water has exceptionally high mineral counts, averaging over three hundred milligrams per liter of dissolved solids. We recommend porcelain tile because it is non porous and resists white scale stains far better than natural stone. We also exclusively use epoxy grout, which resists mineral penetration and discoloration, and premium plywood vanities that stand up to summer humidity."
  }
];

export default function ApacheJunctionPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Apache Junction Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-apache-junction-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Apache Junction, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Apache Junction, AZ. Custom walk-in showers, master bath upgrades, and tub-to-shower conversions for local families."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-apache-junction-az/`}
      />
      <FAQSchema faqs={apacheJunctionFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling Apache Junction"
        priceRange="$7,500 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-apache-junction-az/`}
      />
      <Header />
      <main>
        <ServiceHero
          title="Apache Junction’s Trusted Bathroom Remodeling Experts"
          subtitle="Quality Craftsmanship Near the Superstition Mountains"
          description="Ready to upgrade your space? We provide professional bathroom remodeling services tailored to Apache Junction homeowners. From curbless walk-in showers to custom vanity installations, we deliver beautiful, desert-ready results on time and on budget."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Apache Junction", url: `${siteConfig.url}/bathroom-remodeling-apache-junction-az/` },
          ]}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6">Local Bathroom Renovations in Apache Junction</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled near the beautiful Superstition Mountains, Apache Junction is home to unique properties, 
              from classic desert ranches to modern family builds. We help local residents enhance their comfort, 
              safety, and home equity with professional bathroom transformations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in <strong>bathroom remodeling in Apache Junction, AZ</strong>, offering modern curbless 
              showers, tub-to-shower conversions, and premium tile services that withstand the harsh desert climate and 
              highly mineralized municipal water. We serve all local zip codes including <strong>85119 and 85120</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Get Your Free Apache Junction Quote</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="tel:4803065591">Call {siteConfig.phone}</Link>
              </Button>
            </div>
          </div>
        </section>

        <AreaBenefits 
          benefits={[
            "Custom Walk-in Shower Installs",
            "Modern Tub-to-Shower Conversions",
            "Hard Water Defense Grout Systems",
            "Slip-Resistant Flooring (DCOF >= 0.42)",
            "Licensed AZ Contractor Support",
            "Fixed Pricing: No Hidden Fees"
          ]} 
          cityName="Apache Junction" 
        />
        
        <ServiceFAQ faqs={apacheJunctionFaqs} />
        <Testimonials />
        <ContactSection />
        
        <ServiceCTA
          title="Ready for a New Bathroom in Apache Junction?"
          description="Contact us today to schedule your free in-home evaluation and see why your neighbors trust us for their renovations."
        />
      </main>
      <Footer />
    </>
  );
}
