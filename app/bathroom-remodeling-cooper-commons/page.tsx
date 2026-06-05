import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-cooper-commons/";
const SLUG = "cooper-commons";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {
  title: "Bathroom Remodeling Cooper Commons | Free Estimate",
  description: "Upgrade your bathroom in Cooper Commons with custom remodeling solutions, expert craftsmanship, and competitive pricing.",
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: "Bathroom Remodeling Cooper Commons Chandler AZ | Free Estima",
    description: "Professional bathroom remodeling cooper commons in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
    url: meta.canonical,
    type: "website",
  },
};

export default function CooperCommonsPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
