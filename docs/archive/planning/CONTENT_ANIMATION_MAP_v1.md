# Content to Animation Mapping

Detailed mapping between `content/FULL_GUIDE_v3.md` sections and their visual animations.

---

## Section 1: For the Technical Adjacent

**Lines**: 7-51  
**Word Count**: ~450  
**Animation**: NONE

### Content Summary
- Target audience: UX researchers, product managers, designers, data analysts
- "Vibe coder" phenomenon - using AI without programming training
- Kitchen metaphor: know dangers without being a chef
- The gap between knowing AI exists and using it effectively
- What this guide covers (9 foundational concepts)

### Visual Treatment
- **No animation** - This is meta/intro content
- Consider: Hero section with subtle typographic treatment
- Key phrase to highlight: "The gap narrows. Let's begin."

### Design Notes
- Could serve as a "splash" or intro screen before split-screen begins
- Set expectations for what's coming
- Establish visual style (fonts, colors, tone)

---

## Section 2: Not All Models Are the Same, Not All Interfaces Either

**Lines**: 55-93  
**Word Count**: ~400  
**Animation**: "Same Brain, Different Body" (60-90s)

### Content Summary
- Same model (Claude) accessed through different interfaces
- Web chat, CLI tools, desktop apps, embedded AI
- Interface determines capability, not the model
- "The bottleneck isn't intelligence - it's access"

### Key Concepts for Animation
1. **The "orb"** - Visual representation of the AI model
2. **Interface "bodies"** - Web chat, terminal, desktop app, IDE
3. **Split-screen reveal** - All interfaces showing same orb

### Animation Storyboard (`SECTION_2_STORYBOARD.md`)
- Start with single orb (the model)
- Dress orb in different interface "costumes"
- Show capability differences per interface
- Reveal: same brain, different access

### Content Excerpts for Animation
> "Same model. Drastically different experiences."
> "The interface shapes everything - what you can do, how you do it"
> "The bottleneck isn't intelligence - it's access."

---

## Sections 3+4: Terminal + Package Managers (Combined)

**Lines**: 96-199  
**Word Count**: ~850  
**Animation**: "You Already Know This" (90-120s)

### Content Summary

**Section 3 - Terminal**:
- Terminal = text-based conversation with computer
- Same interaction model as AI chat
- AI as translator between human language and commands
- "The chat interface you already understand? It was invented here first."

**Section 4 - Package Managers**:
- App stores before App Store (1990s)
- Homebrew, apt, npm, pip
- Open source trust model
- "You don't need to master these. Just know they exist."

### Key Concepts for Animation
1. **Parallel comparison**: ChatGPT chat vs Terminal
2. **Timeline reveal**: Package managers predate mobile app stores
3. **Translation layer**: Human language -> AI -> Terminal command

### Animation Storyboard (`SECTIONS_3_4_STORYBOARD.md`)
- Side-by-side: AI chat conversation vs terminal session
- Reveal the structural similarity
- Show AI as "translator" between languages
- Package manager = original app store timeline

### Content Excerpts for Animation
> "You type a message. You hit enter. The system processes your request."
> "Text in. Text out. Turn-based conversation."
> "The App Store launched in 2008. But app stores have existed since the 1990s."

---

## Section 5: More Than Just Code

**Lines**: 202-262  
**Word Count**: ~500  
**Animation**: "The Creation Machine" (60-75s)

### Content Summary
- Terminals aren't just for code
- Documents, images, visualizations, audio
- Scripts that automate tedious tasks
- "The question isn't 'can I code?' The question is 'what do I want to create?'"

### Key Concepts for Animation
1. **Cascade of outputs**: Documents, images, charts, audio
2. **Single terminal** producing diverse outputs
3. **Reframe**: "Not a coding tool. A creation tool."

### Animation Storyboard (`SECTION_5_STORYBOARD.md`)
- Terminal prompt at center
- Commands produce different outputs (PDF, PNG, chart, audio waveform)
- Outputs cascade/flow from terminal
- End: "A creation tool with a text interface"

### Content Excerpts for Animation
> "Documents, images, visualizations, audio, automation - all of it flows through the same commands"
> "The tools don't care whether you're a developer. They just execute."

---

## Section 6: The Unreasonable Usefulness of Markdown

**Lines**: 265-569  
**Word Count**: ~2,100 (longest section)  
**Animation**: "Description Becomes Reality" (90-120s)

### Content Summary
- Why files on disk matter (persistent, portable, accumulating)
- Three layers: Prompts, Skills, Agents
- "Description becomes reality" - magic of markdown
- Evolution of workflows over time
- Why markdown specifically (comparison table)
- Essential markdown syntax
- Living documents that evolve

### Key Concepts for Animation
1. **Three layers stacking**: Prompt -> Skill -> Agent
2. **File SAVES, then AI uses it** - description activating
3. **Evolution time-lapse**: Day 1 -> Day 90 system
4. **Format comparison table** (markdown sweet spot)

### Animation Storyboard (`SECTION_6_STORYBOARD.md`)
- Show a markdown file being written
- File saves (visual confirmation)
- AI "reads" the file (loading animation)
- Output transforms based on file content
- Layer stacking: conversation + agent.md + skill.md + context.md

### Content Excerpts for Animation
> "You describe something in structured text, and it becomes real."
> "Old way: 8 steps. New way: 3 steps."
> "You're not teaching the AI from scratch each time."

---

## Section 7: A Little Bit of Structure Goes a Long Way

**Lines**: 572-925  
**Word Count**: ~1,800  
**Animation**: "The Transformation" (75-90s)

### Content Summary
- Unstructured vs structured input comparison
- Format as forcing function (tables, steps, checklists, headers)
- "The gift of empty cells" - revealing what you don't know
- Progressive structuring (brain dump -> group -> format)
- Structure as communication
- AI helping you structure
- The compound effect

### Key Concepts for Animation
1. **Before/after transformation**: Messy text -> structured markdown
2. **Empty cells revealing gaps**
3. **Side-by-side**: garbage input/output vs structured input/perfect output

### Animation Storyboard (`SECTION_7_STORYBOARD.md`)
- Show messy paragraph of text
- Text reorganizes itself (animated)
- Tables form, headers appear, lists emerge
- Split screen: unstructured -> poor response, structured -> great response
- Principle: "Weave don't state" - SHOW don't tell

### Content Excerpts for Animation
> "The information was roughly the same. What changed was how it was organized."
> "Those question marks are valuable."
> "The clearer your structure, the better your results."

---

## Section 8: Context Is King

**Lines**: 928-989  
**Word Count**: ~550  
**Animation**: "The Right Buttons" (75-90s)

### Content Summary
- Vending machine metaphor (pressing wrong buttons)
- Four types of context: Domain, Procedural, Constraint, Preference
- Curated context > comprehensive context
- Diagnostic questions for missing context

### Key Concepts for Animation
1. **Vending machine**: Random buttons -> wrong items
2. **Four-button panel**: Domain, Procedural, Constraint, Preference
3. **Right buttons -> perfect output**

### Animation Storyboard (`SECTION_8_STORYBOARD.md`)
- Vending machine visual
- Random button pressing -> gum, granola, mints (wrong items)
- Reveal the four context types as labeled buttons
- Press correct buttons -> chips (desired output)

### Content Excerpts for Animation
> "Imagine standing in front of a vending machine."
> "You're pressing buttons. Just not the right ones."
> "Curated context beats comprehensive context."

---

## Section 9: Decorating Your Prompts

**Lines**: 992-1046  
**Word Count**: ~450  
**Animation**: "The Story in Structure" (90-120s) - SPECIAL FORMAT PIECE

### Content Summary
- Text structure carries meaning
- Models trained on structured text (code, docs, markup)
- Separating content types with clear boundaries
- Formats: Markdown, XML tags, labeled sections
- "You're not programming. You're signaling."

### Key Concepts for Animation
1. **Same story, different formats**: XML -> JavaScript -> JSON -> HTML -> Markdown
2. **Format transitions with rhythm**
3. **All five formats shown together**

### Animation Storyboard (`SECTION_9_STORYBOARD.md`)
- **This is the special one** - format IS the medium
- Start with content in XML tags
- Morph same content through: JavaScript, JSON, HTML, Markdown
- Show all five simultaneously at end
- The animation teaches by demonstrating

### Content Excerpts for Animation
> "Structure reduces ambiguity."
> "The format matters less than the consistency."
> "Decorate your prompts. The model is listening for structure."

---

## Section 10: The Factory Is the Teacher

**Lines**: 1049-1100  
**Word Count**: ~450  
**Animation**: "The Walls Come Alive" (60-75s)

### Content Summary
- Documentation as productive force
- "Factory walls" = accumulated wisdom
- READMEs, style guides, decision logs, FAQs
- Two implications: what you write matters more; others' writing is now accessible
- "The gap has narrowed"
- Closing: "Press the right buttons. Build something."

### Key Concepts for Animation
1. **Static text on walls** becoming active
2. **AI touching/using documentation** (glowing effect)
3. **"Documentation used to teach. Now it works."**

### Animation Storyboard (`SECTION_10_STORYBOARD.md`)
- Walls covered in text (READMEs, docs, comments)
- Text is static, passive
- AI "touches" the walls
- Text glows, activates, becomes productive
- The orb from Section 2 could reappear here

### Content Excerpts for Animation
> "Documentation has become productive. It does work."
> "The documentation doesn't just teach anymore. It works."
> "Press the right buttons. Build something."

---

## Series Closing (Optional)

If animations are compiled into a continuous series:

### "The Gap Has Narrowed"
- Brief flashes of each section's core visual
- The conceptual "gap" shrinking with each flash
- Ends with: "The tools are ready. What will you build?"

---

## Visual Continuity Notes

| Element | Usage |
|---------|-------|
| The "orb" | Sections 2, 10 (possibly 6) |
| Terminal aesthetic | Sections 3, 4, 5 |
| Markdown/text styling | Sections 6, 7, 9 |
| Vending machine | Section 8 |
| Factory/walls | Section 10 |

### Color Palette Suggestions
- Terminal: Dark background (#1a1a2e or similar), green/amber text
- Content: Light background (#f9fafb), dark text
- Accent: Blue (#3b82f6) for highlights and interactive elements
- Success/activation: Green glow effect

---

## Implementation Priority

1. **Section 7** - "The Transformation" (best demonstrates the teaching concept)
2. **Sections 3+4** - "You Already Know This" (core insight, high impact)
3. **Section 6** - "Description Becomes Reality" (markdown is central skill)
4. **Section 2** - "Same Brain, Different Body" (sets up the journey)
5. **Section 8** - "The Right Buttons" (vending machine is memorable)
6. **Section 5** - "The Creation Machine"
7. **Section 9** - "The Story in Structure" (complex but powerful)
8. **Section 10** - "The Walls Come Alive" (closing)
