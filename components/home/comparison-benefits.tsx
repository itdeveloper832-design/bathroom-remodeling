"use client";

import { Check, X, Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Property Value",
    description: "A professional bathroom remodel in Chandler can yield up to a 70% return on investment, significantly boosting your home's resale value and market appeal."
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Unlike DIY projects, our work is fully backed by professional licensing and comprehensive insurance, giving you total peace of mind throughout the renovation."
  },
  {
    icon: Clock,
    title: "Project Efficiency",
    description: "Our experienced contractors complete bathroom remodeling in Chandler faster than DIY enthusiasts, minimizing disruption to your daily life and routine."
  },
  {
    icon: Heart,
    title: "Enhanced Lifestyle",
    description: "From custom showers to luxury vanities, we create spa-like retreats that improve your comfort, relaxation, and overall quality of life at home."
  }
];

const comparisonData = [
  { feature: "Professional Design", diy: false, pro: true },
  { feature: "Licensed Plumbing/Electrical", diy: false, pro: true },
  { feature: "Material Warranty", diy: false, pro: true },
  { feature: "Custom Tile Work", diy: "Risky", pro: "Masterful" },
  { feature: "Project Duration", diy: "Months", pro: "Weeks" },
  { feature: "Stress Level", diy: "High", pro: "Minimal" },
];

export default function ComparisonBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Benefits Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Why Remodel Now?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-8 text-foreground"
            >
              The Benefits of Professional Remodeling
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl" />
            <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-8 text-foreground text-center">
              DIY vs. Professional Remodeling
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border text-sm font-bold uppercase tracking-widest text-muted-foreground">
                <div>Feature</div>
                <div className="text-center">DIY</div>
                <div className="text-center">Professional</div>
              </div>
              {comparisonData.map((item) => (
                <div key={item.feature} className="grid grid-cols-3 gap-4 items-center text-sm py-2 border-b border-border/50 last:border-0">
                  <div className="font-medium text-foreground">{item.feature}</div>
                  <div className="text-center">
                    {typeof item.diy === "boolean" ? (
                      item.diy ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-muted-foreground">{item.diy}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof item.pro === "boolean" ? (
                      item.pro ? <Check className="w-5 h-5 text-primary mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="font-semibold text-primary">{item.pro}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground text-center italic">
              * Based on industry standards and building codes in Chandler, Arizona.
            </p>
          </motion.div>
        </div>

        {/* Content Depth Expansion - Authority Links */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="max-w-4xl mx-auto prose prose-blue prose-invert text-muted-foreground text-lg leading-relaxed">
            <h3 className="text-foreground text-3xl font-serif mb-6">Expertise in Chandler Home Improvement</h3>
            <p className="mb-6">
              When planning your project, it's essential to understand the local regulations and standards. We adhere strictly to 
              <a href="https://www.chandleraz.gov/business/building-and-development/building-permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">Chandler Building Codes</a> 
              to ensure your renovation is safe and compliant. Our team stays updated with the latest in 
              <a href="https://en.wikipedia.org/wiki/Home_improvement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">Home Improvement</a> 
              trends and sustainable building practices recommended by the 
              <a href="https://www.energy.gov/energysaver/designing-efficient-bathroom" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">U.S. Department of Energy</a> 
              for efficient bathroom design.
            </p>
            <p>
              Whether you are looking for a complete master bath overhaul or simple vanity upgrades, our commitment to quality 
              remains the same. We focus on durability, aesthetics, and functionality to deliver the best results for 
              bathroom remodeling in Chandler AZ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
