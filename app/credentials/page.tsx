import type { Metadata } from "next";
import { CredentialsPage } from "@/components/TyvSite";

export const metadata: Metadata = {
  title: "Credentials and Training",
  description:
    "Christina's energy healing credentials include metaphysical practice, spiritual counseling, mediumship, color and sound healing, yoga, and Jungian psychology studies.",
  alternates: {
    canonical: "/credentials",
  },
};

export default function Page() {
  return <CredentialsPage />;
}
