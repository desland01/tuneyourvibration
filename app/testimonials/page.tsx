import type { Metadata } from "next";
import { TestimonialsPage } from "@/components/TyvSite";

export const metadata: Metadata = {
  title: "Reviews and Testimonials",
  description:
    "Client review themes for Tune Vibration Energy Healing, including emotional release, energetic clarity, calm, and intuitive support.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function Page() {
  return <TestimonialsPage />;
}
