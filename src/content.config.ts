// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({pattern: "*.mdx", base: "src/pages/blog"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
    })
});

const sims = defineCollection({
    loader: glob({pattern: "*.mdx", base: "src/pages/shrines/sims"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { sims, blog };