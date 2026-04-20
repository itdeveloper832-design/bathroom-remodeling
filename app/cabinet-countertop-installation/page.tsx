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
import { GoogleMap } from "@/components/google-map";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Cabinet & Countertop Installation Chandler AZ",
  description: "Professional cabinet and countertop installation in Chandler, Arizona. Granite, quartz, marble countertops and custom cabinetry. Free estimates.",
  keywords: ["cabinet countertop installation chandler az", "bathroom countertops chandler", "vanity cabinet installation", "granite countertops arizona", "quartz countertops chandler"],
  openGraph: {
    title: "Cabinet & Countertop Installation Chandler AZ",
    description: "Professional cabinet and countertop installation in Chandler. Granite, quartz, and custom cabinetry.",
    url: `${siteConfig.url}/cabinet-countertop-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/cabinet-countertop-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Cabinet & Countertop Installation - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet & Countertop Installation Chandler AZ",
    description: "Professional cabinet and countertop installation in Chandler. Granite, quartz, and custom cabinetry.",
    images: [`${siteConfig.url}/images/cabinet-countertop-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/cabinet-countertop-installation`,
  },
};

const faqs = [
  {
    question: "How much does cabinet and countertop installation cost in Chandler?",
    answer: "Cabinet and countertop installation in Chandler typically costs $2,000-$8,000 depending on materials and scope. Laminate countertops with stock cabinets start around $2,000, while granite or quartz with custom cabinetry can exceed $8,000. We provide free detailed estimates."
  },
  {
    question: "What countertop materials do you install?",
    answer: "We install all countertop materials including granite, quartz, marble, quartzite, solid surface, and laminate. Our team helps you choose the best material for your budget, style, and bathroom needs."
  },
  {
    question: "How long does cabinet and countertop installation take?",
    answer: "Most bathroom cabinet and countertop installations are completed in 1-3 days. Simple vanity replacements take 1 day, while custom installations with templating may take 2-3 days. Countertop fabrication adds 1-2 weeks lead time."
  },
  {
    question: "Do you remove and dispose of old cabinets and countertops?",
    answer: "Yes! We handle complete removal of your old vanity, cabinets, and countertops including proper disposal. We protect your floors and walls during removal and leave your bathroom clean."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function CabinetCountertopInstallationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Cabinet & Countertop Installation in Chandler, Arizona"
        serviceDescription="Professional cabinet and countertop installation in Chandler, Arizona. Granite, quartz, marble countertops and custom cabinetry with expert installation."
        serviceUrl={`${siteConfig.url}/cabinet-countertop-installation`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Cabinet & Countertop Installation in Chandler, Arizona"
          subtitle="Professional Vanity & Countertop Services in Chandler AZ"
          description="Upgrade your bathroom with custom cabinets and premium countertops in granite, quartz, or marble with expert installation."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Cabinet & Countertop Installation", url: `${siteConfig.url}/cabinet-countertop-installation` },
          ]}
        />

        <ServiceProcess
          title="Cabinet & Countertop Installation Process"
          subtitle="Our Process"
          description="A precise installation process for perfect cabinet and countertop results every time."
          steps={[
            {
              number: "01",
              icon: "Ruler",
              title: "Measure & Template",
              description: "Precise measurements and templating for perfect fit and alignment.",
            },
            {
              number: "02",
              icon: "Layout",
              title: "Material Selection",
              description: "Choose cabinet style, countertop material, edge profile, and hardware.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Old Removal",
              description: "Careful removal of existing cabinets and countertops with protection.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Level cabinet mounting, countertop setting, and plumbing connections.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Finishing",
              description: "Sink cutout, faucet installation, sealing, and final inspection.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Cabinet & Countertop Installation"
          subtitle="Common Problems Fixed"
          description="We address common bathroom storage and surface challenges with professional installation."
          issues={[
            {
              problem: "Outdated vanity cabinets with worn finishes and broken hardware.",
              solution: "Fresh, modern cabinets with quality hardware and durable finishes.",
            },
            {
              problem: "Stained, chipped, or dated laminate countertops.",
              solution: "Premium stone or quartz countertops that resist stains and damage.",
            },
            {
              problem: "Lack of storage causing cluttered bathroom surfaces.",
              solution: "Custom cabinet configurations with organized drawers and shelving.",
            },
            {
              problem: "Poorly aligned countertops with visible gaps and seams.",
              solution: "Professional templating and installation for seamless results.",
            },
            {
              problem: "Mismatched cabinets and countertops that clash.",
              solution: "Coordinated material selection for cohesive bathroom design.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Professional Cabinet & Countertop Installation"
          subtitle="Why Choose Us"
          benefits={[
            {
              icon: "Layout",
              title: "Better Storage",
              description: "Custom cabinets maximize storage with organized drawer systems.",
            },
            {
              icon: "Sparkles",
              title: "Premium Materials",
              description: "Granite, quartz, and marble surfaces that last for decades.",
            },
            {
              icon: "Ruler",
              title: "Perfect Fit",
              description: "Precise templating ensures seamless installation and alignment.",
            },
            {
              icon: "TrendingUp",
              title: "Added Value",
              description: "Quality countertops and cabinets significantly increase home value.",
            },
            {
              icon: "ShieldCheck",
              title: "Warranty Coverage",
              description: "Professional installation backed by workmanship warranty.",
            },
          ]}
        />

        <Tips
          title="Cabinet & Countertop Tips"
          subtitle="Care & Maintenance"
          description="Expert tips to maintain your new cabinets and countertops for lasting beauty."
          tips={[
            "Seal natural stone countertops annually to protect against stains and etching.",
            "Use trivets and cutting boards to protect countertop surfaces from heat and scratches.",
            "Clean countertops daily with pH-neutral cleaners - avoid harsh chemicals.",
            "Wipe cabinet doors with a damp cloth and dry immediately to prevent moisture damage.",
            "Check and tighten cabinet hardware every 6 months to prevent loosening.",
          ]}
        />

        <ServiceCTA 
          title="Ready for new cabinets and countertops in Chandler?" 
          description="Get a free consultation with material samples and transparent pricing." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Cabinet & Countertop Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional cabinet and countertop installation throughout Chandler and the greater Phoenix area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding areas</li>
                <li>• Licensed and insured installation</li>
                <li>• Free estimates and showroom visits</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Cabinet & Countertop Installation in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need cabinet and countertop installation in Chandler, AZ?" 
          description="Contact us today for professional installation with premium materials." 
        />
      </main>
      <Footer />
    </>
  );
}
