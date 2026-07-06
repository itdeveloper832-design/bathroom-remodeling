// ✅ SERVER COMPONENT - footer has no client-side state
// GoogleMap is isolated in its own client wrapper below to avoid making the whole footer a client component
import Link from "next/link";
import dynamic from "next/dynamic";
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Only the map is client-side
// By keeping it in a dynamic import here, the footer itself stays a Server Component
const GoogleMap = dynamic(() => import("@/components/google-map"), {
  loading: () => <div className="mt-8 h-[220px] bg-background/10 animate-pulse rounded-xl" aria-label="Loading map" />,
});

const serviceAreaLinks: Record<string, string> = {
  "Chandler": "/bathroom-remodeling-chandler-az/",
  "Ahwatukee": "/bathroom-remodeling-ahwatukee-az/",
  "Sun Lakes": "/bathroom-remodeling-sun-lakes/",
  "Ocotillo": "/bathroom-remodeling-ocotillo/",
  "Dobson Ranch": "/bathroom-remodeling-dobson-ranch/",
  "Fulton Ranch": "/bathroom-remodeling-fulton-ranch/",
  "Queen Creek": "/bathroom-remodeling-queen-creek-az/",
  "Apache Junction": "/bathroom-remodeling-apache-junction-az/",
  "Chandler Heights": "/bathroom-remodeling-chandler-heights/",
  "Andersen Springs": "/bathroom-remodeling-andersen-springs/",
  "Layton Lakes": "/bathroom-remodeling-layton-lakes/",
  "The Islands": "/bathroom-remodeling-the-islands/",
  "Pecos Ranch": "/bathroom-remodeling-pecos-ranch/",
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group no-underline">
              <span className="font-serif text-3xl font-semibold text-background group-hover:text-primary transition-colors">
                ARZ Home
              </span>
              <span className="block text-xs tracking-[0.2em] uppercase text-background/60 -mt-1">
                Remodeling Contractors
              </span>
            </Link>
            <div className="mb-6">
              <a 
                href={siteConfig.googleBusinessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-background hover:text-accent transition-colors no-underline"
                aria-label={`View our ${siteConfig.googleRating} star rating with ${siteConfig.googleReviewsCount} Google Reviews`}
              >
                <span className="text-accent">★★★★★</span>
                <span>{siteConfig.googleRating} · {siteConfig.googleReviewsCount} Google Reviews</span>
              </a>
            </div>
            <div className="text-background/70 text-sm leading-relaxed mb-6 space-y-1">
              <p className="font-semibold text-background text-base">ARZ Home Remodeling</p>
              <p>6710 W Chicago St, Chandler, AZ 85226</p>
              <p>Phone: <a href={`tel:${siteConfig.phoneClean}`} className="text-background/80 hover:text-primary transition-colors no-underline">{siteConfig.phone}</a></p>
              <p className="text-xs pt-1 text-background/60">ROC Licensed | License #ROC338304 | Arizona Registrar of Contractors</p>
            </div>

            <ul className="flex gap-3" role="list" aria-label="Social media links">
              {siteConfig.social.facebook && (
                <li>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Follow ARZ Home Remodeling on Facebook"
                  >
                    <Facebook className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.instagram && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Follow ARZ Home Remodeling on Instagram"
                  >
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.youtube && (
                <li>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Watch our bathroom remodeling projects on YouTube"
                  >
                    <Youtube className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                    aria-label="Connect with ARZ Home Remodeling on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services Column */}
          <nav aria-label="Footer services navigation">
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Bathroom Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/shower-remodeling/", label: "Shower Remodeling" },
                { href: "/tub-to-shower-conversion/", label: "Tub-to-Shower Conversion" },
                { href: "/master-bathroom-remodel/", label: "Master Bathroom Remodel" },
                { href: "/small-bathroom-remodeling/", label: "Small Bathroom Remodeling" },
                { href: "/bathroom-tile-installation/", label: "Bathroom Tile Installation" },
                { href: "/bathroom-vanity-installation/", label: "Bathroom Vanity Installation" },
                { href: "/ada-bathroom-remodeling/", label: "ADA Bathroom Remodeling" },
                { href: "/luxury-bathroom-remodeling/", label: "Luxury Bathroom Remodeling" },
                { href: "/guest-bathroom-remodeling/", label: "Guest Bathroom Remodeling" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations Column */}
          <nav aria-label="Footer locations navigation">
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Service Locations</h3>
            <ul className="space-y-3">
              {[
                { href: "/bathroom-remodeling-phoenix-az/", label: "Remodeling Phoenix, AZ" },
                { href: "/bathroom-remodeling-scottsdale-az/", label: "Remodeling Scottsdale, AZ" },
                { href: "/bathroom-remodeling-gilbert-az/", label: "Remodeling Gilbert, AZ" },
                { href: "/bathroom-remodeling-mesa-az/", label: "Remodeling Mesa, AZ" },
                { href: "/bathroom-remodeling-tempe-az/", label: "Remodeling Tempe, AZ" },
                { href: "/bathroom-remodeling-queen-creek-az/", label: "Remodeling Queen Creek" },
                { href: "/bathroom-remodeling-ahwatukee-az/", label: "Remodeling Ahwatukee" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-background/80 text-sm leading-relaxed">
                    {siteConfig.address.full}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                    aria-label={`Call us at ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="text-background/80 text-sm">
                    <p>Mon-Fri: {siteConfig.hours.weekdays}</p>
                    <p>Sat: {siteConfig.hours.saturday}</p>
                    <p>Sun: {siteConfig.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </address>

            {/* Embedded Map - Lazy Loaded Client Component */}
            <GoogleMap />
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-sm font-medium text-background/70 mb-3 uppercase tracking-wider">Service Areas</h4>
              <p className="text-background/80 text-sm leading-relaxed flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1">
                {siteConfig.serviceAreas.map((area, i) => {
                  const href = serviceAreaLinks[area];
                  return (
                    <span key={area} className="flex items-center">
                      {i > 0 && <span className="mr-2 text-background/40">•</span>}
                      {href ? (
                        <Link href={href} className="hover:text-primary transition-colors text-background/80 hover:underline">
                          {area}
                        </Link>
                      ) : (
                        <span>{area}</span>
                      )}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-sm font-medium text-background/70 mb-3 uppercase tracking-wider">Chandler Zip Codes</h4>
              <p className="text-background/80 text-sm leading-relaxed flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-1">
                {(siteConfig as any).zipCodes?.map((zip: string, i: number) => (
                  <span key={zip} className="flex items-center">
                    {i > 0 && <span className="mr-2 text-background/40">•</span>}
                    <Link href={`/chandler-az-${zip}/`} className="hover:text-primary transition-colors text-background/80 hover:underline">
                      {zip}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NARI, NKBA, ROC Trust Badges Strip */}
      <div className="border-t border-background/10 bg-background/5">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 text-center">
            <div className="text-sm font-medium text-background/60">
              Verified Professional Affiliations & Credentials:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <a 
                href="https://www.nari.org/Find-a-Remodeler?query=ARZ+Home+Remodeling" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 no-underline"
              >
                <span className="font-serif font-extrabold text-background text-lg tracking-wider">NARI</span>
                <span className="text-[10px] text-background/60 leading-none block border-l border-background/20 pl-2 text-left uppercase">Member<br/>National Assoc.<br/>Remodeling Industry</span>
              </a>
              <a 
                href="https://nkba.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 no-underline"
              >
                <span className="font-serif font-extrabold text-background text-lg tracking-wider">NKBA</span>
                <span className="text-[10px] text-background/60 leading-none block border-l border-background/20 pl-2 text-left uppercase">Member<br/>National Kitchen<br/>& Bath Assoc.</span>
              </a>
              <a 
                href="https://roc.az.gov/directory?search=338304" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 no-underline"
              >
                <span className="font-serif font-bold text-accent text-lg">ROC338304</span>
                <span className="text-[10px] text-background/60 leading-none block border-l border-background/20 pl-2 text-left uppercase">Arizona Licensed<br/>Bonded & Insured<br/>Contractor</span>
              </a>
              <a 
                href={siteConfig.googleBusinessLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 no-underline"
              >
                <span className="font-serif font-extrabold text-accent text-lg">★★★★★</span>
                <span className="text-[10px] text-background/60 leading-none block border-l border-background/20 pl-2 text-left uppercase">Google Verified<br/>{siteConfig.googleRating} Star Rating<br/>{siteConfig.googleReviewsCount}+ Local Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Local SEO Description Strip */}
      <div className="border-t border-background/10 bg-background/5 text-background/60 text-[11px] py-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl text-left">
          <p className="leading-relaxed">
            ARZ Home Remodeling is a premier licensed bathroom remodel contractor (ROC #338304) based in Chandler, Arizona. If you are looking for a reliable bathroom remodel contractor near me, we specialize in custom walk-in showers, tub-to-shower conversions, accessible shower remodeling, and accessible shower installation services across Chandler, Gilbert, Mesa, Tempe, and the East Valley.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm">
              © 2026 {siteConfig.name}. All rights reserved. (cPanel Active)
            </p>
            <nav aria-label="Legal links" className="flex items-center gap-6">
              <Link href="/privacy-policy/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Terms of Service
              </Link>
              <Link href="/warranty/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Warranty
              </Link>
              <a href="/sitemap.xml" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
