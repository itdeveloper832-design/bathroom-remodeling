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
  title: "Bathroom Remodeling Dobson Ranch AZ - Custom Contractors",
  description: "Top-rated bathroom remodeling in Dobson Ranch, Mesa/Chandler AZ. Specialized in layout upgrades, small bathroom solutions, and custom tiling in 85202.",
  openGraph: {
    title: "Bathroom Remodeling Dobson Ranch AZ - Custom Contractors",
    description: "Expert bathroom remodeling in Dobson Ranch, Mesa/Chandler AZ. Licensed contractors, custom tile walk-in showers, and layout updates. Free estimates: (520) 569-3339.",
    url: `${siteConfig.url}/bathroom-remodeling-dobson-ranch/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Dobson Ranch AZ - Custom Contractors",
    description: "Licensed Dobson Ranch bathroom remodeling. Custom tile, walk-in showers, layout renovations.",
    images: [`${siteConfig.url}/images/services/chandler-bathroom-remodel.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-dobson-ranch/`,
  },
};

const dobsonRanchFaqs = [
  {
    question: "Do you need a permit for bathroom remodeling in Dobson Ranch?",
    answer:
      "Yes. If we are modifying structural walls, relocating drainage pipes, or running new electrical circuits, we pull a building permit from the City of Mesa Development Services. Cosmetic upgrades like tile and vanity replacements do not require permits."
  },
  {
    question: "How do you upgrade plumbing in older Dobson Ranch homes?",
    answer:
      "Many Dobson Ranch homes built in the 1970s and 1980s feature outdated copper pipes or galvanized lines. During demolition, we inspect all plumbing and upgrade weak sections to durable PEX or PVC lines to prevent leaks behind new tile."
  },
  {
    question: "How long does a bathroom remodel take in Dobson Ranch?",
    answer:
      "A guest bathroom takes approximately two weeks. A full master bathroom remodel requiring layout shifts, drywall, and custom tile works takes three to five weeks of active construction."
  },
  {
    question: "What is the cost of a bathroom remodel in Dobson Ranch, AZ?",
    answer:
      "A complete remodel ranges from $9,000 for compact guest bathrooms up to $35,000+ for large custom master bathrooms. We offer free, itemized estimates to help you choose options that fit your budget."
  },
  {
    question: "Can you help with small bathroom space optimization?",
    answer:
      "Yes. Many Dobson Ranch floor plans feature narrow guest baths. We use space-saving layouts, floating vanities, pocket doors, and curbless showers to make small bathrooms feel spacious and functional."
  },
];

const services = [
  {
    title: "Small Bathroom Solutions",
    href: "/small-bathroom-remodeling/",
    description:
      "We maximize space in narrow layouts. Installing compact vanities, smart shelving, recessed niches, and frameless glass showers to open up your guest bathrooms.",
    price: "From $8,500",
  },
  {
    title: "Walk-In Shower Installation",
    href: "/walk-in-showers/",
    description:
      "We replace old tub surrounds with modern tiled walk-in showers. Built with leak-proof Schluter-KERDI waterproofing systems and custom tile designs.",
    price: "From $6,000",
  },
  {
    title: "Tub-to-Shower Conversions",
    href: "/tub-to-shower-conversion/",
    description:
      "One of our most popular services. We remove old steel or cast-iron tubs and build custom tiled walk-in showers with slip-resistant tile floors.",
    price: "$6,000 to $13,000",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Licensed AZ Contractor",
    body: "Fully licensed by the state of Arizona (ROC338304), carrying full liability and workers' comp.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand behind all tile and grout installations. If it fails within two years, we fix it at no cost.",
  },
  {
    icon: MapPin,
    title: "Dobson Ranch Specialists",
    body: "Familiar with the local 1970s and 1980s floor plans and neighborhood association standards.",
  },
  {
    icon: DollarSign,
    title: "Fixed Written Bids",
    body: "The price on your contract is the price you pay. No hidden costs or surprise fees.",
  },
  {
    icon: Droplets,
    title: "Leak-Proof Waterproofing",
    body: "We use the premium Schluter-KERDI membrane system to prevent moisture rot in your home.",
  },
  {
    icon: Clock,
    title: "Daily On-Site Timelines",
    body: "Our crew shows up on time every day, clean and respectful, keeping construction on-schedule.",
  },
];

export default function DobsonRanchPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://arzhomeremodeling.com/" },
        { name: "Services", url: "https://arzhomeremodeling.com/services/" },
        { name: "Bathroom Remodeling Dobson Ranch", url: "https://arzhomeremodeling.com/bathroom-remodeling-dobson-ranch/" }
      ]} />
      <ServiceSchema
        serviceName="Bathroom Remodeling in Dobson Ranch, Mesa"
        serviceDescription="Licensed bathroom contractor specializing in layout renovations, small bathroom solutions, and custom walk-in showers in Dobson Ranch, Mesa/Chandler AZ."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-dobson-ranch/`}
      />
      <FAQSchema faqs={dobsonRanchFaqs} />
      <PriceSchema
        serviceName="Dobson Ranch Bathroom Remodeling"
        priceRange="$5,000 - $35,000+"
        url={`${siteConfig.url}/bathroom-remodeling-dobson-ranch/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Custom Bathroom Remodeling in Dobson Ranch, AZ"
          subtitle="Modern Transformations for Older Layouts"
          description="Upgrade your Dobson Ranch home with the East Valley's trusted remodeling experts. From small guest bath optimizations to complete master suite expansions, we deliver elite tile and plumbing work with ROC Licensed peace of mind."
          image="/images/services/chandler-bathroom-remodel.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Dobson Ranch Bathroom Remodeling", url: `${siteConfig.url}/bathroom-remodeling-dobson-ranch/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Upgrading Older Bathrooms in Dobson Ranch (85202)
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dobson Ranch is Mesa's premier master-planned community, featuring beautiful parks, golf greens, and lakes. However, because many homes were built in the 1970s and 1980s, the bathrooms often suffer from outdated plumbing, small layouts, and deteriorated sub-floors. Upgrading these spaces not only prevents structural water damage but also brings a fresh, modern aesthetic that fits the active Dobson Ranch lifestyle.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we specialize in updating Dobson Ranch bathrooms. During demo, we replace old copper plumbing with modern, corrosion-resistant PEX water lines. We apply premium waterproofing systems like <Link href="/blog/why-we-use-schluter-kerdi-waterproofing-chandler/" className="text-primary hover:underline font-medium">Schluter-KERDI</Link> to ensure your custom shower is vapor-proof and leak-proof for the life of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact/" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule a Free Dobson Ranch Consultation
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
              Dobson Ranch Landmarks & Local Remodeling Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dobson Ranch is a stellar master-planned community centered around the scenic <strong>Dobson Ranch Golf Course</strong> and its beautiful interconnected neighborhood lakes. When we execute bathroom upgrades here, we respect the architectural character of these established 1970s and 1980s homes. For properties near the <strong>Dobson Association Lakes</strong> or local parks, we design spaces that maximize utility while retaining classic suburban charm.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Recent Dobson Ranch Remodeling Example:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A recent project completed on a classic ranch-style family home near the <strong>Dobson Ranch Park</strong> involved replacing a 1980s builder-grade vanity. We installed a durable plywood cabinet double-vanity with a quartz countertop, soft-close hardware, and custom-tiled backsplash. We also upgraded the old tub-shower combo to a gorgeous walk-in tile shower with Schluter-KERDI waterproofing.
            </p>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">
              Mesa Permitting & Inspections for Dobson Ranch:
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Because Dobson Ranch is located in Mesa, major electrical additions, partition wall removals, or plumbing layout changes require a building permit from the <strong>City of Mesa Building Safety Division</strong> (located at 55 N Center St). We coordinate all submissions, plans, and city inspections, ensuring your new bathroom is fully compliant with local municipal codes.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Services</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Dobson Ranch Bathroom Services
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
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Standards</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Why Dobson Ranch Homeowners Trust ARZ
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

        {/* HARD WATER */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4">
              <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Overcoming Hard Water in Dobson Ranch
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Mesa municipal water is highly mineral-heavy, causing hard calcification on fixtures and staining light tile grouts.
                </p>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  We combat these mineral deposits with proven construction details:
                </p>
                <ul className="space-y-3 text-primary-foreground/85">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Epoxy Grout Standard:</strong> A non-porous material that won't absorb hard water minerals or discolor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Brushed Metal Finishes:</strong> Brushed nickel or brass that hides dry water marks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Nano-Coated Glass:</strong> Factory seal options that allow water to run off, preventing etching.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={dobsonRanchFaqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA
          title="Ready to Redesign Your Dobson Ranch Bathroom?"
          description="Give us a call or submit our contact form. We'll set up your free layout consult and send a detailed itemized quote within two business days."
        />
      </main>
      <Footer />
    </>
  );
}
