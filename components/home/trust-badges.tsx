import { Star, Shield, Award, Clock } from "lucide-react";

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "On-Time Guarantee" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 lg:py-12 bg-secondary border-y border-border" aria-label="Why choose us - trust badges">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className={`flex items-center justify-center gap-3 bg-card border border-border rounded-xl px-4 py-3 transition-opacity duration-500`}
              role="region"
              aria-label={badge.label}
            >
              <badge.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-foreground text-sm font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
