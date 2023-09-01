// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    publishDate: z.string(),
    draft: z.boolean(),
    // categories: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(), //Image can be optional
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
