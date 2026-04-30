const faqs = [
  {
    question: "How long does a typical bathroom remodel take?",
    answer: "Most bathroom remodels take 2-4 weeks depending on the scope of work. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes, we handle all necessary permits and coordinate inspections to ensure your project meets local building codes."
  },
  {
    question: "What's included in your warranty?",
    answer: "We provide a comprehensive warranty covering workmanship and materials. Specific terms vary by project scope."
  },
  {
    question: "Can you work with my existing plumbing?",
    answer: "In most cases, yes. Our team will assess your current plumbing and recommend the best approach for your remodel."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options to help make your bathroom remodel more affordable. Contact us for details."
  }
];

interface ServiceFAQProps {
  title?: string;
  description?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  description = "Get answers to common questions about our bathroom remodeling services.",
  faqs: customFaqs,
}: ServiceFAQProps) {
  const faqsToRender = customFaqs ?? faqs;

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {faqsToRender.map((faq, index) => (
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