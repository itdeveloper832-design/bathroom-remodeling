export default function ChandlerShowerMaterials() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-semibold mb-4 text-foreground">
            Why Chandler Showers Need Different Materials Than Most of the Country
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hard Water & Grout */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Hard Water & Grout
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Chandler's water supply runs extremely hard — some of the highest mineral content in the Phoenix metro. Standard sanded or unsanded grout stains brown within 6–12 months in a busy shower.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We use <strong>epoxy grout</strong> on all shower walls in Chandler projects. It does not absorb minerals, resists mold, and stays lighter for years longer than standard grout. Pair it with a <strong>porcelain tile</strong> (non-porous) and you have a shower that is easy to clean even after Chandler's notoriously hard tap water runs through it daily.
            </p>
          </div>

          {/* Heat & AC */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Heat, AC, and Grout Movement
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Arizona's temperature swings — 115°F outside in summer and 72°F inside with AC — expand and contract tile and grout more than in mild climates.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              This is why <strong>caulk at all inside corners (not grout)</strong> is mandatory in Arizona showers. We never grout inside corners. We caulk them with a flexible, mold-resistant sealant that moves with the tile instead of cracking.
            </p>
          </div>

          {/* HOA Rules */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              HOA Rules in Planned Communities
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              If your home is in Ocotillo, Fulton Ranch, Dobson Ranch, or a master-planned community along the Loop 202, your HOA may have rules about dumpster placement and contractor work hours.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We have worked in these communities for years and coordinate dumpster placement and work schedules to stay compliant. You don't have to manage that paperwork.
            </p>
          </div>

          {/* Permits */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Chandler Permits for Shower Work
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Most shower tile replacements within the same footprint do not require a Chandler permit. If we move the valve, add plumbing, or alter the drain, we pull a permit through Chandler Development Services and schedule the required rough-in inspection.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We handle all of this — you don't need to call the city.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
