/**
 * Timeline configurations for all sections.
 * 
 * Timelines define the choreography between content messages and animation stages.
 */

import type { SectionTimeline } from '../timeline';
import { introTimeline } from './intro';
import { whyTerminalTimeline } from './why-terminal';
import { interfacesTimeline } from './interfaces';

/**
 * Map of section IDs to their timeline configurations.
 * Sections without a timeline will use legacy behavior (all content, then animation).
 */
export const timelines: Record<string, SectionTimeline> = {
  'intro': introTimeline,
  'why-terminal': whyTerminalTimeline,
  'interfaces': interfacesTimeline,
};

/**
 * Get timeline for a section, or undefined if not defined
 */
export function getTimeline(sectionId: string): SectionTimeline | undefined {
  return timelines[sectionId];
}

/**
 * Check if a section has a timeline defined
 */
export function hasTimeline(sectionId: string): boolean {
  return sectionId in timelines;
}
