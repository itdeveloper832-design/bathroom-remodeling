"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/home/testimonials"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/home/contact-section"), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4 h-96 bg-muted/30 rounded-2xl animate-pulse" />
    </div>
  ),
});

export function HomeBelowFold() {
  return (
    <>
      <Testimonials />
      <ContactSection />
    </>
  );
}
