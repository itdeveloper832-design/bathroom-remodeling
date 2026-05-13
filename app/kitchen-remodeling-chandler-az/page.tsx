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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Chandler AZ | Custom Kitchen Renovations",
  description: "Expert kitchen remodeling in Chandler, AZ. Custom cabinets, quartz countertops, and open-concept designs. Licensed contractors. Get a free quote today!",
  openGraph: {
    title: "Kitchen Remodeling Chandler AZ | Custom Kitchen Renovations",
    description: "Build the kitchen of your dreams with Chandler's trusted remodeling team. Custom islands, luxury finishes, and professional installation. Free estimates!",
    url: `${siteConfig.url}/kitchen-remodeling-chandler-az/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/kitchen-remodeling-chandler-az/`,
  },
};

export default function KitchenRemodelingPage() {
  const serviceData = serviceContent["kitchen-remodeling"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Kitchen Remodeling in Chandler, Arizona"
        serviceDescription="Professional kitchen renovations in Chandler, Arizona. Custom cabinets, stone countertops, updated layouts, and high-end finishes."
        serviceUrl={`${siteConfig.url}/kitchen-remodeling-chandler-az/`}
      />
      <FAQSchema faqs={serviceData.faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Expert Kitchen Remodeling in Chandler, AZ"
          subtitle="Gourmet Transformations & Custom Cabinetry"
          description="Elevate your cooking and entertaining experience with a custom kitchen redesign. From premium quartz countertops to luxury cabinetry and open-concept floor plans, we deliver results that blend style with functionality."
          image="/images/optimized/photo-1556911220-e15b29be8c8f.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Kitchen Remodeling Chandler", url: `${siteConfig.url}/kitchen-remodeling-chandler-az/` },
          ]}
        />

        <ServiceProcess
          title="Our Kitchen Remodeling Process"
          subtitle="Precision Craftsmanship"
          description="A systematic, stress-free approach to transforming your kitchen into the heart of your home."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation & Layout Planning",
              description: "We discuss your cooking habits and entertaining needs to design the perfect kitchen flow.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Material & Finish Selection",
              description: "Choose your cabinets, countertops, backsplash, and <Link href='/flooring-installation-chandler/' className='text-primary hover:underline font-medium'>desert-ready flooring options</Link> from our premium collections.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Demo & Structural Prep",
              description: "Clean demolition and site prep, including any wall removal and <Link href='/painting-contractors-chandler/' className='text-primary hover:underline font-medium'>custom interior painting</Link> prep.",
            },
            {
              number: "04",
              icon: "ChefHat",
              title: "Cabinetry & Countertop Install",
              description: "Precision installation of your custom cabinets followed by professional stone templating and setting.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Final Finishing & Walkthrough",
              description: "Installation of backsplash, lighting, and hardware, followed by a detailed quality inspection.",
            },
          ]}
        />

        <IssuesSolved
          title="Kitchen Problems We Solve"
          subtitle="Expert Solutions"
          description="We address the most frequent challenges Chandler homeowners face with their existing kitchens."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of a Modern Kitchen"
          subtitle="Why Invest in Your Kitchen"
          description="A professional kitchen remodel improves your quality of life while significantly boosting your home value."
          benefits={serviceData.benefits}
        />

        <LocalTrust cityName="Chandler" />

        <Tips
          title="Kitchen Planning Tips"
          subtitle="Professional Insights"
          description="Smart strategies to ensure your new kitchen is as functional as it is beautiful."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for a Free Kitchen Remodeling Estimate?" 
          description="Call now or fill out the form to schedule your free in-home consultation with our Chandler experts." 
        />

        <ServiceFAQ faqs={serviceData.faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
