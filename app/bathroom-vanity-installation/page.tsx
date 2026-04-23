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
  title: "Bathroom Vanity Installation Chandler AZ | Custom",
  description: "Custom bathroom vanity installation Chandler AZ. Single & double sink setups with luxury countertops. Transform your space today!",
  keywords: ["bathroom vanity installation Chandler", "vanity installation chandler", "bathroom vanity replacement", "double sink vanity", "custom vanity installation"],
  openGraph: {
    title: "Bathroom Vanity Installation Chandler AZ",
    description: "Professional vanity installation in Chandler with custom designs and expert installation.",
    url: `${siteConfig.url}/bathroom-vanity-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/vanity-installation-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Vanity Installation - Chandler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Vanity Installation Chandler AZ",
    description: "Professional vanity installation in Chandler with custom designs and expert installation.",
    images: [`${siteConfig.url}/images/vanity-installation-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-vanity-installation`,
  },
};

const faqs = serviceContent["bathroom-vanity-installation"].faqs;

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

const otherServices = bathroomServices
  .filter(s => s.href !== "/bathroom-vanity-installation")
  .slice(0, 3);

export default function BathroomVanityInstallationPage() {
  const vanityData = serviceContent["bathroom-vanity-installation"];
  
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Vanity Installation in Chandler, Arizona"
        serviceDescription="Professional bathroom vanity installation in Chandler, Arizona. Custom designs, expert installation, and coordinated fixtures."
        serviceUrl={`${siteConfig.url}/bathroom-vanity-installation`}
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Vanity Installation in Chandler, Arizona"
          subtitle="Custom Vanity Installation in Chandler AZ"
          description="Transform your bathroom with expert vanity installation services featuring custom designs, premium materials, and professional craftsmanship."
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Vanity Installation", url: `${siteConfig.url}/bathroom-vanity-installation` },
          ]}
        />

        <ServiceProcess
          title="Bathroom Vanity Installation Process"
          subtitle="Our Process"
          description="Professional vanity installation with precise measurements, quality materials, and expert craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Measure & Plan", description: "Precise measurements and design planning for perfect vanity fit and functionality." },
            { number: "02", icon: "Layout", title: "Select Vanity", description: "Choose from single or double vanities with coordinated countertops and fixtures." },
            { number: "03", icon: "HardHat", title: "Prep & Plumbing", description: "Plumbing adjustments and wall preparation for seamless vanity installation." },
            { number: "04", icon: "Hammer", title: "Install & Level", description: "Professional vanity installation with precise leveling and secure mounting." },
            { number: "05", icon: "Sparkles", title: "Finish & Test", description: "Countertop installation, plumbing connections, and final testing for perfect operation." },
          ]}
        />

        <IssuesSolved
          title="Issues We Solve with Bathroom Vanity Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common vanity installation challenges Chandler homeowners face."
          issues={vanityData.issues}
        />

        <Benefits
          title="Benefits of Professional Vanity Installation"
          subtitle="Why Upgrade Your Vanity"
          description="Discover how professional vanity installation transforms your bathroom's functionality and style."
          benefits={vanityData.benefits}
        />

        <Tips
          title="Expert Vanity Installation Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize your newly installed vanity."
          tips={vanityData.tips}
        />

        <ServiceCTA title="Ready for professional vanity installation in Chandler?" description="Get expert consultation, quality materials, and professional installation for your perfect bathroom vanity." />

        <SubServices 
          title="Explore More Bathroom Services"
          subtitle="More Solutions"
          description="From showers to tile work, we provide complete bathroom remodeling solutions in Chandler."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area for Bathroom Vanity Installation in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide professional bathroom vanity installation services throughout Chandler, Arizona and surrounding areas.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Licensed vanity installation contractors</li>
                <li>• Free estimates and design consultations</li>
              </ul>
            </div>
            <div>
              <GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Vanity Installation in Chandler, AZ" address="Chandler, Arizona" />
            </div>
          </div>
        </section>

        <ServiceCTA title="Need bathroom vanity installation in Chandler, AZ?" description="Contact us today for professional vanity installation with quality materials and expert craftsmanship." />
      </main>
      <Footer />
    </>
  );
}
