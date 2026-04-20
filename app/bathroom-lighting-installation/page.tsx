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

export const metadata: Metadata = {
  title: "Bathroom Lighting Installation Chandler AZ | LED Fixtures",
  description: "Professional bathroom lighting installation in Chandler, AZ. Vanity lights, recessed LED lighting, and modern fixtures. Free estimates!",
  keywords: ["bathroom lighting chandler", "vanity light installation", "bathroom LED lights"],
  openGraph: {
    title: "Bathroom Lighting Installation Chandler AZ",
    description: "Professional bathroom lighting installation in Chandler with vanity and recessed LED fixtures.",
    url: `${siteConfig.url}/bathroom-lighting-installation`,
    type: "website",
  },
};

const faqs = [
  { question: "What type of lighting is best for bathrooms?", answer: "LED vanity lights and recessed ceiling lights work best. We recommend layered lighting with task lighting for grooming and ambient lighting for overall illumination." },
  { question: "How much does bathroom lighting installation cost?", answer: "Bathroom lighting installation costs $200-$800 per fixture depending on complexity. Complete upgrades typically range from $800-$2,500 including materials and labor." },
  { question: "Do you install dimmer switches?", answer: "Yes! We install dimmer switches compatible with LED lights for adjustable ambiance and energy savings." },
  { question: "Can you install lighting in shower areas?", answer: "Absolutely! We install moisture-rated recessed lights specifically designed for wet bathroom locations." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomLightingInstallationPage() {
  return (
    <>
      <ServiceSchema serviceName="Bathroom Lighting Installation" serviceDescription="Professional bathroom lighting installation in Chandler, Arizona." serviceUrl={`${siteConfig.url}/bathroom-lighting-installation`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Lighting Installation in Chandler, Arizona"
          description="Professional lighting installation with modern LED fixtures, vanity lights, and expert electrical work for beautiful, functional bathrooms."
          backgroundImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
        />
        
        <ServiceFAQ />
        
        <Testimonials />
        
        <ContactSection />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground">Bathroom Lighting Installation in Chandler</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional bathroom lighting services throughout Chandler, Arizona.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Modern LED fixtures and vanity lights</li>
                <li>• Licensed electrical contractors</li>
                <li>• Energy-efficient solutions</li>
              </ul>
            </div>
            <div>
              <GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Lighting Installation in Chandler, AZ" address="Chandler, Arizona" />
            </div>
          </div>
        </section>
        
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
