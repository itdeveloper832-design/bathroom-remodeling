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
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Tub to Shower Conversion Chandler AZ | Safe & Fast",
  description: "Expert tub to shower conversion Chandler AZ. Improve safety and style with a modern walk-in shower. Request your free estimate today!",
  keywords: ["tub to shower conversion Chandler", "tub to shower conversion price Chandler AZ", "tub to shower conversion cost Chandler AZ", "best tub to shower conversion Chandler AZ", "affordable tub to shower conversion Chandler AZ", "tub to shower conversion quote Chandler AZ", "tub to shower conversion estimate Chandler AZ", "tub to shower conversion contractor Chandler AZ", "bathtub to shower conversion cost Chandler AZ", "bathtub to shower conversion price Chandler AZ", "bathtub to shower conversion professional Chandler AZ", "hire tub to shower conversion Chandler AZ"],
  openGraph: {
    title: "Tub to Shower Conversion Chandler AZ | Best Price",
    description: "Best tub to shower conversion Chandler AZ. Affordable bathtub to shower conversion cost!",
    url: `${siteConfig.url}/tub-to-shower-conversion`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tub-to-shower-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Tub to Shower Conversion - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub to Shower Conversion Chandler AZ | Best Price",
    description: "Best tub to shower conversion Chandler AZ. Affordable bathtub to shower conversion!",
    images: [`${siteConfig.url}/images/tub-to-shower-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-to-shower-conversion`,
  },
};

const faqs = serviceContent["tub-to-shower-conversion"].faqs;

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

const otherServices = bathroomServices
  .filter(s => s.href !== "/tub-to-shower-conversion")
  .slice(0, 3);

export default function TubToShowerConversionPage() {
  const serviceData = serviceContent["tub-to-shower-conversion"];
  return (
    <>
      <ServiceSchema
        serviceName="Tub to Shower Conversion in Chandler, Arizona"
        serviceDescription="Professional tub to shower conversion in Chandler, Arizona. Convert your bathtub to a modern walk-in shower with expert installation."
        serviceUrl={`${siteConfig.url}/tub-to-shower-conversion`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Best Tub to Shower Conversion Chandler AZ"
          subtitle="Affordable Bathtub to Shower Conversion Cost Chandler AZ"
          description="Professional tub to shower conversion Chandler AZ. Best tub to shower conversion price, affordable bathtub to shower conversion, free tub to shower conversion estimate. Hire tub to shower conversion contractor today!"
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
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

        <Tips
          title="Tub to Shower Conversion Tips"
          subtitle="Planning Your Conversion"
          description="Expert advice for planning and maintaining your new walk-in shower after conversion."
          tips={serviceData.tips}
        />

        <ServiceCTA 
          title="Ready to convert your tub to a shower in Chandler?" 
          description="Get a free consultation and see how a walk-in shower can transform your bathroom." 
        />

        <SubServices 
          title="Explore Other Services"
          subtitle="More Solutions"
          description="We provide a full suite of bathroom remodeling services in Chandler."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

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
