# Section 2: Why Use a Terminal?

## Animation: `02-WhyTerminalAnimation`

Three-stage demonstration of terminal-based AI capabilities.

## Design Notes

**Concept: "The Terminal Advantage"**

Show concrete examples of what becomes possible when AI runs in your terminal instead of a sandboxed chat window.

**Duration:** ~25 seconds

### Animation Stages

**Stage 1: AI CLI Tools** (~8s)
- Terminal appears with prompt
- User types: `claude "what can you help me with?"`
- AI responds with capabilities list
- Key point: Direct conversation with AI from command line

**Stage 2: Local File Access** (~8s)
- Terminal shows: `claude "summarize the files in this project"`
- File tree appears showing project structure
- AI reads and summarizes actual local files
- Key point: AI can see and work with your files

**Stage 3: Script Creation** (~8s)
- Terminal shows: `claude "create a script to organize my downloads"`
- Script content appears being written
- File saves to disk
- Key point: AI creates executable tools for you

### Visual Cues

| Stage | Command | Output | Key Insight |
|-------|---------|--------|-------------|
| AI CLI | `claude "what can you help me with?"` | Capabilities list | Direct AI access |
| Local Files | `claude "summarize the files..."` | File tree + summary | File system access |
| Script Creation | `claude "create a script..."` | Shell script | Creates real tools |

### Why This Section Exists

This section was added to bridge the gap between "AI exists" (Section 1) and "interfaces matter" (Section 3). It answers the immediate question: "Why would I use a terminal at all?"

The three stages progress from simple (ask a question) to powerful (create automation), showing the terminal as an enabler rather than a barrier.

## Content Summary

Introduces the terminal as a direct interface to AI capabilities. Unlike web chat, terminal-based AI tools can read your files, create scripts, and integrate with your existing workflow. The terminal isn't a barrier to overcome - it's a capability multiplier.

## Key Messages

1. **Direct access** - Talk to AI from your command line
2. **File system integration** - AI sees your actual project files
3. **Creation power** - AI can create executable tools, not just text responses

## References

- Timeline implementation: `src/lib/timelines/why-terminal.ts`
- Animation component: `src/components/animations/02-WhyTerminalAnimation.astro`
- Content: `src/content/sections/02-why-terminal.md`
