import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact — OneWayAir",
  description: "Questions about the drop, orders, or wholesale? Reach the One Way crew.",
};

export default function ContactPage() {
  return <ContactContent />;
}
