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
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { Crown, Sparkles, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Bathroom Remodeling Chandler AZ | High-End Design & Finishes",
  description: "Experience the pinnacle of luxury bathroom remodeling in Chandler. High-end master bath renovations, spa-inspired showers, premium stone work, and custom cabinetry. ROC Licensed — Free Design Consultation!",
  openGraph: {
    title: "Luxury Bathroom Remodeling Chandler AZ | High-End Design & Finishes",
    description: "Premium master bathroom transformations in Chandler. Spa showers, freestanding tubs, and high-end materials. Licensed AZ contractor.",
    url: `${siteConfig.url}/luxury-bathroom-remodeling/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/luxury-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "What defines a 'luxury' bathroom remodel in Chandler?",
    answer: "A luxury remodel typically involves high-end materials like Carrara marble, custom-built vanities, frameless steam showers, freestanding soaking tubs, and smart home integration (heated floors, digital shower controls). In Chandler communities like Ocotillo or Fulton Ranch, these projects focus on creating a personal spa retreat."
  },
  {
    question: "How much does a high-end master bathroom remodel cost?",
    answer: "Luxury bathroom transformations in Chandler typically range from $35,000 to $75,000+. The cost is driven by premium material selections, plumbing reconfigurations, and specialized installations like curbless steam showers and custom lighting."
  },
  {
    question: "Can you provide custom 3D designs for my project?",
    answer: "Yes, our luxury remodeling package includes professional design consultations and 3D renderings to help you visualize every detail—from tile patterns to fixture placement—before construction begins."
  }
];

const issues = [
  { problem: "Dated 'Builder-Grade' Finishes", solution: "We strip away generic materials and replace them with hand-selected stone, custom cabinetry, and premium fixtures." },
  { problem: "Poor Natural Lighting", solution: "Integration of skylights, oversized windows, and layered LED lighting to create a bright, airy spa atmosphere." },
  { problem: "Inefficient Master Layouts", solution: "Complete floor plan reconfigurations to maximize space, privacy, and flow for a truly premium experience." }
];

const benefitsList = [
  { title: "Increased Home Equity", description: "High-end bathroom renovations offer some of the highest ROIs for luxury Chandler real estate." },
  { title: "Daily Wellness Retreat", description: "Transform a functional room into a sanctuary for relaxation and stress relief." },
  { title: "Smart Home Integration", description: "Voice-controlled showers, smart mirrors, and programmable floor heating for ultimate modern comfort." }
];

const tipsList = [
  { title: "Invest in Quality Fixtures", description: "Premium brands like Kohler, Brizo, or Moen offer superior longevity and finish durability." },
  { title: "Think Beyond the Surface", description: "Luxury is also about what you don't see—invest in soundproofing and high-end subfloor systems." },
  { title: "Layer Your Lighting", description: "Combine task, ambient, and accent lighting to highlight architectural features and premium tile." }
];

const otherServices = bathroomServices
  .filter(s => s.href !== "/luxury-bathroom-remodeling/")
  .slice(0, 3);

export default function LuxuryPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Luxury Bathroom Remodeling in Chandler" 
        serviceDescription="Premium high-end bathroom renovations in Chandler, AZ. Spa-inspired master baths, custom tile, and luxury fixtures." 
        serviceUrl={`${siteConfig.url}/luxury-bathroom-remodeling/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Luxury Bathroom Remodeling in Chandler, AZ"
          subtitle="Bespoke Design & Master Suite Transformations"
          description="Elevate your home with a custom-designed luxury bathroom. We specialize in high-end materials, spa-inspired features, and master craftsmanship for Chandler's most prestigious communities."
          image="/images/optimized/photo-1620626011761-996317b8d101.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Luxury Remodeling", url: `${siteConfig.url}/luxury-bathroom-remodeling/` }]}
        />

        <section className="py-12 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-foreground font-medium">
               <div className="flex items-center gap-2">
                 <Crown className="w-5 h-5 text-primary" />
                 <span>Premium Material Selections</span>
               </div>
               <div className="flex items-center gap-2">
                 <Sparkles className="w-5 h-5 text-primary" />
                 <span>Spa-Inspired Design</span>
               </div>
               <div className="flex items-center gap-2">
                 <Gem className="w-5 h-5 text-primary" />
                 <span>Master Craftsmanship</span>
               </div>
            </div>
          </div>
        </section>

        <ServiceProcess
          title="The Luxury Remodeling Experience"
          subtitle="Bespoke Execution"
          description="Our white-glove process ensures every detail of your high-end bathroom is executed with surgical precision."
          steps={[
            { number: "01", icon: "Layout", title: "Design Discovery", description: "Deep dive into your style, goals, and material preferences with our lead designer." },
            { number: "02", icon: "Ruler", title: "3D Rendering", description: "Visualize your new master bath with photorealistic 3D models and layout plans." },
            { number: "03", icon: "ShieldCheck", title: "Precision Build", description: "Our most experienced tradesmen handle the install, ensuring museum-quality tile and trim work." },
            { number: "04", icon: "Sparkles", title: "Final Reveal", description: "A detailed walkthrough and finishing session to ensure your new space is flawless." }
          ]}
        />

        <IssuesSolved
          title="Luxury Transformations"
          subtitle="Elevating Your Home"
          description="We solve the design and technical challenges of high-end bathroom construction in Chandler."
          issues={issues}
        />

        <Benefits
          title="The Benefits of Luxury"
          subtitle="Invest in Your Lifestyle"
          description="Experience the difference of a custom-built master suite designed specifically for your needs."
          benefits={benefitsList}
        />

        <Tips
          title="Designer Insights"
          subtitle="Luxury Best Practices"
          description="How to maximize the impact of your high-end bathroom renovation."
          tips={tipsList}
        />

        <ServiceCTA 
          title="Ready to design your dream master bath?" 
          description="Schedule a private design consultation at your Chandler home to explore premium possibilities." 
        />

        <SubServices 
          title="Related Luxury Services"
          subtitle="Complete Transformations"
          description="We offer a full range of high-end home renovation services."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        
        <section className="py-20 lg:py-32 bg-secondary text-center">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">East Valley Luxury</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground">Serving Ocotillo, Fulton Ranch & Sun Lakes</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We specialize in luxury bathroom remodeling for Chandler's premier master-planned communities. 
              Experience the quality that our neighbors trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button asChild size="lg">
                  <Link href="/contact/">Start Your Design Consultation</Link>
               </Button>
               <Button variant="outline" asChild size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>Call {siteConfig.phone}</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
