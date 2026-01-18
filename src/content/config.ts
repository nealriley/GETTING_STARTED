/**
 * Astro Content Collections Configuration
 * 
 * Defines the schema for section content files.
 * Each section is a Markdown file with frontmatter metadata.
 */

import { defineCollection, z } from 'astro:content';

const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    number: z.number(),
    title: z.string(),
    animation: z.string().describe('Animation component filename (e.g., "05-TranslatorAnimation")'),
  }),
});

export const collections = {
  sections: sectionsCollection,
};
