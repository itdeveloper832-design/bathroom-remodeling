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
  title: "Small Bathroom Remodel Cost Chandler AZ | Expert",
  description: "Affordable small bathroom remodel cost Chandler AZ. Professional small bathroom remodeling services with space-saving designs. Free estimates!",
  keywords: ["small bathroom remodel cost chandler az", "affordable small bathroom remodel cost chandler az", "best small bathroom remodel cost chandler az", "local small bathroom remodel cost chandler az", "professional small bathroom remodel cost chandler az", "small bathroom remodeling chandler", "space-saving bathroom design"],
  openGraph: {
    title: "Small Bathroom Remodel Cost Chandler AZ | Expert",
    description: "Affordable small bathroom remodel cost Chandler AZ. Professional small bathroom remodeling services.",
    url: `${siteConfig.url}/small-bathroom-remodeling`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/small-bathroom-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Small Bathroom Remodeling - Chandler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Bathroom Remodel Cost Chandler AZ",
    description: "Affordable small bathroom remodel cost Chandler AZ. Free estimates!",
    images: [`${siteConfig.url}/images/small-bathroom-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/small-bathroom-remodeling`,
  },
};

const faqs = [
  { question: "How much does small bathroom remodel cost in Chandler AZ?", answer: "Small bathroom remodel cost in Chandler AZ typically ranges $8,000-$20,000. Affordable small bathroom remodel cost starts around $8,000 for basic updates, while professional small bathroom remodel services with luxury finishes can exceed $20,000. Get your free bathroom remodel estimate!" },
  { question: "What makes your small bathroom remodeling services the best in Chandler AZ?", answer: "We're the best small bathroom remodel contractors in Chandler AZ with 15+ years experience. Our licensed bathroom remodeling contractors specialize in space-maximizing designs, affordable small bathroom remodel cost, and professional bathroom installation services." },
  { question: "Can you add storage in a small bathroom remodel in Chandler?", answer: "Yes! Our local small bathroom remodel cost includes creative storage solutions. We specialize in built-in niches, floating shelves, vanity storage, and recessed medicine cabinets. Our professional small bathroom remodel services maximize every square foot." },
  { question: "How long does small bathroom remodeling take in Chandler AZ?", answer: "Small bathroom remodeling in Chandler AZ typically takes 1-3 weeks. Same day bathroom remodeling contractors available for quick updates. Our professional bathroom remodel services are efficient while maintaining top rated quality standards." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function SmallBathroomRemodelingPage() {
  return (
    <>
      <ServiceSchema serviceName="Small Bathroom Remodeling in Chandler, Arizona" serviceDescription="Professional small bathroom remodeling in Chandler, Arizona. Space-saving designs, storage solutions, and modern fixtures." serviceUrl={`${siteConfig.url}/small-bathroom-remodeling`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Affordable Small Bathroom Remodel Cost Chandler AZ"
          subtitle="Best Small Bathroom Remodeling Services in Chandler AZ"
          description="Get the best small bathroom remodel cost in Chandler AZ. Our licensed small bathroom remodeling contractors deliver space-saving designs and professional bathroom renovation services."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Small Bathroom Remodeling", url: `${siteConfig.url}/small-bathroom-remodeling` }]}
        />
        <ServiceProcess
          title="Small Bathroom Remodeling Process"
          subtitle="Our Process"
          description="Space-maximizing remodeling with smart design solutions and efficient layouts."
          steps={[
            { number: "01", icon: "Layout", title: "Space Analysis", description: "Evaluate current layout and identify opportunities to maximize space and functionality." },
            { number: "02", icon: "Ruler", title: "Design Planning", description: "Create space-saving design with optimal fixture placement and storage solutions." },
            { number: "03", icon: "Hammer", title: "Efficient Demolition", description: "Careful demolition in tight spaces with protection for surrounding areas." },
            { number: "04", icon: "Sparkles", title: "Smart Installation", description: "Install space-saving fixtures, storage solutions, and modern finishes." },
            { number: "05", icon: "ShieldCheck", title: "Final Optimization", description: "Complete installation with space-maximizing details and quality finishing." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Small Bathroom Remodeling"
          subtitle="Common Problems Fixed"
          description="We address the most common small bathroom challenges Chandler homeowners face."
          issues={[
            { problem: "Cramped layout making the bathroom feel claustrophobic.", solution: "Open design concepts with glass, mirrors, and light colors to create spacious feel." },
            { problem: "Insufficient storage causing clutter and disorganization.", solution: "Built-in storage solutions, floating vanities, and creative storage niches." },
            { problem: "Poor lighting making the space feel dark and small.", solution: "Layered lighting design with recessed lights, vanity lighting, and natural light optimization." },
            { problem: "Outdated fixtures that overwhelm the small space.", solution: "Appropriately scaled fixtures and space-saving designs that fit the room proportions." },
            { problem: "Inefficient layout wasting valuable square footage.", solution: "Optimized layout planning that maximizes functionality within limited space." }
          ]}
        />
        <Benefits
          title="Benefits of Small Bathroom Remodeling in Chandler"
          subtitle="Why It Matters"
          benefits={[
            { icon: "Layout", title: "Maximized Space", description: "Smart design solutions make small bathrooms feel larger and more functional." },
            { icon: "Sparkles", title: "Modern Aesthetics", description: "Contemporary designs and finishes create a fresh, updated appearance." },
            { icon: "Timer", title: "Improved Efficiency", description: "Better layout and storage solutions streamline daily routines." },
            { icon: "TrendingUp", title: "Increased Home Value", description: "Well-designed small bathrooms add significant value to your Chandler home." },
            { icon: "ShieldCheck", title: "Quality Materials", description: "Durable, space-appropriate materials that withstand daily use in compact spaces." }
          ]}
        />
        <Tips
          title="Small Bathroom Remodeling Tips & Maintenance"
          subtitle="Keep It Looking Spacious"
          description="Expert tips to maintain your newly remodeled small bathroom and maximize its impact."
          tips={[
            "Use light colors and reflective surfaces to maintain the spacious feel of your remodel.",
            "Keep countertops clutter-free by utilizing built-in storage and organizational systems.",
            "Clean mirrors and glass surfaces regularly to maintain brightness and openness.",
            "Use consistent materials and colors throughout to create visual continuity.",
            "Maximize natural light with appropriate window treatments and strategic mirror placement."
          ]}
        />
        <ServiceCTA title="Ready for small bathroom remodeling in Chandler?" description="Get expert space-maximizing design, smart storage solutions, and professional installation for your small bathroom." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Small Bathroom Remodeling Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Professional small bathroom remodeling services throughout Chandler, Arizona and surrounding communities.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby areas</li>
                <li>• Space-maximizing design specialists</li>
                <li>• Small bathroom remodeling experts</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Small Bathroom Remodeling in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need small bathroom remodeling in Chandler, AZ?" description="Contact us for professional small bathroom remodeling with space-saving designs and smart solutions." />
      </main>
      <Footer />
    </>
  );
}
