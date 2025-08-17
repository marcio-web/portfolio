import { defineCollection, z } from 'astro:content';

const projetosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  projetos: projetosCollection,
};
