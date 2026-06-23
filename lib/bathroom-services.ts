import { ShowerHead, Bath, Lightbulb, LucideIcon, Droplets, Sparkles, ArrowUpDown, Accessibility, DoorOpen, RefreshCw, ArrowRightLeft, Trash2, TrendingUp, LayoutGrid, Users } from "lucide-react";

export type BathroomService = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
};

export const bathroomServices: BathroomService[] = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling/",
    description:
      "Complete shower remodeling with modern fixtures, Schluter-KERDI waterproofing, premium porcelain tile, and frameless glass enclosures.",
    icon: ShowerHead,
    image: "/images/services/shower-remodeling.jpg",
    alt: "Custom walk-in shower remodel with floor-to-ceiling tile in Chandler AZ",
  },
  {
    name: "Bathtub Remodeling",
    href: "/bathtub-remodeling/",
    description:
      "Professional bathtub remodeling and replacement for ultimate comfort — freestanding soakers, alcove tubs, and luxury finishes.",
    icon: Bath,
    image: "/images/services/bathtub-remodeling.jpg",
    alt: "Freestanding bathtub remodel with modern fixtures in a luxury bathroom",
  },
  {
    name: "Walk-In Showers",
    href: "/walk-in-showers/",
    description:
      "Barrier-free walk-in shower installation with frameless glass, low-profile bases, and ADA-compliant curbless entries.",
    icon: DoorOpen,
    image: "/images/services/walk-in-showers.jpg",
    alt: "Barrier-free walk-in shower with frameless glass door and large tile",
  },
  {
    name: "Shower Replacement",
    href: "/shower-replacement/",
    description:
      "Fast, professional shower replacement with modern designs — we remove old units, repair the subfloor, and install a fresh custom shower.",
    icon: RefreshCw,
    image: "/images/services/shower-replacement.jpg",
    alt: "New shower replacement installation with modern tile and fixtures",
  },
  {
    name: "Tub to Shower Conversion",
    href: "/tub-to-shower-conversion/",
    description:
      "Convert your unused bathtub into a spacious, modern walk-in shower with expanded drain lines and scald-prevention valves.",
    icon: ArrowRightLeft,
    image: "/images/services/tub-to-shower-conversion.jpg",
    alt: "Tub to shower conversion showing open walk-in shower replacing old tub",
  },
  {
    name: "Tub Removal",
    href: "/tub-removal/",
    description:
      "Professional bathtub removal with proper plumbing disconnection, concrete saw-cutting, and floor preparation for new installations.",
    icon: Trash2,
    image: "/images/services/tub-removal.jpg",
    alt: "Bathroom after tub removal with clean floor ready for shower installation",
  },
  {
    name: "Shower & Bathtub Upgrade",
    href: "/shower-bathtub-upgrade/",
    description:
      "Upgrade your shower and bathtub with modern fixtures, fresh tile, new glass, and premium hardware for a refreshed look.",
    icon: TrendingUp,
    image: "/images/services/shower-bathtub-upgrade.jpg",
    alt: "Upgraded shower and bathtub with modern fixtures and fresh tile surrounds",
  },
  {
    name: "Cabinet & Countertop Installation",
    href: "/cabinet-countertop-installation/",
    description:
      "Custom cabinet and countertop installation with granite, quartz, and marble options — built to last in Arizona's climate.",
    icon: LayoutGrid,
    image: "/images/services/cabinet-countertop-installation.jpg",
    alt: "Custom bathroom cabinet and quartz countertop installation in Chandler AZ",
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation/",
    description:
      "Expert vanity installation with marine plywood boxes, quartz countertops, undermount sinks, and matte black or brass fixtures.",
    icon: Sparkles,
    image: "/images/services/vanity-countertop-installation.jpg",
    alt: "Double bathroom vanity installation with quartz countertop and undermount sink",
  },
  {
    name: "Bathroom Flooring Installation",
    href: "/bathroom-flooring-installation/",
    description:
      "Professional bathroom flooring with durable, water-resistant porcelain or luxury vinyl plank — properly leveled and waterproofed.",
    icon: ArrowUpDown,
    image: "/images/services/bathroom-flooring-installation.jpg",
    alt: "Bathroom flooring installation with large format porcelain tiles in modern bathroom",
  },
  {
    name: "Bathroom Lighting Installation",
    href: "/bathroom-lighting-installation/",
    description:
      "Modern bathroom lighting design and installation for enhanced ambiance — vanity bars, recessed cans, and dimmer controls.",
    icon: Lightbulb,
    image: "/images/services/bathroom-lighting-installation.jpg",
    alt: "Modern bathroom lighting installation with LED vanity lights and recessed cans",
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation/",
    description:
      "Expert tile installation with non-porous porcelain (ASTM C373) and solid epoxy grout to resist East Valley hard water scale.",
    icon: Droplets,
    image: "/images/services/bathroom-tile-installation.jpg",
    alt: "Professional bathroom tile installation with large format porcelain and grout",
  },
  {
    name: "Luxury Bathroom Remodeling",
    href: "/luxury-bathroom-remodeling/",
    description: "Premium master bath transformations with high-end finishes, heated floors, spa showers, and designer tile.",
    icon: Sparkles,
    image: "/images/services/luxury-bathroom-remodeling.jpg",
    alt: "Luxury bathroom remodel with spa shower, freestanding tub, and designer tile",
  },
  {
    name: "ADA Bathroom Remodeling",
    href: "/ada-bathroom-remodeling/",
    description: "Safe, ADA-compliant updates with curbless showers, structural grab bar backing, and slip-resistant mosaic tile rated COF 0.60+.",
    icon: Accessibility,
    image: "/images/services/ada-bathroom-remodeling.jpg",
    alt: "ADA accessible bathroom with grab bars, curbless shower, and safety features",
  },
  {
    name: "Guest Bathroom Remodeling",
    href: "/guest-bathroom-remodeling/",
    description: "High-impact updates for secondary bathrooms, powder rooms, and guest suites — fresh tile, new vanity, modern fixtures.",
    icon: Users,
    image: "/images/services/guest-bathroom-remodeling.jpg",
    alt: "Remodeled guest bathroom with fresh tile, new vanity, and modern fixtures",
  },
  {
    name: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling/",
    description: "Maximize small bathroom space with floating vanities, comfort-height toilets, and smart tiling that makes rooms feel larger.",
    icon: LayoutGrid,
    image: "/images/services/small-bathroom-remodel.jpg",
    alt: "Small bathroom remodel with space-saving floating vanity and modern tile",
  },
  {
    name: "Master Bathroom Remodel",
    href: "/master-bathroom-remodel/",
    description: "Full master bath remodels with custom tile showers, double vanities, quartz countertops, and complete layout updates.",
    icon: Sparkles,
    image: "/images/services/master-bathroom-remodel.jpg",
    alt: "Master bathroom remodel with double vanity, custom shower, and elegant tile",
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

