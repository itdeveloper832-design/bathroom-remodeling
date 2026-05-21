import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-cooper-commons/";
const SLUG = "cooper-commons";

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

export default function CooperCommonsPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
