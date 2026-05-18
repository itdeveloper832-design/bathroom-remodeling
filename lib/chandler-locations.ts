/**
 * Chandler, Arizona Location Data Source
 * Comprehensive ZIP code + neighborhood mapping for scalable local SEO
 * Supports dynamic page generation for 100+ locations
 */

export interface NeighborhoodData {
  name: string; // Neighborhood name
  slug: string; // URL-friendly slug
  zipCode: string; // Primary ZIP code
  description: string; // Unique neighborhood characteristic
  marketInsight: string; // Local market insight
  homeStylesCommon: string[]; // Common home styles in area
  customerBehavior: string; // How customers in this area typically behave
  localContext: string; // Unique local context
}

export interface ZipCodeData {
  zip: string; // ZIP code
  slug: string; // URL-friendly slug (e.g., 85248)
  city: string; // City name
  description: string; // ZIP code area description
  neighborhoods: NeighborhoodData[]; // Neighborhoods within ZIP
}

/**
 * Complete Chandler location database
 * Organized by ZIP code with neighborhood data
 */
export const chandlerLocations: ZipCodeData[] = [
  {
    zip: "85248",
    slug: "85248",
    city: "Chandler",
    description:
      "Southwest Chandler featuring premium planned communities, lush golf courses, and gorgeous waterfront residential properties.",
    neighborhoods: [
      {
        name: "Ocotillo",
        slug: "ocotillo",
        zipCode: "85248",
        description:
          "Exclusive luxury community in southwest Chandler, famous for its upscale golf course, beautiful lakes, and high end waterfront properties.",
        marketInsight:
          "Affluent market with strong demand for master bathroom upgrades. Popular choices include frameless heavy glass showers, dual vanity reconfigurations, and luxury freestanding soaking tubs. Project budgets range from twenty five thousand to seventy five thousand dollars.",
        homeStylesCommon: [
          "Spanish Colonial Revival",
          "Mediterranean Villa",
          "Contemporary Desert Modern",
          "Transitional"
        ],
        customerBehavior:
          "Homeowners prioritize premium non porous porcelain tile, stain resistant epoxy grout, and hydrophobic nano coated glass to protect against local hard water mineral scale.",
        localContext:
          "Ocotillo surrounds the Ocotillo Golf Club, near Dobson Road and Queen Creek Road, just minutes from Hamilton High School and the Fulton Ranch Towne Center."
      },
      {
        name: "Fulton Ranch",
        slug: "fulton-ranch",
        zipCode: "85248",
        description:
          "Master planned residential community in southwest Chandler, featuring multi million dollar lakefront estates and spacious executive homes.",
        marketInsight:
          "Prestigious market with a focus on custom home modernization and luxury master bath renovations. Homeowners seek open walk in showers with dual shower head plumbing loops. Budgets average thirty thousand to sixty thousand dollars.",
        homeStylesCommon: ["Southwestern Executive", "Contemporary Modern", "Craftsman Estate"],
        customerBehavior:
          "Homeowners value high capacity digital shower valves, modern back lit mirrors, and floating quartz topped double vanities with quiet soft close hardware.",
        localContext:
          "Fulton Ranch is located along Arizona Avenue and Ocotillo Road, close to the beautiful Fulton Ranch Towne Center and Arizona College Prep."
      },
      {
        name: "Arden Park",
        slug: "arden-park",
        zipCode: "85248",
        description:
          "Established gated community in southwest Chandler, famous for its lush green trees, spacious family homes, and scenic neighborhood park with a lake.",
        marketInsight:
          "Stable neighborhood with consistent demand for full bathroom updates, tub to shower conversions, and flooring replacements. Average remodel budgets range from fifteen thousand to thirty five thousand dollars.",
        homeStylesCommon: ["Traditional Ranch", "Neo Traditional Suburban", "Modern Craftsman"],
        customerBehavior:
          "Homeowners seek durable, easy to clean materials that withstand active family life, including large format porcelain tile and quiet ventilation systems.",
        localContext:
          "Arden Park is situated near Dobson Road and Ocotillo Road, close to Hamilton High School and Tumbleweed Park, offering a peaceful residential setting."
      }
    ]
  },
  {
    zip: "85249",
    slug: "85249",
    city: "Chandler",
    description:
      "Central and southeast Chandler, characterized by highly desirable family neighborhoods, excellent local schools, and new custom residential developments.",
    neighborhoods: [
      {
        name: "Circle G",
        slug: "circle-g",
        zipCode: "85249",
        description:
          "Prestigious luxury custom home community in central Chandler, featuring large estate sized lots, custom horse properties, and premium custom residences.",
        marketInsight:
          "High net worth market with focus on custom architectural designs and luxury master suite transformations. Homeowners invest forty thousand to eighty thousand dollars in high end bathroom remodeling.",
        homeStylesCommon: ["Custom Contemporary", "Mediterranean Ranch", "Modern Farmhouse"],
        customerBehavior:
          "Clients select premium natural stone tiling, walk in steam showers, digital shower control systems, and solid hardwood custom double vanities.",
        localContext:
          "Circle G is located near Cooper Road and Lindsay Road, close to the Tumbleweed Park Recreation Center and Basha High School."
      },
      {
        name: "Riggs Ranch",
        slug: "riggs-ranch",
        zipCode: "85249",
        description:
          "Highly sought after residential community in southeast Chandler, featuring spacious single family homes and quiet, well maintained streets.",
        marketInsight:
          "Family oriented neighborhood with high demand for dual sink vanity upgrades, tub to shower safety conversions, and guest bathroom updates. Average budgets range from ten thousand to twenty five thousand dollars.",
        homeStylesCommon: ["Contemporary Southwestern", "Transitional Family", "Modern Ranch"],
        customerBehavior:
          "Homeowners prioritize water efficient EPA WaterSense certified low flow faucets and toilets to reduce utility bills while maintaining excellent pressure.",
        localContext:
          "Riggs Ranch is located near Riggs Road and Cooper Road, close to Basha High School and Riggs Elementary School."
      },
      {
        name: "Sun Groves",
        slug: "sun-groves",
        zipCode: "85249",
        description:
          "Scenic master planned community in southeast Chandler, nestled near the base of the San Tan Mountains, famous for its beautiful parks and trails.",
        marketInsight:
          "Environmentally conscious market with strong interest in eco friendly remodeling, water conservation, and durable materials. Average budgets range from ten thousand to twenty thousand dollars.",
        homeStylesCommon: ["Desert Contemporary", "Sustainable Modern", "Transitional Suburban"],
        customerBehavior:
          "Homeowners select sustainable materials, VOC free finishes, high efficiency LED lighting, and low flow shower heads.",
        localContext:
          "Sun Groves is situated near Riggs Road and Basha Road, just south of Basha High School and the Sun Groves community park."
      }
    ]
  },
  {
    zip: "85224",
    slug: "85224",
    city: "Chandler",
    description:
      "North central Chandler, offering established residential neighborhoods, mature desert landscaping, and highly convenient access to local shopping and dining.",
    neighborhoods: [
      {
        name: "Warner Ranch",
        slug: "warner-ranch",
        zipCode: "85224",
        description:
          "Large, highly desirable master planned community featuring gorgeous family neighborhoods, greenbelt parks, and excellent local schools.",
        marketInsight:
          "Active family market with high demand for kid friendly double vanities, low maintenance tub and shower surrounds, and modern plumbing updates. Budgets range from ten thousand to twenty thousand dollars.",
        homeStylesCommon: ["Southwestern Suburban", "Mediterranean Family", "Contemporary Ranch"],
        customerBehavior:
          "Families look for stain resistant grout, easy to clean quartz countertops, and durable plywood cabinets that resist water damage.",
        localContext:
          "Warner Ranch spans across Warner Road and Kyrene Road, bordering Tempe, close to Corona del Sol High School and Kyrene de la Mariposa School."
      },
      {
        name: "Dobson Place",
        slug: "dobson-place",
        zipCode: "85224",
        description:
          "Established and quiet residential community in north central Chandler, popular for its tree lined streets and well maintained single family homes.",
        marketInsight:
          "Homeowners seeking to modernize older builder grade bathrooms with walk in tile showers, modern lighting, and quiet ventilation. Average budgets range from ten thousand to eighteen thousand dollars.",
        homeStylesCommon: ["Traditional Family", "Transitional Ranch", "Southwestern"],
        customerBehavior:
          "Clients value solid craftsmanship, clear timelines, and functional storage options like recessed medicine cabinets and linen shelves.",
        localContext:
          "Dobson Place is located near Dobson Road and Warner Road, just minutes from the Dobson Ranch Golf Course and local retail centers."
      }
    ]
  },
  {
    zip: "85225",
    slug: "85225",
    city: "Chandler",
    description:
      "Central Chandler, encompassing the historic downtown cultural district, vibrant local parks, and a mix of historic bungalows and suburban neighborhoods.",
    neighborhoods: [
      {
        name: "Downtown Chandler",
        slug: "downtown-chandler",
        zipCode: "85225",
        description:
          "Historic and urban core of Chandler, blending historic bungalows, Craftsman cottages, and modern urban townhomes within walking distance of dining.",
        marketInsight:
          "Vibrant market seeking sensitive historic preservation mixed with modern plumbing, subfloor leveling, and space saving layouts. Budgets run ten thousand to twenty eight thousand dollars.",
        homeStylesCommon: ["Historic Bungalow", "Urban Loft", "Craftsman Cottage", "Modern Minimalist"],
        customerBehavior:
          "Clients value period appropriate hex tile, subway tile, clawfoot tubs, PEX plumbing upgrades, and smart space saving floating vanities.",
        localContext:
          "Downtown Chandler surrounds Dr. A.J. Chandler Park and Arizona Avenue, close to Chandler High School and the Crowne Plaza San Marcos Resort."
      },
      {
        name: "Clemente Ranch",
        slug: "clemente-ranch",
        zipCode: "85225",
        description:
          "Highly popular, mature residential community in central Chandler, featuring tree lined streets and spacious single family homes.",
        marketInsight:
          "Consistent demand for master bath modernization, tub to shower safety conversions, and tile flooring upgrades. Average budgets range from twelve thousand to thirty thousand dollars.",
        homeStylesCommon: ["Transitional Suburban", "Contemporary Southwestern", "Traditional Family"],
        customerBehavior:
          "Practical homeowners focus on durably sealed tile shower enclosures, quiet exhaust fans, and water saving EPA WaterSense plumbing fixtures.",
        localContext:
          "Clemente Ranch is situated near Alma School Road and Germann Road, close to Dobson Road and the local Clemente Park."
      }
    ]
  },
  {
    zip: "85226",
    slug: "85226",
    city: "Chandler",
    description:
      "Northwest Chandler, encompassing the highly active Kyrene Corridor and the exclusive Stellar Airpark community, bordering Tempe and Phoenix.",
    neighborhoods: [
      {
        name: "Kyrene Corridor",
        slug: "kyrene-corridor",
        zipCode: "85226",
        description:
          "Desirable mixed use corridor in northwest Chandler, featuring modern residential neighborhoods and convenient commercial access.",
        marketInsight:
          "Tech professional demographic with strong interest in smart home automation, digital shower valves, and modern floating vanity designs. Budgets range from fifteen thousand to thirty five thousand dollars.",
        homeStylesCommon: ["Contemporary Modern", "Transitional Tech Suburban", "Minimalist"],
        customerBehavior:
          "Homeowners prioritize sleek European style cabinets, large format porcelain slabs, and voice controlled smart bathroom mirrors.",
        localContext:
          "Kyrene Corridor runs along Kyrene Road and Ray Road, close to Kyrene de la Mirada School and the Intel Ocotillo campus."
      },
      {
        name: "Stellar Airpark",
        slug: "stellar-airpark",
        zipCode: "85226",
        description:
          "Unique and exclusive aviation focused community in northwest Chandler, featuring luxury custom estates with private airplane hangars.",
        marketInsight:
          "Affluent custom home market seeking luxury master suite renovations, high end steam showers, custom stone slab wall panels, and premium finishes. Budgets range from thirty thousand to eighty thousand dollars.",
        homeStylesCommon: ["Luxury Custom Aviation", "Modern Industrial", "Contemporary Executive"],
        customerBehavior:
          "High net worth clients select custom solid wood vanities, large curbless walk in showers with linear drains, and rainfall shower loops.",
        localContext:
          "Stellar Airpark is located near Chandler Boulevard and McQueen Road, offering direct runway access for local private pilots."
      }
    ]
  }
];

/**
 * Generate all possible location slugs for routing
 * Includes ZIP pages, neighborhood pages, and combined pages
 */
export function generateAllLocationSlugs(): string[] {
  const slugs: string[] = [];

  for (const location of chandlerLocations) {
    // Add ZIP code page
    slugs.push(location.slug);

    // Add neighborhood pages and combined pages
    for (const neighborhood of location.neighborhoods) {
      // Neighborhood-only page: chandler-az-ocotillo
      slugs.push(neighborhood.slug);

      // Combined page: chandler-az-ocotillo-85248 (high priority for SEO)
      slugs.push(`${neighborhood.slug}-${location.zip}`);
    }
  }

  return slugs;
}

/**
 * Find location data by slug
 * Handles ZIP, neighborhood, and combined slugs
 */
export function findLocationBySlug(slug: string | undefined): {
  type: "zip" | "neighborhood" | "combined";
  zipData: ZipCodeData;
  neighborhood?: NeighborhoodData;
} | null {
  // Safety check for undefined or invalid slug
  if (!slug || typeof slug !== 'string' || slug.trim() === '') {
    return null;
  }

  const normalizedSlug = slug.trim();

  // Handle combined slug (e.g., "ocotillo-85248")
  if (normalizedSlug.includes("-") && /\d{5}$/.test(normalizedSlug)) {
    const parts = normalizedSlug.split("-");
    const zip = parts[parts.length - 1];
    const neighborhoodSlug = parts.slice(0, -1).join("-");

    const zipData = chandlerLocations.find((loc) => loc.zip === zip);
    if (!zipData) return null;

    const neighborhood = zipData.neighborhoods.find(
      (n) => n.slug === neighborhoodSlug
    );
    if (!neighborhood) return null;

    return { type: "combined", zipData, neighborhood };
  }

  // Handle neighborhood slug (e.g., "ocotillo")
  for (const zipData of chandlerLocations) {
    const neighborhood = zipData.neighborhoods.find((n) => n.slug === normalizedSlug);
    if (neighborhood) {
      return { type: "neighborhood", zipData, neighborhood };
    }
  }

  // Handle ZIP slug (e.g., "85248")
  const zipData = chandlerLocations.find((loc) => loc.slug === normalizedSlug);
  if (zipData) {
    return { type: "zip", zipData };
  }

  return null;
}

/**
 * Get all neighborhoods in a ZIP code
 */
export function getNeighborhoodsByZip(zip: string): NeighborhoodData[] {
  const zipData = chandlerLocations.find((loc) => loc.zip === zip);
  return zipData ? zipData.neighborhoods : [];
}

/**
 * Get related locations for internal linking
 * Returns same ZIP neighborhoods and similar ZIP codes
 */
export function getRelatedLocations(
  currentZip: string,
  currentNeighborhood?: string
): {
  sameZipNeighborhoods: NeighborhoodData[];
  otherZips: ZipCodeData[];
} {
  const sameZipData = chandlerLocations.find((loc) => loc.zip === currentZip);
  const sameZipNeighborhoods = sameZipData
    ? sameZipData.neighborhoods.filter((n) => n.slug !== currentNeighborhood)
    : [];

  const otherZips = chandlerLocations.filter((loc) => loc.zip !== currentZip);

  return { sameZipNeighborhoods, otherZips };
}

/**
 * Get location by ZIP + neighborhood combination
 */
export function getLocationByZipAndNeighborhood(
  zip: string,
  neighborhoodSlug: string
): NeighborhoodData | null {
  const zipData = chandlerLocations.find((loc) => loc.zip === zip);
  if (!zipData) return null;

  return (
    zipData.neighborhoods.find((n) => n.slug === neighborhoodSlug) || null
  );
}

// Export constants for sitemap generation
export const TOTAL_ZIP_CODES = chandlerLocations.length;
export const TOTAL_NEIGHBORHOODS = chandlerLocations.reduce(
  (sum, loc) => sum + loc.neighborhoods.length,
  0
);
export const TOTAL_COMBINED_PAGES =
  TOTAL_ZIP_CODES + TOTAL_NEIGHBORHOODS + TOTAL_NEIGHBORHOODS;
