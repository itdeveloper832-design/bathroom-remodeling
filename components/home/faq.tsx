import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer complete home and kitchen remodeling in Chandler, AZ?",
    answer:
      "Yes! In addition to our award-winning bathroom services, we are licensed general contractors providing complete kitchen remodeling in Chandler AZ and full home renovations. We manage all trades, from custom cabinetry and quartz countertops to flooring and structural changes.",
  },
  // HOMEPAGE CLUSTER — bathroom remodel chandler az
  {
    question: "What types of bathroom remodeling do you offer in Chandler, AZ?",
    answer:
      "We offer complete bathroom remodeling in Chandler AZ including full bathroom renovations, master bath remodels, vanity installation, tile work, flooring, and lighting upgrades. Our licensed remodeling contractors handle every trade — no subcontractor shuffle.",
  },
  {
    question: "How much does a bathroom remodel cost in Chandler, AZ?",
    answer:
      "Bathroom remodel costs in Chandler range from $4,500 for a guest bath update to $45,000+ for a full master bath renovation. Tub-to-shower conversions run $6,000–$13,000. We provide free, itemized written estimates before any work begins.",
  },
  {
    question: "Are you licensed remodeling contractors in Chandler, AZ?",
    answer:
      "Yes. We are a licensed Arizona contractor serving homeowners across Chandler, Gilbert, Mesa, Tempe, and the East Valley. Every project includes a 2-year workmanship warranty and we pull all required city permits.",
  },
  // SHOWER CLUSTER — shower remodeling chandler az
  {
    question: "Do you offer shower remodeling in Chandler, AZ?",
    answer:
      "Yes. Our shower remodeling in Chandler includes walk-in shower installation, frameless glass enclosures, custom tile work, curbless shower conversions, and shower replacement. We use Schluter waterproofing to prevent leaks in Arizona's extreme temperature swings.",
  },
  {
    question: "How long does a typical kitchen or bathroom remodel take?",
    answer:
      "A standard bathroom remodel in Chandler takes about 2 to 3 weeks. A full kitchen remodel typically takes 4 to 6 weeks. Timelines vary based on scope and material availability, but we provide a firm schedule before construction begins.",
  },
  // BATHTUB CLUSTER — bathtub remodeling chandler az
  {
    question: "Do you offer bathtub remodeling and replacement in Chandler, AZ?",
    answer:
      "Yes. Our bathtub remodeling services in Chandler include full tub replacement, bathtub-to-shower conversion, soaking tub installation, and jetted tub upgrades. We specialize in tub-to-shower conversions for unused garden tubs — the most popular service in Chandler homes built 1985–2005.",
  },
  // SERVICE AREA
  {
    question: "What neighborhoods in Chandler do you serve?",
    answer:
      "We serve all of Chandler, AZ including Dobson Ranch, Sun Lakes, Ocotillo, Fulton Ranch, Chandler Heights, Gila Springs, Fox Crossing, and Cooper Commons. We also serve Gilbert, Mesa, Tempe, and Ahwatukee.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-secondary" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground">
              Remodeling FAQs — Chandler, AZ
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Common questions about home remodeling, kitchen renovations, and bathroom remodeling in Chandler, Arizona.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <summary className="w-full px-6 py-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-muted/50 transition-colors list-none">
                  <span className="font-serif text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 mt-1 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
