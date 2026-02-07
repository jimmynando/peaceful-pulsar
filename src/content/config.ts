import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = { writing };
