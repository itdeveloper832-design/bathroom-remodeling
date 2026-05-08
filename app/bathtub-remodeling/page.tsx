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
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import LocalTrust from "@/components/home/local-trust";
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Bathtub Remodeling Chandler AZ | Tub Replacement & Tub-to-Shower Conversion",
  description:
    "Expert bathtub remodeling in Chandler AZ. Tub replacement, bathtub-to-shower conversion, soaking tub installation. Licensed AZ contractor. Free estimates — call +12293065591.",
  keywords: [
    // Primary — Bathtub cluster
    "bathtub remodeling chandler az",
    "bathtub remodel chandler az",
    "tub replacement chandler az",
    "bathroom refinishers near me",
    "bathtub remodeling contractor chandler az",
    "bathroom remodeling chandler az",
    "bathtub remodel cost chandler az",
    "affordable bathtub remodeling chandler az",
  ],
  openGraph: {
    title: "Bathtub Remodeling Chandler AZ | Tub Replacement & Conversion",
    description:
      "Expert bathtub remodeling in Chandler AZ. Tub replacement, tub-to-shower conversion, soaking tub installation. Free estimates!",
    url: `${siteConfig.url}/bathtub-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathtub-remodeling-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathtub Remodeling Chandler AZ - Tub Replacement & Conversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathtub Remodeling Chandler AZ | Free Estimates",
    description: "Expert bathtub remodeling in Chandler AZ. Tub replacement, tub-to-shower conversion. Free estimates!",
    images: [`${siteConfig.url}/images/bathtub-remodeling-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathtub-remodeling/`,
  },
};

const faqs = serviceContent["bathtub-remodeling"].faqs;

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

const otherServices = bathroomServices
  .filter(s => s.href !== "/bathtub-remodeling")
  .slice(0, 3);

export default function BathtubRemodelingPage() {
  const serviceData = serviceContent["bathtub-remodeling"];
  return (
    <>
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
          description="Ready to replace your outdated bathtub or convert that unused garden tub into a walk-in shower? Our licensed Chandler contractors handle tub removal, tub replacement, soaking tub installation, and tub-to-shower conversions with a fixed price and 2-year warranty."
          image="/images/optimized/photo-1600566752355-35792bedcfea.webp"
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
              Tub Replacement vs. Refinishing in Chandler
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Many homeowners search for <strong>bathroom refinishers near me</strong> as a quick fix for a stained or outdated tub. 
              While refinishing can provide a temporary cosmetic lift, it often fails within 2-3 years due to Chandler's heavy mineral usage. 
              Our <strong>bathtub remodeling contractor chandler az</strong> team recommends a full tub replacement for a permanent, 
              leak-proof solution that adds real value to your home.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide <strong>affordable bathtub remodeling in Chandler AZ</strong> that gives you a brand-new, modern tub 
              backed by a workmanship warranty—something you won't get from a simple resurfacing job.
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

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area Map for Tub Replacements in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners across Chandler, Arizona with premium bath upgrade services, quality materials, and expert installation.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding areas</li>
                <li>• Licensed and insured local contractors</li>
                <li>• Free estimates and consultations available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Tub Replacement in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need a tub upgrade in Chandler, AZ?" 
          description="Contact us today for a free consultation and estimate on your new bathing space." 
        />

        {/* INTERNAL LINKING — Step 6 of SEO strategy */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Related Bathroom Services in Chandler
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/bathroom-remodeling-chandler-az/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Bathroom Remodeling Chandler AZ
                </p>
                <p className="text-muted-foreground text-xs mt-1">Full bathroom renovations — all services</p>
              </a>
              <a
                href="/shower-remodeling/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Shower Remodeling in Chandler
                </p>
                <p className="text-muted-foreground text-xs mt-1">Walk-in showers, frameless glass, custom tile</p>
              </a>
              <a
                href="/tub-to-shower-conversion/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Tub-to-Shower Conversion
                </p>
                <p className="text-muted-foreground text-xs mt-1">Most popular service in Chandler homes</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
