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
import { bathroomServices } from "@/lib/bathroom-services";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Shower Remodeling Chandler AZ | Walk-In & Frameless Glass Showers | ARZ",
  description: "Custom walk-in showers, frameless glass & curbless designs in Chandler. Licensed crew, Schluter waterproofing, 2-year warranty. Free quote - (480) 306-5591.",
  openGraph: {
    title: "Shower Remodeling Chandler AZ | Walk-In & Frameless Glass Showers | ARZ",
    description: "Expert shower remodeling in Chandler AZ. Walk-in showers, frameless glass, custom tile. Licensed crew. Free quotes!",
    url: `${siteConfig.url}/shower-remodeling/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Remodeling Chandler AZ | Walk-In & Frameless Glass Showers | ARZ",
    description: "Expert shower remodeling in Chandler AZ. Walk-in showers, frameless glass, custom tile. Free estimates!",
    images: [`${siteConfig.url}/images/shower-remodeling-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-remodeling/`,
  },
};

const faqs = serviceContent["shower-remodeling"].faqs;

const otherServices = bathroomServices
  .filter(s => s.href !== "/shower-remodeling/")
  .slice(0, 3);

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
          title="Licensed Shower Remodeling in Chandler, AZ"
          subtitle="Expert Walk-In Shower Installation & Custom Tile"
          description="Elevate your bathroom with a custom shower designed for beauty and durability. From frameless glass enclosures to curbless walk-in entries, our Chandler team delivers high-end results with ROC Licensed expertise."
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Shower Remodeling Chandler AZ", url: `${siteConfig.url}/shower-remodeling/` },
          ]}
        />

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
                href="/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Bathroom Remodeling Chandler AZ
                </p>
                <p className="text-muted-foreground text-xs mt-1">Full bathroom renovation services</p>
              </Link>
              <Link
                href="/bathtub-remodeling/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Bathtub Remodeling Chandler AZ
                </p>
                <p className="text-muted-foreground text-xs mt-1">Tub replacement & tub-to-shower conversion</p>
              </Link>
              <Link
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub-to-Shower Conversion
                </p>
                <p className="text-muted-foreground text-xs mt-1">Convert unused garden tubs to walk-in showers</p>
              </Link>
            </div>
          </div>
        </section>

        <Testimonials category="shower-remodeling" />

        <ContactSection />

        <ServiceCTA 
          title="Ready for shower remodeling in Chandler, AZ?" 
          description="Call now for a same-week consultation and clear pricing on your new walk-in shower." 
        />
      </main>
      <Footer />
    </>
  );
}

