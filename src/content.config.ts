import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      "Theory",
      "Experiments",
      "Reflections",
      "News",
      "OpenClaw",
      "Agent Architecture"
    ]),
    author: z.string().default("Matthew J. Korpman"),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
