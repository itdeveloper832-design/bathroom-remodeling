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
import {  ServiceSchema, FAQSchema , BreadcrumbSchema, PriceSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import LocalTrust from "@/components/home/local-trust";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import ShowerTypes from "@/components/shower-types";
import ShowerCostSection from "@/components/shower-cost-section";
import ChandlerShowerMaterials from "@/components/chandler-shower-materials";

import ShowerGallery from "@/components/shower-gallery";


export const metadata: Metadata = {title: "Custom Shower Remodeling Chandler AZ | Walk-In Tile | ARZ",description: "Ditch your old tub for a custom tiled walk-in shower in Chandler, AZ. Waterproof Schluter-Kerdi systems, frameless glass, and custom benches. Call now!",
  openGraph: {title: "Shower Remodeling | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore shower remodeling, custom showers, tile, vanities, clear pricing, and free estimates.",
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
    card: "summary_large_image",title: "Shower Remodeling | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore shower remodeling, custom showers, tile, vanities, clear pricing, and free estimates.",
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
      <PriceSchema
        serviceName="Shower Remodeling"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/shower-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Custom Shower Systems Engineered to Last"
          subtitle="Vapor-Tight Schluter-KERDI Waterproofing & Custom Glass Enclosures"
          description="Upgrade your daily routine with a premium tile or curbless walk-in shower. Our certified master installers secure every system with advanced waterproofing, custom-fit frameless glass, and stain-resistant epoxy grouting. We guarantee a fixed price and lifetime protection against leaks and moisture damage."
          image="/images/services/chandler-bathroom-remodel.jpg"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Shower Remodeling", url: `${siteConfig.url}/shower-remodeling/` },
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
              When searching for a top-tier shower remodeler in the Phoenix East Valley, homeowners choose ARZ Home Remodeling. If you are budgeting for a new installation, check our [walk-in shower cost Chandler](/blog/walk-in-shower-cost-chandler-az/) guide. As a premier bathroom contractor, we deliver complete peace of mind, covering everything from structural framing to final sealant.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Chandler Shower Solutions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We are the top choice for custom shower installations in Chandler, AZ. From custom walk-in tile designs to professional acrylic shower pans, our team handles plumbing reconfigurations, waterproofing, and finish trim with expert care.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Mesa Shower Remodeling</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Looking for an expert shower installer in Mesa, AZ? We provide high-end shower remodeling services and custom layouts. Whether you are budgeting for standard updates or a full luxury curbless bath upgrade, we use waterproof substrates to guarantee leak-proof results.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">Gilbert & Tempe Coverages</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We serve all of Gilbert as a trusted shower contractor. Homeowners seek us out for custom glass enclosures, tile benches, and niches. We also provide professional shower installations and design coordination in Tempe, AZ.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ShowerTypes />

        <ShowerCostSection />

        <ServiceProcess
          title="Shower Remodel Process"
          subtitle="Our Process"
          description="A specialized, step-by-step approach to custom-building a beautiful, leak-proof shower in your Chandler home."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Consultation & Shower Design",
              description: "We review your shower goals, measure your existing footprint, and plan custom tile layouts, curb styles, and niche placements.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Substrate & Plumbing Prep",
              description: "We demount the old enclosure, update or relocate valves and drain lines, install pressure-balanced fixtures, and run pre-tests.",
            },
            {
              number: "03",
              icon: "ShieldCheck",
              title: "Schluter Waterproofing",
              description: "We install a vapor-tight Schluter-KERDI waterproofing membrane on all shower walls and the floor pan to guarantee a 100% leak-proof backing.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Tile Setting & Fixture Install",
              description: "Our tile specialists lay your ceramic or porcelain tiles, build integrated niches/benches, and secure premium fixtures.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Glass Enclosure & Walkthrough",
              description: "We install custom-cut frameless glass panels, mount premium hardware, run drainage flow checks, and complete the final walkthrough.",
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
                We offer competitive 0% financing options on qualifying projects - 
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

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

