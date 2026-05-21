import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/lib/home-faqs";

export default function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-secondary" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground">
              Bathroom Remodeling FAQs for Chandler, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Direct answers about cost, time, permits, tile, and tub-to-shower work in Chandler and the East Valley.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="w-full px-6 py-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-muted/50 transition-colors list-none">
                  <span className="font-serif text-lg font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 mt-1 group-open:rotate-180" />
                </summary>
                <div
                  className="px-6 pb-6 text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:hover:underline"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
