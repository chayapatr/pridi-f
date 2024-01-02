import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		page: z.tuple([z.number(), z.number()]),
	}),
});

export const collections = { docs };
