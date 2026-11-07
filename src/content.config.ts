import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories } from './data/categories';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      category: z.enum(categories),
      order: z.number(),
      cover: image(),
      coverAlt: z.string(),
      /** Ancho (px CSS) con el que se muestra la portada en la tarjeta de la home */
      coverWidth: z.number().int().positive(),
      /** Si es true, el proyecto sale como tarjeta en la Home. Todos salen siempre en /portfolio/. */
      home: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { proyectos };
