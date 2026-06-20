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

export const metadata: Metadata = {title: "Bathroom Tile Installation Chandler AZ | Free Estimate",description: "Professional bathroom tile installation in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
  openGraph: {title: "Bathroom Tile Installation | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom tile installation, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/bathroom-tile-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/og-tile-install.png`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Custom Bathroom Tile Installation in Chandler, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Tile Installation | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore bathroom tile installation, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/og-tile-install.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-tile-installation`,
  },
};

const faqs = serviceContent["bathroom-tile-installation"].faqs;
const chandlerLocation = { lat: 33.3009334, lng: -111.9605964 };
const otherServices = getRelatedServices("/bathroom-tile-installation");

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
          image="/images/services/bathroom-flooring-chandler.webp"
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
              Premium Tile & Custom Shower Installation Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If you have been searching for a professional tile installer, our team provides flawless craftsmanship. We specialize in all forms of custom stone and porcelain tile installation in Chandler, AZ, serving the entire East Valley with premium contracting services.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our specialists are highly skilled in custom tile shower design and bathroom tile layouts. We handle regional requests including tile shower installations in Mesa, Gilbert, Queen Creek, and throughout the surrounding East Valley.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you need subway tile, mosaics, [porcelain tile installation](/blog/porcelain-vs-ceramic-tile-arizona-shower/), large format tiles, or a custom glass backsplash, our precision is unmatched. We manage the initial preparation, including dust-controlled tile removal, so that the substrate is completely clean, waterproofed, and flat.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Need floor updates? We provide custom tile flooring installation services. If you need old tile flooring removed or a new utility space like a laundry room tiled to resist moisture, we handle it efficiently.
            </p>
            <h3 className="font-serif text-2xl font-semibold mt-10 mb-6 text-foreground text-center">
              TCNA Standards and Advanced Substrate Waterproofing in Chandler
            </h3>
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

      </main>
      <Footer />
    </>
  );
}

