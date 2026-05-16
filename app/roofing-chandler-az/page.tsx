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
  title: "Roofing Contractors Chandler AZ | Roof Repair & Replacement",
  description: "Trusted roofing services in Chandler, AZ. Tile roof repair, shingle replacement, and leak detection. Built for the Arizona sun. Licensed & Insured.",
  openGraph: {
    title: "Roofing Contractors Chandler AZ | Roof Repair & Replacement",
    description: "Protect your home with Chandler's trusted roofing experts. Specializing in tile and shingle roofs designed for the desert climate. Free inspections!",
    url: `${siteConfig.url}/roofing-chandler-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/roofing-chandler-az/`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RoofingPage() {
  const serviceData = serviceContent["roofing"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Roofing Services in Chandler, Arizona"
        serviceDescription="Professional roofing contractors in Chandler, Arizona. Specializing in tile roof repair, shingle replacement, and monsoon-ready protection."
        serviceUrl={`${siteConfig.url}/roofing-chandler-az/`}
      />
      <FAQSchema faqs={serviceData.faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Top-Rated Roofing Contractors in Chandler, AZ"
          subtitle="Monsoon-Ready Roof Protection & Repair"
          description="Your roof is your home's first line of defense against the intense Arizona sun and heavy monsoon rains. We specialize in durable tile and shingle roofing systems designed to withstand the desert climate while improving your home's energy efficiency."
          image="/images/optimized/photo-1632759162403-108a90196720.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Roofing Chandler", url: `${siteConfig.url}/roofing-chandler-az/` },
          ]}
        />

        <ServiceProcess
          title="Our Roofing Process"
          subtitle="Built to Last"
          description="A comprehensive approach to ensuring your roof remains leak-free and energy-efficient for decades."
          steps={[
            {
              number: "01",
              icon: "Search",
              title: "Free Roof Inspection",
              description: "A detailed assessment of your roof's condition, including tile, shingle, and underlayment health.",
            },
            {
              number: "02",
              icon: "Shield",
              title: "Preparation & Safety",
              description: "Full site protection and safety setup to ensure your property remains clean and secure during work.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Repair or Replacement",
              description: "Professional execution of your roofing project, whether it's a minor repair or a full tile R&R.",
            },
            {
              number: "04",
              icon: "Zap",
              title: "Ventilation Optimization",
              description: "Installation or upgrade of attic ventilation systems to lower cooling costs and extend roof life.",
            },
            {
              number: "05",
              icon: "CheckCircle",
              title: "Quality Final Inspection",
              description: "Rigorous quality check and cleanup, ensuring your new roof is ready for whatever the weather brings.",
            },
          ]}
        />

        <IssuesSolved
          title="Roofing Issues We Solve"
          subtitle="Desert Protection"
          description="We address the unique challenges that the Arizona climate poses to residential roofing."
          issues={serviceData.issues}
        />

        <Benefits
          title="Why Choose Our Roofing Services?"
          subtitle="Expertise You Can Trust"
          description="Protect your largest investment with high-quality materials and professional workmanship."
          benefits={serviceData.benefits}
        />

        <LocalTrust cityName="Chandler" />

        <Tips
          title="Roof Maintenance Tips"
          subtitle="Professional Advice"
          description="Simple steps to extend the life of your roof in the Chandler heat."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Need a Roof Inspection?" 
          description="Don't wait for a leak. Schedule your free professional roof inspection today." 
        />

        <ServiceFAQ faqs={serviceData.faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
