import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    author: z.string().optional(),
    publishDate: z.coerce.date(),
    draft: z.boolean(),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    image: z.string().optional(), //Image can be optional
  }),
});

export const collections = { blog };
