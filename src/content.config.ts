import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { proyectos };
