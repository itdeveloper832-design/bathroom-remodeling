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
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import LocalTrust from "@/components/home/local-trust";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import ShowerTypes from "@/components/shower-types";
import ShowerCostSection from "@/components/shower-cost-section";
import ChandlerShowerMaterials from "@/components/chandler-shower-materials";
import ShowerCTAFooter from "@/components/shower-cta-footer";
import ShowerGallery from "@/components/shower-gallery";


export const metadata: Metadata = {
  title: "Shower Remodeling Chandler AZ | Custom Tiled Showers",
  description: `Ditch your old shower. We design custom tiled walk-in showers with frameless glass. Schluter waterproofed. Licensed ROC338304. Free quotes: ${siteConfig.phone}.`,
  openGraph: {
    title: "Shower Remodeling Chandler AZ | Custom Tiled Showers",
    description: "ARZ Home Remodeling builds custom showers in Chandler with Schluter-Kerdi waterproofing, frameless glass, and a 2-year workmanship warranty. Licensed, insured since 2010. ROC338304.",
    url: `${siteConfig.url}/shower-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-shower.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Tile Shower Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Remodeling Chandler AZ | Custom Tiled Showers",
    description: "Expert shower remodeling in Chandler AZ. Schluter-Kerdi waterproofing, frameless glass, custom tile. ROC Licensed #338304. Free estimates!",
    images: [`${siteConfig.url}/images/og-shower.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
};

const faqs = serviceContent["shower-remodeling"].faqs;

const otherServices = getRelatedServices("/shower-remodeling/");

export default function ShowerRemodelingPage() {
  const showerData = serviceContent["shower-remodeling"];
  
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Shower Remodeling", url: "https://arzhomeremodeling.com/shower-remodeling/" } ]} />
<ServiceSchema
        serviceName="Shower Remodeling in Chandler, Arizona"
        serviceDescription="Professional shower upgrades in Chandler, Arizona. Custom tile, frameless glass enclosures, waterproof installations, and premium fixtures."
        serviceUrl={`${siteConfig.url}/shower-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Custom Shower Remodeling in Chandler, AZ — Walk-In Showers, Frameless Glass & Tile Installs"
          subtitle="ARZ Home Remodeling builds custom showers in Chandler the right way — Schluter-Kerdi waterproofing behind every tile, frameless glass cut to your exact opening, and a 2-year workmanship warranty on qualifying projects. Licensed, insured, and Chandler-based since 2010. ROC338304."
          description="Free in-home estimate — same week availability. Shower remodels starting from $4,500. Serving Chandler, Ocotillo, Fulton Ranch, Sun Lakes & the East Valley"
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Shower Remodeling Chandler AZ", url: `${siteConfig.url}/shower-remodeling/` },
          ]}
        />

        <LocalTrust cityName="Chandler" />

        {/* REGIONAL SHOWER SERVICES COVERS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              East Valley Shower Remodeling & Installation Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              When searching for a top-tier <strong>shower remodel near me</strong>, <strong>shower renovation near me</strong>, or the best <strong>shower remodel companies near me</strong>, homeowners in the Phoenix East Valley choose ARZ Home Remodeling. If you are budgeting for a new installation, check our [walk-in shower cost Chandler](/blog/walk-in-shower-cost-chandler-az/) guide. As a premier <strong>shower renovation company</strong> and leader in <strong>arizona shower remodeling</strong>, we deliver complete peace of mind. Our specialized <strong>walk-in shower company services</strong> and professional <strong>walk-in shower installation services</strong> cover everything from structural framing to final sealant.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Chandler Shower Solutions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We are the top-rated <strong>shower remodeling company chandler</strong> and provider of premium <strong>shower remodeling services chandler</strong>. From a custom <strong>shower remodel chandler az</strong> or standard <strong>shower remodel chandler</strong> to professional <strong>shower installation services chandler</strong>, <strong>shower installation chandler</strong>, and <strong>shower installation chandler az</strong>, our team handles every step. Hire the best for your <strong>chandler shower remodeling</strong> or <strong>shower remodeling chandler</strong>.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Mesa Shower Remodeling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Looking for an expert <strong>shower remodeling company mesa</strong>? We provide high-end <strong>shower remodeling services mesa</strong> and custom <strong>shower remodeling in mesa</strong> layouts. Whether you are budgeting for standard <strong>shower remodeling mesa</strong> or a full luxury curbless bath upgrade, we use waterproof substrates to guarantee leak-proof results.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Gilbert & Tempe Coverages</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We serve all of Gilbert as a trusted <strong>shower remodeling company gilbert</strong>. Homeowners seek us out for a custom <strong>shower remodel gilbert az</strong>, <strong>shower remodel gilbert</strong>, or complete <strong>shower remodeling gilbert az</strong>. Our team handles everything from standard <strong>shower remodeling gilbert</strong> and <strong>shower remodeling in gilbert</strong> to specialized <strong>shower remodel gilbert arizona</strong> designs. We also provide <strong>shower installation tempe az</strong> services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ShowerTypes />

        <ShowerCostSection />

        <ServiceProcess
          title="Our Installation Process"
          subtitle="How We Work"
          description="A streamlined, mess-managed approach built for Chandler homeowners who want a faster, cleaner upgrade."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation & Measurements",
              description: "We review goals, measure your existing footprint, and plan waterproofing details.",
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
          title="Issues We Solve with Custom Showers"
          subtitle="Common Problems Fixed"
          description="We address the most common bathing area challenges Chandler homeowners face."
          issues={showerData.issues}
        />

        <Benefits
          title="Benefits of Upgrading Your Shower"
          subtitle="Why It Matters"
          description="Discover how professional updates transform your daily routine and add value to your home. Whether you need a simple upgrade or a complete shower renovation near me, we provide expert results."
          benefits={showerData.benefits}
        />

        <ShowerGallery />

        <ChandlerShowerMaterials />

        <LocalTrust cityName="Chandler" />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Specialized Shower Remodeling Services in Chandler
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Tile Shower Installation Chandler</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We specialize in custom <strong>tile shower installation services chandler</strong> homeowners trust, using moisture-proof substrates and high-grade porcelain 
                  that stands up to Chandler's heavy mineral water without staining or failing.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Accessible Shower Remodeling Chandler</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Safety is paramount. Our <strong>accessible shower remodeling in Chandler</strong> includes curbless entries, built-in benches, 
                  and ADA-compliant grab bars for a barrier-free bathing experience that doesn't compromise on luxury.
                </p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <p className="text-foreground font-medium mb-4">
                We offer 0% financing on bathroom projects over $5,000 - 
                <Link href="/financing/" className="text-primary hover:underline ml-1">
                  see our bathroom remodeling financing options
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <Tips
          title="Expert Maintenance Tips"
          subtitle="Professional Insights"
          description="Smart strategies to make the most of your newly upgraded bathing space."
          tips={showerData.tips}
        />

        <ServiceCTA 
          title="Call Now for Your Free No-Obligation Shower Quote!" 
          description="Need a new shower? Click to call our Chandler team today for a same-week consultation and fixed pricing." 
        />

        <SubServices 
          title="Explore Other Bathroom Services"
          subtitle="More Solutions"
          description="We offer a full range of renovation services beyond just showers."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        {/* INTERNAL LINKING - Step 6 of SEO strategy */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Related Bathroom Remodeling Services in Chandler
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub-to-Shower Conversion
                </p>
                <p className="text-muted-foreground text-xs mt-1">Convert unused garden tubs to walk-in showers</p>
              </Link>
              <Link
                href="/master-bathroom-remodel/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Master Bathroom Remodel
                </p>
                <p className="text-muted-foreground text-xs mt-1">Luxury master bath renovations</p>
              </Link>
              <Link
                href="/bathroom-tile-installation/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Bathroom Tile Installation
                </p>
                <p className="text-muted-foreground text-xs mt-1">Expert tile installation and replacement</p>
              </Link>
            </div>
          </div>
        </section>

        <Testimonials category="shower-remodeling" />

        <ShowerCTAFooter />
      </main>
      <Footer />
    </>
  );
}

