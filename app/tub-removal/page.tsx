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
  title: "Tub Removal Chandler AZ | Bathtub Removal Service",
  description: "Professional bathtub removal services in Chandler, Arizona. Safe removal, proper disposal, and floor prep for your bathroom renovation project.",
  openGraph: {
    title: "Tub Removal Chandler AZ | Bathtub Removal Service",
    description: "Professional bathtub removal services in Chandler. Safe removal and proper disposal included.",
    url: `${siteConfig.url}/tub-removal`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tub-removal-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Tub Removal Services - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub Removal Chandler AZ | Bathtub Removal Service",
    description: "Professional bathtub removal services in Chandler. Safe removal and proper disposal included.",
    images: [`${siteConfig.url}/images/tub-removal-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-removal`,
  },
};

const faqs = serviceContent["tub-removal"].faqs;

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function TubRemovalPage() {
  const serviceData = serviceContent["tub-removal"];
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Tub Removal", url: "https://arzhomeremodeling.com/tub-removal/" } ]} />
<ServiceSchema
        serviceName="Bathtub Removal in Chandler, Arizona"
        serviceDescription="Professional bathtub removal services in Chandler, Arizona. Safe removal, proper disposal, and floor preparation for bathroom renovations."
        serviceUrl={`${siteConfig.url}/tub-removal`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Tub Removal in Chandler, Arizona"
          subtitle="Professional Bathtub Removal Services in Chandler AZ"
          description="Expert bathtub removal with proper plumbing disconnection, safe extraction, and complete disposal for your renovation project."
          image="/images/optimized/photo-1585412727339-54e4bae3bbf9.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub Removal", url: `${siteConfig.url}/tub-removal` },
          ]}
        />

        <ServiceProcess
          title="Bathtub Removal Process"
          subtitle="Our Process"
          description="A safe, efficient tub removal process that prepares your bathroom for renovation."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Assessment",
              description: "We evaluate tub type, accessibility, and plan the safest removal approach.",
            },
            {
              number: "02",
              icon: "Wrench",
              title: "Plumbing Disconnect",
              description: "Shut off water supply and properly disconnect all plumbing connections.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Safe Removal",
              description: "Careful extraction of the tub with protection for surrounding surfaces.",
            },
            {
              number: "04",
              icon: "Trash2",
              title: "Disposal & Hauling",
              description: "Complete removal of the tub and all debris from your property.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Floor Prep",
              description: "Plumbing caps, subfloor inspection, and preparation for next phase.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Professional Tub Removal"
          subtitle="Common Problems Fixed"
          description="We address the most common tub removal challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Tub Removal"
          subtitle="Why Hire Professionals"
          benefits={serviceData.benefits}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Professional Tub Extraction and Subfloor Preparation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Removing a heavy bathtub requires advanced tools and careful planning. Our experienced team handles the entire 
              demolition process safely, ensuring your bathroom structural framework remains protected.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Certified Plumbing Disconnection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We turn off your water main and carefully remove all brass tub drain lines and overflow piping. We permanently cap 
                  unused hot and cold supply lines behind the drywall with heavy copper caps.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Subfloor Joist Preparation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bulky bathtubs often conceal hidden water leaks. Once extracted, we thoroughly inspect the floor joists, remove any 
                  mold or dry rot, and reinforce your subfloor with clean plywood.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Tub Removal Planning Tips"
          subtitle="Before You Start"
          description="Important considerations before scheduling your bathtub removal service."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for professional tub removal in Chandler?" 
          description="Get a free quote for safe, efficient bathtub removal with proper disposal included." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Tub Removal Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional bathtub removal services throughout Chandler and the East Valley area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding communities</li>
                <li>• Same-day and next-day service available</li>
                <li>• Disposal and hauling included</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Tub Removal in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need bathtub removal in Chandler, AZ?" 
          description="Contact us for fast, professional tub removal with full disposal service." 
        />
      </main>
      <Footer />
    </>
  );
}

