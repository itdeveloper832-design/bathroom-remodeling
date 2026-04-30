"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { bathroomServices } from "@/lib/bathroom-services";

const services = bathroomServices; // show all new services

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance"
          >
            Bathroom Remodeling Services in Chandler, AZ
          </motion.h2>
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={mounted && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed space-y-4"
          >
            <p>Licensed remodeling contractors in Chandler offering:</p>
            <ul className="list-disc text-left inline-block space-y-1 ml-4">
              <li><strong>Bath Remodel Chandler AZ:</strong> Full bathroom renovations, vanity, tile, and fixtures.</li>
              <li><strong>Shower Remodeling Chandler AZ:</strong> Walk-in showers, frameless glass, curbless designs.</li>
              <li><strong>Bathtub Remodeling Chandler AZ:</strong> Tub replacement, tub-to-shower conversion, soaking tubs.</li>
            </ul>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={mounted ? { opacity: 0 } : false}
          whileInView={mounted ? { opacity: 1 } : {}}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </motion.div>

        {/* See All Services Button */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={mounted && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            See All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
