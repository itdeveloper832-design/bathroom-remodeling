"use client";

import { useState, useEffect } from "react";
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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-lg">
        Skip to content
      </a>
      <InfoHeader />
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-background shadow-sm lg:bg-background/95 lg:backdrop-blur-md ${isScrolled ? "top-0 py-1 shadow-md border-b border-primary/10" : "top-[50px] py-2"
          }`}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Accessible - Responsive */}
            <Link href="/" className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg py-1" aria-label="ARZ Home Remodeling - Home">
              <Image
                src="/images/logo-main.webp"
                alt="ARZ Home Remodeling — Bathroom Remodeling Chandler AZ"
                width={240}
                height={64}
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
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
              className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          id="mobile-menu"
          className={`lg:hidden bg-background border-t border-border overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium py-2 border-b border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 block rounded px-2 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                  aria-label={`Call us at ${siteConfig.phone}`}
                >
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6">
                  <Link href="/contact/">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
}
