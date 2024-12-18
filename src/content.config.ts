import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const test = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/test" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {test}