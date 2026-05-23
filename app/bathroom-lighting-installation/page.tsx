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
  title: "Bathroom Lighting Contractor Chandler AZ - Light Installation & Upgrades",
  description: "Professional bathroom lighting contractor in Chandler, AZ. Vanity lights, recessed LED fixtures, interior lighting installation and bathroom lighting upgrades. Licensed electrician. Free estimates.",
  openGraph: {
    title: "Bathroom Lighting Installation Chandler AZ",
    description: "Professional bathroom lighting installation in Chandler with vanity and recessed LED fixtures.",
    url: `${siteConfig.url}/bathroom-lighting-installation`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-lighting-installation`,
  },
};

const faqs = serviceContent["bathroom-lighting-installation"].faqs;

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomLightingInstallationPage() {
  const serviceData = serviceContent["bathroom-lighting-installation"];

  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Lighting Installation", url: "https://arzhomeremodeling.com/bathroom-lighting-installation/" } ]} />
<ServiceSchema 
        serviceName="Bathroom Lighting Installation in Chandler, Arizona" 
        serviceDescription="Professional bathroom lighting installation in Chandler, Arizona. Recessed LED layout, layered vanity lights, and GFCI shock safety." 
        serviceUrl={`${siteConfig.url}/bathroom-lighting-installation`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Lighting Installation in Chandler, Arizona"
          subtitle="Professional LED & Vanity Lighting in Chandler AZ"
          description="Professional lighting installation with modern LED fixtures, vanity lights, and expert electrical work for beautiful, functional bathrooms."
          image="/images/optimized/photo-1584622650111-993a426fbf0a.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Lighting", url: `${siteConfig.url}/bathroom-lighting-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Lighting Installation Process"
          subtitle="Our Process"
          description="A precise electrical and lighting installation process that guarantees safe, shadow free, and code compliant results."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Electrical Audit",
              description: "We audit your existing circuits and calculate electrical loads to prevent breaker overloads.",
            },
            {
              number: "02",
              icon: "Shield",
              title: "GFCI Safety Hookup",
              description: "We install dedicated twenty amp circuits protected by Ground Fault Circuit Interrupters.",
            },
            {
              number: "03",
              icon: "Layout",
              title: "Layered Layout",
              description: "We map out recessed ceiling lights, side mirror task lights, and shower wet zone locations.",
            },
            {
              number: "04",
              icon: "Hammer",
              title: "Wiring & Junctions",
              description: "We pull new insulated wiring through moisture sealed junction boxes behind the drywall.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Fixture Mounting",
              description: "We mount side sconces at eye level, seal recessed trims, and install smart dimmers.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Professional Lighting"
          subtitle="Common Problems Fixed"
          description="We address the most common bathroom electrical challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Lighting Installation"
          subtitle="Why Choose Us"
          benefits={serviceData.benefits}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Professional Bathroom Lighting Contractor & Upgrades
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              When searching for a qualified <strong>bathroom lighting contractor</strong> to manage your electrical needs, you need experience and precision. Our team provides top-tier <strong>bathroom lighting upgrades near me</strong> that enhance both safety and aesthetics. Our <strong>bathroom lighting installation in Chandler AZ</strong> protects your family by executing professional electrical upgrades. Whether you need a brand-new <strong>interior lighting installation chandler az</strong>, a custom <strong>light fixture installation chandler az</strong>, or a quick <strong>light fixture repair chandler az</strong>, our licensed crew handles it all in compliance with strict building codes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Dedicated 20-Amp GFCI Circuits</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Water and electricity represent a high shock hazard. We run dedicated circuits protected by advanced Ground Fault Circuit 
                  Interrupters, guaranteeing that the circuit cuts power in milliseconds if moisture is detected.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Wet-Zone Vapor-Proof Fixtures</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standard trim rings and metal frames corrode quickly under heavy steam inside showers. We install fully sealed, vapor-proof 
                  LED fixtures to prevent attic humidity leaks and short circuits inside wet zones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Expert Bathroom Lighting Tips"
          subtitle="Care & Maintenance"
          description="Smart advice to maintain the efficiency and safety of your bathroom lighting fixtures."
          tips={serviceData.tips}
        />
        
        <ServiceCTA 
          title="Ready for professional bathroom lighting in Chandler?" 
          description="Get a free consultation with premium lighting layout planning and upfront estimates." 
        />

        <ServiceFAQ faqs={faqs} />
        
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
        
        <ServiceCTA 
          title="Need bathroom lighting installation in Chandler, AZ?" 
          description="Contact us today for professional installation with premium fixtures and expert electrical work." 
        />
      </main>
      <Footer />
    </>
  );
}
