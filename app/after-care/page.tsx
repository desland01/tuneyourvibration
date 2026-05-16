import type { Metadata } from "next";
import { AfterCarePage } from "@/components/TyvSite";

export const metadata: Metadata = {
  title: "After Energy Healing Treatment Care",
  description:
    "After-care guidance for energy healing, sound healing, Reiki, chakra balancing, and aura clearing sessions.",
  alternates: {
    canonical: "/after-care",
  },
};

export default function Page() {
  return <AfterCarePage />;
}
