import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/google-map";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";

export const metadata: Metadata = {
  title: "Bathroom Flooring Installation Chandler AZ | Professional Services",
  description: "Professional bathroom flooring installation in Chandler, AZ. Waterproof tile, luxury vinyl, and stone flooring with expert installation.",
  keywords: ["bathroom flooring chandler", "waterproof flooring installation", "bathroom tile flooring"],
  openGraph: {
    title: "Bathroom Flooring Installation Chandler AZ",
    description: "Professional bathroom flooring installation in Chandler with waterproof materials.",
    url: `${siteConfig.url}/bathroom-flooring-installation`,
    type: "website",
  },
};

const faqs = serviceContent["bathroom-flooring-installation"].faqs;

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomFlooringInstallationPage() {
  return (
    <>
      <ServiceSchema serviceName="Bathroom Flooring Installation" serviceDescription="Professional bathroom flooring installation in Chandler, Arizona." serviceUrl={`${siteConfig.url}/bathroom-flooring-installation`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Flooring Installation in Chandler, Arizona"
          description="Professional bathroom flooring installation with waterproof materials, expert craftsmanship, and durable finishes for your Chandler home."
          backgroundImage="/images/optimized/photo-1507089947368-19c1da9775ae.webp"
        />
        
        <ServiceFAQ />
        
        <Testimonials />
        
        <ContactSection />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">Bathroom Flooring Installation in Chandler</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional bathroom flooring installation services throughout Chandler, Arizona.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Waterproof installation specialists</li>
                <li>• Licensed and insured contractors</li>
                <li>• Premium materials and craftsmanship</li>
              </ul>
            </div>
            <div>
              <GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Flooring Installation in Chandler, AZ" address="Chandler, Arizona" />
            </div>
          </div>
        </section>
        
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
