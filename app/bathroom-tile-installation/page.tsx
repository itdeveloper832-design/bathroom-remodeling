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

const faqs = [
  { question: "How much does bathroom tile installation cost in Chandler?", answer: "Bathroom tile installation in Chandler costs $8-$25 per square foot depending on tile type and complexity. Basic ceramic tile starts around $8-$12/sq ft, while premium porcelain or natural stone ranges from $15-$25/sq ft including materials and labor." },
  { question: "What type of tile is best for bathroom showers?", answer: "Porcelain tile is ideal for bathroom showers due to its low water absorption, durability, and easy maintenance. We also recommend ceramic tile for budget-friendly options and natural stone for luxury aesthetics." },
  { question: "Do you install tile on shower walls and floors?", answer: "Yes! We install tile on shower walls, floors, backsplashes, and bathroom floors. We use proper waterproofing membranes, cement backer board, and premium materials for long-lasting installations." },
  { question: "How long does bathroom tile installation take?", answer: "Bathroom tile installation typically takes 3-7 days depending on the area being tiled. Shower walls take 3-4 days, while complete bathroom tile work takes 5-7 days including waterproofing, setting, grouting, and sealing." }
];

const chandlerLocation = { lat: 33.3062, lng: -111.8413 };

export default function BathroomTileInstallationPage() {
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
          issues={[
            { problem: "Water damage from inadequate waterproofing behind tiles.", solution: "Professional waterproofing membranes and sealed penetrations for complete moisture protection." },
            { problem: "Cracked or loose tiles from poor substrate preparation.", solution: "Proper surface preparation with leveling compounds and appropriate substrates." },
            { problem: "Uneven grout lines and tile lippage.", solution: "Precision installation with leveling systems and consistent spacing for professional results." },
            { problem: "Stained or crumbling grout in wet areas.", solution: "Quality grout products with proper sealing to resist moisture and discoloration." },
            { problem: "Tiles that don't complement bathroom design.", solution: "Expert material selection and layout planning for cohesive bathroom aesthetics." }
          ]}
        />
        <Benefits
          title="Benefits of Professional Bathroom Tile Installation"
          subtitle="Why It Matters"
          benefits={[
            { icon: "ShieldCheck", title: "Waterproof Protection", description: "Professional waterproofing systems prevent moisture damage and mold growth." },
            { icon: "Sparkles", title: "Precision Installation", description: "Expert craftsmanship creates beautiful, aligned tile work with consistent grout lines." },
            { icon: "Timer", title: "Long-Lasting Durability", description: "Quality materials and installation techniques ensure years of reliable performance." },
            { icon: "TrendingUp", title: "Increased Home Value", description: "Professional tile work significantly enhances your bathroom's value and appeal." },
            { icon: "Layout", title: "Custom Design Options", description: "Unlimited design possibilities with various tile sizes, patterns, and materials." }
          ]}
        />
        <Tips
          title="Bathroom Tile Installation Tips & Maintenance"
          subtitle="Keep It Looking New"
          description="Expert tips to maintain your newly installed bathroom tile."
          tips={[
            "Choose porcelain or ceramic tile for high-moisture areas like showers and tub surrounds.",
            "Use pH-neutral cleaners on natural stone and grout-safe products on ceramic tile.",
            "Seal grout lines annually in wet areas to maintain water resistance and prevent staining.",
            "Run exhaust fans during and after showers to reduce humidity and prevent mold growth.",
            "Address any cracked or loose tiles promptly to prevent water intrusion and further damage."
          ]}
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
