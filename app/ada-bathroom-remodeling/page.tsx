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
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { Shield, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleMap } from "@/components/services/google-map";

export const metadata: Metadata = {
  title: "Accessible Shower Remodeling Chandler AZ - ADA Bathroom & Handicap Installation Services",
  description: "Accessible shower remodeling, installation, and ADA bathroom remodeling in Chandler, AZ. Handicap bathroom remodel contractors. Walk-in showers, grab bars, roll-in entries, senior-safe modifications. Licensed ROC338304.",
  openGraph: {
    title: "ADA Bathroom Remodeling Chandler AZ - Senior Safe Design",
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
    answer: "An accessible bathroom features specific modifications including curbless zero threshold showers, at least thirty six inch wide door entries for wheelchair clearance, comfort height toilets measuring seventeen to nineteen inches tall, and structural grab bars capable of holding five hundred pounds."
  },
  {
    question: "Do you offer tub to walk in shower conversions for seniors?",
    answer: "Yes, we specialize in converting dangerous high sided bathtubs into zero barrier walk in showers. This conversion is the most popular modification for Chandler seniors because it eliminates the biggest fall hazard in the bathroom."
  },
  {
    question: "How long does an accessible ADA bathroom remodel take?",
    answer: "A basic walk in shower conversion and grab bar installation takes three to five days of construction. A complete structural reconfiguration to widen doorways and lower vanities for wheelchair clearance typically takes two to three weeks of active work."
  }
];

const issues = [
  { problem: "Slippery Standard Tubs", solution: "We replace high walled tubs with curbless, slip resistant walk in showers to eliminate the dangerous step entry." },
  { problem: "Flimsy Grab Bars", solution: "We reinforce wall framing with solid wood backing secured directly to the studs before mounting grab bars." },
  { problem: "Cramped Door Entries", solution: "We widen bathroom doorways to a clear thirty six inches to allow easy wheelchair or walker entry." }
];

const benefitsList = [
  { title: "Long Term Independence", description: "Stay in your Chandler home near Sun Lakes longer with a master bathroom custom designed for aging in place." },
  { title: "Reduced Fall Risk", description: "Strategic safety features and high traction mosaic tiles significantly lower the risk of slips and falls." },
  { title: "Universal Design", description: "Our accessible renovations are highly beautiful for all users while providing necessary mobility support." }
];

const tipsList = [
  { title: "Choose Textured Flooring", description: "Select dense porcelain floor tiles with a high Dynamic Coefficient of Friction rating for maximum wet grip." },
  { title: "Eliminate Dark Shadows", description: "Install shadow free, bright LED lighting layouts to help seniors with visual impairments navigate safely." },
  { title: "Use Slide Bar Handhelds", description: "Installing vertical slide bar handheld showerheads allows for comfortable seated showering at any height." }
];

const otherServices = bathroomServices
  .filter(s => s.href !== "/ada-bathroom-remodeling/")
  .slice(0, 3);

export default function ADAPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Ada Bathroom Remodeling", url: "https://arzhomeremodeling.com/ada-bathroom-remodeling/" } ]} />
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
          description="We combine technical ADA requirements with clean design to create a bathroom that is both safe and beautiful."
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Barrier-Free Shower Curbs & Structural Grab-Bar Wall Anchoring
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our <strong>ADA bathroom remodeling in Chandler AZ</strong> protects your safety near Sun Lakes. 
              We utilize advanced framing adjustments and professional backing support to construct fully wheelchair roll-in compliant environments.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Zero-Curb Roll-In Shower Pans</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  True roll in showers have no step dam or barrier. We recut and lower the local wood subfloor joists by two inches, creating 
                  a recessed pocket that sits perfectly level with your bathroom floor for easy wheelchair entry.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Solid Stud-Wall Grab Bar Blocking</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mounting safety rails onto simple drywall anchors is extremely dangerous. We install thick solid wood blocking securely 
                  fastened to the wall studs, guaranteeing each grab bar holds up to five hundred pounds without loose play.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                    <Link href="tel:4803065591">{siteConfig.phone}</Link>
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
