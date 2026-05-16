import type { Metadata } from "next";
import { ServiceRoutePage } from "@/components/TyvSite";
import { getService } from "@/lib/tyv-data";

const page = getService("chakra-aura-clearing");

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: `/${page.slug}`,
  },
};

export default function Page() {
  return <ServiceRoutePage page={page} />;
}
