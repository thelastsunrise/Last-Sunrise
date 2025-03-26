import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.md*", base: "./src/pages" }),
    schema: z.object({
        title: z.string(),
        section: z.number(),
        id: z.number(),
        description: z.string(),
    })
});

export const collections = { articles };