import Link from "next/link";
import { CreditCard, Percent, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const financingOptions = [
  {
    icon: Percent,
    title: "0% APR for 12 Months",
    description: "Enjoy interest-free financing on qualifying projects over $5,000.",
  },
  {
    icon: Calendar,
    title: "Flexible Payment Plans",
    description: "Choose monthly payments that fit your budget, up to 60 months.",
  },
  {
    icon: CreditCard,
    title: "Quick Approval",
    description: "Get approved in minutes with our simple online application process.",
  },
  {
    icon: CheckCircle,
    title: "No Prepayment Penalty",
    description: "Pay off your balance early without any additional fees.",
  },
];

export default function Financing() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Financing Options
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Make Your Dream Bathroom Affordable
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Don&apos;t let budget constraints hold you back. We offer flexible financing 
              options to help you get the bathroom of your dreams today.
            </p>
          </div>

          {/* Financing Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {financingOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/financing">Learn About Financing Options</Link>
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Subject to credit approval. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
