import type { Metadata } from "next";
import { CatalogContent } from "@/components/CatalogContent";

export const metadata: Metadata = {
  title: "Catalog — OneWayAir",
  description: "Shop the Collection. Limited dry-fit drops built for the One Way crew.",
};

export default function CatalogPage() {
  return <CatalogContent />;
}
