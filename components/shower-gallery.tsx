import Image from "next/image";
import { ArrowRight } from "lucide-react";

const showerProjects = [
  {
    id: 1,
    title: "Walk-In Tile Shower in Ocotillo",
    neighborhood: "Ocotillo, Chandler",
    category: "Walk-In Shower - Completed April 2025",
    before: "/images/services/chandler-bathroom-remodel.avif",
    after: "/images/hero/luxury-shower-remodel-chandler.avif",
  },
  {
    id: 2,
    title: "Frameless Glass Enclosure in Fulton Ranch",
    neighborhood: "Fulton Ranch, Chandler",
    category: "Glass Enclosure - Completed March 2025",
    before: "/images/projects/luxury-bathtub-remodel-az.avif",
    after: "/images/services/chandler-bathroom-remodel.avif",
  },
  {
    id: 3,
    title: "Curbless Shower Upgrade in Sun Lakes",
    neighborhood: "Sun Lakes, Chandler",
    category: "Accessibility Remodel - Completed May 2025",
    before: "/images/hero/luxury-shower-remodel-chandler.avif",
    after: "/images/projects/luxury-bathtub-remodel-az.avif",
  },
];

function ShowerBeforeAfterCard({ item }: { item: typeof showerProjects[0] }) {
  return (
    <div className="gallery-card relative aspect-square rounded-xl overflow-hidden cursor-pointer group">
      {/* After Image - revealed on hover */}
      <Image
        src={item.after}
        alt={`${item.title} - After Remodel`}
        fill
        loading="lazy"
        decoding="async"
        quality={75}
        className="object-cover gallery-after"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Before Image - shown by default */}
      <Image
        src={item.before}
        alt={`${item.title} - Before Remodel`}
        fill
        loading="lazy"
        decoding="async"
        quality={75}
        className="object-cover gallery-before"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Before/After Label */}
      <div className="absolute top-4 left-4 z-10">
        <span className="gallery-label-before px-3 py-1 text-xs font-semibold rounded-full bg-background/80 text-foreground">
          Before
        </span>
        <span className="gallery-label-after px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground hidden">
          After
        </span>
      </div>

      {/* Title & Info slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
        <h3 className="font-serif text-lg font-semibold text-background">{item.title}</h3>
        <p className="text-background/80 text-sm">{item.neighborhood}</p>
        <p className="text-background/70 text-xs mt-1">{item.category}</p>
        <div className="flex items-center gap-2 mt-3 text-background/90 text-sm">
          <span>Hover to see after</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
}

export default function ShowerGallery() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Work</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Recent Shower Remodels in Chandler
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hover over each project to see the transformation. These real projects show our attention to detail, waterproofing expertise, and commitment to quality finishes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showerProjects.map((project) => (
            <ShowerBeforeAfterCard key={project.id} item={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to start your shower remodeling project?
          </p>
          <a
            href={`tel:(520) 569-3339`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Call for Your Free Estimate
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
