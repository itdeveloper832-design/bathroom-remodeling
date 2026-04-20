/**
 * Unique content data for each service page
 * Ensures NO duplicate content across pages
 * Each service has custom benefits, issues, tips, and FAQs
 */

export interface ServiceContentData {
  benefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  issues: Array<{
    problem: string;
    solution: string;
  }>;
  tips: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const serviceContent: Record<string, ServiceContentData> = {
  "bathroom-remodeling": {
    benefits: [
      {
        title: "Complete Bathroom Transformation",
        description: "From layout to fixtures, we redesign your entire bathroom space for maximum functionality and beauty.",
        icon: "Sparkles",
      },
      {
        title: "Modern Fixture Technology",
        description: "Access to latest bathroom technologies including smart mirrors, touchless faucets, and heated floors.",
        icon: "Zap",
      },
      {
        title: "Increased Resale Value",
        description: "A full bathroom remodel can add 60-80% return on investment when selling your home.",
        icon: "TrendingUp",
      },
      {
        title: "Customized Design Solutions",
        description: "Personalized layouts tailored to your family's specific needs and daily routines.",
        icon: "Palette",
      },
    ],
    issues: [
      {
        problem: "Cramped layouts that waste space and create poor traffic flow",
        solution: "Strategic reconfiguration with floating vanities, corner showers, and open floor plans for better flow.",
      },
      {
        problem: "Outdated plumbing causing low pressure, leaks, or mold growth",
        solution: "Full replumbing with modern materials, improved drainage systems, and preventative waterproofing.",
      },
      {
        problem: "Poor lighting and ventilation leading to moisture damage and dark spaces",
        solution: "Layered lighting design and professional ventilation systems to keep bathrooms dry and well-lit.",
      },
      {
        problem: "Non-functional storage with clutter and disorganization",
        solution: "Custom cabinetry, built-in shelving, and organizational systems designed for your lifestyle.",
      },
      {
        problem: "Outdated style that doesn't match home aesthetic or personal preferences",
        solution: "Contemporary design updates with material selections that complement your entire home.",
      },
    ],
    tips: [
      {
        title: "Plan for Future Accessibility",
        description: "Consider grab bars, walk-in showers, and accessible vanities that work for all ages and abilities.",
        icon: "Accessibility",
      },
      {
        title: "Invest in Quality Ventilation",
        description: "Proper exhaust fans and humidity control are essential for preventing mold and extending fixture life.",
        icon: "Wind",
      },
      {
        title: "Choose Durable, Water-Resistant Materials",
        description: "Porcelain tiles, engineered stone, and epoxy-coated fixtures resist moisture and last decades.",
        icon: "Shield",
      },
      {
        title: "Create Storage During Design Phase",
        description: "Plan cabinets, niches, and organizers before construction to maximize functionality and style.",
        icon: "Box",
      },
    ],
    faqs: [
      {
        question: "How long does a full bathroom remodel take in Chandler?",
        answer:
          "A complete bathroom remodeling project typically takes 4-8 weeks depending on scope, permits, and any hidden issues discovered during demolition. We provide a detailed timeline upfront.",
      },
      {
        question: "What's included in a bathroom remodel package?",
        answer:
          "Our bathroom remodeling packages include demolition, new plumbing, electrical, flooring, tile work, vanity installation, lighting, mirrors, hardware, and final finishing. Custom packages available.",
      },
      {
        question: "Do you handle permits and inspections for bathroom remodeling?",
        answer:
          "Yes! We obtain all necessary permits for bathroom remodeling in Chandler, coordinate inspections, and ensure compliance with local building codes. This is included in our service.",
      },
      {
        question: "Can you work with my existing budget for bathroom remodeling?",
        answer:
          "Absolutely. We offer bathroom remodeling options from $8,000 to $50,000+ depending on materials and scope. We create a detailed quote showing exactly where your investment goes.",
      },
      {
        question: "What makes your bathroom remodeling different from competitors?",
        answer:
          "We provide transparent pricing, no surprise charges, dedicated project managers, and a 5-year warranty on all bathroom remodeling work. Our Chandler-based team has 15+ years of local experience.",
      },
    ],
  },

  "shower-remodeling": {
    benefits: [
      {
        title: "Spa-Like Shower Experience",
        description: "Transform your daily routine with rainfall showerheads, body jets, and luxurious fixtures.",
        icon: "Droplets",
      },
      {
        title: "Waterproof Durability",
        description: "Proper waterproofing membranes and sealed construction prevent leaks and mold for decades.",
        icon: "Shield",
      },
      {
        title: "Improved Drainage & Functionality",
        description: "Modern drain systems with proper slopes ensure water flows efficiently without pooling.",
        icon: "Wind",
      },
      {
        title: "Frameless Glass Aesthetics",
        description: "Elegant frameless glass enclosures create a clean, modern look that opens up your bathroom visually.",
        icon: "Sparkles",
      },
    ],
    issues: [
      {
        problem: "Leaking surrounds causing water damage to subfloors and walls",
        solution: "Complete waterproofing system with sealed membranes, proper slope, and modern grout systems.",
      },
      {
        problem: "Cracked tiles and failing caulk creating maintenance nightmares",
        solution: "High-quality porcelain or natural stone tiles with professional installation and premium sealants.",
      },
      {
        problem: "Mold and mildew growth from inadequate ventilation",
        solution: "Upgraded ventilation systems and moisture-resistant materials that prevent fungal growth.",
      },
      {
        problem: "Poor water pressure or irregular drainage",
        solution: "Modern plumbing updates with optimized pipe sizing and professional drainage design.",
      },
      {
        problem: "Outdated finishes that clash with new bathroom style",
        solution: "Contemporary fixture upgrades and tile designs that complement modern bathroom aesthetics.",
      },
    ],
    tips: [
      {
        title: "Waterproofing is Critical",
        description: "Invest in full waterproofing systems with membrane underlayment, not just tile and grout.",
        icon: "Droplets",
      },
      {
        title: "Choose Textured Tile for Safety",
        description: "Anti-slip tile reduces accidents and provides better grip in wet shower environments.",
        icon: "AlertTriangle",
      },
      {
        title: "Plan for Niche Storage",
        description: "Built-in shower niches eliminate clutter and provide functional storage without taking space.",
        icon: "Box",
      },
      {
        title: "Select Low-Maintenance Fixtures",
        description: "Stainless steel and coated finishes resist water spots and require minimal cleaning effort.",
        icon: "Clock",
      },
    ],
    faqs: [
      {
        question: "What's the difference between walk-in and enclosure showers?",
        answer:
          "Walk-in showers have an open design with no door, using floor slope and barriers to contain water. Enclosure showers use doors or glass to contain water. Both offer different aesthetics and accessibility benefits.",
      },
      {
        question: "How long does a shower remodel typically take?",
        answer:
          "A standard shower remodel usually takes 2-3 weeks. Complex projects with structural changes may take 4-6 weeks. We provide realistic timelines after assessing your specific project.",
      },
      {
        question: "What's the best tile material for shower remodeling?",
        answer:
          "Porcelain tile is ideal for showers—it's non-porous, durable, and resists mold. Natural stone like marble or travertine offers beauty but requires sealing. We recommend porcelain for low-maintenance.",
      },
      {
        question: "Can you upgrade my shower without full remodeling?",
        answer:
          "Yes! Shower upgrades include new fixtures, trim, caulking, tile repairs, or fixture replacements. We assess what's needed and provide options from cosmetic updates to full renovations.",
      },
      {
        question: "How do you prevent leaks in shower remodeling?",
        answer:
          "We use complete waterproofing membranes, proper substrate preparation, quality grout and caulk, and sloped floors. Our waterproofing warranty ensures leak protection for years.",
      },
    ],
  },

  "small-bathroom-remodeling": {
    benefits: [
      {
        title: "Maximum Space Efficiency",
        description: "Custom designs that maximize storage and functionality in tight layouts with clever organization solutions.",
        icon: "Box",
      },
      {
        title: "Brighter, Larger-Looking Spaces",
        description: "Strategic lighting and mirror placement create the illusion of more space in small bathrooms.",
        icon: "Lightbulb",
      },
      {
        title: "Affordable Transformation",
        description: "Smaller square footage means lower material costs while delivering significant style upgrades.",
        icon: "DollarSign",
      },
      {
        title: "Improved Flow & Comfort",
        description: "Optimized layouts ensure better traffic flow and more comfortable use in compact spaces.",
        icon: "Wind",
      },
    ],
    issues: [
      {
        problem: "Cramped spaces that feel claustrophobic and limit functionality",
        solution: "Wall-mounted fixtures, corner sinks, and strategic lighting create openness in small bathrooms.",
      },
      {
        problem: "Insufficient storage in limited square footage",
        solution: "Vertical storage, medicine cabinets, recessed shelving, and custom vanities maximize space usage.",
      },
      {
        problem: "Dark, dingy appearance from poor lighting design",
        solution: "Layered lighting with overhead, vanity, and accent lights makes small bathrooms feel bright and welcoming.",
      },
      {
        problem: "Plumbing and ventilation issues in tight spaces",
        solution: "Professional installation ensures proper ventilation and plumbing in constrained layouts.",
      },
    ],
    tips: [
      {
        title: "Go Vertical for Storage",
        description: "Use wall space above toilets, shelving, and tall cabinets to maximize storage without taking floor space.",
        icon: "TrendingUp",
      },
      {
        title: "Light Colors Expand the Space",
        description: "White, light gray, and pale blue tiles and paint reflect light and make small bathrooms feel larger.",
        icon: "Lightbulb",
      },
      {
        title: "Floating Vanities Create Airflow",
        description: "Wall-mounted sinks create visual space below and make cleaning floors easier in tight bathrooms.",
        icon: "Wind",
      },
      {
        title: "Recessed Shelves Over Surface Shelving",
        description: "Built-in niches and recessed shelves provide storage without protruding into the room and breaking up space.",
        icon: "Box",
      },
    ],
    faqs: [
      {
        question: "What's the minimum bathroom size for remodeling?",
        answer:
          "We successfully remodel bathrooms as small as 5x5 feet! Even tiny spaces can be transformed with smart design, efficient fixtures, and proper planning.",
      },
      {
        question: "Can a small bathroom renovation include all the features I want?",
        answer:
          "Yes! Prioritize your must-haves—like a quality shower or statement sink—and we design around them. Modern compact fixtures offer luxury in small spaces.",
      },
      {
        question: "How do you keep small bathroom remodels affordable?",
        answer:
          "Less square footage means lower material and labor costs. We focus on smart design and efficient use of space rather than excessive expansion.",
      },
      {
        question: "What ventilation options work best in small bathrooms?",
        answer:
          "Wall-mounted or ceiling fans work great in small spaces. We ensure proper CFM sizing for your bathroom dimensions to prevent moisture issues.",
      },
      {
        question: "Can you make a small bathroom feel spacious?",
        answer:
          "Absolutely! Light colors, mirrors, efficient layouts, and layered lighting create the illusion of more space even in tiny bathrooms.",
      },
    ],
  },

  "bathroom-tile-installation": {
    benefits: [
      {
        title: "Professional Tile Patterns & Layouts",
        description: "Expertise in herringbone, basketweave, subway, and custom patterns that elevate your design.",
        icon: "Palette",
      },
      {
        title: "Waterproof Installation Standards",
        description: "Proper substrate preparation and techniques prevent leaks and ensure long-lasting durability.",
        icon: "Shield",
      },
      {
        title: "Wide Selection of Materials",
        description: "Access to premium porcelain, natural stone, glass, and specialty tiles for any aesthetic.",
        icon: "Sparkles",
      },
      {
        title: "Expert Grout & Sealing",
        description: "Professional-grade grout and sealant application protects tiles and maintains beauty for years.",
        icon: "Clock",
      },
    ],
    issues: [
      {
        problem: "Uneven tile installation causing visible gaps and misalignment",
        solution: "Professional installation with laser-level technology ensures perfectly straight, even grout lines.",
      },
      {
        problem: "Cracked grout lines allowing water infiltration and mold growth",
        solution: "Quality epoxy grout with proper curing and sealing creates waterproof, durable joints.",
      },
      {
        problem: "Lippage (uneven tile edges) creating safety hazards and poor appearance",
        solution: "Leveling systems and expert technique prevent lippage and ensure seamless, safe tile surfaces.",
      },
      {
        problem: "Substrate failure causing tiles to crack or pop off",
        solution: "Proper substrate preparation with concrete board, membranes, and prime ensures tile adhesion.",
      },
    ],
    tips: [
      {
        title: "Invest in Proper Substrate",
        description: "Concrete backer board and waterproofing membranes are essential for tile longevity in wet areas.",
        icon: "Shield",
      },
      {
        title: "Quality Grout Makes a Difference",
        description: "Premium epoxy or urethane grout resists stains, mold, and moisture better than standard cement grout.",
        icon: "Sparkles",
      },
      {
        title: "Plan Complex Patterns in Advance",
        description: "Herringbone and diagonal patterns require precise measurement and layout planning to minimize cuts.",
        icon: "Ruler",
      },
      {
        title: "Seal Natural Stone Immediately",
        description: "Porous stones like marble and travertine must be sealed immediately after installation to prevent staining.",
        icon: "Shield",
      },
    ],
    faqs: [
      {
        question: "What's the best tile material for bathroom walls?",
        answer:
          "Porcelain tile is best—it's non-porous, resists moisture, and is easy to clean. Glass tile adds elegance, and natural stone offers beauty but needs sealing.",
      },
      {
        question: "How do you prevent mold in tile grout?",
        answer:
          "We use epoxy grout which resists mold naturally, apply professional-grade sealers, and ensure proper ventilation to keep grout clean.",
      },
      {
        question: "Can you repair cracked tiles without replacing everything?",
        answer:
          "Yes, we can replace individual damaged tiles. However, if grout or substrate is compromised, we may recommend broader repairs to prevent further damage.",
      },
      {
        question: "What's the most popular tile pattern today?",
        answer:
          "Subway tile remains popular for its clean look, but herringbone, large format, and geometric patterns are trending. We help you choose patterns that complement your design.",
      },
      {
        question: "How long before tile is fully cured and ready to use?",
        answer:
          "Full tile curing takes 24-48 hours depending on conditions. We provide specific care instructions, and you can use your bathroom after full curing.",
      },
    ],
  },

  "bathroom-vanity-installation": {
    benefits: [
      {
        title: "Personalized Storage Solutions",
        description: "Custom vanities designed around your specific storage needs, countertop space, and daily routine.",
        icon: "Box",
      },
      {
        title: "Modern Countertop Materials",
        description: "Quartz, marble, granite, and solid surface options provide durability, beauty, and low maintenance.",
        icon: "Sparkles",
      },
      {
        title: "Optimized Plumbing & Lighting",
        description: "Expert installation includes proper drain sizing, supply line routing, and integrated vanity lighting.",
        icon: "Zap",
      },
      {
        title: "Style & Aesthetic Upgrade",
        description: "New vanities completely transform your bathroom's appearance and create a focal point for the space.",
        icon: "Palette",
      },
    ],
    issues: [
      {
        problem: "Cramped countertops with limited workspace",
        solution: "Larger vanities or double-sink configurations provide ample countertop and storage.",
      },
      {
        problem: "Outdated fixtures and worn countertops",
        solution: "Modern vanity replacement with contemporary fixtures and quality countertops updates your bathroom instantly.",
      },
      {
        problem: "Poor lighting and awkward plumbing connections",
        solution: "Professional installation optimizes plumbing routes, adds vanity lighting, and improves functionality.",
      },
      {
        problem: "Inadequate storage leading to counter clutter",
        solution: "Deeper cabinets, multiple drawers, and pull-out organizers maximize storage capacity.",
      },
    ],
    tips: [
      {
        title: "Choose Quartz for Durability",
        description: "Engineered quartz is non-porous, stain-resistant, and requires minimal maintenance compared to natural stone.",
        icon: "Shield",
      },
      {
        title: "Add Under-Mount Sinks",
        description: "Under-mount sinks provide cleaner lines, easier countertop cleaning, and more usable counter space.",
        icon: "Droplets",
      },
      {
        title: "Install Task Lighting",
        description: "Vanity lights on both sides of mirrors eliminate shadows for better grooming and makeup application.",
        icon: "Lightbulb",
      },
      {
        title: "Include Drawer Organizers",
        description: "Custom drawer dividers and organizers keep grooming items accessible and reduce daily clutter.",
        icon: "Box",
      },
    ],
    faqs: [
      {
        question: "What's the best countertop material for a bathroom vanity?",
        answer:
          "Quartz is best for durability and low maintenance. Marble offers beauty but needs sealing. Solid surface is affordable and repairable. We help match materials to your lifestyle.",
      },
      {
        question: "Can you relocate my vanity plumbing?",
        answer:
          "Yes, we can reroute plumbing to accommodate new vanity locations. Moving plumbing increases cost but provides layout flexibility.",
      },
      {
        question: "How long does vanity installation take?",
        answer:
          "A standard vanity installation takes 1-2 days. If plumbing relocation is needed, add 1-2 days. We coordinate with other trades seamlessly.",
      },
      {
        question: "What's the lifespan of a quality bathroom vanity?",
        answer:
          "A well-maintained vanity lasts 20+ years. Quality cabinets, finishes, and countertops ensure long-term durability and style.",
      },
      {
        question: "Can I get a double vanity in my small bathroom?",
        answer:
          "Yes! We design double vanities for bathrooms as small as 8 feet wide. Floating vanities and narrower units make doubles feasible.",
      },
    ],
  },

  "bathtub-remodeling": {
    benefits: [
      {
        title: "Luxurious Soaking Experience",
        description: "Upgrade to deeper, wider tubs with ergonomic designs for ultimate relaxation and comfort.",
        icon: "Droplets",
      },
      {
        title: "Modern Jetted Tub Technology",
        description: "Air or water jets provide therapeutic massage benefits and turn your tub into a personal spa.",
        icon: "Zap",
      },
      {
        title: "Durable & Easy-to-Maintain Materials",
        description: "Acrylic, cast iron, and soaking tubs resist scratches, stains, and degradation for years.",
        icon: "Shield",
      },
      {
        title: "Better Drainage & Plumbing",
        description: "Modern drain systems with proper slope prevent water damage and ensure efficient emptying.",
        icon: "Wind",
      },
    ],
    issues: [
      {
        problem: "Cracked, stained, or worn tubs from years of use",
        solution: "Replace with modern tubs offering durability, easier cleaning, and contemporary aesthetics.",
      },
      {
        problem: "Poor drainage causing standing water and mold",
        solution: "New drain installation with proper slope and modern drain assemblies ensures perfect water flow.",
      },
      {
        problem: "Limited soaking space or awkward tub dimensions",
        solution: "Upgrade to deeper, wider soaking tubs or install corner tubs that maximize bathroom space.",
      },
      {
        problem: "Plumbing leaks or water damage around tub",
        solution: "Professional installation with proper waterproofing prevents leaks and protects your subfloor.",
      },
    ],
    tips: [
      {
        title: "Consider Freestanding Tubs for Drama",
        description: "Modern freestanding soaking tubs create a luxurious focal point and offer deeper soaking depths.",
        icon: "Sparkles",
      },
      {
        title: "Jetted Tubs Require Professional Installation",
        description: "Air/water jets need electrical connections and specialized plumbing—hire professionals to ensure safety.",
        icon: "Zap",
      },
      {
        title: "Acrylic Tubs Are Budget-Friendly & Durable",
        description: "Acrylic offers excellent durability, is easy to clean, and costs less than cast iron or stone.",
        icon: "DollarSign",
      },
      {
        title: "Install Grab Bars During Tub Installation",
        description: "Add safety grab bars during installation for accessibility and to support family members of all ages.",
        icon: "Shield",
      },
    ],
    faqs: [
      {
        question: "What's the difference between soaking and standard tubs?",
        answer:
          "Soaking tubs are deeper (typically 18-24 inches) for comfortable submersion, while standard tubs are shallower. Soaking provides therapeutic relaxation.",
      },
      {
        question: "Are jetted tubs worth the investment?",
        answer:
          "Jetted tubs offer therapeutic benefits and luxury appeal. Budget $3,000-8,000 for quality units. Factor in higher electricity use and potential maintenance.",
      },
      {
        question: "Can you convert my shower area to a soaking tub?",
        answer:
          "Yes! We can convert shower space to tub. You may lose shower capability, so many homeowners choose a combined tub-shower setup instead.",
      },
      {
        question: "What materials work best for long-lasting tubs?",
        answer:
          "Cast iron (most durable), acrylic (affordable & practical), and stone (luxurious). Acrylic is best value; cast iron lasts 50+ years.",
      },
      {
        question: "How is a freestanding tub installed?",
        answer:
          "Freestanding tubs sit on finished floors and connect to existing plumbing. Installation is relatively simple compared to built-in tubs.",
      },
    ],
  },

  "shower-replacement": {
    benefits: [
      {
        title: "Modern Shower Systems",
        description: "Upgrade to rainfall showerheads, body jets, thermostatic mixing valves, and smart shower systems.",
        icon: "Droplets",
      },
      {
        title: "Improved Water Efficiency",
        description: "Low-flow fixtures reduce water usage by 30-50% while maintaining excellent water pressure.",
        icon: "Wind",
      },
      {
        title: "Enhanced Safety Features",
        description: "Anti-slip flooring, grab bars, and accessible design make showers safer for all family members.",
        icon: "Shield",
      },
      {
        title: "Contemporary Aesthetic",
        description: "Modern fixtures and finishes like brushed nickel and matte black transform your bathroom look.",
        icon: "Sparkles",
      },
    ],
    issues: [
      {
        problem: "Weak water pressure affecting shower quality",
        solution: "Replace restrictor flow limiters, update supply lines, or install pressure-boosting systems.",
      },
      {
        problem: "Corroded or leaking fixtures and valves",
        solution: "Complete fixture replacement with modern, corrosion-resistant materials ensures leak-free operation.",
      },
      {
        problem: "Cold water swings during showers",
        solution: "Install thermostatic mixing valves that maintain consistent temperature automatically.",
        icon: "Zap",
      },
      {
        problem: "Outdated finishes clashing with new bathroom design",
        solution: "Update to contemporary finishes like brushed nickel, matte black, or champagne bronze.",
      },
    ],
    tips: [
      {
        title: "Choose Eco-Friendly Low-Flow Fixtures",
        description: "Modern low-flow showerheads deliver excellent coverage while reducing water waste and utility bills.",
        icon: "Leaf",
      },
      {
        title: "Thermostatic Valves Provide Comfort & Safety",
        description: "These valves prevent scalding by maintaining preset temperatures, protecting young children and elderly.",
        icon: "Zap",
      },
      {
        title: "Match Fixtures to Your Home's Design",
        description: "Choose finishes that complement your home's interior style—polished, brushed, or matte options.",
        icon: "Palette",
      },
      {
        title: "Install Quality Trim Rings",
        description: "Proper trim rings create clean transitions between fixtures and walls for a professional appearance.",
        icon: "Sparkles",
      },
    ],
    faqs: [
      {
        question: "Can I replace just the showerhead without full replacement?",
        answer:
          "Yes! A new showerhead is an affordable upgrade. If your valve needs repair or you want new trim, full replacement provides better results.",
      },
      {
        question: "What's the best showerhead for low water pressure?",
        answer:
          "High-pressure showerheads and pressure-compensating valves optimize flow. Some perform better than others—we recommend the best options.",
      },
      {
        question: "How do I prevent scalding in my shower?",
        answer:
          "Install a thermostatic mixing valve that limits maximum temperature. This protects young children and elderly family members.",
      },
      {
        question: "Can you upgrade an older shower to modern fixtures?",
        answer:
          "Absolutely! We can adapt older plumbing to modern fixtures and finishes. Most updates work with existing supply lines.",
      },
      {
        question: "What's the most durable shower finish?",
        answer:
          "Brushed nickel and stainless steel resist water spots and corrosion best. Matte black and polished chrome require more maintenance.",
      },
    ],
  },

  "tub-to-shower-conversion": {
    benefits: [
      {
        title: "Increased Accessibility",
        description: "Walk-in showers eliminate stepping over high tub walls, making bathing safer for all ages.",
        icon: "Accessibility",
      },
      {
        title: "Space Efficiency",
        description: "Showers often take less space than tubs, potentially opening up your bathroom layout.",
        icon: "Box",
      },
      {
        title: "Faster Daily Routines",
        description: "Quick showers are ideal for busy families. Conversions cater to modern lifestyles and preferences.",
        icon: "Clock",
      },
      {
        title: "Modern Design & Functionality",
        description: "Contemporary shower systems with luxury fixtures transform your bathing experience.",
        icon: "Sparkles",
      },
    ],
    issues: [
      {
        problem: "Limited bathroom space, making showers feel cramped",
        solution: "Custom corner showers or compact layouts maximize functionality in tight spaces.",
      },
      {
        problem: "Family members miss tub for baths and soaking",
        solution: "Consider combo units or ensure other bathrooms have tubs before converting.",
      },
      {
        problem: "Moisture and water damage from inadequate waterproofing",
        solution: "Professional waterproofing with membranes, proper slope, and drainage prevents damage.",
      },
      {
        problem: "Complex plumbing relocations adding unexpected costs",
        solution: "We assess plumbing during consultation and provide accurate estimates upfront.",
      },
    ],
    tips: [
      {
        title: "Plan Drainage Carefully",
        description: "Shower floors must slope properly toward drains to prevent pooling. Professional installation is essential.",
        icon: "Wind",
      },
      {
        title: "Install Grab Bars for Safety",
        description: "Grab bars in showers prevent slips and provide essential safety for elderly or mobility-limited users.",
        icon: "Shield",
      },
      {
        title: "Choose Anti-Slip Flooring",
        description: "Textured tile or specialized coatings reduce slipping risk in wet shower environments.",
        icon: "AlertTriangle",
      },
      {
        title: "Consider Waterproofing Before Finishing",
        description: "Proper waterproofing membranes protect subfloors from leaks—this investment pays for itself.",
        icon: "Shield",
      },
    ],
    faqs: [
      {
        question: "Is converting a tub to shower a simple project?",
        answer:
          "It depends on plumbing configuration. Simple conversions take 1-2 weeks. Complex relocations take 3-4 weeks. We provide timeline estimates upfront.",
      },
      {
        question: "What happens to the tub opening if I convert to shower?",
        answer:
          "We seal the tub area with a waterproof curb, install proper framing, and build a professional shower. The transition is seamless.",
      },
      {
        question: "Can I add a bench or seat to my converted shower?",
        answer:
          "Yes! Built-in benches, corner seats, or floating shelves provide comfort and functionality. We can customize your shower layout.",
      },
      {
        question: "Will converting my tub to shower affect home resale value?",
        answer:
          "Depends on your area. Showers appeal to young professionals; families prefer tubs. Consider keeping one tub in your home.",
      },
      {
        question: "What's the cost difference between tub and shower?",
        answer:
          "Showers often cost 10-20% less than tub installations. Luxury shower systems can match tub prices. We provide accurate quotes.",
      },
    ],
  },

  "walk-in-showers": {
    benefits: [
      {
        title: "Universal Accessibility Design",
        description: "No steps, wide entry, and grab bars provide safe access for elderly, disabled, and all family members.",
        icon: "Accessibility",
      },
      {
        title: "Open, Spacious Feel",
        description: "Walk-in showers visually open up your bathroom and create a luxurious, spa-like atmosphere.",
        icon: "Wind",
      },
      {
        title: "Wet Room Aesthetic",
        description: "Modern wet rooms blend seamlessly with bathroom design for clean, contemporary looks.",
        icon: "Sparkles",
      },
      {
        title: "Easier Cleaning & Maintenance",
        description: "Open designs with minimal barriers make thorough cleaning quick and effortless.",
        icon: "Clock",
      },
    ],
    issues: [
      {
        problem: "Inadequate waterproofing allowing water to escape into adjoining spaces",
        solution: "Professional waterproofing systems with proper membranes and barriers contain water completely.",
      },
      {
        problem: "Poor drainage causing standing water in shower",
        solution: "Linear drains or properly sloped floors ensure water flows away efficiently.",
      },
      {
        problem: "Inadequate ventilation leading to mold and moisture damage",
        solution: "Proper ventilation systems and exhaust fans remove excess moisture from open showers.",
      },
      {
        problem: "Safety concerns from slippery surfaces",
        solution: "Textured tile, grab bars, and proper lighting create a safe walk-in shower environment.",
      },
    ],
    tips: [
      {
        title: "Install a Linear Drain",
        description: "Linear or trench drains handle water flow better than point drains and look sleek in modern showers.",
        icon: "Wind",
      },
      {
        title: "Use Niche Storage",
        description: "Built-in niches keep shampoo and soap organized without cluttering the floor.",
        icon: "Box",
      },
      {
        title: "Half-Glass Enclosures Work Great",
        description: "Glass dividers contain some water splash while maintaining the open feel of walk-in designs.",
        icon: "Sparkles",
      },
      {
        title: "Large Format Tile Looks Modern",
        description: "12x24 or 24x24 tiles create clean lines and fewer grout joints in walk-in showers.",
        icon: "Ruler",
      },
    ],
    faqs: [
      {
        question: "How do walk-in showers contain water without doors?",
        answer:
          "Proper slope (1/4-1/2 inch per foot) and strategic design guide water toward drains. Some use partial glass for additional containment.",
      },
      {
        question: "What's the minimum size for a walk-in shower?",
        answer:
          "Minimum is typically 4x8 feet for comfort. Smaller spaces work but feel tight. We design to maximize your available space.",
      },
      {
        question: "Are walk-in showers more difficult to waterproof?",
        answer:
          "They require professional waterproofing, but modern systems handle it perfectly. Proper installation ensures leak-free performance.",
      },
      {
        question: "Can I add seating to a walk-in shower?",
        answer:
          "Yes! Built-in benches and fold-down shower seats provide comfort for those who prefer seated showering.",
      },
      {
        question: "Do walk-in showers increase home value?",
        answer:
          "Yes! Walk-in showers appeal to modern buyers and are especially valuable for aging-in-place appeal.",
      },
    ],
  },

  "cabinet-countertop-installation": {
    benefits: [
      {
        title: "Custom Storage Solutions",
        description: "Cabinets designed specifically for your items, habits, and lifestyle maximize functionality.",
        icon: "Box",
      },
      {
        title: "Premium Countertop Materials",
        description: "Quartz, granite, and marble countertops combine beauty, durability, and luxury aesthetics.",
        icon: "Sparkles",
      },
      {
        title: "Improved Workflow & Efficiency",
        description: "Professional kitchen layouts place frequently-used items at optimal heights for easy access.",
        icon: "Zap",
      },
      {
        title: "Significant Home Value Increase",
        description: "Kitchen upgrades add 50-80% ROI when selling and dramatically improve daily living.",
        icon: "TrendingUp",
      },
    ],
    issues: [
      {
        problem: "Inadequate cabinet storage for kitchen items",
        solution: "Add floor-to-ceiling cabinets, pull-out organizers, and custom storage solutions.",
      },
      {
        problem: "Worn, chipped, or outdated countertops",
        solution: "Professional replacement with modern materials that resist staining and damage.",
      },
      {
        problem: "Poor cabinet layout affecting cooking efficiency",
        solution: "Reorganize layout with work triangles, proper lighting, and strategic appliance placement.",
      },
      {
        problem: "Water damage or deterioration of cabinet interiors",
        solution: "Replace damaged cabinets and install proper ventilation and water barriers.",
      },
    ],
    tips: [
      {
        title: "Choose Quartz for Low Maintenance",
        description: "Non-porous quartz never needs sealing, resists stains, and requires only simple cleaning.",
        icon: "Clock",
      },
      {
        title: "Install Under-Mount Lighting",
        description: "Under-cabinet lights improve visibility and create modern ambiance in your kitchen.",
        icon: "Lightbulb",
      },
      {
        title: "Use Soft-Close Drawers",
        description: "Soft-close hardware prevents slamming, extends cabinet life, and provides quiet operation.",
        icon: "Wind",
      },
      {
        title: "Plan Counter Organization",
        description: "Custom dividers and organizers keep countertops clean while maintaining accessibility.",
        icon: "Box",
      },
    ],
    faqs: [
      {
        question: "What's the best kitchen countertop material?",
        answer:
          "Quartz offers best durability and low maintenance. Granite provides luxury but needs sealing. Laminate is budget-friendly. We help match materials to your needs.",
      },
      {
        question: "How long do kitchen cabinets typically last?",
        answer:
          "Quality cabinets last 20+ years. Regular maintenance and avoiding water damage extends lifespan significantly.",
      },
      {
        question: "Can you refinish my existing cabinets instead of replacing them?",
        answer:
          "Yes! Cabinet refinishing is an affordable option if frames are solid. New hardware and paint can transform appearance.",
      },
      {
        question: "What's involved in cabinet and countertop installation?",
        answer:
          "We remove old materials, prepare surfaces, install new cabinets level, set countertops with proper support, and seal edges and joints.",
      },
      {
        question: "How long does cabinet and countertop installation take?",
        answer:
          "Standard kitchen typically takes 1-2 weeks. Complex renovations with plumbing/electrical changes may take 3-4 weeks.",
      },
    ],
  },

  "bathroom-flooring-installation": {
    benefits: [
      {
        title: "Water-Resistant & Durable Flooring",
        description: "Modern flooring materials resist moisture, mold, and are incredibly durable in wet environments.",
        icon: "Shield",
      },
      {
        title: "Slip-Resistant Safety",
        description: "Textured flooring and proper grout composition prevent slips and falls in bathrooms.",
        icon: "AlertTriangle",
      },
      {
        title: "Easy Maintenance & Cleaning",
        description: "Sealed porcelain tile and other modern materials require minimal effort to keep clean.",
        icon: "Clock",
      },
      {
        title: "Design Versatility",
        description: "Endless tile options, patterns, and colors allow complete customization of your bathroom look.",
        icon: "Palette",
      },
    ],
    issues: [
      {
        problem: "Cracked or chipped flooring creating hazards",
        solution: "Professional replacement with durable, slip-resistant flooring prevents injuries.",
      },
      {
        problem: "Water damage and deterioration of subfloors",
        solution: "Remove damaged flooring, repair subfloor, and install proper waterproofing before new flooring.",
      },
      {
        problem: "Mold and mildew growth in grout lines",
        solution: "Epoxy grout and proper sealing prevent mold naturally and resist moisture.",
      },
      {
        problem: "Outdated or stained flooring affecting bathroom appearance",
        solution: "Modern tile and stone flooring completely transforms your bathroom aesthetic.",
      },
    ],
    tips: [
      {
        title: "Porcelain Tile is Best for Bathrooms",
        description: "Non-porous porcelain won't absorb water or harbor mold, making it ideal for wet areas.",
        icon: "Shield",
      },
      {
        title: "Use Large Format Tiles",
        description: "12x24 or 24x24 tiles have fewer grout lines, making cleaning easier and showers more waterproof.",
        icon: "Wind",
      },
      {
        title: "Epoxy Grout Outperforms Cement",
        description: "Epoxy grout resists mold, staining, and moisture much better than standard cement grout.",
        icon: "Sparkles",
      },
      {
        title: "Heated Floors Add Luxury",
        description: "Radiant floor heating provides comfort and helps prevent mold by drying floors quickly.",
        icon: "Zap",
      },
    ],
    faqs: [
      {
        question: "What's the best flooring option for wet bathrooms?",
        answer:
          "Porcelain tile is best—it's non-porous and resists mold. Large-format tiles with epoxy grout provide superior waterproofing.",
      },
      {
        question: "How do you prevent water from seeping through flooring?",
        answer:
          "Professional waterproofing membranes under flooring, proper slope toward drains, and sealed grout prevent water infiltration.",
      },
      {
        question: "Can you install heated floors in a bathroom?",
        answer:
          "Yes! Radiant heating under tiles provides warmth and helps floors dry faster. Installation requires planning during remodel.",
      },
      {
        question: "How long does bathroom flooring installation take?",
        answer:
          "Standard bathroom flooring takes 3-5 days depending on size and complexity. Curing time adds another 2-3 days before use.",
      },
      {
        question: "What pattern options are available for bathroom tile?",
        answer:
          "Subway, herringbone, geometric, hexagon, and large-format options available. We help choose patterns that suit your design.",
      },
    ],
  },

  "bathroom-lighting-installation": {
    benefits: [
      {
        title: "Professional Layered Lighting Design",
        description: "Combination of ambient, task, and accent lighting creates depth and eliminates shadows.",
        icon: "Lightbulb",
      },
      {
        title: "Energy-Efficient LED Technology",
        description: "Modern LEDs use 75% less energy than incandescent bulbs and last 25,000+ hours.",
        icon: "Zap",
      },
      {
        title: "Improved Grooming & Mirror Visibility",
        description: "Proper vanity lighting eliminates unflattering shadows for better makeup and shaving.",
        icon: "Mirror",
      },
      {
        title: "Smart Lighting Control",
        description: "Dimmers, sensors, and smart controls let you adjust lighting for any mood or task.",
        icon: "Sparkles",
      },
    ],
    issues: [
      {
        problem: "Dark, shadowy bathrooms making grooming difficult",
        solution: "Layered lighting design with overhead, vanity, and accent lights brightens spaces.",
      },
      {
        problem: "Inadequate electrical support for new lighting",
        solution: "Professional electrical assessment ensures proper circuit sizing and safety.",
      },
      {
        problem: "Poor quality lighting highlighting skin imperfections",
        description: "Vanity lights positioned correctly provide flattering, shadow-free illumination.",
      },
      {
        problem: "High electric bills from inefficient lighting",
        solution: "LED upgrades reduce energy consumption and lower monthly utility costs significantly.",
      },
    ],
    tips: [
      {
        title: "Mount Vanity Lights at Eye Level",
        description: "Lights positioned at 65-75 inches above floor provide optimal illumination for grooming.",
        icon: "Ruler",
      },
      {
        title: "Use 3000K Color Temperature",
        description: "Warm white (3000K) LED light is flattering for skin tone and creates relaxing ambiance.",
        icon: "Lightbulb",
      },
      {
        title: "Add Dimmer Controls",
        description: "Dimmers let you adjust lighting for different times of day and create spa-like atmosphere.",
        icon: "Zap",
      },
      {
        title: "Install Ventilation Fans with Lights",
        description: "Combination fan-light units save space while providing ventilation and illumination.",
        icon: "Wind",
      },
    ],
    faqs: [
      {
        question: "What's the ideal bathroom lighting setup?",
        answer:
          "Layer overhead ambient light, vanity task lighting (on sides of mirrors), and accent lighting for a balanced design.",
      },
      {
        question: "How do I eliminate harsh shadows in my bathroom mirror?",
        answer:
          "Position lights on both sides of mirror at 36 inches apart and 65-75 inches high for shadowless illumination.",
      },
      {
        question: "Should I use LED or traditional bulbs?",
        answer:
          "LEDs are superior—they're energy-efficient, last 25x longer, run cooler, and provide better light quality.",
      },
      {
        question: "Can I install dimmer switches in a bathroom?",
        answer:
          "Yes! Dimmers work great in bathrooms and allow you to adjust light levels for different times of day.",
      },
      {
        question: "Is bathroom lighting installation complicated?",
        answer:
          "It requires electrical work, so hire a licensed electrician. Installation typically takes 1-2 hours per fixture.",
      },
    ],
  },

  "tub-removal": {
    benefits: [
      {
        title: "Reclaimed Bathroom Space",
        description: "Removing a tub frees up valuable floor space for walk-in showers or other fixtures.",
        icon: "Box",
      },
      {
        title: "Reduced Water & Utility Costs",
        description: "Removing hot tub water usage reduces monthly water and heating bills significantly.",
        icon: "DollarSign",
      },
      {
        title: "Easier Accessibility",
        description: "No tub rim means safer entry for elderly family members and those with mobility concerns.",
        icon: "Accessibility",
      },
      {
        title: "Modern Bathroom Aesthetic",
        description: "Open floor plans with walk-in showers create contemporary, spa-like bathroom designs.",
        icon: "Sparkles",
      },
    ],
    issues: [
      {
        problem: "Taking up too much space in small bathrooms",
        solution: "Remove tub and maximize space with efficient shower design or additional storage.",
      },
      {
        problem: "Heavy tub requiring specialized removal equipment",
        solution: "Professional removal teams safely extract tubs without damaging surrounding areas.",
      },
      {
        problem: "Plumbing and structural issues when removing tub",
        solution: "We assess plumbing, handle disconnections, and repair substrate properly.",
      },
      {
        problem: "Uncertainty about what to do with removed space",
        solution: "We design replacement features—showers, storage, or additional layout space.",
      },
    ],
    tips: [
      {
        title: "Plan Replacement Design Before Removal",
        description: "Determine what replaces the tub before removal to maximize space efficiency.",
        icon: "Palette",
      },
      {
        title: "Consider Plumbing Modifications",
        description: "Tub removal frees plumbing that can be redirected for new shower configurations.",
        icon: "Wind",
      },
      {
        title: "Repair Subfloor if Damaged",
        description: "Inspect subfloor during removal and repair any water damage before installing new features.",
        icon: "Shield",
      },
      {
        title: "Keep One Tub for Families",
        description: "In multi-bathroom homes, removing one tub is fine if another remains for bathing.",
        icon: "Droplets",
      },
    ],
    faqs: [
      {
        question: "How is a tub safely removed?",
        answer:
          "We drain the tub, disconnect plumbing, cut away caulk and trim, and carefully extract it. Most tubs weigh 200-400 lbs.",
      },
      {
        question: "Can tub removal be done in one day?",
        answer:
          "Yes, removal alone takes 2-4 hours. If repairs or new installations follow, add 1-2 days.",
      },
      {
        question: "What happens to the plumbing after tub removal?",
        answer:
          "We cap off unused pipes and redirect plumbing as needed for your replacement design.",
      },
      {
        question: "Does tub removal require permits?",
        answer:
          "Generally no for removal alone. If you're adding new fixtures, permits may be required for electrical/plumbing work.",
      },
      {
        question: "How much does tub removal cost?",
        answer:
          "Removal alone typically costs $500-1,500 depending on difficulty. Replacement design and installation add additional costs.",
      },
    ],
  },
};
