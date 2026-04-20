"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical bathroom remodel take?",
    answer: "Most bathroom remodels take 2-4 weeks depending on the scope of work. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes, we handle all necessary permits and coordinate inspections to ensure your project meets local building codes."
  },
  {
    question: "What's included in your warranty?",
    answer: "We provide a comprehensive warranty covering workmanship and materials. Specific terms vary by project scope."
  },
  {
    question: "Can you work with my existing plumbing?",
    answer: "In most cases, yes. Our team will assess your current plumbing and recommend the best approach for your remodel."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options to help make your bathroom remodel more affordable. Contact us for details."
  }
];

interface ServiceFAQProps {
  title?: string;
  description?: string;
  faqs?: Array<{ question: string; answer: string }>;
}

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  description = "Get answers to common questions about our bathroom remodeling services.",
  faqs: customFaqs,
}: ServiceFAQProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const faqsToRender = customFaqs ?? faqs;

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqsToRender.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}