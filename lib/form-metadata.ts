export interface FormMetadata {
  sourceUrl: string;
  referrer: string;
  userAgent: string;
}

export function getFormMetadata(): FormMetadata {
  if (typeof window === "undefined") {
    return { sourceUrl: "", referrer: "", userAgent: "" };
  }
  return {
    sourceUrl: window.location.href,
    referrer: document.referrer || "",
    userAgent: navigator.userAgent,
  };
}
