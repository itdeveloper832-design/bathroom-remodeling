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
  title: "Shower Replacement Chandler AZ | Parts & Install",
  description: "Professional shower replacement Chandler AZ. Shower valve replacement, shower handle replacement, shower door replacement, shower pan replacement. Free quotes!",
  keywords: ["shower replacement chandler az", "shower valve replacement chandler az", "shower handle replacement chandler az", "shower door replacement chandler az", "shower pan replacement chandler az", "shower drain replacement chandler az", "shower cartridge replacement chandler az", "shower faucet replacement chandler az", "glass shower door replacement cost chandler az", "shower surround replacement chandler az", "shower stall replacement contractors chandler az", "mobile home shower replacement chandler az"],
  openGraph: {
    title: "Shower Replacement Chandler AZ | Parts & Install",
    description: "Professional shower replacement Chandler AZ. Valve, handle, door, pan replacement. Free quotes!",
    url: `${siteConfig.url}/shower-replacement`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/shower-replacement-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Shower Replacement Services - Chandler AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shower Replacement Chandler AZ | Parts & Install",
    description: "Professional shower replacement Chandler AZ. Valve, handle, door replacement!",
    images: [`${siteConfig.url}/images/shower-replacement-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/shower-replacement`,
  },
};

const faqs = [
  {
    question: "What shower replacement services do you offer in Chandler AZ?",
    answer: "Our shower replacement services in Chandler AZ include: shower valve replacement, shower handle replacement, shower door replacement, shower pan replacement, shower drain replacement, shower cartridge replacement, shower faucet replacement, shower surround replacement, and complete shower stall replacement. We're your local shower replacement contractors!"
  },
  {
    question: "How much does shower valve replacement cost in Chandler AZ?",
    answer: "Shower valve replacement cost in Chandler AZ ranges from $150-$500 depending on valve type. We handle Delta shower valve replacement, Moen shower valve replacement, Kohler shower cartridge replacement, and all major brands. Shower mixing valve replacement and shower cartridge replacement cost varies by complexity."
  },
  {
    question: "Do you offer shower door replacement in Chandler AZ?",
    answer: "Yes! We offer complete shower door replacement including glass shower door replacement, replacement shower doors glass, frameless glass options, sliding shower door replacement, and shower door handle replacement. Glass shower door replacement cost includes installation."
  },
  {
    question: "What shower pan replacement options are available in Chandler AZ?",
    answer: "Our shower pan replacement services include: bathtub replacement shower pan, shower pan for tile installation, shower pans to replace bathtub, and cost of shower pan replacement. We handle complete shower pan replacement for bathtub conversions."
  },
  {
    question: "Do you offer shower handle and faucet replacement in Chandler AZ?",
    answer: "Yes! We specialize in shower handle replacement including Moen shower handle replacement, Delta shower handle replacement, Kohler shower handle replacement, and shower faucet replacement parts. Our services include shower single handle replacement and 3 handle shower faucet replacement."
  },
  {
    question: "What is the shower drain replacement cost in Chandler AZ?",
    answer: "Shower drain replacement cost varies by type. We offer shower drain replacement kit installation, shower drain cover replacement, and complete shower drain replacement. Our services include replace shower drain cover and shower drain replacement cover installation."
  }
];

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function ShowerReplacementPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Shower Replacement in Chandler, Arizona"
        serviceDescription="Professional shower replacement services in Chandler, Arizona. Quick installation, modern designs, and quality materials."
        serviceUrl={`${siteConfig.url}/shower-replacement`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Shower Replacement Chandler AZ | All Parts"
          subtitle="Shower Valve, Handle, Door & Pan Replacement Chandler AZ"
          description="Professional shower replacement Chandler AZ. Shower valve replacement, shower handle replacement, shower door replacement, shower pan replacement, shower drain replacement. Free estimates!"
          image="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Shower Replacement", url: `${siteConfig.url}/shower-replacement` },
          ]}
        />

        <ServiceProcess
          title="Shower Replacement Process"
          subtitle="Our Process"
          description="A streamlined shower replacement process designed for efficiency and quality results."
          steps={[
            {
              number: "01",
              icon: "PhoneCall",
              title: "Assessment & Quote",
              description: "We inspect your existing shower, discuss options, and provide a detailed estimate.",
            },
            {
              number: "02",
              icon: "Ruler",
              title: "Material Selection",
              description: "Choose from tile, acrylic, or fiberglass options with matching fixtures and hardware.",
            },
            {
              number: "03",
              icon: "Hammer",
              title: "Removal & Prep",
              description: "Careful demolition of old shower, inspection of substructure, and waterproofing.",
            },
            {
              number: "04",
              icon: "ShowerHead",
              title: "Installation",
              description: "Professional installation of new shower unit, plumbing connections, and fixtures.",
            },
            {
              number: "05",
              icon: "ShieldCheck",
              title: "Testing & Cleanup",
              description: "Complete water testing, sealing, and thorough cleanup of your bathroom.",
            },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Shower Replacement"
          subtitle="Common Problems Fixed"
          description="We address common shower problems that Chandler homeowners face with professional replacement."
          issues={[
            {
              problem: "Persistent leaks damaging walls and flooring.",
              solution: "Complete replacement with new waterproofing and properly sealed connections.",
            },
            {
              problem: "Cracked, chipped, or stained shower surfaces.",
              solution: "Fresh surfaces with modern, durable materials that resist wear and staining.",
            },
            {
              problem: "Mold and mildew that keeps returning despite cleaning.",
              solution: "New moisture-resistant materials with proper ventilation and drainage.",
            },
            {
              problem: "Outdated appearance that lowers home value.",
              solution: "Modern designs that update your bathroom and increase property appeal.",
            },
            {
              problem: "Poor water pressure and outdated fixtures.",
              solution: "New plumbing connections and modern fixtures for optimal performance.",
            },
          ]}
        />

        <Benefits
          title="Benefits of Shower Replacement in Chandler"
          subtitle="Why Replace Your Shower"
          benefits={[
            {
              icon: "ShieldCheck",
              title: "Stop Water Damage",
              description: "New waterproofing and sealing prevents costly water damage to your home.",
            },
            {
              icon: "Sparkles",
              title: "Modern Appearance",
              description: "Update your bathroom with contemporary designs and fresh finishes.",
            },
            {
              icon: "Timer",
              title: "Quick Installation",
              description: "Professional replacement completed in days, not weeks.",
            },
            {
              icon: "TrendingUp",
              title: "Increased Value",
              description: "A new shower is a smart investment that increases home value.",
            },
            {
              icon: "Droplets",
              title: "Better Function",
              description: "Improved water pressure, drainage, and overall shower performance.",
            },
          ]}
        />

        <Tips
          title="Shower Replacement Tips & Care"
          subtitle="Maintain Your New Shower"
          description="Keep your new shower looking great and functioning properly with these expert tips."
          tips={[
            "Wait 24-48 hours after installation before using the shower to allow sealants to cure.",
            "Use a squeegee after each shower to prevent water spots on glass and tile.",
            "Clean weekly with non-abrasive, pH-neutral cleaners to protect surfaces.",
            "Inspect caulk lines every 6 months and recaulk if you notice gaps or peeling.",
            "Run the exhaust fan during and for 20 minutes after showering to control humidity.",
          ]}
        />

        <ServiceCTA 
          title="Ready to replace your old shower in Chandler?" 
          description="Get a free assessment and quote for your shower replacement project today." 
        />

        <ServiceFAQ faqs={faqs} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Shower Replacement Service Area in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional shower replacement services throughout Chandler and the East Valley area.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and surrounding communities</li>
                <li>• Licensed and insured professionals</li>
                <li>• Free estimates and consultations</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title="Shower Replacement in Chandler, AZ"
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Need shower replacement in Chandler, AZ?" 
          description="Contact us today for fast, professional shower replacement services." 
        />
      </main>
      <Footer />
    </>
  );
}
