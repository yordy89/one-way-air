import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Our Story — OneWayAir",
  description:
    "From heating & cooling homes the right way to a streetwear line built for the crew. This is the OneWayAir story.",
};

export default function AboutPage() {
  return <AboutContent />;
}
