/**
 * Timeline configuration for Section 1: "It all starts with the Terminal"
 * 
 * Animation stages:
 * - terminal-appear: Terminal window fades in, types ./GETTING_STARTED, shows welcome + history
 * - script-demo: Shows example terminal commands (open app, rename file, run script)
 * 
 * Content messages (from 01-intro.md):
 * 0: Title - "It all starts with the Terminal"
 * 1: "AI-powered tools have exposed..."
 * 2: "They are also writing scripts..."
 * 3: "You don't need to become..."
 * 4: "The gap between..."
 */

import { content, animation, type SectionTimeline } from '../timeline';

export const introTimeline: SectionTimeline = {
  sectionId: 'intro',
  beats: [
    // Title appears first
    content(0),           // "It all starts with the Terminal" (title)
    
    // Terminal animation plays - shows welcome, history
    animation('terminal-appear'),
    
    // Opening paragraphs - context about vibe coders and this guide
    content(1),           // "AI-powered tools have exposed..."
    content(2),           // "They are also writing scripts..." (ends with "Terminals love scripts")
    
    // Script demo - show examples of terminal running scripts
    animation('script-demo'),
    
    content(3),           // "You don't need to become..."
    content(4),           // "The gap between..."
  ],
};
