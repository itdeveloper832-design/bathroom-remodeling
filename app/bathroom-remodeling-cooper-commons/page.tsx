import type { Metadata } from "next";
import DedicatedAreaPage, {
  getDedicatedAreaMetadata,
} from "@/components/neighborhood/dedicated-area-page";

const PATH = "/bathroom-remodeling-cooper-commons/";
const SLUG = "cooper-commons";

const meta = getDedicatedAreaMetadata(SLUG, PATH)!;

export const metadata: Metadata = {title: {
    absolute: "Cooper Commons Bath | Chandler AZ Bathroom Remodeling"
  },description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore cooper commons bath, custom showers, tile, vanities, clear pricing, and free estimates.",
  alternates: { canonical: meta.canonical },
  openGraph: {title: "Cooper Commons Bath | Chandler AZ Bathroom Remodeling",description: "Bathroom remodeling service in Chandler, AZ by ARZ. Explore cooper commons bath, custom showers, tile, vanities, clear pricing, and free estimates.",
    url: meta.canonical,
    type: "website",
  },
};

export default function CooperCommonsPage() {
  return <DedicatedAreaPage areaSlug={SLUG} path={PATH} />;
}
