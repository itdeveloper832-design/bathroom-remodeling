import {
  TrendingUp,
  Heart,
  DollarSign,
  Clock,
  Sparkles,
  ShieldCheck,
  Layout,
  Accessibility,
  Timer,
  Droplets,
  Bath,
  type LucideIcon,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Home Value",
    description: "A quality bathroom remodel can increase your home's value by 10-20%."
  },
  {
    icon: Heart,
    title: "Enhanced Comfort",
    description: "Enjoy a more comfortable and functional space tailored to your needs."
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Modern fixtures and lighting can significantly reduce utility costs."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Better organization and layout save time in your daily routine."
  }
];

type BenefitItem = {
  icon?: LucideIcon | string;
  title: string;
  description: string;
};

interface BenefitsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  benefits?: BenefitItem[];
}

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  DollarSign,
  Clock,
  Sparkles,
  ShieldCheck,
  Layout,
  Accessibility,
  Timer,
  Droplets,
  Bath,
};

function resolveIcon(icon?: LucideIcon | string): LucideIcon {
  if (!icon) return TrendingUp;
  if (typeof icon === "string") return iconMap[icon] ?? TrendingUp;
  return icon;
}

export default function Benefits({
  title = "Benefits of Remodeling",
  subtitle,
  description = "Discover the many advantages of investing in a professional bathroom remodel.",
  benefits: customBenefits,
}: BenefitsProps) {
  const benefitsToRender = customBenefits ?? benefits;

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {subtitle && (
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsToRender.map((benefit, index) => {
              const Icon = resolveIcon(benefit.icon);
              return (
                <div
                  key={`${benefit.title}-${index}`}
                  className="text-center bg-background rounded-xl p-6 border border-border animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
