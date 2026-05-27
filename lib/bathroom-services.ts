import { ShowerHead, Bath, Lightbulb, LucideIcon, Droplets, Sparkles, ArrowUpDown, Accessibility, DoorOpen, RefreshCw, ArrowRightLeft, Trash2, TrendingUp, LayoutGrid, Users } from "lucide-react";

export type BathroomService = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const bathroomServices: BathroomService[] = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Complete shower remodeling services with modern fixtures, premium materials, and expert craftsmanship.",
    icon: ShowerHead,
  },
  {
    name: "Bathtub Remodeling",
    href: "/bathtub-remodeling/",
    description:
      "Professional bathtub remodeling and replacement services for ultimate comfort and relaxation.",
    icon: Bath,
  },
  {
    name: "Walk-In Showers",
    href: "/walk-in-showers/",
    description:
      "Barrier-free walk-in shower installation with frameless glass and ADA-compliant options.",
    icon: DoorOpen,
  },
  {
    name: "Shower Replacement",
    href: "/shower-replacement/",
    description:
      "Fast, professional shower replacement services with modern designs and quality materials.",
    icon: RefreshCw,
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Convert your unused bathtub into a spacious, modern walk-in shower.",
    icon: ArrowRightLeft,
  },
  {
    name: "Tub Removal",
    href: "/tub-removal/",
    description:
      "Professional bathtub removal with proper plumbing disconnection and floor preparation.",
    icon: Trash2,
  },
  {
    name: "Shower & Bathtub Upgrade",
    href: "/shower-bathtub-upgrade/",
    description:
      "Upgrade your shower and bathtub with modern fixtures, fresh tile, and premium materials.",
    icon: TrendingUp,
  },
  {
    name: "Cabinet & Countertop Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "Custom cabinet and countertop installation with granite, quartz, and marble options.",
    icon: LayoutGrid,
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description:
      "Expert bathroom vanity installation services with custom designs and premium materials.",
    icon: Sparkles,
  },
  {
    name: "Bathroom Flooring Installation",
    href: "/bathroom-flooring-installation/",
    description:
      "Professional bathroom flooring installation with durable, water-resistant materials.",
    icon: ArrowUpDown,
  },
  {
    name: "Bathroom Lighting Installation",
    href: "/bathroom-lighting-installation/",
    description:
      "Modern bathroom lighting installation services for enhanced ambiance and functionality.",
    icon: Lightbulb,
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Expert bathroom tile installation with premium materials and precision craftsmanship.",
    icon: Droplets,
  },
  {
    name: "Luxury Bathroom Remodeling",
    href: "/luxury-bathroom-remodeling/",
    description: "Premium master bath transformations with high-end finishes and custom spa designs.",
    icon: Sparkles,
  },
  {
    name: "ADA Bathroom Remodeling",
    href: "/ada-bathroom-remodeling/",
    description: "Safe, ADA-compliant bathroom modifications for seniors and individuals with mobility needs.",
    icon: Accessibility,
  },
  {
    name: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description: "High-impact updates for secondary bathrooms, powder rooms, and guest suites.",
    icon: Users,
  },
  {
    name: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description: "Maximize your small bathroom space with our expert small bathroom remodeling services.",
    icon: LayoutGrid,
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "Full master bath remodels with custom tile showers, double vanities, quartz tops, and layout updates.",
    icon: Sparkles,
  },
];

export function getRelatedServices(currentHref: string): BathroomService[] {
  // Clean trailing/leading slashes for standard comparison
  const cleanHref = currentHref.replace(/^\/|\/$/g, "");
  
  // Custom complimentary mapping
  const relationships: Record<string, string[]> = {
    "walk-in-showers": [
      "/tub-to-shower-conversion/",
      "/ada-bathroom-remodeling/",
      "/shower-replacement/",
    ],
    "tub-to-shower-conversion": [
      "/walk-in-showers/",
      "/ada-bathroom-remodeling/",
      "/bathroom-tile-installation/",
    ],
    "shower-replacement": [
      "/walk-in-showers/",
      "/shower-bathtub-upgrade/",
      "/bathtub-remodeling/",
    ],
    "bathroom-vanity-installation": [
      "/cabinet-countertop-installation/",
      "/bathroom-lighting-installation/",
      "/master-bathroom-remodel/",
    ],
    "cabinet-countertop-installation": [
      "/bathroom-vanity-installation/",
      "/bathroom-tile-installation/",
      "/luxury-bathroom-remodeling/",
    ],
    "bathroom-flooring-installation": [
      "/bathroom-tile-installation/",
      "/bathroom-vanity-installation/",
      "/small-bathroom-remodeling/",
    ],
    "bathroom-lighting-installation": [
      "/bathroom-vanity-installation/",
      "/bathroom-flooring-installation/",
      "/bathroom-tile-installation/",
    ],
    "bathroom-tile-installation": [
      "/bathroom-flooring-installation/",
      "/bathroom-vanity-installation/",
      "/walk-in-showers/",
    ],
    "luxury-bathroom-remodeling": [
      "/master-bathroom-remodel/",
      "/bathroom-vanity-installation/",
      "/bathroom-tile-installation/",
    ],
    "ada-bathroom-remodeling": [
      "/walk-in-showers/",
      "/tub-to-shower-conversion/",
      "/bathroom-vanity-installation/",
    ],
    "guest-bathroom-remodeling": [
      "/small-bathroom-remodeling/",
      "/shower-replacement/",
      "/bathroom-vanity-installation/",
    ],
    "small-bathroom-remodeling": [
      "/guest-bathroom-remodeling/",
      "/shower-replacement/",
      "/bathroom-vanity-installation/",
    ],
    "master-bathroom-remodel": [
      "/shower-remodeling/",
      "/bathroom-vanity-installation/",
      "/bathroom-flooring-installation/",
    ],
    "shower-remodeling": [
      "/walk-in-showers/",
      "/tub-to-shower-conversion/",
      "/bathroom-tile-installation/",
    ],
    "bathtub-remodeling": [
      "/shower-bathtub-upgrade/",
      "/tub-removal/",
      "/walk-in-showers/",
    ],
    "tub-removal": [
      "/tub-to-shower-conversion/",
      "/walk-in-showers/",
      "/bathroom-flooring-installation/",
    ],
    "shower-bathtub-upgrade": [
      "/shower-remodeling/",
      "/bathtub-remodeling/",
      "/bathroom-tile-installation/",
    ],
  };

  const relatedHrefs = relationships[cleanHref];
  if (relatedHrefs) {
    return bathroomServices.filter(s => relatedHrefs.includes(s.href));
  }
  
  // Fallback to cycling if not explicitly mapped
  return bathroomServices
    .filter(s => s.href !== currentHref && s.href !== `${currentHref}/` && `/${s.href}` !== currentHref)
    .slice(0, 3);
}

