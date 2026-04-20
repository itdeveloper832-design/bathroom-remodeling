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

const faqs = [
  {
    question: "What is the shower remodel cost in Chandler AZ?",
    answer: "Shower remodel cost in Chandler AZ ranges from $5,000-$15,000. Affordable shower remodel starts around $5,000. Best shower remodel with premium features exceeds $15,000. Get your free shower remodel estimate today!"
  },
  {
    question: "How do I hire shower remodel contractor in Chandler AZ?",
    answer: "To hire shower remodel contractor in Chandler AZ, contact us for a free shower remodel quote. Our professional shower remodel services include consultation, design, and installation. We're the best shower remodel company in Chandler AZ."
  },
  {
    question: "What is the shower remodel price in Chandler AZ?",
    answer: "Shower remodel price in Chandler AZ varies by scope. Affordable shower remodel options available. Get your shower remodel quote for transparent pricing and shower remodel estimate near me Chandler AZ!"
  },
  {
    question: "Do you offer affordable shower remodel in Chandler AZ?",
    answer: "Yes! We offer affordable shower remodel in Chandler AZ with flexible financing. Our shower remodel services include budget-friendly options. Contact us for shower remodel near me Chandler AZ!"
  },
  {
    question: "Are you professional shower remodel contractors in Chandler AZ?",
    answer: "Yes! We're professional shower remodel contractors in Chandler AZ with 15+ years experience. Company shower remodel services are fully licensed and insured. Best shower remodel near me!"
  },
  {
    question: "What shower remodel services do you offer in Chandler AZ?",
    answer: "Our shower remodel services in Chandler AZ include: complete shower remodel installation, tile shower remodel, custom shower designs, shower remodel contractor services. Shower remodel company services available!"
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function ShowerRemodelingPage() {
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
          issues={[
            {
              problem: "Outdated shower surrounds that leak or collect mold.",
              solution: "Fully waterproofed systems with modern tile and sealed glass to stop leaks and mildew.",
            },
            {
              problem: "Cracked grout lines and failing caulk at corners.",
              solution: "New substrates, proper expansion joints, and premium sealants for long-term protection.",
            },
            {
              problem: "Cramped layouts with poor storage for toiletries.",
              solution: "Built-in niches, benches, and smarter layout options that open up the shower footprint.",
            },
            {
              problem: "Poor drainage and standing water on the shower floor.",
              solution: "Re-sloped pans and upgraded drains that keep water moving and surfaces safer.",
            },
            {
              problem: "Dated hardware that clashes with the rest of the bathroom.",
              solution: "Coordinated fixture packages in finishes that match your vanity, lighting, and trim.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Shower Remodeling in Chandler"
          subtitle="Why It Matters"
          benefits={[
            {
              icon: "Sparkles",
              title: "Spa-Level Look",
              description: "Frameless glass, premium tile, and clean lines create a relaxing Chandler retreat.",
            },
            {
              icon: "ShieldCheck",
              title: "Leak Protection",
              description: "Moisture barriers and sealed corners protect walls and subflooring from damage.",
            },
            {
              icon: "Droplets",
              title: "Better Drainage",
              description: "Proper slopes and upgraded drains reduce standing water and keep grout cleaner.",
            },
            {
              icon: "TrendingUp",
              title: "Higher Home Value",
              description: "A modern shower is a top buyer priority in Chandler's competitive market.",
            },
            {
              icon: "Timer",
              title: "Faster Mornings",
              description: "Organized niches and improved lighting streamline daily routines.",
            },
          ]}
        />

        <Tips
          title="Shower Remodeling Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Simple, Chandler-friendly tips to keep your shower remodeling performing and looking its best."
          tips={[
            "Squeegee glass after each use to reduce water spots and mineral buildup.",
            "Use pH-neutral cleaners on natural stone and grout-safe products on tile.",
            "Run the exhaust fan for 20 minutes after showers to prevent humidity and mildew.",
            "Check caulk annually at corners and niches to maintain a watertight seal.",
            "Choose slip-resistant shower floors if you have kids, seniors, or mobility needs.",
          ]}
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
