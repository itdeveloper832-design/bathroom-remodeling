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
      "Southwest Chandler featuring premium master-planned communities and golf courses",
    neighborhoods: [
      {
        name: "Ocotillo",
        slug: "ocotillo",
        zipCode: "85248",
        description:
          "Exclusive luxury community with resort-style living and scenic desert views",
        marketInsight:
          "High-end market with strong interest in master bathroom upgrades and spa-like features",
        homeStylesCommon: [
          "Spanish Colonial",
          "Mediterranean",
          "Contemporary Desert Modern"
        ],
        customerBehavior:
          "Affluent homeowners prioritize premium finishes, high-end fixtures, and luxury aesthetics",
        localContext:
          "Ocotillo features custom homes on larger lots with emphasis on outdoor living spaces"
      },
      {
        name: "Fulton Ranch",
        slug: "fulton-ranch",
        zipCode: "85248",
        description:
          "Master-planned community with golf course living and spacious homes",
        marketInsight:
          "Golf course community with active retirees seeking accessibility upgrades and aging-in-place solutions",
        homeStylesCommon: ["Southwestern", "Contemporary", "Craftsman"],
        customerBehavior:
          "Mature demographic with interest in accessible, low-maintenance bathroom designs",
        localContext:
          "Fulton Ranch attracts active adults with emphasis on outdoor recreation and community amenities"
      },
      {
        name: "Arden Park",
        slug: "arden-park",
        zipCode: "85248",
        description: "Established residential community with tree-lined streets",
        marketInsight:
          "Stable neighborhood with consistent demand for bathroom updates and home modernization",
        homeStylesCommon: ["Traditional", "Ranch", "Neo-Traditional"],
        customerBehavior:
          "Long-term residents updating homes with modern fixtures and design trends",
        localContext:
          "Arden Park offers mature landscaping and established neighborhood feel appealing to families"
      }
    ]
  },
  {
    zip: "85249",
    slug: "85249",
    city: "Chandler",
    description: "Central Chandler with diverse communities and family neighborhoods",
    neighborhoods: [
      {
        name: "Circle G",
        slug: "circle-g",
        zipCode: "85249",
        description: "Master-planned community with commercial and residential blend",
        marketInsight:
          "Young professional community with focus on modern design and efficiency",
        homeStylesCommon: ["Contemporary", "Modern", "Minimalist"],
        customerBehavior:
          "Tech-savvy homeowners interested in smart bathroom features and energy efficiency",
        localContext:
          "Circle G combines urban living with planned community amenities and walkability"
      },
      {
        name: "Riggs Ranch",
        slug: "riggs-ranch",
        zipCode: "85249",
        description: "Growing residential area with newer construction homes",
        marketInsight:
          "New homeowners performing initial renovations and custom upgrades",
        homeStylesCommon: ["Contemporary", "Transitional", "Modern Farmhouse"],
        customerBehavior:
          "Newer homeowners investing in quality fixtures and personalized designs",
        localContext:
          "Riggs Ranch attracts first-time and move-up buyers seeking newer communities"
      },
      {
        name: "Sun Groves",
        slug: "sun-groves",
        zipCode: "85249",
        description: "Scenic community with nature-inspired landscaping",
        marketInsight:
          "Environmentally-conscious buyers interested in sustainable bathroom materials",
        homeStylesCommon: ["Desert Contemporary", "Eco-Friendly", "Modern"],
        customerBehavior:
          "Sustainability-focused homeowners choosing water-efficient fixtures and eco-materials",
        localContext:
          "Sun Groves emphasizes natural elements and environmental responsibility in community design"
      }
    ]
  },
  {
    zip: "85224",
    slug: "85224",
    city: "Chandler",
    description:
      "Southeast Chandler with established neighborhoods and strong community identity",
    neighborhoods: [
      {
        name: "Warner Ranch",
        slug: "warner-ranch",
        zipCode: "85224",
        description:
          "Large master-planned community with multiple residential villages",
        marketInsight:
          "Diverse demographic seeking various price points in bathroom renovations",
        homeStylesCommon: ["Southwestern", "Mediterranean", "Contemporary"],
        customerBehavior:
          "Variety-seeking buyers interested in both budget-friendly and premium options",
        localContext:
          "Warner Ranch offers multiple neighborhoods with distinct character within single ZIP"
      },
      {
        name: "Dobson Place",
        slug: "dobson-place",
        zipCode: "85224",
        description: "Established neighborhood with strong community character",
        marketInsight:
          "Long-time residents upgrading bathrooms with classic style meets modern function",
        homeStylesCommon: ["Traditional", "Transitional", "Southwestern"],
        customerBehavior:
          "Established homeowners balancing style preferences with modern convenience",
        localContext:
          "Dobson Place retains neighborhood character while embracing contemporary updates"
      }
    ]
  },
  {
    zip: "85225",
    slug: "85225",
    city: "Chandler",
    description: "Central Chandler featuring downtown area and mixed-use development",
    neighborhoods: [
      {
        name: "Downtown Chandler",
        slug: "downtown-chandler",
        zipCode: "85225",
        description: "Historic downtown core with urban living and cultural amenities",
        marketInsight:
          "Urban professionals with interest in modern loft-style bathrooms and minimalist design",
        homeStylesCommon: ["Urban Loft", "Contemporary", "Industrial Modern"],
        customerBehavior:
          "City-living enthusiasts seeking trendy, Instagram-worthy bathroom designs",
        localContext:
          "Downtown Chandler vibrant cultural district with emphasis on modern urban lifestyle"
      },
      {
        name: "Clemente Ranch",
        slug: "clemente-ranch",
        zipCode: "85225",
        description:
          "Transitional neighborhood bridging downtown and suburban living",
        marketInsight:
          "Mixed demographic seeking balanced approach between style and practicality",
        homeStylesCommon: ["Transitional", "Contemporary", "Southwestern"],
        customerBehavior:
          "Practical homeowners blending contemporary style with functional design",
        localContext:
          "Clemente Ranch offers proximity to downtown amenities with neighborhood feel"
      }
    ]
  },
  {
    zip: "85226",
    slug: "85226",
    city: "Chandler",
    description: "North Chandler with emerging communities and modern developments",
    neighborhoods: [
      {
        name: "Kyrene Corridor",
        slug: "kyrene-corridor",
        zipCode: "85226",
        description:
          "Commercial and residential mixed-use corridor along major thoroughfare",
        marketInsight:
          "Business owners and professionals interested in both residential and commercial solutions",
        homeStylesCommon: ["Contemporary", "Modern", "Mixed Commercial"],
        customerBehavior:
          "Cosmopolitan buyers with appreciation for cutting-edge design and functionality",
        localContext:
          "Kyrene Corridor represents Chandler's modern commercial-residential integration"
      },
      {
        name: "Stellar Airpark",
        slug: "stellar-airpark",
        zipCode: "85226",
        description: "Unique airpark community with aviation-enthusiast demographic",
        marketInsight:
          "Affluent aviation enthusiasts with sophisticated design preferences and budgets",
        homeStylesCommon: ["Contemporary", "Modern", "Luxury Custom"],
        customerBehavior:
          "High-net-worth individuals prioritizing quality, uniqueness, and exclusivity",
        localContext:
          "Stellar Airpark attracts aviation enthusiasts seeking unique lifestyle community"
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
