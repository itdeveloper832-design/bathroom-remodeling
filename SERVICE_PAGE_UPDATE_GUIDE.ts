/**
 * Service Page Update Script
 * Updates all service pages to use unique content from service-content-data.ts
 * 
 * Service Pages to Update:
 * - small-bathroom-remodeling
 * - bathroom-tile-installation  
 * - bathroom-vanity-installation
 * - bathtub-remodeling
 * - shower-replacement
 * - tub-to-shower-conversion
 * - walk-in-showers
 * - cabinet-countertop-installation
 * - bathroom-flooring-installation
 * - bathroom-lighting-installation
 * - tub-removal
 */

// ==================== STANDARD PATTERN FOR ALL PAGES ====================
// 1. Import serviceContent at top
// 2. Get service data: const serviceData = serviceContent["service-key"];
// 3. Pass to components:
//    - IssuesSolved issues={serviceData.issues}
//    - Benefits benefits={serviceData.benefits}
//    - Tips tips={serviceData.tips}
//    - ServiceFAQ faqs={faqs} (where faqs = serviceContent["service-key"].faqs)

// ==================== COMMON UNIQUE CONTENT SECTIONS ====================

export const updatePatterns = {
  // Pattern 1: Full-featured pages (Process + Issues + Benefits + Tips + FAQs)
  "full-featured": {
    components: ["ServiceProcess", "IssuesSolved", "Benefits", "Tips", "ServiceFAQ"],
    files: [
      "small-bathroom-remodeling",
      "bathroom-tile-installation",
      "bathroom-vanity-installation",
      "shower-replacement",
      "tub-to-shower-conversion",
      "walk-in-showers",
    ]
  },

  // Pattern 2: Basic pages (Just Issues + Benefits + Tips + FAQs)
  "basic": {
    components: ["IssuesSolved", "Benefits", "Tips", "ServiceFAQ"],
    files: [
      "bathtub-remodeling",
      "cabinet-countertop-installation",
      "bathroom-flooring-installation",
      "bathroom-lighting-installation",
      "tub-removal",
    ]
  }
};

// ==================== IMPLEMENTATION GUIDE ====================

/*
EACH SERVICE PAGE SHOULD FOLLOW THIS TEMPLATE:

import { serviceContent } from "@/lib/service-content-data";

export default function ServicePage() {
  const faqs = serviceContent["service-key"].faqs;
  const serviceData = serviceContent["service-key"];
  
  return (
    <>
      <ServiceSchema ... />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero ... />
        
        {/* Optional: ServiceProcess if available */}
        <ServiceProcess ... />
        
        {/* Pass unique content */}
        <IssuesSolved
          issues={serviceData.issues}
          title="Issues We Solve with [Service]"
          description="..."
        />
        
        <Benefits
          benefits={serviceData.benefits}
          title="Benefits of [Service]"
          description="..."
        />
        
        <Tips
          tips={serviceData.tips}
          title="Expert [Service] Tips"
          description="..."
        />
        
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}

VALIDATION CHECKLIST:
✓ Each page imports serviceContent
✓ Each page gets its unique data for "service-key"
✓ IssuesSolved receives issues prop (NOT default empty array)
✓ Benefits receives benefits prop (NOT default 4 items)
✓ Tips receives tips prop (NOT default 4 tips)
✓ ServiceFAQ receives faqs prop (NOT default generic FAQs)
✓ All props are sourced from serviceContent["service-key"]
✓ No default content is shown if custom props are available
*/
