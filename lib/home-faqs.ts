export type HomeFaq = { question: string; answer: string };

/** Homepage + FAQ schema (plain text for JSON-LD; HTML for UI) */
export const homeFaqs: HomeFaq[] = [
  {
    question: "Do I need a building permit to remodel my bathroom in Chandler?",
    answer:
      "Yes, the City of Chandler requires a permit for layout changes, plumbing moves, and new electrical work. Cosmetic swaps like replacing vanities or flooring in the same position do not. We file all drawings and manage inspections with the Development Services Department on Buffalo Street for you.",
  },
  {
    question: "How does Chandler's hard water affect custom tile and grout?",
    answer:
      "Chandler water averages 18 to 22 grains of hardness. This mineral scale sticks to porous cement grout, causing staining and leaks. We install dense porcelain tile and solid epoxy resin grout. Epoxy grout is non-porous and repels scale, keeping your shower clean and waterproof.",
  },
  {
    question: "How do you protect shower glass from hard water scale?",
    answer:
      "Hard water leaves cloudy white mineral scale on standard glass doors. We install low-iron tempered glass doors treated with a factory-applied hydrophobic nano-coating. This coating repels water droplets, preventing scale from bonding to the surface. It reduces cleaning time and keeps glass clear.",
  },
  {
    question: "Can you convert a tub to a walk-in shower on a concrete slab?",
    answer:
      "Yes. We saw-cut and trench the concrete slab to relocate the drain trap. Under code rules, we expand the waste line from 1.5 inches to 2 inches to handle modern shower heads. We then place a vapor-tight Schluter pan and lay slip-resistant tile.",
  },
  {
    question: "What is your project workmanship warranty?",
    answer:
      "We provide a written 2-year warranty on all our remodeling work. This covers tile adhesion, epoxy grout joints, Schluter waterproofing, shower valves, and vanity mounts. If any component of our installation fails within two years, our crew repairs it at no cost to you.",
  },
];

/** Strip HTML for FAQPage schema */
export function faqAnswerPlain(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

