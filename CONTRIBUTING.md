# Contributing to SkillFlow

We welcome contributions to expand and improve the catalog of AI engineering skills and rules!

## How to Contribute

1. **Fork the Repository**: Create a personal copy of the repository on GitHub.
2. **Clone the Fork**: Clone the fork to your local environment.
3. **Scaffold a Skill**: Use the `skills create <skill-name>` command from `skills-cli` to scaffold the skill structure.
4. **Draft the Skill**: Add your step-by-step engineering workflows and instructions to `skills/<skill-name>/SKILL.md`. Ensure the content follows the standard structure:
   - Frontmatter (name and description)
   - Purpose, Scope, When to Use/Not Use
   - Inputs and Expected Outputs
   - Step-by-step instructions and Workflow
   - Validation checklist and Success Criteria
5. **Validate Your Changes**: Run `npx skills validate skills/<skill-name>` to verify formatting, YAML headers, and line limits.
6. **Submit a Pull Request**: Open a PR with a description of the skill and its typical use cases.

## Skill Quality Standards

- **Engineering Workflows, Not Prompts**: Focus on deterministic, repeatable steps rather than simple chat prompts.
- **Under 500 Lines**: Keep instructions concise. Put detailed schemas or manuals in a `references/` subdirectory if needed.
- **Strict Structure**: Do not omit sections specified in the template.
- **No Placeholders**: Ensure all sections are fully written and ready for direct consumption by an AI agent.
