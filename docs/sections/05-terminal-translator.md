# Section 5: AI Speaks Fluent Terminal

## Animation: `05-TranslatorAnimation`

Natural language to command translation workflow.

## Design Notes

**Concept:** AI acts as a translation layer between natural language and terminal commands.

**Duration:** ~20 seconds

### Visual Breakdown

1. **User input** - Natural language request (e.g., "find all PDFs larger than 1MB")
2. **Translation** - AI processes and generates command
3. **Command output** - Shows the actual terminal command: `find . -name "*.pdf" -size +1M`
4. **Execution** - Results appear
5. **The Loop** - Describe → Translate → Execute → Results

**Key Insight:** You don't need to learn terminal syntax anymore. Describe what you want, AI translates.

**Visual Hook:** The natural language morphing/transforming into terminal commands

## Content Summary

Positions AI tools like Claude Code as translation layers that convert natural language to terminal commands. The syntax barrier to powerful terminal tools is now removed.

## References

- Animation component: `src/components/animations/05-TranslatorAnimation.astro`
- Content: `src/content/sections/05-terminal-translator.md`
