/**
 * Timeline types for narrative-driven content/animation synchronization.
 * 
 * A timeline defines the choreography between content messages and animation stages,
 * allowing them to interweave rather than playing sequentially.
 */

/**
 * A content beat - shows one or more content messages
 */
export interface ContentBeat {
  type: 'content';
  /** Indices of messages to show (from the messages array) */
  messages: number[];
}

/**
 * An animation beat - plays a named stage of the animation
 */
export interface AnimationBeat {
  type: 'animation';
  /** Name of the animation stage to play */
  stage: string;
}

/**
 * A beat in the timeline - either content or animation
 */
export type Beat = ContentBeat | AnimationBeat;

/**
 * Timeline configuration for a section
 */
export interface SectionTimeline {
  /** Section ID (matches content frontmatter) */
  sectionId: string;
  /** Ordered sequence of beats */
  beats: Beat[];
}

/**
 * Timing constants for transitions between beats
 */
export const TIMING = {
  /** Delay before animation starts after content beat (ms) */
  CONTENT_TO_ANIMATION: 2000,
  /** Delay before showing next content after animation stage (ms) */
  ANIMATION_TO_CONTENT: 2000,
  /** Duration for animation panel fade-out while content appears (ms) */
  ANIMATION_FADE_OUT: 1400,
} as const;

/**
 * Helper to create a content beat
 */
export function content(...messages: number[]): ContentBeat {
  return { type: 'content', messages };
}

/**
 * Helper to create an animation beat
 */
export function animation(stage: string): AnimationBeat {
  return { type: 'animation', stage };
}
