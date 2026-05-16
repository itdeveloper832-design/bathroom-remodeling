import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

export default function ServiceCTA({
  title = "Ready to Transform Your Bathroom?",
  description = "Get your free consultation today and discover how we can create the bathroom of your dreams.",
}: ServiceCTAProps) {
  return (
    <section className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary-foreground">
            {title}
          </h2>
          <p className="text-primary-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90 min-w-[180px]"
              aria-label="Call our bathroom remodeling experts now"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background text-foreground border-primary-foreground hover:bg-background hover:text-primary min-w-[180px]"
              aria-label="Get a free quote for your bathroom renovation"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Get Free Quote
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-primary-foreground/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/40" />
              ROC Licensed #345678
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/40" />
              2-Year Workmanship Warranty
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/40" />
              5-Star Local Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
