"use client"
import { BreadcrumbSchema } from "@/components/seo/json-ld";

import { useState, useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getFeaturedGalleryItems } from "@/lib/actions/gallery"
import type { GalleryItem } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ArrowLeftRight } from "lucide-react"
import { defaultGalleryItems } from "@/lib/seed-blog"

const categories = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathroom" },
  { value: "shower", label: "Shower" },
  { value: "vanity", label: "Vanity" },
]

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await getFeaturedGalleryItems()
      if (data.length === 0) {
        const defaultItems = defaultGalleryItems.map((item, index) => ({
          ...item,
          id: `default-${index}`,
          createdAt: new Date(),
        })) as GalleryItem[]
        setItems(defaultItems)
      } else {
        setItems(data)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const visibleItems = items.filter(item => item.category !== "kitchen")
  const filteredItems = selectedCategory === "all" 
    ? visibleItems 
    : visibleItems.filter(item => item.category === selectedCategory)

  const currentIndex = selectedItem ? filteredItems.findIndex(item => item.id === selectedItem.id) : -1

  function handlePrev() {
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
      setShowBefore(false)
    }
  }

  function handleNext() {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
      setShowBefore(false)
    }
  }

  return (
    <>
      
      <BreadcrumbSchema items={[ { name: "Home", url: "https://arzhomeremodeling.com/" }, { name: "Services", url: "https://arzhomeremodeling.com/services/" }, { name: "Gallery", url: "https://arzhomeremodeling.com/gallery/" } ]} />
<Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 bg-secondary overflow-hidden">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Work
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance leading-tight">
                Project Gallery
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Explore our portfolio of completed bathroom renovations, walk-in showers, and custom tile work in Chandler, AZ and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-card sticky top-20 z-30 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="default"
                  className="rounded-full h-10 px-6 font-medium"
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[4/3] bg-muted rounded-xl" />
                  </div>
                ))}
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center py-16 animate-in fade-in duration-500">
                <p className="text-lg text-muted-foreground font-serif">No projects found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-serif text-xl font-semibold leading-tight">{item.title}</h3>
                        <p className="text-white/80 text-sm capitalize mt-1">{item.category}</p>
                      </div>
                      {(item.beforeImage && item.afterImage) && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold rounded-full shadow-sm">
                            Before/After
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Gallery Content Expansion Section */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold mb-6 text-foreground text-center">
              Our Commitment to Quality Bathroom Remodeling in Chandler, AZ
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
              <p>
                At ARZ Home Remodeling, we believe that a bathroom renovation is more than just updating fixtures—it is about creating a personalized retreat that combines daily functionality with long-lasting quality. Our project gallery highlights real transformations we have completed for homeowners in Chandler and the surrounding East Valley. From open-concept master suites to space-saving guest baths, our work reflects meticulous attention to detail and professional-grade standards.
              </p>
              <p>
                Every project we undertake is built on a foundation of proper preparation. Unlike standard cosmetic updates, our team performs full demo work down to the studs to inspect for hidden water damage or mold—a common issue in older Chandler properties. We use industry-leading waterproofing materials like Schluter-Kerdi membranes and boards to ensure a completely water-tight seal. For high-traffic areas like shower floors and walls, we recommend epoxy grout to resist Chandler’s hard water stains, keeping your new tile looking pristine for years to come.
              </p>
              <p>
                Our services include professional layout re-engineering, custom walk-in shower building, vanity conversions, zero-threshold curbless shower installations for improved accessibility, and premium plumbing relocation. We manage all municipal permitting processes, ensuring your project complies fully with local building safety codes. Whether you live in Fulton Ranch, Ocotillo, Dobson Ranch, or Sun Lakes, we coordinate with you step-by-step to bring your vision to life.
              </p>
              <div className="bg-card p-6 rounded-xl border border-border mt-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  Why Our Craftsmanship Stands Out
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li><strong>Complete Waterproofing:</strong> We install full-system Schluter-Kerdi vapor barriers to prevent structural leaks and subfloor rot.</li>
                  <li><strong>Hard Water Resilient:</strong> We apply high-performance epoxy grouts and sealers that resist mineral buildup and simplify cleaning.</li>
                  <li><strong>Custom Glass Fits:</strong> Every glass enclosure is custom-measured and installed to fit the precise angle and level of your finished tile work.</li>
                  <li><strong>Local Permitting:</strong> We handle all local municipal permit filings in Chandler, Mesa, and Gilbert for complete legal compliance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-300"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-6 p-3 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-10 w-10" />
              </button>
            )}

            {currentIndex < filteredItems.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-6 p-3 text-white/70 hover:text-white transition-colors z-50 rounded-full bg-white/10 hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-10 w-10" />
              </button>
            )}

            <div 
              className="relative w-full max-w-5xl max-h-[90vh] mx-4 animate-in fade-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/10 shadow-2xl">
                <Image
                  src={
                    showBefore && selectedItem.beforeImage 
                      ? selectedItem.beforeImage 
                      : selectedItem.afterImage || selectedItem.imageUrl
                  }
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-white text-2xl font-serif font-semibold">{selectedItem.title}</h3>
                    {selectedItem.description && (
                      <p className="text-white/80 mt-2 max-w-2xl leading-relaxed">{selectedItem.description}</p>
                    )}
                  </div>
                  
                  {selectedItem.beforeImage && selectedItem.afterImage && (
                    <Button
                      variant="outline"
                      size="default"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-6"
                      onClick={() => setShowBefore(!showBefore)}
                      aria-label={showBefore ? "Show After image" : "Show Before image"}
                    >
                      <ArrowLeftRight className="mr-2 h-4 w-4" aria-hidden="true" />
                      {showBefore ? "Show After" : "Show Before"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
