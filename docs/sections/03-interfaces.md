# Section 3: Same Models, Different Interfaces

## Animation: `03-InterfacesAnimation`

Subtractive scene flow showing same prompt, different outcomes.

## Design Notes

**Concept: "Same Intelligence, Different Access"**

Show one full scene at a time. Chat first (isolated), then terminal (connected). The contrast is sharper because each gets full attention.

**Duration:** ~20 seconds total across 4 stages

## Timeline Choreography

| Beat | Type | Content/Stage | Description |
|------|------|---------------|-------------|
| 1 | content | Message 0 | Title: "Same Model, Different Interface" |
| 2 | content | Message 1 | Intro + "Chat interfaces are sandboxed..." |
| 3 | animation | `web-chat` | Browser with ChatGPT asking for details |
| 4 | animation | `prompt-travel` | Prompt floats from web to terminal |
| 5 | animation | `terminal-response` | Terminal reads files, produces complete output |
| 6 | content | Message 2 | "CLI tools run on your machine..." + closing |
| 7 | animation | `insight` | "Same model, different interface." |

## Animation Stages

### Stage 1: `web-chat` (~6s)
- Browser window appears with ChatGPT-style interface
- User message: "Help me draft an email about the project delay"
- AI responds asking for clarifying questions
- Visual: Chat is sandboxed - no file access

### Stage 2: `prompt-travel` (~3s)
- Prompt floats to center
- Web scene fades out, terminal fades in
- Prompt "lands" in terminal

### Stage 3: `terminal-response` (~6s)
- Thinking indicator
- Response references local file: `~/projects/atlas/status.md`
- Complete draft email (no questions needed)
- File saved: `~/Desktop/delay-email.txt`

### Stage 4: `insight` (~4s)
- Terminal fades out
- "Same model, different interface."

## Key Message

The interface determines what's possible. Terminal connects AI to your files.

## References

- Timeline: `src/lib/timelines/interfaces.ts`
- Animation: `src/components/animations/03-InterfacesAnimation.astro`
- Content: `src/content/sections/03-interfaces.md`
