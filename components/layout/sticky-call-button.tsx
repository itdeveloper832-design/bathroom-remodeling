import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] animate-in slide-in-from-bottom duration-300">
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl py-3 px-4 shadow-sm hover:bg-primary/95 active:scale-[0.98] transition-all duration-200 no-underline"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5 fill-current" aria-hidden="true" />
          <span>Call Now</span>
        </a>
         <a
          href={`tel:${siteConfig.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold rounded-xl py-3 px-4 shadow-sm hover:bg-accent/95 active:scale-[0.98] transition-all duration-200 no-underline"
          aria-label="Get Free Estimate"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          <span>Free Estimate</span>
        </a>
      </div>
    </div>
  );
}
