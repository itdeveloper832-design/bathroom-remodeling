import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { ServiceSchema, FAQSchema, PriceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import {
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  DollarSign,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home Remodeling Contractors Layton Lakes AZ | ARZ Home",
  description: "Professional home, kitchen, and bathroom remodeling in Layton Lakes, AZ. Get your custom renovation with a 2-year warranty. Call today!",
  openGraph: {
    title: "Home & Bath Remodeling Layton Lakes AZ | ARZ",
    description: "Licensed home, kitchen, and bathroom remodeling services in Layton Lakes, AZ. Custom walk-in showers, quartz countertops, and full home updates.",
    url: `${siteConfig.url}/bathroom-remodeling-layton-lakes/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home & Bath Remodeling Layton Lakes AZ | ARZ",
    description: "Licensed home, kitchen, and bathroom remodeling services in Layton Lakes, AZ. Custom walk-in showers, quartz countertops, and full home updates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-layton-lakes/`,
  },
};

const faqData = [
  {
    question: "Do I need a building permit for remodeling my home in Layton Lakes?",
    answer:
      "Yes. If your Layton Lakes home is in the Chandler portion, the City of Chandler requires permits for structural modifications, plumbing rerouting, and new electrical circuits. If it lies within the Gilbert boundaries, the Town of Gilbert manages approvals. We identify the correct municipality and manage the entire permitting and inspection process for you."
  },
  {
    question: "How long does a kitchen or bathroom remodel typically take?",
    answer:
      "A standard guest bathroom update or tub-to-shower conversion takes two to three weeks. A comprehensive master bathroom suite renovation takes four to six weeks. Full kitchen remodeling projects generally take five to eight weeks depending on cabinet manufacturing and structural wall modifications."
  },
  {
    question: "How do you protect tiled showers from hard water stains in Layton Lakes?",
    answer:
      "Layton Lakes has mineral-heavy tap water (often over 18 grains of hardness) that easily stains standard cement-based grout. We use premium non-porous porcelain tiles and high-performance, stain-resistant epoxy grout that prevents mineral absorption. We also apply a hydrophobic protective coating to frameless glass shower doors to repel water and prevent white calcium scale buildup."
  },
  {
    question: "Can you remove kitchen walls to create an open-concept layout?",
    answer:
      "Yes. We specialize in open-concept kitchen transformations. Our team identifies load-bearing walls, installs engineered support headers (such as LVL beams), and safely reconfigures plumbing and electrical lines to merge your kitchen and family room into a seamless, bright layout."
  },
  {
    question: "What is your warranty policy for custom home renovations?",
    answer:
      "We stand behind all of our construction work with a comprehensive 2-year workmanship warranty. If any structural, plumbing, or installation issue arises due to our craftsmanship within two years of completing your project, our team will return and repair it at absolutely no cost to you."
  },
];

const services = [
  {
    title: "Bathroom Remodeling",
    href: "/bathroom-remodeling-chandler-az/",
    description:
      "Transform your bathroom into a luxury retreat. We specialize in curbless walk-in showers, custom tile design, double vanities with quartz tops, freestanding soaking tubs, and modern LED lighting layouts.",
    price: "Free Estimate",
  },
  {
    title: "Kitchen Remodeling",
    href: "/kitchen-remodeling-chandler-az/",
    description:
      "Create a functional and beautiful culinary space. We offer custom solid wood cabinets, massive kitchen islands, professional tile backsplashes, built-in pantries, and open-concept structural wall removals.",
    price: "Free Estimate",
  },
  {
    title: "Home Renovation",
    href: "/home-renovation-chandler-az/",
    description:
      "Complete home updates designed for modern living. We install premium luxury vinyl plank (LVP) flooring, renovate custom fireplace surrounds, expand walk-in closets, and handle complete interior updates.",
    price: "Free Estimate",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "ROC Licensed & Bonded",
    body: "Fully licensed by the state of Arizona (ROC338304) and fully insured for your ultimate safety and peace of mind.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand firmly behind our work. If any installation issues occur within two years, we resolve them completely free.",
  },
  {
    icon: MapPin,
    title: "Layton Lakes Experts",
    body: "We are deeply familiar with Layton Lakes home designs, HOA design guidelines, and local permit regulations.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Guarantee",
    body: "The price on your signed contract is exactly what you pay. No unexpected fees, markup surprises, or change order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Engineering",
    body: "We utilize premium epoxy grouts, solid surfaces, and protective glass treatments to repel local mineral scale.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    body: "We provide clear, written construction schedules and supervise the worksite daily to ensure clean, prompt completion.",
  },
];

export default function LaytonLakesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Home Remodeling Layton Lakes", url: "https://arzhomeremodeling.com/bathroom-remodeling-layton-lakes/" }
      ]} />
      <ServiceSchema
        serviceName="Home & Bathroom Remodeling in Layton Lakes, AZ"
        serviceDescription="Licensed general remodeling contractor serving Layton Lakes, Chandler, AZ. Custom walk-in showers, open-concept kitchens, custom cabinets, and full home remodeling."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-layton-lakes/`}
      />
      <FAQSchema faqs={faqData} />
      <PriceSchema
        serviceName="Layton Lakes Remodeling Services"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-layton-lakes/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium Home & Bathroom Remodeling in Layton Lakes, AZ"
          subtitle="Exceptional Craftsmanship for Modern Master-Planned Communities"
          description="Elevate your living space with the East Valley's premier remodeling contractor. Serving Layton Lakes with high-end bathroom remodels, custom walk-in showers, open-concept kitchens, and complete home renovations."
          image="/images/services/chandler-bathroom-remodel.jpg"
          titleClassName="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Layton Lakes Remodeling", url: `${siteConfig.url}/bathroom-remodeling-layton-lakes/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Your Local Remodeling Partner in Layton Lakes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Layton Lakes is one of the premier master-planned communities in the East Valley, featuring gorgeous community lakes, streams, walking paths, and parks that span the borders of southeast Chandler and southwest Gilbert. Built from the mid-2000s onward, these properties boast modern floor plans and excellent structural integrity. However, many homes still feature standard builder-grade finishes, dark cabinetry, and basic bathroom layouts. As styles shift toward bright, open-concept designs and custom features, upgrading your home's interior is a highly effective way to match your living space with the upscale feel of the neighborhood.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At <Link href="/" className="text-primary hover:underline font-medium">ARZ Home Remodeling</Link>, we specialize in converting standard developer layouts into premium, custom spaces. Whether you want to replace an old master bath tub-and-shower combo with a massive walk-in tiled shower, install custom double vanities with quartz tops, or open up kitchen walls to construct a massive culinary island, we deliver ROC licensed craftsmanship. We use advanced materials like <Link href="/blog/schluter-kerdi-vs-redgard-arizona/" className="text-primary hover:underline font-medium">Schluter-KERDI waterproofing systems</Link> and stain-resistant epoxy grouts to ensure that your new kitchen, bath, or full home update is built to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for a Free In-Home Consultation!
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+15205693339" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  (520) 569-3339
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* LOCAL COMMUNITY & PERMIT HIGHLIGHTS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Remodeling Custom Homes in the Layton Lakes Area
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Remodeling in Layton Lakes requires a contractor who understands the community's unique boundary system, local HOA architectural guidelines, and construction layouts. Properties near Queen Creek Road, Germann Road, and Lindsay Road feature beautiful Modern Desert, Transitional Family, and Southwestern designs. Upgrading these properties requires a professional team that can coordinate design-build details with HOA committees to ensure quick approvals.
            </p>
            
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Layton Lakes Home Renovation Project:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project we completed in the Layton Lakes community involved updating a builder-grade master suite. The bathroom had a basic acrylic corner tub and a small glass shower pan. We removed the tub to build a massive walk-in double shower with a zero-threshold curbless entry. We installed large-format porcelain wall tiles, slip-resistant mosaic floor tiles, a built-in bench, dual rainfall shower heads, and new custom double vanities with backlit LED mirrors. To combat hard water mineral scale, we utilized high-performance epoxy grout and treated the glass enclosure with EnduroShield coating.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Navigating Building Permits & Inspections:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Layton Lakes spans across the municipal limits of both the City of Chandler and the Town of Gilbert, determining the correct permit jurisdiction is the first step in any structural, plumbing, or electrical remodel. ARZ Home Remodeling manages the entire permitting process on your behalf. We prepare detailed layouts, submit them to the correct building division (whether the City of Chandler or the Town of Gilbert), and coordinate all structural, plumbing, and electrical inspections to ensure your remodel is fully safe and code-compliant.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Services in Layton Lakes
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div key={svc.title} className="bg-background rounded-2xl p-8 border border-border flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">{svc.price}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{svc.description}</p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline mt-auto"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED SERVICE AREAS FOCUS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              High-End Kitchen and Bath Remodeling Services
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Upgrading the kitchen and bathrooms in your Layton Lakes home is the most effective way to add lasting comfort, modern utility, and real property value.
            </p>
            
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Custom Bathroom Remodeling & Tub-to-Shower Conversions
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our bathroom remodeling team specializes in turning builder-grade spaces into beautiful, functional home spas. The most requested update in Layton Lakes is a tub-to-shower conversion, where we remove the large, unused tub deck and build a massive, walk-in tiled shower. This conversion instantly opens up the bathroom layout, making the space feel twice as large while improving safety with low or zero-threshold curbless entry options. We construct walk-in showers with built-in tile benches, linear drains, niches, and frameless heavy glass panels.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              To protect your subfloors and wall cavities from moisture damage, we use the Schluter-KERDI waterproofing system exclusively. This vapor-tight waterproofing membrane is applied directly to the walls and shower pan, ensuring that your custom tile shower is completely leak-proof and mold-free for life. We complete the remodel with custom double vanities, quartz countertops, comfort-height toilets, and premium plumbing fixtures.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Gourmet Kitchen Remodeling & Open-Concept layouts
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If your current kitchen feels isolated from the rest of the house, our kitchen remodeling services can transform it into a bright, open culinary space. We specialize in removing interior dividing walls to open up the kitchen directly to the living and dining areas. We identify load-bearing walls, install engineered support headers (such as LVL beams), and safely reconfigure the plumbing and electrical lines.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our kitchen remodels are designed to fit your unique lifestyle, featuring custom solid wood cabinetry, massive center islands with dual-waterfall quartz countertops, and designer tile backsplashes. We also install under-cabinet LED task lighting, professional-grade gas ranges, slide-out pantry shelving, and high-efficiency ventilation hoods, creating a space that is as functional as it is beautiful.
            </p>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Your Trusted Layton Lakes Contractor
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustPoints.map((pt) => (
                <div key={pt.title} className="flex gap-4 p-6 bg-secondary rounded-2xl border border-border">
                  <pt.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{pt.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HARD WATER SECTION */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4">
              <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Combating Hard Water in Layton Lakes
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  The tap water in Layton Lakes carries a high concentration of dissolved minerals, often measuring over 18 grains of hardness. This hard water leads to rapid calcium and magnesium scaling, which can destroy plumbing fixtures, clog aerators, and cause unsightly white stains on tile grout and shower glass.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  To ensure that your newly remodeled bathroom or kitchen stands the test of time, we integrate specialized hard water defenses into our construction methods:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Stain-Resistant Epoxy Grout:</strong> Unlike standard porous cement-based grout, epoxy grout is completely non-porous and waterproof. It resists mineral staining, ignores hard water scale, and will not mold or crumble over time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>EnduroShield Glass Protection:</strong> We treat all custom glass panels with a permanent hydrophobic nano-coating. This treatment repels water and prevents calcium mineral scale from bonding to the glass surface, keeping it crystal clear.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Quartz & Solid Surfaces:</strong> We install solid-surface materials and quartz countertops that lack pores, ensuring they won't absorb minerals or discolor near sink faucets and shower pans.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <ServiceFAQ faqs={faqData} />
        
        {/* TESTIMONIALS & CONTACT */}
        <Testimonials />
        <ContactSection />
        
        <ServiceCTA
          title="Ready to Transform Your Layton Lakes Property?"
          description="Contact us today to schedule your complimentary, detailed in-home evaluation. We will review layouts, material options, permitting requirements, and provide a fixed-price estimate."
        />
      </main>
      <Footer />
    </>
  );
}
