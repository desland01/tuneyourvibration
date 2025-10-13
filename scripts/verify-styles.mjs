import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const tokensPath = path.join(root, "src/styles/tokens.scss");
if (!fs.existsSync(tokensPath)) {
  console.error("Style verification failed: tokens file missing at src/styles/tokens.scss");
  process.exit(1);
}

const tokensContent = fs.readFileSync(tokensPath, "utf8");
const requiredTokens = [
  "--color-text-primary",
  "--color-text-secondary",
  "--color-bg-primary",
  "--shadow-glass",
  "--font-heading",
];

const missingTokens = requiredTokens.filter((token) => !tokensContent.includes(token));

const searchTargets = [
  { needle: "content prose", locations: ["src/components", "src/pages"] },
  { needle: "intersect:animate-fadeUp", locations: ["src/components"] },
  { needle: "container glass", locations: ["src/components/base/Header.astro"] },
];

const hasNeedle = (needle, locations) => {
  const inspect = (targetPath) => {
    const absolute = path.join(root, targetPath);
    if (!fs.existsSync(absolute)) {
      return false;
    }
    const stats = fs.statSync(absolute);
    if (stats.isDirectory()) {
      return fs.readdirSync(absolute).some((entry) => inspect(path.join(targetPath, entry)));
    }
    if (stats.isFile()) {
      const content = fs.readFileSync(absolute, "utf8");
      return content.includes(needle);
    }
    return false;
  };
  return locations.some((location) => inspect(location));
};

const missingSelectors = searchTargets
  .filter(({ needle, locations }) => !hasNeedle(needle, locations))
  .map(({ needle }) => needle);

if (missingTokens.length > 0 || missingSelectors.length > 0) {
  if (missingTokens.length > 0) {
    console.error("Missing design tokens:", missingTokens.join(", "));
  }
  if (missingSelectors.length > 0) {
    console.error("Missing required class usage:", missingSelectors.join(", "));
  }
  process.exit(1);
}

console.log("Style guardrails passed.");
