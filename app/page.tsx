import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
// Critical above-fold components — imported statically for fastest LCP
import Hero from "@/components/home/hero";
const LocalTrust = dynamic(() => import("@/components/home/local-trust"));
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const AboutPreview = dynamic(() => import("@/components/home/about-preview"));
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"));
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"));
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"));
const ProcessSection = dynamic(() => import("@/components/home/process-section"));
const ChandlerExpertise = dynamic(() => import("@/components/home/chandler-expertise"));
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"));
const Financing = dynamic(() => import("@/components/home/financing"));
const ComparisonBenefits = dynamic(() => import("@/components/home/comparison-benefits"));
const FAQ = dynamic(() => import("@/components/home/faq"));
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"));
const FinalCTA = dynamic(() => import("@/components/home/final-cta"));

// Client components — dynamically loaded so they don't block main thread
const Testimonials = dynamic(() => import("@/components/home/testimonials"));
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), {
  loading: () => <div className="py-20 bg-background"><div className="container mx-auto px-4 h-96 bg-muted/30 rounded-2xl animate-pulse" /></div>,
});
const ContactSection = dynamic(() => import("@/components/home/contact-section"), {
  loading: () => <div className="py-20 bg-secondary"><div className="container mx-auto px-4 h-96 bg-muted/30 rounded-2xl animate-pulse" /></div>,
});



export const metadata: Metadata = {
  title: "Bathroom Remodeling Contractors Chandler AZ | ARZ Remodeling",
  description: "Looking for premier bathroom remodeling contractors in Chandler, AZ? We specialize in luxury master bath renovations, custom walk-in showers, and tub-to-shower conversions. Call +14803065591 for a free estimate!",
  openGraph: {
    title: "Bathroom Remodeling Contractors Chandler AZ | ARZ Remodeling",
    description: "Expert bathroom remodeling in Chandler, AZ. Licensed contractors delivering premium renovations from Ocotillo to Sun Lakes. Free Quote!",
    type: "website",
  },

  alternates: {
    canonical: `${siteConfig.url}/`,
  },
};

const homeFaqs = [
  {
    question: "How much does bathroom remodeling cost in Chandler?",
    answer:
      "A professional bathroom remodel in Chandler, Arizona typically costs between <strong>$12,500 and $38,000+</strong>, depending on scope and materials. Simple powder room refreshes or guest baths near Alma School Road average <strong>$6,500 to $15,000</strong>, while custom master bathroom transformations in upscale neighborhoods like Ocotillo and Fulton Ranch range from <strong>$25,000 to over $55,000</strong>. Tub-to-shower conversions generally cost <strong>$8,500 to $16,000</strong> depending on tile choices and plumbing adjustments."
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "A standard bathroom renovation in the East Valley takes about <strong>2 to 3 weeks</strong> of active construction. Smaller projects like a simple tub-to-shower replacement can be finished in <strong>3 to 5 days</strong>. Major master suite overhauls involving layout reconfigurations, custom walk-in showers, and new vanity installations can take <strong>4 to 6 weeks</strong>. We outline a clear, day-by-day project schedule beforehand to minimize disruption for local homeowners."
  },
  {
    question: "Is bathroom remodeling worth it?",
    answer:
      "Yes, bathroom remodeling is highly worth it for both daily lifestyle enjoyment and home equity. Modernizing an outdated bathroom improves daily comfort, increases water efficiency with low-flow fixtures, and resolves hidden water damage from Chandler's hard water. Professionally executed remodels consistently deliver one of the highest returns of any home improvement project, typically recovering <strong>60% to 70% of their cost</strong> upon resale."
  },
  {
    question: "Do you need permits in Chandler?",
    answer:
      "Yes, major bathroom remodeling projects in Chandler require building permits from the <strong>City of Chandler Development Services Dept</strong> (located near Downtown Chandler on Arizona Avenue). Permits are necessary if you are relocating plumbing lines, moving walls, modifying electrical layouts, or installing new subpanels. Simple aesthetic upgrades, like swapping out a vanity or tiling a floor, do not require permits. We manage the entire permitting and City inspection process for you."
  },
  {
    question: "What materials work best in Arizona bathrooms?",
    answer:
      "Arizona's dry desert climate and exceptionally hard municipal water demand specific materials. <strong>Porcelain and ceramic tile</strong> are ideal for floors and shower walls due to their extreme moisture resistance and ease of cleaning. We recommend <strong>epoxy grout</strong> to resist mineral stains and hard water buildup. For custom vanities, select solid wood or high-density furniture-grade plywood; avoid cheap MDF which easily swells and warps under sudden bathroom humidity spikes."
  },
  {
    question: "Are walk in showers worth it?",
    answer:
      "Yes, custom walk-in showers are highly desirable for modern homeowners. They offer a spacious, spa-like aesthetic, make your bathroom feel significantly larger, and provide safe, barrier-free accessibility. Additionally, walk-in showers are extremely popular for resale, often making a home stand out to buyers looking for modern luxury and universal design features."
  },
  {
    question: "Can you convert a bathtub into a shower?",
    answer:
      "Absolutely. Converting an underutilized garden tub or old bathtub into a modern walk-in shower is our most requested service in Chandler. The process involves removing the existing tub, modifying the plumbing drain to a standard 2-inch shower line, installing high-grade Schluter waterproofing systems, and laying custom tile. It's a smart upgrade that enhances both safety and usable bathroom space."
  },
  {
    question: "What is included in ADA bathroom remodeling?",
    answer:
      "An ADA-compliant or accessible bathroom remodel focuses on universal design and safety. Key elements include <strong>curbless (zero-threshold) walk-in showers</strong>, ADA-compliant grab bars anchored securely into wall framing, comfortable slip-resistant flooring, comfort-height toilets, open-underneath wheel-chair accessible vanities, and wider doorways (at least 32 to 36 inches). These modifications allow local seniors and individuals with mobility needs to age in place safely."
  },
  {
    question: "How do you remodel a small bathroom?",
    answer:
      "To remodel a small bathroom successfully, focus on maximizing floor space and visual openness. Use a <strong>floating vanity</strong> to expose more flooring, choose a light color palette, and install a frameless glass shower panel instead of a curtain to keep sightlines clear. Large-format tiles with minimal grout lines make the space feel wider. We also recommend incorporating recessed wall niches for toiletries to eliminate bulky hanging organizers."
  },
  {
    question: "What is the best tile for bathroom floors?",
    answer:
      "<strong>Porcelain tile</strong> is the absolute best choice for Arizona bathroom floors. It is extremely dense, highly scratch-resistant, and absorbs virtually no moisture (less than 0.5%). For maximum safety, choose porcelain tiles with a <strong>textured, slip-resistant finish</strong> (COF rating of 0.60 or higher). Porcelain also resists the aggressive mineral deposits and white scaling caused by Chandler's hard water better than natural stone."
  },
  {
    question: "Does bathroom remodeling increase home value?",
    answer:
      "Yes, professional bathroom remodeling is one of the most reliable ways to increase your home's market value. Real estate studies in the East Valley show that a modern bathroom renovation yields a substantial return, often boosting the overall resale value of a Chandler home by <strong>$15,000 to $30,000+</strong>. Buyers prioritize clean, updated bathrooms, which translates to faster home sales and higher offers."
  },
  {
    question: "What bathroom upgrades give the best ROI?",
    answer:
      "The bathroom upgrades with the highest return on investment (ROI) include: 1) <strong>Tub-to-shower conversions</strong> (especially replacing unused garden tubs with custom tiled walk-in showers). 2) <strong>Double vanity upgrades</strong> featuring durable quartz or granite countertops. 3) <strong>High-efficiency, modern lighting</strong> and water-saving plumbing fixtures. 4) <strong>Textured porcelain tile flooring</strong> that stands up to heavy wear and Arizona hard water."
  },
  {
    question: "What bathroom remodeling mistakes should homeowners avoid?",
    answer:
      "Key bathroom remodeling mistakes to avoid include: 1) <strong>Poor waterproofing:</strong> Neglecting specialized substrates like Schluter-Kerdi boards, leading to rot or mold behind tile. 2) <strong>Inadequate ventilation:</strong> Installing low-CFM exhaust fans that fail to clear moisture, causing mold and peeling paint. 3) <strong>Skipping HOA pre-approvals:</strong> Many master-planned communities in Fulton Ranch or Ocotillo require architectural approvals for exterior dumpster placements and work hours. 4) <strong>Hiring unlicensed handymen:</strong> Plumbing and electrical in wet areas must be performed by licensed professionals to prevent major water leaks and ensure code compliance."
  }
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <div className="content-visibility-auto">
          <LocalTrust cityName="Chandler" />
          <AboutPreview />
          <ServicesGrid />
          <WhyChooseUs />
          <BathroomSection />
          <ProcessSection />
          <ChandlerExpertise />
          <ServiceAreas />
          <Financing />
          <ComparisonBenefits />
          <FAQ />
          <BlogPreview />
          <Testimonials />
          <GalleryPreview />
          <ContactSection />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

