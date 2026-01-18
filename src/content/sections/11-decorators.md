---
id: "decorators"
number: 11
title: "Decorating Your Prompts"
animation: "11-DecoratorsAnimation"
---

When you talk to someone, you use more than words. Tone of voice. Pauses. Gestures. The way you organize what you say.

Text doesn't have tone of voice. But it has structure. And AI models are remarkably good at reading structure.

## Why Decorating Works

AI models were trained on vast amounts of structured text - code, documentation, markup languages, data formats. They've seen millions of examples where structure carries meaning.

When you format your prompts with clear structure, you're speaking a language the model already understands.

**Structure reduces ambiguity.** When you separate your context from your task from your constraints, the model doesn't have to guess where one ends and another begins.

## What You Can Do

- **Separate different types of content** - Background in one section, request in another, constraints in a third
- **Create clear boundaries** - XML tags, markdown headers, labeled sections
- **Build reusable patterns** - Find a structure that works, use it again

## The Formats That Work

- **Markdown** - Headers, lists, bold text. Simplest and most portable.
- **XML tags** - `<context>`, `<task>`, `<constraints>`. Explicit boundaries.
- **Labeled sections** - `CONTEXT:`, `TASK:`, `OUTPUT FORMAT:`

The format matters less than the consistency. Pick something readable. Use it reliably.

**You're not programming. You're signaling.**

Decorate your prompts. The model is listening for structure.
