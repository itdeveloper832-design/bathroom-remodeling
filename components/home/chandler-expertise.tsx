import Link from "next/link";
import { Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export default function ChandlerExpertise() {
  return (
    <>
      {/* HARD WATER & DESERT CLIMATE EXPERTISE */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <Droplets className="w-10 h-10 flex-shrink-0 mt-1 opacity-80" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Built for the Desert: Chandler&apos;s Unique Remodeling Challenges
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-4">
                Chandler sits in one of Arizona&apos;s hardest water zones — the East Valley water supply averages over{" "}
                <strong>300 mg/L of dissolved minerals</strong>. Beyond water, our extreme desert heat and temperature swings impact everything from cabinet expansion to flooring durability. We specialize in:
              </p>
              <ul className="space-y-3 text-primary-foreground/85 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Hard Water Protection:</strong> Epoxy grout and nano-coated glass to prevent calcium buildup.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Kitchen Climate Control:</strong> Custom cabinetry designed for Arizona&apos;s low humidity to prevent warping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Durable Desert Flooring:</strong> High-grade LVP and porcelain tile that stands up to sand and heat.</span>
                </li>
              </ul>
              <p className="text-primary-foreground/85 text-lg leading-relaxed">
                As local <strong>Chandler home remodeling contractors</strong>, we don&apos;t just design for aesthetics; we design for longevity in the East Valley. Whether it&apos;s a kitchen in Ocotillo or a master bath in Fulton Ranch, we use materials that are proven to last in the Arizona environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINK SECTION */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="font-serif text-2xl font-semibold text-foreground text-center mb-8">Expert Remodeling Services in Chandler</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/kitchen-remodeling/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Kitchen Remodeling</h3>
              <p className="text-muted-foreground text-sm mt-1">Custom cabinets, quartz islands, open-concept designs</p>
            </Link>
            <Link href="/shower-remodeling/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Walk-In Showers</h3>
              <p className="text-muted-foreground text-sm mt-1">Frameless glass, custom tile, curbless entries</p>
            </Link>
            <Link href="/tub-to-shower-conversion/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Tub To Shower Conversion</h3>
              <p className="text-muted-foreground text-sm mt-1">Modernize your bathroom with a custom shower</p>
            </Link>
            <Link href="/master-bathroom-remodel/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Master Bathroom Remodel</h3>
              <p className="text-muted-foreground text-sm mt-1">Full-scope master suite transformations</p>
            </Link>
            <Link href="/cabinet-countertop-installation/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Cabinets & Countertops</h3>
              <p className="text-muted-foreground text-sm mt-1">Premium storage and surface solutions</p>
            </Link>
            <Link href="/services/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Full Home Renovation</h3>
              <p className="text-muted-foreground text-sm mt-1">Complete interior modernization projects</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
