import type { APIContext } from "astro";
import type { CollectionEntry } from "astro:content";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

type DocsEntry = CollectionEntry<"docs">;

const normaliseSlug = (entry: DocsEntry) =>
  entry.id.replace(/\/-index$/, "").replace(/\/index$/, "");

const sortDocs = (entries: DocsEntry[]) =>
  entries.sort((a, b) => {
    const aDate = a.data.pubDate ?? a.data.modDate;
    const bDate = b.data.pubDate ?? b.data.modDate;
    const aTime = aDate ? new Date(aDate).getTime() : 0;
    const bTime = bDate ? new Date(bDate).getTime() : 0;
    return bTime - aTime;
  });

export async function GET(context: APIContext) {
  const docs = await getCollection("docs", ({ data }) => !data.draft);

  const sorted = sortDocs(docs);

  return rss({
    title: "Tune Your Vibration — Docs",
    description: "Reference guides and ceremonial resources authored by Christina.",
    site: context.site ?? "https://example.com",
    items: sorted.map((doc) => ({
      title: doc.data.title,
      description: doc.data.description ?? "",
      link: `/docs/${normaliseSlug(doc)}/`,
      pubDate: doc.data.pubDate ?? doc.data.modDate,
    })),
  });
}
