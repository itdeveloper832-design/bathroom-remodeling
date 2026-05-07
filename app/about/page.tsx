import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Shield, CheckCircle2, ArrowRight, Phone, Pencil, Hammer, Sparkles } from "lucide-react"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "ARZ Home Remodeling — Licensed Bathroom Contractor in Chandler, AZ",
  description: "Local, licensed bathroom remodeling contractor in Chandler AZ. Over 15 years building luxury baths with guaranteed satisfaction. Read our story!",
  openGraph: {
    title: "Bathroom Remodeling Contractor Chandler AZ | ARZ Home Remodeling",
    description: "Expert bathroom remodeling contractor Chandler AZ. Professional, high-quality renovations!",
    url: `${siteConfig.url}/about/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Contractor Chandler AZ",
    description: "Professional bathroom remodeling contractor Chandler AZ. Affordable luxury renovations!",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
}

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every project reflects our commitment to excellence and attention to detail."
  },
  {
    icon: Users,
    title: "Customer-Focused",
    description: "Your vision is our priority. We listen, collaborate, and deliver results that exceed expectations."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time with efficient project management and reliable scheduling."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full protection and peace of mind with proper licensing and comprehensive insurance."
  },
]

const milestones = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "5", label: "Star Reviews" },
]

const aboutFaqs = [
  {
    question: "Why should I hire a professional bathroom remodeling contractor?",
    answer: "A professional bathroom remodeling contractor ensures your project meets all building codes, handles complex plumbing and electrical work safely, and delivers high-quality finishes that increase your home's value."
  },
  {
    question: "How much does a bathroom remodel cost in Chandler AZ?",
    answer: "Costs vary depending on the scope of work. As an experienced bathroom remodeling contractor, we provide transparent pricing and free estimates tailored to your specific needs and budget."
  },
  {
    question: "Are your remodeling services licensed and insured?",
    answer: "Yes, we are a fully licensed and insured bathroom remodeling contractor in Chandler, AZ, providing you with complete peace of mind throughout your renovation journey."
  }
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "About Us", url: `${siteConfig.url}/about/` }
        ]} 
      />
      <FAQSchema faqs={aboutFaqs} />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 lg:pt-48 pb-24 md:pb-32 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Story
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Top-Rated Bathroom Remodeling Contractor in Chandler AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                For over 15 years, we have served as a trusted bathroom remodeling contractor in Chandler. 
                Owner {siteConfig.owner} and our team combine quality craftsmanship with {siteConfig.license} to bring your dream bathroom to life.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
                    {milestone.number}
                  </p>
                  <p className="mt-2 text-primary-foreground/80 text-sm uppercase tracking-wider">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/optimized/photo-1581578731548-c64695cc6952.webp"
                    alt="Master bathroom renovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <p className="text-4xl font-serif font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years in Business</p>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Building Dream Spaces Since 2010
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  I started ARZ after 12 years as a tile setter for a large Phoenix contractor — I&apos;d seen too many homeowners get handed a beautiful-looking bathroom that failed within two years because shortcuts were taken on waterproofing behind the tile. In Chandler&apos;s extreme heat, that&apos;s not just ugly, it&apos;s expensive structural damage.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  When I went out on my own in 2010, I made one rule: we use Schluter KERDI waterproofing membrane on every shower, not the cheap alternatives. It costs us more. It costs us more time. Homeowners in Dobson Ranch and Ocotillo have called me back years later to thank me for it. That&apos;s how we&apos;ve built 500+ projects in the East Valley — one non-leaking shower at a time.
                </p>

                <ul className="mt-6 space-y-3">
                  {["Family-owned and operated", "Local Chandler, AZ business", "Experienced design team", "Premium materials only"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Drives Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Process
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                How We Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our streamlined process ensures a stress-free remodeling experience from start to finish.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Free Consultation",
                  description: "Schedule your complimentary in-home consultation to discuss your vision."
                },
                {
                  icon: Pencil,
                  title: "Design & Planning",
                  description: "Our design team creates detailed plans with 3D renderings of your space."
                },
                {
                  icon: Hammer,
                  title: "Expert Construction",
                  description: "Skilled craftsmen execute every detail with precision and quality materials."
                },
                {
                  icon: Sparkles,
                  title: "Final Walkthrough",
                  description: "We ensure every detail exceeds expectations before handoff."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Recognition
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Award-Winning Quality
              </h2>
              <p className="mt-4 text-muted-foreground">
                Recognized for excellence in craftsmanship and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  award: "Verified NARI Member",
                  issuer: "National Association of the Remodeling Industry",
                  year: "Member ID #82910"
                },
                {
                  award: "BBB A+ Accredited",
                  issuer: "Better Business Bureau",
                  year: "Accredited since 2018"
                },
                {
                  award: "Google Guaranteed",
                  issuer: "Local Services Ads",
                  year: "Verified Business"
                },
                {
                  award: "Licensed & Insured",
                  issuer: "Arizona ROC",
                  year: siteConfig.license
                },
                {
                  award: "5-Star Top Rated",
                  issuer: "Google Reviews",
                  year: "4.9/5.0 Rating"
                },
                {
                  award: "Schluter Certified",
                  issuer: "Waterproofing Specialist",
                  year: "Systems Professional"
                }
              ].map((recognition, index) => (

                <div key={index} className="bg-card border border-border rounded-xl p-8 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {recognition.award}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {recognition.issuer}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {recognition.year}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
              {[
                { label: "Licensed & Bonded", icon: "✓" },
                { label: "Fully Insured", icon: "✓" },
                { label: "15+ Years Experience", icon: "✓" },
                { label: "100% Satisfaction", icon: "✓" }
              ].map((badge, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-2">{badge.icon}</div>
                  <p className="text-sm font-medium text-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Ready to Start Your Remodeling Project?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Contact us today for a free consultation. Let&apos;s discuss your vision and 
                create a plan to transform your space.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact/">
                    Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`tel:${siteConfig.phone}`}>
                    Call {siteConfig.phone}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
