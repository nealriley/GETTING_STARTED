import { describe, it, expect } from 'vitest';
import {
  slugify,
  countWords,
  parseMarkdownSections,
  getSectionById,
  getSectionByNumber,
  getAdjacentSections,
  getTotalWordCount,
  getSectionsWithAnimations,
} from '../src/lib/content';

describe('slugify', () => {
  it('converts text to lowercase', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('replaces spaces with hyphens', () => {
    expect(slugify('hello world')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('handles multiple spaces', () => {
    expect(slugify('hello   world')).toBe('hello-world');
  });

  it('trims whitespace', () => {
    expect(slugify('  hello world  ')).toBe('hello-world');
  });
});

describe('countWords', () => {
  it('counts words in a simple string', () => {
    expect(countWords('hello world')).toBe(2);
  });

  it('handles multiple spaces', () => {
    expect(countWords('hello   world')).toBe(2);
  });

  it('handles empty string', () => {
    expect(countWords('')).toBe(0);
  });

  it('handles whitespace only', () => {
    expect(countWords('   ')).toBe(0);
  });

  it('counts words in a paragraph', () => {
    expect(countWords('The quick brown fox jumps over the lazy dog')).toBe(9);
  });
});

describe('parseMarkdownSections', () => {
  const sampleMarkdown = `# 1. First Section

This is the content of the first section.
It has multiple lines.

# 2. Second Section

This is the second section content.

## Subsection

Some subsection content here.

# 3. Third Section

Final section content.`;

  it('parses sections correctly', () => {
    const sections = parseMarkdownSections(sampleMarkdown);
    expect(sections).toHaveLength(3);
  });

  it('extracts section titles', () => {
    const sections = parseMarkdownSections(sampleMarkdown);
    expect(sections[0].title).toBe('First Section');
    expect(sections[1].title).toBe('Second Section');
    expect(sections[2].title).toBe('Third Section');
  });

  it('assigns section numbers', () => {
    const sections = parseMarkdownSections(sampleMarkdown);
    expect(sections[0].number).toBe(1);
    expect(sections[1].number).toBe(2);
    expect(sections[2].number).toBe(3);
  });

  it('calculates word counts', () => {
    const sections = parseMarkdownSections(sampleMarkdown);
    expect(sections[0].wordCount).toBeGreaterThan(0);
  });

  it('preserves subsections in content', () => {
    const sections = parseMarkdownSections(sampleMarkdown);
    expect(sections[1].content).toContain('## Subsection');
  });
});

describe('getSectionById', () => {
  const sections = [
    { id: 'intro', number: 1, title: 'Intro', content: '', wordCount: 0, hasAnimation: false },
    { id: 'main', number: 2, title: 'Main', content: '', wordCount: 0, hasAnimation: true },
  ];

  it('finds section by id', () => {
    const section = getSectionById(sections, 'main');
    expect(section?.title).toBe('Main');
  });

  it('returns undefined for unknown id', () => {
    const section = getSectionById(sections, 'unknown');
    expect(section).toBeUndefined();
  });
});

describe('getSectionByNumber', () => {
  const sections = [
    { id: 'intro', number: 1, title: 'Intro', content: '', wordCount: 0, hasAnimation: false },
    { id: 'main', number: 2, title: 'Main', content: '', wordCount: 0, hasAnimation: true },
  ];

  it('finds section by number', () => {
    const section = getSectionByNumber(sections, 2);
    expect(section?.id).toBe('main');
  });

  it('returns undefined for invalid number', () => {
    const section = getSectionByNumber(sections, 99);
    expect(section).toBeUndefined();
  });
});

describe('getAdjacentSections', () => {
  const sections = [
    { id: 'first', number: 1, title: 'First', content: '', wordCount: 0, hasAnimation: false },
    { id: 'second', number: 2, title: 'Second', content: '', wordCount: 0, hasAnimation: true },
    { id: 'third', number: 3, title: 'Third', content: '', wordCount: 0, hasAnimation: false },
  ];

  it('returns prev and next for middle section', () => {
    const { prev, current, next } = getAdjacentSections(sections, 'second');
    expect(prev?.id).toBe('first');
    expect(current?.id).toBe('second');
    expect(next?.id).toBe('third');
  });

  it('returns null prev for first section', () => {
    const { prev, current, next } = getAdjacentSections(sections, 'first');
    expect(prev).toBeNull();
    expect(current?.id).toBe('first');
    expect(next?.id).toBe('second');
  });

  it('returns null next for last section', () => {
    const { prev, current, next } = getAdjacentSections(sections, 'third');
    expect(prev?.id).toBe('second');
    expect(current?.id).toBe('third');
    expect(next).toBeNull();
  });

  it('returns all null for unknown section', () => {
    const { prev, current, next } = getAdjacentSections(sections, 'unknown');
    expect(prev).toBeNull();
    expect(current).toBeNull();
    expect(next).toBeNull();
  });
});

describe('getTotalWordCount', () => {
  it('sums word counts from all sections', () => {
    const sections = [
      { id: 'a', number: 1, title: 'A', content: '', wordCount: 100, hasAnimation: false },
      { id: 'b', number: 2, title: 'B', content: '', wordCount: 200, hasAnimation: false },
      { id: 'c', number: 3, title: 'C', content: '', wordCount: 300, hasAnimation: false },
    ];
    expect(getTotalWordCount(sections)).toBe(600);
  });

  it('returns 0 for empty array', () => {
    expect(getTotalWordCount([])).toBe(0);
  });
});

describe('getSectionsWithAnimations', () => {
  const sections = [
    { id: 'a', number: 1, title: 'A', content: '', wordCount: 0, hasAnimation: false },
    { id: 'b', number: 2, title: 'B', content: '', wordCount: 0, hasAnimation: true },
    { id: 'c', number: 3, title: 'C', content: '', wordCount: 0, hasAnimation: true },
    { id: 'd', number: 4, title: 'D', content: '', wordCount: 0, hasAnimation: false },
  ];

  it('filters to only sections with animations', () => {
    const animated = getSectionsWithAnimations(sections);
    expect(animated).toHaveLength(2);
    expect(animated[0].id).toBe('b');
    expect(animated[1].id).toBe('c');
  });
});
