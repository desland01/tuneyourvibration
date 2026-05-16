import type { MetadataRoute } from "next";
import { allRoutePaths, siteBaseUrl } from "@/lib/tyv-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutePaths.map((path) => ({
    url: `${siteBaseUrl}${path}`,
    lastModified: new Date("2026-05-16"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.75,
  }));
}
