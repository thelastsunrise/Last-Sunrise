// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({pattern: "*.mdx", base: "src/pages/blog"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
    })
});

// SIMS SHRINE CONTENT COLLECTIONS
const sims = defineCollection({
    loader: glob({pattern: "*.mdx", base: "src/content/sims"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
    })
});

const simsCast = defineCollection({
    loader: file("src/content/sims/cast.json"),
    schema: z.object({
        familyid: z.string(),
            game: z.string(),
            generation: z.array(
                z.object({
                    number: z.number(),
                    cast: z.array(
                        z.object({
                            name: z.string(),
                            gender: z.string(),
                            pronouns: z.string(),
                            role: z.string(),
                            traits: z.array(z.string()),
                            images: z.array( 
                                z.object({
                                    teenagesrc: z.string().optional(),
                                    youngadultsrc: z.string().optional(),
                                    matureadultsrc: z.string().optional()
                                })
                            )
                        })
                    )
                })
        )
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, sims, simsCast };