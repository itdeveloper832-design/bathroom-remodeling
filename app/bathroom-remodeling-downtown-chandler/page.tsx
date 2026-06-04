import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-downtown-chandler/";
const SLUG = "downtown-chandler";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {
  title: "Bathroom Remodeling Downtown Chandler Chandler AZ | Free Est",
  description: "Professional bathroom remodeling downtown chandler in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: "Bathroom Remodeling Downtown Chandler Chandler AZ | Free Est",
    description: "Professional bathroom remodeling downtown chandler in Chandler, AZ. Quality craftsmanship, honest pricing, and free estimates. Call today.",
    url: meta.canonical,
    type: "website",
  },
};

export default function DowntownChandlerPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
