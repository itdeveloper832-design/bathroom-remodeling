import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema } from "@/components/seo/json-ld";
import { GoogleMap } from "@/components/google-map";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Mesa AZ | Expert Contractors",
  description: "Professional bathroom remodeling Mesa AZ. Licensed experts delivering custom showers, tubs & full renovations. Get a free estimate today!",
  keywords: ["bathroom remodeling Mesa AZ", "Mesa bathroom remodelers", "bathroom renovation Mesa"],
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
          title="Bathroom Remodeling Mesa AZ"
          subtitle="Top-Rated Mesa Bathroom Remodelers"
          description="Bringing our award-winning bathroom remodeling services to homeowners in Mesa, AZ. We deliver high-quality renovations with a focus on craftsmanship."
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

        <ServiceCTA title="Live in Mesa and need a bathroom remodel?" description="Get a free estimate today and experience the ARZ Home Remodeling difference." />
        
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
