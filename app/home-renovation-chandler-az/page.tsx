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
  title: "Full Home Renovation Chandler AZ | Whole House Remodeling",
  description: "Complete home renovation services in Chandler, AZ. Whole-house remodels, structural changes, and interior modernization. Licensed & insured. Call today!",
  openGraph: {
    title: "Full Home Renovation Chandler AZ | Whole House Remodeling",
    description: "Expert whole-house remodeling in Chandler, AZ. Licensed contractors, open-concept designs, and premium finishes. Free estimates!",
    url: `${siteConfig.url}/home-renovation-chandler-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/home-renovation-chandler-az/`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function HomeRenovationPage() {
  const serviceData = serviceContent["home-renovation"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Full Home Renovation in Chandler, Arizona"
        serviceDescription="Professional whole-house remodeling services in Chandler, Arizona. Structural changes, open-concept layouts, and complete interior modernization."
        serviceUrl={`${siteConfig.url}/home-renovation-chandler-az/`}
      />
      <FAQSchema faqs={serviceData.faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Full Home Renovation Services in Chandler, AZ"
          subtitle="Whole-House Remodeling & Interior Modernization"
          description="Transform your entire living space with Chandler's premier design-build firm. From structural wall removal and open-concept floor plans to cohesive interior updates, we manage every detail of your whole-house renovation."
          image="/images/optimized/photo-1600607687920-4e2a09cf159d.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Home Renovation Chandler", url: `${siteConfig.url}/home-renovation-chandler-az/` },
          ]}
        />

        <ServiceProcess
          title="Our Whole-Home Renovation Process"
          subtitle="Cohesive Design-Build"
          description="A comprehensive approach to transforming your entire property into a modern, functional masterpiece."
          steps={[
            {
              number: "01",
              icon: "Layout",
              title: "Planning & Feasibility",
              description: "We assess your home's structure and your goals to design a layout that works for your lifestyle.",
            },
            {
              number: "02",
              icon: "PencilRuler",
              title: "Interior Design & Selection",
              description: "Our designers help you select a cohesive palette of flooring, paint, and finishes for every room.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Structural & System Prep",
              description: "Careful demolition and structural work, followed by full updates to electrical and plumbing systems.",
            },
            {
              number: "04",
              icon: "CheckCircle",
              title: "Phased Construction",
              description: "Meticulous execution of the design plan, managed in phases to minimize disruption to your life.",
            },
            {
              number: "05",
              icon: "Home",
              title: "Final Reveal & Inspection",
              description: "Detailed final walkthrough and quality check to ensure your new home exceeds every expectation.",
            },
          ]}
        />

        <IssuesSolved
          title="Whole-Home Challenges We Solve"
          subtitle="Expert Solutions"
          description="We address the structural and aesthetic issues common in older East Valley homes."
          issues={serviceData.issues}
        />

        <Benefits
          title="Why Invest in Full Renovation?"
          subtitle="Total Transformation"
          description="Modernize your lifestyle while maximizing your property value in the Chandler market."
          benefits={serviceData.benefits}
        />

        <LocalTrust cityName="Chandler" />

        <Tips
          title="Home Renovation Tips"
          subtitle="Professional Advice"
          description="How to ensure your large-scale renovation is a success from start to finish."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for a Whole-House Transformation?" 
          description="Schedule your free in-home consultation today and let's start designing your dream home." 
        />

        <ServiceFAQ faqs={serviceData.faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
