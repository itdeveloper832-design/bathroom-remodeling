import Link from "next/link";
import { Phone, Briefcase, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";


export function InfoHeader() {
  return (
    <aside 
      className="fixed top-0 left-0 right-0 z-30 bg-foreground text-background h-[40px] flex items-center text-sm"
      aria-label="Top contact information"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Address on the left */}
          <div className="flex items-center">
            <a 
              href={siteConfig.googleBusinessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
              aria-label={`Visit our location at ${siteConfig.address.full}`}
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span className="hidden md:inline">{siteConfig.address.full}</span>
              <span className="inline md:hidden">{siteConfig.address.city}, {siteConfig.address.state}</span>
            </a>
          </div>

          {/* Phone and Careers on the right */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href={`tel:${siteConfig.phoneClean}`}
              className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
            </a>

            <Link 
              href="/careers/"
              className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
              aria-label="View career opportunities"
            >
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              <span>Careers</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
