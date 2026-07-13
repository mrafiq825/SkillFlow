---
name: documentation
description: "Generate structured READMEs, API specifications, architecture documentation, contributor guides, examples, tutorials, FAQs, and changelogs."
---

# Purpose

The Documentation skill instructs the agent how to build high-quality technical documentation for codebases, APIs, and libraries, ensuring clarity and ease of onboarding.

# When to Use

- When releasing a new API, SDK, or framework library.
- When onboarding new developers (creating setup guides and contributing FAQs).
- When documenting architectural components.

# When NOT to Use

- For generating code tests or writing functional business code.
- When creating wireframes or UX layouts.

# Inputs

- Source files, API endpoints, package manifests.
- Existing architectural specs or design docs.

# Expected Outputs

- Markdown documentation files (`README.md`, `CONTRIBUTING.md`, `API.md`, `CHANGELOG.md`).
- Structured JSDocs/TSDocs within the codebase.

# Workflow

Step 1
Examine codebase to understand dependencies, CLI targets, and configurations.

Step 2
Scaffold the `README.md` containing sections: Overview, Features, Installation, Usage, Folder Structure, and License.

Step 3
Extract API endpoints and document HTTP verbs, input payloads, headers, response status codes, and JSON outputs.

Step 4
Document folder structures and modules, explaining architectural layers.

Step 5
Draft clear contributing rules, commit messaging standards, and code verification instructions.

Step 6
Build tutorials and FAQ sections addressing setup gotchas.

# Best Practices

- Keep code examples updated and valid (verify compile status of examples).
- Use clear visual diagrams (Mermaid or similar) to explain workflows.
- Keep sentences short, concise, and structured using markdown lists and tables.

# Common Mistakes

- Documenting outdated APIs or missing configurations.
- Writing walls of text without lists, headings, or formatting.
- Leaving placeholder URLs or TODO sections in public documentation.

# Validation Checklist

- [ ] README.md has all 9 standard sections.
- [ ] API parameters, headers, and response formats are detailed.
- [ ] Contributing guide lists local setup and validation commands.
- [ ] Markdown links are verified.
