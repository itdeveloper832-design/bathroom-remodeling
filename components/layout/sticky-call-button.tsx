import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 shadow-[0_-6px_20px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto flex flex-col items-center gap-1.5">
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="w-full flex items-center justify-center gap-3 bg-emerald-600 text-white font-extrabold rounded-xl py-3.5 px-4 shadow-[0_4px_12px_rgba(16,185,129,0.3)] hover:bg-emerald-500 active:scale-[0.97] transition-all duration-200 no-underline text-base tracking-wide"
          aria-label={`Call local remodeling contractor at ${siteConfig.phone}`}
        >
          <Phone className="w-5 h-5 fill-current animate-pulse" aria-hidden="true" />
          <span>CALL LOCAL EXPERT: {siteConfig.phone}</span>
        </a>
        <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>In-Home Estimates Available Today</span>
        </div>
      </div>
    </div>
  );
}
