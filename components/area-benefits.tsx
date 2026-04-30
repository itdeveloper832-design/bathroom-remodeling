import { Sparkles } from "lucide-react";

interface AreaBenefitsProps {
  benefits: string[];
}

export default function AreaBenefits({ benefits }: AreaBenefitsProps) {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-background leading-tight">
              Benefits of Our Remodeling
            </h2>
            <p className="text-background/80 text-lg max-w-2xl mx-auto">
              Discover what makes our bathroom remodeling services the perfect choice for your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-background font-medium text-lg leading-snug">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
