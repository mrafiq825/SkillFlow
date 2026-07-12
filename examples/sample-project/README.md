# Sample Agent Customizations Project

This example demonstrates how to structure and use AI Agent Skills and Rules using `skills-cli`.

## Project Layout

This project follows the standard customizations structure:
```
.
└── .agents/
    ├── AGENTS.md
    └── skills/
        └── git-helper/
            └── SKILL.md
```

## Running CLI Commands

Try running the following commands from the root directory of this repository:

1. **List all skills:**
   ```bash
   npx skills list --path examples/sample-project/.agents/skills
   ```

2. **Validate all skills and rules:**
   ```bash
   npx skills validate --path examples/sample-project/.agents
   ```

3. **Validate the git-helper skill specifically:**
   ```bash
   npx skills validate --path examples/sample-project/.agents/skills/git-helper
   ```
