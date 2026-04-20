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

export const metadata: Metadata = {
  title: "Bathroom Tile Installation Chandler AZ | Expert",
  description: "Professional bathroom tile installation in Chandler, AZ. Shower tile, floor tile, and backsplash with waterproofing. Free estimates available!",
  keywords: ["bathroom tile installation chandler az", "shower tile installation chandler", "bathroom floor tile", "tile contractors chandler", "bathroom backsplash installation", "waterproof tile installation"],
  openGraph: {
    title: "Bathroom Tile Installation Chandler AZ",
    description: "Professional bathroom tile installation in Chandler with shower tile, floor tile and backsplash work.",
    url: `${siteConfig.url}/bathroom-tile-installation`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/tile-installation-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Tile Installation - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Tile Installation Chandler AZ",
    description: "Professional bathroom tile installation in Chandler with shower tile, floor tile and backsplash work.",
    images: [`${siteConfig.url}/images/tile-installation-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-tile-installation`,
  },
};

const faqs = serviceContent["bathroom-tile-installation"].faqs;

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomTileInstallationPage() {
  const tileData = serviceContent["bathroom-tile-installation"];
  
  return (
    <>
      <ServiceSchema serviceName="Bathroom Tile Installation in Chandler, Arizona" serviceDescription="Professional bathroom tile installation in Chandler, Arizona. Shower tile, floor tile, and backsplash installation with waterproofing." serviceUrl={`${siteConfig.url}/bathroom-tile-installation`} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Tile Installation in Chandler, Arizona"
          subtitle="Expert Tile Installation in Chandler AZ"
          description="Professional bathroom tile installation with waterproof systems, precision craftsmanship, and premium materials for lasting beauty."
          image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[{ name: "Home", url: siteConfig.url }, { name: "Bathroom Tile Installation", url: `${siteConfig.url}/bathroom-tile-installation` }]}
        />
        <ServiceProcess
          title="Bathroom Tile Installation Process"
          subtitle="Our Process"
          description="Professional tile installation with waterproof preparation and precision craftsmanship."
          steps={[
            { number: "01", icon: "Ruler", title: "Layout & Design", description: "Plan tile patterns, grout lines, and transitions that align with fixtures and design." },
            { number: "02", icon: "ShieldCheck", title: "Surface Preparation", description: "Install backer board, waterproofing membranes, and level surfaces for tile installation." },
            { number: "03", icon: "Hammer", title: "Tile Installation", description: "Precision tile setting with proper spacing, alignment, and cuts around fixtures." },
            { number: "04", icon: "Paintbrush", title: "Grouting", description: "Professional grout application with consistent color and proper curing time." },
            { number: "05", icon: "Sparkles", title: "Sealing & Finishing", description: "Grout sealing, final cleanup, and quality inspection for perfect results." }
          ]}
        />
        <IssuesSolved
          title="Issues We Solve with Bathroom Tile Installation"
          subtitle="Common Problems Fixed"
          description="We address the most common tile installation challenges Chandler homeowners face."
          issues={tileData.issues}
        />
        <Benefits
          title="Benefits of Professional Bathroom Tile Installation"
          subtitle="Why It Matters"
          benefits={tileData.benefits}
        />
        <Tips
          title="Expert Bathroom Tile Installation Tips"
          subtitle="Professional Insights"
          description="Smart strategies to maintain and maximize your newly installed bathroom tile."
          tips={tileData.tips}
        />
        <ServiceCTA title="Ready for professional bathroom tile installation?" description="Get expert design consultation, quality materials, and precision installation for beautiful bathroom tile work." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">Bathroom Tile Installation Service Area in Chandler, Arizona</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">Expert bathroom tile installation services throughout Chandler, Arizona and surrounding communities.</p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby areas</li>
                <li>• Licensed tile installation contractors</li>
                <li>• Waterproofing and precision installation specialists</li>
              </ul>
            </div>
            <div><GoogleMap lat={chandlerLocation.lat} lng={chandlerLocation.lng} zoom={12} title="Bathroom Tile Installation in Chandler, AZ" address="Chandler, Arizona" /></div>
          </div>
        </section>
        <ServiceCTA title="Need bathroom tile installation in Chandler, AZ?" description="Contact us for professional bathroom tile installation with waterproof systems and expert craftsmanship." />
      </main>
      <Footer />
    </>
  );
}
