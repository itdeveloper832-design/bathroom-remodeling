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
  title: "Tub to Shower Conversion Chandler AZ | Best Price",
  description: "Best tub to shower conversion Chandler AZ. Affordable bathtub to shower conversion cost, professional installation. Free tub to shower conversion quote!",
  keywords: ["tub to shower conversion Chandler AZ", "tub to shower conversion price Chandler AZ", "tub to shower conversion cost Chandler AZ", "best tub to shower conversion Chandler AZ", "affordable tub to shower conversion Chandler AZ", "tub to shower conversion quote Chandler AZ", "tub to shower conversion estimate Chandler AZ", "tub to shower conversion contractor Chandler AZ", "bathtub to shower conversion cost Chandler AZ", "bathtub to shower conversion price Chandler AZ", "bathtub to shower conversion professional Chandler AZ", "hire tub to shower conversion Chandler AZ"],
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

const faqs = [
  {
    question: "What is the tub to shower conversion cost in Chandler AZ?",
    answer: "Tub to shower conversion cost in Chandler AZ ranges from $5,000-$15,000. Affordable tub to shower conversion starts around $5,000, while best tub to shower conversion with custom features exceeds $15,000. Get your free tub to shower conversion quote today!"
  },
  {
    question: "How do I hire tub to shower conversion contractor in Chandler AZ?",
    answer: "To hire tub to shower conversion contractor in Chandler AZ, contact us for a free tub to shower conversion estimate. Our professional tub to shower conversion services include consultation, design, and installation. We're the best tub to shower conversion company in Chandler AZ."
  },
  {
    question: "What is bathtub to shower conversion price in Chandler AZ?",
    answer: "Bathtub to shower conversion price in Chandler AZ varies by scope. Affordable bathtub to shower conversion starts at $5,000. Our bathtub to shower conversion services include professional installation and free bathtub to shower conversion estimate."
  },
  {
    question: "Do you offer affordable tub to shower conversion in Chandler AZ?",
    answer: "Yes! We offer affordable tub to shower conversion in Chandler AZ with flexible financing. Our tub to shower conversion services include budget-friendly options. Get your tub to shower conversion quote for transparent pricing!"
  },
  {
    question: "Are you professional bathtub to shower conversion contractors in Chandler AZ?",
    answer: "Yes! We're professional bathtub to shower conversion contractors in Chandler AZ with 15+ years experience. Our bathtub to shower conversion installation services are fully licensed and insured. Contact us for bathtub to shower conversion near me!"
  },
  {
    question: "What tub to shower conversion services do you offer in Chandler AZ?",
    answer: "Our tub to shower conversion services in Chandler AZ include: complete tub to shower conversion, bathtub to shower conversion installation, walk-in shower conversion, and tub removal. Company tub to shower conversion services available!"
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function TubToShowerConversionPage() {
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
          description="We solve common bathroom challenges through professional tub to shower conversions."
          issues={[
            {
              problem: "Unused bathtubs taking up valuable bathroom space.",
              solution: "Convert to a spacious walk-in shower that utilizes the space more efficiently.",
            },
            {
              problem: "Difficult tub entry for seniors or those with mobility issues.",
              solution: "Barrier-free walk-in showers with optional grab bars and seating.",
            },
            {
              problem: "Outdated tub-shower combos that look dated.",
              solution: "Modern walk-in shower designs with contemporary tile and glass.",
            },
            {
              problem: "Mold and mildew buildup in old tub surrounds.",
              solution: "Fresh, properly waterproofed surfaces that resist mold growth.",
            },
            {
              problem: "Small bathrooms that feel cramped.",
              solution: "Open shower designs with frameless glass that visually expand the space.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Tub to Shower Conversion in Chandler"
          subtitle="Why Convert Your Tub"
          benefits={[
            {
              icon: "Layout",
              title: "More Space",
              description: "Walk-in showers often feel larger and more open than tub-shower combos.",
            },
            {
              icon: "Accessibility",
              title: "Easier Access",
              description: "Step-in or curbless entry is safer and more convenient for all ages.",
            },
            {
              icon: "Sparkles",
              title: "Modern Look",
              description: "Contemporary shower designs update your bathroom instantly.",
            },
            {
              icon: "Timer",
              title: "Quick Showers",
              description: "Walk-in showers are more practical for busy daily routines.",
            },
            {
              icon: "TrendingUp",
              title: "Home Value",
              description: "Modern showers are highly desirable to today's home buyers.",
            },
          ]}
        />

        <Tips
          title="Tub to Shower Conversion Tips"
          subtitle="Planning Your Conversion"
          description="Expert advice for planning and maintaining your new walk-in shower after conversion."
          tips={[
            "Keep at least one bathtub in your home if you have young children or plan to sell.",
            "Consider a curbless design for maximum accessibility and modern aesthetics.",
            "Choose slip-resistant tile for the shower floor to prevent accidents.",
            "Install a built-in niche for shampoo and soap storage to keep surfaces clear.",
            "Add a handheld showerhead for flexibility and easier cleaning.",
          ]}
        />

        <ServiceCTA 
          title="Ready to convert your tub to a shower in Chandler?" 
          description="Get a free consultation and see how a walk-in shower can transform your bathroom." 
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
