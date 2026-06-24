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
  title: "Home Remodeling Contractors Andersen Springs AZ | ARZ",
  description: "Professional home, kitchen, and bathroom remodeling in Andersen Springs, AZ. Get your custom renovation with a 2-year warranty. Call today!",
  openGraph: {
    title: "Home & Bath Remodeling Andersen Springs AZ | ARZ",
    description: "Licensed home, kitchen, and bathroom remodeling services in Andersen Springs, AZ. Custom walk-in showers, quartz countertops, and full home updates.",
    url: `${siteConfig.url}/bathroom-remodeling-andersen-springs/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home & Bath Remodeling Andersen Springs AZ | ARZ",
    description: "Licensed home, kitchen, and bathroom remodeling services in Andersen Springs, AZ. Custom walk-in showers, quartz countertops, and full home updates.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-andersen-springs/`,
  },
};

const faqData = [
  {
    question: "Do I need a building permit for remodeling my home in Andersen Springs?",
    answer:
      "Yes. The City of Chandler requires building permits for most structural modifications, plumbing changes, and new electrical circuits. Since Andersen Springs lies entirely within Chandler city limits, we manage the entire permitting process through the City of Chandler Development Services Department, ensuring all inspections pass and your remodel complies with municipal safety guidelines."
  },
  {
    question: "How long does a master bathroom or kitchen remodel typically take?",
    answer:
      "A standard guest bathroom remodel or tub-to-shower conversion takes two to three weeks of active construction. A complete master bathroom renovation featuring structural layout modifications, custom tiling, and new double vanities takes four to six weeks. A full kitchen remodeling project generally takes five to eight weeks depending on layout changes and custom cabinetry fabrication."
  },
  {
    question: "How does hard water affect my new bathroom fixtures in Andersen Springs?",
    answer:
      "Andersen Springs homeowners deal with Chandler's notoriously hard water, which runs between 15 to 20 grains of mineral hardness. This causes rapid white scale buildup on tile, grout, and fixtures. To prevent this, we install non-porous porcelain tile, use high-performance stain-resistant epoxy grout that resists scale absorption, and treat glass enclosures with EnduroShield hydrophobic protective coatings."
  },
  {
    question: "Can you remove walls in my Andersen Springs home to create an open floor plan?",
    answer:
      "Yes. Many homes built in Andersen Springs during the late 1980s and 1990s feature compartmentalized floor plans. We specialize in structural wall removals to create spacious, open-concept kitchens. We identify load-bearing walls, install engineered support beams (headers) to carry the roof load, and cleanly integrate your new open space."
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
    title: "Andersen Springs Experts",
    body: "We are deeply familiar with Andersen Springs home styles, HOA design guidelines, and local permit regulations.",
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

export default function AndersenSpringsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Home Remodeling Andersen Springs", url: "https://arzhomeremodeling.com/bathroom-remodeling-andersen-springs/" }
      ]} />
      <ServiceSchema
        serviceName="Home & Bathroom Remodeling in Andersen Springs, AZ"
        serviceDescription="Licensed general remodeling contractor serving Andersen Springs, Chandler, AZ. Custom walk-in showers, open-concept kitchens, custom cabinets, and full home remodeling."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-andersen-springs/`}
      />
      <FAQSchema faqs={faqData} />
      <PriceSchema
        serviceName="Andersen Springs Remodeling Services"
        priceRange="Free Custom Estimate"
        url={`${siteConfig.url}/bathroom-remodeling-andersen-springs/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium Home & Bathroom Remodeling in Andersen Springs, AZ"
          subtitle="Exceptional Craftsmanship for Established Neighborhoods and Modern Living"
          description="Elevate your living space with the East Valley's premier remodeling contractor. Serving Andersen Springs with high-end bathroom remodels, custom walk-in showers, open-concept kitchens, and complete home renovations."
          image="/images/services/chandler-bathroom-remodel.jpg"
          titleClassName="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Andersen Springs Remodeling", url: `${siteConfig.url}/bathroom-remodeling-andersen-springs/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Your Local Remodeling Partner in Andersen Springs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Located in the heart of south-central Chandler, Andersen Springs is a highly sought-after, established master-planned community. Famous for its beautiful community lakes, tree-lined walking trails, and convenient access to local shopping, dining, and top schools, this neighborhood contains some of the most desirable properties in the East Valley. However, because most of these residences were built during the late 1980s and 1990s, their interiors are frequently showing their age. Outdated design trends like low furred-down ceilings, closed-in kitchens with fluorescent light boxes, carpeted master bathrooms, and builder-grade cultured marble vanities prevent these homes from reaching their full potential.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in breathing new life into older Andersen Springs properties. Whether you are looking to replace an old master bath garden tub with a gorgeous, zero-barrier walk-in shower, remove load-bearing walls to merge your kitchen and family room into an open-concept entertainment hub, or install luxury vinyl plank flooring throughout your entire home, we provide the expert design and ROC licensed construction you need. We use only premium materials like <Link href="/blog/schluter-kerdi-vs-redgard-arizona/" className="text-primary hover:underline font-medium">Schluter-KERDI waterproofing systems</Link> and stain-resistant epoxy grouts to ensure that your new kitchen, bath, or full home update is built to last.
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
              Remodeling Custom Homes in the Andersen Springs Area
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Home renovations in Andersen Springs require a contractor with deep local knowledge of the area's specific home designs and construction styles. Properties near Dobson Road, Alma School Road, and Ray Road features classic Mediterranean-style architecture, stucco finishes, and concrete tile roofs. Upgrading these properties requires a careful, professional approach, particularly when addressing aging copper or polybutylene plumbing lines, slab foundations, and structural framing. 
            </p>
            
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Andersen Springs Home Renovation Project:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project we completed in the Andersen Springs community involved updating a dated two-story home. The master bathroom was dark and featured a carpeted vanity area and a separate, cramped shower box. We gutted the space down to the studs, removed the carpet, re-plumbed the master bathroom using durable PEX water lines, and installed a custom walk-in shower with a frameless glass enclosure. We utilized large-format 12x24 non-porous porcelain tile on the walls and slip-resistant mosaic tiles for the shower floor. We also installed custom shaker-style double vanities with a premium quartz countertop and updated the lighting with recessed LED cans.
            </p>

            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Navigating Building Permits & Inspections:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Andersen Springs is located entirely within the municipal boundaries of the City of Chandler, structural framing changes, plumbing lines relocations, and new electrical work require a building permit from the <strong>City of Chandler Development Services Department</strong> (located at 175 S Arizona Ave). ARZ Home Remodeling manages the entire permitting and inspection process for you. We draft the necessary architectural layouts, submit the permit application, coordinate the inspections at key phases of construction, and ensure that your new kitchen, bath, or home remodel is fully compliant with all local building codes and safety guidelines.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Services in Andersen Springs
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
              Upgrading the kitchen and bathrooms in your Andersen Springs home is the most effective way to add lasting comfort, modern utility, and real property value.
            </p>
            
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Custom Bathroom Remodeling & Tub-to-Shower Conversions
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our bathroom remodeling team specializes in turning outdated, cramped spaces into beautiful, functional home spas. The most requested update in Andersen Springs is a tub-to-shower conversion, where we remove the large, unused garden tub deck and build a massive, walk-in tiled shower. This conversion instantly opens up the bathroom layout, making the space feel twice as large while improving safety with low or zero-threshold curbless entry options. We construct walk-in showers with built-in tile benches, linear drains, niches, and frameless heavy glass panels.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              To protect your subfloors and wall cavities from moisture damage, we use the Schluter-KERDI waterproofing system exclusively. This vapor-tight waterproofing membrane is applied directly to the walls and shower pan, ensuring that your custom tile shower is completely leak-proof and mold-free for life. We complete the remodel with custom double vanities, quartz countertops, comfort-height toilets, and premium plumbing fixtures.
            </p>

            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Gourmet Kitchen Remodeling & Open-Concept layouts
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              If your current kitchen feels dark, cramped, and isolated, our kitchen remodeling services can transform it into a bright, open culinary space. We specialize in removing interior dividing walls to open up the kitchen directly to the living and dining areas. We identify load-bearing walls, install engineered support headers (such as LVL beams), and safely reconfigure the plumbing and electrical lines.
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
                Your Trusted Andersen Springs Contractor
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
                  Combating Hard Water in Andersen Springs
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Like most of Chandler, the municipal water supply in Andersen Springs has an exceptionally high mineral content, ranging from 15 to 20 grains of hardness per gallon. When water evaporates on fixtures, tile, and glass, it leaves behind thick white calcium and magnesium scale. This buildup can ruin standard faucets, clog showerheads, and leave ugly mineral stains on traditional grout.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  To protect your home remodeling investment, we integrate advanced hard water engineering into our building standards:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Stain-Resistant Epoxy Grout:</strong> Unlike standard cement-based grout, epoxy grout is completely non-porous and waterproof. It prevents mineral absorption, resists scale discoloration, and will not crumble or mold.</span>
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
          title="Ready to Transform Your Andersen Springs Property?"
          description="Contact us today to schedule your complimentary, detailed in-home evaluation. We will review layouts, material options, permitting requirements, and provide a fixed-price estimate."
        />
      </main>
      <Footer />
    </>
  );
}
