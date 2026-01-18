# Section 11: Decorating Your Prompts

## Animation: `11-DecoratorsAnimation`

Structured vs unstructured prompts comparison.

## Design Notes

**Concept: "The Story in Structure"**

Show how structural formatting (XML tags, markdown headers, labeled sections) helps AI parse prompts more accurately.

**Duration:** ~20 seconds

### Visual Breakdown

1. **Unstructured** - Plain text prompt, ambiguous boundaries
2. **Structured** - Same content with XML tags, clear sections
3. **The Transformation** - Unstructured morphs into structured
4. **AI Processing** - Visual showing AI parsing the structure
5. **Better Output** - Result from structured prompt is more precise

**Key Insight:** "Structure reduces ambiguity." The model doesn't have to guess where context ends and task begins.

**Formats That Work:**
- Markdown - Headers, lists, bold (simplest, most portable)
- XML tags - `<context>`, `<task>`, `<constraints>` (explicit boundaries)
- Labeled sections - `CONTEXT:`, `TASK:`, `OUTPUT FORMAT:`

**Visual Hook:** Same content rendered in different structural formats

## Content Summary

Explains how text structure serves as a communication channel with AI. Models were trained on vast amounts of structured text and read structure well. Decorating prompts with clear formatting improves results.

## References

- Original storyboard: `animation/storyboards/SECTION_9_STORYBOARD.md` (originally Section 9)
- Philosophical concept: `animation/philosophical-concepts/SECTION_8_DECORATORS.md`
- Note: Originally proposed as "The Story in Structure" - telling one story through multiple format transitions
