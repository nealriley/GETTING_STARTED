# Section 2: Same Models, Different Interfaces

## Animation: `02-InterfacesAnimation`

Subtractive scene flow showing same prompt, different outcomes.

## Design Notes

**Concept: "Same Intelligence, Different Access"**

Instead of a busy split-screen, we show one full scene at a time. Chat first (isolated), then terminal (connected). The contrast is sharper because each gets full attention.

**Duration:** ~20 seconds

### Scene Flow

**Scene 1: Chat Interface (Sandboxed)** ~6s
- Chat window appears with user message: "Summarize my project files"
- AI responds: "I don't have access to your local files..."
- Below: barrier line + grayed-out file icons (unreachable)
- Visual: The chat is ALONE - separated from user's machine

**Scene 2: Terminal (Connected)** ~8s  
- Chat fades out completely
- Terminal window appears
- Same prompt typed: `llm "Summarize my project files"`
- Files appear ABOVE terminal with connection dots/lines
- Terminal reads files, shows success output
- Visual: The terminal is CONNECTED - lines link to files

**Scene 3: Insight** ~4s
- Terminal fades
- Simple comparison: 💬 Chat (Isolated) vs ⌨️ Terminal (Connected)
- Text: "Same intelligence. Different access."

### Visual Cues

| Element | Chat Scene | Terminal Scene |
|---------|------------|----------------|
| Files | Grayed out, below barrier | Full color, connected above |
| Border color | Neutral | Green (success) |
| Prompt | "Summarize my project files" | `llm "Summarize my project files"` |
| Response | "I don't have access..." | "✓ Summary: 3 key themes..." |

### Why Subtractive

- One thing at a time = less cognitive load
- Same prompt in both = direct comparison
- Removing chat scene emphasizes what was MISSING
- Full-screen scenes are more impactful than split-screen

## Content Summary

The terminal connects AI to your local environment. Chat interfaces are sandboxed - text in, text out. CLI tools run on your machine with access to your files. Same models, same APIs, different capabilities based on where the interface runs.

## Key Message

The interface determines what's possible. Choose the terminal when you need AI to work WITH your files, not just talk ABOUT them.
