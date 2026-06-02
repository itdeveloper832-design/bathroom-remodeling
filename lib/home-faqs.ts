export type HomeFaq = { question: string; answer: string };

/** Homepage + FAQ schema (plain text for JSON-LD; HTML for UI) */
export const homeFaqs: HomeFaq[] = [
  {
    question: "How much does a typical master bathroom remodel cost in Chandler?",
    answer:
      "A professional master bathroom remodel in Chandler generally ranges from <strong>twenty thousand to forty five thousand dollars</strong>. Focused guest bathroom updates or standard tub replacements range from <strong>seven thousand five hundred to sixteen thousand dollars</strong>. Total costs depend on the size of the room, layout modifications, and material choices. We provide comprehensive, itemized quotes before any work begins.",
  },
  {
    question: "How long does a standard bathroom remodel take?",
    answer:
      "We complete most standard bathroom remodels in Chandler within <strong>two to three weeks</strong> of active construction. Outdated garden tub swaps or simple tub-to-shower conversions are completed in <strong>ten to fourteen days</strong> once demolition begins. Large custom master baths with complex plumbing re-routes can take <strong>four to five weeks</strong>.",
  },
  {
    question: "Do I need a building permit to remodel my bathroom in Chandler?",
    answer:
      "Yes, the City of Chandler requires a building permit for any structural alterations, major plumbing adjustments, or new electrical circuits. Cosmetic swaps like replacing vanity cabinets, updating faucets, or retiling a wall in the same layout do not require permits. We manage the entire permit filing and inspection process with the local development services office for you.",
  },
  {
    question: "Can I convert my unused garden bathtub into a modern walk-in tile shower?",
    answer:
      "Yes. We specialize in converting outdated, high-step garden bathtubs into modern walk-in tile showers. Our process involves removing the old tub, re-routing the plumbing drains, installing a durable Schluter-KERDI waterproofing system, and laying custom slip-resistant tile. Most conversions are completed in <strong>ten to fourteen days</strong>.",
  },
  {
    question: "Are walk-in showers worth it for home resale value?",
    answer:
      "Yes. Swapping an unused garden tub in the master bath for a spacious, modern walk-in shower almost always increases your property value and market appeal. Buyers in the East Valley favor open layouts, modern glass surrounds, and low-maintenance custom tile work over outdated garden tubs.",
  },
  {
    question: "What materials hold up best against Chandler’s hard water?",
    answer:
      "We highly recommend large-format porcelain tile paired with premium chemical-resistant epoxy grout. Porcelain is non-porous and resists the white calcium scaling common to high-mineral East Valley water, while epoxy grout prevents mineral penetration and staining, making your custom shower easy to clean.",
  },
  {
    question: "Why should I hire a specialized bathroom remodeler rather than a general handyman?",
    answer:
      "Hiring a specialized bathroom remodeler ensures your project is completed by technicians who specialize exclusively in wet-area waterproofing, subfloor structural reinforcement, and precise tile alignment. General handymen lack the specialized licensing (ROC #338304) and advanced tools required to protect your home from mold and structural rot.",
  },
  {
    question: "Do you offer financing options for bathroom remodeling in Chandler?",
    answer:
      "Yes, we provide competitive financing options and custom monthly payment plans for remodeling projects over five thousand dollars. This helps keep your home upgrades affordable while ensuring the job is done by licensed professionals.",
  },
];

/** Strip HTML for FAQPage schema */
export function faqAnswerPlain(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

