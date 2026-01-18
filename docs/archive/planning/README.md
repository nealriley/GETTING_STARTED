# Archived Planning Documents

These documents were created during the initial planning phase of the GETTING_STARTED project rebuild (late 2025). They have been archived because:

1. **The project evolved** - The original plan called for 10 sections with 8 animations. The final implementation has 12 sections with 12 animations.

2. **Architecture simplified** - Many planned separate components (ContentPanel, AnimationPanel, SectionNav, etc.) were consolidated into a single `SplitLayout.astro` component.

3. **Content structure changed** - We moved from raw markdown parsing to Astro Content Collections.

## Archived Files

| File | Original Purpose |
|------|------------------|
| `ROADMAP_v1.md` | Original 5-phase rebuild plan |
| `CONTENT_ANIMATION_MAP_v1.md` | Mapping of 10 sections to 8 animations |
| `COMPONENT_ARCHITECTURE_v1.md` | Technical specs for planned components |

## What Changed

### Section Structure
- **Planned**: 10 sections, combining Terminal + Package Managers
- **Actual**: 12 sections, each topic gets its own section

### Animations
- **Planned**: 8 animations (Section 1 had no animation, Sections 3+4 combined)
- **Actual**: 12 animations (one per section, including intro)

### Components
- **Planned**: Separate components for each UI piece
- **Actual**: Consolidated into `SplitLayout.astro` with embedded logic

### Content Source
- **Planned**: Parse `FULL_GUIDE_v3.md` at runtime
- **Actual**: Astro Content Collections in `src/content/sections/`

## Reference Value

These documents still have value for understanding:
- Original design intent and rationale
- Animation storyboard concepts (still relevant)
- Content-to-visual mapping ideas
- Accessibility considerations

For current project status, see `/docs/ROADMAP.md`.
