"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

export default function ServiceCTA({
  title = "Ready to Transform Your Bathroom?",
  description = "Get your free consultation today and discover how we can create the bathroom of your dreams.",
}: ServiceCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary-foreground"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background text-foreground border-primary-foreground hover:bg-background hover:text-primary"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}