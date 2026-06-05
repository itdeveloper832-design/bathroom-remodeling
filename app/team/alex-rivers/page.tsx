import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { PersonSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import { Award, Briefcase, MapPin, Phone, Mail, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: {
    absolute: "Alex Rivers | Bathroom Remodeling Specialist"
  },
  description: "Learn about Alex Rivers and his experience delivering quality bathroom remodeling projects in Chandler, AZ.",
  openGraph: {
    title: "Alex Rivers - Licensed Bathroom Contractor in Chandler AZ",
    description: "Founder of ARZ Home Remodeling. Licensed Arizona contractor with 15+ years of bathroom remodeling expertise.",
    type: "website",
    url: `${siteConfig.url}/team/alex-rivers/`,
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "Alex Rivers, Licensed Bathroom Contractor",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/team/alex-rivers/`,
  },
}

const expertise = [
  {
    icon: "🚿",
    title: "Shower Remodeling",
    description: "Walk-in showers, frameless glass, curbless designs, Schluter waterproofing",
  },
  {
    icon: "🛁",
    title: "Tub-to-Shower Conversions",
    description: "Expert conversions with proper waterproofing and ADA accessibility",
  },
  {
    icon: "🏠",
    title: "Master Bathroom Remodels",
    description: "Full suite renovations including custom layouts and luxury finishes",
  },
  {
    icon: "🪨",
    title: "Tile & Materials",
    description: "Specialty knowledge of Arizona hard water resistant tile solutions",
  },
]

const credentials = [
  { title: "Arizona Registrar of Contractors License", number: "ROC338304", verified: true },
  { title: "NARI Member (National Association of Remodeling Industry)", verified: true },
  { title: "15+ Years Professional Experience", verified: true },
  { title: "500+ Completed Projects", verified: true },
  { title: "Licensed Since 2010", verified: true },
  { title: "Specialize in Chandler & East Valley", verified: true },
]

export default function AlexRiversPage() {
  return (
    <>
      <PersonSchema name={siteConfig.owner} jobTitle="Founder & Master Bathroom Contractor" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Team", url: `${siteConfig.url}/team/` },
          { name: "Alex Rivers", url: `${siteConfig.url}/team/alex-rivers/` },
        ]}
      />
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Profile Card */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                      Alex Rivers
                    </h1>
                    <p className="text-xl text-primary font-semibold">
                      Founder & Master Bathroom Contractor
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Licensed ROC #338304 - 15+ Years of Experience, 500+ Completed Projects
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed text-foreground">
                    Alex Rivers founded ARZ Home Remodeling in 2010 with a singular mission: to become the most trusted bathroom remodeling specialist in the Chandler area. With over 15 years of hands-on experience and a licensed Arizona contractor status, Alex brings expertise, integrity, and craftsmanship to every project.
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-4 rounded-lg border border-border">
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-border">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button size="lg" asChild>
                      <Link href="/contact">Get Free Estimate</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href={`tel:${siteConfig.phoneClean}`}>{siteConfig.phone}</a>
                    </Button>
                  </div>
                </div>

                {/* Credentials Verification */}
                <div className="bg-white rounded-xl border border-border p-8 space-y-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground">Verified Credentials</h2>

                  <div className="space-y-4">
                    {credentials.map((cred, i) => (
                      <div key={i} className="flex gap-3 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                        {cred.verified && (
                          <div className="flex-shrink-0 mt-1">
                            <Check className="w-5 h-5 text-green-600" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{cred.title}</p>
                          {cred.number && (
                            <p className="text-sm text-muted-foreground mt-1">{cred.number}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                    <p className="text-sm text-blue-900">
                      <strong>Verify License:</strong> Visit{" "}
                      <a
                        href="https://roc.az.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline font-semibold"
                      >
                        Arizona Registrar of Contractors
                      </a>{" "}
                      and search ROC #338304
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertise.map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Bathrooms Only?
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  After years of general contracting, Alex realized that bathroom remodeling required a specific level of expertise that most general contractors couldn't deliver. Waterproofing, tile installation, hard water resistant materials, and ADA accessibility demand specialized knowledge and years of hands-on experience.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  By specializing exclusively in bathrooms, ARZ Home Remodeling has become the go-to expert in Chandler and the East Valley. This focus allows Alex and his team to deliver superior results, warranty protection, and customer satisfaction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Chandler Roots, Local Commitment
                </h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Alex has lived and worked in the Chandler area for over 15 years. He understands the unique challenges of desert bathroom design, the specific HOA requirements of planned communities like Ocotillo and Fulton Ranch, and the hard water conditions that affect local homes.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  His commitment to local excellence is reflected in every project: detailed estimates, on-time completion, minimal disruption to your home, and a 2-year workmanship warranty that shows he stands behind his work.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Your Bathroom Remodeling Partner
                </h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Whether you're planning a simple vanity update, a tub-to-shower conversion, or a complete master bathroom transformation, Alex brings expertise, transparency, and a commitment to your complete satisfaction. Get a free in-home estimate today and discover why Chandler homeowners trust ARZ Home Remodeling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Transform Your Bathroom?
              </h2>
              <p className="text-lg text-muted-foreground">
                Contact Alex Rivers today for a free, no-obligation in-home estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" asChild>
                  <Link href="/contact">Schedule Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${siteConfig.phoneClean}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call {siteConfig.phone}
                  </a>
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
