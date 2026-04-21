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

export const metadata: Metadata = {
  title: "Shower Remodel Chandler AZ | Best Services",
  description: "Best shower remodel services Chandler AZ. Affordable shower remodel cost, professional shower remodel contractor. Free shower remodel estimate!",
  keywords: ["shower remodel services Chandler AZ", "shower remodel Chandler AZ", "shower remodel cost Chandler AZ", "shower remodel price Chandler AZ", "shower remodel estimate Chandler AZ", "shower remodel quote Chandler AZ", "shower remodel contractor Chandler AZ", "shower remodel company Chandler AZ", "affordable shower remodel Chandler AZ", "best shower remodel Chandler AZ", "professional shower remodel Chandler AZ", "shower remodel near me Chandler AZ", "hire shower remodel Chandler AZ", "shower remodel installation Chandler AZ"],
  openGraph: {
    title: "Shower Remodel Chandler AZ | Best Services",
    description: "Best shower remodel services Chandler AZ. Affordable shower remodel, free quotes!",
    url: `${siteConfig.url}/shower-remodeling`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/shower-remodeling-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shower Remodeling - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Remodel Chandler AZ | Best Services",
    description: "Best shower remodel services Chandler AZ. Affordable, professional!",
    images: [`${siteConfig.url}/images/shower-remodeling-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling`,
  },
};

const faqs = serviceContent["shower-remodeling"].faqs;

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function ShowerRemodelingPage() {
  const showerData = serviceContent["shower-remodeling"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Shower Remodeling in Chandler, Arizona"
        serviceDescription="Professional shower remodeling in Chandler, Arizona. Custom tile, frameless glass enclosures, waterproof installations, and premium fixtures."
        serviceUrl={`${siteConfig.url}/shower-remodeling`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Best Shower Remodel Services Chandler AZ"
          subtitle="Professional Shower Remodel Contractor Chandler AZ"
          description="Best shower remodel services Chandler AZ. Affordable shower remodel cost, professional shower remodel installation, shower remodel contractor. Get your free shower remodel estimate today!"
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower Remodeling", url: `${siteConfig.url}/shower-remodeling` },
          ]}
        />

        <ServiceProcess
          title="Shower Remodel Process"
          subtitle="Our Process"
          description="A streamlined, mess-managed shower remodel built for Chandler homeowners who want a faster, cleaner upgrade."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation & Measurements",
              description: "We review goals, measure your shower footprint, and plan waterproofing details.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design & Selections",
              description: "Tile, glass, fixtures, and drainage layout tailored to your style and daily routine.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Demo & Prep",
              description: "Clean demolition, substrate repair, and moisture barrier installation for durability.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Tile & Fixture Install",
              description: "Precision tile setting, niche detailing, and valve/fixture installation for a spa feel.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Inspection & Walkthrough",
              description: "Sealing, testing, and a final walkthrough to confirm drainage, fit, and finish.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Shower Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common shower remodeling challenges Chandler homeowners face."
          issues={showerData.issues}
        />

        <Benefits
          title="Benefits of Shower Remodeling"
          subtitle="Why Remodel Your Shower"
          description="Discover how professional shower remodeling transforms your daily routine and adds value to your home."
          benefits={showerData.benefits}
        />

        <Tips
          title="Expert Shower Remodeling Tips"
          subtitle="Professional Insights"
          description="Smart strategies to make the most of your shower remodeling project."
          tips={showerData.tips}
        />

        <ServiceCTA 
          title="Ready for a Chandler shower remodel that stays watertight?" 
          description="Get a custom shower plan, tile selections, and a clean installation schedule tailored to your home." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <ServiceCTA 
          title="Need fast shower remodeling in Chandler, AZ?" 
          description="Call now for a same-week consultation and clear pricing on your new shower." 
        />
      </main>
      <Footer />
    </>
  );
}
