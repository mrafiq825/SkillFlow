---
name: git-helper
description: "Formulates clear, descriptive git commit messages following Conventional Commits standards"
---
# Git Commit Formulator

## Objective
Help AI coding agents format commit messages systematically after staging modifications.

## Rules & Constraints
- Commit header must follow: `<type>(<scope>): <description>` format.
- Subject line must not exceed 50 characters.
- Use imperative mood: "add feature" instead of "added feature".
- Break down multi-file changes into bullet points in the commit body.

## Examples
```text
feat(cli): add list command implementation

- Scan customizations directory
- Parse yaml frontmatter name and description
- Print padded console output table
```
