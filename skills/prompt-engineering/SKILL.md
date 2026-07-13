---
name: prompt-engineering
description: "Design and optimize system prompts, developer prompts, reusable templates, structured prompts (XML/JSON), validation checks, and prompt testing procedures."
---

# Purpose

The Prompt Engineering skill teaches the agent how to design high-performance, structured system and user prompts that maximize LLM accuracy, safety, and JSON schema compliance.

# When to Use

- When designing prompts for chatbots, RAG pipelines, or text categorization models.
- When optimizing prompts to reduce token counts or decrease generation latency.
- When validating and testing prompts against edge cases.

# When NOT to Use

- When writing standard codebase logic (React, Node.js) that does not interact with LLMs.
- For managing hosting or server infrastructures.

# Inputs

- Target prompt configurations, sample inputs/outputs.
- Expected response schemas.

# Expected Outputs

- Optimized system and developer prompts.
- Prompt validation test suites and templates.

# Workflow

Step 1
Identify the target model characteristics (context length, formatting preferences).

Step 2
Structure prompts using clear delimiters (such as XML tags: `<context>`, `<rules>`, `<output_format>`).

Step 3
Define clear constraints, behavioral limits, and response templates (e.g. strict JSON outputs).

Step 4
Integrate Few-Shot examples to guide the model on formatting and logic.

Step 5
Implement negative constraints (what the model should *not* do) to prevent hallucinations.

Step 6
Set up automated prompt verification runs using test datasets to measure accuracy.

# Best Practices

- Use XML tags to separate instructions from dynamic variable data.
- Avoid vague language; use direct, imperative commands.
- Keep prompts concise to conserve token budget and minimize latency.

# Common Mistakes

- Mixing system instructions and user variables without delimiters, exposing prompts to injection.
- Relying on simple prompt tweaks instead of systematically validating prompts with test datasets.
- Neglecting to define fallback instructions for scenarios where tasks cannot be completed.

# Validation Checklist

- [ ] Delimiters (XML/JSON) are used to isolate variables.
- [ ] Few-shot examples are provided for complex behaviors.
- [ ] Constraints and negative instructions are defined.
- [ ] Response structure conforms to a schema.
