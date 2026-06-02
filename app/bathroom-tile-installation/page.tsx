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
  title: "Bathroom Tile Installer Chandler AZ - Custom Shower Tile",
  description: `Expert shower & bathroom floor tile installation in Chandler, AZ. Epoxy grout & hard water scale defense systems. Licensed ROC338304. Call ${siteConfig.phone}.`,
  openGraph: {
    title: "Bathroom Tile Installer Chandler AZ - Custom Shower Tile",
    description: "Professional tile setting in Chandler with shower walls, floor tiles, and backsplash work.",
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
    card: "summary_large_image",
    title: "Bathroom Tile Installer Chandler AZ - Custom Shower Tile",
    description: "Professional tiling services in Chandler with shower walls, floor tiles, and backsplashes.",
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
              If you have been searching for a professional <strong>tile installation near me</strong>, certified <strong>tile installers near me</strong>, or the best <strong>tiles installers near me</strong>, our team provides flawless craftsmanship. We specialize in all forms of custom stone and <strong>tile installation chandler</strong>, as well as <strong>tile installation chandler az</strong>, serving the entire East Valley as top-tier <strong>tile installation contractors near me</strong> and <strong>tile installation companies near me</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our specialists are highly skilled in <strong>tile shower installation chandler</strong>, <strong>tile shower installation services chandler</strong>, <strong>tile shower installers near me</strong>, and general <strong>bathroom tile installers near me</strong>. We handle regional requests including <strong>tile shower installation mesa</strong>, <strong>tile shower installation gilbert</strong>, <strong>tile shower installation queen creek</strong>, and complete <strong>tile shower installation arizona</strong> layouts.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you need a custom <strong>subway tile installation near me</strong>, <strong>mosaic tile installation near me</strong>, [porcelain tile installation](/blog/porcelain-vs-ceramic-tile-arizona-shower/) near me, <strong>large format tile installers near me</strong>, <strong>ceramic tile contractors near me</strong>, <strong>glass tile installers near me</strong>, or a custom <strong>backsplash installation chandler</strong>, our precision is unmatched. We handle the initial preparation, including <strong>chandler tile removal</strong>, specialized <strong>tile removal contractors chandler</strong>, <strong>tile removal contractors chandler az</strong>, and professional <strong>tile removal company chandler az</strong> solutions, so that the substrate is completely clean and flat.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Need floor updates? We provide custom <strong>tile flooring installation chandler az</strong> and complete <strong>tile floor installation chandler</strong> services. If you need <strong>tile floor removal chandler</strong>, <strong>tile floor removal chandler az</strong>, or a custom <strong>tile floor chandler az</strong>, we extract the old material efficiently. We also provide <strong>laundry room tile installation near me</strong> to keep your entire utility space safe and moisture-resistant.
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

