# AGENTS.md - AI Coding Agent Guidelines

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

An educational Astro-based static site helping "technical adjacent" professionals (UX researchers, product managers, designers, data analysts) understand foundational concepts for working with AI tools.

**Tech Stack:** Astro 4.x, JavaScript/TypeScript, GSAP animations, GitHub Pages

## Build/Lint/Test Commands

### Package Manager
```bash
npm install          # Install all dependencies
npm ci               # Clean install (CI/production)
```

### Development
```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production (outputs to ./dist)
npm run preview      # Preview production build locally
```

### Testing
Vitest is configured for testing. Tests are located in `tests/` directory.

```bash
npm test              # Run tests in watch mode
npm run test:run      # Run tests once (CI mode)
```

### Running a Single Test
```bash
npm run test:run -- tests/content.test.ts
```

### Linting
No linter currently configured. When adding:
- Consider ESLint with `eslint-plugin-astro` for linting

## Project Structure

```
src/
├── content/
│   ├── config.ts           # Content collection schema
│   └── sections/           # Section content (Markdown + frontmatter)
│       ├── 01-intro.md
│       ├── 02-interfaces.md
│       └── ... (12 files, numbered by section)
├── components/
│   ├── animations/         # Animation components (numbered)
│   │   ├── 01-IntroAnimation.astro
│   │   ├── 02-InterfacesAnimation.astro
│   │   └── ... (12 files, numbered by section)
│   └── SplitLayout.astro   # Main split-screen layout
├── lib/
│   ├── sections.ts         # SectionData interface and utilities
│   └── content.ts          # Content parsing utilities
├── pages/                  # File-based routing (Astro pages)
│   └── index.astro         # Homepage (loads content collection)
├── layouts/                # Base layouts (BaseLayout.astro)
└── styles/                 # Global CSS (global.css)

docs/
├── sections/               # Design notes per section (numbered)
│   ├── 01-intro.md
│   ├── 02-interfaces.md
│   └── ... (12 files with storyboards, concepts)
├── archive/                # Archived reference content
│   └── FULL_GUIDE_v3.md    # Original source content
└── ...                     # Other project docs

assets/                     # Static assets (images, ASCII art)
tests/                      # Vitest tests
.github/workflows/          # GitHub Actions (deploy.yml)
```

## Code Style Guidelines

### File Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Astro components | PascalCase | `AnimatedScene.astro` |
| Page files | lowercase | `index.astro`, `demo.astro` |
| CSS files | lowercase-hyphenated | `global.css` |
| Markdown docs | UPPERCASE_UNDERSCORE | `FULL_GUIDE.md` |

### Astro Component Structure
Follow this order in `.astro` files:

```astro
---
// 1. Imports
import '../styles/global.css';
import BaseLayout from '../layouts/BaseLayout.astro';

// 2. Props interface (TypeScript)
interface Props {
  title?: string;
  description?: string;
}

// 3. Props destructuring with defaults
const { title = 'Default Title', description = '' }: Props = Astro.props;

// 4. Component logic
const currentYear = new Date().getFullYear();
---

<!-- 5. HTML Template -->
<BaseLayout title={title}>
  <main>
    <h1>{title}</h1>
  </main>
</BaseLayout>

<!-- 6. Scoped Styles -->
<style>
  main {
    max-width: 800px;
    margin: 0 auto;
  }
</style>

<!-- 7. Client-side Scripts -->
<script>
  import gsap from 'gsap';
  // Client-side JavaScript
</script>
```

### Import Style
```javascript
// External packages first
import gsap from 'gsap';

// Then local imports (relative paths)
import '../styles/global.css';
import BaseLayout from '../layouts/BaseLayout.astro';
import MyComponent from '../components/MyComponent.astro';
```

### CSS Conventions
Use CSS custom properties defined in `global.css`:

```css
:root {
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --border: #e5e7eb;
  --bg-light: #f9fafb;
  --accent: #3b82f6;
}
```

- Use scoped `<style>` in components when possible
- Follow BEM-like naming: `.card`, `.card-title`, `.card-desc`
- Include reduced-motion media query for animations:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .animated { animation: none; }
  }
  ```

### TypeScript Usage
- Use TypeScript annotations in frontmatter for props
- Non-null assertions (`!`) when element is guaranteed to exist
- Optional chaining (`?.`) for potentially null DOM elements

```typescript
// Props typing
interface Props {
  title: string;
  count?: number;
}

// DOM element typing
let timeout: number | null = null;
const element = document.querySelector('.my-class') as HTMLElement;
```

### JavaScript/Client-Side Code
- Use ES modules (`import`/`export`)
- Query DOM with `document.querySelector()` / `document.getElementById()`
- Use optional chaining for safety with DOM elements
- GSAP for all animations

```javascript
// GSAP animation pattern
const tl = gsap.timeline();
tl.to('.element', { opacity: 1, duration: 0.5 })
  .to('.element', { y: 0, duration: 0.3 }, '-=0.2');
```

### Error Handling
- Use optional chaining (`?.`) for DOM queries that may fail
- Use non-null assertions (`!`) only when element existence is guaranteed
- No try/catch needed for simple DOM operations

```javascript
// Safe pattern
element?.addEventListener('click', handler);

// When element must exist
const requiredEl = document.getElementById('app')!;
```

### HTML & Accessibility
- Use semantic HTML: `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`
- Include `lang="en"` on `<html>` element
- Add `aria-hidden="true"` for decorative elements
- Use descriptive alt text for images

## Important Configuration

### Base URL
This project deploys to GitHub Pages as a project site. All URLs must include the base path:

```javascript
// In astro.config.mjs
export default defineConfig({
  site: 'https://nealriley.github.io',
  base: '/GETTING_STARTED',
});
```

When linking, use paths like `/GETTING_STARTED/page-name`.

### Fonts
Google Fonts are loaded in layouts:
- **Headings:** Playfair Display
- **Body:** Inter

### GSAP Animations

GSAP (GreenSock Animation Platform) v3.14+ is the animation library. Local source available at `docs/GASAP/`.

**Official Documentation:** https://gsap.com/docs

#### Quick Reference

```javascript
import gsap from 'gsap';

// Simple tween
gsap.to('.element', { opacity: 1, duration: 0.5 });

// Timeline for sequenced animations
const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
tl.to('.first', { y: 0, duration: 0.3 })
  .to('.second', { opacity: 1, duration: 0.3 }, '-=0.1');

// Set initial state
gsap.set('.element', { opacity: 0, y: 20 });
```

#### GSAP Core Concepts

| Topic | Description | Docs |
|-------|-------------|------|
| **Tweens** | Basic animations with `gsap.to()`, `gsap.from()`, `gsap.fromTo()` | [Tween Docs](https://gsap.com/docs/v3/GSAP/Tween) |
| **Timelines** | Sequence/orchestrate multiple animations | [Timeline Docs](https://gsap.com/docs/v3/GSAP/Timeline) |
| **Easing** | Control animation timing curves (`power1-4`, `elastic`, `bounce`, `back`) | [Ease Visualizer](https://gsap.com/docs/v3/Eases) |
| **Staggers** | Animate arrays of elements with offsets | [Stagger Docs](https://gsap.com/docs/v3/Staggers) |
| **Utility Methods** | `gsap.utils.toArray()`, `mapRange()`, `interpolate()`, `snap()`, `clamp()` | [Utility Docs](https://gsap.com/docs/v3/GSAP/UtilityMethods) |
| **gsap.matchMedia()** | Responsive, accessibility-friendly animations | [matchMedia Docs](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) |
| **gsap.context()** | Scoped animations for cleanup (useful with frameworks) | [Context Docs](https://gsap.com/docs/v3/GSAP/gsap.context()) |

#### GSAP Plugins

All plugins are **FREE** (including previously premium ones). Register with `gsap.registerPlugin()`.

| Plugin | Purpose | Docs |
|--------|---------|------|
| **ScrollTrigger** | Scroll-driven animations, pinning, scrubbing | [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger) |
| **ScrollSmoother** | Smooth scrolling with ScrollTrigger integration | [ScrollSmoother Docs](https://gsap.com/docs/v3/Plugins/ScrollSmoother) |
| **Flip** | Animate layout changes (FLIP technique) | [Flip Docs](https://gsap.com/docs/v3/Plugins/Flip) |
| **Draggable** | Drag-and-drop with bounds, inertia, snap | [Draggable Docs](https://gsap.com/docs/v3/Plugins/Draggable) |
| **Observer** | Normalized scroll/touch/pointer event detection | [Observer Docs](https://gsap.com/docs/v3/Plugins/Observer) |
| **MotionPathPlugin** | Animate along SVG paths or custom paths | [MotionPath Docs](https://gsap.com/docs/v3/Plugins/MotionPathPlugin) |
| **MorphSVGPlugin** | Morph between SVG shapes | [MorphSVG Docs](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin) |
| **DrawSVGPlugin** | Animate SVG stroke drawing | [DrawSVG Docs](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin) |
| **SplitText** | Split text into chars/words/lines for animation | [SplitText Docs](https://gsap.com/docs/v3/Plugins/SplitText) |
| **TextPlugin** | Animate text content changes | [TextPlugin Docs](https://gsap.com/docs/v3/Plugins/TextPlugin) |
| **ScrambleTextPlugin** | Scramble/decode text effects | [ScrambleText Docs](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin) |

#### Plugin Registration Pattern

```javascript
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

// Register before use
gsap.registerPlugin(ScrollTrigger, SplitText);
```

#### ScrollTrigger Patterns

```javascript
// Basic scroll-triggered animation
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',    // trigger top hits viewport 80%
    end: 'bottom 20%',   // trigger bottom hits viewport 20%
    toggleActions: 'play none none reverse',
    markers: true        // debug markers (remove in production)
  },
  y: 0,
  opacity: 1
});

// Scrub animation (tied to scroll position)
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.container',
    scrub: true,         // or scrub: 0.5 for smoothing
    pin: true            // pin the trigger element
  },
  x: 500
});
```

#### SplitText Pattern

```javascript
const split = new SplitText('.text', { 
  type: 'chars,words,lines',
  charsClass: 'char',
  wordsClass: 'word',
  linesClass: 'line'
});

gsap.from(split.chars, {
  opacity: 0,
  y: 20,
  stagger: 0.02,
  duration: 0.5
});

// Revert when done (important for cleanup)
split.revert();
```

#### Flip Animation Pattern

```javascript
// Capture initial state
const state = Flip.getState('.items');

// Make DOM changes (move elements, toggle classes, etc.)
container.appendChild(element);

// Animate from old state to new state
Flip.from(state, {
  duration: 0.5,
  ease: 'power2.inOut',
  stagger: 0.05,
  absolute: true,      // use position:absolute during animation
  onEnter: elements => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1 }),
  onLeave: elements => gsap.to(elements, { opacity: 0 })
});
```

#### Easing Reference

```javascript
// Built-in eases (each has .in, .out, .inOut variants)
ease: 'none'           // linear
ease: 'power1.out'     // subtle
ease: 'power2.out'     // moderate (default)
ease: 'power3.out'     // pronounced
ease: 'power4.out'     // strong
ease: 'back.out(1.7)'  // overshoot
ease: 'elastic.out(1, 0.3)'  // springy
ease: 'bounce.out'     // bouncing
ease: 'circ.out'       // circular
ease: 'expo.out'       // exponential

// From EasePack (register separately)
ease: 'slow(0.7, 0.7, false)'  // slow in middle
ease: 'rough({ strength: 1, points: 20 })'  // jittery
```

#### Custom Ease

```javascript
import CustomEase from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);

CustomEase.create('myEase', 'M0,0 C0.5,0 0.5,1 1,1');
gsap.to('.el', { x: 100, ease: 'myEase' });
```

#### Accessibility: Reduced Motion

```javascript
// Using gsap.matchMedia() for accessibility
gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  // Full animations here
  gsap.to('.element', { y: 100, duration: 1 });
});

gsap.matchMedia().add('(prefers-reduced-motion: reduce)', () => {
  // Instant state changes, no motion
  gsap.set('.element', { y: 100 });
});
```

#### Resources

- [GSAP Docs](https://gsap.com/docs)
- [Getting Started Guide](https://gsap.com/get-started)
- [Cheat Sheet](https://gsap.com/cheatsheet)
- [Ease Visualizer](https://gsap.com/docs/v3/Eases)
- [Demos & Starter Templates](https://gsap.com/demos)
- [Community Forums](https://gsap.com/community)
- [YouTube Channel](https://www.youtube.com/@GreenSockLearning)

## Section Animation Architecture

### Overview

Each of the 12 sections has a dedicated animation component in `src/components/animations/`. Animations are orchestrated via GSAP timelines and triggered by a `section:change` custom event dispatched from `SplitLayout.astro`.

### Animation Components

| Section | ID | Animation Component | Description |
|---------|----|--------------------|-------------|
| 1 | `intro` | `01-IntroAnimation.astro` | CLI "getting started" welcome screen |
| 2 | `interfaces` | `02-InterfacesAnimation.astro` | Same AI orb in different interfaces |
| 3 | `terminal-chat` | `03-ClaudeChatAnimation.astro` | Web chat vs terminal comparison |
| 4 | `terminal-raw` | `04-RawTerminalAnimation.astro` | Raw terminal commands |
| 5 | `terminal-translator` | `05-TranslatorAnimation.astro` | Natural language to command translation |
| 6 | `packages` | `06-PackageManagerAnimation.astro` | Package managers across platforms |
| 7 | `creation` | `07-CreationAnimation.astro` | Terminals create more than code |
| 8 | `markdown` | `08-MarkdownAnimation.astro` | Files vs chat, description becomes reality |
| 9 | `structure` | `09-StructureAnimation.astro` | Messy input transforms to structured |
| 10 | `context` | `10-ContextAnimation.astro` | Vending machine / four context types |
| 11 | `decorators` | `11-DecoratorsAnimation.astro` | Structured vs unstructured prompts |
| 12 | `factory` | `12-FactoryAnimation.astro` | Documentation as productive factory walls |

### Animation Component Pattern

Each animation component follows this structure:

```astro
---
interface Props {
  class?: string;
}
const { class: className = '' } = Astro.props;
---

<div class:list={['animation-name', className]} data-animation-name>
  <!-- HTML structure with data-element attributes for targeting -->
</div>

<style>
  /* Scoped styles - elements start with opacity: 0 */
</style>

<script>
  import gsap from 'gsap';

  class AnimationController {
    private container: HTMLElement;
    private timeline: gsap.core.Timeline | null = null;
    private isPlaying = false;

    constructor(container: HTMLElement) {
      this.container = container;
      this.init();
    }

    private init() {
      // Listen for section changes
      document.addEventListener('section:change', (e: Event) => {
        const detail = (e as CustomEvent).detail;
        if (detail.sectionData?.id === 'section-id') {
          this.play();
        } else {
          this.reset();
        }
      });

      // Handle direct navigation via URL hash
      const hash = window.location.hash.slice(1);
      if (hash === 'section-id') {
        setTimeout(() => this.play(), 500);
      }
    }

    play() {
      if (this.isPlaying) return;
      // Reset, create timeline, animate elements
    }

    reset() {
      // Kill timeline, reset element states
    }
  }

  // Initialize with singleton pattern
  function initAnimation() {
    const container = document.querySelector('[data-animation-name]');
    if (container && !container.__animationController) {
      container.__animationController = new AnimationController(container);
    }
  }

  initAnimation();
  document.addEventListener('DOMContentLoaded', initAnimation);
</script>
```

### Wiring Animations to Sections

1. **Import** in `SplitLayout.astro`:
   ```astro
   import MyAnimation from './animations/MyAnimation.astro';
   ```

2. **Add container** in the animation panel:
   ```astro
   <div class="animation-container" data-animation-id="section-id" style="display: none;">
     <MyAnimation />
   </div>
   ```

3. **Map in sectionAnimationMap**:
   ```javascript
   const sectionAnimationMap: Record<string, string> = {
     'section-id': 'section-id',
     // ...
   };
   ```

4. **Update sections.ts**:
   ```typescript
   {
     id: 'section-id',
     hasAnimation: true,
     animationComponent: 'MyAnimation',
   }
   ```

### Design Decisions

**One animation per section**: We chose separate animation files over combined multi-phase animations for:
- Easier maintenance and debugging
- Independent loading/execution
- Clearer mental model for each section's visual story

**Event-driven triggering**: Animations respond to `section:change` events rather than direct function calls, allowing decoupled architecture and easier testing.

**Timeline-based sequencing**: GSAP timelines provide precise control over animation timing, pauses for readability, and clean reset/replay functionality.

### Storyboard Reference

Animation storyboards and design rationale are documented in `docs/sections/`. Each section has a corresponding numbered file (e.g., `01-intro.md`, `02-interfaces.md`) with visual concepts and timing breakdowns.

## Deployment

Deployment is automated via GitHub Actions on push to `main`:
1. Checkout code
2. Setup Node.js 20
3. `npm ci`
4. `npm run build`
5. Deploy `./dist` to GitHub Pages

**Live URL:** https://nealriley.github.io/GETTING_STARTED

## Common Tasks

### Adding a New Page
1. Create file in `src/pages/` (e.g., `src/pages/new-page.astro`)
2. Import and use `BaseLayout`
3. Page is automatically available at `/GETTING_STARTED/new-page`

### Adding a New Component
1. Create file in `src/components/` with PascalCase name
2. Follow the component structure pattern above
3. Import into pages/layouts as needed

### Modifying Global Styles
Edit `src/styles/global.css` - imported in `BaseLayout.astro`

### Adding Animations
1. Import GSAP in `<script>` tag
2. Query elements after DOM is ready
3. Use timelines for complex sequences
4. Always consider `prefers-reduced-motion`

## Content Management

### Section Content Structure

The main educational content uses **Astro Content Collections** stored in `src/content/sections/`. Each section is a Markdown file with frontmatter metadata.

Benefits of this approach:
1. **Easy editing** - Edit Markdown files directly, no HTML escaping needed
2. **Numbered files** - Files like `01-intro.md` sort naturally and match animations
3. **Type safety** - Schema defined in `src/content/config.ts` validates all fields
4. **Separation of concerns** - Content separate from presentation logic

### Adding/Editing Section Content

Edit the Markdown file in `src/content/sections/`:

```markdown
---
id: "intro"
number: 1
title: "For the Technical Adjacent"
animation: "01-IntroAnimation"
---

Your content here in **Markdown** format.

## Subheading

More content with lists:
- Item one
- Item two

And `inline code` or code blocks.
```

### Content Guidelines

- Use standard Markdown formatting
- Keep paragraphs concise for the split-screen format
- Use `**bold**` for key terms, `*italic*` for emphasis
- Code blocks: Use triple backticks with language identifier
- The SplitLayout component converts Markdown to styled HTML

### Frontmatter Schema

Each section file requires:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | URL-friendly identifier (e.g., "intro", "terminal-chat") |
| `number` | number | Section number (1-12) |
| `title` | string | Display title |
| `animation` | string | Animation component filename without extension |

### Working with Sections

**To edit a section's content:**
1. Open `src/content/sections/NN-section-name.md`
2. Edit the Markdown content
3. Run `npm run dev` to preview changes

**To edit a section's animation:**
1. Open `src/components/animations/NN-AnimationName.astro`
2. Edit the GSAP timeline and HTML structure
3. Reference design notes in `docs/sections/NN-section-name.md`

**To add a new section:**
1. Create `src/content/sections/NN-name.md` with frontmatter
2. Create `src/components/animations/NN-NameAnimation.astro`
3. Add design notes to `docs/sections/NN-name.md`
4. Import and wire animation in `SplitLayout.astro`

### Source Content Reference

The original authoritative source content is archived in `docs/archive/FULL_GUIDE_v3.md`.
