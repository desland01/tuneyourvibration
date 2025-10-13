const imageModules = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,avif,gif,svg}", {
  eager: true,
  import: "default",
}) as Record<string, any>;

const normalizeCandidates = (value: string): string[] => {
  const trimmed = value.trim().replace(/\\/g, "/");
  if (!trimmed) return [];

  const candidates = new Set<string>();
  candidates.add(trimmed);

  const collapsed = trimmed.replace(/^(\.\.\/)+assets\//, "../assets/");
  candidates.add(collapsed);

  const assetsIndex = trimmed.indexOf("assets/");
  if (assetsIndex >= 0) {
    candidates.add(`../${trimmed.slice(assetsIndex)}`);
  }

  if (collapsed.startsWith("/src/")) {
    candidates.add(`../${collapsed.slice(5)}`);
  }

  if (collapsed.startsWith("/")) {
    candidates.add(`../src${collapsed}`);
  }

  if (collapsed.startsWith("src/")) {
    candidates.add(`../${collapsed}`);
  }

  return Array.from(candidates);
};

export const resolveImage = (value: unknown): any => {
  if (value && typeof value === "object" && "src" in (value as Record<string, unknown>)) {
    return value;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  for (const candidate of normalizeCandidates(value)) {
    const metadata = imageModules[candidate];
    if (metadata) {
      return metadata;
    }
  }

  return undefined;
};
