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
import { bathroomServices } from "@/lib/bathroom-services";

export const metadata: Metadata = {
  title: "Tile Installation Chandler AZ | Shower Tile & Bathroom Flooring | Contractors",
  description: "Professional tile installation and tile shower installation in Chandler, AZ. Ceramic, porcelain, marble flooring, shower tile, backsplash. Licensed tile installers near you. Free quote.",
  openGraph: {
    title: "Bathroom Tile Installation in Chandler AZ",
    description: "Professional tile setting in Chandler with shower walls, floor tiles, and backsplash work.",
    url: `${siteConfig.url}/bathroom-tile-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tile-installation-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Custom Bathroom Tile Chandler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tile Installation Chandler AZ",
    description: "Professional tiling services in Chandler with shower walls, floor tiles, and backsplashes.",
    images: [`${siteConfig.url}/images/tile-installation-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-tile-installation`,
  },
};

const faqs = serviceContent["bathroom-tile-installation"].faqs;
const chandlerLocation = { lat: 33.3062, lng: -111.8413 };
const otherServices = bathroomServices
  .filter(s => s.href !== "/bathroom-tile-installation")
  .slice(0, 3);

export default function BathroomTileInstallationPage() {
  const tileData = serviceContent["bathroom-tile-installation"];
  
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Tile Installation", url: "https://arzhomeremodeling.com/bathroom-tile-installation/" } ]} />
<ServiceSchema 
        serviceName="Bathroom Tile Installation in Chandler, Arizona" 
        serviceDescription="Expert bathroom tile setting in Chandler, Arizona. Custom flooring, waterproof shower walls, and premium ceramics." 
        serviceUrl={`${siteConfig.url}/bathroom-tile-installation`} 
      />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Premium Tile Installation in Chandler, Arizona"
          subtitle="Expert Tile Installation Chandler AZ"
          description="Elevate your space with flawless tiling work. From waterproof shower surrounds to stunning floor patterns, our precision craftsmanship ensures lasting beauty."
          image="/images/optimized/photo-1507089947368-19c1da9775ae.webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Tile Installation", url: `${siteConfig.url}/bathroom-tile-installation` }]}
        />
        <ServiceProcess
          title="Our Tiling Process"
          subtitle="How We Work"
          description="A professional approach to setting ceramics, porcelain, and stone with waterproof preparation and precision craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Layout & Design", description: "Plan patterns, grout lines, and transitions that align perfectly with your space." },
            { number: "02", icon: "ShieldCheck", title: "Surface Preparation", description: "Install backer board, waterproofing membranes, and level surfaces for longevity." },
            { number: "03", icon: "Hammer", title: "Tile Setting", description: "Precision placement with proper spacing, alignment, and expert cuts around fixtures." },
            { number: "04", icon: "Paintbrush", title: "Grouting", description: "Professional application with consistent color and proper curing time." },
            { number: "05", icon: "Sparkles", title: "Sealing & Finishing", description: "Sealing against moisture, final cleanup, and a quality inspection for perfect results." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Custom Tiling"
          subtitle="Common Problems Fixed"
          description="We address the most common flooring and shower wall challenges Chandler homeowners face."
          issues={tileData.issues}
        />
        <Benefits
          title="Benefits of Professional Tile Work"
          subtitle="Why It Matters"
          benefits={tileData.benefits}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              TCNA Standards and Advanced Substrate Waterproofing in Chandler
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our <strong>bathroom tile installation in Chandler AZ</strong> protects your framing from moisture damage. 
              We strictly follow Tile Council of North America standards to deliver leak free shower surrounds and flat floor tile layouts.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Schluter Kerdi Vapor Barriers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We do not lay wet area tiles straight over standard drywall or greenboard. We construct shower enclosures using solid 
                  backer boards fully sealed in Schluter Kerdi waterproofing membranes to create an absolute moisture barrier.
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-foreground">Polymer-Modified Thinset Mortar</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Desert foundation shifts break standard mortar bonds, cracking grout lines. We utilize advanced polymer thinset 
                  incorporating latex additives to allow the tile bed to flex without cracking or popping loose.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tips
          title="Expert Maintenance Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize the life of your newly upgraded surfaces."
          tips={tileData.tips}
        />
        <ServiceCTA title="Ready for a stunning flooring upgrade?" description="Get expert design consultation, quality materials, and precision tiling for your dream home." />

        <SubServices 
          title="Explore More Washroom Upgrades"
          subtitle="Complete Solutions"
          description="Beyond tile, we offer full-service renovation options to transform your home."
          services={otherServices.map(s => s.name)}
        />

        <ServiceFAQ faqs={faqs} />
        <Testimonials category="bathroom-tile-installation" />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Tile Installation Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Expert surface upgrades and <strong>tile installation in Chandler</strong>, along with professional flooring services throughout Chandler, Arizona and surrounding communities.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby areas</li>
                <li>• Licensed local contractors</li>
                <li>• Waterproofing and precision specialists</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Tile Setting in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need a flooring update in Chandler, AZ?" description="Contact us for custom tiling with waterproof systems and expert craftsmanship." />
      </main>
      <Footer />
    </>
  );
}

