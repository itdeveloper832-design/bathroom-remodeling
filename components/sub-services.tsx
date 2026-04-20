"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Lightbulb,
  Grid3X3,
  RectangleHorizontal,
  Bath,
  Accessibility,
  type LucideIcon,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Shower Remodeling",
    description: "Transform your shower with modern fixtures, tile work, and accessibility features.",
    href: "/shower-remodeling"
  },
  {
    icon: Bath,
    title: "Bathtub Installation",
    description: "Upgrade to a luxurious bathtub or convert your tub to a walk-in shower.",
    href: "/bathtub-remodeling"
  },
  {
    icon: Grid3X3,
    title: "Tile Installation",
    description: "Beautiful tile work for floors, walls, and backsplashes in any style.",
    href: "/bathroom-tile-installation"
  },
  {
    icon: RectangleHorizontal,
    title: "Vanity Installation",
    description: "Custom vanities and countertops to maximize storage and style.",
    href: "/bathroom-vanity-installation"
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "Improve your bathroom's ambiance with professional lighting solutions.",
    href: "/bathroom-lighting-installation"
  },
  {
    icon: Accessibility,
    title: "Accessibility Remodeling",
    description: "ADA-compliant modifications for safety and accessibility.",
    href: "/bathroom-accessibility-remodeling"
  }
];

type SubServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
};

interface SubServicesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  services?: SubServiceItem[];
}

export default function SubServices({
  title = "Our Specialized Services",
  subtitle,
  description = "From complete remodels to specific upgrades, we offer comprehensive bathroom services.",
  services: customServices,
}: SubServicesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const servicesToRender = customServices ?? services;

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesToRender.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href={service.href ?? "/services"}>Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}