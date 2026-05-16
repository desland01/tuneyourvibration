import type { Metadata } from "next";
import { MulmiHousePage } from "@/components/MulmiHouseSite";
import {
  mulmiHouseCurrentUrl,
  mulmiHouseMetaDescription,
  mulmiHousePageTitle,
  mulmiHousePath,
  mulmiImages,
} from "@/lib/mulmi-house-data";

export const metadata: Metadata = {
  title: {
    absolute: mulmiHousePageTitle,
  },
  description: mulmiHouseMetaDescription,
  alternates: {
    canonical: mulmiHousePath,
  },
  openGraph: {
    title: mulmiHousePageTitle,
    description: mulmiHouseMetaDescription,
    url: mulmiHouseCurrentUrl,
    images: [mulmiImages[0].src],
    type: "website",
  },
};

export default function Page() {
  return <MulmiHousePage />;
}
