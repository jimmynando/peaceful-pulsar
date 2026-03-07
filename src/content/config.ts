import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string(),
  }),
});

export const collections = { writing };
