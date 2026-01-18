/**
 * Section type definitions for the Getting Started educational experience.
 * 
 * Content is now loaded from Astro Content Collections (src/content/sections/).
 * This file provides TypeScript interfaces and utility functions.
 */

export interface SectionData {
  id: string;
  number: number;
  title: string;
  content: string;
  wordCount: number;
  hasAnimation: boolean;
  animationComponent: string | null;
}

/**
 * Get a section by ID from an array of sections
 */
export function getSectionById(sections: SectionData[], id: string): SectionData | undefined {
  return sections.find(s => s.id === id);
}

/**
 * Get a section by number (1-indexed) from an array of sections
 */
export function getSectionByNumber(sections: SectionData[], num: number): SectionData | undefined {
  return sections.find(s => s.number === num);
}

/**
 * Get total section count
 */
export function getTotalSections(sections: SectionData[]): number {
  return sections.length;
}
