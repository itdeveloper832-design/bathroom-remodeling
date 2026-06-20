import Link from "next/link";
import { CreditCard, Percent, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const financingOptions = [
  {
    icon: Percent,
    title: "0% APR for 12 Months",
    description: "On qualifying projects, subject to lender approval.",
  },
  {
    icon: Calendar,
    title: "Flexible Payment Plans",
    description: "Monthly payments up to 60 months on approved credit.",
  },
  {
    icon: CreditCard,
    title: "Quick Pre-Qualification",
    description: "Simple application with options explained during your estimate visit.",
  },
  {
    icon: CheckCircle,
    title: "No Prepayment Penalty",
    description: "Pay off early without extra fees when your lender allows it.",
  },
];

export default function Financing() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Financing</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
              Payment Options for Your Bathroom Project
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Spread the cost of a Chandler bathroom remodel with financing on qualifying work. Terms are explained before you commit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {financingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{option.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/financing/">Learn About Financing</Link>
            </Button>
            <p className="text-muted-foreground text-sm mt-4">Subject to credit approval. Terms apply.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
