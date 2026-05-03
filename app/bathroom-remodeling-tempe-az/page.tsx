import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema } from "@/components/seo/json-ld";
import { GoogleMap } from "@/components/services/google-map";

export const metadata: Metadata = {
  title: "Professional Bathroom Remodeling in Tempe AZ | Hire Top Contractors",
  description: "Hire the best bathroom remodeling company in Tempe, AZ. Expert shower replacement, tub-to-shower conversions, and master bath renovations. Licensed & insured specialists.",
  keywords: ["bathroom remodeling Tempe AZ", "professional shower replacement Tempe", "shower conversion experts Tempe AZ", "bathroom shower installers Tempe AZ", "bathroom tile contractors Tempe"],
  openGraph: {
    title: "Professional Bathroom Remodeling in Tempe AZ | ARZ Home Remodeling",
    description: "Top-rated bathroom remodeling services in Tempe, AZ. Free estimates and expert installation.",
    url: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-tempe-az/`,
  },
};

export default function TempePage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Bathroom Remodeling in Tempe, AZ" 
        serviceDescription="Expert bathroom remodeling services for Tempe, AZ homeowners. Specializing in high-intent lead generation for bathroom and shower renovations." 
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-tempe-az/`} 
      />
      <Header />
      <main>
        <ServiceHero
          title="Tempe’s Top-Rated Bathroom Remodeling Contractor"
          subtitle="Hire the Best Local Remodelers in Tempe — Free Estimates"
          description="Bringing our 5-star bathroom remodeling services to homeowners in Tempe, AZ. We specialize in high-quality renovations, custom shower installs, and full bathroom transformations."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url }, 
            { name: "Tempe", url: `${siteConfig.url}/bathroom-remodeling-tempe-az/` }
          ]}
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6">Serving Homeowners in Tempe, AZ</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are proud to extend our professional bathroom remodeling services to the Tempe community. 
              Whether you need a quick shower update or a full master bath transformation, our team of licensed contractors is ready to help.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tempe homeowners trust us for our high-quality craftsmanship and transparent pricing. From the first consultation to the final walkthrough, we ensure your bathroom remodel is a stress-free experience.
            </p>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for a Free No-Obligation Bathroom Quote in Tempe?" 
          description="Call us or fill out the form today. Our licensed Tempe contractors are standing by to help you transform your home with a beautiful new bathroom." 
        />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Tempe, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Tempe Bathroom Remodeling Service Area</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Expert bathroom remodeling services throughout Tempe, Arizona and surrounding university-area communities.</p>
            </div>
            <div>
              <GoogleMap 
                lat={33.4255} 
                lng={-111.9400} 
                zoom={12} 
                title="Bathroom Remodeling Tempe" 
                address="Tempe, AZ" 
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
