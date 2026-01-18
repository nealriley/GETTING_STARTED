# GETTING_STARTED Site Rebuild Roadmap

## Overview

Rebuilding the main site experience from an "interview chat" format to a **full-screen immersive educational experience**:

- **LEFT (45%)**: Content from `content/FULL_GUIDE_v3.md` (10 sections, ~7,200 words)
- **RIGHT (55%)**: Terminal-style animations from `animation/storyboards/`

**Design Philosophy**: Data visualization/storytelling approach with technical/educational content. Full viewport, dark theme, minimal chrome, immersive reading experience.

**Goal**: Create an immersive learning experience where users read foundational concepts about AI tools while watching visual animations that reinforce each concept.

---

## Current State

### What Exists
| Component | Location | Status |
|-----------|----------|--------|
| InterviewChat.astro | `src/components/` | To be replaced |
| AnimatedScene.astro | `src/components/` | Reusable (basic GSAP demo) |
| ScrollProgressBar.astro | `src/components/` | Keep |
| BaseLayout.astro | `src/layouts/` | Keep |
| global.css | `src/styles/` | Keep, extend |

### Key Source Files
| File | Purpose |
|------|---------|
| `content/FULL_GUIDE_v3.md` | Authoritative content (10 sections) |
| `animation/storyboards/ANIMATION_PLAN_SUMMARY.md` | Animation overview |
| `animation/storyboards/SECTION_*.md` | Individual storyboards |

---

## Content Structure

The guide has 10 sections with different animation requirements:

| # | Section | Animation | Duration | Visual Concept |
|---|---------|-----------|----------|----------------|
| 1 | For the Technical Adjacent | NO | - | Intro/meta content |
| 2 | Interfaces | YES | 60-90s | "Same Brain, Different Body" |
| 3+4 | Terminal + Package Managers | YES | 90-120s | "You Already Know This" |
| 5 | More Than Just Code | YES | 60-75s | "The Creation Machine" |
| 6 | Markdown | YES | 90-120s | "Description Becomes Reality" |
| 7 | Structure | YES | 75-90s | "The Transformation" |
| 8 | Context | YES | 75-90s | "The Right Buttons" |
| 9 | Decorators | YES | 90-120s | "The Story in Structure" |
| 10 | Factory Is Teacher | YES | 60-75s | "The Walls Come Alive" |

**Total: 8 animations, ~10-12 minutes runtime**

---

## Phase 1: Foundation (COMPLETED)

### Goals
- [x] Document the rebuild plan (this file)
- [x] Create content-to-animation mapping
- [x] Design component architecture
- [x] Set up project documentation structure

### Deliverables
- [x] `docs/ROADMAP.md` - This file
- [x] `docs/CONTENT_ANIMATION_MAP.md` - Section-by-section mapping
- [x] `docs/COMPONENT_ARCHITECTURE.md` - New component design

---

## Phase 2: Core Layout (COMPLETED)

### Goals
- [x] Create split-screen layout component
- [x] Implement section navigation
- [x] Set up testing framework (Vitest)
- [x] Create content parsing utilities

### Completed Components
```
src/
  lib/
    content.ts               # Content parsing utilities
  components/
    SplitLayout.astro        # Main split-screen container
    ContentPanel.astro       # Left panel - rendered markdown content
    TerminalFrame.astro      # Terminal-style animation wrapper
  pages/
    index.astro              # Updated to use new components

tests/
  content.test.ts            # 29 tests for content parsing

vitest.config.ts             # Test configuration
```

### Technical Decisions Made
- Vitest for testing (29 tests passing)
- Direct markdown parsing via `lib/content.ts`
- Basic markdown-to-HTML conversion in index.astro
- URL hash-based section navigation
- Keyboard navigation (arrow keys)
- Full-screen dark theme (immersive experience)
- 45/55 split (content/animation) for emphasis on visuals
- Astro dev server binds to 0.0.0.0 for Codespaces compatibility

---

## Phase 3: Content Integration (IN PROGRESS)

### Goals
- [x] Parse and render FULL_GUIDE_v3.md sections
- [x] Implement section-by-section navigation
- [x] Add persistent section titles
- [x] Handle responsive layout (stacked on mobile)
- [ ] Improve markdown parsing (use proper parser)
- [ ] Add section content loading on navigation

### Approach
- Use Astro's content collections or direct markdown parsing
- Each section becomes a "slide" in the experience
- Section titles remain visible during transitions
- Content scrolls independently from animations

---

## Phase 4: Animation System

### Goals
- [ ] Create base animation framework
- [ ] Implement terminal-style text animations
- [ ] Build animation components for each section
- [ ] Link animations to scroll/section progress

### Animation Components
```
src/components/animations/
  BaseAnimation.astro        # Shared animation utilities
  InterfacesAnimation.astro  # Section 2
  TerminalAnimation.astro    # Sections 3+4
  CreationAnimation.astro    # Section 5
  MarkdownAnimation.astro    # Section 6
  StructureAnimation.astro   # Section 7
  ContextAnimation.astro     # Section 8
  DecoratorsAnimation.astro  # Section 9
  FactoryAnimation.astro     # Section 10
```

### Visual Style
- Terminal/CLI aesthetic (monospace, dark background)
- Typewriter text effects
- ASCII art elements
- GSAP timelines synchronized with content

---

## Phase 5: Polish & Accessibility

### Goals
- [ ] Add prefers-reduced-motion support
- [ ] Implement keyboard navigation
- [ ] Add skip links and ARIA labels
- [ ] Performance optimization
- [ ] Cross-browser testing

### Accessibility Requirements
- All animations respect `prefers-reduced-motion`
- Keyboard-navigable sections
- Screen reader friendly content
- Focus management during transitions

---

## Technical Decisions

### Animation Library
**GSAP** - Already installed, documented in AGENTS.md

### Content Source
**Direct markdown parsing** - FULL_GUIDE_v3.md is the single source of truth

### State Management
**URL-based sections** - Each section gets a URL fragment for shareability
- `/GETTING_STARTED/#interfaces`
- `/GETTING_STARTED/#terminal`
- etc.

### Scroll Behavior
**ScrollTrigger integration** - Animations tied to scroll position within sections

---

## File Structure (Target)

```
src/
  pages/
    index.astro              # Main entry, uses SplitLayout
  components/
    SplitLayout.astro        # Split-screen container
    ContentPanel.astro       # Left: markdown content
    AnimationPanel.astro     # Right: animations
    SectionNav.astro         # Navigation/progress
    TerminalFrame.astro      # Terminal wrapper
    animations/              # Section-specific animations
      BaseAnimation.astro
      [8 section animations]
  layouts/
    BaseLayout.astro         # Keep existing
  styles/
    global.css               # Keep, extend
    animations.css           # Animation-specific styles

docs/
  ROADMAP.md                 # This file
  CONTENT_ANIMATION_MAP.md   # Section mapping
  COMPONENT_ARCHITECTURE.md  # Component design

content/
  FULL_GUIDE_v3.md           # Authoritative content (keep)

animation/
  storyboards/               # Animation plans (keep for reference)
```

---

## Open Questions

1. **Section 1 handling**: No animation planned - different layout? Splash screen?
2. **Mobile experience**: Stack panels or alternative mobile-first design?
3. **Auto-advance behavior**: Keep timer from InterviewChat or user-controlled?
4. **xterm.js**: Animation storyboard mentions it - implement real terminal or styled div?
5. **Series mode**: Option to play all animations continuously?

---

## Next Steps

1. ~~Create `docs/CONTENT_ANIMATION_MAP.md` with detailed section breakdown~~ DONE
2. ~~Create `docs/COMPONENT_ARCHITECTURE.md` with component specs~~ DONE
3. ~~Begin Phase 2 implementation with SplitLayout.astro~~ DONE
4. Install proper markdown parser (marked or remark)
5. Implement dynamic section loading on navigation
6. Begin Phase 4: Create first animation component (Section 7 - "The Transformation")

---

## References

- Content: `content/FULL_GUIDE_v3.md`
- Animations: `animation/storyboards/ANIMATION_PLAN_SUMMARY.md`
- Current implementation: `src/components/InterviewChat.astro`
- GSAP docs: Documented in `AGENTS.md`
