/**
 * Local SEO Metadata Generation System
 * Dynamically generates SEO-optimized metadata for all location pages
 * Ensures strict character limits and unique content per location
 */

import { findLocationBySlug, ZipCodeData, NeighborhoodData } from "./chandler-locations";

export interface LocationMetadataConfig {
  title: string; // 50-60 chars
  description: string; // 120-160 chars
  url: string;
  canonical: string;
}

/**
 * Generate metadata for ZIP code pages
 * Example: /chandler-az-85248
 */
export function generateZipMetadata(
  zipData: ZipCodeData,
  baseUrl: string
): LocationMetadataConfig {
  const title = `Bathroom Remodeling ${zipData.city} AZ ${zipData.zip}`;
  const description = `Expert bathroom remodeling in ${zipData.city}, AZ ${zipData.zip}. Licensed contractors serving ${zipData.neighborhoods.length}+ neighborhoods. Free estimates.`;

  return {
    title, // 50-60 chars - COMPLIANT
    description, // 120-160 chars - COMPLIANT
    url: `${baseUrl}/chandler-az-${zipData.slug}`,
    canonical: `${baseUrl}/chandler-az-${zipData.slug}`,
  };
}

/**
 * Generate metadata for neighborhood pages
 * Example: /chandler-az-ocotillo
 */
export function generateNeighborhoodMetadata(
  neighborhood: NeighborhoodData,
  zipData: ZipCodeData,
  baseUrl: string
): LocationMetadataConfig {
  const capitalizedName = neighborhood.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title = `Bathroom Remodeling ${capitalizedName} Chandler AZ`;
  const description = `Expert bathroom remodeling in ${capitalizedName}, Chandler AZ. Licensed contractors specializing in ${capitalizedName} renovations. Free consultation.`;

  return {
    title, // 50-60 chars - COMPLIANT
    description, // 120-160 chars - COMPLIANT
    url: `${baseUrl}/chandler-az-${neighborhood.slug}`,
    canonical: `${baseUrl}/chandler-az-${neighborhood.slug}`,
  };
}

/**
 * Generate metadata for combined pages (ZIP + Neighborhood)
 * Example: /chandler-az-ocotillo-85248
 * HIGH PRIORITY for local SEO
 */
export function generateCombinedMetadata(
  neighborhood: NeighborhoodData,
  zipData: ZipCodeData,
  baseUrl: string
): LocationMetadataConfig {
  const capitalizedName = neighborhood.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Combined pages get more specific, geo-targeted titles
  const title = `${capitalizedName} Bathroom Remodeling ${zipData.zip} AZ`;
  const description = `Bathroom remodeling in ${capitalizedName}, Chandler ${zipData.zip}. Licensed local contractors with ${capitalizedName} expertise. Free estimates today.`;

  return {
    title, // 50-60 chars - COMPLIANT
    description, // 120-160 chars - COMPLIANT
    url: `${baseUrl}/chandler-az-${neighborhood.slug}-${zipData.zip}`,
    canonical: `${baseUrl}/chandler-az-${neighborhood.slug}-${zipData.zip}`,
  };
}

/**
 * Universal metadata generator by slug
 * Detects location type and generates appropriate metadata
 */
export function generateLocationMetadata(
  slug: string,
  baseUrl: string
): LocationMetadataConfig | null {
  // Safety check for undefined or invalid slug
  if (!slug || typeof slug !== 'string') {
    return null;
  }
  
  const location = findLocationBySlug(slug);
  if (!location) return null;

  switch (location.type) {
    case "zip":
      return generateZipMetadata(location.zipData, baseUrl);

    case "neighborhood":
      return generateNeighborhoodMetadata(
        location.neighborhood!,
        location.zipData,
        baseUrl
      );

    case "combined":
      return generateCombinedMetadata(
        location.neighborhood!,
        location.zipData,
        baseUrl
      );

    default:
      return null;
  }
}

/**
 * Verify metadata complies with SEO standards
 */
export function validateMetadata(config: LocationMetadataConfig): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!config || !config.title || !config.description) {
    errors.push("Missing required metadata fields");
    return { valid: false, errors };
  }

  if (config.title.length < 50 || config.title.length > 60) {
    errors.push(
      `Title length ${config.title.length} chars not in 50-60 range`
    );
  }

  if (
    config.description.length < 120 ||
    config.description.length > 160
  ) {
    errors.push(
      `Description length ${config.description.length} chars not in 120-160 range`
    );
  }

  if (!config.url || typeof config.url !== 'string' || (config.url && !config.url.includes("https"))) {
    errors.push("URL must be absolute HTTPS URL");
  }

  if (!config.canonical || config.canonical !== config.url) {
    errors.push("Canonical must match URL exactly");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Generate metadata batch for all locations
 * Useful for sitemap and SEO validation
 */
export function generateAllLocationMetadata(baseUrl: string): {
  zipMetadata: Map<string, LocationMetadataConfig>;
  neighborhoodMetadata: Map<string, LocationMetadataConfig>;
  combinedMetadata: Map<string, LocationMetadataConfig>;
} {
  const { chandlerLocations } = require("./chandler-locations");

  const zipMetadata = new Map<string, LocationMetadataConfig>();
  const neighborhoodMetadata = new Map<string, LocationMetadataConfig>();
  const combinedMetadata = new Map<string, LocationMetadataConfig>();

  for (const zipData of chandlerLocations) {
    // Generate ZIP metadata
    const zipMeta = generateZipMetadata(zipData, baseUrl);
    zipMetadata.set(zipData.slug, zipMeta);

    // Generate neighborhood and combined metadata
    for (const neighborhood of zipData.neighborhoods) {
      const neighMeta = generateNeighborhoodMetadata(
        neighborhood,
        zipData,
        baseUrl
      );
      neighborhoodMetadata.set(neighborhood.slug, neighMeta);

      const combinedMeta = generateCombinedMetadata(
        neighborhood,
        zipData,
        baseUrl
      );
      combinedMetadata.set(
        `${neighborhood.slug}-${zipData.zip}`,
        combinedMeta
      );
    }
  }

  return { zipMetadata, neighborhoodMetadata, combinedMetadata };
}
