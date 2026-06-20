import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-[0_-6px_20px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="w-full flex items-center justify-center gap-3 bg-emerald-600 text-white font-extrabold rounded-xl py-4 px-4 shadow-md hover:bg-emerald-500 active:scale-[0.97] transition-all duration-200 no-underline text-base tracking-wide animate-pulse"
          aria-label={`Call local remodeling contractor at ${siteConfig.phone}`}
        >
          <Phone className="w-5 h-5 fill-current" aria-hidden="true" />
          <span>CALL LOCAL EXPERT: {siteConfig.phone}</span>
        </a>
      </div>
    </div>
  );
}
