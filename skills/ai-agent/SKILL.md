---
name: ai-agent
description: "Review and design AI agent systems: prompt architectures, memory handling, context parsing, planning loops, tool execution, validation, reasoning, and output quality."
---

# Purpose

The AI Agent skill guides the agent to design and audit autonomous systems, handling planning loops, tool calls, vector memory integrations, and validation filters to ensure reliable agent output.

# When to Use

- When building agents, chatbots, RAG systems, or LLM-driven automation scripts.
- When configuring agent memories (short-term chat history, long-term vector embeddings).
- When debugging agent loops that get stuck in cyclic invocations.

# When NOT to Use

- When writing traditional, rule-based algorithms with no AI integrations.
- For simple static webpage styling tasks.

# Inputs

- Agent controller files, system instructions, tool definitions, memory hooks.

# Expected Outputs

- Functional agent workflows, tool declarations, or prompt schemas.
- Report detailing agent design issues, prompt weaknesses, context issues, and failure fallbacks.

# Workflow

Step 1
Examine prompt schemas to verify constraints, roles, and formatting instructions.

Step 2
Audit context parsing and memory: ensure sliding windows or summaries prevent context overflow.

Step 3
Review planning and execution loops (e.g., ReAct, Plan-and-Solve) to verify convergence safety.

Step 4
Verify tool declarations: ensure function schemas contain clear descriptions and types.

Step 5
Check output validation: implement strict parsing (e.g. JSON validations) and error recovery prompts.

Step 6
Evaluate LLM reasoning parameters (temperature, top-p settings) for the target task type.

# Best Practices

- Design tools to be simple and single-purpose to avoid LLM confusion.
- Always implement maximum loop execution limiters to prevent infinite agent executions.
- Use vector databases with metadata filters to fetch relevant, minimized context.

# Common Mistakes

- Supplying vague tool schemas, leading to hallucinated tool inputs.
- Storing entire chat history in context without compression or pruning.
- Failing to handle tool execution failures gracefully, causing the agent to crash.

# Validation Checklist

- [ ] Agent loops have a max iteration limit.
- [ ] Tool schemas have clear description parameters.
- [ ] Output parser handles malformed JSON responses.
- [ ] Prompt architecture includes explicit constraint instructions.
