import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema } from "@/components/seo/json-ld";
import { GoogleMap } from "@/components/services/google-map";

export const metadata: Metadata = {
  title: "Professional Bathroom Remodeling in Mesa AZ | Licensed & Insured",
  description: "Hire the best bathroom remodeling company in Mesa, AZ. We specialize in custom showers, tub-to-shower conversions, and full master bath renovations. Licensed 5-star contractors.",
  keywords: ["bathroom remodeling Mesa AZ", "hire shower remodeling company Mesa AZ", "local bathroom remodeling company Mesa", "full bathroom remodel contractors Mesa"],
  openGraph: {
    title: "Bathroom Remodeling Mesa AZ | Expert Contractors",
    description: "Top-rated bathroom remodeling services in Mesa, AZ.",
    url: `${siteConfig.url}/bathroom-remodeling-mesa-az`,
    type: "website",
  },
};

export default function MesaPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Bathroom Remodeling in Mesa, AZ" 
        serviceDescription="Expert bathroom remodeling services for Mesa, AZ homeowners." 
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-mesa-az`} 
      />
      <Header />
      <main>
        <ServiceHero
          title="Mesa’s Top-Rated Bathroom Remodeling Contractor"
          subtitle="Hire the Best Local Remodelers in Mesa — Free Estimates"
          description="Bringing our 5-star bathroom remodeling services to homeowners in Mesa, AZ. We specialize in high-quality renovations, custom shower installs, and full bathroom transformations."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Mesa", url: `${siteConfig.url}/bathroom-remodeling-mesa-az` }]}
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6">Serving Homeowners in Mesa, AZ</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are proud to extend our professional bathroom remodeling services to the Mesa community. 
              Whether you need a quick shower update or a full master bath transformation, our team is ready to help.
            </p>
          </div>
        </section>

        <ServiceCTA title="Ready for a Free No-Obligation Bathroom Quote in Mesa?" description="Call us or fill out the form today. Our licensed Mesa contractors are standing by to help you transform your home." />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Mesa, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Mesa Bathroom Remodeling Service Area</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Expert bathroom remodeling services throughout Mesa, Arizona and surrounding communities.</p>
            </div>
            <div><GoogleMap lat={33.4151} lng={-111.8315} zoom={12} title="Bathroom Remodeling Mesa" address="Mesa, AZ" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
