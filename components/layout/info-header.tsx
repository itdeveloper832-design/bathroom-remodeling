"use client";

import Link from "next/link";
import { Phone, Mail, Briefcase, Tag } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function InfoHeader() {
  return (
    <aside 
      className="fixed top-0 left-0 right-0 z-50 bg-foreground text-background h-[50px] flex items-center text-sm"
      aria-label="Top contact information"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-end gap-6">
          <a 
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label={`Call us at ${siteConfig.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
          </a>

          <a 
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label={`Email us at ${siteConfig.email}`}
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span className="hidden sm:inline">{siteConfig.email}</span>
          </a>
          
          <Link 
            href="/careers"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="View career opportunities"
          >
            <Briefcase className="w-4 h-4" aria-hidden="true" />
            <span>Careers</span>
          </Link>
          
          <Link 
            href="/offers"
            className="flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="View special offers"
          >
            <Tag className="w-4 h-4" aria-hidden="true" />
            <span>Special Offers</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
