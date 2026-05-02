'use client'

interface GalleryItem {
  id: string
  title: string
  category: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg overflow-hidden aspect-square cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-blue-950/80 group-hover:bg-blue-950/60 transition-colors flex items-end justify-start p-4">
                <div>
                  <p className="text-slate-300 text-sm uppercase tracking-wide">{item.category}</p>
                  <h3 className="font-poppins font-semibold text-white text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
