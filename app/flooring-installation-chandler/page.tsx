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
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Flooring Installation Chandler AZ | LVP, Tile & Hardwood",
  description: "Professional flooring installation in Chandler, AZ. Specializing in LVP, porcelain tile, and hardwood. Durable desert-ready floors. Free estimate!",
  openGraph: {
    title: "Flooring Installation Chandler AZ | LVP, Tile & Hardwood",
    description: "Upgrade your home with premium flooring in Chandler, AZ. Expert installation of tile, vinyl plank, and wood. Licensed contractors. Free quotes!",
    url: `${siteConfig.url}/flooring-installation-chandler/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/flooring-installation-chandler/`,
  },
};

export default function FlooringPage() {
  const serviceData = serviceContent["flooring"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Flooring Installation in Chandler, Arizona"
        serviceDescription="Professional flooring services in Chandler, Arizona. Installation of LVP, porcelain tile, hardwood, and custom stone flooring."
        serviceUrl={`${siteConfig.url}/flooring-installation-chandler/`}
      />
      <FAQSchema faqs={serviceData.faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Professional Flooring Installation in Chandler, AZ"
          subtitle="Durable & Beautiful Desert-Ready Floors"
          description="Transform your home with high-quality flooring that stands up to the Arizona climate. From waterproof Luxury Vinyl Plank (LVP) to timeless porcelain tile and classic hardwood, we provide precision installation and premium materials."
          image="/images/optimized/photo-1581858726788-75bc0f6a952d.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Flooring Installation Chandler", url: `${siteConfig.url}/flooring-installation-chandler/` },
          ]}
        />

        <ServiceProcess
          title="Our Flooring Installation Process"
          subtitle="Precision & Quality"
          description="A meticulous approach to ensuring your new floors are perfectly level, durable, and beautiful."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Measurement & Estimation",
              description: "Accurate on-site measurements and material calculation to ensure minimal waste and clear pricing.",
            },
            {
              number: "02",
              icon: "Hammer",
              title: "Old Flooring Removal",
              description: "Careful removal and disposal of your old carpet, tile, or laminate with minimal dust disruption.",
            },
            {
              number: "03",
              icon: "CheckCircle",
              title: "Subfloor Preparation",
              description: "Professional floor leveling and substrate repair to ensure a perfectly flat surface for your new flooring.",
            },
            {
              number: "04",
              icon: "Layout",
              title: "Expert Installation",
              description: "Precision cutting and laying of your chosen material, followed by seamless transition installation.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Baseboard & Finishing",
              description: "Installation of new baseboards and final cleanup, leaving your home ready for immediate use.",
            },
          ]}
        />

        <IssuesSolved
          title="Flooring Problems We Solve"
          subtitle="Expert Solutions"
          description="We address the most common flooring challenges faced by homeowners in the East Valley."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Professional Flooring"
          subtitle="Style Meets Durability"
          description="Invest in flooring that improves your home's aesthetic while withstanding the demands of desert living."
          benefits={serviceData.benefits}
        />

        <LocalTrust cityName="Chandler" />

        <Tips
          title="Flooring Selection Tips"
          subtitle="Professional Advice"
          description="How to choose the best flooring material for your specific needs and lifestyle."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for New Floors?" 
          description="Schedule your free in-home measurement today and explore our wide selection of premium flooring." 
        />

        <ServiceFAQ faqs={serviceData.faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
