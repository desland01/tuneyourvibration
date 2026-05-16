import type { Metadata } from "next";
import { NepalPage } from "@/components/TyvSite";
import { nepalPages } from "@/lib/tyv-data";

const page = nepalPages.treks;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: page.href,
  },
};

export default function Page() {
  return <NepalPage kind="treks" />;
}
