import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import {  ServiceSchema, FAQSchema, PriceSchema , BreadcrumbSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import GalleryPreview from "@/components/home/gallery-preview";
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
import LocalTrust from "@/components/home/local-trust";

export const metadata: Metadata = {title: {
    absolute: "Bathroom Remodeling Chandler AZ | Free Estimate"
  },description: "Expert bathroom remodeling in Chandler, AZ. Walk-in showers, tub-to-shower conversions & custom tile. Licensed ROC338304. Call (520) 569-3339 for a free quote.",
  openGraph: {title: "Bathroom Remodeling Chandler AZ | Free Estimate",description: "Expert bathroom remodeling in Chandler, AZ. Walk-in showers, tub-to-shower conversions & custom tile. Licensed ROC338304. Call (520) 569-3339 for a free quote.",
    url: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Chandler Arizona - ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Bathroom Remodeling Chandler AZ | Free Estimate",description: "Expert bathroom remodeling in Chandler, AZ. Walk-in showers, tub-to-shower conversions & custom tile. Licensed ROC338304. Call (520) 569-3339 for a free quote.",
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-chandler-az/`,
  },
};

const chandlerFaqs = [
  {
    question: "Do I need a permit to remodel a bathroom in Chandler, AZ?",
    answer:
      "Yes, the City of Chandler requires a building permit for any project that changes the layout of your bathroom, relocates plumbing pipes, or updates electrical wiring. Cosmetic updates like replacing cabinets, swapping a sink vanity, or installing new flooring in the same position do not require a permit. ARZ Home Remodeling manages the full permitting process directly with the Chandler Development Services Department located on Arizona Avenue."
  },
  {
    question: "What is the average cost of a bathroom remodel in Chandler?",
    answer:
      "In Chandler, a standard guest bathroom update costs between 10,000 dollars and 18,000 dollars. A complete master bathroom remodel ranges from 20,000 dollars to 45,000 dollars or more. The total price depends on whether you move structural walls, relocate plumbing lines, or choose premium quartz countertops. You can preview quartz slab options at local wholesalers like Arizona Tile near the Chandler Fashion Center on Ray Road. ARZ Home Remodeling holds active license ROC338304 with the Arizona Registrar of Contractors."
  },
  {
    question: "How does Chandler water hardness affect bathroom tile and glass?",
    answer:
      "Chandler has exceptionally hard water with high levels of calcium. This mineral content causes white scale buildup on traditional porous stone and standard glass doors. We recommend installing large format porcelain tiles with epoxy grout instead of natural stone. Porcelain does not absorb water, and epoxy grout resists staining. For shower doors, we use low iron glass treated with a protective hydrophobic coating."
  }
];

const services = [
  {
    title: "Walk-In Shower Installation",
    href: "/shower-remodeling/",
    description:
      "We convert outdated tub and shower combos into open, curbless walk-in showers with frameless glass enclosures, custom tile work, and rainfall showerheads. We use the Schluter waterproofing system for a leak-proof installation rated for Arizona's temperature swings.",
    price: "From $6,000",
  },
  {
    title: "Tub-to-Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "One of the most requested services in Chandler, especially in homes with unused garden tubs. We remove the existing tub, properly waterproof the substrate, and install a custom walk-in shower tailored to your layout. Adds usable space and strong ROI at resale.",
    price: "$6,000 to $13,000",
  },
  {
    title: "Complete Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description:
      "Our master bath remodels typically include: new shower enclosure, vanity replacement, tile flooring, updated lighting, and fixture upgrades. Timeline: three to five weeks. We handle all plumbing and electrical coordination without managing multiple contractors.",
    price: "$18,000 to $45,000+",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "AZ Licensed & Insured",
    body: "Every project fully covered. We carry all required Arizona contractor licensing.",
  },
  {
    icon: Star,
    title: "2-Year Workmanship Warranty",
    body: "We stand behind every tile and seam. If it fails within two years, we fix it at no charge.",
  },
  {
    icon: MapPin,
    title: "Chandler Local",
    body: "We have remodeled bathrooms in Sun Lakes, Fulton Ranch, Ocotillo, and Chandler Heights.",
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    body: "You receive a written quote before any work starts. No surprises, no change-order games.",
  },
  {
    icon: Droplets,
    title: "Hard Water Expertise",
    body: "We specify tile and grout systems that resist Chandler's 18+ grain mineral-heavy water supply.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    body: "Every project gets a firm written schedule. We show up when we say we will.",
  },
];

const pricingTiers = [
  {
    label: "Guest Bathroom Update",
    detail: "Vanity, toilet, fixtures, paint",
    range: "$4,500 to $9,000",
  },
  {
    label: "Guest Bathroom Full Remodel",
    detail: "Tile, shower, vanity, flooring",
    range: "$10,000 to $18,000",
  },
  {
    label: "Tub-to-Shower Conversion",
    detail: "Demo, waterproofing, custom shower build",
    range: "$6,000 to $13,000",
  },
  {
    label: "Master Bathroom Remodel",
    detail: "Full scope: shower, vanity, tile, lighting",
    range: "$18,000 to $45,000+",
  },
];

const process = [
  { step: "01", title: "Free Phone Consultation", body: "We discuss your goals, budget, and timeline. No pressure, just answers." },
  { step: "02", title: "In-Home Evaluation", body: "We measure, assess plumbing, and review your selections on-site in Chandler." },
  { step: "03", title: "Fixed Written Proposal", body: "You see the complete price before we start. No hidden costs." },
  { step: "04", title: "Design & Material Selection", body: "Tile, fixtures, glass, and finishes chosen together to match your style." },
  { step: "05", title: "Construction", body: "Our in-house team handles demo, waterproofing, tile, plumbing, and finishing." },
  { step: "06", title: "Final Walkthrough", body: "You inspect every detail before we close the job. 100% satisfaction required." },
];

const neighborhoods = [
  "Dobson Ranch", "Sun Lakes", "Ocotillo", "Fulton Ranch",
  "Chandler Heights", "Gila Springs", "Fox Crossing", "Cooper Commons",
  "85224", "85225", "85226", "85249",
];

export default function ChandlerBathroomRemodelingPage() {
  return (
    <>
      
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Bathroom Remodeling Chandler Az", url: "https://arzhomeremodeling.com/bathroom-remodeling-chandler-az/" } ]} />
<ServiceSchema
        serviceName="Bathroom Remodeling in Chandler, Arizona"
        serviceDescription="Licensed bathroom remodeling contractor serving Chandler, AZ. Walk-in shower installation, tub-to-shower conversions, master bath renovations, vanity replacement, and complete bathroom remodels. Serving Dobson Ranch, Sun Lakes, Ocotillo, Fulton Ranch, and all of Chandler."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <FAQSchema faqs={chandlerFaqs} />
      <PriceSchema
        serviceName="Bathroom Remodeling in Chandler AZ"
        priceRange="$4,500 - $45,000+"
        url={`${siteConfig.url}/bathroom-remodeling-chandler-az/`}
      />
      <Header />
      <main>
        {/* HERO */}
        <ServiceHero
          title="Bathroom Remodeling Chandler AZ"
          subtitle="Chandler’s Top-Rated Bathroom Remodeling Contractor"
          description="From tub-to-shower conversions in Dobson Ranch to full master bath transformations in Ocotillo: ARZ Home Remodeling is the professional choice for Chandler homeowners. Licensed AZ contractor, 2-year warranty, fixed pricing."
          image="/images/hero/luxury-shower-remodel-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Chandler AZ", url: `${siteConfig.url}/bathroom-remodeling-chandler-az/` },
          ]}
        />

        {/* OPENING CONTENT */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your bathroom is used twice a day, every day: but Chandler homes built in the 1980s through early 2000s were
              never designed with modern comfort in mind. Fiberglass tub surrounds yellow, and builder grade vanities fail to help your home value. Grout stains easily from Chandler's notoriously hard water. If you have been considering upgrading your space with professional **bathroom remodeling in Chandler, AZ**, now is the perfect time to start.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we provide smart design solutions for homeowners, specializing in full renovations, custom design layouts, and targeted upgrades. Whether you want a luxury master suite overhaul, a modern guest bathroom upgrade, or a functional <Link href='/tub-to-shower-conversion/' className='text-primary hover:underline font-medium'>tub to shower conversion</Link>, our team handles everything from initial concept to final inspection. As a licensed local contractor, we proudly serve communities across Chandler, including ZIP codes <span className="text-primary font-semibold"> 85224, 85225, 85226, and 85249</span>.
            </p>
            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3 text-foreground">
              Navigating Chandler Building Codes and Permitting
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We coordinate all structural, plumbing, and electrical permit documentation directly with the **Chandler Development Services Department** (located in Downtown Chandler). If your remodel involves moving a toilet drain, running new circuits, or removing partition walls, we make sure everything is 100% compliant with City of Chandler building safety standards.
            </p>
            
            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3 text-foreground">
              Combating Chandler's Hard Water
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The municipal water supply in the East Valley contains extremely high mineral levels. To prevent hard water buildup and mold, we install **Schluter-Kerdi waterproofing systems**, large format non porous porcelain tiles, and premium **epoxy grout** that resists calcium staining and discoloration. We also treat frameless glass doors with protective hydrophobic coatings to ensure your shower remains crystal clear.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-3 text-foreground">
              Neighborhood Specific Remodeling and ZIP Code Topical Depth
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We customize our design build process to match the unique architectural eras and construction profiles across Chandler communities:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">North and West Chandler (ZIP 85224 and 85226 serving Dobson Ranch, Warner Ranch, Kyrene Corridor):</strong> Many homes in these established neighborhoods date back to the 1980s and 1990s. They commonly feature builder grade fiberglass tub enclosures, low profile vanities, and aging brass plumbing. We specialize in space maximizing updates and modern tub to shower conversions here, dramatically upgrading both utility and home value.
              </li>
              <li className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">Downtown and Central Chandler (ZIP 85225 serving Clemente Ranch, Cooper Commons):</strong> Subdivisions in this zone often feature 1990s era guest bathrooms in need of freshening. We focus on low maintenance porcelain tile installations, modern comfort height toilets, and beautiful custom vanities that stand up to daily use.
              </li>
              <li className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">South Chandler (ZIP 85249 and 85248 serving Ocotillo, Fulton Ranch, Sun Lakes):</strong> Known for luxury estates and active adult communities. In Ocotillo and Fulton Ranch, we deliver upscale master suites with freestanding soaking tubs, frameless glass walk ins, and quartz double vanities. In Sun Lakes, we are certified experts in senior safe curbless roll in showers, secure grab bars, and high traction non slip mosaic tile flooring.
              </li>
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From top-tier walk-in showers to precise custom tile work, we deliver results that blend long-term durability with modern aesthetics. We offer transparent, itemized quotes to ensure you get exceptional value for your investment. If you have been searching for a reliable local bathroom contractor, our dedicated team is here to help. You can also view our <Link href='/bathroom-remodel-cost-chandler/' className='text-primary hover:underline font-medium'>detailed pricing guide</Link> for current 2026 rates and local bathroom remodeling costs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We understand that every project is unique. Our team of expert remodelers is skilled in handling everything from simple cosmetic updates to complex structural changes, ensuring your project is completed on time and on budget.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At ARZ Home Remodeling, we focus on premium workmanship, transparent communication, and stunning results. We handle all elements of your project, from planning and permitting to the final tile sealing, making us the premier choice for bathroom renovations in the East Valley.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href={`tel:${siteConfig.phoneClean}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for Your Free No-Obligation Bathroom Quote!
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:+15205693339" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Do</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Chandler Bathroom Remodeling Services
              </h2>
              <p className="text-muted-foreground text-lg mt-4">Professional bathroom remodeling contractor services including walk-in showers, accessible shower remodeling, and tile shower installation in Chandler.</p>
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

        <LocalTrust cityName="Chandler" />

        {/* TRUST SIGNALS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Promise</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Why Chandler Homeowners Choose Us
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

        {/* HARD WATER EXPERTISE */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="flex items-start gap-4 mb-8">
              <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                  Understanding Chandler's Bathroom Remodel Challenges
                </h2>
                <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                  Chandler sits in one of Arizona's hardest water zones: the East Valley water supply averages over{" "}
                  <strong>300 mg/L of dissolved minerals</strong>. This creates three specific problems in bathrooms:
                </p>
                <ul className="space-y-3 text-primary-foreground/85 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Calcium buildup on glass enclosures and fixtures within six to twelve months</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Grout staining from mineral deposits within twelve to eighteen months of standard grouting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Yellowing and discoloration of low-grade acrylic surrounds</span>
                  </li>
                </ul>
                <p className="text-primary-foreground/85 text-lg leading-relaxed">
                  Our solution: we specify <strong>epoxy grout</strong>, <strong>nano-coated glass enclosures</strong>, and tile
                  materials rated for high-mineral environments. This is something national chains do not customize: and it is why
                  homeowners who have used generic contractors call us to fix failed showers three years later.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COST GUIDE */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Transparent Pricing</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Chandler Bathroom Remodel Cost Guide
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Pricing varies based on tile selection, plumbing relocation, and fixture grade. We offer written fixed-price
                quotes and financing for qualified homeowners.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {pricingTiers.map((tier) => (
                <div key={tier.label} className="bg-secondary rounded-2xl p-6 border border-border flex justify-between items-center gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{tier.label}</p>
                    <p className="text-muted-foreground text-sm">{tier.detail}</p>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap">{tier.range}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/bathroom-remodel-cost-chandler/" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                View our full Chandler cost guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">How It Works</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-foreground">
                Our Remodeling Process - No Surprises
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {process.map((step) => (
                <div key={step.step} className="bg-background rounded-2xl p-6 border border-border">
                  <span className="text-4xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Service Area</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6 text-foreground">
              Serving All of Chandler, AZ
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are a local team dedicated to providing top-quality bathroom and shower remodeling services across the city.
              Whether you need a full master bath transformation, a new walk-in shower, or a senior-safe renovation, we have the experience to get the job done right.
              Here are some of the areas we cover most:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="bg-secondary border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground">
                  {n}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/bathroom-remodeling-gilbert-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Gilbert AZ →</Link>
              <Link href="/bathroom-remodeling-mesa-az/" className="hover:text-primary transition-colors">Bathroom Remodeling Mesa AZ →</Link>
              <Link href="/bathroom-remodeling-ocotillo/" className="hover:text-primary transition-colors">Ocotillo Bathroom Remodeling →</Link>
              <Link href="/bathroom-remodeling-sun-lakes/" className="hover:text-primary transition-colors">Sun Lakes Bathroom Remodeling →</Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINK SECTION */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <h2 className="font-serif text-3xl font-semibold text-foreground text-center mb-4">Explore Our Sub-Services & Remodeling Solutions</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg">
              We specialize in target bathroom renovation projects, from senior-safe upgrades to complete luxury master suite transformations.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/shower-remodeling/" className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-md group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">Shower Remodeling</p>
                <p className="text-muted-foreground text-sm mt-2">Custom tiled walks, frameless glass door installations, and high-quality rainfall shower heads.</p>
              </Link>
              <Link href="/tub-to-shower-conversion/" className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-md group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">Tub-to-Shower Conversion</p>
                <p className="text-muted-foreground text-sm mt-2">Remove an unused garden tub or old alcove bathtub and gain a modern, spacious walk-in shower.</p>
              </Link>
              <Link href="/master-bathroom-remodel/" className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-md group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">Master Bathroom Remodeling</p>
                <p className="text-muted-foreground text-sm mt-2">Full-scope conversions: custom double vanities, stand-alone soaking tubs, and premium quartz surfaces.</p>
              </Link>
              <Link href="/guest-bathroom-remodeling/" className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-md group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">Guest Bathroom Remodels</p>
                <p className="text-muted-foreground text-sm mt-2">Durable, beautiful updates that increase your home value and offer clean, modern convenience for guests.</p>
              </Link>
              <Link href="/handicap-accessible-bathroom/" className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-md group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">Accessible & ADA Bathrooms</p>
                <p className="text-muted-foreground text-sm mt-2">Senior-safe curbless roll-in showers, certified grab bar placement, comfort-height toilets, and ADA compliance.</p>
              </Link>
              <Link href="/small-bathroom-remodeling/" className="bg-background border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-md group">
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">Small Bathroom Remodeling</p>
                <p className="text-muted-foreground text-sm mt-2">Smart layout optimizations, custom-built space-saving vanities, and bright tiling to open up small spaces.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE */}
        <GalleryPreview />

        {/* TIMELINE & 3D DESIGN PROCESS */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground text-center">
              Our Professional Project Timeline & 3D Design Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center">
              We believe in transparency and absolute preparation. Unlike other contractors, we combine advanced 3D visual renderings with a structured day-by-day timeline so you know exactly what to expect.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 3D Design */}
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">3D Design & Rendering Phase</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Before a single tile is removed, our design team builds a highly detailed 3D color rendering of your new bathroom layout. You can preview exactly how different tile selections, custom niches, vanity finishes, and quartz countertops will look in your physical space. This eliminates guesswork and ensures you love the final results.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="bg-secondary p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Typical 10-Day Remodel Timeline</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-2"><strong>Days 1-2:</strong> Demolition and safe removal of builder-grade materials.</li>
                  <li className="flex gap-2"><strong>Days 3-4:</strong> Plumbing rough-ins, valve replacements, and electrical wiring.</li>
                  <li className="flex gap-2"><strong>Days 5-6:</strong> Substrate preparation & Schluter-Kerdi waterproofing system installation.</li>
                  <li className="flex gap-2"><strong>Days 7-8:</strong> Precision tile setting and durable epoxy grout application.</li>
                  <li className="flex gap-2"><strong>Days 9-10:</strong> Vanity, quartz countertops, shower fixtures, glass install & final walkthrough.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS SECTION */}
        <section className="py-16 lg:py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Engineering & Design Standards</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-foreground">
                Technical Remodeling Specifications & Building Codes
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We build bathrooms to last decades, matching rigorous technical standards to combat Chandler's hard water and structural shifting.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  1. Waterproofing & Moisture Control (TCNA Standards)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  We build all custom tiled showers in compliance with the **Tile Council of North America (TCNA) B421 and B422** standards. Instead of traditional cement boards and PVC liners which degrade and leak, we install the **Schluter-KERDI waterproofing system**.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li><strong>Vapor Permeance:</strong> The KERDI membrane features a water vapor permeance rating of <strong>&lt; 0.5 perms</strong> (tested under ASTM E96 Procedure E), making it completely vapor-tight and preventing steam from rotting your wood framing.</li>
                  <li><strong>Decoupling & Crack Isolation:</strong> The bonded sheet membrane decouples the tile layer from the subfloor, absorbing the natural expansion and contraction of desert framing, preventing grout joints from cracking.</li>
                </ul>
              </div>

              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-primary" />
                  2. Hard Water Mitigation & Tile Standards (ANSI A118)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The municipal water supply in Chandler averages <strong>over 300 mg/L (18+ grains per gallon) of dissolved calcium and magnesium</strong>. This hard water destroys standard cement grout and stone. We resolve this by strictly adhering to ANSI material guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li><strong>Epoxy Grout (ANSI A118.3):</strong> We upgrade our grout to 100% solid epoxy resins. Unlike porous cement grouts, epoxy grout is completely non-porous and chemically inert, resisting staining, scale buildup, and acid cleaning.</li>
                  <li><strong>Thin-Set Mortar (ANSI A118.15):</strong> We use improved modified dry-set cement mortar to bond dense, large-format porcelain tiles (water absorption rate <strong>&lt; 0.5%</strong> per ASTM C373), preventing tiles from releasing due to slab movement or moisture cycles.</li>
                </ul>
              </div>

              <div className="p-6 bg-secondary rounded-2xl border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  3. Advanced Plumbing & Scald Prevention (ASSE 1016)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Modern mechanical systems are essential to safety and system longevity. We upgrade and secure every in-wall plumbing component:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm">
                  <li><strong>Anti-Scald Mixing Valves:</strong> We install pressure-balancing and thermostatic mixing valves certified to <strong>ASSE 1016 / ASME A112.18.1</strong> standards. This maintains water temperature within &plusmn;3.6&deg;F (&plusmn;2&deg;C) despite pressure drops elsewhere in the home.</li>
                  <li><strong>PEX-a Piping Systems:</strong> We utilize PEX-a (expansion-fitting) piping for supply lines. PEX-a resists hard water scaling, eliminates the risk of pinhole leaks common in aging copper pipes, and absorbs thermal expansion without stress.</li>
                  <li><strong>Drain Expansion:</strong> In all tub-to-shower conversions, we expand the original 1.5-inch waste line to a code-compliant <strong>2-inch waste and vent line</strong> to handle high-flow modern shower heads without back-ponding.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ faqs={chandlerFaqs} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* CONTACT */}
        <ContactSection />

        <ServiceCTA
          title="Ready for a Free Estimate in Chandler, AZ?"
          description="Call us directly to speak with a project supervisor. We will discuss your project, give you a ballpark estimate over the phone, and schedule your free in-home evaluation within forty-eight hours."
        />
      </main>
      <Footer />
    </>
  );
}
