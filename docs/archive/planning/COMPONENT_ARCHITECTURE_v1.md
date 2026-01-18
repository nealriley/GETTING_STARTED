# Component Architecture

Technical specification for the rebuilt GETTING_STARTED site experience.

---

## Layout Overview

```
+--------------------------------------------------+
|                    Header                         |
|  [Logo]              [Section Nav]    [Progress]  |
+--------------------------------------------------+
|                                                   |
|   +---------------------+  +-------------------+  |
|   |                     |  |                   |  |
|   |    CONTENT PANEL    |  |  ANIMATION PANEL  |  |
|   |    (Left - 50%)     |  |   (Right - 50%)   |  |
|   |                     |  |                   |  |
|   |  - Section title    |  |  - Terminal frame |  |
|   |  - Markdown content |  |  - GSAP animations|  |
|   |  - Scroll area      |  |  - Visual demos   |  |
|   |                     |  |                   |  |
|   +---------------------+  +-------------------+  |
|                                                   |
+--------------------------------------------------+
|                Section Navigation                 |
|  [< Prev]    Section 3 of 10    [Next >]         |
+--------------------------------------------------+
```

---

## Component Hierarchy

```
index.astro
  └── BaseLayout.astro
       └── SplitLayout.astro
            ├── SectionHeader.astro
            │    └── SectionNav.astro
            ├── ContentPanel.astro
            │    └── SectionContent.astro
            ├── AnimationPanel.astro
            │    └── TerminalFrame.astro
            │         └── [SectionAnimation].astro
            └── SectionFooter.astro
```

---

## Core Components

### 1. SplitLayout.astro

**Purpose**: Main container managing the split-screen experience.

**Props**:
```typescript
interface Props {
  initialSection?: number;  // Starting section (default: 1)
  autoAdvance?: boolean;    // Auto-progress through sections
  autoAdvanceDelay?: number; // Seconds between sections (default: 30)
}
```

**Responsibilities**:
- Manage current section state
- Handle section navigation
- Coordinate content/animation synchronization
- Handle keyboard navigation (arrow keys)
- Manage URL hash updates

**Structure**:
```astro
---
import SectionHeader from './SectionHeader.astro';
import ContentPanel from './ContentPanel.astro';
import AnimationPanel from './AnimationPanel.astro';
import SectionFooter from './SectionFooter.astro';

interface Props {
  initialSection?: number;
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
}

const { 
  initialSection = 1, 
  autoAdvance = false,
  autoAdvanceDelay = 30 
} = Astro.props;
---

<div class="split-layout" data-section={initialSection}>
  <SectionHeader />
  <div class="split-panels">
    <ContentPanel />
    <AnimationPanel />
  </div>
  <SectionFooter />
</div>

<style>
  .split-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .split-panels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex: 1;
  }
  
  @media (max-width: 1024px) {
    .split-panels {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
  }
</style>

<script>
  // Section state management
  // Keyboard navigation
  // URL hash sync
</script>
```

---

### 2. ContentPanel.astro

**Purpose**: Left panel displaying section content from markdown.

**Props**:
```typescript
interface Props {
  // Content passed from parent or fetched internally
}
```

**Responsibilities**:
- Render markdown content for current section
- Maintain scroll position per section
- Highlight key phrases
- Show section title persistently

**Structure**:
```astro
---
// Section content data
const sections = [
  {
    id: 'intro',
    title: 'For the Technical Adjacent',
    content: '...' // Parsed from FULL_GUIDE_v3.md
  },
  // ... 9 more sections
];
---

<div class="content-panel">
  <div class="section-title-sticky">
    <h2 class="section-title">Section Title</h2>
  </div>
  <div class="section-content">
    <!-- Rendered markdown -->
  </div>
</div>

<style>
  .content-panel {
    padding: 2rem 3rem;
    background: var(--bg-light);
    border-right: 1px solid var(--border);
    overflow-y: auto;
    position: relative;
  }
  
  .section-title-sticky {
    position: sticky;
    top: 0;
    background: var(--bg-light);
    padding-bottom: 1rem;
    z-index: 10;
  }
  
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin: 0;
    color: var(--text-primary);
  }
</style>
```

---

### 3. AnimationPanel.astro

**Purpose**: Right panel containing the animation viewport.

**Props**:
```typescript
interface Props {
  sectionId: string;
}
```

**Responsibilities**:
- Render appropriate animation component per section
- Manage animation playback state
- Handle reduced-motion preferences
- Provide animation controls (play/pause/restart)

**Structure**:
```astro
---
import TerminalFrame from './TerminalFrame.astro';

// Animation components (loaded dynamically based on section)
---

<div class="animation-panel">
  <TerminalFrame>
    <slot />  <!-- Section-specific animation -->
  </TerminalFrame>
  
  <div class="animation-controls">
    <button class="control-btn" id="play-pause">
      <span class="play-icon">Play</span>
    </button>
    <button class="control-btn" id="restart">Restart</button>
  </div>
</div>

<style>
  .animation-panel {
    background: #1a1a2e;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .animation-controls {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  .animation-panel:hover .animation-controls {
    opacity: 1;
  }
</style>
```

---

### 4. TerminalFrame.astro

**Purpose**: Terminal-style visual container for animations.

**Props**:
```typescript
interface Props {
  title?: string;       // Terminal window title
  showControls?: boolean; // Window controls (red/yellow/green dots)
}
```

**Responsibilities**:
- Provide consistent terminal aesthetic
- Window chrome (title bar, controls)
- Monospace font environment
- Cursor blinking effect

**Structure**:
```astro
---
interface Props {
  title?: string;
  showControls?: boolean;
}

const { title = 'terminal', showControls = true } = Astro.props;
---

<div class="terminal-frame">
  <div class="terminal-header">
    {showControls && (
      <div class="window-controls">
        <span class="control red"></span>
        <span class="control yellow"></span>
        <span class="control green"></span>
      </div>
    )}
    <span class="terminal-title">{title}</span>
  </div>
  <div class="terminal-body">
    <slot />
  </div>
</div>

<style>
  .terminal-frame {
    background: #0d0d0d;
    border-radius: 8px;
    overflow: hidden;
    font-family: 'SF Mono', 'Fira Code', monospace;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .terminal-header {
    background: #2d2d2d;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .window-controls {
    display: flex;
    gap: 6px;
  }
  
  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  
  .control.red { background: #ff5f56; }
  .control.yellow { background: #ffbd2e; }
  .control.green { background: #27ca40; }
  
  .terminal-title {
    color: #888;
    font-size: 0.8rem;
  }
  
  .terminal-body {
    flex: 1;
    padding: 1rem;
    color: #00ff00;
    font-size: 0.9rem;
    line-height: 1.5;
    overflow-y: auto;
  }
</style>
```

---

### 5. SectionNav.astro

**Purpose**: Section navigation and progress indicator.

**Props**:
```typescript
interface Props {
  currentSection: number;
  totalSections: number;
  sectionTitles: string[];
}
```

**Structure**:
```astro
---
interface Props {
  currentSection: number;
  totalSections: number;
  sectionTitles: string[];
}

const { currentSection, totalSections, sectionTitles } = Astro.props;
---

<nav class="section-nav">
  <button class="nav-btn prev" disabled={currentSection === 1}>
    <span class="arrow">&#8592;</span>
    <span class="label">Previous</span>
  </button>
  
  <div class="progress-info">
    <span class="current-title">{sectionTitles[currentSection - 1]}</span>
    <span class="progress-count">{currentSection} of {totalSections}</span>
  </div>
  
  <button class="nav-btn next" disabled={currentSection === totalSections}>
    <span class="label">Next</span>
    <span class="arrow">&#8594;</span>
  </button>
</nav>
```

---

## Animation Components

Each section has a dedicated animation component:

### Base Pattern

```astro
---
// SectionXAnimation.astro
interface Props {
  isActive: boolean;  // Whether this section is currently visible
  autoPlay?: boolean; // Start animation automatically
}
---

<div class="animation-container" data-animation="section-x">
  <!-- Animation-specific markup -->
</div>

<script>
  import gsap from 'gsap';
  
  // Animation timeline
  const container = document.querySelector('[data-animation="section-x"]');
  
  function createTimeline() {
    const tl = gsap.timeline({ paused: true });
    // Build animation sequence
    return tl;
  }
  
  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReducedMotion) {
    const tl = createTimeline();
    // Play when section becomes active
  }
</script>
```

### Section-Specific Animations

| Component | Section | Key Elements |
|-----------|---------|--------------|
| `InterfacesAnimation.astro` | 2 | Orb, interface costumes, split reveal |
| `TerminalAnimation.astro` | 3+4 | Chat vs terminal parallel, timeline |
| `CreationAnimation.astro` | 5 | Output cascade (docs, images, audio) |
| `MarkdownAnimation.astro` | 6 | Layer stacking, file save/load |
| `StructureAnimation.astro` | 7 | Text reorganization, before/after |
| `ContextAnimation.astro` | 8 | Vending machine, four buttons |
| `DecoratorsAnimation.astro` | 9 | Format morphing (XML->JS->JSON->HTML->MD) |
| `FactoryAnimation.astro` | 10 | Walls with text, glow activation |

---

## State Management

### Section State

```typescript
// Stored in SplitLayout, accessed via data attributes and events

interface SectionState {
  currentSection: number;
  totalSections: number;
  animationPlaying: boolean;
  autoAdvance: boolean;
}

// Custom events for communication
document.dispatchEvent(new CustomEvent('section:change', { 
  detail: { section: 3 } 
}));

document.addEventListener('section:change', (e) => {
  // Update content panel
  // Trigger animation
  // Update URL hash
});
```

### URL Synchronization

```typescript
// Section IDs map to URL hashes
const sectionHashes = [
  'intro',
  'interfaces',
  'terminal',
  'packages',
  'creation',
  'markdown',
  'structure',
  'context',
  'decorators',
  'factory'
];

// Update URL on section change
function updateHash(sectionIndex: number) {
  window.location.hash = sectionHashes[sectionIndex];
}

// Read initial section from URL
function getSectionFromHash(): number {
  const hash = window.location.hash.slice(1);
  const index = sectionHashes.indexOf(hash);
  return index >= 0 ? index : 0;
}
```

---

## Content Integration

### Parsing FULL_GUIDE_v3.md

The content file uses `# Section Title` headers. Parse into sections:

```typescript
// scripts/parseContent.ts (build-time helper)

interface Section {
  id: string;
  number: number;
  title: string;
  content: string;
  wordCount: number;
}

function parseContent(markdown: string): Section[] {
  const sections: Section[] = [];
  const parts = markdown.split(/^# /gm).filter(Boolean);
  
  parts.forEach((part, index) => {
    const lines = part.split('\n');
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    
    sections.push({
      id: slugify(title),
      number: index + 1,
      title,
      content,
      wordCount: content.split(/\s+/).length
    });
  });
  
  return sections;
}
```

### Rendering Content

Use Astro's markdown capabilities:

```astro
---
import { marked } from 'marked';

const sections = await getSections();
const currentSection = sections[0];
const htmlContent = marked(currentSection.content);
---

<article class="section-content" set:html={htmlContent} />
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile-first approach */

/* Default: Mobile (stacked) */
.split-panels {
  display: flex;
  flex-direction: column;
}

.content-panel {
  min-height: 50vh;
}

.animation-panel {
  min-height: 50vh;
}

/* Tablet and up: Side-by-side */
@media (min-width: 768px) {
  .split-panels {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* Large screens: More content space */
@media (min-width: 1280px) {
  .split-panels {
    grid-template-columns: 55% 45%;
  }
}
```

### Mobile Considerations

1. **Stacked layout**: Content above animation
2. **Swipe navigation**: Between sections
3. **Collapsible animation**: Tap to expand/collapse
4. **Simplified animations**: Reduce complexity on mobile

---

## Accessibility

### Keyboard Navigation

```typescript
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      goToNextSection();
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      goToPrevSection();
      break;
    case ' ':  // Spacebar
      toggleAnimationPlayback();
      break;
  }
});
```

### Reduced Motion

```typescript
// Check preference
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// GSAP pattern
gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
  // Full animations
});

gsap.matchMedia().add('(prefers-reduced-motion: reduce)', () => {
  // Instant state changes only
  gsap.set('.element', { opacity: 1 });
});
```

### ARIA Labels

```html
<nav class="section-nav" aria-label="Section navigation">
  <button aria-label="Go to previous section">Previous</button>
  <div aria-live="polite" aria-atomic="true">
    Section 3 of 10: The Terminal
  </div>
  <button aria-label="Go to next section">Next</button>
</nav>

<main class="content-panel" aria-label="Section content">
  <!-- Content -->
</main>

<aside class="animation-panel" aria-label="Visual demonstration">
  <!-- Animation -->
</aside>
```

---

## File Structure (Final)

```
src/
  pages/
    index.astro
  components/
    SplitLayout.astro
    ContentPanel.astro
    AnimationPanel.astro
    SectionHeader.astro
    SectionFooter.astro
    SectionNav.astro
    TerminalFrame.astro
    animations/
      InterfacesAnimation.astro
      TerminalAnimation.astro
      CreationAnimation.astro
      MarkdownAnimation.astro
      StructureAnimation.astro
      ContextAnimation.astro
      DecoratorsAnimation.astro
      FactoryAnimation.astro
  layouts/
    BaseLayout.astro
  styles/
    global.css
    animations.css
  lib/
    content.ts        # Content parsing utilities
    sections.ts       # Section data and metadata

docs/
  ROADMAP.md
  CONTENT_ANIMATION_MAP.md
  COMPONENT_ARCHITECTURE.md
```

---

## Next Steps

1. **Create SplitLayout.astro** - Basic structure without animations
2. **Create ContentPanel.astro** - Static content rendering
3. **Create TerminalFrame.astro** - Visual container
4. **Implement section navigation** - State management
5. **Add first animation** - Section 7 "The Transformation"
6. **Iterate on remaining animations**
