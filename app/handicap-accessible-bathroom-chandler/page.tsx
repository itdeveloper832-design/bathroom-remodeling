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
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Handicap Accessible Bathroom Chandler AZ | Safety",
  description: "Safe, ADA-compliant handicap accessible bathroom Chandler AZ. Roll-in showers and grab bar installations. Call us today!",
  keywords: ["handicap accessible bathroom Chandler", "ADA compliant bathroom", "roll-in showers", "grab bar installation", "accessible bathroom remodel"],
  openGraph: {
    title: "Handicap Accessible Bathroom Chandler AZ | Safety",
    description: "Safe, ADA-compliant handicap accessible bathroom Chandler AZ. Roll-in showers and grab bar installations.",
    url: `${siteConfig.url}/handicap-accessible-bathroom-chandler`,
    type: "website",
  },
};

const faqs = [
  {
    question: "What makes a bathroom handicap accessible?",
    answer: "A handicap accessible bathroom typically includes features like roll-in or walk-in showers, grab bars, comfort-height toilets, wider doorways, and non-slip flooring to ensure safety and ease of use for individuals with mobility challenges."
  },
  {
    question: "Do you offer ADA-compliant bathroom remodeling in Chandler?",
    answer: "Yes, we specialize in ADA-compliant bathroom remodeling in Chandler, AZ. Our team ensures all modifications meet the necessary safety standards while maintaining a beautiful and functional design."
  },
  {
    question: "How long does an accessibility remodel take?",
    answer: "Most accessibility modifications, such as grab bar installation or tub-to-shower conversions, can be completed in just a few days. Full bathroom reconfigurations for total accessibility typically take 2-3 weeks."
  }
];

const issues = [
  { problem: "Limited Mobility", solution: "Standard tubs and high-step showers can be dangerous for those with limited mobility." },
  { problem: "Slippery Surfaces", solution: "Outdated flooring and shower bases lack the necessary traction for safety." },
  { problem: "Cramped Layouts", solution: "Traditional bathroom layouts often lack the space required for wheelchair or walker access." }
];

const benefitsList = [
  { title: "Enhanced Safety", description: "Reduce the risk of slips and falls with targeted safety features." },
  { title: "Increased Independence", description: "Maintain dignity and independence with a bathroom designed for your needs." },
  { title: "Peace of Mind", description: "Know that your home is safe and accessible for all family members." }
];

const tipsList = [
  { title: "Consult an Expert", description: "Work with contractors who understand ADA guidelines and safety requirements." },
  { title: "Prioritize Lighting", description: "Bright, shadow-free lighting is essential for safety in accessible bathrooms." },
  { title: "Non-Slip Everything", description: "Choose textured tiles and non-slip coatings for all wet areas." }
];

const otherServices = bathroomServices
  .filter(s => s.href !== "/handicap-accessible-bathroom-chandler")
  .slice(0, 3);

export default function AccessibilityPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Handicap Accessible Bathroom Remodeling in Chandler" 
        serviceDescription="Safe and stylish ADA-compliant bathroom modifications in Chandler, AZ." 
        serviceUrl={`${siteConfig.url}/handicap-accessible-bathroom-chandler`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Handicap Accessible Bathroom Chandler AZ"
          subtitle="Safe & ADA-Compliant Remodeling"
          description="Transform your bathroom into a safe, accessible sanctuary with our professional handicap accessible remodeling services in Chandler, AZ."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Accessibility", url: `${siteConfig.url}/handicap-accessible-bathroom-chandler` }]}
        />
        <ServiceProcess
          title="Our Accessibility Remodeling Process"
          subtitle="Safety First"
          description="We focus on creating a bathroom that is safe, functional, and beautiful."
          steps={[
            { number: "01", icon: "Layout", title: "Safety Audit", description: "We assess your current bathroom for hazards and identify necessary modifications." },
            { number: "02", icon: "Ruler", title: "Custom Design", description: "Create a layout that maximizes accessibility while matching your aesthetic." },
            { number: "03", icon: "ShieldCheck", title: "Safety Install", description: "Professional installation of grab bars, non-slip flooring, and accessible fixtures." },
            { number: "04", icon: "Sparkles", title: "Final Check", description: "We test all features to ensure they meet safety and accessibility standards." }
          ]}
        />
        <IssuesSolved
          title="Accessibility Challenges We Solve"
          subtitle="Creating Safer Spaces"
          description="We address the most common safety concerns for Chandler homeowners."
          issues={issues}
        />
        <Benefits
          title="Benefits of an Accessible Bathroom"
          subtitle="Safety & Comfort"
          description="Discover why an accessibility remodel is a wise investment for your home."
          benefits={benefitsList}
        />
        <Tips
          title="Expert Accessibility Tips"
          subtitle="Professional Advice"
          description="How to maintain a safe and accessible bathroom environment."
          tips={tipsList}
        />
        <ServiceCTA title="Ready to make your bathroom safer?" description="Schedule a free consultation to discuss your accessibility needs and get a custom quote." />

        <SubServices 
          title="Related Bathroom Services"
          subtitle="More Solutions"
          description="Explore other ways we can help improve your Chandler bathroom."
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
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">We provide expert accessibility modifications throughout Chandler and the surrounding communities.</p>
            </div>
            <div><GoogleMap lat={33.3062} lng={-111.8413} zoom={12} title="Handicap Accessible Bathroom Chandler" address="Chandler, AZ" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
