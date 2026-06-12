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
import { GoogleMap } from "@/components/services/google-map";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Walk-In Shower Installation Chandler AZ - Professional Services",
  description: "Walk-in shower installation services and shower company in Chandler, AZ. Barrier-free designs, ADA accessibility, handicap showers. Professional contractors. Free quotes. Starting from $6,000.",
  openGraph: {
    title: "Walk-In Shower Installation Chandler AZ - ADA Options",
    description: "Professional walk-in shower installation in Chandler AZ. Barrier-free designs, ADA options, and luxury finishes. Licensed & insured. Free estimates!",
    url: `${siteConfig.url}/walk-in-showers/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-shower.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Professional Walk-In Shower Installation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walk-In Shower Installation Chandler AZ - ADA Options",
    description: "Safe & stylish walk-in showers in Chandler AZ. Starting from $6,000. Free estimates!",
    images: [`${siteConfig.url}/images/og-shower.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
  robots: { index: false, follow: true },
};

const faqs = serviceContent["walk-in-showers"].faqs;

const chandlerLocation = {
  lat: 33.3009334,
  lng: -111.9605964,
};

const otherServices = getRelatedServices("/walk-in-showers/");

export default function WalkInShowersPage() {
  const serviceData = serviceContent["walk-in-showers"];
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Walk In Showers", url: "https://arzhomeremodeling.com/walk-in-showers/" } ]} />
<ServiceSchema
        serviceName="Walk-In Shower Installation in Chandler, Arizona"
        serviceDescription="Professional walk-in shower installation in Chandler, Arizona. Barrier-free designs, frameless glass enclosures, and ADA-compliant options."
        serviceUrl={`${siteConfig.url}/walk-in-showers`}
      />
      <PriceSchema
        serviceName="Walk-In Shower Installation"
        priceRange="$6,000 - $18,000"
        url={`${siteConfig.url}/walk-in-showers/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Curbless & Walk-In Shower Installations"
          subtitle="Accessible, Zero-Threshold Showers Built with Waterproof Integrity"
          description="Upgrade to a modern, barrier-free walk-in shower designed for safety, comfort, and premium aesthetics. Our certified specialists custom-build every project with heavy-duty structural framing, advanced Schluter-KERDI waterproofing systems, and durable, slip-resistant materials, all backed by a guaranteed fixed-price contract."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Walk-In Showers", url: `${siteConfig.url}/walk-in-showers` },
          ]}
        />

        <ServiceProcess
          title="Walk-In Shower Process"
          subtitle="Our Process"
          description="A specialized design and construction workflow ensuring your walk-in shower is beautiful, safe, and built to last."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Space & Safety Consultation",
              description: "We evaluate the current tub/shower space, check user mobility needs, and design a custom entry plan (curbed, low-profile, or zero-threshold curbless).",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Plumbing & Valve Upgrades",
              description: "We inspect the subfloor and wall framing, update the internal mixing valves, and prepare high-volume drain pipes to prevent shower pan overflows.",
            },
            {
              number: "03",
              icon: "ShieldCheck",
              title: "Waterproofing Membrane",
              description: "We install a vapor-tight waterproofing barrier (like Schluter-KERDI) on all shower walls and the sloped floor pan to ensure 100% leak protection.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Tile Setting & Fixture Mounts",
              description: "Our craftsmen set your selected porcelain, ceramic, or stone tile, install built-in wall niches/benches, and secure the sliding or frameless glass doors.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Sealing & Flow Walkthrough",
              description: "We apply high-grade silicone sealant to prevent leaks, run multi-cycle drainage tests, and guide you through the finished walk-in shower features.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Walk-In Showers"
          subtitle="Common Problems Fixed"
          description="We address the most common design and installation challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Walk-In Showers"
          subtitle="Why Choose Walk-In Showers"
          benefits={serviceData.benefits}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Safe and Accessible Universal Shower Design in Chandler
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Home safety is important for everyone. Our <strong>walk-in shower company in Chandler AZ</strong> designs curbless, 
              barrier-free showers that allow you to remain in your home comfortably and safely for years to come. If you're wondering what these modifications run, check our complete <Link href="/blog/walk-in-shower-cost-chandler-az/" className="text-primary hover:underline">walk-in shower cost Chandler</Link> guide. We specialize in accessible remodeling that blends high-end styling with safety.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Zero Threshold Curbless Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Traditional showers require stepping over a high threshold. We build zero-curb showers by recessing the subfloor 
                  level, creating a completely flat entry that is wheelchair and walker friendly.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Stud-Anchored Grab Bars</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We never attach safety bars to thin drywall or tile backer alone. We anchor every safety grab bar directly into the 
                  original wood wall studs to support full adult body weight securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Walk-In Shower Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your walk-in shower and extend its lifespan in Chandler's climate."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for a custom walk-in shower in Chandler?" 
          description="Get a free consultation with design options, material selections, and transparent pricing." 
        />

        <SubServices 
          title="Related Services in Chandler"
          subtitle="More Solutions"
          description="We provide comprehensive bathroom remodeling services designed for your needs."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials category="walk-in-showers" />

        <ContactSection />

        
      </main>
      <Footer />
    </>
  );
}

