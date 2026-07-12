# Architecture Overview

This document outlines the architecture, file layout, and modules of `skills-cli`.

## CLI Modules

The application is built on top of a lightweight, dependency-free command-line interface.

```
bin/cli.js (executable entrypoint)
  └── src/commands/ (command handlers)
      ├── init.js
      ├── create.js
      ├── list.js
      └── validate.js
  └── src/utils/ (shared utilities)
      ├── logger.js
      └── parser.js
```

### Components

1. **CLI Wrapper (`bin/cli.js`)**
   - The executable that runs when calling `skills`. It parses command line options (e.g. `--force`, `--description`, `--path`) and routes execution to corresponding commands.

2. **Parser Utility (`src/utils/parser.js`)**
   - A dependency-free YAML frontmatter extractor. It handles parsing configuration lines between `---` delimiters at the beginning of Markdown files.

3. **Logger Utility (`src/utils/logger.js`)**
   - Formats outputs with ANSI escape sequences to provide colorful success, warning, error, and status indicators in the user's terminal.

4. **Commands (`src/commands/`)**
   - `init.js`: Installs the `.agents/` folder and template rules.
   - `create.js`: Scaffolds a new skill folder with frontmatter.
   - `list.js`: Performs workspace scanning and renders skills in a table.
   - `validate.js`: Enforces compliance rules such as file presence, trigger description lengths, file paths, and body line limits (< 500 lines).
