# Section Briefs: Unified Structure for All Nine Sections

> **ARCHIVED**: This document reflects the original 9-section structure.
> The project has since been restructured to 12 sections.
> See `docs/sections/` for current section design notes.
> Archived: 2026-01-19

## The Through-Line

**Core narrative arc:**
> AI tools are powerful, but the gap between "knowing they exist" and "using them effectively" is vast. This guide bridges that gap by revealing the underlying patterns: everything is structured text, structure aids thinking, and the accumulated documentation of human work is what makes AI useful.

**Key phrases that recur:**
- "The gap narrows"
- "Structured text"
- "Description becomes reality"
- "Press the right buttons"
- "The factory walls"

**Philosophical anchors:**
- "The medium is the message" (McLuhan)
- "The map is not the territory" (Korzybski)
- "The model isn't the interface" (Our synthesis)
- "Capital becomes labor" (Marxist reframe)

**Consistent tone:**
- Empathetic without being condescending
- Matter-of-fact about technical concepts
- Show, don't tell
- Concrete examples over abstractions
- Playful but precise

---

## Standard Section Structure

Each section should follow this template:

```
# [Section Title]

## The Key Insight
[One paragraph capturing the core idea]

## Why This Matters
[Connection to the reader's goals]

## The Concepts
[Main content, 3-5 key concepts with examples]

## Common Mistakes
[What people get wrong]

## Practical Application
[What to actually do]

## Key Takeaways
[Bullet list of 3-5 points]
```

---

# Section 1: For the Technical Adjacent

## The Key Insight
AI tools can bridge the gap between technical and non-technical work, but you need foundational knowledge to use them effectively. You don't need to become a developer, but you need to understand the kitchen you're cooking in.

## Status
Exists in current draft. Needs light revision for consistency.

## Core Metaphor
**Chef/Kitchen:** You don't need to be a professional chef to cook dinner, but you need to know the dangers in a kitchen.

## Concepts to Cover
1. Who this guide is for (technical adjacent roles)
2. The "vibe coder" phenomenon
3. AI as bridge technology
4. The gap between knowing and doing
5. What this guide will teach

## Questions/Tasks Before Drafting

- [ ] **Audience confirmation:** Is "UX researcher at Christmas lunch" still our primary persona?
- [ ] **Scope check:** What specific outcomes do we promise by the end?
- [ ] **Tone calibration:** Review opening paragraphs - too academic? Too casual?
- [ ] **Examples needed:** Do we need a concrete "before/after" story in the intro?
- [ ] **Length target:** How long should this section be? (Current: ~400 words)

## Draft Readiness: 80%
Existing content is solid. Needs consistency pass and possibly a stronger hook.

---

# Section 2: Not All Models Are the Same, Not All Interfaces Either

## The Key Insight
The same AI model behaves completely differently depending on the interface you use. The interface isn't just a wrapper - it determines what's possible. The model isn't the interface; the map is not the territory; the medium is the message.

## Status
Exists in current draft. Philosophical concepts documented separately. Needs integration.

## Core Metaphor
**Map/Territory:** The AI model (territory) is distinct from the interface (map) you use to access it.

## Concepts to Cover
1. Same model, different experiences (Claude web vs CLI vs Cowork)
2. The interface landscape (web chat, CLI, desktop apps, embedded)
3. Why interfaces matter more than model choice
4. The bottleneck is access, not intelligence
5. Philosophical grounding (McLuhan, Korzybski)

## Questions/Tasks Before Drafting

- [ ] **Philosophical integration:** How prominently do we feature McLuhan/Korzybski? Sidebar? Woven in? End reference?
- [ ] **Current landscape:** Update tool list - is Cowork still the right example? What's new?
- [ ] **Visual approach:** Do we include the interactive overlay concepts from VISUAL_TREATMENTS.md?
- [ ] **Depth vs breadth:** Deep dive on 2-3 interfaces or survey of many?
- [ ] **Call to action:** What should reader DO after this section? Try different interfaces?

## Draft Readiness: 60%
Content exists but philosophical layer needs integration. Decide on approach first.

---

# Section 3: The Terminal - A Step Backward to Leap Forward

## The Key Insight
The terminal is the original chat interface - a text-based conversation with your computer. Understanding it unlocks access to millions of tools through package managers, and helps you understand what AI is doing when it executes commands.

## Status
Extensively documented. Two stories identified: (1) Terminal basics/chat comparison, (2) Hidden app stores.

## Core Metaphor
**Original Chat Interface:** Terminal is turn-based dialogue, just like AI chat. AI acts as translator between natural language and terminal commands.

## Concepts to Cover
1. What a terminal actually is (text conversation with computer)
2. Terminal vs AI chat comparison
3. AI as translation layer
4. The hidden app stores (package managers)
5. Homebrew, npm, pip ecosystem overview
6. Why AI assumes you know this
7. Security and trust models

## Questions/Tasks Before Drafting

- [ ] **Two stories or one?** Do we keep terminal basics and package managers as separate subsections, or weave together?
- [ ] **Depth on package managers:** How much detail on each (Homebrew, npm, pip, etc.)? Full tutorial or just awareness?
- [ ] **Platform focus:** Mac-first with Windows/Linux notes? Or platform-agnostic?
- [ ] **Practical exercise:** Should we include a "try this now" moment (e.g., install Homebrew)?
- [ ] **Animation alignment:** Does written content match the revised Scene 2 & 3 storyboards?
- [ ] **Length target:** This could be very long. What's the cap? Split into 3A and 3B?

## Draft Readiness: 70%
Concepts well-documented. Need to decide on structure and depth before writing.

---

# Section 4: More Than Just Code

## The Key Insight
AI models trained on code become good at ALL structured text because code is just structured text with strict patterns. The same capabilities that let AI write code let it process documents, analyze data, and navigate any structured information.

## Status
Extensively documented with research grounding. Visual cross-section approach defined.

## Core Metaphor
**Cross-Section Diagram:** Like engineering diagrams showing car components, we show how different text types share the same underlying structure.

## Concepts to Cover
1. Everything becomes tokens (tokenization as equalizer)
2. Pattern transfer from code training
3. Why "good at code" means "good at structured text"
4. File access as superpower
5. Three use cases: research/synthesis, technical writing, mechanical rubber duck
6. The unifying thread (structure recognition)

## Questions/Tasks Before Drafting

- [ ] **Technical depth:** How much transformer/attention mechanism detail? Keep accessible or go deep?
- [ ] **Research citations:** Include paper references inline or in footnotes/appendix?
- [ ] **Visual assets:** Do we need the cross-section diagrams created before writing, or describe them in text?
- [ ] **Use case balance:** Equal weight to all three use cases, or emphasize one?
- [ ] **Grounding language:** Review for anthropomorphizing - "model recognizes" vs "model understands"
- [ ] **Connection to Section 3:** How do we bridge from "terminal/package managers" to "more than code"?

## Draft Readiness: 65%
Concepts solid but need to decide on technical depth and visual approach.

---

# Section 5: The Unreasonable Usefulness of Markdown

## The Key Insight
Markdown files are executable specifications. You can describe prompts, skills, and agents into existence. The output of your work with AI should often be a file on disk - persistent, portable, and powerful.

## Status
Extensively documented. "Description as creation" theme established.

## Core Metaphor
**Conjuring:** You describe something in structured text, and it becomes real. Like a spell, but it actually works.

## Concepts to Cover
1. Why files on disk matter (persistence, portability)
2. Three layers: prompt files, skill definitions, agent definitions
3. The conjuring effect (describe → exists)
4. Markdown as configuration language
5. Evolution of a workflow (Day 1 → Day 90)
6. Living documents (version, iterate, improve)
7. Why markdown specifically (format comparison)

## Questions/Tasks Before Drafting

- [ ] **Example files:** Do we include complete, copy-paste-able agent/skill examples?
- [ ] **Tool-specific guidance:** Mention Claude Projects, custom GPTs, or keep tool-agnostic?
- [ ] **Folder structure:** Include the full project folder diagram?
- [ ] **Markdown primer:** How much syntax explanation? Assume knowledge or teach basics?
- [ ] **Conjuring metaphor:** Is "conjuring/spell" too whimsical for the tone?
- [ ] **Connection to Section 6:** Clear handoff to "structure" section?

## Draft Readiness: 75%
Well-documented. Main decision is depth of examples and tool-specificity.

---

# Section 6: A Little Bit of Structure Goes a Long Way

## The Key Insight
The act of structuring a document IS the act of structuring your thoughts. Choosing a format that supports structure forces clarity. The better prompt isn't just better written - it was better THOUGHT. (Weave this in, don't state it.)

## Status
Extensively documented. "Show don't tell" approach defined.

## Core Metaphor
**Format as Forcing Function:** When you choose a format (table, outline, steps), you choose to think in a particular way.

## Concepts to Cover
1. The mess before structure (raw thought dump)
2. Format as forcing function
3. Different formats, different thinking (tables, lists, outlines, steps)
4. The transformation effect (watch prompt improve)
5. Structure reveals what you don't know (empty cells as gifts)
6. Progressive structuring (brain dump → group → format)
7. Structure as communication

## Questions/Tasks Before Drafting

- [ ] **Weaving the insight:** Review draft to ensure we SHOW the insight, never STATE it directly
- [ ] **Before/after examples:** How many transformation examples? One detailed or several brief?
- [ ] **Format reference:** Include quick reference for when to use each format?
- [ ] **AI assistance:** Mention using AI to help find structure?
- [ ] **Connection to Section 7:** Clear bridge to "context" (structure IS a form of context)?
- [ ] **Practical exercise:** "Try restructuring this mess" interactive element?

## Draft Readiness: 75%
Well-documented. Main challenge is executing the "weave don't state" approach.

---

# Section 7: Context Is King

## The Key Insight
More context is not better context. Quality comes from providing the RIGHT type of context - temporal, domain, procedural, relational, constraint, preference, environmental - that aligns with the specific task.

## Status
Extensively documented. Seven-type taxonomy established.

## Core Metaphor
**Vending Machine:** You're not trying to insert more coins. You're trying to press the right buttons.

## Concepts to Cover
1. The taxonomy of context (7 types)
2. Temporal context (training cutoff problem)
3. Domain context (specialized knowledge)
4. Procedural context (how to do things)
5. Relational context (how things connect)
6. Constraint context (boundaries and rules)
7. Preference context (style and tone)
8. Environmental context (surrounding situation)
9. The anti-pattern: context dumping
10. Context as behavior definition

## Questions/Tasks Before Drafting

- [ ] **Taxonomy depth:** All 7 types with examples, or highlight 3-4 most important?
- [ ] **Integration from Section 9:** Add "documentation as teaching material" concept here?
- [ ] **Vending machine placement:** Open with metaphor, close with it, or thread throughout?
- [ ] **Checklist inclusion:** Include the practical "before you prompt" checklist?
- [ ] **Anti-pattern emphasis:** How much space for "what NOT to do"?
- [ ] **Length concern:** This could be very long. What's essential vs nice-to-have?

## Draft Readiness: 70%
Well-documented but potentially too comprehensive. Need to prioritize.

---

# Section 8: Decorating Your Prompts

## The Key Insight
Both Anthropic and OpenAI have published official prompting guides revealing what actually works. This section orients you to those resources and provides a reference for decorator syntax (XML, markdown, CSV, JSON).

## Status
Documented as reference/overview section. Intentionally less narrative.

## Core Metaphor
**Toolkit:** This is your reference guide to the tools available.

## Concepts to Cover
1. The official guides (Anthropic, OpenAI)
2. Common ground (what both agree on)
3. XML tags deep dive
4. Markdown syntax for prompts
5. CSV format
6. JSON format
7. Platform-specific recommendations
8. Combining decorators
9. Where to learn more

## Questions/Tasks Before Drafting

- [ ] **Reference vs narrative:** Confirm this should be more reference-oriented than other sections
- [ ] **Link freshness:** Verify all documentation URLs are current
- [ ] **Platform balance:** Equal coverage of Anthropic/OpenAI or favor one?
- [ ] **Code examples:** How many syntax examples? Enough to be useful reference?
- [ ] **Quick reference table:** Include the "when to use what" table?
- [ ] **Depth calibration:** This is overview - where do we point for depth?

## Draft Readiness: 70%
Structure clear. Need to verify links and calibrate depth.

---

# Section 9: The Factory Is the Teacher

## The Key Insight
In knowledge work, the accumulated artifacts of production (documentation, data, processes) are no longer just records. Through AI, they become productive forces. Capital becomes labor. The factory works.

## Status
Three approaches drafted (Accessible, Theoretical, Provocative). Decision needed.

## Core Metaphor
**Capital Becomes Labor:** Documentation isn't just a record - it's a worker. The factory walls don't just contain wisdom - they perform labor.

## Concepts to Cover
1. Documentation as passive record (old view)
2. Documentation as active capability (new view)
3. The transformation (capital → labor)
4. Implications for how we write
5. [Approach-dependent] Theoretical framing or provocative questions

## Questions/Tasks Before Drafting

- [ ] **Approach selection:** Choose Accessible (A), Theoretical (B), Provocative (C), or hybrid
- [ ] **Anchor phrase:** Confirm final phrase - "Documentation Does the Work"? "Capital Becomes Labor"? "Dead Labor Lives"?
- [ ] **Tone alignment:** Does chosen approach match overall guide tone?
- [ ] **Closing feeling:** What emotion do we want readers to end with? Empowered? Thoughtful? Provoked?
- [ ] **Call to action:** What's the final ask? Write better docs? Think differently? Both?
- [ ] **Connection to opening:** Does the close echo the "chef/kitchen" opening?

## Draft Readiness: 50%
Three drafts exist but decision on approach needed before finalizing.

---

# Cross-Section Summary

## Readiness Ranking

| Section | Readiness | Blocking Question |
|---------|-----------|-------------------|
| 1. Technical Adjacent | 80% | Tone calibration |
| 2. Interfaces | 60% | Philosophical integration approach |
| 3. Terminal | 70% | Structure (one section or two?) |
| 4. More Than Code | 65% | Technical depth level |
| 5. Markdown | 75% | Example depth and tool-specificity |
| 6. Structure | 75% | Executing "weave don't state" |
| 7. Context | 70% | Prioritizing 7 context types |
| 8. Decorators | 70% | Reference vs narrative balance |
| 9. Factory | 50% | Approach selection (A/B/C) |

## Common Decisions Needed

1. **Overall length:** Target word count per section? Total guide length?
2. **Example depth:** Full copy-paste examples or illustrative snippets?
3. **Tool specificity:** Name specific tools (Claude, GPT) or stay generic?
4. **Visual assets:** Write to include diagrams, or text-only first draft?
5. **Practical exercises:** Include "try this now" moments?
6. **Cross-references:** How much linking between sections?

## Suggested Drafting Order

**Phase 1: Foundation (least blocking questions)**
1. Section 1 (Technical Adjacent) - 80% ready
2. Section 5 (Markdown) - 75% ready
3. Section 6 (Structure) - 75% ready

**Phase 2: Core Content (need some decisions)**
4. Section 3 (Terminal) - decide structure first
5. Section 7 (Context) - prioritize types first
6. Section 8 (Decorators) - verify links first

**Phase 3: Complex Sections (need more decisions)**
7. Section 4 (More Than Code) - decide technical depth
8. Section 2 (Interfaces) - decide philosophical integration

**Phase 4: Closing (need approach decision)**
9. Section 9 (Factory) - select approach first

---

# The Unified Voice

## Phrases to Use Consistently

- "The gap narrows" (empowerment)
- "Structured text" (technical grounding)
- "Press the right buttons" (vending machine callback)
- "Description becomes reality" (markdown magic)
- "The factory walls" (accumulated wisdom)

## Phrases to Avoid

- "Don't be scared" / "Don't worry" (condescending)
- "Simply" / "Just" / "Easy" (dismissive of difficulty)
- "The AI understands" (anthropomorphizing)
- "Obviously" / "Clearly" (assumes knowledge)
- "In today's world" / "In this day and age" (filler)

## Structural Patterns to Repeat

- **Before/After comparisons** (show transformation)
- **Concrete examples before abstractions** (ground then expand)
- **Questions that lead to insights** (Socratic)
- **"Here's what's actually happening"** (demystifying)
- **Callbacks to earlier sections** (coherence)

## Emotional Arc

1. **Section 1:** "You belong here" (welcome)
2. **Sections 2-3:** "Here's the landscape" (orientation)
3. **Sections 4-5:** "Here's what's possible" (excitement)
4. **Sections 6-7:** "Here's how to do it well" (competence)
5. **Section 8:** "Here are your tools" (equipment)
6. **Section 9:** "Here's the bigger picture" (meaning)

---

**Status:** All nine sections briefed with consistent structure
**Next step:** Answer blocking questions, then draft in suggested order
**Decision points:** 15 key questions across all sections need answers before drafting
