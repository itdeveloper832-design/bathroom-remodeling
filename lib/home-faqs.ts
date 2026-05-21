export type HomeFaq = { question: string; answer: string };

/** Homepage + FAQ schema (plain text for JSON-LD; HTML for UI) */
export const homeFaqs: HomeFaq[] = [
  {
    question: "How much does bathroom remodeling cost in Chandler?",
    answer:
      "Most full bathroom remodels in Chandler run about <strong>$12,500 to $38,000+</strong> depending on size and finishes. Guest bath refreshes are often <strong>$6,500 to $15,000</strong>. Tub-to-shower conversions are commonly <strong>$8,500 to $16,000</strong>. We provide a written line-item estimate before work starts.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "A typical guest or hall bath takes about <strong>2 to 3 weeks</strong> of construction. Tub-to-shower projects are often <strong>3 to 5 days</strong> once demolition begins. Large master baths with layout changes can take <strong>4 to 6 weeks</strong>. You get a day-by-day schedule before we start.",
  },
  {
    question: "Do you need a permit for a bathroom remodel in Chandler?",
    answer:
      "Yes, when you move plumbing, change walls, or upgrade electrical. Swapping a vanity or retiling a floor usually does not require a permit. We handle Chandler Development Services permits and inspections when your project needs them. See our <a href=\"/bathroom-remodeling-permits-chandler/\" class=\"text-primary hover:underline\">Chandler permit guide</a> for details.",
  },
  {
    question: "What is a tub-to-shower conversion?",
    answer:
      "A tub-to-shower conversion removes the bathtub, resets the drain for a shower, waterproofs the pan and walls, and installs a walk-in shower with tile and glass. It is one of the most common upgrades in Chandler homes with unused garden tubs.",
  },
  {
    question: "Are walk-in showers worth it?",
    answer:
      "For most homeowners, yes. Walk-in showers open up the room, are easier to clean than tub surrounds, and work well for aging in place when built with a low curb and slip-resistant tile.",
  },
  {
    question: "What tile works best in Arizona bathrooms?",
    answer:
      "<strong>Porcelain tile</strong> handles moisture and Chandler hard water well. We recommend <strong>epoxy grout</strong> on shower walls and floors where mineral buildup is a problem. Use a textured finish with COF 0.60 or higher on shower floors.",
  },
  {
    question: "Can you convert a bathtub into a shower?",
    answer:
      "Yes. We remove the tub, modify the drain, install Schluter-Kerdi waterproofing, and set custom tile with a frameless or semi-frameless glass panel. Most projects keep the same footprint as the old tub alcove.",
  },
  {
    question: "What is included in ADA bathroom remodeling?",
    answer:
      "Accessible baths often include <strong>curbless showers</strong>, grab bars anchored into studs, comfort-height toilets, slip-resistant tile, and open vanities for wheelchair approach. We follow universal design standards for aging in place in Arizona homes.",
  },
  {
    question: "Does bathroom remodeling increase home value?",
    answer:
      "Updated bathrooms are one of the first rooms buyers notice in the East Valley. A well-done remodel often recovers a large share of the cost at resale, especially with a modern shower and double vanity.",
  },
  {
    question: "What bathroom remodeling mistakes should homeowners avoid?",
    answer:
      "Skipping waterproofing behind tile, undersized exhaust fans, missing HOA approvals in master-planned areas like Ocotillo or Fulton Ranch, and hiring unlicensed trades for plumbing or electrical in wet areas.",
  },
];

/** Strip HTML for FAQPage schema */
export function faqAnswerPlain(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
