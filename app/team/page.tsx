import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { BreadcrumbSchema } from "@/components/seo/json-ld"
import { ExternalLink, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Meet the ARZ Home Remodeling Team | Licensed Bathroom Contractors",
  description: "Meet the expert team behind ARZ Home Remodeling. Licensed Arizona contractors specializing in bathroom remodeling in Chandler with 15+ years of experience.",
  openGraph: {
    title: "Meet Our Team | ARZ Home Remodeling",
    description: "Meet the licensed bathroom contractors and experts at ARZ Home Remodeling in Chandler, Arizona.",
    type: "website",
    url: `${siteConfig.url}/team/`,
  },
  alternates: {
    canonical: `${siteConfig.url}/team/`,
  },
}

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Team", url: `${siteConfig.url}/team/` },
        ]}
      />
      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Meet the ARZ Team
              </h1>
              <p className="text-xl text-muted-foreground">
                Licensed bathroom specialists dedicated to transforming homes in Chandler and the East Valley
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Alex Rivers Card */}
              <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        Alex Rivers
                      </h2>
                      <p className="text-xl text-primary font-semibold mb-1">
                        Founder & Master Contractor
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Licensed Arizona Contractor ROC #338304
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Specialties</h3>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Walk-in shower installations</li>
                          <li>• Tub-to-shower conversions</li>
                          <li>• Master bathroom remodels</li>
                          <li>• Schluter waterproofing systems</li>
                          <li>• Hard water resistant tile solutions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="text-lg font-semibold text-foreground">15+ Years</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Projects Completed</p>
                        <p className="text-lg font-semibold text-foreground">500+</p>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button asChild>
                        <Link href="/team/alex-rivers">View Full Profile</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={`tel:${siteConfig.phoneClean}`}>Call Alex</a>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-secondary rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-foreground">About Alex</h3>
                    <p className="text-foreground leading-relaxed">
                      Alex founded ARZ Home Remodeling in 2010 with a focus on becoming the most trusted bathroom specialist in Chandler. His commitment to expertise, integrity, and customer satisfaction has made him the go-to contractor for homeowners across the East Valley.
                    </p>

                    <div className="pt-4 border-t border-border space-y-3">
                      <h3 className="font-semibold text-foreground">Why Choose Alex</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Licensed Arizona contractor since 2010</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">NARI member with specialized expertise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">2-year workmanship warranty on all projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Local Chandler expert with deep market knowledge</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Work With Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule a free consultation with Alex and his team. We'll discuss your vision, provide expert recommendations, and give you a transparent, detailed estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${siteConfig.phoneClean}`}>{siteConfig.phone}</a>
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
