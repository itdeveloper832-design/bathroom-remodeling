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
import { Shield, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "ADA Bathroom Remodeling Chandler AZ | Senior-Safe & Accessible Design",
  description: "Specialized ADA bathroom remodeling in Chandler. Expert installers for walk-in showers, grab bars, roll-in entries, and senior-safe modifications. Licensed AZ contractor — free quote!",
  openGraph: {
    title: "ADA Bathroom Remodeling Chandler AZ | Senior-Safe & Accessible Design",
    description: "Expert ADA bathroom remodeling in Chandler. Safe walk-in showers, roll-in entries, and professional safety modifications for seniors and mobility needs.",
    url: `${siteConfig.url}/ada-bathroom-remodeling/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/ada-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "What makes a bathroom ADA compliant in Chandler, AZ?",
    answer: "An ADA-compliant bathroom features specific modifications like curbless walk-in showers, 36-inch wide doorways for wheelchair access, reinforced grab bars, comfort-height toilets (17-19 inches), and non-slip surfaces. Our Chandler team ensures every modification meets official accessibility standards while maintaining a high-end look."
  },
  {
    question: "Do you offer walk-in tub installation in Chandler?",
    answer: "Yes, we install premium walk-in tubs with hydrotherapy jets, heated seating, and low-threshold entries. We also specialize in walk-in shower conversions, which many Chandler seniors prefer for their modern look and ease of use."
  },
  {
    question: "How long does a senior-safe bathroom remodel take?",
    answer: "Minor modifications like grab bars and a walk-in shower conversion can be completed in 3-5 days. A total ADA-compliant bathroom reconfiguration typically takes 2-3 weeks. We prioritize efficiency to minimize disruption to your home."
  }
];

const issues = [
  { problem: "Slippery Standard Tubs", solution: "We replace high-walled tubs with curbless, slip-resistant walk-in showers for safer entry." },
  { problem: "Lack of Support", solution: "Strategically placed, reinforced grab bars that support up to 500 lbs without looking institutional." },
  { problem: "Cramped Entries", solution: "Doorway widening and vanity modifications to allow for clear floor space and wheelchair maneuverability." }
];

const benefitsList = [
  { title: "Long-Term Independence", description: "Stay in your Chandler home longer with a bathroom designed for aging-in-place." },
  { title: "Reduced Fall Risk", description: "Strategic safety features significantly lower the risk of slips and falls in wet areas." },
  { title: "Universal Design", description: "Our designs are beautiful for all users while providing essential accessibility for some." }
];

const tipsList = [
  { title: "Choose the Right Flooring", description: "Select tile with a high Dynamic Coefficient of Friction (DCOF) rating for wet areas." },
  { title: "Lighting Matters", description: "Shadow-free, bright LED lighting is critical for those with visual impairments." },
  { title: "Handheld Versatility", description: "Slide-bar handheld showerheads allow for seated showering at any height." }
];

const otherServices = bathroomServices
  .filter(s => s.href !== "/ada-bathroom-remodeling/")
  .slice(0, 3);

export default function ADAPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="ADA Bathroom Remodeling in Chandler" 
        serviceDescription="Professional senior-safe and handicap accessible bathroom modifications in Chandler, AZ. Curbless showers, grab bars, and roll-in entries." 
        serviceUrl={`${siteConfig.url}/ada-bathroom-remodeling/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="ADA Bathroom Remodeling in Chandler, AZ"
          subtitle="Senior-Safe Design & Accessible Transformations"
          description="Maintain your independence with a bathroom designed for safety and comfort. We are Chandler's experts in ADA-compliant remodeling, senior-safe showers, and accessible master bath renovations."
          image="/images/optimized/photo-1584622650111-993a426fbf0a.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "ADA Remodeling", url: `${siteConfig.url}/ada-bathroom-remodeling/` }]}
        />

        <section className="py-12 bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-primary font-medium">
               <div className="flex items-center gap-2">
                 <Shield className="w-5 h-5" />
                 <span>ROC Licensed #345678</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle className="w-5 h-5" />
                 <span>ADA Compliant Designs</span>
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="w-5 h-5" />
                 <span>On-Time Guarantee</span>
               </div>
            </div>
          </div>
        </section>

        <ServiceProcess
          title="Our Accessibility Remodeling Process"
          subtitle="Safety-First Approach"
          description="We combine technical ADA requirements with luxury design to create a bathroom that is both safe and beautiful."
          steps={[
            { number: "01", icon: "Layout", title: "Safety Audit", description: "We assess your current bathroom for hazards and identify necessary mobility modifications." },
            { number: "02", icon: "Ruler", title: "Custom Design", description: "Create a layout that maximizes accessibility while matching your home's aesthetic." },
            { number: "03", icon: "ShieldCheck", title: "Expert Install", description: "Professional installation of grab bars, non-slip flooring, and accessible fixtures." },
            { number: "04", icon: "Sparkles", title: "Quality Check", description: "We test all features to ensure they meet 2026 safety and accessibility standards." }
          ]}
        />

        <IssuesSolved
          title="Safety Challenges We Solve"
          subtitle="Creating Barrier-Free Spaces"
          description="We address the most common mobility concerns for Chandler homeowners and seniors."
          issues={issues}
        />

        <Benefits
          title="Benefits of a Senior-Safe Bathroom"
          subtitle="Peace of Mind & Comfort"
          description="Discover why an accessibility remodel is a critical investment for Chandler homeowners planning to age in place."
          benefits={benefitsList}
        />

        <Tips
          title="Expert Accessibility Tips"
          subtitle="Professional Advice"
          description="How to maintain a safe and accessible bathroom environment for the long term."
          tips={tipsList}
        />

        <ServiceCTA 
          title="Ready to make your Chandler bathroom safer?" 
          description="Schedule a free safety audit and remodeling consultation with our local experts today." 
        />

        <SubServices 
          title="Related Accessible Services"
          subtitle="More Solutions"
          description="Explore other ways we can help improve your home's safety and value."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Accessible Bathroom Services in Chandler</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">We provide expert <strong>walk-in shower installation services</strong> and ADA accessibility modifications throughout Chandler, Sun Lakes, and the surrounding communities.</p>
              <div className="flex gap-4">
                 <Button asChild size="lg">
                    <Link href="/contact/">Get A Free Quote</Link>
                 </Button>
                 <Button variant="outline" asChild size="lg">
                    <Link href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</Link>
                 </Button>
              </div>
            </div>
            <div><GoogleMap lat={33.3062} lng={-111.8413} zoom={12} title="ADA Bathroom Remodeling Chandler" address="Chandler, AZ" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
