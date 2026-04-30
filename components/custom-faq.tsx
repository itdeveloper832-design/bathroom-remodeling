interface CustomFAQProps {
  title?: string;
  subtitle?: string;
  description?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export default function CustomFAQ({
  title = "Frequently Asked Questions",
  subtitle,
  description = "Get answers to common questions about our bathroom remodeling services.",
  faqs,
}: CustomFAQProps) {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {subtitle && (
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                {subtitle}
              </span>
            )}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-border rounded-xl bg-card overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-foreground hover:bg-muted/50 transition-colors">
                  <span>{faq.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-muted-foreground"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
