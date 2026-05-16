// ✅ SERVER COMPONENT — footer has no client-side state
// GoogleMap is isolated in its own client wrapper below to avoid making the whole footer a client component
import Link from "next/link";
import dynamic from "next/dynamic";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Only the map is client-side
// By keeping it in a dynamic import here, the footer itself stays a Server Component
const GoogleMap = dynamic(() => import("@/components/google-map"), {
  loading: () => <div className="mt-8 h-[150px] bg-background/10 animate-pulse rounded-xl" aria-label="Loading map" />,
});

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
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Top-rated bathroom remodeling in Chandler, Arizona.
              {siteConfig.license && ` ${siteConfig.license} • `} Expert master bath renovations and shower upgrades since 2010.
            </p>

            <div className="flex gap-3" role="list" aria-label="Social media links">
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                  aria-label="Follow ARZ Remodeling on Facebook"
                  role="listitem"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                  aria-label="Follow ARZ Remodeling on Instagram"
                  role="listitem"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                  aria-label="Watch our bathroom remodeling projects on YouTube"
                  role="listitem"
                >
                  <Youtube className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-200 no-underline"
                  aria-label="Connect with ARZ Remodeling on LinkedIn"
                  role="listitem"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Services Column */}
          <nav aria-label="Footer services navigation">
            <h3 className="font-serif text-xl font-semibold mb-6 text-background">Bathroom Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/luxury-bathroom-remodeling/", label: "Luxury Master Bathrooms" },
                { href: "/ada-bathroom-remodeling/", label: "ADA & Accessible Design" },
                { href: "/guest-bathroom-remodeling/", label: "Guest Bath & Powder Rooms" },
                { href: "/shower-remodeling/", label: "Shower Remodeling Chandler" },
                { href: "/tub-to-shower-conversion/", label: "Tub-to-Shower Conversion" },
                { href: "/bathroom-remodel-cost-chandler/", label: "Bathroom Remodel Cost" },
                { href: "/master-bathroom-remodel/", label: "Full Master Remodels" },
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
                    href={`tel:${siteConfig.phone}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                    aria-label={`Call us at ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm no-underline"
                    aria-label={`Email us at ${siteConfig.email}`}
                  >
                    {siteConfig.email}
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
              <p className="text-background/80 text-sm leading-relaxed">
                {siteConfig.serviceAreas.join(" • ")}
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-sm font-medium text-background/70 mb-3 uppercase tracking-wider">Chandler Zip Codes</h4>
              <p className="text-background/80 text-sm leading-relaxed">
                {(siteConfig as any).zipCodes?.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex items-center gap-6">
              <Link href="/privacy-policy/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-background/70 hover:text-background transition-colors text-sm no-underline">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
