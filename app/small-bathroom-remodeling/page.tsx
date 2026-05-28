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
import {  ServiceSchema, FAQSchema , BreadcrumbSchema } from "@/components/seo/json-ld";
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { bathroomServices, getRelatedServices } from "@/lib/bathroom-services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Bathroom Remodeling Chandler AZ | Budget Friendly",
  description: `Maximize space in your guest or hall bathroom. Smart space-saving vanities, curved corner showers, budget-friendly layouts. ROC338304. Call ${siteConfig.phone}.`,
  openGraph: {
    title: "Small Bathroom Remodeling Chandler AZ | Budget Friendly",
    description: "Expert small bathroom remodeling in Chandler. Maximize space with clever designs, compact fixtures, and luxury finishes.",
    url: `${siteConfig.url}/small-bathroom-remodeling/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-small-bath.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Guest and Small Bathroom Remodeling in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Bathroom Remodeling Chandler AZ | Budget Friendly",
    description: "Expert small bathroom remodeling in Chandler. Maximize space with clever designs, compact fixtures, and luxury finishes.",
    images: [`${siteConfig.url}/images/og-small-bath.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/small-bathroom-remodeling/`,
  },
};

const faqs = serviceContent["small-bathroom-remodeling"].faqs;

const chandlerLocation = { lat: 33.3009334, lng: -111.9605964 };

const otherServices = getRelatedServices("/small-bathroom-remodeling/");

export default function SmallBathroomRemodelingPage() {
  const smallBathData = serviceContent["small-bathroom-remodeling"];
  
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Small Bathroom Remodeling", url: "https://arzhomeremodeling.com/small-bathroom-remodeling/" } ]} />
<ServiceSchema serviceName="Small Bathroom Remodeling in Chandler, Arizona" serviceDescription="Professional small bathroom remodeling in Chandler, Arizona. Space-saving designs, storage solutions, and modern fixtures." serviceUrl={`${siteConfig.url}/small-bathroom-remodeling`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Affordable Small Bathroom Remodel Cost Chandler AZ"
          subtitle="Best Small Bathroom Remodeling Services in Chandler AZ"
          description="Get the best small bathroom remodel cost in Chandler AZ. Our licensed small bathroom remodeling contractors deliver space-saving designs and professional bathroom renovation services."
          image="/images/services/chandler-bathroom-remodel.webp"
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Chandler's Premier Small Bathroom Makeover Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">
              Whether you live in a modern townhouse in <strong>Ocotillo</strong>, a family home in <strong>Fulton Ranch</strong>, or are updating a classic property in <strong>Sun Lakes</strong>, optimizing a small bathroom requires precise planning and expert craftsmanship. To get inspired, see our ultimate [small bathroom layout ideas for Chandler](/blog/small-bathroom-layout-ideas-chandler/) homes. As specialized <strong>small bathroom remodeling contractors in Chandler AZ</strong>, we understand that every square inch matters.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">In-Wall Recessed Storage Niches</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standard shelving projects out into the room, blocking your shoulders and making the washroom feel narrower. 
                  We cut directly into standard wall framing cavities to build deep recessed shelves and custom tiled niches, 
                  delivering massive storage without taking up a single inch of floor clearance.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Zero-Barrier Curbless Showers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standard shower tubs with thick high thresholds act like visual walls, chopping your bathroom into tiny pieces. 
                  We install barrier free glass walk in showers, allowing your eyes to sweep uninterrupted across the entire 
                  room to make a compact space feel twice as large.
                </p>
              </div>
            </div>
            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <p className="text-foreground font-medium mb-4">
                We offer zero percent financing on projects over five thousand dollars:
                <Link href="/financing/" className="text-primary hover:underline ml-1">
                  see our bathroom remodeling financing options
                </Link>.
              </p>
            </div>
          </div>
        </section>

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

