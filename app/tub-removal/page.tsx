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
  title: "Tub Removal Chandler AZ | Bathtub Removal Service",
  description: "Professional bathtub removal services in Chandler, Arizona. Safe removal, proper disposal, and floor prep for your bathroom renovation project.",
  keywords: ["tub removal chandler az", "bathtub removal service", "remove old bathtub", "tub demolition chandler", "bathroom tub removal"],
  openGraph: {
    title: "Tub Removal Chandler AZ | Bathtub Removal Service",
    description: "Professional bathtub removal services in Chandler. Safe removal and proper disposal included.",
    url: `${siteConfig.url}/tub-removal`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tub-removal-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Tub Removal Services - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tub Removal Chandler AZ | Bathtub Removal Service",
    description: "Professional bathtub removal services in Chandler. Safe removal and proper disposal included.",
    images: [`${siteConfig.url}/images/tub-removal-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/tub-removal`,
  },
};

const faqs = [
  {
    question: "How much does bathtub removal cost in Chandler?",
    answer: "Bathtub removal in Chandler typically costs $300-$1,000 depending on tub type, accessibility, and disposal needs. Cast iron tubs cost more to remove due to weight. Our quotes include removal, hauling, and basic floor preparation."
  },
  {
    question: "How long does tub removal take?",
    answer: "Most bathtub removals are completed in 2-4 hours. Cast iron tubs may take longer due to their weight. We disconnect plumbing, remove the tub, and prepare the area for your next project phase."
  },
  {
    question: "Do you cap the plumbing after tub removal?",
    answer: "Yes! We properly cap all plumbing lines after tub removal to prevent water damage. If you're converting to a shower, we can prepare the plumbing for your new installation."
  },
  {
    question: "What happens to the floor after tub removal?",
    answer: "After removing the tub, we inspect and repair the subfloor as needed. We can prepare the surface for tile, shower pan installation, or whatever your renovation requires."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function TubRemovalPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathtub Removal in Chandler, Arizona"
        serviceDescription="Professional bathtub removal services in Chandler, Arizona. Safe removal, proper disposal, and floor preparation for bathroom renovations."
        serviceUrl={`${siteConfig.url}/tub-removal`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Tub Removal in Chandler, Arizona"
          subtitle="Professional Bathtub Removal Services in Chandler AZ"
          description="Expert bathtub removal with proper plumbing disconnection, safe extraction, and complete disposal for your renovation project."
          image="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Tub Removal", url: `${siteConfig.url}/tub-removal` },
          ]}
        />

        <ServiceProcess
          title="Bathtub Removal Process"
          subtitle="Our Process"
          description="A safe, efficient tub removal process that prepares your bathroom for renovation."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Assessment",
              description: "We evaluate tub type, accessibility, and plan the safest removal approach.",
            },
            {
              number: "02",
              icon: "Wrench",
              title: "Plumbing Disconnect",
              description: "Shut off water supply and properly disconnect all plumbing connections.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Safe Removal",
              description: "Careful extraction of the tub with protection for surrounding surfaces.",
            },
            {
              number: "04",
              icon: "Trash2",
              title: "Disposal & Hauling",
              description: "Complete removal of the tub and all debris from your property.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Floor Prep",
              description: "Plumbing caps, subfloor inspection, and preparation for next phase.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Tub Removal"
          subtitle="Common Problems Fixed"
          description="We handle the challenging aspects of tub removal that most homeowners cannot do themselves."
          issues={[
            {
              problem: "Heavy cast iron tubs that are impossible to move alone.",
              solution: "Professional extraction with proper equipment and trained personnel.",
            },
            {
              problem: "Complex plumbing connections that need proper disconnection.",
              solution: "Licensed plumbers ensure safe disconnection and proper capping.",
            },
            {
              problem: "Old tubs sealed with layers of caulk and adhesive.",
              solution: "Careful removal without damaging surrounding tile or walls.",
            },
            {
              problem: "Disposal challenges for large, heavy bathtubs.",
              solution: "Complete hauling and proper disposal included in our service.",
            },
            {
              problem: "Uncertainty about subfloor condition under the tub.",
              solution: "Thorough inspection and repair recommendations after removal.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Professional Tub Removal in Chandler"
          subtitle="Why Hire Professionals"
          benefits={[
            {
              icon: "ShieldCheck",
              title: "Safe Removal",
              description: "Avoid injury and property damage with professional extraction.",
            },
            {
              icon: "Wrench",
              title: "Proper Plumbing",
              description: "Licensed plumbers ensure connections are safely capped.",
            },
            {
              icon: "Timer",
              title: "Fast Service",
              description: "Complete removal in hours, not days of DIY struggle.",
            },
            {
              icon: "Trash2",
              title: "Full Disposal",
              description: "We haul away the tub and all debris from your property.",
            },
            {
              icon: "Layout",
              title: "Ready for Reno",
              description: "Floor prepared and ready for your next renovation phase.",
            },
          ]}
        />

        <Tips
          title="Tub Removal Planning Tips"
          subtitle="Before You Start"
          description="Important considerations before scheduling your bathtub removal service."
          tips={[
            "Know your tub material - cast iron, steel, fiberglass, or acrylic affects removal approach.",
            "Plan what replaces the tub before removal to coordinate plumbing modifications.",
            "Clear the bathroom of toiletries, towels, and decor before our team arrives.",
            "Ensure we have clear access through doorways and hallways for tub extraction.",
            "Consider keeping at least one tub in your home for resale value if applicable.",
          ]}
        />

        <ServiceCTA 
          title="Ready for professional tub removal in Chandler?" 
          description="Get a free quote for safe, efficient bathtub removal with proper disposal included." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Tub Removal Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional bathtub removal services throughout Chandler and the East Valley area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding communities</li>
                <li>• Same-day and next-day service available</li>
                <li>• Disposal and hauling included</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Tub Removal in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need bathtub removal in Chandler, AZ?" 
          description="Contact us for fast, professional tub removal with full disposal service." 
        />
      </main>
      <Footer />
    </>
  );
}
