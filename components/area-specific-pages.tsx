"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const areas = [
  { slug: "ocotillo", name: "Ocotillo" },
  { slug: "sun-lakes", name: "Sun Lakes" },
  { slug: "downtown-chandler", name: "Downtown Chandler" },
  { slug: "fulton-ranch", name: "Fulton Ranch" },
  { slug: "cooper-commons", name: "Cooper Commons" },
  { slug: "fox-crossing", name: "Fox Crossing" },
];

export default function AreaSpecificPages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              Bathroom Remodeling by Neighborhood
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We serve homeowners throughout Chandler's most desirable neighborhoods. Click below to learn about our specialized services in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/bathroom-remodeling-${area.slug}/`}
                  className="group relative block h-full rounded-lg border-2 border-primary/20 p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:bg-primary/5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Explore our specialized bathroom remodeling services tailored for {area.name} homeowners.
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/20 text-center"
          >
            <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
              Not Finding Your Neighborhood?
            </h3>
            <p className="text-muted-foreground mb-6">
              We serve all of Chandler and the surrounding Phoenix area. Contact us today to discuss your bathroom remodeling project.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
