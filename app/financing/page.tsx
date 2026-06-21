import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"
import { Check, Calculator, Clock, Shield, CreditCard } from "lucide-react"

export const metadata: Metadata = {title: "Bathroom Remodel Financing Chandler AZ | Payment Plans",description: "Affordable bathroom remodel financing options in Chandler, AZ. Learn about low-APR home improvement loans, HELOCs, and flexible payment plans.",
  openGraph: {title: "Financing Options | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore financing options, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: `${siteConfig.url}/financing/`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-bathroom.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Financing - Chandler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",title: "Financing Options | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore financing options, custom showers, tile, vanities, clear pricing, and free estimates.",
    images: [`${siteConfig.url}/images/hero-bathroom.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/financing/`,
  },
}

const benefits = [
  {
    icon: Calculator,
    title: "Low Monthly Payments",
    description: "Spread the cost of your remodel over manageable monthly payments that fit your budget."
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get approved in minutes with our streamlined application process. Start your project sooner."
  },
  {
    icon: Shield,
    title: "Competitive Rates",
    description: "We partner with top lenders to offer you the best rates and terms available."
  },
  {
    icon: CreditCard,
    title: "Flexible Terms",
    description: "Choose from various repayment terms to find the option that works best for you."
  }
]

const plans = [
  {
    title: "Same as Cash",
    term: "12 Months",
    description: "Pay no interest if paid in full within 12 months",
    features: [
      "No interest if paid in full",
      "Low monthly payments",
      "No prepayment penalties",
      "Quick approval process"
    ]
  },
  {
    title: "Low Rate Financing",
    term: "24-60 Months",
    description: "Extended terms with competitive fixed rates",
    features: [
      "Fixed monthly payments",
      "Rates as low as 6.99% APR",
      "Terms up to 60 months",
      "No early payoff penalties"
    ]
  },
  {
    title: "Deferred Interest",
    term: "18 Months",
    description: "No interest charged if paid within promotional period",
    features: [
      "No interest if paid in full",
      "Longer promotional period",
      "Flexible payment options",
      "Easy online account management"
    ]
  }
]

export default function FinancingPage() {
  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Financing", url: "https://arzhomeremodeling.com/financing/" } ]} />
<Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Financing Options
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Affordable Bathroom Remodeling Financing
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Don&apos;t let budget constraints hold you back. Get affordable bathroom remodeling with flexible 
                financing options and **specialized home improvement loans arizona** homeowners trust. Low monthly payments and 0% APR available for Chandler homeowners.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={`tel:${siteConfig.phoneClean}`}>Apply for Financing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Why Finance With Us?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We make it easy to afford your home improvement project with flexible options designed for your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Financing Plans
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that works best for your budget and project scope.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <Card key={plan.title} className="border-border">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">{plan.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {plan.term}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                How Financing Works
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Get Your Estimate
                  </h3>
                  <p className="text-muted-foreground">
                    Schedule a free consultation to discuss your project and receive a detailed estimate.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Apply Online
                  </h3>
                  <p className="text-muted-foreground">
                    Complete a simple online application. Most applicants receive a decision in minutes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-semibold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-muted-foreground">
                    Once approved, we can begin your remodel right away with affordable monthly payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                Financing FAQ
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  What credit score is needed for bathroom remodeling financing?
                </h3>
                <p className="text-muted-foreground">
                  Our lending partners offer programs for a wide range of credit profiles. While the best rates are available for excellent credit, there are options available for average or fair credit scores as well.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  How does local custom financing compare to national franchise programs like bath fitter financing?
                </h3>
                <p className="text-muted-foreground">
                  National franchise programs (such as bath fitter financing) are often restricted to rigid retail installment contracts for their specific acrylic overlay inserts. Our independent local financing provides highly flexible home improvement loans that cover custom tile work, structural layouts, and premium plumbing upgrades at competitive East Valley bank rates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  Are there any prepayment penalties?
                </h3>
                <p className="text-muted-foreground">
                  No, none of our promotional or standard financing plans have prepayment penalties. You can pay off your balance at any time without extra fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-primary-foreground/80 text-lg">
                Contact us today to discuss financing options for your bathroom remodel.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <a href={`tel:${siteConfig.phoneClean}`}>Speak to a Project Supervisor</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={`tel:${siteConfig.phoneClean}`}>Call Now: {siteConfig.phone}</a>
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

