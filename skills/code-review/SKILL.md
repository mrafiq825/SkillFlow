---
name: code-review
description: "Review naming conventions, architectural boundaries, cyclomatic complexity, code duplication, readability, performance, security, and scalability. Generate actionable feedback."
---

# Purpose

The Code Review skill instructs the AI agent to run code-quality reviews on pull request diffs or file revisions, detecting anti-patterns, complexity, and duplicate structures, and generating clear feedback.

# When to Use

- As a pull request reviewer inside git systems.
- Before committing new files or refactoring existing modules.
- When inspecting code complexity in legacy files.

# When NOT to Use

- For initial system architecture drafting (use architect skill instead).
- For executing test runner assertions.

# Inputs

- File content or git diffs, project language configurations.

# Expected Outputs

- Code Review report with:
  - Summary of modifications.
  - Bulleted feedback covering: Naming, Complexity, Readability, Duplication, Performance, and Security.
  - Actionable code refactor blocks showing proposed replacements.

# Workflow

Step 1
Analyze the incoming code diff or file changes to understand the scope and intent.

Step 2
Inspect naming conventions: ensure variable, function, and file names are descriptive, clear, and match codebase conventions.

Step 3
Check for code duplication: extract repeated blocks into reusable helper functions or hooks.

Step 4
Identify overly complex structures (nested conditionals, long loops) and suggest early exits or decomposition.

Step 5
Check performance and security: identify un-parameterized queries, memory leak loops, and blocking operations.

Step 6
Format all recommendations clearly, linking them directly to line numbers and providing code replacement blocks.

# Best Practices

- Always explain the reasoning behind a review recommendation.
- Avoid dogmatism; focus on readability, maintainability, and correctness.
- Keep comments constructive and positive.

# Common Mistakes

- Commenting on formatting and lint errors that can be auto-resolved by local linters.
- Suggesting massive rewrites for minor, working components.
- Ignoring business logic constraints when reviewing.

# Validation Checklist

- [ ] Feedback is linked to specific lines or files.
- [ ] Alternative code replacements are provided.
- [ ] Critical, Major, and Minor concerns are distinguished.
- [ ] Naming, complexity, and duplication are reviewed.
