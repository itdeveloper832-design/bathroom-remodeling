import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import { Shield, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react"

export const metadata: Metadata = {title: "Warranty Chandler AZ | Free Estimate",description: "Professional warranty in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
  openGraph: {title: "Workmanship Warranty | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore workmanship warranty, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/warranty/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling 5-Year Warranty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Workmanship Warranty | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore workmanship warranty, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/warranty/`,
  },
}

export default function WarrantyPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[ 
          { name: "Home", url: "https://arzhomeremodeling.com/" }, 
          { name: "Services", url: "https://arzhomeremodeling.com/services/" }, 
          { name: "Warranty", url: "https://arzhomeremodeling.com/warranty/" } 
        ]} 
      />
      <Header />
      <main className="min-h-screen bg-background pt-24 md:pt-28 lg:pt-32">
        {/* Hero Section */}
        <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/50 via-slate-950 to-slate-950 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-6">
                <Shield className="w-4 h-4 text-accent" /> 5-Year Workmanship Warranty
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Our Guarantee of Craftsmanship
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                At ARZ Home Remodeling, we stand behind the quality of our work. Our industry-leading 5-year warranty ensures your custom bathroom remodel is built to last.
              </p>
            </div>
          </div>
        </section>

        {/* Warranty Details */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Box Info */}
              <div className="p-8 rounded-2xl bg-muted/30 border border-border/80 mb-16 flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    Why We Offer a 5-Year Warranty
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Most standard bathroom remodeling contractors only offer a 1-year warranty on workmanship. Because we utilize premium materials, including Schluter-Kerdi waterproofing systems and professional-grade grouts, and employ certified installation technicians, we confidently extend our warranty to 5 years.
                  </p>
                </div>
              </div>

              {/* Grid of Coverage & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                
                {/* What is covered */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      What is Covered
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    This workmanship warranty covers all physical labor and installation errors performed exclusively by ARZ Home Remodeling:
                  </p>
                  <ul className="space-y-3.5 text-muted-foreground text-sm pl-4 list-disc marker:text-primary">
                    <li><strong>Shower Waterproofing:</strong> Integrity of the Schluter-Kerdi waterproofing membrane and drainage systems against leaks.</li>
                    <li><strong>Tile Installation:</strong> Loose, cracking, or detached tiles and grout lines resulting from improper mortar application.</li>
                    <li><strong>Plumbing Connections:</strong> Leaks or structural failures in newly installed supply and waste lines completed by our team.</li>
                    <li><strong>Structural Adjustments:</strong> Structural framing, drywall taping, trim, and cabinetry mounting executed during the remodel.</li>
                    <li><strong>Electrical Fixtures:</strong> Correct wiring and assembly of lighting, exhaust fans, and vanity power systems.</li>
                  </ul>
                </div>

                {/* What is NOT covered */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      What is Not Covered (Exclusions)
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    While we take pride in our work, our warranty does not cover issues arising from factors beyond our installation labor:
                  </p>
                  <ul className="space-y-3.5 text-muted-foreground text-sm pl-4 list-disc marker:text-amber-500">
                    <li><strong>Material Defects:</strong> Failures, tarnishing, or defects in customer-supplied fixtures, faucets, tiles, or vanities (covered under manufacturer warranty).</li>
                    <li><strong>Normal Wear & Tear:</strong> Minor hairline grout cracking due to settling, caulking wear, or routine cosmetic deterioration.</li>
                    <li><strong>Abuse & Lack of Care:</strong> Damage from impact, harsh chemical cleaners, mold/mildew from inadequate ventilation, or lack of maintenance.</li>
                    <li><strong>Pre-existing Conditions:</strong> Foundation shifting, slab cracking, or structural issues pre-dating the remodeling scope.</li>
                    <li><strong>Third-Party Modification:</strong> Any work altered, repaired, or modified by the homeowner or other contractors after our completion.</li>
                  </ul>
                </div>

              </div>

              {/* Claims Process */}
              <div className="border-t border-border pt-16">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                      How to Make a Claim
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      If you suspect an issue related to our workmanship, please contact us immediately. We will schedule a technician to inspect the issue within 48 business hours. If the issue is determined to be an installation defect, we will repair it at absolute zero cost to you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="tel:+15205693339" 
                        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        Call (520) 569-3339
                      </a>
                      <a 
                        href="/contact/" 
                        className="inline-flex items-center justify-center border border-border bg-background hover:bg-muted text-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        Submit a Request Online
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
