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
import { Users, Layout, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleMap } from "@/components/services/google-map";

export const metadata: Metadata = {
  title: "Guest Bathroom Remodeling Chandler AZ - Small Bath Renovations",
  description: "Transform your guest bathroom into a welcoming space. We specialize in efficient, high impact guest bath and powder room remodeling in Chandler. Fast turnarounds, fixed pricing. Free quote!",
  openGraph: {
    title: "Guest Bathroom Remodeling Chandler AZ - Small Bath Renovations",
    description: "Expert guest bathroom and powder room remodeling in Chandler. High impact updates, efficient timelines, and quality finishes.",
    url: `${siteConfig.url}/guest-bathroom-remodeling/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/guest-bathroom-remodeling/`,
  },
};

const faqs = [
  {
    question: "How long does a guest bathroom remodel take in Chandler?",
    answer: "A standard guest bathroom or powder room remodel typically takes ten to fourteen days of active construction. Because secondary baths have smaller square footage, we can execute demolition, drywall prep, tile laying, and plumbing fixture installation very quickly."
  },
  {
    question: "What is the average cost to remodel a secondary bathroom?",
    answer: "A high impact guest bathroom cosmetic update including new vanity cabinets, quartz countertops, modern fixtures, porcelain floor tiles, and paint typically ranges from four thousand five hundred to nine thousand dollars. Full gut renovations with tile showers start around twelve thousand dollars."
  },
  {
    question: "Can you add a walk in shower to a half bath powder room?",
    answer: "Yes, we frequently convert small half baths into full bathrooms by reconfiguring adjacent closet spaces to add a modern curbless walk in shower. This smart layout change adds significant value to your Chandler property."
  }
];

const issues = [
  { problem: "Dated Builder Grade Materials", solution: "We install modern wood vanities, porcelain floor tiles, and bright LED layouts that instantly refresh the space." },
  { problem: "Poor Storage for Guests", solution: "We install custom recessed tile niches and floating wall hung vanities that maximize space without cluttering the room." },
  { problem: "Inefficient Ventilation", solution: "We install high CFM quiet exhaust fans that quickly vent moisture out to prevent blistering wall paint and mold." }
];

const benefitsList = [
  { title: "Welcoming Guest Experience", description: "Provide friends and family with a modern, clean, and comfortable bathroom during their stay near Sun Lakes." },
  { title: "Maximum ROI for Resale", description: "Updated guest bathrooms are one of the most cost effective ways to increase a Chandler home's value." },
  { title: "Daily Convenience", description: "A secondary bathroom that feels as good as your master bath makes morning routines easier for everyone." }
];

const tipsList = [
  { title: "Use Large Format Tile", description: "Larger tiles with fewer grout lines can make a small guest bathroom feel much bigger." },
  { title: "Prioritize the Vanity", description: "In a small space, the vanity is the focal point. Invest in a quality piece with ample storage." },
  { title: "Opt for a Floating Vanity", description: "Seeing more of the floor creates the optical illusion of more square footage in tight spaces." }
];

const otherServices = bathroomServices
  .filter(s => s.href !== "/guest-bathroom-remodeling/")
  .slice(0, 3);

export default function GuestBathPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Guest Bathroom Remodeling", url: "https://arzhomeremodeling.com/guest-bathroom-remodeling/" } ]} />
<ServiceSchema 
        serviceName="Guest Bathroom Remodeling in Chandler" 
        serviceDescription="Professional guest bathroom and powder room renovations in Chandler, AZ. Fast, high-impact updates for secondary bathrooms." 
        serviceUrl={`${siteConfig.url}/guest-bathroom-remodeling/`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Guest Bathroom Remodeling in Chandler, AZ"
          subtitle="High-Impact Updates for Small Bathrooms & Powder Rooms"
          description="Make a lasting impression on your guests. We provide efficient, professional guest bathroom remodeling that combines style with practicality for your Chandler home."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Guest Bathroom", url: `${siteConfig.url}/guest-bathroom-remodeling/` }]}
        />

        <section className="py-12 bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-primary font-medium">
               <div className="flex items-center gap-2">
                 <Users className="w-5 h-5" />
                 <span>Guest-Ready Results</span>
               </div>
               <div className="flex items-center gap-2">
                 <Layout className="w-5 h-5" />
                 <span>Space Optimization</span>
               </div>
               <div className="flex items-center gap-2">
                 <Sparkles className="w-5 h-5" />
                 <span>Fast 10 to 14 Day Turnaround</span>
               </div>
            </div>
          </div>
        </section>

        <ServiceProcess
          title="Efficient Guest Bath Process"
          subtitle="Quick & Clean"
          description="We specialize in minimizing downtime so your secondary bathroom is back in service as quickly as possible."
          steps={[
            { number: "01", icon: "Layout", title: "Smart Planning", description: "We identify the most impactful changes to maximize your budget and space." },
            { number: "02", icon: "Ruler", title: "Selection", description: "Quick-ship material options that keep your project on a tight schedule." },
            { number: "03", icon: "ShieldCheck", title: "Rapid Install", description: "Focused construction phase with dedicated crews for smaller spaces." },
            { number: "04", icon: "Sparkles", title: "Finish & Style", description: "Final details and styling so the room is guest-ready from day one." }
          ]}
        />

        <IssuesSolved
          title="Small Space Solutions"
          subtitle="Refreshing Your Guest Bath"
          description="We solve the specific challenges of secondary bathrooms and powder rooms in Chandler homes."
          issues={issues}
        />

        <Benefits
          title="Why Update Your Guest Bath?"
          subtitle="Small Changes, Big Impact"
          description="Discover the value of modernizing your home's secondary bathrooms."
          benefits={benefitsList}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Space-Saving Floating Vanities & High-CFM Quiet Ventilation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our <strong>guest bathroom remodeling in Chandler AZ</strong> delivers high impact spatial designs near McQueen Road. 
              We utilize advanced wall-hung structures and high ventilation upgrades to engineer spacious, fresh environments.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Wall-Hung Floating Vanities</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Floor mounted vanity cabinets block sightlines, making small spaces feel tight. We anchor premium floating vanities directly 
                  to wall studs, exposing more floor tiling to create the optical illusion of extra square footage.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">High-CFM Quiet Exhaust Fans</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Compact guest bathrooms trap steam quickly, creating blistering paint and mold hazards. We install ultra quiet exhaust fans 
                  rated at 110 Cubic Feet per Minute to pull moist air out, sealing connections to prevent attic draft leaks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Small Bath Best Practices"
          subtitle="Expert Advice"
          description="Design tips specifically for maximizing the impact of guest bathroom renovations."
          tips={tipsList}
        />

        <ServiceCTA 
          title="Ready to refresh your guest bathroom?" 
          description="Get a fast, fixed-price quote for your guest bath or powder room update in Chandler." 
        />

        <SubServices 
          title="Related Services"
          subtitle="More Solutions"
          description="Explore other bathroom renovation options for your home."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Guest Bath Specialists in Chandler</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                From simple powder room updates to full guest bath renovations, we provide the expert service that Chandler homeowners rely on.
              </p>
              <div className="flex gap-4 flex-wrap">
                 <Button asChild size="lg">
                    <Link href="/contact/">Get Your Quote</Link>
                 </Button>
                 <Button variant="outline" asChild size="lg">
                    <Link href="tel:+15205693339">Call {siteConfig.phone}</Link>
                 </Button>
              </div>
            </div>
            <div><GoogleMap lat={33.3062} lng={-111.8413} zoom={12} title="Guest Bathroom Remodeling Chandler" address="Chandler, AZ" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
