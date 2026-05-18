import Link from "next/link";
import { Droplets, CheckCircle2, Shield, Heart } from "lucide-react";

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
                Built for the Desert: Chandler&apos;s Unique Bathroom Remodeling Challenges
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-6">
                Chandler sits in one of Arizona&apos;s hardest municipal water zones. The East Valley water supply, flowing along routes like Arizona Avenue and Alma School Road, averages over <strong>300 mg/L of dissolved minerals</strong>. Beyond water quality, our extreme desert climate swings impact interior structural expansion. That&apos;s why we specialize in bathroom designs tailored specifically to the Sonoran Desert.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-primary-foreground/80" />
                    Hard Water Defense
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Chandler&apos;s heavy calcium and magnesium leave scale on shower glass and grout lines. We utilize advanced <strong>epoxy grouts</strong> that are fully non-porous, alongside nano-coated, hydrophobic protective glass to prevent white mineral staining.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary-foreground/80" />
                    Thermal Expansion Stability
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    With summer heat soaring outside, air-conditioned homes experience extreme temperature differentials. We build with premium plywood cabinetry rather than cheap MDF, ensuring your vanities resist warping, splitting, or expanding from sudden humidity spikes.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary-foreground/80" />
                    HOA & Local Compliance
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Whether you reside in Ocotillo, Fulton Ranch, or along the Loop 202 corridor, strict HOA covenants apply. We manage all architectural review approvals, coordinate dumpster placement permits, and secure scheduling compliance to protect your community standing.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground/80" />
                    Schluter Waterproofing Systems
                  </h3>
                  <p className="text-sm text-primary-foreground/85 leading-relaxed">
                    Unlike standard sheet plastic, we use multi-layered Schluter-Kerdi membranes behind all custom tile work. This guarantees a lifetime moisture barrier that prevents structural dry rot, mold growth, and water intrusion.
                  </p>
                </div>
              </div>

              <p className="text-primary-foreground/85 text-lg leading-relaxed">
                As local <strong>Chandler bathroom remodeling contractors</strong>, we do not just renovate for looks. We build for permanent durability in the desert. From luxury tub-to-shower conversions near the Chandler Fashion Center to master bath updates by Hamilton High School, our materials are built to perform for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY & ADA COMPLIANT DESIGN */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Universal Design</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-2 mb-6 text-foreground">
                Safe & Elegant: ADA Bathroom Remodeling
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Aging-in-place safely shouldn&apos;t require sacrificing the luxury feel of your home. We are experts in <strong>accessible, ADA-compliant bathroom designs</strong> that merge seamless beauty with uncompromising utility. Whether serving residents near the Chandler Regional Medical Center or long-time homeowners in central Chandler, we specialize in:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Zero-Threshold Showers:</strong> Completely curbless entries allowing wheelchair access and eliminating trip hazards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Reinforced Grab Bars:</strong> Elegant, architectural bars anchored straight into heavy stud framing for robust support.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Comfort-Height Toilets & Vanities:</strong> Ergonomically positioned fixtures that ease strain and improve independence.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINK SECTION */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">Expert Bathroom Services in Chandler</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/bathroom-vanity-installation/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Vanity Installation</h3>
              <p className="text-muted-foreground text-sm mt-1">Custom desert-ready cabinets and premium quartz countertops.</p>
            </Link>
            <Link href="/shower-remodeling/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Walk-In Showers</h3>
              <p className="text-muted-foreground text-sm mt-1">Frameless glass, textured porcelain tile, curbless entries.</p>
            </Link>
            <Link href="/tub-to-shower-conversion/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Tub To Shower Conversion</h3>
              <p className="text-muted-foreground text-sm mt-1">Convert unused, hazardous garden tubs into luxurious showers.</p>
            </Link>
            <Link href="/master-bathroom-remodel/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Master Bathroom Remodel</h3>
              <p className="text-muted-foreground text-sm mt-1">Luxury spa-inspired primary suite renovations.</p>
            </Link>
            <Link href="/bathroom-tile-installation/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Bathroom Tile</h3>
              <p className="text-muted-foreground text-sm mt-1">Slip-resistant floor tiling and high-end wall patterns.</p>
            </Link>
            <Link href="/small-bathroom-remodeling/" className="bg-background border border-border rounded-xl p-5 hover:border-primary transition-colors group">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base m-0">Small Bath Remodel</h3>
              <p className="text-muted-foreground text-sm mt-1">Maximize square footage and visibility in secondary baths.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
