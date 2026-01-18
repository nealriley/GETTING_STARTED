/**
 * Timeline configuration for Section 1: "It all starts with the Terminal"
 * 
 * Animation stages:
 * - terminal-appear: Terminal window fades in, types "GETTING_STARTED"
 * - welcome: Shows welcome message
 * - file-tree: Types "ls ~/projects", shows file tree
 * - summarize: Types llm summarize command, shows AI reading file
 * - chart: Types llm chart command, shows tool usage steps
 * - closing: Shows "AI that works where work happens"
 */

import { content, animation, type SectionTimeline } from '../timeline';

export const introTimeline: SectionTimeline = {
  sectionId: 'intro',
  beats: [
    // Title immediately followed by terminal animation
    content(0),           // "It all starts with the Terminal" (title)
    animation('terminal-appear'),
    
    // Opening paragraphs
    content(1),           // "AI-powered tools have opened..."
    content(2),           // "But here's what separates..."
    content(3),           // "You don't need to become..."
    content(4),           // "This guide is for the technical adjacent..."
    
    // Transition to "Why the Terminal?" section
    content(5),           // "## Why the Terminal?"
    content(6),           // "You could use AI in a browser tab..."
    
    // Show file tree as we talk about files living on your computer
    animation('file-tree'),
    
    content(7),           // "Your files, your projects..."
    content(8),           // "When AI meets the terminal..."
    
    // Show AI commands as we list what AI can do
    animation('ai-commands'),
    
    content(9),           // Bullet list of capabilities
    
    // Closing
    content(10),          // "This isn't about replacing..."
    
    animation('closing'),
    
    content(11),          // "*Let's begin.*"
  ],
};
