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
import SubServices from "@/components/sub-services";
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Chandler: Licensed Contractors & Free Quotes",
  description: "Transform your kitchen with Chandler's top-rated remodelers. ROC Licensed experts for custom cabinetry, quartz countertops, and full gourmet kitchen renovations. Get a free quote!",
  openGraph: {
    title: "Kitchen Remodeling Chandler: Licensed Contractors & Free Quotes",
    description: "Expert kitchen remodeling in Chandler, AZ. Licensed contractors, luxury designs, and affordable pricing. Free estimates: +14803065591.",
    url: `${siteConfig.url}/kitchen-remodeling/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/kitchen-remodeling/`,
  },
};

export default function KitchenRemodelingPage() {
  const kitchenData = serviceContent["kitchen-remodeling"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Kitchen Remodeling in Chandler, Arizona"
        serviceDescription="Professional kitchen renovations in Chandler, Arizona. Custom cabinets, stone countertops, updated layouts, and high-end finishes."
        serviceUrl={`${siteConfig.url}/kitchen-remodeling/`}
      />
      <FAQSchema faqs={kitchenData.faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Licensed Kitchen Remodeling in Chandler, AZ"
          subtitle="Expert Gourmet Kitchen Transformations & Custom Cabinetry"
          description="Build the kitchen of your dreams with Chandler's trusted remodeling team. From open-concept layouts and custom islands to premium quartz countertops and soft-close cabinetry, we deliver high-end results with ROC Licensed expertise."
          image="/images/optimized/photo-1556911220-e15b29be8c8f.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Kitchen Remodeling Chandler AZ", url: `${siteConfig.url}/kitchen-remodeling/` },
          ]}
        />

        <ServiceProcess
          title="Our Kitchen Remodeling Process"
          subtitle="How We Work"
          description="A systematic, stress-free approach to transforming your kitchen into a functional and beautiful space."
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
              description: "Choose your cabinets, countertops, backsplash, and flooring from our premium collections.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Demo & Structural Prep",
              description: "Clean demolition and site prep, including any wall removal for open-concept designs.",
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
          title="Common Kitchen Problems We Solve"
          subtitle="Expert Solutions"
          description="We address the most frequent challenges Chandler homeowners face with their existing kitchens."
          issues={kitchenData.issues}
        />

        <Benefits
          title="Benefits of a Modern Kitchen"
          subtitle="Why Invest in Your Kitchen"
          description="A professional kitchen remodel improves your quality of life while significantly boosting your home value."
          benefits={kitchenData.benefits}
        />

        <LocalTrust cityName="Chandler" />

        <Tips
          title="Kitchen Planning Tips"
          subtitle="Professional Insights"
          description="Smart strategies to ensure your new kitchen is as functional as it is beautiful."
          tips={kitchenData.tips}
        />

        <ServiceCTA 
          title="Ready for a Free Kitchen Remodeling Estimate?" 
          description="Call now or fill out the form to schedule your free in-home consultation with our Chandler experts." 
        />

        <ServiceFAQ faqs={kitchenData.faqs} />

        <Testimonials />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
