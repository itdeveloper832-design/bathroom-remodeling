import {
  Phone,
  Home,
  Wrench,
  CheckCircle,
  Hammer,
  ShowerHead,
  ShieldCheck,
  Ruler,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Initial Consultation",
    description: "We discuss your vision, needs, and budget to create a customized plan."
  },
  {
    icon: Home,
    title: "Design & Planning",
    description: "Our team creates detailed designs and handles all permits and planning."
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert craftsmen bring your vision to life with quality materials."
  },
  {
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "We ensure everything meets our high standards and your expectations."
  }
];

type ProcessStep = {
  number?: string;
  icon?: LucideIcon | string;
  title: string;
  description: string;
};

interface ServiceProcessProps {
  title?: string;
  subtitle?: string;
  description?: string;
  steps?: ProcessStep[];
}

const iconMap: Record<string, LucideIcon> = {
  Phone,
  PhoneCall: Phone,
  Home,
  Wrench,
  Hammer,
  ShowerHead,
  CheckCircle,
  ShieldCheck,
  Ruler,
  Sparkles,
};

function resolveIcon(icon?: LucideIcon | string): LucideIcon {
  if (!icon) return CheckCircle;
  if (typeof icon === "string") return iconMap[icon] ?? CheckCircle;
  return icon;
}

export default function ServiceProcess({
  title = "Our Process",
  subtitle,
  description = "We follow a proven process to ensure your bathroom remodel exceeds expectations.",
  steps: customSteps,
}: ServiceProcessProps) {
  const stepsToRender = customSteps ?? steps;

  return (
    <section className="py-20 lg:py-32 bg-background">
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
            {stepsToRender.map((step, index) => {
              const Icon = resolveIcon(step.icon);
              return (
                <div
                  key={`${step.title}-${index}`}
                  className="text-center animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
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
