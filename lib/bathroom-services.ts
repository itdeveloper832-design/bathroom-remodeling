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
