"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { InfoHeader } from "@/components/layout/info-header";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <InfoHeader />
    <header
      className={`fixed top-[50px] left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Accessible - Responsive */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg" aria-label="ARZ Home Remodeling - Home">
            <Image
              src="/images/logo-main.png"
              alt="ARZ Home Remodeling Logo"
              width={816}
              height={280}
              priority
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 360px"
              className="h-auto w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 rounded px-2 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 font-semibold">
              <Link href="/contact/">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 block rounded px-2"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-foreground"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact/">Get Free Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>

    {/* Mobile Sticky Call Button - Accessible */}
    <a
      href={`tel:${siteConfig.phone}`}
      className="lg:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-full shadow-2xl active:scale-95 transition-transform duration-200 animate-in slide-in-from-bottom-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label={`Call us at ${siteConfig.phone}`}
    >
      <Phone className="w-5 h-5" aria-hidden="true" />
      Call Now
    </a>
    </>
  );
}
