import type { ZipCodeData } from "@/lib/chandler-locations";

export function getZipHubFaqs(zipData: ZipCodeData) {
  const hoodNames = zipData.neighborhoods.map((n) => n.name).join(", ");
  return [
    {
      question: `Do you serve all neighborhoods in ZIP ${zipData.zip}?`,
      answer: `Yes. We remodel bathrooms throughout ZIP ${zipData.zip} in Chandler, including ${hoodNames}. Each neighborhood has different home styles and HOA rules; we tailor materials and scheduling to your property.`,
    },
    {
      question: `How much does a bathroom remodel cost in ${zipData.zip}?`,
      answer: `In ZIP ${zipData.zip}, guest bath updates and tub-to-shower conversions vary based on the selected tile, layout complexity, and plumbing moves. Master suite transformations in premium developments are custom tailored to your specifications. We offer free consultations to provide detailed, line-item written estimates.`,
    },
    {
      question: `How long does a remodel take in the ${zipData.zip} area?`,
      answer: `Most guest baths take about 2–3 weeks of construction. Tub-to-shower projects are often 3–5 days after demolition. Larger master baths in ${zipData.zip} can take 4–6 weeks when layout changes are involved.`,
    },
    {
      question: `What bathroom upgrades are most common in ZIP ${zipData.zip}?`,
      answer: zipData.neighborhoods[0]?.marketInsight
        ? `Common requests in this ZIP include tub-to-shower conversions, epoxy grout for hard water, and updated master vanities. ${zipData.neighborhoods[0].marketInsight.split(".")[0]}.`
        : `Homeowners in this ZIP often replace garden tubs with walk-in showers, upgrade to porcelain tile, and improve ventilation for daily family use.`,
    },
  ];
}
