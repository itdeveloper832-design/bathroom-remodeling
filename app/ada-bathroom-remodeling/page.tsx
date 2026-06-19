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
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";
import { Shield, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleMap } from "@/components/services/google-map";

export const metadata: Metadata = {title: {
    absolute: "ADA Bath Remodel | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore ada bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
  openGraph: {title: "ADA Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore ada bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/ada-bathroom-remodeling/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/ada-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "What makes a walk in shower ADA compliant?",
    answer: "An ADA compliant walk in shower must feature a zero threshold entry. This means the shower floor sits level with the bathroom floor, allowing a wheelchair to roll in without obstruction. The shower must measure at least 36 inches by 36 inches for a transfer shower, or 30 inches by 60 inches for a roll in shower. We install hand held shower heads with 60 inch hoses, fold down shower seats, and pressure balancing valves to prevent water temperature spikes."
  },
  {
    question: "What are the safety requirements for an ADA bathroom remodel?",
    answer: "We build our accessible bathrooms according to the ADA Standards for Accessible Design. We also follow the guidelines of the National Tile Contractors Association for wet area waterproofing. Our team helps seniors and individuals with limited mobility live independently in their homes, serving residents near Sun Lakes and active adult communities throughout the East Valley."
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

const otherServices = getRelatedServices("/ada-bathroom-remodeling/");

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
          image="/images/services/bathroom-tile-remodel-az.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "ADA Remodeling", url: `${siteConfig.url}/ada-bathroom-remodeling/` }]}
        />

        <section className="py-12 bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-primary font-medium">
               <div className="flex items-center gap-2">
                 <Shield className="w-5 h-5" />
                 <span>ROC Licensed #338304</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle className="w-5 h-5" />
                 <span>ADA Compliant Designs</span>
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="w-5 h-5" />
                 <span>On Time Guarantee</span>
               </div>
            </div>
          </div>
        </section>

        <ServiceProcess
          title="Our Accessibility Remodeling Process"
          subtitle="Safety First Approach"
          description="We combine technical ADA requirements with clean design to create a bathroom that is both safe and beautiful."
          steps={[
            { number: "01", icon: "Layout", title: "Safety Audit", description: "We assess your current bathroom for hazards and identify necessary mobility modifications." },
            { number: "02", icon: "Ruler", title: "Custom Design", description: "Create a layout that maximizes accessibility while matching your home's aesthetic." },
            { number: "03", icon: "ShieldCheck", title: "Expert Install", description: "Professional installation of grab bars, non slip flooring, and accessible fixtures." },
            { number: "04", icon: "Sparkles", title: "Quality Check", description: "We test all features to ensure they meet 2026 safety and accessibility standards." }
          ]}
        />

        <IssuesSolved
          title="Safety Challenges We Solve"
          subtitle="Creating Barrier Free Spaces"
          description="We address the most common mobility concerns for Chandler homeowners and seniors."
          issues={issues}
        />

        <Benefits
          title="Benefits of a Senior Safe Bathroom"
          subtitle="Peace of Mind and Comfort"
          description="Discover why an accessibility remodel is a critical investment for Chandler homeowners planning to age in place."
          benefits={benefitsList}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Barrier Free Shower Curbs and Structural Grab Bar Wall Anchoring
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our <strong>ADA bathroom remodeling in Chandler AZ</strong> protects your safety near Sun Lakes. 
              We utilize advanced framing adjustments and professional backing support to construct fully wheelchair roll in compliant environments.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Strict Technical Compliance Standards:** We don&apos;t guess at accessibility: we build exactly to ADA guidelines. We ensure all accessible showers have at least a **36&quot; x 36&quot; clear interior footprint** (or 30&quot; x 60&quot; for roll in configurations), door clearances widened to a **full 36 inches**, and slip resistance flooring rated at a [Dynamic Coefficient of Friction (DCOF)](/blog/porcelain-vs-ceramic-tile-arizona-shower/) &ge; 0.42 to prevent slips when wet.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **VA SAH and HISA Grant Coordination:** If you are a disabled veteran living in the East Valley, we coordinate directly with the Department of Veterans Affairs. We design and document our bathroom builds to satisfy VA Specially Adapted Housing (SAH) and Home Improvements and Structural Alterations (HISA) grant requirements, ensuring veterans get the complete funding they are entitled to for safety improvements.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              **Caregiver and Mobility Space Planning:** True accessibility goes beyond grab bars. We plan your bathroom layout with a **60 inch turning radius** to allow seamless wheelchair or walker navigation. We also design vanity and shower placements to provide comfortable, safe spacing for both the homeowner and their caregiver or family nurse.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Zero Curb Roll In Shower Pans</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  True roll in showers have no step dam or barrier. We recut and lower the local wood subfloor joists by two inches, creating 
                  a recessed pocket that sits perfectly level with your bathroom floor for easy wheelchair entry.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Solid Stud Wall Grab Bar Blocking</h3>
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
        <Testimonials category="ada-bathroom-remodeling" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
