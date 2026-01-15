# Getting Started Interactive Guide - Project Brief

## Project Overview

**Goal:** Create an accessible, engaging guide to AI-assisted technical work for non-technical professionals (UX researchers, product managers, designers, etc.) who work adjacent to technical systems but feel the gap between understanding concepts and actually using them.

**Format:** Multi-modal content project with:
1. **Primary:** Comprehensive markdown guide (static, accessible, searchable)
2. **Companion:** 5-7 minute xterm.js animated terminal experience (interactive, shareable, memorable)
3. **Distribution:** Modular content pieces for social media, blog posts, and presentations

## Target Audience

**Primary Persona:** "The Technical Adjacent"
- Works WITH technical systems daily (UX research, product management, design, data analysis)
- Hears terms like "CLI," "prompt engineering," "MCPs" in meetings
- Gap between knowing WHAT these are and HOW to use them
- Example: UX researcher at Christmas lunch asking about terminal concepts

**Secondary Audience:**
- "Vibe coders" exploring AI tools
- Educators teaching AI literacy
- Technical professionals sharing resources with non-technical colleagues

## Core Message

**AI coding tools unlock power for everyone, not just programmers.**

The same features that make these tools good at code (file access, structure understanding, multi-modality) make them powerful for:
- Research and synthesis
- Technical writing and documentation
- Task management and planning
- Conversation-based thinking (mechanical rubber duck)

## Key Concepts Covered

1. **Interface Matters More Than Model**
   - Same AI, drastically different capabilities based on interface
   - Web chat vs CLI vs desktop apps vs embedded tools
   - Recent launches: Claude Cowork, Gemini 3, Opus 4.5

2. **The Terminal Isn't Scary**
   - Historical context: stepping backward to leap forward
   - World runs on terminals (servers, cloud, dev tools)
   - Definition: human-interpretable, machine-executable language
   - Package managers as "other app stores" (Homebrew, npm, pip, apt)

3. **More Than Just Code**
   - File access is transformative for everyone
   - "Good at code" means "good at structured content"
   - Use cases: research, technical writing, rubber duck debugging
   - "You're not writing code, you're writing a script"

4. **Markdown as Working Memory**
   - Files on disk > ephemeral chat
   - Three patterns: task lists, agent definitions, memory files
   - Markdown structure (headers, lists, code blocks) is machine-parseable

5. **Structure Unlocks Quality**
   - Prompt structure matters as much as content
   - Grouping, labeling, logical organization
   - Training optimization: models prefer certain patterns

6. **Context Is King**
   - The vending machine metaphor: press the right buttons
   - Context equation: prompt + environment + references + signal-to-noise
   - Feed context, get quality; starve context, get garbage

7. **Decorating Prompts**
   - XML tags for clear boundaries
   - CSV with headers for structured data
   - Proprietary formats (docx, xlsx) automatically parsed
   - Build your own decorators (consistency is key)

8. **The Factory Is the Teacher**
   - Means of production (documentation) has become a sage
   - Accumulated wisdom in READMEs, Stack Overflow, manuals
   - "Walls of the factory" activate foundation models
   - Context = access to collective memory

## Content Strategy

### Primary Content: Comprehensive Markdown Guide
- **Purpose:** Accessible, searchable, authoritative reference
- **Location:** GitHub, easily forkable and shareable
- **Length:** ~5,000 words (current draft)
- **Structure:** 10 major sections with examples, analogies, practical guidance
- **SEO/Accessibility:** Screen reader friendly, searchable, linkable sections

### Companion Content: xterm.js Animation
- **Purpose:** Engaging "trailer" that markets the full guide
- **Format:** Interactive terminal animation with 10 scenes
- **Length:** 5-7 minutes
- **Features:** Typewriter effects, ASCII art, live command demos, keyboard navigation
- **Distribution:** Embeddable iframe, shareable link, social clips

### Modular Content Pieces
Break full guide into standalone pieces for distribution:
- **Social media threads:** Key concepts as tweet/LinkedIn threads
- **Blog posts:** Each major section expanded with case studies
- **Video clips:** 30-60 second highlights from animation
- **Infographics:** Visual representations of key concepts
- **Slide decks:** Presentation-ready versions for talks/workshops

## Design Principles

1. **Empathetic, Not Condescending**
   - Never say "don't be intimidated" (calling it out makes it worse)
   - Treat concepts as matter-of-fact, not scary
   - Use accessible analogies (chef/kitchen, vending machine, factory)

2. **Show, Don't Just Tell**
   - Concrete examples over abstractions
   - Live command demonstrations in animation
   - Before/after comparisons

3. **Playful But Precise**
   - Definitions with personality ("CLI = Command Line Interface - the command line was literally a line...")
   - Memorable metaphors without sacrificing accuracy
   - Punch lines that stick ("Press the right buttons, for gods sake")

4. **Structure as Content**
   - The guide itself is an example of good documentation
   - Meta-commentary: "Why this is called 'Getting Started'"
   - Teaching through demonstration

## Success Metrics

**Primary:**
- Full guide views and time on page
- Animation completion rate (target: >60%)
- Social shares and backlinks
- Community contributions (forks, PRs, translations)

**Secondary:**
- Anecdotal feedback from "technical adjacent" users
- Usage in educational contexts (bootcamps, workshops)
- Mentions in AI literacy discussions
- Conversion to trying tools (Claude Code, Cowork, etc.)

## Technical Implementation

### Static Guide
- **Format:** Markdown hosted on GitHub
- **Styling:** GitHub-flavored markdown, clean and readable
- **Enhancements:** Optional (syntax highlighting, expandable sections, embedded demos)

### Animated Experience
- **Technology:** xterm.js for terminal emulation
- **Hosting:** Static site (Netlify, Vercel, GitHub Pages)
- **Features:** 
  - Typewriter animation with variable speeds
  - Keyboard controls (Enter, arrows, skip)
  - Scene navigation and progress indicators
  - Accessibility modes (screen reader, reduced motion)
  - Mobile responsive
  - Analytics tracking

### Distribution
- **Primary:** GitHub repository
- **Landing page:** Single-page site with animation + full text
- **Embeds:** iframe for blogs, documentation sites
- **Social:** Clips exported as video for Twitter, LinkedIn
- **Email:** Text excerpts for newsletters

## Timeline & Phases

**Phase 1: Foundation** (Complete)
- ✅ Core content written (full markdown guide)
- ✅ Animation storyboard created
- ✅ Project brief defined

**Phase 2: Implementation**
- Build xterm.js animation engine
- Create scene management system
- Design visual assets (ASCII art, color schemes)
- Test on multiple devices/browsers

**Phase 3: Polish**
- Accessibility audit and fixes
- Performance optimization
- Analytics integration
- Beta testing with target audience

**Phase 4: Launch**
- GitHub repository public
- Landing page live
- Social media campaign
- Outreach to educational communities

**Phase 5: Iteration**
- Community feedback incorporation
- Additional language translations
- Expanded use cases
- Spin-off content (workshops, talks, deep-dives)

## Open Questions

1. **Branding:** Does this project need a name beyond "Getting Started"?
2. **Voice/Narrator:** First person ("I") vs second person ("you") vs neutral?
3. **Licensing:** CC-BY? MIT? Open for commercial use?
4. **Maintenance:** Who owns updates as tools evolve (Cowork updates, new models)?
5. **Monetization:** Free forever? Donations? Sponsorships?

## Inspiration & References

- **Content:** Personal experience teaching non-technical people (Christmas lunch conversation with UX researcher)
- **Format:** Terminal-based storytelling (inspired by command-line adventures, hacker aesthetics)
- **Philosophy:** "The factory is the teacher" - documentation as collective wisdom
- **Timing:** Late 2025 moment (Gemini 3, Opus 4.5, Cowork launch, CLI resurgence)

## Next Steps

See individual folders for:
- `/content/` - Modular content pieces
- `/animation/` - Storyboard and implementation
- `/assets/` - Visual elements, ASCII art, examples
- `/archive/` - Initial drafts and brainstorming

---

**Last Updated:** January 14, 2026
**Status:** Foundation Complete, Ready for Implementation
**Contact:** [Your details]
