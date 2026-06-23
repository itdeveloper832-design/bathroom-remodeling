import { Star, ShieldCheck, Award, FileText } from "lucide-react";

export default function UspBar() {
  const items = [
    { label: "15+ Years Experience", icon: Award },
    { label: "Licensed & Insured", icon: ShieldCheck },
    { label: "Quality Craftsmanship", icon: Star },
    { label: "Free Estimates", icon: FileText },
  ];

  return (
    <section className="bg-primary text-primary-foreground py-6 border-b border-border" aria-label="Key Credentials">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
