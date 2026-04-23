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
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Small Bathroom Remodel Chandler AZ | Maximize Space",
  description: "Expert small bathroom remodel Chandler AZ. We maximize space & aesthetic with modern vanity and tile upgrades. Get your free estimate!",
  keywords: ["small bathroom remodel Chandler", "small bathroom remodel cost chandler az", "affordable small bathroom remodel cost chandler az", "best small bathroom remodel cost chandler az", "local small bathroom remodel cost chandler az", "professional small bathroom remodel cost chandler az", "small bathroom remodeling chandler", "space-saving bathroom design"],
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

const faqs = serviceContent["small-bathroom-remodeling"].faqs;

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

const otherServices = bathroomServices
  .filter(s => s.href !== "/small-bathroom-remodeling")
  .slice(0, 3);

export default function SmallBathroomRemodelingPage() {
  const smallBathData = serviceContent["small-bathroom-remodeling"];
  
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
          issues={smallBathData.issues}
        />
        <Benefits
          title="Benefits of Small Bathroom Remodeling"
          subtitle="Why Remodel Your Small Bathroom"
          description="Discover how professional small bathroom remodeling maximizes space and adds value to your home."
          benefits={smallBathData.benefits}
        />
        <Tips
          title="Expert Small Bathroom Remodeling Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize your newly remodeled small bathroom."
          tips={smallBathData.tips}
        />
        <ServiceCTA title="Ready for small bathroom remodeling in Chandler?" description="Get expert space-maximizing design, smart storage solutions, and professional installation for your small bathroom." />

        <SubServices 
          title="Other Space-Saving Solutions"
          subtitle="More Upgrades"
          description="From vanity updates to custom tile, we can maximize every inch of your bathroom."
          services={otherServices.map(s => s.name)}
        />

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
