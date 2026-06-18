import type { Metadata } from "next";
import { FaqContent } from "@/components/FaqContent";

export const metadata: Metadata = {
  title: "FAQ — OneWayAir",
  description: "Shipping, sizing, returns, and restocks. Everything you need to know about the OneWayAir drop.",
};

export default function FaqPage() {
  return <FaqContent />;
}
