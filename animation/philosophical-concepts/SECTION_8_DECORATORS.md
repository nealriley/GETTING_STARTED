# Section 8: Decorating Your Prompts
## An Overview of Platform Prompting Guides

---

## The Big Picture

Both Anthropic (Claude) and OpenAI (GPT) have published official prompting guides. These aren't marketing fluff - they're technical documentation revealing how to get the best results from their models.

This section serves as an **overview and orientation** to these guides, highlighting:
- Key recommendations from each platform
- Common patterns across both
- Specific decorators and formatting techniques
- Where to go for deeper learning

**The insight:** These companies have done the research. Their guides tell you what actually works.

---

## The Official Guides

### Anthropic (Claude)

**Primary Resource:** 
- Anthropic Prompt Engineering Documentation
- https://docs.anthropic.com/claude/docs/prompt-engineering

**What It Covers:**
- Prompt structure and formatting
- XML tag usage
- System prompts vs user prompts
- Chain of thought techniques
- Role prompting
- Few-shot examples
- Handling long contexts

**Key Philosophy:**
Claude's documentation emphasizes clarity and structure. They explicitly recommend XML tags for delineating different parts of prompts.

### OpenAI (GPT)

**Primary Resource:**
- OpenAI Prompt Engineering Guide
- https://platform.openai.com/docs/guides/prompt-engineering

**What It Covers:**
- Writing clear instructions
- Providing reference text
- Splitting complex tasks
- Giving the model time to "think"
- Using external tools
- Testing systematically

**Key Philosophy:**
OpenAI's guide emphasizes breaking down tasks and providing explicit instructions. They focus on strategies that reduce errors and improve reliability.

---

## Common Ground: What Both Guides Agree On

### 1. Be Specific and Explicit

**Both platforms say:** Don't assume the model knows what you want. State it clearly.

**Anthropic's framing:**
> "Claude responds well to clear, direct instructions."

**OpenAI's framing:**
> "Write clear instructions... include details in your query to get more relevant answers."

**Practical application:**
```
❌ "Summarize this"
✅ "Summarize this article in 3 bullet points, focusing on the financial implications, for an audience of non-technical executives"
```

### 2. Use Delimiters to Separate Content

**Both platforms say:** Clearly mark where different types of content begin and end.

**Anthropic recommends:** XML tags
```xml
<context>
Background information here
</context>

<task>
What you want done
</task>
```

**OpenAI recommends:** Various delimiters
```
"""
Content to process
"""

---
Section break
---

### Header for new section
```

**The principle is the same:** Make boundaries unambiguous.

### 3. Provide Examples (Few-Shot Prompting)

**Both platforms say:** Show the model what good output looks like.

**Structure:**
```
Here are examples of the format I want:

Input: [example input 1]
Output: [example output 1]

Input: [example input 2]
Output: [example output 2]

Now do this:
Input: [actual input]
Output:
```

**Why it works:** Models are pattern-completion engines. Give them a pattern to complete.

### 4. Break Down Complex Tasks

**Both platforms say:** Don't ask for everything at once.

**Anthropic's approach:**
> "For complex tasks, consider breaking them into subtasks."

**OpenAI's approach:**
> "Split complex tasks into simpler subtasks."

**Example:**
```
❌ "Analyze this data, find insights, create visualizations, and write a report"

✅ Step 1: "Analyze this data and list the key patterns you observe"
   Step 2: "Based on these patterns, what are the top 3 insights?"
   Step 3: "What visualizations would best communicate these insights?"
   Step 4: "Draft a report structure based on the above"
```

### 5. Give the Model "Thinking" Room

**Both platforms say:** Let the model reason through problems.

**Anthropic calls it:** Chain of thought prompting
```
Think through this step by step before giving your final answer.
```

**OpenAI calls it:** Giving the model time to think
```
Work through this problem step by step, showing your reasoning.
```

**Why it works:** Intermediate reasoning steps improve accuracy on complex tasks.

---

## Decorator Deep Dive: XML Tags

### Why XML? (Anthropic's Recommendation)

Anthropic explicitly recommends XML tags because:
- Clear, unambiguous boundaries
- Familiar structure (models trained on lots of XML/HTML)
- Nestable (can have structure within structure)
- Self-documenting (tag names describe content)

### Common XML Patterns

**Basic Structure:**
```xml
<context>
Background information the model needs
</context>

<instructions>
What you want the model to do
</instructions>

<input>
The actual content to process
</input>

<output_format>
How you want the response structured
</output_format>
```

**With Attributes:**
```xml
<document source="quarterly_report.pdf" date="2025-Q3">
Content from the document...
</document>

<example type="good">
This is what good output looks like
</example>

<example type="bad">
This is what to avoid
</example>
```

**Nested Structure:**
```xml
<task>
  <objective>Analyze customer feedback</objective>
  <constraints>
    <constraint>Focus on negative feedback only</constraint>
    <constraint>Ignore feedback older than 30 days</constraint>
  </constraints>
  <output>
    <format>Bullet points</format>
    <length>Maximum 10 items</length>
  </output>
</task>
```

### When to Use XML

- Complex prompts with multiple components
- When you need to reference specific sections
- When structure helps clarity
- When you want the model to output in similar structure

---

## Decorator Deep Dive: Markdown Syntax

### Why Markdown Works

Models are trained extensively on markdown (GitHub, documentation, forums). They understand:
- Headers indicate hierarchy
- Lists indicate parallel items
- Code blocks indicate literal content
- Bold/italic indicate emphasis

### Markdown Patterns for Prompts

**Using Headers for Structure:**
```markdown
# Task
Analyze the following customer feedback

# Context
This is from our enterprise customers (>$100K ARR)

# Feedback Data
[customer feedback here]

# Output Requirements
- Format: Bullet points
- Group by: Theme
- Include: Representative quotes
```

**Using Lists for Requirements:**
```markdown
Your response must:
- Be under 200 words
- Include specific examples
- Avoid technical jargon
- End with action items

Your response must NOT:
- Include caveats about being an AI
- Apologize unnecessarily
- Use passive voice
```

**Using Code Blocks for Literal Content:**
````markdown
Process this exact text:

```
Customer said: "The interface is confusing"
Date: 2025-01-10
Sentiment: Negative
```

Extract the key complaint.
````

**Using Tables for Structured Data:**
```markdown
Analyze this data:

| Customer | Spend | Satisfaction | Churn Risk |
|----------|-------|--------------|------------|
| Acme Co  | $50K  | 3/5          | High       |
| Beta Inc | $120K | 5/5          | Low        |
| Gamma LLC| $30K  | 2/5          | Critical   |

Which customer needs immediate attention?
```

---

## Decorator Deep Dive: CSV Format

### Why CSV Works

- Extremely clear structure
- Headers define meaning
- Models parse it reliably
- Easy to create from spreadsheets
- Good for data-heavy prompts

### CSV Patterns

**Basic Data Input:**
```
Analyze this sales data:

date,product,units,revenue
2025-01-01,Widget A,150,$4500
2025-01-01,Widget B,80,$3200
2025-01-02,Widget A,165,$4950
2025-01-02,Widget B,72,$2880

What trends do you see?
```

**Task Lists with Dependencies:**
```
Here's our project plan:

task_id,task_name,owner,status,depends_on,due_date
1,Design mockups,Sarah,complete,,2025-01-10
2,Frontend build,Mike,in_progress,1,2025-01-20
3,Backend API,Alex,blocked,1,2025-01-18
4,Integration,Team,pending,"2,3",2025-01-25
5,Testing,QA,pending,4,2025-01-30

What's blocking our progress?
```

**Comparison Data:**
```
Help me choose a vendor:

vendor,price,features,support,integration
Vendor A,$500/mo,Full suite,24/7,Native
Vendor B,$300/mo,Basic,Business hours,API only
Vendor C,$450/mo,Full suite,Email only,Native

Our priorities: integration > support > features > price
```

### When to Use CSV

- Tabular data
- Comparisons across multiple items
- When you have spreadsheet data
- When relationships between columns matter

---

## Decorator Deep Dive: JSON Format

### Why JSON Works

- Highly structured
- Unambiguous nesting
- Models trained on massive amounts of JSON
- Good for complex, nested data
- Can request JSON output

### JSON Patterns

**Structured Input:**
```json
{
  "task": "Generate product description",
  "product": {
    "name": "CloudSync Pro",
    "category": "SaaS",
    "price": "$29/month",
    "features": [
      "Real-time sync",
      "Unlimited storage",
      "Team collaboration"
    ]
  },
  "audience": "Small business owners",
  "tone": "Professional but approachable",
  "length": "150 words"
}
```

**Requesting JSON Output:**
```
Analyze this feedback and return JSON:

Feedback: "Love the product but the mobile app crashes constantly"

Return format:
{
  "sentiment": "positive|negative|mixed",
  "topics": ["list", "of", "topics"],
  "urgency": "low|medium|high",
  "suggested_action": "string"
}
```

### When to Use JSON

- Complex nested structures
- When you need structured output
- API-like interactions
- When precision matters more than readability

---

## Platform-Specific Recommendations

### Anthropic/Claude Specific

**System Prompts:**
Claude distinguishes between system prompts (persistent instructions) and user prompts (specific requests).

```
System: You are a technical writer who explains complex topics simply.
        Always use examples. Never use jargon without defining it.

User: Explain how DNS works.
```

**XML is First-Class:**
Anthropic's documentation explicitly recommends XML tags. Claude is particularly good at:
- Following XML structure
- Outputting matching XML
- Referencing content by tag name

**Long Context Handling:**
Claude has large context windows. Anthropic recommends:
- Put important instructions at the beginning AND end
- Use clear section markers
- Reference specific sections by name

### OpenAI/GPT Specific

**System Messages:**
Similar to Claude, GPT uses system messages for persistent behavior.

```
System: You are a helpful assistant that responds in JSON format.

User: List three benefits of exercise.
```

**Function Calling:**
OpenAI has specific syntax for tool/function use:
```json
{
  "name": "get_weather",
  "description": "Get current weather for a location",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {"type": "string"}
    }
  }
}
```

**Structured Outputs:**
OpenAI offers JSON mode and structured output features for reliable formatting.

---

## Combining Decorators

### Real-World Example: Complex Analysis Task

```xml
<system>
You are a senior business analyst with expertise in SaaS metrics.
</system>

<context>
We're a B2B SaaS company evaluating our Q3 performance.
Our board meeting is next week and we need to present findings.
</context>

<data format="csv">
metric,q2_value,q3_value,target,status
MRR,$450K,$520K,$500K,exceeded
Churn,3.2%,2.8%,<3%,met
NPS,42,38,>40,missed
CAC,$1200,$1400,<$1000,missed
LTV,$15000,$16000,>$15000,met
</data>

<task>
Analyze our Q3 performance and prepare board-ready insights.
</task>

<output_format>
## Executive Summary
[2-3 sentences]

## Wins
- [bullet points]

## Concerns
- [bullet points]

## Recommended Actions
1. [numbered list]

## Metrics Deep Dive
[brief analysis of each metric]
</output_format>

<constraints>
- Be direct, not hedging
- Prioritize actionable insights
- Keep total response under 400 words
- Use specific numbers, not vague language
</constraints>
```

This combines:
- XML for overall structure
- CSV for data
- Markdown for output format
- Clear constraints

---

## Quick Reference: When to Use What

| Decorator | Best For | Example Use |
|-----------|----------|-------------|
| **XML tags** | Complex prompts, clear sections | Multi-part analysis tasks |
| **Markdown headers** | Hierarchical organization | Reports, documentation |
| **Markdown lists** | Requirements, options | Constraints, features |
| **Markdown tables** | Simple comparisons | Quick data presentation |
| **CSV** | Tabular data, spreadsheets | Data analysis, comparisons |
| **JSON** | Structured I/O, nested data | API-like tasks, complex structures |
| **Code blocks** | Literal content, code | Preserving exact formatting |

---

## Where to Learn More

### Anthropic Resources
- **Prompt Engineering Guide:** https://docs.anthropic.com/claude/docs/prompt-engineering
- **Claude's Constitution:** Understanding Claude's values and behavior
- **Cookbook:** Practical examples and patterns

### OpenAI Resources
- **Prompt Engineering Guide:** https://platform.openai.com/docs/guides/prompt-engineering
- **Best Practices:** https://platform.openai.com/docs/guides/gpt-best-practices
- **Examples:** https://platform.openai.com/examples

### Community Resources
- **Learn Prompting:** https://learnprompting.org
- **Prompt Engineering Guide:** https://www.promptingguide.ai
- **GitHub:** Search for "awesome-prompts" repositories

---

## Key Takeaways

```
✓ Both Anthropic and OpenAI have published official prompting guides

✓ Common principles: Be specific, use delimiters, provide examples,
  break down tasks, allow reasoning

✓ XML tags: Best for complex, multi-part prompts (Anthropic favorite)

✓ Markdown: Best for hierarchical structure and readable prompts

✓ CSV: Best for tabular data and comparisons

✓ JSON: Best for structured input/output and nested data

✓ Combine decorators for complex tasks

✓ The platforms have done the research - use their guides
```

---

## Connection to Other Sections

### Builds On
- **Section 6 (Structure):** Decorators ARE structure
- **Section 7 (Context):** Decorators help organize context clearly

### Reinforces
- **Section 4 (More Than Code):** Models understand structured formats from training
- **Section 5 (Markdown):** Markdown as the lingua franca

---

## Narrative Note

This section is intentionally more **reference-oriented** than narrative. It serves as:
- An orientation to official resources
- A quick reference for decorator syntax
- A bridge to deeper learning

The reader should come away knowing:
1. Official guides exist and are worth reading
2. What the main decorator options are
3. When to use each one
4. Where to go for more depth

This is the "here's your toolkit" section before the closing "factory" philosophy.

---

**Status:** Section 8 documented as platform guide overview
**Key theme:** Official guides + decorator reference
**Approach:** More reference, less narrative (intentional)
**Next:** Section 9 (The Factory Is the Teacher) - closing philosophy
