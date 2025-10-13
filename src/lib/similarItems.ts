const dedupe = (items: any[], currentId: string) => {
  const seen = new Set<string>();
  const ordered: any[] = [];
  for (const item of items) {
    if (!item || item.id === currentId) continue;
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    ordered.push(item);
  }
  return ordered;
};

const similerItems = (currentItem: any, allItems: any[], id: string) => {
  const categories: string[] = currentItem.data?.categories ?? [];
  const tags: string[] = currentItem.data?.tags ?? [];

  const byCategory = allItems.filter((item) =>
    categories.some((category) => item.data?.categories?.includes?.(category)),
  );
  const byTag = allItems.filter((item) =>
    tags.some((tag) => item.data?.tags?.includes?.(tag)),
  );

  const merged = [...byCategory, ...byTag];
  const counts = merged.reduce<Record<string, number>>((acc, item) => {
    if (!item) return acc;
    acc[item.id] = (acc[item.id] ?? 0) + 1;
    return acc;
  }, {});

  const ranked = merged
    .filter((item) => item.id !== id)
    .sort((a, b) => (counts[b.id] ?? 0) - (counts[a.id] ?? 0));

  const strongMatches = dedupe(ranked.filter((item) => (counts[item.id] ?? 0) > 1), id);
  if (strongMatches.length > 0) {
    return strongMatches.slice(0, 4);
  }

  const softMatches = dedupe(ranked, id);
  if (softMatches.length > 0) {
    return softMatches.slice(0, 4);
  }

  const recents = dedupe(allItems, id);
  return recents.slice(0, 4);
};

export default similerItems;
