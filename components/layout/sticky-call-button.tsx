import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phoneClean}`}
      className="fixed bottom-6 right-6 z-50 flex md:hidden items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 active:scale-95 transition-colors"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 fill-current" aria-hidden="true" />
    </a>
  );
}
