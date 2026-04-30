import { Star, Shield, Award, Clock } from "lucide-react";

const trustBadges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "On-Time Guarantee" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 lg:py-12 bg-secondary border-y border-border" aria-labelledby="trust-badges-title">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 id="trust-badges-title" className="sr-only">Our trust and quality badges</h2>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 list-none p-0">
          {trustBadges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl px-4 py-3 transition-opacity duration-500"
            >
              <badge.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-foreground text-sm font-medium">
                {badge.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
