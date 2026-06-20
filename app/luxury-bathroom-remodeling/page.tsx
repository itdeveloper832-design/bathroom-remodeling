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
import { Crown, Sparkles, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {title: "Luxury Bathroom Remodeling Chandler AZ | Free Estimate",description: "Professional luxury bathroom remodeling in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
  openGraph: {title: "Luxury Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore luxury bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/luxury-bathroom-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-master-suite.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - High-End Luxury Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Luxury Bath Remodel | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore luxury bath remodel, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-master-suite.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/luxury-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "What defines a luxury bathroom remodel in Chandler?",
    answer: "A luxury bathroom renovation includes high performance materials like Italian Carrara marble, custom solid wood vanities, curbless walk in steam showers, freestanding stone resin tubs, and smart upgrades like programmable floor heating and digital shower controls."
  },
  {
    question: "How long does a luxury master bathroom renovation take?",
    answer: "A comprehensive luxury master bathroom remodel typically takes four to six weeks of active construction. This timeframe includes executing structural wall changes, upgrading plumbing supply loops, running dedicated electrical lines, laying intricate tile patterns, and mounting solid stone countertops."
  },
  {
    question: "Can my home foundation handle a heavy stone freestanding tub?",
    answer: "Standard subfloors are not engineered to support the heavy weight of a deep soaking tub filled with water and a person, which can easily exceed one thousand pounds. We structurally reinforce the floor joists under the tub before installation to ensure safe support."
  }
];

const issues = [
  { problem: "Generic Builder Grade Layouts", solution: "We reconfigure walls to expand walk in closet entries and optimize floor plans for a premium flow." },
  { problem: "Cold Damp Floor Tiles", solution: "We install low voltage underfloor radiant heating mats to keep your feet warm during winter." },
  { problem: "Poor Lighting and Dark Showers", solution: "We design custom recessed LED layouts with under cabinet lighting and vapor proof shower fixtures." }
];

const benefitsList = [
  { title: "Increased Home Equity", description: "High end bathroom renovations offer some of the highest ROIs for luxury Chandler real estate near Fulton Ranch." },
  { title: "Daily Wellness Retreat", description: "Transform a functional master bathroom into a personal spa sanctuary for daily relaxation and stress relief." },
  { title: "Smart Home Integration", description: "Voice controlled showers, smart anti fog mirrors, and programmable floor heating for ultimate modern comfort." }
];

const tipsList = [
  { title: "Reinforce Floor Joists", description: "Always reinforce support framing under heavy stone composite tubs before filling them with water." },
  { title: "Layer Your Lighting Designs", description: "Combine task vertical sconces, recessed ceiling lights, and smart dimmers for flattering mirror views." },
  { title: "Protect Natural Stone Surfaces", description: "Apply premium oil based sealers to porous marble or granite surfaces to block hard water mineral scales." }
];

const otherServices = getRelatedServices("/luxury-bathroom-remodeling/");

export default function LuxuryPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Luxury Bathroom Remodeling", url: "https://arzhomeremodeling.com/luxury-bathroom-remodeling/" } ]} />
<ServiceSchema 
        serviceName="Luxury Bathroom Remodeling in Chandler" 
        serviceDescription="Premium high end bathroom renovations in Chandler, AZ. Spa inspired master baths, custom tile, and luxury fixtures." 
        serviceUrl={`${siteConfig.url}/luxury-bathroom-remodeling/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Luxury Bathroom Remodeling in Chandler, AZ"
          subtitle="Bespoke Design & Master Suite Transformations"
          description="Elevate your home with a custom-designed luxury bathroom. We specialize in high-end materials, spa-inspired features, and master craftsmanship for Chandler's most prestigious communities."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
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
          description="Our process ensures every detail of your high end bathroom is executed with surgical precision."
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
          description="We solve the design and technical challenges of high end bathroom construction in Chandler."
          issues={issues}
        />

        <Benefits
          title="The Benefits of Luxury"
          subtitle="Invest in Your Lifestyle"
          description="Experience the difference of a custom built master suite designed specifically for your needs."
          benefits={benefitsList}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Curbless Steam Showers & Double-Loop Plumbing Engineering
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our <strong>luxury bathroom remodeling in Chandler AZ</strong> delivers high end master transformations near Fulton Ranch. 
              To help budget for these high-end retreats, we provide a complete breakdown of features in our [master bathroom remodel cost Chandler](/blog/master-bathroom-remodel-cost-chandler/) guide. We utilize advanced waterproofing and professional mechanical design to engineer high performance personal spas.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Zero-Threshold Curbless Drainage</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We build seamless walk in steam showers that sit completely flush with your bathroom floor. This requires professional 
                  lowering of subfloor wood framing and installing linear drains to ensure a perfect water drainage slope.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Double-Loop High-Volume Plumbing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Spa systems utilizing body sprays and dual overhead rain cans demand steady water pressure. We run custom dedicated 
                  supply loops with solid brass balance cartridge valves to ensure consistent, luxurious water flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Designer Insights"
          subtitle="Luxury Best Practices"
          description="How to maximize the impact of your high end bathroom renovation."
          tips={tipsList}
        />

        <ServiceCTA 
          title="Ready to design your dream master bath?" 
          description="Schedule a private design consultation at your Chandler home to explore premium possibilities." 
        />

        <SubServices 
          title="Related Luxury Services"
          subtitle="Complete Transformations"
          description="We offer a full range of high end home renovation services."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />
        <Testimonials category="luxury-bathroom-remodeling" />
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
                  <a href={`tel:${siteConfig.phoneClean}`}>Start Your Design Consultation</a>
               </Button>
               <Button variant="outline" asChild size="lg">
                  <Link href="tel:+15205693339">Call {siteConfig.phone}</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
