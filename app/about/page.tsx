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
  title: "ARZ Home Remodeling: Licensed Bathroom Contractor in Chandler, AZ",
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
    question: "Why should I hire a licensed contractor instead of a handyman?",
    answer: "Plumbing and electrical installations in wet bathroom areas must follow strict building safety rules. A licensed, ROC bonded contractor ensures your project meets all City of Chandler municipal building codes. Working with a licensed contractor protects your financial investment and ensures your home remains safe and fully insurable."
  },
  {
    question: "Do you pull the necessary building permits for my remodel?",
    answer: "Yes, we coordinate all paperwork and pull required building permits from the City of Chandler Development Services Department located near Downtown Chandler. We handle the entire inspection process, including structural, plumbing, and electrical checkups, to ensure your bathroom meets all local building safety codes."
  },
  {
    question: "How do you handle HOA approvals in Chandler neighborhoods?",
    answer: "We have extensive experience working with local home owner associations in communities like Ocotillo, Fulton Ranch, and Sun Lakes. We prepare the necessary design documents, paint samples, and layout plans required for your specific HOA review board to ensure a smooth, worry free approval process."
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
                ARZ Home Remodeling is a local residential contractor company operating under license ROC #345678. Owner {siteConfig.owner} and our team have helped families across the East Valley update their homes for over 15 years.
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
                    src="/images/alex-rivers.png"
                    alt="Alex Rivers, Owner of ARZ Home Remodeling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                  <p className="text-xl font-serif font-bold text-primary">Alex Rivers</p>
                  <p className="text-sm text-muted-foreground">Owner & Lead Contractor</p>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Local Expertise in Every Tile
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  I started ARZ Home Remodeling after working for more than a decade in the Arizona residential construction industry. I saw too many homeowners in the East Valley paying high prices for luxury bathrooms that began to fail within two years because of poor waterproofing or cheap materials.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In Chandler's desert climate, precision is not just about looks. It is about structural safety. Extreme summer temperatures cause home framing to shift, while our mineral heavy municipal water quickly ruins standard grout. Whether we are updating a luxury master bathroom in Ocotillo, a guest bath in Fulton Ranch, or a retirement home shower in Sun Lakes, we treat every home like our own.
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
                  year: "Member ID #82910",
                  icon: <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                },
                {
                  award: "BBB A+ Accredited",
                  issuer: "Better Business Bureau",
                  year: "Accredited since 2018",
                  img: "/images/badges/bbb-badges.png"
                },
                {
                  award: "Nextdoor Favorite",
                  issuer: "Neighborhood Awards",
                  year: "2024 Winner",
                  img: "/images/badges/nextdoor-badges.png"
                },
                {
                  award: "Yelp Top Rated",
                  issuer: "Client Reviews",
                  year: "4.9/5.0 Rating",
                  img: "/images/badges/yelp-badges.png"
                },
                {
                  award: "Chamber Member",
                  issuer: "Chandler Chamber",
                  year: "Active Member",
                  img: "/images/badges/chamber-badges.png"
                },
                {
                  award: "Licensed & Insured",
                  issuer: "Arizona ROC",
                  year: siteConfig.license,
                  icon: <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                }
              ].map((recognition, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8 text-center flex flex-col items-center justify-center">
                  {recognition.img ? (
                    <div className="relative h-16 w-full mb-4">
                      <Image 
                        src={recognition.img} 
                        alt={recognition.award} 
                        fill 
                        className="object-contain"
                        sizes="200px"
                      />
                    </div>
                  ) : (
                    recognition.icon
                  )}
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

