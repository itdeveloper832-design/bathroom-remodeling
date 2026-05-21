import { Phone } from "lucide-react";

export function StickyCallButton() {
  return (
    <a
      href="tel:2293065591"
      className="fixed bottom-6 right-6 z-50 flex md:hidden items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 active:scale-95 transition-colors"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 fill-current" aria-hidden="true" />
    </a>
  );
}
