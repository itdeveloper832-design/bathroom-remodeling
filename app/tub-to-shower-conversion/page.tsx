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


export const metadata: Metadata = {
  title: "Tub to Shower Conversion Chandler AZ | Free Quote",
  description: "Replace your outdated bathtub with a modern walk-in shower. Fast installation and free estimates available.",
  openGraph: {
    title: "Tub-to-Shower Conversion | Chandler AZ",
    description: "Remove your unused garden tub & upgrade to a modern walk-in shower. Most popular remodel in Chandler. 1–2 week install, firm price, licensed AZ contractor.",
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
    card: "summary_large_image",
    title: "Tub-to-Shower Conversion | Chandler AZ",
    description: "Remove your unused garden tub & upgrade to a modern walk-in shower. Most popular remodel in Chandler. 1–2 week install, firm price, licensed AZ contractor.",
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
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Premium Tub to Shower Conversion in Chandler, AZ"
          subtitle="Transform Your Space with Licensed Walk-In Shower Experts"
          description="Don't let an unused bathtub waste valuable space in your bathroom. Our ROC Licensed experts specialize in high-quality tub-to-shower swaps, providing a safer, more modern, and more accessible bathing experience for your Chandler home."
          image="/images/services/bathroom-tile-remodel-az.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub to Shower Conversion", url: `${siteConfig.url}/tub-to-shower-conversion` },
          ]}
        />

        <ServiceProcess
          title="Tub to Shower Conversion Process"
          subtitle="Our Process"
          description="A complete conversion process that transforms your bathtub into a beautiful walk-in shower."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Free Consultation",
              description: "We assess your bathroom, discuss shower options, and plan the conversion layout.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Design Planning",
              description: "Select tile, fixtures, glass enclosure style, and accessibility features.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Tub Removal",
              description: "Careful bathtub removal, plumbing modification, and subfloor preparation.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Shower Installation",
              description: "Waterproofing, tile installation, glass enclosure, and fixture mounting.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Final Walkthrough",
              description: "Complete testing, sealing, and inspection to ensure perfect results.",
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
              When searching for the best <strong>tub to shower conversion companies near me</strong>, you want an experienced team that understands both the aesthetic and structural requirements of Arizona homes. We specialize in professional <strong>tub to shower conversion chandler</strong>, custom <strong>tub to shower conversion arizona</strong>, and nearby regional solutions like a <strong>tub to shower conversion queen creek</strong>. To see design possibilities for your layout, read our guide on [tub-to-shower conversion ideas for Chandler](/blog/tub-to-shower-conversion-ideas-chandler/) homes. While we primarily focus on <strong>tub to shower conversion near me</strong>, we can also discuss <strong>shower to tub conversions near me</strong> for those looking to add a soaking bath back into their home.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our <strong>bath to shower conversion near me</strong> services are designed to maximize your bathroom's footprint, providing a more open and modern feel while significantly improving accessibility. As leading <Link href="/" className="font-semibold underline hover:text-primary transition-colors">bathroom renovation contractors in Chandler</Link>, we guarantee a flawless finish every time.
            </p>
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <p className="text-foreground font-medium mb-4">
                We offer 0% financing on projects over $5,000: 
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

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Tub to Shower Conversion Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide expert tub to shower conversion services throughout Chandler and the greater Phoenix area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding areas</li>
                <li>• Licensed and insured contractors</li>
                <li>• Free in-home estimates available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Tub to Shower Conversion in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need tub to shower conversion in Chandler, AZ?" 
          description="Contact us today for professional conversion services and a free estimate." 
        />
      </main>
      <Footer />
    </>
  );
}

