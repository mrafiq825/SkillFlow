# Reusable AI Agent Skills Usage Guide

This guide explains how developers and organizations can integrate `SkillFlow` into their engineering workflows.

## How Agents Read Skills

Coding agents (e.g. Claude Code, Cursor) automatically read customizations from standard directories:
1. **Global Customizations**: Located in `~/.gemini/config/skills/` (for Gemini-based setups) or user-configured global directories.
2. **Workspace-Scoped Customizations**: Located in a `.agents/` folder at the root of a project.

By putting the skills from this repository in your workspaces, the agent becomes aware of the exact workflows it should execute for specific slash commands or task types.

## Customizing Skill Parameters

If you want to tailor a skill to your project:
- Copy the target skill directory (e.g., `skills/security-audit/`) into your project's `.agents/skills/`.
- Edit the `SKILL.md` file to update context, dependencies, or steps specific to your architecture.
- Re-run `skills validate` to make sure your changes are syntactically correct.
