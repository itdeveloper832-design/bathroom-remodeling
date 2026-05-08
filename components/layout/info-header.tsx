import Link from "next/link";
import { Phone, Mail, Briefcase, Tag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function InfoHeader() {
  return (
    <aside 
      className="fixed top-0 left-0 right-0 z-30 bg-foreground text-background h-[32px] flex items-center text-[10px]"
      aria-label="Top contact information"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <a 
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
            aria-label={`Call us at ${siteConfig.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
          </a>

          <a 
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
            aria-label={`Email us at ${siteConfig.email}`}
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{siteConfig.email}</span>
          </a>
          
          <Link 
            href="/careers/"
            className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
            aria-label="View career opportunities"
          >
            <Briefcase className="w-4 h-4" aria-hidden="true" />
            <span>Careers</span>
          </Link>
          
          <Link 
            href="/offers/"
            className="flex items-center gap-2 hover:text-primary transition-colors min-h-[48px] px-2 no-underline"
            aria-label="View special offers"
          >
            <Tag className="w-4 h-4" aria-hidden="true" />
            <span>Special Offers</span>
            <span className="ml-1 text-[10px] bg-primary text-primary-foreground px-1.5 rounded-full font-bold animate-pulse">NEW</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
