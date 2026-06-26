"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { InfoHeader } from "@/components/layout/info-header";

const navLinkClass =
  "text-base font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 rounded px-2 py-1";

const ctaClass =
  "inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 text-base font-semibold transition-colors";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] bg-primary text-primary-foreground px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>
      <InfoHeader scrolled={scrolled} />
      <header
        className={`fixed left-0 right-0 z-40 bg-background shadow-md h-[60px] lg:h-[72px] flex items-center lg:bg-background/95 lg:backdrop-blur-md transition-all duration-300 ${
          scrolled ? "top-0" : "top-[40px]"
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 rounded-lg"
              aria-label="ARZ Home Remodeling - Home"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                <Image
                  src="/images/web-logo-image.avif"
                  alt="ARZ Home Remodeling - Bathroom Remodeling Chandler AZ"
                  fill
                  sizes="(max-width: 1024px) 56px, 64px"
                  className="object-contain object-left"
                  priority
                  decoding="async"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {siteConfig.navigation.map((item) => (
                <Link key={item.name} href={item.href} className={navLinkClass}>
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href={siteConfig.googleBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent transition-colors no-underline"
                aria-label={`View our ${siteConfig.googleRating} star rating and ${siteConfig.googleReviewsCount} reviews`}
              >
                <span className="text-accent">★★★★★</span>
                <span>{siteConfig.googleRating} · {siteConfig.googleReviewsCount} Reviews</span>
              </a>
              <a href={`tel:${siteConfig.phoneClean}`} className={ctaClass}>
                Call Now: {siteConfig.phone}
              </a>
            </div>

            <details className="lg:hidden group relative">
              <summary className="list-none cursor-pointer p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Open menu</span>
                <Menu className="w-6 h-6 group-open:hidden" aria-hidden="true" />
                <X className="w-6 h-6 hidden group-open:block" aria-hidden="true" />
              </summary>
              <nav
                className="absolute right-0 top-full mt-2 w-[min(100vw-2rem,20rem)] rounded-xl border border-border bg-background shadow-lg py-4 px-4"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col gap-2">
                  {siteConfig.navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium py-2 border-b border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 block rounded px-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href={siteConfig.googleBusinessLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors py-2 no-underline"
                    aria-label={`View our ${siteConfig.googleRating} star rating and ${siteConfig.googleReviewsCount} reviews`}
                  >
                    <span className="text-accent">★★★★★</span>
                    <span>{siteConfig.googleRating} · {siteConfig.googleReviewsCount} Reviews</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors py-2"
                    aria-label={`Call us at ${siteConfig.phone}`}
                  >
                    <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 px-6 transition-colors"
                  >
                    Call Now: {siteConfig.phone}
                  </a>
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
