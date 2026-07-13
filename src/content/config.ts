import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Note: Astro 4.x reserves 'slug' — auto-generated from filename. Use entry.slug instead.
    description: z.string(),
    status: z.enum(['active', 'beta', 'coming-soon']),
    order: z.number(),
    icon: z.string(),
  }),
});

export const collections = { projects };
