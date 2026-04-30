import { CheckCircle } from "lucide-react";

interface AreaIntroProps {
  title: string;
  description: string;
  trustSignals: string[];
}

export default function AreaIntro({
  title,
  description,
  trustSignals,
}: AreaIntroProps) {
  return (
    <section
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {description}
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <h3 className="font-serif text-2xl font-semibold mb-8 text-foreground">
              Why Choose Us
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {trustSignals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${index * 50 + 400}ms`, animationFillMode: 'both' }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-foreground/80 leading-relaxed">{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
