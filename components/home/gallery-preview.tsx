// ✅ CONVERTED TO SERVER COMPONENT: no "use client" needed
// Before/after hover effect now uses pure CSS :hover - zero JS shipped for this section
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    title: "Master Bath Remodel in Dobson Ranch",
    category: "Full Renovation - Completed March 2025",
    before: "/images/projects/dobson-master-before.png",
    after: "/images/projects/dobson-master-after.png",
  },
  {
    id: 2,
    title: "Luxury Master Vanity in Ocotillo",
    category: "Vanity & Stone Work - Completed Jan 2025",
    before: "/images/projects/ocotillo-shower-before.png",
    after: "/images/projects/ocotillo-shower-after.png",
  },
  {
    id: 3,
    title: "Guest Bath Tile Upgrade in Sun Lakes",
    category: "Tile & Tub Upgrade - Completed Feb 2025",
    before: "/images/projects/sun-lakes-guest-before.png",
    after: "/images/projects/sun-lakes-guest-after.png",
  },
  {
    id: 4,
    title: "Spa-Like Retreat in Fulton Ranch",
    category: "Master Bath Upgrade - Completed Dec 2024",
    before: "/images/projects/fulton-spa-before.png",
    after: "/images/projects/fulton-spa-after.png",
  },
];


// Pure Server Component: CSS :hover handles the before/after flip, no useState needed
function BeforeAfterCard({ item }: { item: typeof galleryItems[0] }) {
  return (
    <div className="gallery-card relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group">
      {/* After Image - revealed on hover via CSS opacity */}
      <Image
        src={item.after}
        alt={`${item.title} - After Remodel`}
        fill
        loading="lazy"
        decoding="async"
        quality={75}
        className="object-cover gallery-after"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Before Image - shown by default, hidden on hover */}
      <Image
        src={item.before}
        alt={`${item.title} - Before Remodel`}
        fill
        loading="lazy"
        decoding="async"
        quality={75}
        className="object-cover gallery-before"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Before/After label - CSS switches text via :hover */}
      <div className="absolute top-4 left-4 z-10">
        <span className="gallery-label-before px-3 py-1 text-xs font-semibold rounded-full bg-background/80 text-foreground">
          Before
        </span>
        <span className="gallery-label-after px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
          After
        </span>
      </div>
      {/* Title slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
        <h3 className="font-serif text-xl font-semibold text-background">{item.title}</h3>
        <span className="text-background/70 text-sm">{item.category}</span>
      </div>
    </div>
  );
}

export default function GalleryPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Our Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
              Before &amp; After Transformations
            </h2>
            <p className="text-muted-foreground text-lg">
              Hover over each image to see the stunning transformation of real projects
              completed for homeowners in Chandler and the surrounding East Valley.
            </p>
          </div>
          <div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/gallery/">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
