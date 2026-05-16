import type { Metadata } from "next";
import { AboutPage } from "@/components/TyvSite";

export const metadata: Metadata = {
  title: "About Christina",
  description:
    "Meet Christina Landry, energeticist and energy alchemist behind Tune Vibration Energy Healing.",
  alternates: {
    canonical: "/about-christina",
  },
};

export default function Page() {
  return <AboutPage />;
}
