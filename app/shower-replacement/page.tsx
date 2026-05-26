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
  title: "Shower Replacement Chandler AZ - Professional Installation",
  description: "Professional shower replacement Chandler AZ. Shower valve replacement, shower handle replacement, shower door replacement, shower pan replacement. Free quotes!",
  openGraph: {
    title: "Shower Replacement Chandler AZ - Professional Installation",
    description: "Professional shower replacement Chandler AZ. Valve, handle, door, pan replacement. Free quotes!",
    url: `${siteConfig.url}/shower-replacement`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/shower-replacement-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shower Replacement Services - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Replacement Chandler AZ - Professional Installation",
    description: "Professional shower replacement Chandler AZ. Valve, handle, door replacement!",
    images: [`${siteConfig.url}/images/shower-replacement-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
  robots: { index: false, follow: true },
};

const faqs = serviceContent["shower-replacement"].faqs;

const chandlerLocation = {
  lat: 33.3009334,
  lng: -111.9605964,
};

export default function ShowerReplacementPage() {
  const serviceData = serviceContent["shower-replacement"];
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Shower Replacement", url: "https://arzhomeremodeling.com/shower-replacement/" } ]} />
<ServiceSchema
        serviceName="Shower Replacement in Chandler, Arizona"
        serviceDescription="Professional shower replacement services in Chandler, Arizona. Quick installation, modern designs, and quality materials."
        serviceUrl={`${siteConfig.url}/shower-replacement`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Shower Replacement Chandler AZ - Complete Service"
          subtitle="Shower Valve, Handle, Door & Pan Replacement Chandler AZ"
          description="Professional shower replacement Chandler AZ. Shower valve replacement, shower handle replacement, shower door replacement, shower pan replacement, shower drain replacement. Free estimates!"
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower Replacement", url: `${siteConfig.url}/shower-replacement` },
          ]}
        />

        <ServiceProcess
          title="Shower Replacement Process"
          subtitle="Our Process"
          description="A streamlined shower replacement process designed for efficiency and quality results."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Assessment & Quote",
              description: "We inspect your existing shower, discuss options, and provide a detailed estimate.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Material Selection",
              description: "Choose from tile, acrylic, or fiberglass options with matching fixtures and hardware.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Removal & Prep",
              description: "Careful demolition of old shower, inspection of substructure, and waterproofing.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Installation",
              description: "Professional installation of new shower unit, plumbing connections, and fixtures.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Testing & Cleanup",
              description: "Complete water testing, sealing, and thorough cleanup of your bathroom.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Shower Replacement"
          subtitle="Common Problems Fixed"
          description="We address the most common shower replacement challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Shower Replacement"
          subtitle="Why Replace Your Shower"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Shower Replacement Tips & Care"
          subtitle="Maintain Your New Shower"
          description="Keep your new shower looking great and functioning properly with these expert tips."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready to replace your old shower in Chandler?" 
          description="Get a free assessment and quote for your shower replacement project today." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Shower Replacement Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional shower replacement services throughout Chandler and the East Valley area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding communities</li>
                <li>• Licensed and insured professionals</li>
                <li>• Free estimates and consultations</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Shower Replacement in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need shower replacement in Chandler, AZ?" 
          description="Contact us today for fast, professional shower replacement services." 
        />
      </main>
      <Footer />
    </>
  );
}

