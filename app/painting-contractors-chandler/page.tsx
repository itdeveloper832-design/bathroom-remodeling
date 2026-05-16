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
  title: "Painting Contractors Chandler AZ | Interior & Exterior Painting",
  description: "Premium painting services in Chandler, AZ. Expert interior and exterior painting. High-quality finishes for the Arizona climate. Free estimates!",
  openGraph: {
    title: "Painting Contractors Chandler AZ | Interior & Exterior Painting",
    description: "Refresh your home with Chandler's premium painting contractors. UV-resistant exterior coatings and flawless interior finishes. Free quotes!",
    url: `${siteConfig.url}/painting-contractors-chandler/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/painting-contractors-chandler/`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PaintingPage() {
  const serviceData = serviceContent["painting"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Painting Services in Chandler, Arizona"
        serviceDescription="Professional interior and exterior painting services in Chandler, Arizona. Specializing in UV-resistant coatings and flawless finishes."
        serviceUrl={`${siteConfig.url}/painting-contractors-chandler/`}
      />
      <FAQSchema faqs={serviceData.faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Professional Painting Contractors in Chandler, AZ"
          subtitle="Interior & Exterior Perfection for Desert Homes"
          description="A fresh coat of paint is the fastest way to modernize and protect your home. We specialize in high-quality interior finishes and UV-resistant exterior coatings specifically formulated to withstand Chandler's intense sunlight and heat."
          image="/images/optimized/photo-1562664377-709f2c337eb2.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Painting Contractors Chandler", url: `${siteConfig.url}/painting-contractors-chandler/` },
          ]}
        />

        <ServiceProcess
          title="Our Painting Process"
          subtitle="Meticulous Preparation"
          description="We believe that a perfect final finish starts with the highest standards of surface preparation."
          steps={[
            {
              number: "01",
              icon: "Palette",
              title: "Color Consultation",
              description: "We help you select a palette that matches your style and complies with local HOA requirements.",
            },
            {
              number: "02",
              icon: "Shield",
              title: "Site Protection",
              description: "Thorough masking, covering of furniture, and protection of landscaping for exterior projects.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Surface Prep & Repair",
              description: "Detailed patching of drywall, stucco repair, and sanding to ensure a smooth, lasting bond.",
            },
            {
              number: "04",
              icon: "PaintBucket",
              title: "Precision Application",
              description: "Expert application of premium primers and paints using professional spray, roll, and brush techniques.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Final Touch-ups & Cleanup",
              description: "Meticulous quality inspection followed by a complete site cleanup, leaving your home spotless.",
            },
          ]}
        />

        <IssuesSolved
          title="Painting Problems We Solve"
          subtitle="Expert Solutions"
          description="We address the specific challenges that the Arizona sun and desert environment pose to your home's paint."
          issues={serviceData.issues}
        />

        <Benefits
          title="Why Choose Our Painting Services?"
          subtitle="Quality That Lasts"
          description="Protect your home and increase its value with professional-grade materials and expert application."
          benefits={serviceData.benefits}
        />

        <LocalTrust cityName="Chandler" />

        <Tips
          title="Painting Success Tips"
          subtitle="Professional Advice"
          description="How to ensure your new paint job stays beautiful for years to come."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for a Fresh Look?" 
          description="Schedule your free color consultation and painting estimate today." 
        />

        <ServiceFAQ faqs={serviceData.faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
