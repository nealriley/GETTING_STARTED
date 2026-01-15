# Section 9: Decorating Your Prompts

---

When you talk to someone, you use more than words. Tone of voice. Pauses. Gestures. The way you organize what you say.

Text doesn't have tone of voice. But it has structure. And AI models are remarkably good at reading structure.

---

## Why Decorating Works

AI models were trained on vast amounts of structured text - code, documentation, markup languages, data formats. They've seen millions of examples where structure carries meaning.

When you format your prompts with clear structure, you're speaking a language the model already understands. Not a programming language. A structural language.

The model sees a header and knows "this is a section title." It sees a bullet list and knows "these items are parallel." It sees `<context>` and `</context>` tags and knows "everything between these is background information."

Structure reduces ambiguity. When you separate your context from your task from your constraints, the model doesn't have to guess where one ends and another begins.

---

## What You Can Do With Structure

**Separate different types of content.**

Instead of mixing everything together in prose:
- Put background information in one section
- Put your actual request in another
- Put constraints and rules in a third

The model processes each appropriately.

**Create clear boundaries.**

Wrap content in markers that say "this is different from that." XML tags, markdown headers, labeled sections - they all work. What matters is that the boundary is clear.

**Build reusable patterns.**

Once you find a structure that works, you can use it again. Save it. Template it. The model will respond consistently because you're providing consistent cues.

---

## The Formats That Work

You don't need to learn complex syntax. Almost any consistent structure helps:

- **Markdown** - Headers, lists, bold text. The simplest and most portable.
- **XML tags** - `<context>`, `<task>`, `<constraints>`. Explicit boundaries.
- **Labeled sections** - `CONTEXT:`, `TASK:`, `OUTPUT FORMAT:`. Plain and readable.
- **JSON/YAML** - For highly structured data. Overkill for most prompts.

The format matters less than the consistency. Pick something readable. Use it reliably. The model will learn your pattern within the conversation.

---

## The Principle

You're not programming. You're signaling.

Every structural choice tells the model something about how to interpret your content. A header says "new section." A list says "parallel items." Indentation says "this belongs to that."

The same way a well-organized email is easier to read than a wall of text, a well-structured prompt is easier for AI to process.

Decorate your prompts. The model is listening for structure.

---

**Word count:** ~420
**Tone:** Conceptual, clarifying
**Key insight:** Structure signals meaning, consistency matters more than format choice
**Connection to animation:** Animation will visually tour the formats; guide explains why they work
