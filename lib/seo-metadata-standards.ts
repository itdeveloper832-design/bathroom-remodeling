export const SEO_TITLE_MIN = 52;
export const SEO_TITLE_MAX = 58;
export const SEO_DESCRIPTION_MIN = 125;
export const SEO_DESCRIPTION_MAX = 155;

const TITLE_SUFFIX = "Chandler AZ Bathroom Remodeling";
const FALLBACK_DESCRIPTION =
  "Bathroom remodeling service in Chandler, AZ by ARZ. Explore custom showers, tile, vanities, clear pricing, licensed crews, and free estimates.";

function cleanSubject(subject: string): string {
  return subject
    .replace(/[-_/]+/g, " ")
    .replace(/\bAZ\b/gi, "AZ")
    .replace(/\bADA\b/gi, "ADA")
    .replace(/\bADU\b/gi, "ADU")
    .replace(/\s+/g, " ")
    .trim();
}

function titleCase(subject: string): string {
  return cleanSubject(subject)
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bAz\b/g, "AZ")
    .replace(/\bAda\b/g, "ADA")
    .replace(/\bAdu\b/g, "ADU");
}

export function fitSeoSubject(subject: string): string {
  let next = titleCase(subject || "Bathroom Remodel Services")
    .replace(/Bathroom Remodeling/g, "Bath Remodel")
    .replace(/Bathroom Remodel/g, "Bath Remodel")
    .replace(/Installation/g, "Install")
    .replace(/Construction/g, "Build")
    .replace(/Conversion/g, "Convert")
    .replace(/Contractor/g, "Pros");

  if (next.length < 16) next = `${next} Services`;
  if (next.length < 16) next = `${next} Experts`;

  if (next.length > 26) {
    next = next.slice(0, 26).trim().replace(/\s+\S*$/, "");
  }

  if (next.length < 16) next = `${next} Experts`;
  if (next.length > 26) next = next.slice(0, 26).trim();

  return next;
}

export function createSeoTitle(subject: string): string {
  const fittedSubject = fitSeoSubject(subject);
  let title = `${fittedSubject} | ${TITLE_SUFFIX}`;

  if (title.length < SEO_TITLE_MIN) {
    title = `${fitSeoSubject(`${fittedSubject} Experts`)} | ${TITLE_SUFFIX}`;
  }

  if (title.length > SEO_TITLE_MAX) {
    title = `${fitSeoSubject(fittedSubject.replace(/ Services$/, ""))} | ${TITLE_SUFFIX}`;
  }

  if (title.length < SEO_TITLE_MIN || title.length > SEO_TITLE_MAX) {
    return `Licensed Bath Remodelers | ${TITLE_SUFFIX}`;
  }

  return title;
}

export function createSeoDescription(subject: string): string {
  const fittedSubject = fitSeoSubject(subject).toLowerCase();
  let description = `Bathroom remodeling service in Chandler, AZ by ARZ. Explore ${fittedSubject}, custom showers, tile, vanities, clear pricing, and free estimates.`;

  if (description.length > SEO_DESCRIPTION_MAX) {
    description = `Bathroom remodeling service in Chandler, AZ by ARZ. Explore ${fittedSubject}, custom showers, tile, vanities, clear pricing, and estimates.`;
  }

  if (
    description.length < SEO_DESCRIPTION_MIN ||
    description.length > SEO_DESCRIPTION_MAX
  ) {
    return FALLBACK_DESCRIPTION;
  }

  return description;
}

export function validateSeoMetadata(title: string, description: string): boolean {
  return (
    title.length >= SEO_TITLE_MIN &&
    title.length <= SEO_TITLE_MAX &&
    description.length >= SEO_DESCRIPTION_MIN &&
    description.length <= SEO_DESCRIPTION_MAX
  );
}
