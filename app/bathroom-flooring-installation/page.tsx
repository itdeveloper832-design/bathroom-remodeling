import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import ServiceProcess from "@/components/service-process";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/services/google-map";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";

export const metadata: Metadata = {
  title: "Bathroom Flooring Installation Chandler AZ - Professional Services",
  description: "Professional bathroom flooring installation in Chandler, AZ. Waterproof tile, luxury vinyl, and stone flooring with expert installation.",
  openGraph: {
    title: "Bathroom Flooring Installation Chandler AZ",
    description: "Professional bathroom flooring installation in Chandler with waterproof materials.",
    url: `${siteConfig.url}/bathroom-flooring-installation`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-flooring-installation`,
  },
};

const faqs = serviceContent["bathroom-flooring-installation"].faqs;

const chandlerLocation = { lat: 33.3009334, lng: -111.9605964 };

export default function BathroomFlooringInstallationPage() {
  const serviceData = serviceContent["bathroom-flooring-installation"];

  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Flooring Installation", url: "https://arzhomeremodeling.com/bathroom-flooring-installation/" } ]} />
<ServiceSchema 
        serviceName="Bathroom Flooring Installation in Chandler, Arizona" 
        serviceDescription="Professional bathroom flooring installation in Chandler, Arizona. Dense porcelain tile, natural stone, and slip resistant textured floors." 
        serviceUrl={`${siteConfig.url}/bathroom-flooring-installation`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Flooring Installation in Chandler, Arizona"
          subtitle="Professional Tile & Stone Flooring in Chandler AZ"
          description="Professional bathroom flooring installation with waterproof materials, expert craftsmanship, and durable finishes for your Chandler home."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Flooring", url: `${siteConfig.url}/bathroom-flooring-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Flooring Installation Process"
          subtitle="Our Process"
          description="A meticulous flooring installation process that guarantees flat, durable, and waterproof results."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Demolition & Prep",
              description: "We carefully remove old flooring and level the concrete slab to create a flat subfloor.",
            },
            {
              number: "02",
              icon: "Shield",
              title: "Crack Isolation",
              description: "We install anti fracture membranes to isolate tiles from future concrete settling cracks.",
            },
            {
              number: "03",
              icon: "Layout",
              title: "Precision Layout",
              description: "We dry lay and align all tiles to ensure balanced, aesthetically pleasing borders.",
            },
            {
              number: "04",
              icon: "Hammer",
              title: "Tile Setting",
              description: "We lay tiles with polymer modified mortar to ensure permanent, flexible bonding.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Epoxy Grouting",
              description: "We apply non porous, mold resistant epoxy grout and clean the tile surface fully.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Professional Flooring"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom tile challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Flooring Installation"
          subtitle="Why Choose Us"
          benefits={serviceData.benefits}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Professional Bathroom Flooring Installation & Foundation Prep
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you have been looking for the most reliable <strong>bathroom floor installation near me</strong>, our crew provides flawless tile and stone work. Our <strong>bathroom flooring installation in Chandler AZ</strong> protects your tile from structural cracking. Clay soil in the East Valley expands and contracts heavily between hot summers and monsoon seasons, causing concrete slabs to shift.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Schluter Ditra Crack Isolation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If tiles are bonded straight to concrete slabs, settling slab cracks will immediately telegraph up and snap your porcelain. 
                  We install specialized uncoupling membranes to absorb slab shear stress.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Polymer-Modified Thinset Mortar</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use only high-performance modified mortar beds with elastic latex additives. This allows the tile mortar layer to 
                  flex slightly under temperature shifts rather than breaking the bond.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Expert Bathroom Flooring Tips"
          subtitle="Care & Maintenance"
          description="Smart advice to maintain the beauty and durability of your newly tiled bathroom floors."
          tips={serviceData.tips}
        />
        
        <ServiceCTA 
          title="Ready for professional bathroom flooring in Chandler?" 
          description="Get a free consultation with premium material samples and upfront estimates." 
        />

        <ServiceFAQ faqs={faqs} />
        
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
        
        <ServiceCTA 
          title="Need bathroom flooring installation in Chandler, AZ?" 
          description="Contact us today for professional installation with premium tile and expert craftsmanship." 
        />
      </main>
      <Footer />
    </>
  );
}
