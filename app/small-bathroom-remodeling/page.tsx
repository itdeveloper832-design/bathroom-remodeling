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
import { serviceContent } from "@/lib/service-content-data";
import SubServices from "@/components/sub-services";
import { bathroomServices } from "@/lib/bathroom-services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Bathroom Remodel Chandler AZ | Space-Saving Designs",
  description: "Maximize your small bathroom space with our expert remodeling services in Chandler. We specialize in clever layouts, space-saving vanities, and high-impact design for compact baths. Free quote!",
  openGraph: {
    title: "Small Bathroom Remodel Chandler AZ | Space-Saving Designs",
    description: "Expert small bathroom remodeling in Chandler. Maximize space with clever designs, compact fixtures, and luxury finishes.",
    url: `${siteConfig.url}/small-bathroom-remodeling/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/small-bathroom-remodeling/`,
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
          image="/images/optimized/photo-1552321554-5fefe8c9ef14.webp"
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
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Chandler's Premier Small Bathroom Makeover Experts
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you live in a modern townhouse in <strong>Ocotillo</strong>, a family home in <strong>Fulton Ranch</strong>, or are updating an older property in <strong>Sun Lakes</strong>, optimizing a small bathroom requires precise planning and expert craftsmanship. As specialized <strong>small bathroom remodeling contractors in Chandler AZ</strong>, we understand that every square inch matters. From strategic storage solutions to floating vanities and curb-less shower designs, our goal is to make your compact bathroom feel spacious and luxurious.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Many homes in Chandler's established neighborhoods have secondary bathrooms or powder rooms that lack natural light and modern amenities. We employ space-saving designs, utilizing large-format tiles to reduce grout lines, and incorporating custom glass enclosures that open up the visual space. A <strong>small bathroom remodel in Chandler</strong> not only improves your daily routine but significantly boosts your home's resale value.
            </p>
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <p className="text-foreground font-medium mb-4">
                We offer 0% financing on projects over $5,000 — 
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

