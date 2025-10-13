import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import cloudflare from "@astrojs/cloudflare";
import { fileURLToPath } from "node:url";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const site = process.env.PUBLIC_SITE_URL ?? "https://example.com";

export default defineConfig({
  site,
  base: "/",
  trailingSlash: "ignore",

  prefetch: {
    defaultStrategy: "hover"
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        entrypoint: "astro/assets/services/compile",
      },
    },
  },

  adapter: cloudflare(),

  integrations: [react(), sitemap(), AutoImport({
    imports: ["@components/common/Button.astro", "@shortcodes/Accordion", "@shortcodes/Notice", "@shortcodes/Youtube", "@shortcodes/Tabs", "@shortcodes/Tab"]
  }), mdx(), icon()],

  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }], remarkMath],
    rehypePlugins: [[rehypeKatex, {}]],
    shikiConfig: {
      themes: { // https://shiki.style/themes
        light: "light-plus",
        dark: "dark-plus",
      },
      langs: ["astro", "tsx", "ts", "js", "json", "bash", "yaml"],
    },
    extendDefaultPlugins: true
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@helpers": fileURLToPath(new URL("./src/components/helpers", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
        "@shortcodes": fileURLToPath(new URL("./src/components/common/shortcodes", import.meta.url)),
        "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
        "@christina": fileURLToPath(new URL("./src/assets/christina", import.meta.url)),
        "@trekking": fileURLToPath(new URL("./src/assets/trekking", import.meta.url)),
        "@website-block": fileURLToPath(new URL("./src/assets/website-block", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
