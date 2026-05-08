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
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Custom Walk-In Showers Chandler AZ | Installations",
  description: "Safe & stylish walk-in showers Chandler AZ. Handicap accessible options available. Get a seamless bathroom installation today!",
  openGraph: {
    title: "Walk In Shower Installation Chandler AZ | Best",
    description: "Best walk in shower installation Chandler AZ. Professional installation, free quotes!",
    url: `${siteConfig.url}/walk-in-showers`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/walk-in-shower-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Walk-In Showers Installation - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk In Shower Installation Chandler AZ | Best",
    description: "Best walk in shower installation Chandler AZ. Professional, affordable!",
    images: [`${siteConfig.url}/images/walk-in-shower-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/walk-in-showers`,
  },
};

const faqs = serviceContent["walk-in-showers"].faqs;

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

const otherServices = bathroomServices
  .filter(s => s.href !== "/walk-in-showers")
  .slice(0, 3);

export default function WalkInShowersPage() {
  const serviceData = serviceContent["walk-in-showers"];
  return (
    <>
      <ServiceSchema
        serviceName="Walk-In Shower Installation in Chandler, Arizona"
        serviceDescription="Professional walk-in shower installation in Chandler, Arizona. Barrier-free designs, frameless glass enclosures, and ADA-compliant options."
        serviceUrl={`${siteConfig.url}/walk-in-showers`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Best Walk In Shower Installation Chandler AZ"
          subtitle="Professional Walk-In Shower Company Services in Chandler AZ"
          description="Best walk in shower installation Chandler AZ. We offer top-tier walk-in shower company services and affordable walk-in shower installation services. Get your free quote today!"
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Walk-In Showers", url: `${siteConfig.url}/walk-in-showers` },
          ]}
        />

        <ServiceProcess
          title="Walk-In Shower Installation Process"
          subtitle="Our Process"
          description="A streamlined installation process designed to deliver your dream walk-in shower with minimal disruption."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Free Consultation",
              description: "We assess your space, discuss design preferences, and measure for your walk-in shower.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design & Selection",
              description: "Choose tile, glass enclosure style, fixtures, and accessibility features for your needs.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Demo & Preparation",
              description: "Careful removal of existing fixtures, waterproofing installation, and drainage setup.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Installation",
              description: "Professional tile setting, glass enclosure installation, and fixture mounting.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Final Inspection",
              description: "Complete testing, sealing, and walkthrough to ensure perfect operation and finish.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Walk-In Showers"
          subtitle="Common Problems Fixed"
          description="We address the most common design and installation challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Walk-In Showers"
          subtitle="Why Choose Walk-In Showers"
          benefits={serviceData.benefits}
        />

        <Tips
          title="Walk-In Shower Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your walk-in shower and extend its lifespan in Chandler's climate."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for a custom walk-in shower in Chandler?" 
          description="Get a free consultation with design options, material selections, and transparent pricing." 
        />

        <SubServices 
          title="Related Services in Chandler"
          subtitle="More Solutions"
          description="We provide comprehensive bathroom remodeling services tailored to your needs."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Walk-In Shower Installation Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners throughout Chandler, Arizona and surrounding East Valley communities with professional walk-in shower installations.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Licensed and insured contractors</li>
                <li>• Same-week consultations available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Walk-In Showers in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need walk-in shower installation in Chandler, AZ?" 
          description="Call now for a free estimate and expert consultation on your walk-in shower project." 
        />
      </main>
      <Footer />
    </>
  );
}

