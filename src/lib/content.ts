/**
 * Content parsing utilities
 * 
 * Utility functions for working with section content.
 * The actual section data is now loaded from Astro Content Collections.
 */

export interface Section {
  id: string;
  number: number;
  title: string;
  content: string;
  wordCount: number;
  hasAnimation: boolean;
}

/**
 * Converts a title string to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Counts words in a string
 */
export function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .length;
}

/**
 * Parses markdown content into sections based on H1 headers (# Title)
 * Only matches numbered section headers (# 1. Title) or the main title,
 * ignoring headers inside code blocks.
 */
export function parseMarkdownSections(markdown: string): Section[] {
  const sections: Section[] = [];
  
  // First, temporarily replace code blocks to avoid matching headers inside them
  const codeBlockPlaceholder = '___CODE_BLOCK___';
  const codeBlocks: string[] = [];
  const processedMarkdown = markdown.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match);
    return codeBlockPlaceholder + (codeBlocks.length - 1);
  });
  
  // Split on H1 headers that are either:
  // 1. The main title (# Getting Started...)
  // 2. Numbered sections (# 1. Title, # 2. Title, etc.)
  // Pattern: # followed by either a digit+period or "Getting Started"
  const parts = processedMarkdown.split(/^(?=# (?:\d+\.|Getting Started))/gm).filter(part => part.trim());
  
  parts.forEach((part, index) => {
    // Restore code blocks
    let restoredPart = part;
    codeBlocks.forEach((block, i) => {
      restoredPart = restoredPart.replace(codeBlockPlaceholder + i, block);
    });
    
    const lines = restoredPart.split('\n');
    const headerLine = lines[0];
    
    // Extract title from header (remove # and any number prefix like "1. ")
    const titleMatch = headerLine.match(/^#\s*(?:\d+\.\s*)?(.+)$/);
    if (!titleMatch) return;
    
    const rawTitle = titleMatch[1].trim();
    const content = lines.slice(1).join('\n').trim();
    
    // Skip the main "Getting Started" intro header, start from section 1
    if (rawTitle.startsWith('Getting Started:')) {
      // This is the document title, include it as a preamble to section 1
      return;
    }
    
    sections.push({
      id: slugify(rawTitle),
      number: sections.length + 1,
      title: rawTitle,
      content,
      wordCount: countWords(content),
      hasAnimation: true, // All sections now have animations
    });
  });
  
  return sections;
}

/**
 * Gets a specific section by ID
 */
export function getSectionById(sections: Section[], id: string): Section | undefined {
  return sections.find(section => section.id === id);
}

/**
 * Gets a specific section by number (1-indexed)
 */
export function getSectionByNumber(sections: Section[], num: number): Section | undefined {
  return sections.find(section => section.number === num);
}

/**
 * Gets adjacent sections for navigation
 */
export function getAdjacentSections(sections: Section[], currentId: string): {
  prev: Section | null;
  current: Section | null;
  next: Section | null;
} {
  const currentIndex = sections.findIndex(s => s.id === currentId);
  
  if (currentIndex === -1) {
    return { prev: null, current: null, next: null };
  }
  
  return {
    prev: currentIndex > 0 ? sections[currentIndex - 1] : null,
    current: sections[currentIndex],
    next: currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null,
  };
}

/**
 * Gets total word count across all sections
 */
export function getTotalWordCount(sections: Section[]): number {
  return sections.reduce((total, section) => total + section.wordCount, 0);
}

/**
 * Gets sections that have animations
 */
export function getSectionsWithAnimations(sections: Section[]): Section[] {
  return sections.filter(section => section.hasAnimation);
}
