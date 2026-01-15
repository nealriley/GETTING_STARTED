# Getting Started: A Foundation for AI-Assisted Technical Work

> **Why this is called "Getting Started"**: Every technical tool, library, and system has documentation with this familiar title. Learning to find, read, and use these guides is itself a core skill. This document is both a guide *and* an example of the kind of contextual material that makes AI tools dramatically more useful.

---

# Section 1: For the Technical Adjacent

You work with technical systems every day. Maybe you're a UX researcher analyzing user behavior data. A product manager writing specs that engineers will build. A designer handing off prototypes to developers. A data analyst pulling insights from dashboards.

You're not a developer. You don't need to be. But increasingly, concepts like "prompt engineering," "CLI tools," or "MCPs" come up in conversation, and the gap between understanding what they are and knowing how to actually use them feels vast.

This guide is for you.

## The Vibe Coder Phenomenon

There's been a recent wave of "vibe coders" - people using AI tools to build software without traditional programming training. This has raised eyebrows among professional developers, and rightly so. Building production-grade, industrial-strength software is genuinely difficult. There are decades of accumulated wisdom about security, scalability, maintainability, and edge cases that can't be absorbed overnight.

But here's the thing: you don't need to build production software.

You don't need to be a professional chef to cook dinner. But you do need to know what dangers exist in a kitchen - which pans get hot, where the knives are, what happens if you leave the stove on.

These AI tools can act as a bridge. They help people without formal training leap ahead and make use of technology that would previously be out of reach. Not to replace developers, but to accomplish tasks that don't require a developer - and to communicate more effectively with developers when you do need them.

## The Gap That Narrows

When you have a little knowledge under your belt, the gap between "knowing AI exists" and "using it effectively" narrows dramatically. This allows you to:

- **Automate repetitive tasks** that eat your time
- **Process and analyze information** at scales you couldn't before
- **Generate first drafts** of documents, reports, and communications
- **Navigate technical systems** without waiting for developer availability
- **Communicate more precisely** with technical colleagues

The goal isn't to become a developer. It's to become fluent enough in the underlying concepts that AI tools become genuinely useful rather than frustrating black boxes.

## What This Guide Covers

This guide provides a foundation - the minimum viable knowledge that makes everything else click:

1. **Interfaces matter** - The same AI model behaves completely differently depending on how you access it. Understanding the landscape helps you pick the right tool.

2. **The terminal is your friend** - That intimidating text interface is actually the original chat - and understanding it unlocks access to thousands of tools.

3. **AI is more than code** - The same capabilities that make AI good at programming make it powerful for anyone working with structured information.

4. **Markdown is magic** - Simple text files with light structure become executable specifications. You can describe things into existence.

5. **Structure aids thinking** - The act of organizing your request IS the act of clarifying your thinking. Better structure means better results.

6. **Context is king** - AI tools are context-hungry. Feed them well, and they perform. Starve them, and you get garbage.

7. **Decorators help** - There are formatting conventions that AI models respond to reliably. Learning them improves your results.

8. **Documentation works** - The accumulated artifacts of human work - READMEs, guides, examples - are what make AI useful. They're the factory walls.

## Who You'll Be After

By the end of this guide, you won't be a developer. But you'll understand:

- Why the same AI gives different results in different tools
- How to navigate a terminal without fear
- What makes AI "good at code" and why that matters for non-code tasks
- How to create persistent, reusable AI workflows using simple text files
- How to structure your requests for dramatically better results
- What context to provide and how to provide it
- Where to find the official guidance on prompting effectively

You'll be able to have informed conversations with technical colleagues. You'll know when to use which tool. You'll understand what's happening when AI executes commands or reads files.

The gap narrows. Let's begin.

---

# Section 2: Not All Models Are the Same, Not All Interfaces Either

Picture this: You're using Claude. Maybe through the website chat. Maybe through Claude Code in your terminal. Maybe through the new Cowork app that just launched. Maybe embedded in your Slack workspace, or inside Excel, or as a Chrome extension.

**Same model. Drastically different experiences.**

The interface shapes everything - what you can do, how you do it, what feels natural, what feels impossible. This isn't unique to Claude. The recent resurgence of Google's Gemini 3 and the launch of Claude's Opus 4.5 as serious contenders in the coding space have sparked an explosion of interfaces, each competing to make AI more accessible in different contexts.

## The Landscape

**Web Chat Interfaces** (claude.ai, chatgpt.com, gemini.google.com)
- Where most people start
- Great for conversation, brainstorming, quick questions
- Limited: can't directly manipulate files, run commands, or access your system

**CLI Tools** (Claude Code, OpenAI's code interpreter)
- Command-line interfaces that can read/write files, execute code, search your projects
- Powerful but intimidating - requires terminal comfort
- Built for developers, but increasingly used by non-coders for complex file tasks

**Desktop Apps** (Claude Cowork, Cursor, Windsurf)
- Middle ground: GUI interfaces with system access
- Cowork: designate a folder, chat with Claude about its contents, let it modify files
- No terminal required, but all the power of file manipulation
- Designed explicitly for "non-coders using Claude Code for non-code tasks"

**Embedded/In-Product AI** (Copilot in VS Code, Claude in Excel, ChatGPT in Office)
- AI baked into tools you already use
- Context-aware: knows what you're working on
- Limited to that tool's domain

**The OpenCode Situation**: Recently, there's been significant discussion in the developer community about open-source alternatives to these commercial tools. OpenCode and similar projects represent a push toward transparent, customizable AI coding assistants that you can run locally or self-host - bringing the "open source" ethos to AI interfaces.

## Why This Matters

When someone says "I tried Claude and it couldn't help with X," the question is: *which* Claude? The web chat can't search through folders. Claude Code can. Cowork can, but without the terminal. The underlying intelligence is the same, but the interface determines what's possible.

Understanding this landscape helps you pick the right tool for the task. Need to analyze 50 receipt images and generate a report? That's a Cowork or Claude Code job. Need to brainstorm a strategy? The web chat is fine. Need inline suggestions while coding? Use an IDE integration.

These leaps forward in model capability (Gemini 3, Opus 4.5) make the choice of interface matter more than ever. The models are smart enough now that the bottleneck isn't intelligence - it's access. Which is why "CLIs vs web tools" is getting so much focus and investment.

---

# Section 3: The Terminal - A Step Backward to Leap Forward

Most of us alive today got to skip a generation. We grew up with icons, windows, and mice - visual interfaces that made computers approachable. But before all that, there was the terminal: a way to talk to computers using text.

Here's what matters: **the world runs on terminals**. Every server powering the websites you use, every cloud service, every development tool - they all speak this language fluently. And your computer? It has one sitting there, unused by most, waiting.

## What is it, really?

A **terminal** (also called a **shell** or **command line**) is an interface where you type commands in a language that's interpretable by humans but executable by machines. 

**CLI** stands for **Command Line Interface** - the "command line" was literally a line where you commanded the computer to do things, one instruction at a time. Like telling a very literal assistant exactly what to do: "list files," "make directory," "run program."

Think of it as writing instructions in a reduced, non-human language - a script - that can be quickly interpreted by the computer or, increasingly, by highly trained AI models that know thousands of these patterns.

## Why it matters now

Modern pseudo-terminals and actual terminals have become incredibly mature. When new tools emerge (like MCPs, AI coding assistants, automation scripts), they often connect to this ecosystem first because it's:
- Universal (works everywhere)
- Composable (commands chain together)
- Documented (decades of manuals, guides, and Stack Overflow answers)
- Understood by AI (trained on millions of examples)

## The Other App Stores on Your Computer

You already know about app stores - the ones with big download buttons and "Buy" or "Get" options. But there are other app stores living on your computer, accessible through the terminal, and they work differently.

**Key difference**: These don't sell anything. Their source code is open (meaning you can see exactly how they work - an important distinction for trust and customization).

Here's the landscape:

**Homebrew** (macOS/Linux)
- The big general-purpose package manager for Mac users
- Install with one terminal command, then use it to get thousands of tools
- Example: `brew install ripgrep` gets you `rg`, a blazing-fast search tool that AI models (especially GPT-4/5) love to use for searching through project folders

**npm** (Node.js/JavaScript ecosystem)
- If you're working with web development or JavaScript tools
- Massive ecosystem of packages for building apps, websites, automation scripts
- Example: `npm install -g some-tool` installs a tool globally on your system

**pip** (Python ecosystem)
- For Python-related tools and libraries
- Essential if you're doing data analysis, machine learning, or automation with Python
- Example: `pip install requests` gets you a library for making web requests

**apt** / **yum** (Linux)
- Built into most Linux distributions
- How Linux systems install and update everything
- Example: `apt install curl` gets you a tool for downloading files from the web

**Why this matters**: When an AI recommends "install ripgrep" or "you'll need to npm install this," it's pointing you to one of these ecosystems. They're not scary - they're just specialized app stores that developers use. And increasingly, AI tools assume you have access to them because they make so many tasks trivial that would otherwise be complex. 

---

# Section 4: More Than Just Code

Here's the remarkable thing: investment in coding tools has spawned innovations in completely unintended places. Because the model beneath all these tools is generally useful - trained on an astronomical breadth of topics - the very features that make them good at writing code make them powerful for anyone who logs into anything.

## The Unexpected Consequence of File Access

These systems can read and write to disk. That sounds technical, mundane even. But it's transformative. When a tool can:
- Read files from your hard drive
- Write files back
- Connect to your favorite SaaS apps
- Parse structured data

...it introduces a whole new layer of automation and interaction for everyone, not just programmers.

## Why "Good at Code" Means "Good at Everything"

Source code is just structured text with specific patterns. So is:
- A webpage (HTML/CSS)
- A research paper (structured sections, citations)
- Meeting notes (timestamps, speakers, action items)
- Expense reports (receipts, dates, amounts, categories)

Because these models excel at reading and writing structured text (code), they can:

**Consume webpages instantly** - Claude for Chrome can read an entire webpage, understand its structure, extract key information, and answer questions about it. Not because it was trained specifically on that website, but because it understands structured content.

**Navigate documentation** - Technical writing and documentation are just structured information with headers, examples, and references. The same skills that help a model read API documentation help it synthesize research papers or summarize meeting transcripts.

**Connect disparate sources** - Claude Cowork can read 50 receipt images, cross-reference them with a spreadsheet, and generate an expense report. Not because it was trained to do expenses specifically, but because it can read images, parse structured data, and write formatted output.

## Three Powerful Use Cases Beyond Code

**Research and Synthesis**

The easiest way to use AI (and why every tool added it first): give it your notes, articles, documents, and ask it to synthesize. But go beyond simple summarization:

- "Find contradictions between these three sources"
- "Extract all the dates and events mentioned and create a timeline"
- "Which of these papers actually cites primary research vs. secondary sources?"

The model acts as an interrogator, not just a synthesizer.

**Technical Writing and Documentation**

Because these tools understand structure, they're exceptional at:
- Taking messy notes and formatting them into clean documentation
- Reading existing docs and suggesting improvements to clarity
- Generating examples based on patterns they see
- Maintaining consistent terminology across documents

You're not writing code here - you're writing *about* systems, processes, or ideas. The model's ability to understand technical structure (from code training) translates directly.

**The Mechanical Rubber Duck**

In programming, "rubber duck debugging" means explaining your problem out loud to an inanimate object (like a rubber duck). The act of explaining often reveals the solution.

AI tools excel at this interaction mode - the mechanical rubber duck. You're not asking it to synthesize or generate. You're using it as a conversational partner to clarify your thinking:

- "Here's what I'm trying to achieve. What am I missing?"
- "I'm stuck between two approaches. Let me explain both..."
- "This doesn't make sense. Can you ask me questions to help me figure out why?"

In this case, you're not writing code - **you're writing a script**. A conversation script. A thinking-through-it-out-loud script. The model's role is to ask good questions, point out assumptions, and help you articulate what you actually mean.

## The Unifying Thread

All of these use cases work because the models can:
1. Read and write files (persistence)
2. Understand structure (from code training)
3. Process multiple modalities (text, images, documents)
4. Execute sequences of actions (not just one-shot responses)

The "coding tool" label undersells what's actually possible. These are general-purpose automation and thinking tools that happen to be exceptionally good at code because code is precise, structured, and well-documented - qualities that make a model useful for *everything* else. 

---

# Section 5: The Unreasonable Usefulness of Markdown

It wasn't immediately obvious that files would become one of the most powerful ways to work with AI. Early on, everything was chat-based - ephemeral conversations that disappeared when you closed the window. But the community discovered something important:

**The output of your work with AI should often be a file on disk.**

Specifically, a markdown file.

## Why Files on Disk Matter

When you save a markdown file, you're creating:

**Persistent context** - Unlike chat history that disappears or gets buried, files stay accessible. You can reference them tomorrow, next week, next year.

**Portable instructions** - Move them between tools, share them with colleagues, version control them with git. They're not locked into any platform.

**Accumulating knowledge** - Build up a library of working patterns, definitions, and guidelines. Your past work becomes a resource for future work.

Chat is ephemeral. Files are permanent. That permanence changes everything.

## The Three Layers of Description

Here's where it gets interesting. You can describe things at three different levels, and all three are just markdown files:

### Layer 1: Prompt Files

The most immediate layer. Specific task requests you want to reuse.

```markdown
# Analyze Survey Data

Analyze the attached survey results and identify:
1. Top 3 themes by frequency
2. Notable outliers or surprising responses
3. Sentiment distribution (positive/neutral/negative)

Output as a structured summary with supporting quotes.
```

Save this once. Use it every time you have survey data to analyze. Refine it as you learn what works.

### Layer 2: Skill Definitions

Capabilities and workflows. You're teaching the AI HOW to do something.

```markdown
# Screenshot Analysis Skill

When given a screenshot, you should:

1. Identify UI components (buttons, forms, navigation)
2. Note accessibility issues (contrast, alt text, touch targets)
3. Suggest improvements based on best practices
4. Output findings in structured markdown

## Quality Checklist
- [ ] All interactive elements identified
- [ ] Color contrast evaluated
- [ ] Mobile considerations noted
- [ ] Specific, actionable recommendations provided
```

The AI now has this capability. You described it into existence.

### Layer 3: Agent Definitions

Personality, constraints, expertise. You're shaping WHO the AI is for this context.

```markdown
# UX Research Assistant

You are a UX research assistant who helps analyze user feedback.

## Expertise
- Qualitative data synthesis
- Thematic analysis
- Affinity mapping
- User persona development

## Communication Style
- Empathetic and human-centered
- Evidence-based (cite quotes from research)
- Visual where possible (use tables, diagrams)
- Ask clarifying questions before assuming

## Constraints
- Never make claims without supporting data
- Always anonymize participant information
- Flag contradictory findings explicitly
```

The AI now behaves this way. You shaped its personality through description.

## Description Becomes Reality

This is the closest thing to magic in practical computing: **you describe something in structured text, and it becomes real.**

Old way (building software):
1. Learn programming language
2. Set up development environment
3. Write code (syntax errors, debugging)
4. Compile/build
5. Test
6. Fix bugs
7. Deploy
8. Maintain

New way (describe in markdown):
1. Write what you want
2. AI reads it
3. It happens

You didn't install anything. You didn't configure anything. You didn't code anything. You described what you wanted, and it became real.

## How Files Stack Together

When you combine these layers, something powerful emerges:

```
YOUR CONVERSATION
"Help me analyze these interview notes"
         ↓
AI READS: agent.md
"I'm a UX research assistant with these guidelines..."
         ↓
AI USES: thematic-analysis-skill.md
"Process: 1) Extract quotes 2) Identify themes 3) Create groups..."
         ↓
AI CHECKS: project-context.md
"We're redesigning the checkout flow. Focus on payment friction..."
         ↓
       OUTPUT
(Shaped by all layers)
```

You're not teaching the AI from scratch each time. You've created a persistent environment of context, capabilities, and personality that the AI loads and uses.

One conversation. Multiple files informing it.

## The Evolution of a Workflow

You don't need to plan this upfront. It evolves naturally:

**Day 1: Simple prompt in chat**
```
"Help me analyze survey data"
```
Works, but you retype it every time.

**Day 7: Save prompt to file**
```
survey-analysis-prompt.md
```
Now reusable, but still basic.

**Day 14: Add a skill**
```
survey-analysis-skill.md
"When analyzing surveys: 1) Group by sentiment 2) Extract key quotes..."
```
AI now has a methodology.

**Day 30: Create specialized agent**
```
survey-agent.md
"You are a survey analysis expert specializing in mixed-methods research..."
```
AI has personality + methodology.

**Day 90: Full system**
```
project/
├── agents/
│   └── survey-agent.md
├── skills/
│   ├── survey-analysis.md
│   ├── visualization.md
│   └── report-generation.md
├── memory/
│   ├── project-context.md
│   ├── decisions.md
│   └── participant-quotes.md
└── tasks/
    └── current-sprint.md
```

All markdown. All human-editable. All read and used by AI.

**Start simple. Add structure as patterns emerge. Extract reusable skills. Define persistent agents. Build a system over time.**

## Why Markdown Specifically?

Markdown hits a sweet spot that no other format matches:

| Format | Human Readable | Machine Parseable | Structured | Portable | Version Control |
|--------|---------------|-------------------|------------|----------|-----------------|
| Word (.docx) | Yes | No | Partial | No | No |
| PDF | Yes | Partial | No | Partial | No |
| Plain Text | Yes | No | No | Yes | Yes |
| JSON | No | Yes | Yes | Yes | Yes |
| **Markdown** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

**Human-friendly:**
- Reads like normal text
- Write with any text editor
- No special software needed
- Minimal syntax to learn

**Machine-friendly:**
- AI parses structure reliably
- Headers, lists, code blocks = semantic meaning
- Converts to anything (HTML, PDF, Word, slides)
- Works with every AI tool

**Workflow-friendly:**
- Version control (git diff makes sense)
- Works everywhere (GitHub, Notion, VS Code, Obsidian)
- Copy-paste between tools
- Renders nicely or works as plain text

Markdown is the lingua franca for AI collaboration.

## The Markdown You Need to Know

The 20% of syntax that does 80% of the work:

**Headers (Organization):**
```markdown
# Main Title
## Section
### Subsection
```

**Lists (Structure):**
```markdown
- Bullet point
- Another bullet
  - Nested bullet

1. Numbered item
2. Another numbered item

- [ ] Unchecked task
- [x] Completed task
```

**Emphasis (Highlighting):**
```markdown
*italic*
**bold**
`inline code`
```

**Code Blocks (Technical Content):**
````markdown
```python
def hello():
    print("Hello, world!")
```
````

**Tables (Structured Data):**
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data     | Data     |
```

That's it. With just these elements, you can create agent definitions, skill specifications, task lists, memory files, documentation, and reports.

No special tools. No learning curve. Just text with light structure.

## Living Documents

These files aren't static. They evolve with your understanding:

**Version 1.0:** Basic instructions
**Version 1.1:** Add constraint after AI makes a mistake ("Don't use passive voice")
**Version 1.2:** Add examples of good vs bad output
**Version 2.0:** Extract common patterns into separate skill file

Like training an assistant, but better:
- **Instantaneous** - AI reads file immediately
- **Reversible** - Revert if you break something
- **Shareable** - Send files to colleagues
- **Inspectable** - Read what AI reads
- **Explicit** - Written down, not in someone's head

When something goes wrong, you can debug it. Open the file. See what AI is reading. Find the problem. Fix it. Done.

## The System You've Built

When you combine everything - agents that define behavior, skills that define capabilities, memory files that persist context, task files that track progress - you've built something significant:

**Not just files. A system.**

- Persistent context that survives across sessions
- Reusable capabilities that improve over time
- Documented decisions you can reference later
- Shareable knowledge colleagues can use
- Version-controlled evolution you can track

You've built an AI-augmented workflow using nothing but markdown files.

The gap between "idea" and "reality" just got much smaller.

---

# Section 6: A Little Bit of Structure Goes a Long Way

Here's what most people send to AI:

```
I need help with our Q3 report. Sales were up but costs increased too. 
Marketing did that campaign in August. We should probably mention the 
new product launch. Oh and the team grew by 3 people. Customer complaints 
went down which is good. Can you make this into something presentable? 
The CEO wants to see it Friday. Maybe include some charts? Last year 
we did 2.3M but this year looks different.
```

And here's what they get back: a generic response, followed by ten clarifying questions, followed by something that misses the mark entirely.

Now watch what happens when the same information gets organized:

```markdown
# Q3 Executive Summary

## Audience
CEO, board members

## Deadline
Friday

## Key Metrics

| Metric | Q3 2025 | Q3 2024 | Change |
|--------|---------|---------|--------|
| Revenue | $2.4M | $2.3M | +4.3% |
| Costs | $1.95M | $1.8M | +8.3% |
| Margin | $450K | $500K | -10% |

## Notable Events
- August marketing campaign (+12% leads)
- New product launch (September)
- Team expansion (+3 engineers)

## Customer Health
- Support tickets: down 15%
- NPS: 42 → 47

## Concerns
- Cost growth outpacing revenue
- Margin compression trend

## Format Requested
1-page summary with bullet points, optional appendix
```

The AI response to this version? Precisely what was needed. Minimal revision required.

**The information was roughly the same. What changed was how it was organized.**

## Format as Forcing Function

When you choose a format, you choose how to think.

**Tables force comparison:**
```markdown
| Option | Cost | Time | Risk |
|--------|------|------|------|
| Build in-house | $50K | 3 months | High |
| Buy solution | $30K | 1 month | Low |
| Hybrid | $40K | 2 months | Medium |
```

Try writing that comparison in a paragraph. The relationships get buried. The table makes them visible.

**Numbered steps force sequence:**
```markdown
1. User clicks "Submit"
2. Form validates input
3. API receives request
4. Database updates
5. Confirmation email sends
6. User sees success message
```

Try explaining that process in prose. The order gets muddled. The steps make it clear.

**Checklists force completeness:**
```markdown
## Must Have
- [ ] User authentication
- [ ] Data export
- [ ] Mobile responsive

## Should Have
- [ ] Dark mode
- [ ] Keyboard shortcuts

## Nice to Have
- [ ] Animations
```

Try capturing requirements in paragraphs. Priorities become invisible. The checklist makes them explicit.

**Headers force hierarchy:**
```markdown
## Current State
What exists today

## Desired State
What we want

## Gap Analysis
What's missing

## Action Plan
How to bridge the gap
```

Try analyzing a situation without sections. You'll skip from problem to solution without acknowledging the gap. The structure prevents that.

## The Gift of Empty Cells

Here's something unexpected: the most valuable moment in structuring is when you can't fill something in.

```csv
quarter,revenue,costs,margin,headcount
Q1,2.1M,1.7M,400K,12
Q2,2.2M,1.8M,400K,14
Q3,2.4M,???,???,17
Q4,???,???,???,???
```

Those question marks are valuable. They show exactly what you need to find out.

```markdown
# Project Proposal

## Problem Statement
[clear in my head]

## Proposed Solution
[clear in my head]

## Implementation Plan
[fuzzy - need to think through]

## Resource Requirements
[no idea]

## Risk Assessment
[haven't considered]

## Success Metrics
[what would success even look like?]
```

The outline revealed that you only have half a proposal. Better to discover this now than after AI generates something based on incomplete thinking.

**Structure is a diagnostic tool.** It shows you what you don't know.

## Progressive Structuring

You don't have to start organized. Most people don't. Here's how it actually works:

**Stage 1: Brain dump**
```
need to figure out the project timeline, who's doing what, 
dependencies, risks, the client wants weekly updates, budget 
is tight, Sarah is on vacation week of the 15th, we promised 
delivery by end of month, testing takes a week minimum
```

This is fine. Get it out of your head.

**Stage 2: Group by theme**
```
TIMELINE
- delivery by end of month
- testing takes a week minimum
- Sarah vacation week of 15th

PEOPLE
- who's doing what
- Sarah on vacation

CLIENT
- weekly updates required

CONSTRAINTS  
- budget is tight
- dependencies unclear

UNKNOWNS
- risks not identified
```

Patterns emerge. Categories form.

**Stage 3: Choose appropriate format**
```markdown
# Project Plan

## Timeline
| Phase | Start | End | Owner | Dependencies |
|-------|-------|-----|-------|--------------|
| Design | Jan 6 | Jan 10 | Mike | None |
| Build | Jan 13 | Jan 24 | Sarah* | Design complete |
| Test | Jan 27 | Jan 31 | Team | Build complete |

*Sarah vacation Jan 13-17, coverage needed

## Constraints
- Budget: $X (tight)
- Deadline: Jan 31 (firm)

## Risks
- [ ] Identify risks (TODO)

## Client Communication
- Weekly status updates (Fridays)
```

By stage 3, the gaps are visible (risks not identified, exact budget unknown) and the plan is actionable.

**Brain dump → Group → Format.** Each stage adds clarity.

## Structure as Communication

This isn't just about AI. It's about anyone who reads what you write.

**Unstructured email:**
```
Hey team, so we need to get the Q3 report done by Friday and 
it should have revenue and costs and the CEO wants to see it 
and make sure to include that thing about the new product 
launch and customer satisfaction is important too, oh and 
can someone pull the Q2 numbers for comparison? Thanks!
```

**Structured communication:**
```markdown
## Q3 Report - Action Required

**Deadline:** Friday EOD
**Audience:** CEO

### Assignments
| Section | Owner | Due |
|---------|-------|-----|
| Revenue analysis | @mike | Thursday |
| Cost breakdown | @sarah | Thursday |
| Customer metrics | @alex | Wednesday |
| Q2 comparison data | @jordan | Tuesday |

### Must Include
- [ ] New product launch impact
- [ ] Customer satisfaction trends
- [ ] YoY comparison

Questions? Reply in thread.
```

Same information. One is scannable, actionable, clear. One is a wall of text.

The structure communicates respect for the reader's time.

## When AI Helps You Structure

Sometimes you have scattered thoughts and don't know how to organize them. AI can help:

```
I have scattered thoughts about [topic]. Help me organize them 
into a structured outline. Here are my raw thoughts:

[brain dump]

Suggest a structure that would help me think through this clearly.
```

AI can propose:
- What format fits this content (table? outline? steps?)
- What categories emerge from your scattered thoughts
- What's missing (gaps in your thinking)
- What order makes sense (dependencies, logic flow)

**But here's the key:** Once AI proposes a structure, YOU fill it in. The act of filling it in is where the thinking happens. Don't just accept AI's completed output - use AI's structure as your template.

## The Compound Effect

Structure builds on structure.

**Week 1:** You create a project template
```markdown
# Project: [Name]
## Goal
## Constraints  
## Tasks
## Risks
## Status
```

**Week 2:** You refine it based on what was missing
```markdown
# Project: [Name]

## Goal
What does success look like?

## Stakeholders
Who cares about this?

## Constraints  
- Timeline:
- Budget:
- Dependencies:

## Tasks
| Task | Owner | Status | Due |
|------|-------|--------|-----|

## Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|

## Status
Last updated: [date]
Next milestone: [milestone]
```

**Week 10:** Your templates have become sophisticated. They embody your accumulated wisdom about how to approach projects.

Now when you use AI:
- You provide the template
- AI helps fill it in
- Output is consistently useful
- Your structure shapes the result

## The Transformation

Look back at where we started:

```
I need help with our Q3 report. Sales were up but costs increased...
```

And where we ended:

```markdown
# Q3 Executive Summary
## Audience
CEO, board members
...
```

The second version practically wrote itself. By the time you've organized the information, you've already done most of the work.

The clearer your structure, the better your results.

---

# Section 7: Context Is King

Imagine standing in front of a vending machine, punching in the code for crisps, and getting angry when gum pops out. That's what working with AI without proper context looks like. You're pressing buttons, but not the *right* buttons.

## The Perfect Prompt Problem

For any information you're after, there exists a "perfect" prompt that will get you there. Actually, there are likely many perfect prompts. Even for the simplest relationships (1+1=strawberries? 1+1=2? 1+1="eleven"?), the list of perfect prompts grows large because perfection depends on what you actually want.

As complexity increases - as you'd expect - the set of perfect prompts grows exponentially. And now you don't just want an answer, you want the model to *take actions*. Maybe search files, modify code, generate a report, chain together multiple steps.

What's remarkable about late 2025 is that we're seeing more and more believable examples of these tools performing this parlor trick in a very rudimentary sense. They can:
- Read files you reference
- Follow multi-step instructions
- Remember context across a session
- Execute tools and check their own work
- Chain actions together toward a goal

But here's the key: **the quality of what you get out is directly proportional to the context you put in.**

## The Context Equation

Several factors combine to reduce hallucinations, slop, and frustration:

**The Prompt Itself**
- Specific vs. vague ("analyze this" vs. "find all error patterns in these logs")
- Clear scope ("check these 3 files" vs. "check everything")
- Examples of what you want ("format like this: ...")

**The Environment**
- Saved files the AI can access (your task lists, memory files, agent definitions)
- Project structure it can navigate
- Previous conversation history (in systems that support it)

**The Quality of Reference Material**
- Good documentation beats vague descriptions
- Examples beat abstractions
- Specific constraints beat general guidance

**General Usefulness**
- Is the context actually relevant to the task?
- Or are you including everything hoping something sticks?
- Signal-to-noise ratio matters

## The Vending Machine Metaphor

When someone complains "the AI gave me garbage," the question is: what buttons did you press? Did you:
- Give it access to the files it needs?
- Provide examples of what "good" looks like?
- Include relevant documentation or reference material?
- Save important context in files it could read?
- Or did you just type a vague question and hope?

This isn't about blaming the user - it's about understanding that these systems are *context-hungry*. The factory metaphor returns: the accumulated wisdom in documentation, READMEs, code comments, example files - these are the "walls of the factory" that activate foundation models. 

Feed it good context, and you dramatically increase the chances of getting exactly what you need. Starve it of context, and you're punching random codes into the vending machine, angry at the gum.

Press the right buttons, for gods sake.

---

# Section 8: Decorating Your Prompts

Models have been trained to recognize certain patterns - certain "decorators" - that help them parse and understand your intent more clearly. Think of these as formatting conventions that the model has seen millions of times during training, and thus responds to reliably.

## XML Tags: The Model's Favorite Delimiter

Both Anthropic and OpenAI's documentation explicitly recommend using XML tags to mark boundaries in your prompts. Why? Because XML creates clear, unambiguous separations between different types of content.

**Basic Pattern:**
```xml
<context>
Here is background information about the project...
</context>

<task>
Based on the context above, generate a summary report.
</task>

<constraints>
- Keep it under 500 words
- Use bullet points for key findings
- Avoid technical jargon
</constraints>
```

The model understands that `<context>` contains information to reference, `<task>` contains what to do, and `<constraints>` contains rules to follow. This dramatically reduces ambiguity.

**XML Attributes for Metadata:**
You can even use attributes to add metadata that the model can reference:

```xml
<document source="Q3_report.pdf" date="2025-09-30">
Sales increased by 23% compared to Q2...
</document>

<document source="customer_feedback.csv" date="2025-10-15">
Overall satisfaction score: 4.2/5...
</document>
```

Now you can reference "the Q3 report" or "the customer feedback from October" in your instructions, and the model knows exactly which document you mean.

## CSV: Structure That Models Love

CSV (Comma-Separated Values) files are another format models parse exceptionally well. When you provide CSV data, **always include headers** - the model uses these to understand what each column represents.

**Example:**
```csv
task_name,status,priority,dependencies
Setup_Database,completed,high,none
Build_API,in_progress,high,Setup_Database
Design_Frontend,pending,medium,Build_API
Write_Tests,pending,low,Build_API,Design_Frontend
```

The model can now:
- Understand the relationship between tasks
- Identify dependencies (`Write_Tests` depends on both `Build_API` and `Design_Frontend`)
- See status and priority at a glance
- Answer questions like "What's blocking Design_Frontend?" (Answer: Build_API)

## Proprietary Formats: DOCX, XLSX, and More

Modern models can infer structure from proprietary formats like Microsoft Word (.docx) and Excel (.xlsx) files. They understand:
- Document headings and hierarchy
- Table structure and relationships
- Spreadsheet formulas and data organization
- Embedded images and their context

When you upload these files (through tools that support it, like Claude Code or Cowork), you don't need to convert them to plain text first. The model extracts the structure automatically.

## Building Your Own Decorators

You're not limited to standard formats. You can invent your own conventions, as long as you're consistent. I personally use task-based decorators when planning complex work:

**My Task/Phase Pattern:**
```markdown
# Project: Redesign User Dashboard

## Phase 1: Research
**Status:** Complete
**Tasks:**
- [x] User interviews (5 participants)
- [x] Competitor analysis
- [x] Compile findings document

## Phase 2: Design
**Status:** In Progress
**Dependencies:** Phase 1
**Tasks:**
- [x] Wireframes
- [ ] High-fidelity mockups
- [ ] Design system updates

## Phase 3: Implementation
**Status:** Pending
**Dependencies:** Phase 2
**Tasks:**
- [ ] Frontend components
- [ ] API integration
- [ ] Testing
```

When I reference "Phase 2" or ask about dependencies, the model understands the structure because I've been consistent. The model sees the pattern: phases have status, tasks, and dependencies. It can then reason about what's blocking what, what comes next, and how to prioritize.

**The Key Principle:** Whatever decorator system you create, use it consistently. The model learns your pattern within the conversation and applies it going forward. Structure breeds understanding.

---

# Section 9: The Factory Is the Teacher

The sheer industrial scale of content development in our digital age invites steam economy metaphors - but the truth is more profound. The means of production itself has become a sage. 

Every codebase, every README, every bug report, every Stack Overflow answer, every user manual - these are the "walls of the factory." They contain the collective memory of millions of developers: the dull repetitive patterns, the brilliant innovations, the painful debugging sessions, the pleasurable breakthroughs.

This vast soup of documented human experience is what activates foundation models. When you provide context - a getting started guide, an API reference, an error log - you're not just giving the AI information. You're giving it access to the accumulated wisdom stored in the factory walls themselves.

This is why documentation matters. This is why READMEs exist. They are the factory teaching the next generation of workers - whether human or AI.

---

## Closing

The gap has narrowed.

You now understand:
- Why interfaces matter as much as models
- How the terminal unlocks access to powerful tools
- Why "good at code" means "good at structured text"
- How markdown files become executable specifications
- Why structure improves both your thinking and your results
- What context to provide and how to provide it
- Where to find official guidance on prompting

You're not a developer. You don't need to be. But you're now equipped to use these tools effectively - to automate, to analyze, to generate, to think more clearly.

The factory walls are full of wisdom. The tools are ready. The gap between knowing and doing has narrowed.

Press the right buttons.

---

**Document Statistics:**
- Total word count: ~6,500
- Sections: 9 + Introduction + Closing
- Key metaphors: Chef/kitchen, Vending machine, Factory walls, Description as creation
- Recurring phrase: "The gap narrows"
- Emotional arc: Welcome → Orientation → Excitement → Competence → Equipment → Meaning
