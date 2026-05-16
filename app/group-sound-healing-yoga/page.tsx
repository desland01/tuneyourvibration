import type { Metadata } from "next";
import { GroupSoundYogaPage } from "@/components/TyvSite";
import { groupSoundHealing } from "@/lib/tyv-data";

export const metadata: Metadata = {
  title: groupSoundHealing.metaTitle,
  description: groupSoundHealing.metaDescription,
  alternates: {
    canonical: "/group-sound-healing-yoga",
  },
};

export default function Page() {
  return <GroupSoundYogaPage />;
}
