import Link from "next/link";
import { DollarSign, Clock, FileCheck } from "lucide-react";

const answers = [
  {
    icon: DollarSign,
    question: "How much does a bathroom remodel cost in Chandler?",
    answer:
      "Project costs depend entirely on square footage, layout changes, and material selections. We offer free on-site inspections and provide a detailed, line-item written estimate before any work begins. Call us today to schedule your quote.",
    link: { href: "/bathroom-remodel-cost-chandler/", label: "See Chandler cost guide" },
  },
  {
    icon: Clock,
    question: "How long does it take?",
    answer:
      "Guest baths: about 2 to 3 weeks of construction. Tub-to-shower: often 3 to 5 days after demo. Master baths with layout changes: 4 to 6 weeks.",
    link: { href: "/bathroom-remodeling-timeline/", label: "View project timeline" },
  },
  {
    icon: FileCheck,
    question: "Do you need a permit in Chandler?",
    answer:
      "Yes when you move plumbing, walls, or electrical. Vanity swaps and floor tile alone usually do not. We pull permits and book inspections when required.",
    link: { href: "/bathroom-remodeling-permits-chandler/", label: "Chandler permit guide" },
  },
];

export default function QuickAnswers() {
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border" aria-labelledby="quick-answers-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 id="quick-answers-heading" className="sr-only">
          Quick answers about bathroom remodeling in Chandler AZ
        </h2>
        <p className="text-center text-sm font-medium tracking-wider uppercase text-primary mb-8">
          Quick Answers
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {answers.map((item) => (
            <article
              key={item.question}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {item.question}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 quick-answer-text">
                {item.answer}
              </p>
              <Link
                href={item.link.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                {item.link.label}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
