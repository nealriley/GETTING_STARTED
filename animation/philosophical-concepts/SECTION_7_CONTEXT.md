# Section 7: Context Is King
## Core Concept: The Right Context, Not Just More Context

---

## The Key Insight

**More context is not better context.**

Quality comes from providing context that:
- Aligns with the specific task
- Fills gaps the model can't fill itself
- Provides information the model doesn't have
- Defines how actions should be taken

The vending machine metaphor: You're not trying to insert more coins. You're trying to press the right buttons.

---

## The Taxonomy of Context

### What "Context" Actually Means

Context isn't one thing. It's a category containing many different types of information, each serving a different purpose.

```
CONTEXT TAXONOMY
│
├── TEMPORAL CONTEXT
│   "What's happening now that the model doesn't know?"
│
├── DOMAIN CONTEXT
│   "What specialized knowledge applies here?"
│
├── PROCEDURAL CONTEXT
│   "How should actions be performed?"
│
├── RELATIONAL CONTEXT
│   "How do things connect to each other?"
│
├── CONSTRAINT CONTEXT
│   "What are the boundaries and rules?"
│
├── PREFERENCE CONTEXT
│   "What style/approach do you want?"
│
└── ENVIRONMENTAL CONTEXT
    "What's the surrounding situation?"
```

Each type serves a different purpose. Providing the wrong type doesn't help, no matter how much of it you provide.

---

## Context Type 1: Temporal Context

### What the Model Doesn't Know (Yet)

**The Problem:**
Models are trained on data with a cutoff date. They don't know:
- Current events
- Recent product launches
- Updated pricing
- New regulations
- Today's date (sometimes)
- What happened last week

**Example - Without Temporal Context:**
```
Prompt: "What's the best AI coding assistant right now?"

Response: [Based on training data from months ago]
- Mentions tools that may be outdated
- Misses recent launches
- Doesn't know about price changes
```

**Example - With Temporal Context:**
```
Prompt: "What's the best AI coding assistant as of January 2026?

Current landscape:
- Claude Code released Cowork (desktop app, no terminal needed)
- Gemini 3 launched with improved coding capabilities
- OpenAI released [X]
- Cursor at version [Y]
- Pricing: Claude $20/mo, GPT Plus $20/mo, Gemini $19/mo

Given this current state, what would you recommend for a UX researcher 
who wants to automate file tasks but doesn't use terminal?"
```

**What Changed:**
- Model now has current facts
- Can reason about present, not past
- Recommendation is grounded in reality

**When to Provide Temporal Context:**
- Asking about current state of anything
- Comparing options that change frequently
- Making decisions based on recent events
- Anything where "as of today" matters

---

## Context Type 2: Domain Context

### Specialized Knowledge the Model Has (But Needs Activated)

**The Problem:**
Models know many domains but don't know which one you're operating in. The same word means different things in different contexts.

**Example - "Conversion" Without Domain Context:**
```
Prompt: "How do I improve conversion?"

Response: [Confused - which kind?]
- Marketing conversion? (visitors → customers)
- File conversion? (PDF → Word)
- Religious conversion?
- Unit conversion?
- Type conversion in programming?
```

**Example - With Domain Context:**
```
Prompt: "I'm a UX designer working on an e-commerce checkout flow.

Our current metrics:
- Cart abandonment: 68%
- Checkout start to completion: 34%
- Mobile vs desktop completion: 28% vs 41%

How do I improve conversion?"
```

**What Changed:**
- Model knows the domain (e-commerce UX)
- Understands what "conversion" means here
- Has specific metrics to work with
- Can give targeted recommendations

**When to Provide Domain Context:**
- Using jargon or ambiguous terms
- Working in specialized fields
- When general advice won't help
- When you need expert-level response

---

## Context Type 3: Procedural Context

### How Actions Should Be Performed

**The Problem:**
Models can do many things, but they don't know YOUR way of doing them. Every organization has processes, standards, conventions.

**Example - Without Procedural Context:**
```
Prompt: "Write a bug report for this issue."

Response: [Generic bug report format]
- May not match your system
- Missing required fields
- Wrong terminology
- Doesn't follow your workflow
```

**Example - With Procedural Context:**
```
Prompt: "Write a bug report for this issue.

Our bug report format:
## Title
[Component] Brief description

## Environment
- Browser:
- OS:
- User role:

## Steps to Reproduce
1. 
2.
3.

## Expected Behavior

## Actual Behavior

## Severity
Critical / High / Medium / Low

## Screenshots
[Required for UI bugs]

## Notes
- Always tag with component name
- Link to related tickets if known
- Assign to component owner from this list: [names]

The issue: Users report checkout button doesn't respond on Safari mobile."
```

**What Changed:**
- Model follows YOUR format exactly
- Includes YOUR required fields
- Uses YOUR severity scale
- Matches YOUR workflow

**When to Provide Procedural Context:**
- Any task with established processes
- When output needs to match existing systems
- When consistency matters
- When others will use/review the output

---

## Context Type 4: Relational Context

### How Things Connect to Each Other

**The Problem:**
Models see each request in isolation. They don't know how pieces relate unless you tell them.

**Example - Without Relational Context:**
```
Prompt: "Review this API endpoint design."

Response: [Reviews in isolation]
- Doesn't know about other endpoints
- Can't check consistency
- Misses integration issues
- Doesn't understand the system
```

**Example - With Relational Context:**
```
Prompt: "Review this API endpoint design.

System context:
- This is part of our checkout service
- Related endpoints:
  - POST /cart (adds items)
  - GET /cart (retrieves cart)
  - POST /checkout (initiates checkout) ← THIS ONE
  - POST /payment (processes payment)
  - GET /order/{id} (retrieves order)

Data flow:
Cart → Checkout → Payment → Order

The checkout endpoint receives cart_id and user_id,
validates inventory, calculates totals, creates pending order,
returns checkout_session_id for payment step.

Existing conventions:
- All endpoints return {success: bool, data: {}, error: {}}
- Authentication via Bearer token
- Rate limited to 100 req/min per user

Review this endpoint design: [design]"
```

**What Changed:**
- Model understands the system
- Can check consistency with other endpoints
- Understands data flow
- Can identify integration issues

**When to Provide Relational Context:**
- Working on part of a larger system
- When consistency matters
- When dependencies exist
- When reviewing for integration

---

## Context Type 5: Constraint Context

### The Boundaries and Rules

**The Problem:**
Models will generate whatever seems best without knowing your constraints. They'll suggest solutions you can't implement.

**Example - Without Constraint Context:**
```
Prompt: "How should we improve our app's performance?"

Response: [Ideal world suggestions]
- Rewrite in Rust
- Add Redis caching layer
- Implement CDN
- Hire performance engineer
- Redesign database schema

[May be impossible given your reality]
```

**Example - With Constraint Context:**
```
Prompt: "How should we improve our app's performance?

Constraints:
- Budget: $0 (no new services/tools)
- Timeline: Must ship in 2 weeks
- Team: 2 developers, neither knows Rust
- Tech stack: Cannot change (React + Node + PostgreSQL)
- Access: Cannot modify database schema (shared with other teams)

Current issues:
- Page load: 4.2s (target: <2s)
- API response: 800ms average
- Largest contentful paint: 3.1s

What can we realistically do?"
```

**What Changed:**
- Model works within YOUR reality
- Suggestions are actually implementable
- Prioritizes by impact within constraints
- Doesn't waste time on impossible options

**When to Provide Constraint Context:**
- Any planning or recommendation task
- When resources are limited
- When there are non-negotiables
- When you need practical, not ideal

---

## Context Type 6: Preference Context

### Style, Tone, and Approach

**The Problem:**
Models have defaults. Without knowing your preferences, they'll use generic style that may not fit.

**Example - Without Preference Context:**
```
Prompt: "Write an email to the client about the delay."

Response: [Generic professional email]
- May be too formal or too casual
- Doesn't match your voice
- Doesn't know the relationship
- Generic apologetic tone
```

**Example - With Preference Context:**
```
Prompt: "Write an email to the client about the delay.

Context:
- Client: Sarah at TechCorp, we've worked together 2 years
- Relationship: Friendly, informal, she appreciates directness
- Situation: 1-week delay on feature delivery
- Cause: Unexpected API changes from third party
- Our track record: Usually on time, this is rare

Tone preferences:
- Direct, not overly apologetic
- Acknowledge without groveling
- Focus on solution, not excuses
- Offer something concrete (revised timeline, extra feature)
- Keep it short (Sarah skims long emails)

My usual sign-off: "Cheers, [name]"
```

**What Changed:**
- Email matches the relationship
- Tone fits the situation
- Length matches recipient's preference
- Sounds like YOU wrote it

**When to Provide Preference Context:**
- Any communication task
- When voice/brand matters
- When relationship context affects tone
- When you have established style

---

## Context Type 7: Environmental Context

### The Surrounding Situation

**The Problem:**
Models don't know what's happening around the specific task. They miss the bigger picture.

**Example - Without Environmental Context:**
```
Prompt: "Should we launch the new feature this week?"

Response: [Generic launch considerations]
- Feature readiness
- Testing status
- Documentation
- [Missing the real factors]
```

**Example - With Environmental Context:**
```
Prompt: "Should we launch the new feature this week?

Environmental factors:
- Company context: We just had layoffs, morale is low
- Team context: Lead developer is on vacation until Thursday
- Market context: Competitor launched similar feature yesterday
- Customer context: Our biggest client is mid-migration, can't handle changes
- Technical context: We have a planned infrastructure upgrade Friday
- Business context: Board meeting next Monday, CEO wants wins to present

The feature is ready and tested. Question is timing."
```

**What Changed:**
- Model sees the full picture
- Can weigh factors beyond the feature itself
- Recommendation considers real-world complexity
- Advice is situationally appropriate

**When to Provide Environmental Context:**
- Decision-making tasks
- When timing matters
- When external factors affect the task
- When "it depends" is the real answer

---

## The Anti-Pattern: Context Dumping

### More Is Not Better

**What people do wrong:**
```
Prompt: "Help me write a product description.

[Pastes entire company wiki]
[Pastes all product documentation]
[Pastes competitor analysis]
[Pastes customer research]
[Pastes brand guidelines]
[Pastes previous product descriptions]
[Pastes marketing strategy]
[Pastes sales data]

Write a product description."
```

**What happens:**
- Model is overwhelmed
- Signal lost in noise
- May focus on wrong parts
- Output is unfocused
- Wastes tokens/money

**The Right Approach:**
```
Prompt: "Help me write a product description.

Product: [specific product]
Audience: [specific audience]
Key differentiator: [one thing]
Tone: [specific tone]
Length: [specific length]
Must include: [specific elements]
Must avoid: [specific things]

Example of good description from our brand:
[one example]
```

**Principle:**
Curated context > Comprehensive context

Ask: "What does the model need to know to do THIS task well?"
Not: "What do I know that might be relevant?"

---

## Context Matching: Right Type for Right Task

### Quick Reference

| Task Type | Primary Context Needed |
|-----------|----------------------|
| Current events/decisions | Temporal |
| Specialized work | Domain |
| Following processes | Procedural |
| System/integration work | Relational |
| Planning with limits | Constraint |
| Communication/writing | Preference |
| Strategic decisions | Environmental |

### Combination Examples

**Task: Write a bug report**
- Procedural (your format)
- Relational (what system it's in)
- Temporal (when it started)

**Task: Recommend a tool**
- Temporal (current options)
- Constraint (your limitations)
- Domain (your use case)

**Task: Draft client email**
- Preference (your tone)
- Environmental (relationship status)
- Constraint (what you can/can't say)

**Task: Review code**
- Procedural (your standards)
- Relational (how it fits the system)
- Domain (what it's supposed to do)

---

## The Training Cutoff Problem

### What Models Don't Know

**Every model has a knowledge cutoff:**
- Information after that date is unknown
- The model doesn't know what it doesn't know
- It may confidently state outdated information

**What this means for you:**
- Anything time-sensitive needs temporal context
- Recent events must be provided
- Current pricing, features, availability = your job
- Model's "knowledge" may be months old

**How to handle it:**

**Bad:**
```
"What's the latest version of React?"
[Model guesses based on old training data]
```

**Good:**
```
"As of January 2026, React is at version [X]. 
Given this, what new features should I consider for my project?"
[Model reasons about information you provided]
```

**The model is a reasoning engine, not a news source.**

For current facts: You provide them.
For reasoning about facts: Model helps.

---

## The Instruction-Following Dimension

### Context as Behavior Definition

**Beyond information, context can define behavior:**

**Example - Defining How to Act:**
```
When analyzing code, you should:
1. First check for security vulnerabilities
2. Then check for performance issues
3. Then check for readability
4. Always explain WHY something is a problem
5. Provide fixed code, not just descriptions
6. Rate severity: Critical / High / Medium / Low
7. If no issues found, explicitly state "No issues found"

Never:
- Suggest complete rewrites for minor issues
- Use jargon without explanation
- Skip the severity rating
```

This isn't information context. It's behavioral context. You're programming how the model approaches the task.

**Example - Defining Decision Criteria:**
```
When recommending tools, prioritize in this order:
1. Open source over proprietary (we value transparency)
2. Simple over feature-rich (we have limited training time)
3. Established over cutting-edge (we need stability)
4. Free over paid (budget is tight)

If trade-offs exist, explain them and let me decide.
```

This defines the model's value system for this task.

**Example - Defining Output Behavior:**
```
Response format:
- Start with one-sentence summary
- Use bullet points, not paragraphs
- Maximum 200 words
- End with "Next steps:" section
- If you need clarification, ask before proceeding

Do not:
- Include caveats about being an AI
- Apologize unnecessarily
- Pad responses with filler
```

This shapes how the model communicates.

---

## The Vending Machine Revisited

### Pressing the Right Buttons

**The metaphor:**
Imagine a vending machine with 100 buttons. You want chips. You press random buttons and get angry when gum comes out.

**The problem isn't the machine. It's the button selection.**

**Context types are different buttons:**
- Temporal: "I want what's fresh today"
- Domain: "I want snacks, not drinks"
- Procedural: "I want it dispensed slowly, not dropped"
- Constraint: "I only have $1.50"
- Preference: "I prefer salty over sweet"

**Pressing all buttons doesn't help.**
Pressing the RIGHT buttons does.

**The quality equation:**
```
Output Quality = 
  Model Capability 
  × Relevance of Context
  × Clarity of Context
  ÷ Noise in Context
```

More context with low relevance = worse results.
Less context with high relevance = better results.

---

## Practical Framework: Context Checklist

### Before You Prompt, Ask:

**Temporal:**
- [ ] Does this involve anything that changes over time?
- [ ] Is my information current?
- [ ] Does the model need to know today's date?

**Domain:**
- [ ] Am I using specialized terms?
- [ ] Could my request be interpreted multiple ways?
- [ ] Do I need expert-level response?

**Procedural:**
- [ ] Is there a specific way this should be done?
- [ ] Do I have templates or formats to follow?
- [ ] Will others need to use this output?

**Relational:**
- [ ] Is this part of a larger system?
- [ ] Are there dependencies I should mention?
- [ ] Does consistency with other things matter?

**Constraint:**
- [ ] What CAN'T I do?
- [ ] What resources are limited?
- [ ] What's non-negotiable?

**Preference:**
- [ ] Does tone/style matter?
- [ ] Do I have examples of what "good" looks like?
- [ ] Who is the audience?

**Environmental:**
- [ ] What's happening around this task?
- [ ] Are there external factors affecting decisions?
- [ ] Is timing relevant?

**Then ask:**
- [ ] Have I included only what's relevant?
- [ ] Is there noise I should remove?
- [ ] Would a stranger understand this context?

---

## Visual Concepts for Animation

### The Context Taxonomy Tree

```
$ tree ~/context/

context/
├── temporal/
│   └── "What's true NOW that model doesn't know"
├── domain/
│   └── "What specialized world am I in"
├── procedural/
│   └── "HOW should things be done"
├── relational/
│   └── "How does this CONNECT to other things"
├── constraint/
│   └── "What are the BOUNDARIES"
├── preference/
│   └── "What STYLE do I want"
└── environmental/
    └── "What's HAPPENING around this"
```

### The Before/After Comparison

**Without Context:**
```
$ ai "Recommend a database"

Response: "PostgreSQL is a great choice because..."

[Generic, may not fit your situation at all]
```

**With Right Context:**
```
$ ai "Recommend a database"

Context:
- Constraint: Must be free, team knows SQL
- Domain: E-commerce, mostly read operations
- Relational: Needs to integrate with existing Node.js app
- Temporal: As of 2026, considering Postgres, MySQL, SQLite

Response: "Given your constraints and read-heavy workload,
PostgreSQL would be ideal because... However, if simplicity
is paramount, SQLite could work for your scale..."

[Specific, actionable, fits your reality]
```

### The Noise Demonstration

```
$ wc -l context_dump.txt
4,847 lines

$ ai "Help me write a tagline" < context_dump.txt
[Confused, unfocused response]

$ wc -l curated_context.txt
23 lines

$ ai "Help me write a tagline" < curated_context.txt
[Sharp, on-target response]

$ echo "More ≠ Better. Relevant = Better."
```

---

## Key Takeaways

```
✓ Context is not one thing - it's a taxonomy of different types

✓ Each context type serves a different purpose

✓ More context ≠ better results (often worse)

✓ Curated, relevant context > comprehensive context dump

✓ Models have knowledge cutoffs - temporal context is YOUR job

✓ Context can define behavior, not just provide information

✓ Match context type to task type

✓ Press the right buttons, not all the buttons
```

---

## Connection to Other Sections

### Builds On
- **Section 5 (Markdown):** Files ARE context (agent files, memory files)
- **Section 6 (Structure):** Structured context is clearer context

### Sets Up
- **Section 8 (Decorating):** XML tags help ORGANIZE context clearly

### Reinforces
- **Section 4 (More Than Code):** File access enables richer context
- **Section 2 (Interfaces):** Different interfaces provide different context automatically

---

**Status:** Section 7 concepts documented
**Key theme:** Right context, not more context - taxonomy of context types
**Narrative approach:** Show what each context type does, demonstrate quality vs quantity
**Next:** Section 8 (Decorating Your Prompts) or other section per user guidance
