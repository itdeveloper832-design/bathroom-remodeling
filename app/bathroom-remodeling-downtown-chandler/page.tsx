import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-downtown-chandler/";
const SLUG = "downtown-chandler";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.canonical },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.canonical,
    type: "website",
  },
};

export default function DowntownChandlerPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
