/**
 * Timeline configuration for Section 3: "Same Model, Different Interface"
 * 
 * Animation stages:
 * - web-chat: Web browser appears, shows chat exchange (AI asks for details)
 * - prompt-travel: Prompt floats from web to terminal
 * - terminal-response: Terminal shows file-aware response (reads local files, saves output)
 * - insight: Final insight text "Same model, different interface"
 * 
 * Content messages (from 03-interfaces.md):
 * 0: Title - "Same Model, Different Interface"
 * 1: "Every major AI provider..." + "Same models..." + "Chat interfaces are sandboxed..."
 * 2: "CLI tools run on your machine..." + "Same intelligence. Different access."
 */

import { content, animation, type SectionTimeline } from '../timeline';

export const interfacesTimeline: SectionTimeline = {
  sectionId: 'interfaces',
  beats: [
    // Title + intro + sandboxed explanation
    content(0),           // "Same Model, Different Interface"
    content(1),           // "Every major AI provider..." through "...touch anything on your system."
    
    // Show web chat - AI asks for more details (demonstrates sandboxed limitation)
    animation('web-chat'),
    
    // Transition: prompt travels to terminal
    animation('prompt-travel'),
    
    // Terminal shows the difference - reads files, produces complete output
    animation('terminal-response'),
    
    // Explain what just happened + closing insight
    content(2),           // "CLI tools run on your machine..." + "Same intelligence. Different access."
    
    // Final visual insight
    animation('insight'),
  ],
};
