import type { Metadata } from "next";
import { BookPage } from "@/components/TyvSite";

export const metadata: Metadata = {
  title: "Book Your Energy Healing Session",
  description:
    "Book virtual or in-person energy healing, Reiki, chakra balancing, aura clearing, intuitive readings, and sound healing with Christina.",
  alternates: {
    canonical: "/book",
  },
};

export default function Page() {
  return <BookPage />;
}
