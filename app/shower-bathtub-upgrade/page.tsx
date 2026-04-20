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
  title: "Shower & Bathtub Upgrade Chandler AZ | Remodeling",
  description: "Professional shower and bathtub upgrade services in Chandler, Arizona. Modern fixtures, premium materials, and expert installation. Free estimates.",
  keywords: ["shower bathtub upgrade chandler az", "bathroom upgrade services", "shower upgrade chandler", "bathtub upgrade arizona", "bathroom fixture upgrade"],
  openGraph: {
    title: "Shower & Bathtub Upgrade Chandler AZ | Remodeling",
    description: "Professional shower and bathtub upgrades in Chandler with modern fixtures and premium materials.",
    url: `${siteConfig.url}/shower-bathtub-upgrade`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/shower-bathtub-upgrade-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shower & Bathtub Upgrade - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower & Bathtub Upgrade Chandler AZ | Remodeling",
    description: "Professional shower and bathtub upgrades in Chandler with modern fixtures and premium materials.",
    images: [`${siteConfig.url}/images/shower-bathtub-upgrade-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-bathtub-upgrade`,
  },
};

const faqs = [
  {
    question: "How much does a shower and bathtub upgrade cost in Chandler?",
    answer: "Shower and bathtub upgrades in Chandler typically cost $3,000-$15,000 depending on scope. Simple fixture upgrades start around $3,000, while complete shower-tub combo upgrades with new tile and glass can exceed $15,000. We provide free detailed estimates."
  },
  {
    question: "What does a shower and bathtub upgrade include?",
    answer: "Our upgrades can include new fixtures (faucets, showerheads, handles), fresh tile or surround panels, glass enclosures, improved drainage, better lighting, and modern hardware. We customize each project to your needs and budget."
  },
  {
    question: "How long does a shower-bathtub upgrade take?",
    answer: "Most shower and bathtub upgrades are completed in 3-7 days. Fixture-only upgrades take 1-2 days, while complete remodels with tile and glass may take 5-7 days. We work efficiently to minimize disruption."
  },
  {
    question: "Can you upgrade without replacing the tub or shower base?",
    answer: "Yes! We offer refinishing options and can upgrade tile, fixtures, and enclosures while keeping your existing tub or shower base. This can save money while still transforming your bathroom's appearance."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function ShowerBathtubUpgradePage() {
  return (
    <>
      <ServiceSchema
        serviceName="Shower & Bathtub Upgrade in Chandler, Arizona"
        serviceDescription="Professional shower and bathtub upgrade services in Chandler, Arizona. Modern fixtures, premium materials, and expert installation."
        serviceUrl={`${siteConfig.url}/shower-bathtub-upgrade`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Shower & Bathtub Upgrade in Chandler, Arizona"
          subtitle="Professional Bathroom Upgrades in Chandler AZ"
          description="Transform your shower and bathtub with modern fixtures, fresh tile, and premium materials for a spa-like bathroom experience."
          image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower & Bathtub Upgrade", url: `${siteConfig.url}/shower-bathtub-upgrade` },
          ]}
        />

        <ServiceProcess
          title="Shower & Bathtub Upgrade Process"
          subtitle="Our Process"
          description="A comprehensive upgrade process that transforms your bathroom with minimal disruption."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation",
              description: "We assess your current setup, discuss upgrade goals, and provide recommendations.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design & Selection",
              description: "Choose fixtures, tile, hardware finishes, and features for your upgrade.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Preparation",
              description: "Protect surrounding areas, remove old fixtures, and prep surfaces.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Install new fixtures, tile, enclosures, and hardware with precision.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Final Touches",
              description: "Sealing, testing, cleanup, and walkthrough to ensure satisfaction.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Shower & Bathtub Upgrades"
          subtitle="Common Problems Fixed"
          description="We address common bathroom issues through professional upgrades and improvements."
          issues={[
            {
              problem: "Outdated fixtures that look old and function poorly.",
              solution: "Modern fixtures with better water pressure and contemporary styling.",
            },
            {
              problem: "Stained, cracked, or discolored tile and grout.",
              solution: "Fresh tile installation with properly sealed, mold-resistant grout.",
            },
            {
              problem: "Old shower doors that are hard to clean and look dated.",
              solution: "New frameless or semi-frameless glass enclosures for modern appeal.",
            },
            {
              problem: "Poor water pressure and inconsistent temperature.",
              solution: "Upgraded valves and showerheads for optimal performance.",
            },
            {
              problem: "Lack of storage and organization in shower area.",
              solution: "Built-in niches, corner shelves, and smart storage solutions.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Shower & Bathtub Upgrades in Chandler"
          subtitle="Why Upgrade"
          benefits={[
            {
              icon: "Sparkles",
              title: "Modern Look",
              description: "Contemporary fixtures and finishes instantly update your bathroom.",
            },
            {
              icon: "Droplets",
              title: "Better Function",
              description: "Improved water pressure, temperature control, and drainage.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Value",
              description: "Updated bathrooms are a top priority for home buyers.",
            },
            {
              icon: "Timer",
              title: "Quick Upgrade",
              description: "Transform your bathroom in days, not weeks.",
            },
            {
              icon: "ShieldCheck",
              title: "Quality Materials",
              description: "Durable fixtures and surfaces built to last.",
            },
          ]}
        />

        <Tips
          title="Shower & Bathtub Upgrade Tips"
          subtitle="Maximize Your Upgrade"
          description="Expert tips to get the most from your shower and bathtub upgrade investment."
          tips={[
            "Coordinate all fixture finishes (chrome, brushed nickel, matte black) for a cohesive look.",
            "Consider a rain showerhead and handheld combo for versatility and luxury.",
            "Choose large-format tiles to minimize grout lines and simplify cleaning.",
            "Add a built-in niche for shampoo storage to eliminate shower caddies.",
            "Install a quality exhaust fan to protect your new surfaces from humidity damage.",
          ]}
        />

        <ServiceCTA 
          title="Ready for a shower and bathtub upgrade in Chandler?" 
          description="Get a free consultation and see how upgrades can transform your bathroom." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Shower & Bathtub Upgrade Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional bathroom upgrade services throughout Chandler and surrounding areas.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and East Valley communities</li>
                <li>• Licensed and insured contractors</li>
                <li>• Free estimates and design consultations</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Shower & Bathtub Upgrade in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need shower and bathtub upgrades in Chandler, AZ?" 
          description="Contact us today for professional upgrades with quality materials and expert installation." 
        />
      </main>
      <Footer />
    </>
  );
}
