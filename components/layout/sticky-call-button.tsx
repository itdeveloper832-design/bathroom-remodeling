"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useEffect, useState } from "react";

export function StickyCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
        className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 active:scale-95 transition-all animate-pulse"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
