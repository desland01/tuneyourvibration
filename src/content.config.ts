import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// May also need to update /src/types/index.d.ts when updating this file
// When updating the set of searchable collections, update collectionList in /src/pages/search.astro

const searchable = z.object({
  title: z.string(),
  description: z.string().optional(),
  autodescription: z.boolean().default(true),
  draft: z.boolean().default(false),
});

const social = z.object({
  discord: z.string().optional(),
  email: z.string().optional(),
  facebook: z.string().optional(),
  github: z.string().optional(),
  instagram: z.string().optional(),
  linkedIn: z.string().optional(),
  pinterest: z.string().optional(),
  tiktok: z.string().optional(),
  website: z.string().optional(),
  youtube: z.string().optional(),
});

const about = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/about" }),
  schema: ({ image }) =>
    searchable.extend({
      image: image().optional(),
      imageAlt: z.string().default(""),
      hero: z.object({
        eyebrow: z.string(),
        heading: z.string(),
        subheading: z.string(),
        portrait: z.union([z.string(), image()]).optional(),
        portraitAlt: z.string().default(""),
        badges: z.array(z.string()).default([]),
      }),
      essence: z.object({
        heading: z.string(),
        description: z.string(),
        highlights: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .default([]),
      }),
      modalities: z.object({
        heading: z.string(),
        cards: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .default([]),
      }),
      journey: z.object({
        heading: z.string(),
        description: z.string(),
        steps: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .default([]),
      }),
      lineage: z.object({
        heading: z.string(),
        items: z
          .array(
            z.object({
              label: z.string(),
              caption: z.string().optional(),
            }),
          )
          .default([]),
      }),
      values: z.object({
        heading: z.string(),
        columns: z
          .array(
            z.object({
              title: z.string(),
              points: z.array(z.string()).default([]),
            }),
          )
          .default([]),
      }),
      cta: z.object({
        heading: z.string(),
        description: z.string(),
        primary: z.object({
          label: z.string(),
          link: z.string(),
          newtab: z.boolean().default(false),
        }),
        secondary: z
          .object({
            label: z.string(),
            link: z.string(),
            newtab: z.boolean().default(false),
          })
          .optional(),
      }),
    }),
});

const authors = defineCollection({
  loader: glob({
    pattern: "**/[!_]*.{md,mdx}",
    base: "./src/content/authors",
  }),
  schema: ({ image }) =>
    searchable.extend({
      email: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      social: social.optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      complexity: z.number().default(1),
      hideToc: z.boolean().default(false),
    }),
});

const docs = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/docs" }),
  schema: ({ image }) =>
    searchable.extend({
      pubDate: z.date().optional(),
      modDate: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      hideToc: z.boolean().default(false),
      hideNav: z.boolean().default(false),
    }),
});

const homeCta = z.object({
  label: z.string(),
  link: z.string(),
  type: z.enum(["internal", "whatsapp", "email"]),
});

const home = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/home" }),
  schema: ({ image }) =>
    z.object({
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      hero: z.object({
        eyebrow: z.string(),
        title: z.string(),
        subtitle: z.string(),
        supportingPoints: z.array(z.string()).default([]),
        primaryCta: homeCta,
        secondaryCta: homeCta.optional(),
        image: image().optional(),
        imageAlt: z.string().default(""),
      }),
      trustSignals: z.array(z.string()).default([]),
      benefits: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        )
        .default([]),
      offerings: z.object({
        heading: z.string(),
        description: z.string().optional(),
        featuredSlugs: z.array(z.string()).default([]),
      }),
      journey: z.object({
        heading: z.string(),
        subtitle: z.string(),
        steps: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      }),
      gallery: z
        .object({
          heading: z.string(),
          subtitle: z.string().optional(),
          images: z
            .array(
              z.object({
                image: image(),
                alt: z.string(),
                caption: z.string().optional(),
              }),
            )
            .default([]),
        })
        .optional(),
      testimonials: z
        .array(
          z.object({
            quote: z.string(),
            name: z.string(),
            descriptor: z.string().optional(),
          }),
        )
        .optional(),
      closing: z.object({
        heading: z.string(),
        copy: z.string(),
        primaryCta: homeCta,
        secondaryCta: homeCta.optional(),
      }),
    }),
});

const indexCards = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/index-cards",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cards: z.array(z.string()),
  }),
});

const poetry = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/poetry" }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
    }),
});

const portfolio = defineCollection({
  loader: glob({
    pattern: "-index.{md,mdx}",
    base: "./src/content/portfolio",
  }),
  schema: searchable.extend({
    projects: z.array(
      z.object({
        title: z.string(),
        github: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        content: z.array(z.string()).optional(),
      }),
    ),
  }),
});

const recipes = defineCollection({
  loader: glob({
    pattern: "**/[!_]*.{md,mdx}",
    base: "./src/content/recipes",
  }),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      prepTime: z.number().optional(),
      servings: z.number().optional(),
      diet: z.string().optional(),
      ingredients: z
        .object({
          list: z.array(z.string()),
          qty: z.array(z.string()),
        })
        .optional(),
      instructions: z.array(z.string()).optional(),
      notes: z.array(z.string()).optional(),
    }),
});

const services = defineCollection({
  loader: glob({
    pattern: "**/[!_]*.{md,mdx}",
    base: "./src/content/services",
  }),
  schema: ({ image }) =>
    searchable.extend({
      slug: z.string(),
      summary: z.string(),
      delivery: z.enum(["in-person-kathmandu", "virtual", "group"]),
      duration: z.string(),
      price: z.number().optional(),
      currency: z.string().default("USD"),
      location: z.string().optional(),
      order: z.number().default(0),
      benefits: z
        .array(
          z.union([
            z.string(),
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          ]),
        )
        .default([]),
      idealClients: z.array(z.string()).default([]),
      includes: z.array(z.string()).default([]),
      sessionFlow: z
        .array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        )
        .optional(),
      cta: z.object({
        label: z.string(),
        type: z.enum(["internal", "whatsapp", "email"]),
        value: z.string(),
      }),
      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        )
        .optional(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
    }),
});

const terms = defineCollection({
  loader: glob({ pattern: "-index.{md,mdx}", base: "./src/content/terms" }),
  schema: searchable,
});

// Export collections
export const collections = {
  about,
  authors,
  blog,
  docs,
  home,
  indexCards,
  poetry,
  portfolio,
  recipes,
  services,
  terms,
};
