# GETTING_STARTED - Project Roadmap

## Overview

An educational Astro-based site helping "technical adjacent" professionals (UX researchers, product managers, designers, data analysts) understand foundational concepts for working with AI tools.

**Live URL**: https://nealriley.github.io/GETTING_STARTED

---

## Current State (January 2026)

### Completed Features

| Feature | Status | Notes |
|---------|--------|-------|
| 12-section content | Done | Astro Content Collections in `src/content/sections/` |
| 12 GSAP animations | Done | One per section in `src/components/animations/` |
| Split-screen layout | Done | `SplitLayout.astro` - content left, animation right |
| Welcome screen | Done | Full-screen landing, "Get Started" button |
| Section navigation | Done | Prev/Next buttons, keyboard arrows |
| URL hash routing | Done | `/#intro`, `/#interfaces`, etc. |
| Progress indicator | Done | Progress bar in footer |
| Responsive design | Done | Stacked on mobile, side-by-side on desktop |
| Reduced motion support | Done | `prefers-reduced-motion` respected |
| ESLint | Done | `eslint-plugin-astro` configured |
| Vitest tests | Done | 26 tests passing |
| GitHub Pages deploy | Done | Automated via GitHub Actions |

### Architecture

```
User lands on /
    |
    v
[Welcome Screen] -- "Get Started" --> /#intro
    |
    v
[Split Layout]
  - Left: Content panel (markdown rendered)
  - Right: Animation panel (GSAP)
  - Header: Prev/Next navigation
  - Footer: Progress bar
```

### Section Structure

| # | ID | Title | Animation |
|---|-----|-------|-----------|
| 1 | `intro` | For the Technical Adjacent | 01-IntroAnimation |
| 2 | `interfaces` | Not All Models Are the Same | 02-InterfacesAnimation |
| 3 | `terminal-chat` | The Terminal is Just a Chat | 03-ClaudeChatAnimation |
| 4 | `terminal-raw` | What's Actually Happening | 04-RawTerminalAnimation |
| 5 | `terminal-translator` | AI as Your Translator | 05-TranslatorAnimation |
| 6 | `packages` | Package Managers | 06-PackageManagerAnimation |
| 7 | `creation` | More Than Just Code | 07-CreationAnimation |
| 8 | `markdown` | The Unreasonable Usefulness of Markdown | 08-MarkdownAnimation |
| 9 | `structure` | A Little Bit of Structure | 09-StructureAnimation |
| 10 | `context` | Context Is King | 10-ContextAnimation |
| 11 | `decorators` | Decorating Your Prompts | 11-DecoratorsAnimation |
| 12 | `factory` | The Factory Is the Teacher | 12-FactoryAnimation |

---

## Remaining Tasks

### High Priority

- [ ] **Content review** - Review all 12 sections for clarity, accuracy, and tone
- [ ] **Welcome screen content** - Finalize intro text (placeholder currently)

### Medium Priority

- [ ] **Cross-browser testing** - Test on Safari, Firefox, Edge
- [ ] **Mobile UX review** - Test stacked layout on real devices
- [ ] **Animation timing review** - Ensure all animations have appropriate pacing

### Low Priority / Nice-to-Have

- [ ] **Mobile swipe navigation** - Swipe between sections on touch devices
- [ ] **Animation controls** - Play/pause/restart buttons
- [ ] **Visual regression tests** - Commit Playwright screenshot baselines
- [ ] **Component tests** - Add tests for Astro components (currently only lib tests)
- [ ] **Analytics** - Track section engagement

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 4.x | Static site generator |
| GSAP | 3.12+ | Animations |
| TypeScript | - | Type safety |
| Vitest | 4.x | Unit testing |
| Playwright | 1.57+ | E2E testing |
| ESLint | 9.x | Linting |
| GitHub Pages | - | Hosting |

---

## File Structure

```
src/
  content/
    config.ts              # Content collection schema
    sections/              # 12 markdown files (01-intro.md, etc.)
  components/
    SplitLayout.astro      # Main layout component
    WelcomeScreen.astro    # Landing page
    animations/            # 12 animation components
  lib/
    sections.ts            # SectionData interface
    content.ts             # Content utilities
  pages/
    index.astro            # Homepage
  layouts/
    BaseLayout.astro       # Base HTML layout
  styles/
    global.css             # Global styles

docs/
  sections/                # Design notes per section (12 files)
  archive/
    planning/              # Original planning docs (v1)
    FULL_GUIDE_v3.md       # Original source content

tests/
  content.test.ts          # Unit tests
  e2e/                     # Playwright tests
```

---

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run test:run     # Run tests
npm run lint         # Run ESLint
```

---

## History

This project evolved from an "interview chat" format to a full-screen immersive educational experience. Original planning documents are archived in `docs/archive/planning/`.

Key milestones:
1. Initial content and storyboards created
2. Split-screen layout implemented
3. 12 GSAP animations built
4. Welcome screen added
5. ESLint configured
