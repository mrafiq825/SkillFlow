# Agent Rules & Customizations (Example)

This file defines style guidelines, conventions, and behavioral instructions for agents working inside this project.

## Conventions
- Use ES Modules for all Node.js source files.
- Ensure all public functions have descriptive JSDoc annotations.
- Write unit tests using the native Node.js test runner under `tests/`.

## Workflow
- Always validate the changes using `npm test` before committing.
- Do not commit changes that fail the validation checks.
