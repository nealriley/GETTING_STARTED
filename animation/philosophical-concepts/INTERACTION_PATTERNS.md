# Interaction Patterns for Philosophical Concepts

## Overview

This document details how users interact with philosophical concept elements across different treatments and devices.

---

## Pattern 1: Hover → Expand → Click Through

**Used in**: Treatment 1 (Sidebar), Treatment 5 (Breadcrumb)

### Desktop Flow

```
State 1: Default (Minimized)
┌─────────┐
│   [?]   │  ← User sees subtle indicator
└─────────┘

↓ (Mouse hover)

State 2: Preview (Tooltip)
┌──────────────────────┐
│ "The medium is the   │
│ message" — McLuhan   │
│                      │
│ Click for more       │
└──────────────────────┘

↓ (Click)

State 3: Full Expansion
┌──────────────────────┐
│ 💡 McLuhan (1964)   │
│                      │
│ "The medium is the   │
│ message"             │
│                      │
│ [Full explanation]   │
│                      │
│ 🎥 Watch Video       │
│ 📖 Read Article      │
│ 🔗 Share             │
└──────────────────────┘

↓ (Click external link)

New Tab: YouTube video or Wikipedia article
```

### Mobile Flow

```
State 1: Default (Minimized)
┌─────────┐
│  [💡]   │  ← Slightly larger tap target
└─────────┘

↓ (Tap)

State 2: Slide-up Drawer (75% screen height)
┌────────────────────────────────────┐
│ ✕                          [Close] │
├────────────────────────────────────┤
│                                    │
│ 💡 McLuhan (1964)                 │
│                                    │
│ "The medium is the message"       │
│                                    │
│ [Simplified explanation]          │
│                                    │
│ [Watch Video]  [Read Article]     │
│                                    │
│          [Share]                   │
│                                    │
└────────────────────────────────────┘

↓ (Swipe down or tap outside)

Dismiss: Returns to minimized state
```

### Interaction Details

**Desktop**:
- Hover delay: 300ms (prevents accidental triggers)
- Tooltip timeout: Auto-dismisses after 5s if no interaction
- Click outside: Closes expanded view
- ESC key: Closes expanded view

**Mobile**:
- Tap target: Minimum 44x44px (iOS) / 48x48dp (Android)
- Slide-up animation: 300ms easing
- Backdrop: Semi-transparent (rgba(0,0,0,0.4))
- Swipe down gesture: Sensitivity threshold 50px
- Auto-dismiss: Never (user must explicitly close)

---

## Pattern 2: Pause → Decide → Continue

**Used in**: Treatment 2 (Interstitials)

### Flow (All Devices)

```
Animation Playing
     ↓
Scene Transition Detected
     ↓
Fade to Interstitial Screen
╔════════════════════════════════════╗
║                                    ║
║  "The medium is the message"      ║
║  — Marshall McLuhan, 1964         ║
║                                    ║
║  [Brief explanation]              ║
║                                    ║
║  [Watch Video ↗]  [Read More ↗]  ║
║                                    ║
║       [Continue Animation →]      ║
║                                    ║
╚════════════════════════════════════╝

User Decision Point:
├── Click "Continue" → Resume animation (default)
├── Click "Watch Video" → New tab + resume animation
├── Click "Read More" → New tab + resume animation
└── Wait 30s → Auto-continue (with countdown)
```

### Timing Considerations

**Automatic Countdown**:
```
Animation will continue in 30...
Animation will continue in 29...
...
Animation will continue in 3...
Animation will continue in 2...
Animation will continue in 1...

[Fading back to animation]
```

**User Control**:
- Clicking any link opens new tab but DOES NOT pause countdown
- Clicking "Continue" immediately resumes
- Clicking "Back" returns to previous scene
- Countdown only shows if no interaction for 5 seconds

### Accessibility

**Keyboard Navigation**:
- Tab: Cycle through buttons
- Enter/Space: Activate button
- ESC: Continue animation immediately

**Screen Reader**:
```
"Interstitial break. Quote from Marshall McLuhan, 1964:
The medium is the message. [Full text]. 
Three actions available:
Button: Watch two-minute video
Button: Read Wikipedia article
Button: Continue animation
Animation will automatically continue in 30 seconds."
```

---

## Pattern 3: Persistent Context Bar

**Used in**: Treatment 3 (Footer Status Bar)

### Desktop Flow

```
State 1: Footer Always Visible
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Scene 2/10  •  [💡] McLuhan (1964)  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

↓ (Hover over [💡])

State 2: Tooltip Preview
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Scene 2/10  •  [💡] McLuhan (1964)  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              ↓
      ┌──────────────────┐
      │ "The medium is   │
      │ the message"     │
      │                  │
      │ Click to learn   │
      └──────────────────┘

↓ (Click [💡])

State 3: Slide-Up Drawer (50% screen height)
┌────────────────────────────────────┐
│ [Terminal content dimmed]          │
│                                    │
├────────────────────────────────────┤
│ 💡 Philosophical Context           │
│                                    │
│ "The medium is the message"       │
│ — Marshall McLuhan (1964)         │
│                                    │
│ [Full explanation]                │
│                                    │
│ 🎥 Watch  📖 Read  🔗 Share       │
│                                    │
│                          [Close ✕] │
└────────────────────────────────────┘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 Scene 2/10  •  [💡] McLuhan (1964)  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Mobile Flow

```
State 1: Thin Footer Bar
━━━━━━━━━━━━━━━━━━━━━━━━━━━
 2/10  •  [💡]  •  McLuhan
━━━━━━━━━━━━━━━━━━━━━━━━━━━

↓ (Tap [💡])

State 2: Full-Screen Overlay
┌────────────────────────────┐
│ ✕                          │
├────────────────────────────┤
│                            │
│ 💡 McLuhan (1964)         │
│                            │
│ "The medium is the        │
│ message"                   │
│                            │
│ [Simplified text]         │
│                            │
│ [Watch]  [Read]  [Share]  │
│                            │
└────────────────────────────┘
```

### Footer Behavior During Animation

**Dynamic Updates**:
- Footer updates automatically as scenes change
- Philosophical concept indicator changes per scene
- Progress counter increments
- Smooth 300ms fade transition between updates

**Footer Actions**:
```
[Scene Counter] = Clickable → Scene navigation menu
[💡 Icon]      = Clickable → Philosophical drawer
[Concept Name] = Clickable → Same as icon
```

---

## Pattern 4: Modal Overlay Interruption

**Used in**: Treatment 4 (Interactive Overlay), Treatment 7 Scene 1

### Flow (All Devices)

```
Scene Playing: Terminal demonstrates concept
     ↓
Key Moment Reached (e.g., after diff comparison)
     ↓
Animation Pauses + Overlay Fades In (500ms)

╔════════════════════════════════════╗
║ 💡 Key Insight                    ║
║                                    ║
║ "The medium is the message"       ║
║ — Marshall McLuhan                ║
║                                    ║
║ The interface fundamentally       ║
║ shapes what's possible.           ║
║                                    ║
║  [Learn More ↗]  [Continue →]    ║
╚════════════════════════════════════╝

Default Action Path (85% of users):
User clicks "Continue" → Overlay fades out → Animation resumes

Deep Engagement Path (15% of users):
User clicks "Learn More" → Expanded overlay appears
```

### Expanded Overlay State

```
╔════════════════════════════════════╗
║ 💡 Philosophical Context          ║
║                                    ║
║ "The medium is the message"       ║
║ — Marshall McLuhan (1964)         ║
║                                    ║
║ [Full explanation - 2 paragraphs] ║
║                                    ║
║ Relevance to AI Tools:            ║
║ • Different interfaces enable     ║
║   different capabilities          ║
║ • Access, not intelligence, is    ║
║   often the bottleneck            ║
║                                    ║
║ 🎥 Watch McLuhan (2:47)           ║
║ 📖 Read Wikipedia Article         ║
║ 🔗 Share This Insight             ║
║                                    ║
║              [Continue →]         ║
╚════════════════════════════════════╝
```

### Timing and Auto-Behavior

**No Auto-Dismiss**: User must click to continue
- Prevents users missing content
- Ensures intentional engagement
- Respects user agency

**But: Clear Default Action**:
- "Continue" button is primary (bold, colored)
- "Learn More" is secondary (subtle, outline)
- Enter key → Continue
- Clicking backdrop → Continue (desktop only)

---

## Pattern 5: End Credits Scroll

**Used in**: Treatment 6 (End Credits), Treatment 7 (Hybrid end)

### Flow

```
Scene 10 (Outro) Completes
     ↓
Fade to Black (1s)
     ↓
End Credits Begin (Auto-scroll, slow pace)

╔════════════════════════════════════╗
║  CONCEPTS EXPLORED IN THIS GUIDE  ║
╚════════════════════════════════════╝

[Auto-scrolling content]

"The Medium is the Message" (1964)
└─ Marshall McLuhan
   
   [Full explanation]
   
   📺 Watch Video (2:47)
   📖 Read Article
   
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"The Map is Not the Territory" (1931)
└─ Alfred Korzybski

   [Full explanation]
   
   📖 Read Article
   📚 Original Source

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Continues to end]

╔════════════════════════════════════╗
║  Read the full written guide:     ║
║  [GITHUB_LINK]                    ║
╚════════════════════════════════════╝

[Scroll ends, cursor returns]
```

### User Controls

**Scroll Control**:
- Auto-scroll: 40px/second (comfortable reading pace)
- Mouse wheel: Manual scroll (pauses auto-scroll)
- Spacebar: Pause/resume auto-scroll
- Click & drag: Scroll freely

**Navigation**:
- All links open in new tabs
- Clicking GitHub link → Navigates away from animation
- "Back to Start" button visible throughout

**Mobile Adaptations**:
- Touch scroll: Natural mobile behavior
- No auto-scroll on mobile (user-controlled only)
- Sticky "Read Full Guide" button at top

---

## Pattern 6: Share Actions

**Available in**: All treatments with "Share" buttons

### Share Flow

```
User Clicks "Share" Button
     ↓
Share Modal Appears
╔════════════════════════════════════╗
║ Share This Insight                 ║
║                                    ║
║ "The medium is the message"       ║
║ — Marshall McLuhan                ║
║                                    ║
║ [Twitter] [LinkedIn] [Email]      ║
║ [Copy Link]                        ║
║                                    ║
╚════════════════════════════════════╝
```

### Pre-Populated Share Text

**Twitter/X**:
```
"The medium is the message" — Marshall McLuhan

Different AI interfaces don't just deliver AI differently, 
they fundamentally change what's possible.

Explore this concept: [LINK] #AI #McLuhan
```

**LinkedIn**:
```
Fascinating insight from "Getting Started with AI Tools":

Marshall McLuhan's "the medium is the message" perfectly 
describes why choosing the right AI interface matters so much.

The same model in different contexts (web chat, CLI, desktop app) 
enables vastly different capabilities. It's not about intelligence 
— it's about access.

Learn more: [LINK]
```

**Email**:
```
Subject: Thought you'd find this interesting: McLuhan + AI

Body:
I came across this interactive guide about AI tools that 
references Marshall McLuhan's "the medium is the message."

The key insight: Different AI interfaces fundamentally change 
what's possible, not just how convenient it is.

Worth checking out: [LINK]
```

**Copy Link**:
```
[ANIMATION_URL]?ref=share&concept=mcluhan&scene=1

✓ Link copied to clipboard!
```

### Analytics Tracking

```javascript
track('share_clicked', {
  concept: 'mcluhan',
  scene: 1,
  method: 'twitter',
  timestamp: Date.now()
})
```

---

## Accessibility Patterns

### Keyboard Navigation (All Treatments)

| Key | Action |
|-----|--------|
| Tab | Move focus to next interactive element |
| Shift+Tab | Move focus to previous element |
| Enter | Activate focused button/link |
| Space | Activate button, pause/play animation |
| Esc | Close overlay/drawer, return to animation |
| Arrow Keys | Navigate scenes (if overlay closed) |

### Screen Reader Behavior

**Treatment 1 (Sidebar)**:
```
"Philosophical concept marker. 
Marshall McLuhan, 1964. 
The medium is the message.
Button: Learn more about this concept."
```

**Treatment 2 (Interstitial)**:
```
"Interstitial pause. Main content: The medium is the message, 
by Marshall McLuhan, 1964. [Full text]. 
Three buttons available: Watch video, Read article, Continue animation. 
Animation will resume in 30 seconds."
```

**Treatment 4 (Overlay)**:
```
"Animation paused. Key insight overlay visible.
Quote: The medium is the message, by Marshall McLuhan.
Brief explanation: [text].
Two actions: Learn more, or Continue animation."
```

### Motion Reduction

**For users with `prefers-reduced-motion` enabled**:
- All fade animations replaced with instant state changes
- No slide-up/slide-down animations
- Auto-scroll disabled (manual only)
- Typewriter effects become instant

**Affected patterns**:
- Overlays appear instantly (no fade)
- Drawers snap open (no slide)
- Interstitials cut directly (no fade transition)

---

## Error States and Edge Cases

### Link Failed to Open

```
╔════════════════════════════════════╗
║ ⚠️ Could not open link            ║
║                                    ║
║ Please try copying the URL:       ║
║ https://youtube.com/...           ║
║                                    ║
║ [Copy URL]  [Try Again]           ║
╚════════════════════════════════════╝
```

### No Internet Connection

```
╔════════════════════════════════════╗
║ ℹ️ No internet connection         ║
║                                    ║
║ External resources unavailable.   ║
║ The animation will continue.      ║
║                                    ║
║ [Continue]                         ║
╚════════════════════════════════════╝
```

### Browser Compatibility Issues

```
╔════════════════════════════════════╗
║ ⚠️ Limited interactivity           ║
║                                    ║
║ Your browser doesn't fully support ║
║ these features. Consider using:   ║
║ • Chrome 90+                       ║
║ • Firefox 88+                      ║
║ • Safari 14+                       ║
║                                    ║
║ [Continue Anyway]                  ║
╚════════════════════════════════════╝
```

---

## Analytics Events to Track

### Engagement Metrics

```javascript
// Initial appearance
track('philosophical_concept_shown', {
  concept: 'mcluhan',
  scene: 1,
  treatment: 'overlay'
})

// User interaction
track('philosophical_concept_engaged', {
  concept: 'mcluhan',
  action: 'hover' | 'click' | 'expand',
  time_on_screen: 2.3 // seconds
})

// Deep engagement
track('philosophical_concept_link_clicked', {
  concept: 'mcluhan',
  link_type: 'video' | 'wikipedia' | 'share',
  scene: 1
})

// Dismissal
track('philosophical_concept_dismissed', {
  concept: 'mcluhan',
  method: 'continue_button' | 'escape_key' | 'backdrop_click',
  time_shown: 5.7 // seconds
})
```

### Funnel Analysis

```
Shown Concept → Engaged → Expanded → Clicked External → Shared
     100%         45%        15%           8%            2%
```

---

## Implementation Notes

### State Management

```javascript
// Global state for philosophical overlays
const philosophicalState = {
  currentConcept: 'mcluhan' | 'korzybski' | 'synthesis',
  isVisible: boolean,
  isExpanded: boolean,
  hasBeenSeen: {
    mcluhan: boolean,
    korzybski: boolean,
    synthesis: boolean
  }
}
```

### Responsive Breakpoints

```css
/* Desktop: Full treatment */
@media (min-width: 1024px) {
  /* Sidebar annotations visible */
  /* Hover states active */
}

/* Tablet: Simplified */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Drawer approach */
  /* Touch-optimized */
}

/* Mobile: Minimal */
@media (max-width: 767px) {
  /* Icons only, expand on tap */
  /* Full-screen overlays */
}
```

---

**Status**: Interaction patterns documented
**Next**: Prototype one pattern for user testing
**Decision**: Based on user feedback and analytics
