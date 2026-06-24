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
  title: "Home Remodeling Contractors Chandler Heights AZ | ARZ",
  description: "Professional home, kitchen, and bathroom remodeling in Chandler Heights, AZ. Get your custom renovation with a 2-year warranty. Call today!",
  openGraph: {
    title: "Home & Bath Remodeling Chandler Heights AZ | ARZ",
    description: "Licensed home, kitchen, and bathroom remodeling services in Chandler Heights, AZ. Custom walk-in showers, quartz countertops, and full home updates.",
    url: `${siteConfig.url}/bathroom-remodeling-chandler-heights/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home & Bath Remodeling Chandler Heights AZ | ARZ",
    description: "Licensed home, kitchen, and bathroom remodeling services in Chandler Heights, AZ. Custom walk-in showers, quartz countertops, and full home updates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-chandler-heights/`,
  },
};

const faqData = [
  {
    question: "Do I need a permit for a home or bathroom remodel in Chandler Heights?",
    answer:
      "Yes, most structural, electrical, and plumbing renovations in Chandler Heights require a permit. Because parts of Chandler Heights lie within unincorporated Maricopa County and other parts are within Chandler city limits, we determine the correct jurisdiction and handle the entire permitting process for you, including design submissions and coordination with municipal inspectors."
  },
  {
    question: "How long does a kitchen or bathroom renovation typically take?",
    answer:
      "A standard bathroom remodel or tub-to-shower conversion takes two to three weeks of active construction, while a complete custom master bathroom suite renovation takes four to six weeks. A full kitchen remodeling project generally takes five to eight weeks depending on the layout modifications, cabinet production, and structural wall removals."
  },
  {
    question: "How do you protect tiled showers from hard water stains in Chandler Heights?",
    answer:
      "Chandler Heights has mineral-heavy hard water that easily stains standard cement grouts and tiles. To combat this, we use premium, non-porous porcelain tiles and high-performance, stain-resistant epoxy grout that prevents mineral absorption. Additionally, we apply a hydrophobic protective coating to all frameless glass shower doors to repel water and prevent white calcium scale buildup."
  },
  {
    question: "Can you remove walls to create an open-concept kitchen layout?",
    answer:
      "Yes. Many older properties in Chandler Heights feature compartmentalized rooms with dividing walls. We specialize in open-concept transformations. Our team identifies load-bearing walls, engineers appropriate support beams (such as laminated veneer lumber or steel headers), installs temporary shoring, and safely opens up the space to merge your kitchen and living areas."
  },
  {
    question: "What type of warranty do you offer on your remodeling work?",
    answer:
      "We provide a comprehensive 2-year workmanship warranty on all our remodeling projects. If any installation or structural issue arises due to our craftsmanship within two years of project completion, our team will return and resolve it at no cost to you. We stand behind our work to ensure your complete peace of mind."
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
    title: "Local Chandler Heights Experts",
    body: "We are deeply familiar with Chandler Heights lot styles, HOA requirements, and local building safety codes.",
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

export default function ChandlerHeightsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Home Remodeling Chandler Heights", url: "https://arzhomeremodeling.com/bathroom-remodeling-chandler-heights/" }
      ]} />
      <ServiceSchema
        serviceName="Home & Bathroom Remodeling in Chandler Heights, AZ"
        serviceDescription="Licensed general remodeling contractor serving Chandler Heights, AZ. Walk-in shower installation, open-concept kitchen renovations, custom cabinets, and full home remodeling."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-chandler-heights/`}
      />
      <FAQSchema faqs={faqData} />
      <PriceSchema
        serviceName="Chandler Heights Remodeling Services"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-chandler-heights/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium Home & Bathroom Remodeling in Chandler Heights, AZ"
          subtitle="Exceptional Craftsmanship for Custom Properties and Modern Living"
          description="Elevate your living space with the East Valley's premier remodeling contractor. Serving Chandler Heights with high-end bathroom remodels, custom walk-in showers, open-concept kitchens, and complete home renovations."
          image="/images/services/chandler-bathroom-remodel.jpg"
          titleClassName="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Chandler Heights Remodeling", url: `${siteConfig.url}/bathroom-remodeling-chandler-heights/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Your Local Remodeling Partner in Chandler Heights
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the scenic southern foothills of the East Valley, Chandler Heights is a unique community defined by its spacious estate lots, historic citrus groves, custom ranches, and newer residential pockets. While many of the properties in this area offer beautiful views and generous square footage, the interior layouts are often outdated. Closed-off kitchens, cramped master bathrooms, obsolete lighting fixtures, and standard builder-grade finishes can make these gorgeous homes feel dark and disjointed.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in transforming older properties into modern, highly functional masterpieces. Whether you want to convert an old master bath garden tub into a beautiful walk-in tiled shower, open up a load-bearing wall to create a massive gourmet kitchen, or replace worn carpeting with durable luxury vinyl plank flooring throughout your entire home, we bring years of licensed Arizona experience to your door. We combine local design sensibilities with premium materials like <Link href="/blog/schluter-kerdi-vs-redgard-arizona/" className="text-primary hover:underline font-medium">Schluter-KERDI waterproofing</Link> and stain-resistant epoxy grouts to construct spaces that are as durable as they are stunning.
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
              Remodeling Custom Homes in the Chandler Heights Area
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Home renovation projects in Chandler Heights require a contractor who understands the local geography, home styles, and structural layouts. Many properties near Chandler Heights Road, Riggs Road, and McQueen Road feature custom single-family designs, horse properties, and unique architectural features that require highly specialized structural knowledge. Unlike standard tract homes, custom homes frequently incorporate unique framing layouts, varied ceiling heights, and complex plumbing lines that demand a careful, tailored approach during demolition and reconstruction.
            </p>
            
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Chandler Heights Home Renovation Project:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project we completed in the Chandler Heights neighborhood involved updating a 1990s custom home. The master bathroom featured a large, unused corner garden tub and a cramped fiberglass shower insert. We demolished the old fixtures and reconfigured the layout to build a custom walk-in double shower with zero-threshold curbless entry. We installed large-format porcelain wall tiles, slip-resistant mosaic floor tiles, a built-in bench, dual rainfall shower heads, and new solid plywood double vanities topped with durable quartz. To counter local hard water issues, we utilized high-grade epoxy grout and treated the frameless glass enclosure with EnduroShield coating.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Navigating Building Permits & Inspections:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Depending on the exact location of your home in Chandler Heights, your property may fall under the jurisdiction of the City of Chandler or unincorporated Maricopa County. This is a critical distinction, as the building code requirements, permit fees, and inspection schedules differ significantly. ARZ Home Remodeling manages the entire permitting process on your behalf. We prepare detailed architectural drawings, submit them to the correct building division (whether the City of Chandler or Maricopa County Planning & Development), secure the necessary permits, and schedule all structural, electrical, and plumbing inspections. This ensures your home renovation is fully legal, safe, and code-compliant.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Services in Chandler Heights
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
              When it comes to upgrading the two most important spaces in your home, ARZ Home Remodeling delivers unmatched quality. We focus on details that ensure longevity, safety, and visual excellence.
            </p>
            
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Custom Bathroom Remodeling & Tub-to-Shower Conversions
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A luxury bathroom should feel like a private spa. Our bathroom remodeling process is designed to maximize your layout and comfort. We specialize in converting old bathtubs into spacious, modern walk-in showers. This not only makes the bathroom feel twice as large but also improves daily safety by eliminating high tub thresholds. We build walk-in showers with zero-barrier entries, linear drains, built-in shampoo niches, and floating bench seating. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              To guarantee that your new shower is completely leak-free, we utilize the Schluter-KERDI waterproofing system. This advanced membrane-based waterproofing prevents moisture from seeping into the framing, eliminating the risk of dry rot and mold behind your walls. We pair this with solid wood plywood vanities, backlit LED mirrors, comfort-height toilets, and premium fixtures.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Gourmet Kitchen Remodeling & Structural Changes
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The kitchen is the heart of the home, especially in the large custom properties found throughout Chandler Heights. If your kitchen feels isolated from the rest of the house, we can remove non-load-bearing and load-bearing walls to create a wide-open, modern floor plan. We install engineered support headers to maintain structural integrity while creating an open transition between the kitchen and living areas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our kitchen designs feature custom, hand-painted cabinetry, large prep islands with double-waterfall quartz countertops, and built-in pantries with slide-out shelves. We also install custom tile backsplashes, under-cabinet ambient lighting, and high-capacity ventilation hoods. We help you choose layouts that optimize the work triangle, making cooking and entertaining an absolute pleasure.
            </p>
          </div>
        </section>

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Your Trusted Chandler Heights Contractor
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
                  Combating Hard Water in Chandler Heights
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  The tap water in Chandler Heights carries an extremely high mineral content, often measuring between 15 to 22 grains of hardness per gallon. This hard water leads to rapid calcium and magnesium scaling, which can destroy plumbing fixtures, clog aerators, and cause unsightly white stains on tile grout and shower glass.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  To ensure that your newly remodeled bathroom or kitchen stands the test of time, we integrate specialized hard water defenses into our construction methods:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Advanced Epoxy Grout:</strong> Unlike standard porous cement-based grout, epoxy grout is completely non-porous and waterproof. It resists mineral staining, ignores hard water scale, and will not mold or crumble over time.</span>
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
          title="Ready to Transform Your Chandler Heights Property?"
          description="Contact us today to schedule your complimentary, detailed in-home evaluation. We will review layouts, material options, permitting requirements, and provide a fixed-price estimate."
        />
      </main>
      <Footer />
    </>
  );
}
