# Getting Started: The Interview
## A Conversation About AI Tools for the Technical Adjacent

*A dialogue between two people developing a guide for non-technical professionals who want to understand and use AI tools effectively.*

---

## Part 1: Setting the Stage

**Q: So, what are we building here? Who is this for?**

**A:** Throughout my career, a passion of mine has always been helping people who don't necessarily come from a technical background or training, who want to learn how to "code." 

The recent tidal wave of new "vibe coders" has raised furrowed brows from those trained in the art of software development. Rightly so - the process of building production-grade, industrial strength software is by no means an easy task.

However, you don't need to be a professional chef to know how to cook your own dinner. But you need to know what kinds of dangers exist in a kitchen.

**Q: Can you give me a specific person you're thinking of?**

**A:** Yeah, actually. I was at a Christmas lunch recently, talking with a UX researcher. Non-technical role, but she interacts with technical systems every day. Concepts like "prompt engineering" and "MCPs" came up in conversation, but they felt foreign to her. The terminal and CLI ecosystem was conceptually too distant.

The thing is, OpenAI and Claude aren't really recommending terminals to these users yet. But the gap between understanding *what* these things are and knowing *how* to actually use them feels vast to people like her.

**Q: So we're writing for the "technical adjacent"?**

**A:** Exactly. UX researchers, product managers, designers, data analysts. People who work *with* technical systems every day without needing to know how servers work or how to compile code. They hear terms in meetings, they see developers doing things, but there's this gap.

These AI models, platforms, and products can act as a bridge, helping those without the training or skill to leap ahead and make use of technology that would previously be out of reach. When you have a little knowledge under your belt, this gap narrows even more.

**Q: And the title - "Getting Started" - that's intentional?**

**A:** Yes! Every technical tool, library, and system has documentation with this familiar title. Learning to find, read, and use these guides is itself a core skill. This document is both a guide *and* an example of the kind of contextual material that makes AI tools dramatically more useful.

It's meta, but it's true.

---

## Part 2: The Interface Problem

**Q: You mentioned "not all models are the same, not all interfaces either." What's the core message there?**

**A:** Picture this: You're using Claude. Maybe through the website chat. Maybe through Claude Code in your terminal. Maybe through the new Cowork app that just launched. Maybe embedded in your Slack workspace, or inside Excel, or as a Chrome extension.

Same model. Drastically different experiences.

**Q: Why does that matter?**

**A:** The interface shapes everything - what you can do, how you do it, what feels natural, what feels impossible. When someone says "I tried Claude and it couldn't help with X," the question is: *which* Claude? The web chat can't search through folders. Claude Code can. Cowork can, but without the terminal.

The underlying intelligence is the same, but the interface determines what's possible.

**Q: There's a philosophical angle here, isn't there?**

**A:** Absolutely. Marshall McLuhan said "the medium is the message" back in 1964. The form of communication shapes its impact more than the content itself. For AI tools, this means different interfaces don't just deliver AI differently - they fundamentally change what's possible to accomplish.

There's also Korzybski's "the map is not the territory" from 1931. The AI model is the territory. The interface is the map. They're distinct things with different properties.

Our synthesis: "The model isn't the interface." Same underlying intelligence, but the access point changes everything.

**Q: What's the landscape look like right now?**

**A:** You've got web chat interfaces - claude.ai, chatgpt.com, gemini.google.com. That's where most people start. Great for conversation, brainstorming, quick questions. But limited - can't directly manipulate files, run commands, or access your system.

Then CLI tools like Claude Code. Command-line interfaces that can read and write files, execute code, search your projects. Powerful but intimidating - requires terminal comfort.

Desktop apps like Claude Cowork, Cursor, Windsurf. Middle ground - GUI interfaces with system access. Cowork specifically was designed for "non-coders using Claude Code for non-code tasks."

And embedded AI - Copilot in VS Code, Claude in Excel, ChatGPT in Office. AI baked into tools you already use. Context-aware, but limited to that tool's domain.

**Q: What about the open source situation?**

**A:** There's been significant discussion in the developer community about open-source alternatives. OpenCode and similar projects represent a push toward transparent, customizable AI coding assistants that you can run locally or self-host. Bringing the "open source" ethos to AI interfaces.

The recent resurgence of Google's Gemini 3 and the launch of Claude's Opus 4.5 as serious contenders in the coding space have sparked an explosion of interfaces, each competing to make AI more accessible in different contexts.

**Q: So the takeaway is...?**

**A:** Understanding this landscape helps you pick the right tool for the task. Need to analyze 50 receipt images and generate a report? That's a Cowork or Claude Code job. Need to brainstorm a strategy? The web chat is fine. Need inline suggestions while coding? Use an IDE integration.

The models are smart enough now that the bottleneck isn't intelligence - it's access.

---

## Part 3: The Terminal

**Q: How do we introduce terminals without scaring people off?**

**A:** It's a conceptual leap BACKWARD in time, actually. Most of us alive today got to skip a generation. We grew up with icons, windows, and mice - visual interfaces that made computers approachable. But before all that, there was the terminal: a way to talk to computers using text.

**Q: Should we acknowledge the intimidation factor?**

**A:** Be empathetic through tone, not by calling out fear. Don't say "don't be scared" - that makes people feel like they should be scared. Just be direct and factual.

Here's what matters: the world runs on terminals. Every server powering the websites you use, every cloud service, every development tool - they all speak this language fluently. And your computer? It has one sitting there, unused by most, waiting.

**Q: How do you define what a terminal actually is?**

**A:** A terminal - also called a shell or command line - is an interface where you type commands in a language that's interpretable by humans but executable by machines.

CLI stands for Command Line Interface. The "command line" was literally a line where you commanded the computer to do things, one instruction at a time. Like telling a very literal assistant exactly what to do: "list files," "make directory," "run program."

**Q: There's an interesting parallel to chat interfaces here...**

**A:** Yes! The terminal is fundamentally a turn-based dialogue. You type a command - that's your message. Computer responds with output - that's its reply. You type another command based on that response. Computer responds again.

This is literally how chat interfaces work. The terminal was doing "conversational AI" before AI existed. It's the original chat interface.

**Q: So what's the difference between terminal and AI chat?**

**A:** Terminal uses structured commands - `ls -la` - while AI chat uses natural language - "show me files." Terminal is instant if you know the command, but you have to memorize syntax. AI chat is slower but handles ambiguity and explains as it goes.

Terminal is deterministic - same input, same output. AI chat may vary by context.

But here's the key insight: modern AI coding assistants act as translators between these two worlds. You speak natural language. AI translates to terminal commands. Terminal executes. AI translates output back to natural language.

You get the conversational interface without needing to memorize terminal commands. The AI bridges the gap.

**Q: Why did terminals persist despite GUIs winning?**

**A:** Text is universal. Works over slow connections when you SSH to servers. Works without graphics hardware. Copy-paste-able. Searchable. Scriptable.

Precision matters. No clicking wrong buttons. Exact control over options and flags. Reproducible - same command equals same result. Documentable - write down the exact command.

Composability is powerful. Pipe output of one command into another. Build complex workflows from simple tools. The Unix philosophy: "Do one thing well."

And remote access. Every server in the world is accessed via terminal. Cloud infrastructure controlled via CLI. Can't click buttons on a machine across the planet.

---

## Part 4: The Hidden App Stores

**Q: You mentioned package managers. How do we explain those to someone who's never used one?**

**A:** There's more than one "app store" already on your computer. You know about the Mac App Store or Microsoft Store - the ones with big download buttons and "Buy" or "Get" options. But there are other app stores living on your computer, accessible through the terminal.

Key difference: these don't sell anything. Their source code is open, meaning you can see exactly how they work. That's an important distinction for trust and customization.

**Q: What are the main ones?**

**A:** Homebrew for macOS and Linux - the big general-purpose package manager for Mac users. Install with one terminal command, then use it to get thousands of tools.

npm for the JavaScript and Node.js ecosystem. Massive - over 2 million packages for building apps, websites, automation scripts.

pip for Python. Essential if you're doing data analysis, machine learning, or automation with Python.

cargo for Rust. Gives you blazing-fast tools.

gem for Ruby.

apt and yum for Linux - built into most Linux distributions.

**Q: Can you give a concrete example?**

**A:** Sure. `brew install ripgrep` gets you `rg`, a blazing-fast search tool that AI models - especially GPT-4 and GPT-5 - love to use for searching through project folders.

The shock factor for most people: installing software traditionally means Google the name, find the website, click download, open installer, click through wizard, drag to Applications folder, maybe restart. That's 10-15 minutes of frustration.

Terminal reality: `brew install imagemagick`. Done. Three seconds.

**Q: Why does this matter for AI tools?**

**A:** Here's the problem. You ask Claude: "Help me batch resize 100 images."

Claude responds: "Sure! Use ImageMagick. First install it: `brew install imagemagick`. Then run: `mogrify -resize 50% *.jpg`."

Your reaction if you don't know about package managers: What's brew? Where do I type this? What's mogrify? Will this break my computer?

AI models are trained on millions of developer conversations where `brew install X` is the assumed baseline. They forget most people have never opened Terminal.app.

This guide bridges that gap. Now when AI says "brew install X," you understand: brew is Homebrew, a package manager. Type it in Terminal. It's safe - open source, well-maintained, millions of users. It won't break your computer. You can uninstall cleanly.

**Q: What about security? Is this safe?**

**A:** GUI App Stores are curated and gated - Apple reviews everything. Sandboxed with limited system access. Signed with verified developer identity. Paid model with 30% cut to platform.

CLI Package Managers are open source - anyone can inspect code. Full system access - can do anything you can do. Community trust model based on popularity, maintenance, forks. Free with no platform tax.

Neither is "better" - they serve different needs. GUI stores offer safety and simplicity for general users. CLI managers offer power and flexibility for technical work.

Red flags to watch for: packages with no documentation, no GitHub repository, no recent updates, very few downloads, asking for admin password for unusual reasons.

Green flags: active GitHub repository with many stars, regular updates, large user base, good documentation, responsive maintainers.

Most popular packages - git, imagemagick, ffmpeg, ripgrep, jq - have millions of users and decades of trust.

---

## Part 5: More Than Just Code

**Q: You said investment in coding tools spawned innovations in unintended places. What do you mean?**

**A:** Here's the remarkable thing: because the model beneath all these tools is generally useful - trained on an astronomical breadth of topics - the very features that make them good at writing code make them powerful for anyone who logs into anything.

**Q: What's the key capability that changed things?**

**A:** These systems can read and write to disk. That sounds technical, mundane even. But it's transformative. When a tool can read files from your hard drive, write files back, connect to your favorite SaaS apps, parse structured data - it introduces a whole new layer of automation and interaction for everyone, not just programmers.

**Q: Why does being "good at code" translate to being good at other things?**

**A:** Source code is just structured text with specific patterns. So is a webpage - HTML and CSS. So is a research paper - structured sections, citations. Meeting notes - timestamps, speakers, action items. Expense reports - receipts, dates, amounts, categories.

Because these models excel at reading and writing structured text from code training, they can consume webpages instantly, navigate documentation, connect disparate sources.

**Q: Can you ground this in how the models actually work?**

**A:** Everything becomes tokens. Human text, code, markdown, CSV - the tokenizer converts them all to token sequences. To the model, these are all just sequences of tokens.

The model learned during training that certain token sequences follow patterns. After `def` usually comes a function name. After `#` in markdown comes a header. After a quote in CSV comes field content.

The breakthrough: patterns learned from code - hierarchical structure, nested blocks, dependency relationships - transfer to other structured text because the statistical patterns are similar.

**Q: What are the key patterns that transfer?**

**A:** Hierarchical nesting. In code: function contains block contains statement. Transfers to: document contains section contains paragraph.

Dependency relationships. In code: import X, use X in function Y. Transfers to: cite paper X, reference in argument Y.

Structured sequences. In code: step1, step2, step3. Transfers to: First, Then, Finally.

Delimiter patterns. In code: parentheses, braces, brackets. Transfers to: XML tags, quoted text, list items.

Error detection. In code: type mismatch, undefined variable. Transfers to: contradictory statements, undefined terms, missing references.

**Q: What are the main use cases beyond code?**

**A:** Research and synthesis. Give it your notes, articles, documents, ask it to synthesize. But go beyond simple summarization: "Find contradictions between these three sources." "Extract all the dates and events mentioned and create a timeline." "Which of these papers actually cites primary research versus secondary sources?"

The model acts as an interrogator, not just a synthesizer.

Technical writing and documentation. Taking messy notes and formatting them into clean documentation. Reading existing docs and suggesting improvements to clarity. Generating examples based on patterns. Maintaining consistent terminology.

The mechanical rubber duck. In programming, "rubber duck debugging" means explaining your problem out loud to an inanimate object. The act of explaining often reveals the solution.

AI tools excel at this. You're not asking it to synthesize or generate. You're using it as a conversational partner to clarify your thinking: "Here's what I'm trying to achieve. What am I missing?" "I'm stuck between two approaches. Let me explain both..." "This doesn't make sense. Can you ask me questions to help me figure out why?"

You're not writing code - you're writing a script. A conversation script. A thinking-through-it-out-loud script.

---

## Part 6: The Unreasonable Usefulness of Markdown

**Q: How did files become so important for working with AI?**

**A:** It wasn't immediately obvious that files would become one of the most powerful ways to work with AI systems. Early on, everything was chat-based - ephemeral conversations that disappeared when you closed the window.

But the community discovered something: the output of your work with AI should often be a file on disk. Specifically, a markdown file.

**Q: Why files instead of just chat?**

**A:** When you save a markdown file, you're creating persistent context - unlike chat history that disappears or gets buried, files stay accessible. Portable instructions - move them between tools, share them with others, version control them. Accumulating knowledge - build up a library of working patterns, definitions, and guidelines.

**Q: You mentioned being able to "describe things into existence." What does that mean?**

**A:** Markdown files are executable specifications. You describe something in structured text, and AI tools can read it, use it, modify it, create from it.

This is the closest thing to "code for non-coders." You write in natural language with light structure, and it becomes actionable.

**Q: What can you describe?**

**A:** Three layers. First, prompt files - specific task requests you can save and reuse. "Analyze this data and find patterns."

Second, skill definitions. You can describe a capability, and the AI gains it. "When given a screenshot, you should: identify UI components, note accessibility issues, suggest improvements, output findings in structured markdown." AI now has this skill. You described it into existence.

Third, agent definitions. You can describe a personality, and the AI embodies it. "You are a UX research assistant who helps analyze user feedback. Your expertise includes qualitative data synthesis, thematic analysis, affinity mapping. Your communication style is empathetic and evidence-based. Your constraints: never make claims without data, always anonymize participant information."

AI now behaves this way. You shaped its personality through description.

**Q: How do these layers work together?**

**A:** They stack. You have a conversation with AI. AI reads your agent.md file - "I'm a UX research assistant with these guidelines." AI uses your thematic-analysis-skill.md - "Process: extract quotes, identify themes, create affinity groups." AI checks your project-context.md - "We're redesigning the checkout flow, focus on payment friction."

All of that informs the output. You're not teaching the AI from scratch each time. You've created a persistent environment of context, capabilities, and personality that the AI loads and uses.

**Q: Why markdown specifically? Why not Word docs or JSON?**

**A:** Markdown is the sweet spot. Human readable - reads like normal text, write with any text editor. Machine parseable - AI understands the structure reliably. Structured - headers, lists, code blocks have semantic meaning. Portable - works everywhere. Version control friendly - git diff makes sense. Lightweight - just text.

Word docs are human readable but not machine parseable. JSON is machine parseable but not human readable. Plain text is readable but not structured. Markdown is all of these.

It's the lingua franca for AI collaboration.

**Q: How do these files evolve over time?**

**A:** Day 1, you have a simple prompt in chat. Day 3, you save the prompt to a file so you can reuse it. Day 10, you add a skill file with your methodology. Day 30, you create a specialized agent with personality and constraints. Day 90, you have a full system - agents folder, skills folder, memory folder, tasks folder.

All markdown. All human-editable. All read and used by AI.

The files evolve with your understanding. Version 1.0 has basic instructions. AI makes mistakes, so version 1.1 adds a constraint. Still issues, so version 1.2 adds examples of good versus bad output. Works well now, so version 2.0 extracts common patterns into a separate skill file.

It's like training an assistant, but instantaneous, reversible, shareable, and inspectable.

---

## Part 7: Structure and Context

**Q: You said structure in prompts matters. How so?**

**A:** Both Anthropic and OpenAI have recently released guides that reveal something important: the structure of your prompt matters as much as its content. Not structure in the sense of "break down your problem into steps" - though that helps too - but literal structural organization of the text you provide.

**Q: Why does structure work?**

**A:** During training and post-training, these models develop preferences for certain patterns - certain "codes" in the machine's memory. When you provide structured input, you're speaking a language the model has been optimized to understand. The result: dramatically better output quality.

**Q: What does good structure look like?**

**A:** Grouping similar concepts together. Instead of scattered requests - "I need a report, include sales data, also mention Q3 goals, don't forget team feedback, add a summary" - group related information:

```
TASK: Generate Q3 performance report

REQUIRED SECTIONS:
- Executive summary
- Sales data analysis
- Progress toward Q3 goals
- Team feedback synthesis

OUTPUT FORMAT: Markdown with headers
```

Clearly labeling different types of content. The model processes labeled sections differently. It understands "here's the task" versus "here's the context" versus "here's an example" versus "here are constraints."

Logical organization. What you want, what you have, how you want it, examples if relevant.

**Q: And context - you said "context is king"?**

**A:** Imagine standing in front of a vending machine, punching in the code for crisps, and getting angry when gum pops out. That's what working with AI without proper context looks like. You're pressing buttons, but not the right buttons.

**Q: What's the "perfect prompt" problem?**

**A:** For any information you're after, there exists a "perfect" prompt that will get you there. Actually, there are likely many perfect prompts. Even for the simplest relationships - does 1+1 equal strawberries? 2? "eleven"? - the list of perfect prompts grows large because perfection depends on what you actually want.

As complexity increases, the set of perfect prompts grows exponentially. And now you don't just want an answer, you want the model to take actions. Search files, modify code, generate a report, chain together multiple steps.

**Q: What factors reduce hallucinations and improve quality?**

**A:** The prompt itself - specific versus vague, clear scope, examples of what you want.

The environment - saved files the AI can access, project structure it can navigate, previous conversation history.

The quality of reference material - good documentation beats vague descriptions, examples beat abstractions, specific constraints beat general guidance.

Signal-to-noise ratio - is the context actually relevant to the task, or are you including everything hoping something sticks?

**Q: So the vending machine metaphor...?**

**A:** When someone complains "the AI gave me garbage," the question is: what buttons did you press? Did you give it access to the files it needs? Provide examples of what "good" looks like? Include relevant documentation? Save important context in files it could read? Or did you just type a vague question and hope?

Feed it good context, and you dramatically increase the chances of getting exactly what you need. Starve it of context, and you're punching random codes into the vending machine, angry at the gum.

Press the right buttons, for gods sake.

---

## Part 8: Decorating Your Prompts

**Q: What are "decorators" in prompts?**

**A:** Models have been trained to recognize certain patterns - certain decorators - that help them parse and understand your intent more clearly. Think of these as formatting conventions that the model has seen millions of times during training, and thus responds to reliably.

**Q: What's the most effective decorator?**

**A:** XML tags. Both Anthropic and OpenAI's documentation explicitly recommend using XML tags to mark boundaries in your prompts. XML creates clear, unambiguous separations between different types of content.

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

The model understands that `<context>` contains information to reference, `<task>` contains what to do, and `<constraints>` contains rules to follow. Dramatically reduces ambiguity.

**Q: What about CSV?**

**A:** CSV files are another format models parse exceptionally well. When you provide CSV data, always include headers - the model uses these to understand what each column represents.

```csv
task_name,status,priority,dependencies
Setup_Database,completed,high,none
Build_API,in_progress,high,Setup_Database
Design_Frontend,pending,medium,Build_API
```

The model can now understand relationships between tasks, identify dependencies, see status and priority at a glance, answer questions like "What's blocking Design_Frontend?"

**Q: Can you build your own decorators?**

**A:** Absolutely. You're not limited to standard formats. You can invent your own conventions, as long as you're consistent.

I personally use task-based decorators when planning complex work. Phases with status, dependencies, and task lists. When I reference "Phase 2" or ask about dependencies, the model understands the structure because I've been consistent.

The key principle: whatever decorator system you create, use it consistently. The model learns your pattern within the conversation and applies it going forward. Structure breeds understanding.

---

## Part 9: The Factory Is the Teacher

**Q: What does "the factory is the teacher" mean?**

**A:** The sheer industrial scale of content development in our digital age invites steam economy metaphors. But the truth is more profound.

The means of production itself has become a sage.

**Q: Can you unpack that?**

**A:** Every codebase, every README, every bug report, every Stack Overflow answer, every user manual - these are the "walls of the factory." They contain the collective memory of millions of developers: the dull repetitive patterns, the brilliant innovations, the painful debugging sessions, the pleasurable breakthroughs.

This vast soup of documented human experience is what activates foundation models. When you provide context - a getting started guide, an API reference, an error log - you're not just giving the AI information. You're giving it access to the accumulated wisdom stored in the factory walls themselves.

**Q: So documentation matters more than people realize?**

**A:** This is why documentation matters. This is why READMEs exist. They are the factory teaching the next generation of workers - whether human or AI.

When you write good documentation, you're not just helping the next human who reads it. You're contributing to the training data that makes AI models more useful. You're adding to the walls of the factory.

And when you give AI access to good documentation, you're unlocking that accumulated wisdom. The factory teaches through its walls.

---

## Part 10: The Animation Idea

**Q: You mentioned turning this into an animated experience. What's the vision?**

**A:** A rudimentary animation in xterm.js. Storyboard style - introduce a topic, speak on it briefly, animated scene with text flashing, move to the next "slide."

Interactive terminal experience. Typewriter effects, ASCII art, keyboard controls. Five to seven minutes total.

**Q: What's the visual approach?**

**A:** I keep thinking about those cross-section books that show complex engineering things - like a ship or a building - with an askew, decompiled view of the parts. Imagine a cross-section of a car showing all the components.

For the "more than just code" section, we could show a cross-section of relationships between text in a prompt, long-form content, and code content. Show how they're all structured text at different levels.

For the terminal section, split screen showing terminal on one side, AI chat on the other, demonstrating the same interaction in both.

For package managers, a reveal of all the hidden app stores on your computer - matrix-style cascading package names.

**Q: What about the philosophical concepts - McLuhan, Korzybski?**

**A:** I want to put each of these phrases on the screen somehow, making it easy for people to follow the link. "The medium is the message." "The map is not the territory." "The model isn't the interface."

Maybe hoverable annotations, or interstitial breaks between scenes, or a footer status bar showing the current philosophical context. End credits with full references and links.

The goal is depth without disruption. Users can engage as deeply as they want.

**Q: Static guide or animation - which is primary?**

**A:** Hybrid approach. Static markdown guide is primary - accessible, searchable, shareable, works everywhere. Animation is the companion piece - a "trailer" for the full guide. Engagement and shareability.

The animation doesn't replace the guide. It's a different entry point for different learning styles.

---

## Part 11: Wrapping Up

**Q: What's the core message of all of this?**

**A:** AI coding tools unlock power for everyone, not just programmers. The same features that make these tools good at code make them powerful for research, technical writing, task management, and conversation-based thinking.

You don't need to become a developer. But understanding the landscape - interfaces, terminals, package managers, file access, structure, context - helps you collaborate better with AI tools.

The gap between "what is this" and "how to use it" just narrowed.

**Q: What should someone take away from this guide?**

**A:** Terminals are text-based conversation interfaces - the original chat. AI can translate between natural language and terminal commands. Package managers are app stores for developer tools. Your computer has five or more of them with millions of free tools.

Markdown files are executable specifications. You can describe prompts, skills, and agents into existence. Structure matters as much as content. Context is king - press the right buttons.

The factory is the teacher. Documentation is accumulated wisdom. When you give AI good context, you're unlocking that wisdom.

**Q: Any final thoughts?**

**A:** Working with people across a wide range of skill levels, I've come up with this basic rubric to get started. These guiding principles should help you adopt all kinds of AI tools, understand how these technical microcosms actually work, and begin generating all kinds of interesting content, code, and more.

You don't need to be a professional chef to cook your own dinner. But you need to know what kinds of dangers exist in a kitchen.

Now you know.

---

*End of interview.*

---

## Appendix: Key Concepts Quick Reference

### Philosophical Anchors
- **"The medium is the message"** - Marshall McLuhan, 1964
- **"The map is not the territory"** - Alfred Korzybski, 1931
- **"The model isn't the interface"** - Our synthesis

### Core Metaphors
- **Chef/Kitchen** - You don't need professional training to cook dinner
- **Vending Machine** - Press the right buttons, for gods sake
- **Factory as Teacher** - Documentation is accumulated wisdom in the walls
- **Mechanical Rubber Duck** - AI as conversational thinking partner
- **Translation Layer** - AI bridges natural language and terminal commands

### The Three Layers of Description
1. **Prompt Files** - What should the AI do now?
2. **Skill Definitions** - What can the AI do?
3. **Agent Definitions** - What should the AI be?

### Package Manager Ecosystem
- **Homebrew** - macOS/Linux general tools (6,000+ packages)
- **npm** - JavaScript/Node.js (2,000,000+ packages)
- **pip** - Python (400,000+ packages)
- **cargo** - Rust (100,000+ packages)
- **gem** - Ruby (175,000+ packages)
- **apt/yum** - Linux system packages

### Context Equation
1. The prompt itself (specific vs vague)
2. The environment (files AI can access)
3. Quality of reference material
4. Signal-to-noise ratio

### Why Markdown?
- Human readable ✓
- Machine parseable ✓
- Structured ✓
- Portable ✓
- Version control friendly ✓
- Lightweight ✓

---

*This interview was developed through iterative conversation, January 2026.*
