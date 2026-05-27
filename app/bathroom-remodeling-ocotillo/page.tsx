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
  title: "Bathroom Remodeling Ocotillo Chandler AZ - Custom Contractor",
  description: "Top-rated bathroom remodeling in Ocotillo, Chandler, AZ. Specializing in luxury walk-in showers, custom tile design, and master suite renovations in 85248.",
  openGraph: {
    title: "Bathroom Remodeling Ocotillo Chandler AZ - Custom Contractor",
    description: "Expert bathroom design & remodeling in Ocotillo, Chandler, AZ. Licensed contractors, luxury designs, and custom tile installations. Free estimates: (520) 569-3339.",
    url: `${siteConfig.url}/bathroom-remodeling-ocotillo/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Ocotillo Chandler AZ - Custom Contractor",
    description: "Licensed Ocotillo bathroom contractors. Walk-in showers, custom tile, master bath renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-ocotillo/`,
  },
};

const ocotilloFaqs = [
  {
    question: "How long does a master bathroom remodel take in Ocotillo?",
    answer:
      "A complete master bathroom renovation in Ocotillo typically takes four to six weeks. This timeline includes demolition, plumbing relocation, electrical framing, custom tile installation, and final fixture fittings. Guest bathrooms can be completed in two to three weeks."
  },
  {
    question: "Do you handle HOA approvals in Ocotillo communities?",
    answer:
      "Yes. We coordinate directly with Ocotillo HOAs to submit required material sheets, architectural drawings, and certificate of insurance documents. We ensure full compliance with Ocotillo's design guidelines so you face zero delays."
  },
  {
    question: "What waterproofing system do you use for tiled showers?",
    answer:
      "We use the Schluter-KERDI waterproofing system exclusively. Ocotillo homes feature high-end finishes, and a hidden leak can cause tens of thousands in damage. This vapor-tight membrane prevents mold and ensures a lifetime leak-proof shower."
  },
  {
    question: "How much does a custom bathroom remodel cost in Ocotillo, Chandler?",
    answer:
      "Ocotillo bathroom renovations range from $12,000 for standard guest bath updates up to $45,000+ for large master bathrooms with freestanding soaking tubs and glass walk-in showers. We provide free, detailed itemized quotes."
  },
  {
    question: "Can you design a curbless walk-in shower?",
    answer:
      "Yes. We specialize in curbless walk-in showers with linear drains, frameless glass panels, and built-in tiled benches. These barrier-free designs offer both a modern spa aesthetic and long-term accessibility."
  },
];

const services = [
  {
    title: "Custom Walk-In Showers",
    href: "/walk-in-showers/",
    description:
      "We build modern, curbless walk-in showers featuring frameless glass, custom benches, and dual rainfall showerheads. Every shower is built with Schluter-KERDI waterproofing to guarantee long-term protection.",
    price: "From $6,500",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "Convert your unused garden tub into a spacious tiled walk-in shower. This is the #1 home ROI project in Chandler, opening up physical space and upgrading your home's resale value.",
    price: "$6,500 to $14,000",
  },
  {
    title: "Luxury Master Bath Remodeling",
    href: "/master-bathroom-remodel/",
    description:
      "Complete gut-and-rebuild transformations. We install premium double vanities, freestanding soaking tubs, custom ambient lighting, and high-end porcelain tile flooring.",
    price: "$20,000 to $50,000+",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "ROC Licensed & Bonded",
    body: "Fully licensed by the state of Arizona (ROC338304) and insured for your protection.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand behind our work. If any installation issue arises within two years, we fix it for free.",
  },
  {
    icon: MapPin,
    title: "Ocotillo Neighborhood Experts",
    body: "Familiar with Ocotillo architectural standards, HOA guidelines, and local permits.",
  },
  {
    icon: DollarSign,
    title: "Fixed-Price Guarantee",
    body: "The price we quote is the price you pay. No hidden costs or surprise change orders.",
  },
  {
    icon: Droplets,
    title: "Hard Water Solutions",
    body: "We use epoxy grout and nano-coated glass to resist Chandler's mineral-heavy water supply.",
  },
  {
    icon: Clock,
    title: "Dedicated Project Supervisor",
    body: "Your project gets daily supervision to keep construction on-schedule and clean.",
  },
];

export default function OcotilloPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Bathroom Remodeling Ocotillo", url: "https://arzhomeremodeling.com/bathroom-remodeling-ocotillo/" }
      ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Ocotillo, Chandler"
        serviceDescription="Licensed bathroom remodeling contractor serving Ocotillo, Chandler, AZ (85248). Walk-in shower installation, tub-to-shower conversions, and luxury master bath design."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-ocotillo/`}
      />
      <FAQSchema faqs={ocotilloFaqs} />
      <PriceSchema
        serviceName="Ocotillo Bathroom Remodeling"
        priceRange="$5,000 - $50,000+"
        url={`${siteConfig.url}/bathroom-remodeling-ocotillo/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Premium Bathroom Remodeling in Ocotillo, Chandler"
          subtitle="Elevate Your Home with Custom Luxury Designs"
          description="Transform your Ocotillo home with the East Valley's premier bathroom contractor. From Mediterranean-style tiled master baths near Ocotillo Golf Club to sleek curbless walk-in showers, we deliver elite craftsmanship and ROC Licensed peace of mind."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Ocotillo Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling-ocotillo/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Custom Bathroom Renovations in Ocotillo (85248)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ocotillo is famous for its gorgeous water features, upscale estates, and Spanish-style architecture. However, many master baths in these homes are still outfitted with outdated garden tubs, dark vanity alcoves, and vulnerable grout systems. Ripping out these eyesores and designing a modern, light-filled bathroom increases both daily enjoyment and property values.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in high-end bathroom remodeling in Ocotillo. We utilize advanced materials like <Link href="/blog/why-we-use-schluter-kerdi-waterproofing-chandler/" className="text-primary hover:underline font-medium">Schluter-KERDI waterproofing systems</Link> and stain-resistant epoxy grouts to ensure your new bathroom resists mold and stands up to Arizona's harsh temperatures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for a Free In-Home Consultation!
                </Link>
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
              Ocotillo Landmarks & Local Remodeling Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ocotillo is an upscale desert community famed for the stunning <strong>Ocotillo Golf Club</strong>, extensive water canals, and gorgeous luxury estates. When we remodel master suites in Ocotillo, we implement high-end details that reflect the neighborhood's resort-style aesthetic. For homes situated near Dobson Road and Queen Creek Road, we deliver customized layouts that provide absolute luxury and comfort.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Ocotillo Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed near the Ocotillo Golf Course involved converting a dark builder-grade bath into a modern oasis. We installed high-performance non-porous porcelain tile on the walls and shower pan, secure stain-resistant epoxy grout, and end-to-end frameless heavy glass shower panels treated with protective hydrophobic nano-coatings to combat Chandler's mineral-heavy water.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Chandler Permitting & Inspections for Ocotillo:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Ocotillo lies within Chandler city limits, structural framing modifications, plumbing line relocations, or electrical circuit updates require a building permit from the <strong>Chandler Development Services Department</strong> (located at 175 S Arizona Ave). We manage all design drawings, permit submittals, and structural inspections directly, ensuring that your home's luxury upgrades comply fully with all safety guidelines.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Ocotillo Bathroom Services
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

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose ARZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                The Ocotillo Contractor You Can Trust
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
                  Combating Ocotillo's Hard Water
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Ocotillo's water supply carries a high concentration of dissolved minerals, which causes scale build-up and discolors traditional cement grouts. 
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  To protect your luxury investment, we employ advanced tile installation methods:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Stain-Resistant Epoxy Grout:</strong> Waterproof and impervious to mineral absorption.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>EnduroShield Glass Treatment:</strong> Repels hard water to prevent white spots.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Solid Surface Thresholds:</strong> Eliminate grout joints on curbs where water pools.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={ocotilloFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Design Your Dream Ocotillo Bathroom?"
          description="Call us today to schedule your free, detailed in-home evaluation. We will review layout options, budgets, and timelines."
        />
      </main>
      <Footer />
    </>
  );
}
