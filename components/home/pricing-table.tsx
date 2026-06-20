import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const pricingTiers = [
  {
    name: "Guest & Hall Bath Refresh",
    price: "Free Custom Estimate",
    description: "Ideal for maximizing tight spaces and guest bathroom updates.",
    features: [
      "New custom single vanity & top",
      "Premium porcelain floor tiling",
      "Upgraded high-efficiency toilet",
      "Modern paint & trim detailing",
      "Full plumbing fixture swapout",
      "Schluter-Kerdi waterproofing base",
    ],
  },
  {
    name: "Tub-to-Shower Conversion",
    price: "Free Custom Estimate",
    description: "Our most popular service. Replace an unused tub with a safety walk-in shower.",
    features: [
      "Demolition of old cast iron/fiberglass tub",
      "Full recess shower pan alignment",
      "Slip-resistant mosaic shower floor tile",
      "Custom porcelain wall tile (up to ceiling)",
      "Premium frameless glass door profile",
      "Two certified structural grab bars",
    ],
  },
  {
    name: "Luxury Master Spa Suite",
    price: "Free Custom Estimate",
    description: "Complete master bath reconfiguration for a premium spa-like retreat.",
    features: [
      "Custom double vanities & polished quartz",
      "Freestanding soaking tub integration",
      "Curbless zero-threshold walk-in shower",
      "Premium epoxy grout hard water defense",
      "Custom recessed niches & smart lighting",
      "Full structural and permit management",
    ],
  },
];

export default function PricingTable() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20 border-t border-border" aria-label="Remodeling Scopes and Pricing">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-4 py-1.5 rounded-full">
            Project Scopes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground text-balance">
            Average Project Scopes & Custom Estimates
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every home is unique, and pricing depends entirely on your layout, material choices, and plumbing/electrical needs. Call us today for a free, itemized, in-home estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-primary/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="text-2xl font-bold text-accent mb-4">{tier.price}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 border-b border-border pb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`tel:${siteConfig.phoneClean}`}>
                  Get Itemized Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
