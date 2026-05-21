import { Check, X, Shield, Clock, TrendingUp, Home } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: TrendingUp,
    title: "Strong Resale Appeal",
    description:
      "Updated bathrooms are among the first rooms East Valley buyers inspect. A modern shower and double vanity help listings stand out.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "ROC338304. Plumbing and electrical in wet areas are handled by licensed trades when your scope requires it.",
  },
  {
    icon: Clock,
    title: "Faster Than DIY",
    description:
      "A pro crew coordinates demo, rough-in, waterproofing, tile, and inspections so you are not without a bath for months.",
  },
  {
    icon: Home,
    title: "Daily Comfort",
    description:
      "Better lighting, storage, and a shower you actually use beat living with a dated tub and failing grout.",
  },
];

const comparisonData = [
  { feature: "Written scope and price", diy: false, pro: true },
  { feature: "Licensed plumbing/electrical", diy: false, pro: true },
  { feature: "Schluter-style waterproofing", diy: "Rare", pro: true },
  { feature: "Custom tile shower", diy: "Risky", pro: true },
  { feature: "Typical timeline", diy: "Months", pro: "2–6 weeks" },
  { feature: "Chandler permits handled", diy: false, pro: true },
];

export default function ComparisonBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Hire a Pro</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-8 text-foreground">
              Professional vs. DIY Bathroom Remodeling
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-8 text-foreground text-center">
              DIY vs. Licensed Contractor
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <caption className="sr-only">DIY versus professional bathroom remodeling in Chandler Arizona</caption>
                <thead>
                  <tr className="border-b border-border text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <th scope="col" className="pb-4">Feature</th>
                    <th scope="col" className="pb-4 text-center">DIY</th>
                    <th scope="col" className="pb-4 text-center">ARZ</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item) => (
                    <tr key={item.feature} className="border-b border-border/50 last:border-0">
                      <td className="py-3 font-medium text-foreground">{item.feature}</td>
                      <td className="py-3 text-center">
                        {typeof item.diy === "boolean" ? (
                          item.diy ? (
                            <Check className="w-4 h-4 text-green-500 mx-auto" aria-label="Yes" />
                          ) : (
                            <X className="w-4 h-4 text-red-500 mx-auto" aria-label="No" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{item.diy}</span>
                        )}
                      </td>
                      <td className="py-3 text-center">
                        {typeof item.pro === "boolean" ? (
                          item.pro ? (
                            <Check className="w-5 h-5 text-primary mx-auto" aria-label="Yes" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" aria-label="No" />
                          )
                        ) : (
                          <span className="font-semibold text-primary">{item.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-xs text-muted-foreground text-center">
              Based on Chandler building practices and typical East Valley remodel scopes.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            We follow{" "}
            <a
              href="https://www.chandleraz.gov/business/building-and-development/building-permits-and-inspections"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              City of Chandler building codes
            </a>{" "}
            and can walk you through permits on our{" "}
            <Link href="/bathroom-remodeling-permits-chandler/" className="text-primary hover:underline font-medium">
              Chandler permit guide
            </Link>
            . For bathroom remodeling in Chandler AZ, durability and waterproofing come before trends.
          </p>
        </div>
      </div>
    </section>
  );
}
