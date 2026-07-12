# skills-cli

> A lightweight, zero-dependency CLI tool to initialize, create, list, and validate AI Agent Skills and Rules.

[![Continuous Integration](https://github.com/muhammadrafiq/skills-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/muhammadrafiq/skills-cli/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

AI Agents in the customizations standard use **Skills** (defined as `SKILL.md` directories containing YAML frontmatter instructions) and **Rules** (defined as Markdown files in `AGENTS.md`) to dynamically extend capabilities during execution. `skills-cli` is a package to make authoring and testing these customizations simple.

---

## Features

- **`skills init`**: Set up your workspace for Agent Customizations with a single command.
- **`skills create`**: Scaffold new skills with pre-formatted trigger structures.
- **`skills list`**: Print a formatted status overview of all installed customizations.
- **`skills validate`**: Ensure your configurations pass formatting and line limits (< 500 lines recommended).
- **Zero Dependencies**: Exceptionally fast startup time and minimal publication footprint.

---

## Installation

Install the agent skills package using the following command:

```bash
npx skills@latest add mrafiq/skills
```

---

## Folder Structure

Once initialized, the workspace follows this layout:

```
.
└── .agents/
    ├── AGENTS.md                    # Workspace-scoped rules and instructions
    └── skills/                      # Custom AI capabilities
        └── my-custom-skill/
            ├── SKILL.md             # Core skill directives and frontmatter
            ├── scripts/             # (Optional) Supporting script executables
            └── examples/            # (Optional) Code pattern examples
```

---

## Usage & Commands

### `skills init`
Initialize the `.agents/` customizations directory structure in the current workspace.
- **Flags:**
  - `-f, --force`: Overwrite existing initialization files.

### `skills create <skill-name>`
Scaffold a new Agent Skill folder under `.agents/skills/<skill-name>/`.
- **Flags:**
  - `-d, --description <text>`: Add trigger description.
  - `-f, --force`: Overwrite existing skill directory.

### `skills list`
Lists all installed skills in the current workspace with metadata and status.
- **Flags:**
  - `-p, --path <dir>`: Override path to scan.

### `skills validate [path]`
Validates files or directories against customization schemas.
- **Enforces:**
  - Presence of YAML frontmatter headers (`name`, `description`).
  - Maximum body length limit of 500 lines.
  - Valid folder structure naming conventions (`scripts/`, `examples/`, `resources/`, `references/`).
  - JSON formatting for `skills.json` files.

---

## FAQ

#### Where are skills scanned from by default?
The CLI automatically looks inside the `.agents/skills` directory relative to your current working directory. You can override this using the `--path` option on commands.

#### Why is the 500-line body recommendation enforced?
AI Agent execution contexts are limited. Long instruction sets saturate context windows and degrade agent quality. Breaking up detailed references into subdirectories keeps instructions focused and performant.

---

## Contributing

See [CONTRIBUTING.md](file:///Users/muhammadrafiq/Desktop/Agent%20Skills/skills-cli/CONTRIBUTING.md) for branch naming, pull requests, and code conventions.

## License

Released under the [MIT License](file:///Users/muhammadrafiq/Desktop/Agent%20Skills/skills-cli/LICENSE).
