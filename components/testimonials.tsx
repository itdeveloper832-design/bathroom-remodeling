import PremiumTestimonials from './home/testimonials';

interface TestimonialsProps {
  category?: string;
}

export function Testimonials({ category }: TestimonialsProps) {
  return <PremiumTestimonials category={category} />;
}
