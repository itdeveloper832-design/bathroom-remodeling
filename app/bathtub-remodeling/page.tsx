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
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import LocalTrust from "@/components/home/local-trust";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";

export const metadata: Metadata = {title: "Bathtub Remodeling Chandler AZ | Soaker Tub Upgrades | ARZ",description: "Upgrade your bathroom with custom bathtub remodeling in Chandler, AZ. Soaking tubs, freestanding tub installations, & custom surrounds. Call today!",
  openGraph: {title: "Bathtub Remodel Services | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathtub remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathtub-remodeling/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",title: "Bathtub Remodel Services | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathtub remodel services, custom showers, tile, vanities, clear pricing, and free estimates.",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathtub-remodeling/`,
  },
};

const faqs = serviceContent["bathtub-remodeling"].faqs;

const chandlerLocation = {
  lat: 33.3009334,
  lng: -111.9605964,
};

const otherServices = getRelatedServices("/bathtub-remodeling/");

export default function BathtubRemodelingPage() {
  const serviceData = serviceContent["bathtub-remodeling"];
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathtub Remodeling", url: "https://arzhomeremodeling.com/bathtub-remodeling/" } ]} />
<ServiceSchema
        serviceName="Bathtub Remodeling in Chandler, Arizona"
        serviceDescription="Expert tub replacements in Chandler, Arizona. Modern installations, luxury upgrades, and professional renovations."
        serviceUrl={`${siteConfig.url}/bathtub-remodeling/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathtub Remodeling in Chandler, AZ"
          subtitle="Tub Replacement, Bathtub-to-Shower Conversion & Soaking Tubs"
          description="Ready to replace your outdated bathtub or convert that unused garden tub into a walk-in shower? Our licensed Chandler contractors handle tub removal, tub replacement, soaking tub installation, and [tub-to-shower conversions](/blog/tub-to-shower-conversion-ideas-chandler/) with a fixed price and 2-year warranty."
          image="/images/projects/luxury-bathtub-remodel-az.webp"
          breadcrumbs={[
            { name: "Home", url: `${siteConfig.url}/` },
            { name: "Bathtub Remodeling Chandler AZ", url: `${siteConfig.url}/bathtub-remodeling/` },
          ]}
        />

        <ServiceProcess
          title="Our Renovation Process"
          subtitle="How It Works"
          description="A streamlined approach to upgrading your bathing space with precise planning and quality installation for Chandler homeowners."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Design Consultation",
              description: "We assess your space, discuss tub options, and plan the perfect upgrade solution.",
            },
            {
              number: "02",
              icon: "Bath",
              title: "Tub Selection",
              description: "Choose from alcove, freestanding, or soaking tubs with coordinated fixtures and finishes.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Removal & Prep",
              description: "Careful removal of the old tub, plumbing updates, and surface preparation for installation.",
            },
            {
              number: "04",
              icon: "Wrench",
              title: "Installation",
              description: "Professional tub installation with proper leveling, plumbing connections, and waterproofing.",
            },
            {
              number: "05",
              icon: "Sparkles",
              title: "Finishing Touches",
              description: "Surround installation, trim work, and final testing to complete your new tub installation.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Tub Replacements"
          subtitle="Common Problems Fixed"
          description="We address the most common bathing area challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Upgrading Your Tub in Chandler"
          subtitle="Why It Matters"
          benefits={serviceData.benefits}
        />
        <LocalTrust cityName="Chandler" />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Professional Bathtub Remodeling, Removal & Installation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you are looking for <strong>bathtub remodeling in mesa</strong>, <strong>bathtub remodeling in apache junction</strong>, or are searching for top-tier <strong>bathtub installation chandler az</strong> options, our crew is here. Many homeowners search for **bathroom refinishers near me** or **bathtub repair chandler az** as a quick fix for a stained or damaged tub surround. Resurfacing or cosmetic patches are temporary and fail within 2-3 years due to hard water mineral deposits. A complete, professional tub replacement is the only permanent solution.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you have asked <strong>how to take a bathtub out</strong> or looked for a safe <strong>bathtub removal near me</strong> to swap your tub, you will find that DIY demolition carries a high risk of water and wall damage. Our expert <strong>bathtub removal service</strong> ensures that the old tub is safely disconnected, extracted, and disposed of, protecting your drywall and flooring. We prepare the plumbing substrate and secure a flawless fit.
            </p>
          </div>
        </section>

        <Tips
          title="Tub Maintenance Tips"
          subtitle="Keep It Looking New"
          description="Expert advice to maintain your newly installed tub and extend its lifespan."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready for a new tub installation in Chandler?" 
          description="Get expert design consultation, quality materials, and professional installation for your dream bath." 
        />

        <SubServices 
          title="Other Bathroom Services in Chandler"
          subtitle="More Options"
          description="Looking for something else? We offer a variety of renovation solutions."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials category="bathtub-remodeling" />

        <ContactSection />

        

        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Related Bathroom Services in Chandler
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/bathroom-remodeling-chandler-az/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Bathroom Remodeling Chandler AZ
                </p>
                <p className="text-muted-foreground text-xs mt-1">Full bathroom renovations: all services</p>
              </Link>
              <Link
                href="/shower-remodeling/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Shower Remodeling in Chandler
                </p>
                <p className="text-muted-foreground text-xs mt-1">Walk-in showers, frameless glass, custom tile</p>
              </Link>
              <Link
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub-to-Shower Conversion
                </p>
                <p className="text-muted-foreground text-xs mt-1">Most popular service in Chandler homes</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
