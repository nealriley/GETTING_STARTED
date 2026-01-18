# Architecture Reference

## User Flow

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

---

## Section Structure

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
