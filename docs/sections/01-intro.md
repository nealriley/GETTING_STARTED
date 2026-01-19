# Section 1: For the Technical Adjacent

## Animation: `01-IntroAnimation`

CLI "getting started" welcome screen with two-stage animation.

## Design Notes

**Concept:** A simple CLI-style intro animation that sets the tone for the guide.

**Duration:** ~15-20 seconds

### Animation Stages

**Stage 1: Terminal Appear** (~5s)
- Terminal window fades in
- Header with window controls appears
- Sets the visual context

**Stage 2: Script Demo** (~10s)
- Command prompt appears with typing effect
- Shows `./getting-started.sh` being executed
- Welcome message displays
- Introduces the guide's purpose

### Visual Elements

- Terminal header with window controls (red/yellow/green dots)
- Green monospace text on dark background
- Blinking cursor
- Subtle glow effects
- Clean, minimal aesthetic

## Content Summary

This section introduces the target audience - technical adjacent professionals (UX researchers, product managers, designers, data analysts) who work with technical systems but aren't developers. Establishes the "gap" between knowing AI exists and using it effectively.

## Key Messages

1. **You're not alone** - Many professionals face this gap
2. **The terminal isn't scary** - It's just a different interface
3. **This guide will help** - Practical, accessible introduction

## References

- Timeline implementation: `src/lib/timelines/intro.ts`
- Animation component: `src/components/animations/01-IntroAnimation.astro`
- Content: `src/content/sections/01-intro.md`
