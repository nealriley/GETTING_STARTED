/**
 * Timeline configuration for Section 2: "Why use a Terminal?"
 * 
 * Animation stages:
 * - ai-cli-tools: Shows running claude CLI with a prompt
 * - local-files: Shows AI CLI accessing local files
 * - build-script: Shows AI CLI building a script to automate a task
 * 
 * Content messages (from 02-why-terminal.md):
 * 0: Title - "Why use a Terminal?"
 * 1: "AI tools love a Terminal!..."
 * 2: "Your files, your projects..."
 * 3: "For those who know..."
 * 4: "*It's all about using the right tool...*"
 */

import { content, animation, type SectionTimeline } from '../timeline';

export const whyTerminalTimeline: SectionTimeline = {
  sectionId: 'why-terminal',
  beats: [
    // Title
    content(0),           // "Why use a Terminal?"
    
    // AI tools love terminals - show claude CLI running
    content(1),           // "AI tools love a Terminal!..."
    animation('ai-cli-tools'),
    
    // Your files live on your computer - show AI accessing local files
    content(2),           // "Your files, your projects..."
    animation('local-files'),
    
    // Terminals are powerful - show AI building a script
    content(3),           // "For those who know..."
    animation('build-script'),
    
    // Closing thought
    content(4),           // "*It's all about using the right tool...*"
  ],
};
