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

export const metadata: Metadata = {
  title: {
    absolute: "Bathroom Vanity Installation Chandler AZ | Experts"
  },
  description: "Upgrade your bathroom with a stylish new vanity. Professional installation, quality products, and free estimates.",
  openGraph: {
    title: "Bathroom Vanity Installation Chandler AZ",
    description: "Professional vanity installation in Chandler with custom designs and expert installation.",
    url: `${siteConfig.url}/bathroom-vanity-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-vanity-install.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Vanity Installation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Vanity Installation Chandler AZ",
    description: "Professional vanity installation in Chandler with custom designs and expert installation.",
    images: [`${siteConfig.url}/images/og-vanity-install.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-vanity-installation`,
  },
};

const faqs = serviceContent["bathroom-vanity-installation"].faqs;

const chandlerLocation = { lat: 33.3009334, lng: -111.9605964 };

const otherServices = getRelatedServices("/bathroom-vanity-installation");

export default function BathroomVanityInstallationPage() {
  const vanityData = serviceContent["bathroom-vanity-installation"];
  
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Vanity Installation", url: "https://arzhomeremodeling.com/bathroom-vanity-installation/" } ]} />
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
          image="/images/projects/modern-double-vanity-chandler.webp"
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

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Premium Bathroom Cabinets, Countertops & Vanity Installations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A professional bathroom vanity replacement requires advanced alignment, premium materials, and heavy weight support. At ARZ Home Remodeling, we offer custom <strong>bathroom cabinets chandler</strong> and professional <strong>cabinet installation chandler</strong> services. We specialize in luxury <strong>countertop installation chandler</strong>, coordinating stunning [quartz countertops](/blog/master-bathroom-remodel-cost-chandler/) chandler, <strong>marble countertops chandler</strong>, and standard <strong>countertops chandler az</strong> slab selections. If you are shopping around local slab yards or a <strong>countertop showroom chandler</strong>, we help you secure wholesale pricing and coordinate professional fabrication.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              While our primary focus is bathroom vanity and cabinetry upgrades, we also coordinate <strong>kitchen countertops chandler</strong> and <strong>quartz kitchen countertops in chandler</strong> projects for complete home renovations. To complete the clean aesthetic of your space, we offer professional <strong>crown moulding installation chandler az</strong>, and related storage updates like a custom <strong>closet remodel chandler az</strong> or <strong>closet remodel gilbert az</strong>. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you need a custom vanity set up locally or require <strong>bathroom vanity installation phoenix</strong> or <strong>bathroom vanity installation scottsdale</strong> services in neighboring cities, our team ensures precise leveling and leak free plumbing connections.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Custom Drain Line Realignment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Upgrading to double sinks or changing drawer layouts often requires shifting under-sink pipes. We re-route drain 
                  lines and install premium brass angle stop valves to ensure a lifetime of trouble-free water flow.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Precision Subfloor Cedar Shimming</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Installing a heavy quartz vanity on an uneven tile or concrete subfloor causes the frame to warp. We align the base 
                  perfectly using heavy cedar shims before fastening, guaranteeing drawer tracks never stick.
                </p>
              </div>
            </div>
          </div>
        </section>

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

