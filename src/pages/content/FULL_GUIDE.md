---
title: Getting Started — Full Guide
description: A foundation for AI-assisted technical work
layout: ../../layouts/BaseLayout.astro
---

# Getting Started: A Foundation for AI-Assisted Technical Work

> **Why this is called "Getting Started"**: Every technical tool, library, and system has documentation with this familiar title. Learning to find, read, and use these guides is itself a core skill. This document is both a guide *and* an example of the kind of contextual material that makes AI tools dramatically more useful.

## For the Technical Adjacent

Throughout my career, a passion of mine has always been helping people who do not necessarily come from a technical background or training, who want to learn how to "code". 

You might work *with* technical systems every day - in UX research, product management, design, data analysis - without needing to know how servers work or how to compile code. But increasingly, concepts like "prompt engineering," "CLI tools," or "MCPs" come up in conversation, and the gap between understanding what they are and knowing how to actually use them feels vast.

The recent tidal wave of new 'vibe coders' has raised furrowed brows from those trained in the art of software development. Rightly so, the process of building production-grade, industrial strength software is by no means an easy task. 

However, you do not need to be a professional chef to know how to cook your own dinner, but you need to know what kinds of dangers exist in a kitchen. 

These AI models, platforms, and products can act as a bridge, helping those without the training or skill to be able to leap ahead and make use of technology that would previously be out of reach. 

When you have a little knowledge under your belt, this gap narrows even more. This allows you to make use of some powerful tools with relative ease, while also rapidly gaining hands on experience with some of the more complex software development skills. 

Working with people across a wide range of skill levels, I've come up with a basic rubric to get started. These guiding principles should help you adopt all kinds of AI tools, understand how these technical microcosms actually work, and begin generating all kinds of interesting content, code, and more! 


## Not All Models Are the Same, Not All Interfaces Either

Picture this: You're using Claude. Maybe through the website chat. Maybe through Claude Code in your terminal. Maybe through the new Cowork app that just launched. Maybe embedded in your Slack workspace, or inside Excel, or as a Chrome extension.

**Same model. Drastically different experiences.**

The interface shapes everything - what you can do, how you do it, what feels natural, what feels impossible. This isn't unique to Claude. The recent resurgence of Google's Gemini 3 and the launch of Claude's Opus 4.5 as serious contenders in the coding space have sparked an explosion of interfaces, each competing to make AI more accessible in different contexts.

### The Landscape

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

### Why This Matters

When someone says "I tried Claude and it couldn't help with X," the question is: *which* Claude? The web chat can't search through folders. Claude Code can. Cowork can, but without the terminal. The underlying intelligence is the same, but the interface determines what's possible.

Understanding this landscape helps you pick the right tool for the task. Need to analyze 50 receipt images and generate a report? That's a Cowork or Claude Code job. Need to brainstorm a strategy? The web chat is fine. Need inline suggestions while coding? Use an IDE integration.

These leaps forward in model capability (Gemini 3, Opus 4.5) make the choice of interface matter more than ever. The models are smart enough now that the bottleneck isn't intelligence - it's access. Which is why "CLIs vs web tools" is getting so much focus and investment.

## The Terminal: A Step Backward to Leap Forward

Most of us alive today got to skip a generation. We grew up with icons, windows, and mice - visual interfaces that made computers approachable. But before all that, there was the terminal: a way to talk to computers using text.

Here's what matters: **the world runs on terminals**. Every server powering the websites you use, every cloud service, every development tool - they all speak this language fluently. And your computer? It has one sitting there, unused by most, waiting.

### What is it, really?

A **terminal** (also called a **shell** or **command line**) is an interface where you type commands in a language that's interpretable by humans but executable by machines. 

**CLI** stands for **Command Line Interface** - the "command line" was literally a line where you commanded the computer to do things, one instruction at a time. Like telling a very literal assistant exactly what to do: "list files," "make directory," "run program."

Think of it as writing instructions in a reduced, non-human language - a script - that can be quickly interpreted by the computer or, increasingly, by highly trained AI models that know thousands of these patterns.

### Why it matters now

Modern pseudo-terminals and actual terminals have become incredibly mature. When new tools emerge (like MCPs, AI coding assistants, automation scripts), they often connect to this ecosystem first because it's:
- Universal (works everywhere)
- Composable (commands chain together)
- Documented (decades of manuals, guides, and Stack Overflow answers)
- Understood by AI (trained on millions of examples)

### The Other App Stores on Your Computer

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

## More Than Just Code

Here's the remarkable thing: investment in coding tools has spawned innovations in completely unintended places. Because the model beneath all these tools is generally useful - trained on an astronomical breadth of topics - the very features that make them good at writing code make them powerful for anyone who logs into anything.

### The Unexpected Consequence of File Access

These systems can read and write to disk. That sounds technical, mundane even. But it's transformative. When a tool can:
- Read files from your hard drive
- Write files back
- Connect to your favorite SaaS apps
- Parse structured data

...it introduces a whole new layer of automation and interaction for everyone, not just programmers.

### Why "Good at Code" Means "Good at Everything"

Source code is just structured text with specific patterns. So is:
- A webpage (HTML/CSS)
- A research paper (structured sections, citations)
- Meeting notes (timestamps, speakers, action items)
- Expense reports (receipts, dates, amounts, categories)

Because these models excel at reading and writing structured text (code), they can:

**Consume webpages instantly** - Claude for Chrome can read an entire webpage, understand its structure, extract key information, and answer questions about it. Not because it was trained specifically on that website, but because it understands structured content.

**Navigate documentation** - Technical writing and documentation are just structured information with headers, examples, and references. The same skills that help a model read API documentation help it synthesize research papers or summarize meeting transcripts.

**Connect disparate sources** - Claude Cowork can read 50 receipt images, cross-reference them with a spreadsheet, and generate an expense report. Not because it was trained to do expenses specifically, but because it can read images, parse structured data, and write formatted output.

### Three Powerful Use Cases Beyond Code

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

### The Unifying Thread

All of these use cases work because the models can:
1. Read and write files (persistence)
2. Understand structure (from code training)
3. Process multiple modalities (text, images, documents)
4. Execute sequences of actions (not just one-shot responses)

The "coding tool" label undersells what's actually possible. These are general-purpose automation and thinking tools that happen to be exceptionally good at code because code is precise, structured, and well-documented - qualities that make a model useful for *everything* else. 

## The Incredible Usefulness of Markdown

It wasn't immediately obvious that files would become one of the most powerful ways to work with AI systems. Early on, everything was chat-based - ephemeral conversations that disappeared when you closed the window. But the community discovered something: **the output of your work with AI should often be a file on disk**, specifically a markdown file.

### Why Files on Disk Matter

When you save a markdown file, you're creating:
- **Persistent context** - Unlike chat history that disappears or gets buried, files stay accessible
- **Portable instructions** - Move them between tools, share them with others, version control them
- **Accumulating knowledge** - Build up a library of working patterns, definitions, and guidelines

### Three Powerful Patterns

**Task Lists: Planning Beyond the Chat**

Instead of asking an AI to do things one by one in conversation, you can maintain a task list in markdown:

```markdown
# Project Tasks

- [ ] Research competitor pricing models
- [ ] Draft initial proposal outline  
- [ ] Gather supporting data from Q3 reports
- [x] Schedule kickoff meeting
```

The AI can read this file, understand what's done and what's pending, and help you work through items systematically. This is especially powerful with CLI tools and skills that can read/update files directly.

**Agent Definitions: Teaching the AI How to Act**

This one surprised everyone. You can write a markdown file that describes *how you want the AI to behave* - its role, its constraints, its style - and reference it in your workflow. This is called an "agent descriptor" or "agent file."

```markdown
# Technical Writer Agent

You are a technical writer who:
- Explains complex concepts in simple terms
- Uses concrete examples over abstractions
- Writes for readers with UX/design backgrounds
- Avoids jargon unless you define it first
- Structures content with clear headers and lists
```

When working with systems that support this (like Claude with Projects, or CLI tools with file access), the AI reads this file and adjusts its behavior accordingly. You're focusing the model on-the-go by giving it context from disk.

**Short-Term Memory: Externalizing Your Working Context**

During a complex task, you can save "memory files" that capture:
- Decisions you've made ("We decided to use approach B because...")
- Things to remember ("The API rate limit is 100 requests/hour")
- Open questions ("Need to verify if this works with Safari")
- Reference information you'll need repeatedly

The AI can read these files when needed, effectively giving it memory beyond the current conversation. This works better than relying on chat context alone because:
- Chat windows have token limits
- Files are explicit and organized
- You control exactly what gets "remembered"
- You can edit/update memory as understanding evolves

### Markdown Has Structure

Markdown isn't just plain text - it has syntax that both humans and AI understand:

- **Headers** (`# ## ###`) - Organize information hierarchically
- **Lists** (`- [ ]` for tasks, `- ` for bullets) - Structure items and track completion
- **Code blocks** (` ``` `) - Preserve formatting for technical content
- **Links** (`[text](url)`) - Connect related information
- **Emphasis** (`*italic*`, `**bold**`) - Highlight what matters

This structure makes markdown both human-readable and machine-parseable. The AI doesn't just see text - it understands the organization, the hierarchy, the relationships between sections.

When you combine these patterns - task lists that track progress, agent files that shape behavior, memory files that persist context, all using markdown's inherent structure - you've created a working environment that extends far beyond simple chat. You've built a system. 

## A Little Bit of Structure Goes a Long Way

Both Anthropic and OpenAI have recently released guides that reveal something important: **the structure of your prompt matters as much as its content.** Not structure in the sense of "break down your problem into steps" (though that helps too), but literal structural organization of the text you provide.

### Why Structure Works

During training and post-training, these models develop preferences for certain patterns - certain "codes" in the machine's memory. When you provide structured input, you're speaking a language the model has been optimized to understand. The result: dramatically better output quality.

### What Structure Looks Like

**Grouping Similar Concepts Together**

Instead of this scattered approach:
```
I need a report. Include sales data. Also mention the Q3 goals. 
Don't forget the team feedback. And add a summary at the top.
```

Group related information:
```
TASK: Generate Q3 performance report

REQUIRED SECTIONS:
- Executive summary
- Sales data analysis
- Progress toward Q3 goals
- Team feedback synthesis

OUTPUT FORMAT: Markdown with headers
```

**Clearly Labeling Different Types of Content**

The model processes labeled sections differently. It understands:
- "Here's the task" (what to do)
- "Here's the context" (background information)
- "Here's an example" (what good looks like)
- "Here are constraints" (what NOT to do)

**Logical Organization**

Structure your content in a logical order:
1. What you want (the goal)
2. What you have (the inputs/context)
3. How you want it (format, style, constraints)
4. Examples (if relevant)

This mirrors how the models have been trained to process information, making it easier for them to parse your intent.

### This Applies to ALL Interfaces

Whether you're using:
- Web chat (claude.ai, chatgpt.com)
- CLI tools (Claude Code, OpenCode)
- Desktop apps (Cowork, Cursor)
- API calls
- Embedded tools (Copilot, Claude in Excel)

...structure helps. The underlying model is the same, and it responds to organization regardless of the interface.

### Breaking Down the Problem Space

Structure also helps you think clearly about what you're asking for. When you're forced to organize your prompt into sections, you often realize:
- You're asking for three different things, not one
- You haven't defined what "good" looks like
- You're missing critical context
- Your constraints are unclear

The act of structuring your request makes you a better prompter, which makes the AI a better responder. It's a virtuous cycle.

## Context Is King

Imagine standing in front of a vending machine, punching in the code for crisps, and getting angry when gum pops out. That's what working with AI without proper context looks like. You're pressing buttons, but not the *right* buttons.

### The Perfect Prompt Problem

For any information you're after, there exists a "perfect" prompt that will get you there. Actually, there are likely many perfect prompts. Even for the simplest relationships (1+1=strawberries? 1+1=2? 1+1="eleven"?), the list of perfect prompts grows large because perfection depends on what you actually want.

As complexity increases - as you'd expect - the set of perfect prompts grows exponentially. And now you don't just want an answer, you want the model to *take actions*. Maybe search files, modify code, generate a report, chain together multiple steps.

What's remarkable about late 2025 is that we're seeing more and more believable examples of these tools performing this parlor trick in a very rudimentary sense. They can:
- Read files you reference
- Follow multi-step instructions
- Remember context across a session
- Execute tools and check their own work
- Chain actions together toward a goal

But here's the key: **the quality of what you get out is directly proportional to the context you put in.**

### The Context Equation

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

### The Vending Machine Metaphor

When someone complains "the AI gave me garbage," the question is: what buttons did you press? Did you:
- Give it access to the files it needs?
- Provide examples of what "good" looks like?
- Include relevant documentation or reference material?
- Save important context in files it could read?
- Or did you just type a vague question and hope?

This isn't about blaming the user - it's about understanding that these systems are *context-hungry*. The factory metaphor returns: the accumulated wisdom in documentation, READMEs, code comments, example files - these are the "walls of the factory" that activate foundation models. 

Feed it good context, and you dramatically increase the chances of getting exactly what you need. Starve it of context, and you're punching random codes into the vending machine, angry at the gum.

Press the right buttons, for gods sake.

## Decorating Your Prompts

Models have been trained to recognize certain patterns - certain "decorators" - that help them parse and understand your intent more clearly. Think of these as formatting conventions that the model has seen millions of times during training, and thus responds to reliably.

### XML Tags: The Model's Favorite Delimiter

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

### CSV: Structure That Models Love

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

### Proprietary Formats: DOCX, XLSX, and More

Modern models can infer structure from proprietary formats like Microsoft Word (.docx) and Excel (.xlsx) files. They understand:
- Document headings and hierarchy
- Table structure and relationships
- Spreadsheet formulas and data organization
- Embedded images and their context

When you upload these files (through tools that support it, like Claude Code or Cowork), you don't need to convert them to plain text first. The model extracts the structure automatically.

### Building Your Own Decorators

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

## The Factory Is the Teacher

The sheer industrial scale of content development in our digital age invites steam economy metaphors - but the truth is more profound. The means of production itself has become a sage. 

Every codebase, every README, every bug report, every Stack Overflow answer, every user manual - these are the "walls of the factory." They contain the collective memory of millions of developers: the dull repetitive patterns, the brilliant innovations, the painful debugging sessions, the pleasurable breakthroughs.

This vast soup of documented human experience is what activates foundation models. When you provide context - a getting started guide, an API reference, an error log - you're not just giving the AI information. You're giving it access to the accumulated wisdom stored in the factory walls themselves.

This is why documentation matters. This is why READMEs exist. They are the factory teaching the next generation of workers - whether human or AI.
