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
import LocalTrust from "@/components/home/local-trust";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";


export const metadata: Metadata = {title: "Tub-to-Shower Conversions Chandler AZ | Walk-In Showers | ARZ",description: "Convert your unused tub into a spacious curbless walk-in shower in Chandler, AZ. Low-profile entry, custom tile work, and fast installs. Free quote!",
  openGraph: {title: "Tub To Shower Conversion | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tub to shower conversion, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/tub-to-shower-conversion/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-shower.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Professional Tub-to-Shower Conversion in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Tub To Shower Conversion | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore tub to shower conversion, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-shower.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion/`,
  },
};

const faqs = serviceContent["tub-to-shower-conversion"].faqs;

const chandlerLocation = {
  lat: 33.3009334,
  lng: -111.9605964,
};

const otherServices = getRelatedServices("/tub-to-shower-conversion/");

export default function TubToShowerConversionPage() {
  const serviceData = serviceContent["tub-to-shower-conversion"];
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Tub To Shower Conversion", url: "https://arzhomeremodeling.com/tub-to-shower-conversion/" } ]} />
<ServiceSchema
        serviceName="Tub to Shower Conversion in Chandler, Arizona"
        serviceDescription="Professional tub to shower conversion in Chandler, Arizona. Convert your bathtub to a modern walk-in shower with expert installation."
        serviceUrl={`${siteConfig.url}/tub-to-shower-conversion`}
      />
      <PriceSchema
        serviceName="Tub to Shower Conversion"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/tub-to-shower-conversion/`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Seamless Tub-to-Shower Conversions"
          subtitle="Convert Unused Tubs Into Modern, High-Performance Walk-In Showers"
          description="Maximize your bathroom's footprint by swapping your high-threshold bathtub for a spacious, leak-proof walk-in shower. Our certified team handles the entire conversion, including framing upgrades, high-capacity drain plumbing, and vapor-tight Schluter-KERDI waterproofing, backed by a clear fixed-price contract."
          image="/images/services/bathroom-tile-remodel-az.jpg"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub to Shower Conversion", url: `${siteConfig.url}/tub-to-shower-conversion` },
          ]}
        />

        <ServiceProcess
          title="Tub Conversion Process"
          subtitle="Our Process"
          description="A detailed conversion workflow that transforms your unused, high-threshold bathtub into a safe, spacious walk-in shower."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Initial Consultation & Layout",
              description: "We inspect your existing garden or alcove tub, measure the footprint, evaluate the drain alignment, and design the new walk-in shower configuration.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Bathtub Removal & Demolition",
              description: "We carefully remove the heavy bathtub unit, extract the old surround materials down to the studs, check for mold or wood rot, and prepare the subfloor.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Drain & Plumbing Conversion",
              description: "We expand your drain piping from a standard 1.5-inch tub drain to a high-capacity 2-inch shower drain to handle modern rainfall showerheads safely.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Waterproofing & Shower Build",
              description: "We install a pre-sloped shower pan, lay down vapor-tight Schluter waterproofing, build custom tile niches, and install your selected fixtures.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Glass Enclosure & Walkthrough",
              description: "We set custom frameless glass enclosures, apply mold-resistant silicone sealant, test water flow, and review the final conversion with you.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Tub to Shower Conversion"
          subtitle="Common Problems Fixed"
          description="We address the most common conversion challenges Chandler homeowners face."
          issues={serviceData.issues}
        />

        <Benefits
          title="Benefits of Tub to Shower Conversion"
          subtitle="Why Convert Your Tub"
          benefits={serviceData.benefits}
        />
        <LocalTrust cityName="Chandler" />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Leading Tub to Shower Conversion Experts in Arizona
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When searching for a tub-to-shower conversion specialist, you want an experienced team that understands both the aesthetic and structural requirements of Arizona homes. We specialize in custom shower conversions across Chandler, Queen Creek, and the surrounding East Valley. To see design possibilities for your layout, read our guide on [tub-to-shower conversion ideas for Chandler](/blog/tub-to-shower-conversion-ideas-chandler/) homes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our conversion services are designed to maximize your bathroom's footprint, providing a more open and modern feel while significantly improving accessibility. As leading <Link href="/" className="font-semibold underline hover:text-primary transition-colors">bathroom renovation contractors in Chandler</Link>, we guarantee a flawless finish on every project.
            </p>
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <p className="text-foreground font-medium mb-4">
                We offer competitive 0% financing options on qualifying projects: 
                <Link href="/financing/" className="text-primary hover:underline ml-1">
                  see our bathroom remodeling financing options
                </Link>.
              </p>
            </div>
          </div>
        </section>

        <Tips
          title="Tub to Shower Conversion Tips"
          subtitle="Planning Your Conversion"
          description="Expert advice for planning and maintaining your new walk-in shower after conversion."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Call Now for Your Free No-Obligation Conversion Quote!" 
          description="Ready for a tub-to-shower swap? Click to call our Chandler experts now and save space in your bathroom." 
        />

        <SubServices 
          title="Explore Other Services"
          subtitle="More Solutions"
          description="We provide a full suite of bathroom remodeling services in Chandler."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials category="tub-to-shower-conversion" />

        <ContactSection />

        
      </main>
      <Footer />
    </>
  );
}

