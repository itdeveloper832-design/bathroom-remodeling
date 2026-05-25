import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import { siteConfig } from "@/lib/site-config";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import Link from "next/link";
import { ArrowRight, DollarSign, CheckCircle2, Percent } from "lucide-react";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Financing Chandler AZ - Payment Options",
  description:
    "Explore bathroom remodeling financing options in Chandler, AZ. Learn about low-APR home improvement loans, HELOCs, and flexible payment plans.",
  openGraph: {
    title: "Bathroom Remodeling Financing Chandler AZ - Payment Options",
    description:
      "A complete guide to financing your bathroom remodel in Chandler. Learn about unsecured loans, low monthly payments, and home equity options.",
    url: `${siteConfig.url}/bathroom-remodeling-financing/`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-financing/`,
  },
};

const financingFaqs = [
  {
    question: "Do you offer direct financing for bathroom remodeling?",
    answer:
      "Yes. We partner with premier home improvement lending institutions to offer flexible financing programs. Qualified Chandler homeowners can access low monthly payments, deferred interest options, and competitive APR packages."
  },
  {
    question: "What credit score is required for home improvement financing?",
    answer:
      "Generally, a credit score of 640 or higher is required for most unsecured home improvement loans. Homeowners with excellent credit (720+) qualify for the lowest interest rates and longest repayment terms (up to 12-15 years)."
  },
  {
    question: "How does a home equity line of credit (HELOC) compare to personal loans?",
    answer:
      "A HELOC uses your home's equity as collateral, which offers lower interest rates but requires a appraisal and takes 3-6 weeks to fund. Unsecured personal home improvement loans do not require collateral, require minimal paperwork, and can fund in as little as 24-48 hours."
  },
  {
    question: "Can I pay off my bathroom financing early without penalties?",
    answer:
      "Yes. All of our direct partner lending options feature zero prepayment penalties. You can make extra payments or pay off the entire balance early to save on interest costs."
  },
  {
    question: "How much is the monthly payment for a $20,000 master bathroom remodel?",
    answer:
      "For a $20,000 project, a standard 84-month unsecured home improvement loan with an average interest rate (around 7.9% to 9.9%) yields a monthly payment of approximately $310 to $330. Excellent credit profiles can achieve lower payments."
  },
];

const financingOptions = [
  {
    name: "Unsecured Home Improvement Loans",
    icon: DollarSign,
    terms: "3 to 15 years",
    apr: "6.99% - 15.99%",
    details: "Requires no home equity or collateral. Fast digital approval and funding in 1-3 business days. Great for guest bathroom updates and quick tub conversions.",
  },
  {
    name: "Home Equity Line of Credit (HELOC)",
    icon: Percent,
    terms: "5 to 20 years",
    apr: "7.00% - 9.50% (Variable)",
    details: "Secured by your home equity. Offers lower interest rates and tax-deductible interest (consult a CPA), making it ideal for large-scale custom master bath renovations.",
  },
];

const paymentEstimates = [
  {
    projectType: "Guest Bath Cosmetic Refresh",
    cost: "$6,000",
    term: "60 Months",
    payment: "$120 - $140 /mo",
    highlight: false,
  },
  {
    projectType: "Full Guest Bath / Tub Conversion",
    cost: "$15,000",
    term: "84 Months",
    payment: "$225 - $250 /mo",
    highlight: true,
  },
  {
    projectType: "Luxury Master Suite Remodel",
    cost: "$35,000",
    term: "120 Months",
    payment: "$390 - $430 /mo",
    highlight: false,
  },
];

export default function FinancingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arzhomeremodeling.com/" },
          { name: "Services", url: "https://arzhomeremodeling.com/services/" },
          { name: "Bathroom Remodeling Financing", url: "https://arzhomeremodeling.com/bathroom-remodeling-financing/" },
        ]}
      />
      <FAQSchema faqs={financingFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Remodeling Financing in Chandler, AZ"
          subtitle="Flexible Payments for Your Dream Design"
          description="Explore unsecured home improvement loans, HELOC options, and contractor payment terms. Find low monthly payments that fit your budget."
          image="/images/services/bathroom-flooring-chandler.webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Bathroom Remodeling Costs", url: `${siteConfig.url}/bathroom-remodel-cost-chandler/` },
            { name: "Financing Options", url: `${siteConfig.url}/bathroom-remodeling-financing/` },
          ]}
        />

        {/* INTRO */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              How to Fund Your Bathroom Renovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Upgrading a bathroom is a major investment that enhances your daily comfort and increases your home's equity. While some homeowners prefer to pay cash, many utilize financing to protect their savings and start construction immediately rather than waiting.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              By financing your remodel, you can design the high-end shower or custom vanity layout you want today, while spreading the cost over low, manageable monthly payments. This guide outlines the most common financing vehicles available to Chandler homeowners.
            </p>
            <div className="flex items-start gap-3 bg-secondary border border-border rounded-xl p-5 mt-6">
              <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                We work with top home improvement lenders to make financing simple. To review your pre-qualification terms without affecting your credit score, call us at <a href="tel:+15205693339" className="text-primary hover:underline font-medium">(520) 569-3339</a>.
              </p>
            </div>
          </div>
        </section>

        {/* FINANCING VEHICLES */}
        <section className="py-12 lg:py-20 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-center mb-12 text-foreground">
              Common Financing Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {financingOptions.map((opt) => (
                <div key={opt.name} className="bg-background border border-border rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <opt.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">{opt.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <div>
                      <p className="text-primary/70">Typical Term</p>
                      <p className="text-foreground text-sm font-medium">{opt.terms}</p>
                    </div>
                    <div>
                      <p className="text-primary/70">Average APR</p>
                      <p className="text-foreground text-sm font-medium">{opt.apr}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{opt.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MONTHLY PAYMENT ESTIMATOR */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold text-center mb-4 text-foreground">
              Estimated Monthly Payments
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Ballpark monthly payment estimates based on unsecured personal loans.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {paymentEstimates.map((est) => (
                <div
                  key={est.projectType}
                  className={`rounded-2xl border p-6 text-center ${
                    est.highlight
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border"
                  }`}
                >
                  <p className={`text-xs uppercase font-semibold tracking-wider ${est.highlight ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                    {est.projectType}
                  </p>
                  <p className={`text-2xl font-bold font-serif my-3 ${est.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {est.cost}
                  </p>
                  <div className={`border-t border-b py-2 my-3 text-xs ${est.highlight ? "border-primary-foreground/30" : "border-border text-muted-foreground"}`}>
                    Term: {est.term}
                  </div>
                  <p className={`text-lg font-bold ${est.highlight ? "text-primary-foreground" : "text-primary"}`}>
                    {est.payment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-serif text-2xl font-semibold text-center mb-6 text-foreground">
              Review Remodeling Costs
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/bathroom-remodel-cost-chandler/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Full Cost Guide
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/walk-in-shower-cost/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Shower Project Cost
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
              <Link
                href="/master-bathroom-remodel-cost/"
                className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group flex items-center justify-between no-underline"
              >
                <span className="font-semibold text-foreground group-hover:text-primary text-sm">
                  Master Remodel Cost
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={financingFaqs} />
        <Testimonials />
        <ServiceCTA
          title="Apply for Remodeling Financing Today"
          description="Speak to our team. Call us or complete our online request to learn more about financing options, pre-qualification requirements, and available terms."
        />
      </main>
      <Footer />
    </>
  );
}
