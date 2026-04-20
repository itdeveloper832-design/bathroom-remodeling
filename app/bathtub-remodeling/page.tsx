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
  title: "Bathtub to Shower Conversion Chandler AZ | Best",
  description: "Best bathtub to shower conversion Chandler AZ. Affordable bathtub to shower conversion cost, professional bathtub remodeling services. Free estimates!",
  keywords: ["bathtub to shower conversion Chandler AZ", "bathtub to shower conversion cost Chandler AZ", "bathtub to shower conversion price Chandler AZ", "bathtub to shower conversion professional Chandler AZ", "affordable bathtub to shower conversion Chandler AZ", "bathtub to shower conversion estimate Chandler AZ", "bathtub to shower conversion near me Chandler AZ", "bathtub to shower conversion services Chandler AZ", "hire bathtub to shower conversion Chandler AZ", "company bathtub to shower conversion Chandler AZ"],
  openGraph: {
    title: "Bathtub to Shower Conversion Chandler AZ | Best",
    description: "Best bathtub to shower conversion Chandler AZ. Affordable bathtub remodeling services!",
    url: `${siteConfig.url}/bathtub-remodeling`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathtub-remodeling-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathtub Remodeling - Chandler Bathroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathtub to Shower Conversion Chandler AZ | Best",
    description: "Best bathtub to shower conversion Chandler AZ. Affordable bathtub remodeling!",
    images: [`${siteConfig.url}/images/bathtub-remodeling-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathtub-remodeling`,
  },
};

const faqs = [
  {
    question: "What is the bathtub to shower conversion cost in Chandler AZ?",
    answer: "Bathtub to shower conversion cost in Chandler AZ ranges from $5,000-$15,000. Affordable bathtub to shower conversion starts at $5,000. Professional bathtub to shower conversion with custom features exceeds $15,000. Get your free bathtub to shower conversion estimate!"
  },
  {
    question: "Do you offer bathtub to shower conversion services in Chandler AZ?",
    answer: "Yes! We offer complete bathtub to shower conversion services in Chandler AZ. Our bathtub to shower conversion installation includes tub removal, plumbing, and walk-in shower installation. Hire bathtub to shower conversion contractor today!"
  },
  {
    question: "Are you professional bathtub to shower conversion contractors in Chandler AZ?",
    answer: "Yes! We're professional bathtub to shower conversion contractors in Chandler AZ with 15+ years experience. Company bathtub to shower conversion services are fully licensed and insured. Best bathtub to shower conversion near me!"
  },
  {
    question: "What is the bathtub to shower conversion price in Chandler AZ?",
    answer: "Bathtub to shower conversion price in Chandler AZ varies by scope. Affordable bathtub to shower conversion options available. Get your bathtub to shower conversion quote for transparent pricing and bathtub to shower conversion estimate!"
  },
  {
    question: "Do you offer affordable bathtub to shower conversion in Chandler AZ?",
    answer: "Yes! We offer affordable bathtub to shower conversion in Chandler AZ with flexible financing. Our bathtub to shower conversion services include budget-friendly options. Contact us for bathtub to shower conversion near me Chandler AZ!"
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function BathtubRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathtub Remodeling in Chandler, Arizona"
        serviceDescription="Expert bathtub remodeling in Chandler, Arizona. Modern tub installations, luxury upgrades, and professional renovations."
        serviceUrl={`${siteConfig.url}/bathtub-remodeling`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathtub to Shower Conversion Chandler AZ"
          subtitle="Best Bathtub to Shower Conversion Services Chandler AZ"
          description="Professional bathtub to shower conversion Chandler AZ. Affordable bathtub to shower conversion cost, best bathtub remodeling services. Hire bathtub to shower conversion contractor near me!"
          image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathtub Remodeling", url: `${siteConfig.url}/bathtub-remodeling` },
          ]}
        />

        <ServiceProcess
          title="Bathtub Remodeling Process"
          subtitle="Our Process"
          description="Professional bathtub remodeling with precise planning and quality installation for Chandler homeowners."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Design Consultation",
              description: "We assess your space, discuss tub options, and plan the perfect bathtub remodeling solution.",
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
              description: "Careful removal of old tub, plumbing updates, and surface preparation for installation.",
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
              description: "Surround installation, trim work, and final testing to complete your bathtub remodeling.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Bathtub Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common bathtub remodeling challenges Chandler homeowners face."
          issues={[
            {
              problem: "Old, stained, or cracked bathtubs that look outdated.",
              solution: "Modern bathtub installations with fresh finishes and contemporary designs.",
            },
            {
              problem: "Uncomfortable tub depth or awkward positioning.",
              solution: "Ergonomic tub selection with proper depth and positioning for comfort.",
            },
            {
              problem: "Leaking tubs causing water damage.",
              solution: "Professional waterproofing and sealed installations to prevent leaks.",
            },
            {
              problem: "Limited storage around the bathtub area.",
              solution: "Built-in niches and coordinated storage solutions for bathing essentials.",
            },
            {
              problem: "Mismatched fixtures and outdated hardware.",
              solution: "Coordinated fixture packages that complement your bathroom design.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Bathtub Remodeling in Chandler"
          subtitle="Why It Matters"
          benefits={[
            {
              icon: "Bath",
              title: "Luxury Comfort",
              description: "Modern tubs with ergonomic designs for ultimate relaxation and comfort.",
            },
            {
              icon: "ShieldCheck",
              title: "Leak Protection",
              description: "Professional waterproofing and sealed installations prevent water damage.",
            },
            {
              icon: "Sparkles",
              title: "Modern Aesthetics",
              description: "Contemporary tub designs that enhance your bathroom's visual appeal.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Home Value",
              description: "Quality bathtub remodeling adds significant value to your Chandler home.",
            },
            {
              icon: "Timer",
              title: "Quick Installation",
              description: "Efficient remodeling process minimizes disruption to your daily routine.",
            },
          ]}
        />

        <Tips
          title="Bathtub Remodeling Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your newly remodeled bathtub and extend its lifespan."
          tips={[
            "Use non-abrasive cleaners to protect enamel and acrylic finishes from scratches.",
            "Inspect caulk lines quarterly and reapply at the apron and corners as needed.",
            "Add slip-resistant mats or textured surfaces for safety, especially for seniors and children.",
            "Run warm water before filling to preheat the tub surface for longer heat retention.",
            "Choose WaterSense fixtures to reduce water usage without compromising performance.",
          ]}
        />

        <ServiceCTA 
          title="Ready for professional bathtub remodeling in Chandler?" 
          description="Get expert design consultation, quality materials, and professional installation for your dream bathtub." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area Map for Bathtub Remodeling in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners across Chandler, Arizona with professional bathtub remodeling services, quality materials, and expert installation.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding areas</li>
                <li>• Licensed and insured bathtub remodeling contractors</li>
                <li>• Free estimates and consultations available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Bathtub Remodeling in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need bathtub remodeling services in Chandler, AZ?" 
          description="Contact us today for a free consultation and estimate on your bathtub remodeling project." 
        />
      </main>
      <Footer />
    </>
  );
}
