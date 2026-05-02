import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    text: 'Outstanding work on our bathroom remodel. The team was professional and completed the project on time and on budget.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'Highly recommend! They transformed our outdated bathroom into a modern, beautiful space. Excellent craftsmanship.',
    rating: 5,
  },
  {
    name: 'Jennifer Davis',
    text: 'Best decision we made. The attention to detail is incredible. Our shower conversion looks amazing!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-12 text-blue-950">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-blue-950">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
