import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema } from "@/components/seo/json-ld";
import { GoogleMap } from "@/components/services/google-map";

export const metadata: Metadata = {
  title: "Licensed Bathroom Contractor Gilbert AZ | Quality Craftsmanship",
  description: "Hire the top-rated bathroom remodeling company in Gilbert, AZ. Professional master bathroom renovations, shower replacements, and tub-to-shower conversions. Free estimates.",
  keywords: ["bathroom remodeling Gilbert AZ", "licensed bathroom contractor Gilbert AZ", "top-rated shower remodelers Gilbert", "master bathroom renovation Gilbert AZ"],
  openGraph: {
    title: "Bathroom Remodeling Gilbert AZ | Expert Contractors",
    description: "Top-rated bathroom remodeling services in Gilbert, AZ.",
    url: `${siteConfig.url}/bathroom-remodeling-gilbert-az`,
    type: "website",
  },
};

export default function GilbertPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Bathroom Remodeling in Gilbert, AZ" 
        serviceDescription="Expert bathroom remodeling services for Gilbert, AZ homeowners." 
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-gilbert-az`} 
      />
      <Header />
      <main>
        <ServiceHero
          title="Gilbert’s Top-Rated Bathroom Remodeling Contractor"
          subtitle="Hire the Best Local Remodelers in Gilbert — Free Estimates"
          description="Bringing our award-winning bathroom remodeling services to homeowners in Gilbert, AZ. Licensed AZ contractors specializing in high-quality renovations and custom craftsmanship."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Gilbert", url: `${siteConfig.url}/bathroom-remodeling-gilbert-az` }]}
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6">Serving Homeowners in Gilbert, AZ</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are proud to extend our professional bathroom remodeling services to the Gilbert community. 
              Whether you need a quick shower update or a full master bath transformation, our team is ready to help.
            </p>
          </div>
        </section>

        <ServiceCTA title="Ready for a Free Bathroom Remodel Estimate in Gilbert?" description="Call us or fill out the form today. Our licensed Gilbert contractors are ready to start your dream renovation." />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Gilbert, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Gilbert Bathroom Remodeling Service Area</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Expert bathroom remodeling services throughout Gilbert, Arizona and surrounding communities.</p>
            </div>
            <div><GoogleMap lat={33.3528} lng={-111.789} zoom={12} title="Bathroom Remodeling Gilbert" address="Gilbert, AZ" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
