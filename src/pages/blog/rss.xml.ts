import type { APIContext } from "astro";
import type { CollectionEntry } from "astro:content";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

type BlogEntry = CollectionEntry<"blog">;

const sortByDateDesc = (entries: BlogEntry[]) =>
  entries.sort((a, b) => {
    const aDate = a.data.date ? new Date(a.data.date).getTime() : 0;
    const bDate = b.data.date ? new Date(b.data.date).getTime() : 0;
    return bDate - aDate;
  });

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const sorted = sortByDateDesc(posts);

  return rss({
    title: "Tune Your Vibration — Blog",
    description:
      "Sound healing, distance Reiki, and empath support notes from Christina.",
    site: context.site ?? "https://example.com",
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      link: `/blog/${post.id}/`,
      pubDate: post.data.date,
      categories: post.data.categories,
    })),
  });
}
