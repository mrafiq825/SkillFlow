# SkillFlow

A production-ready open-source repository containing reusable AI engineering skills for coding agents.

---

## Overview

`SkillFlow` provides a standardized collection of AI Agent Skills and Rules. These skills allow developer tools and coding agents (such as Claude Code, Cursor, Gemini, and other LLM-driven environments) to perform complex engineering tasks deterministically, safely, and with minimal human intervention.

Each skill is written as an explicit engineering workflow rather than a generic prompt, ensuring predictability and consistency across different tasks and projects.

---

## Features

- **18 Specialized Skills**: Covers everything from system architecture, database migrations, and CI/CD pipelines to security audits, performance profiling, and prompt engineering.
- **Trigger-Ready Frontmatter**: YAML metadata defines trigger conditions to help agents invoke the correct instruction set at the correct time.
- **Deterministic Workflows**: Multi-step workflows structure the agent's problem-solving process to reduce hallucinations and errors.
- **Ready for GitHub & npm**: Fully compatible with the `skills-cli` ecosystem for distribution and validation.

---

## Installation

You can install or reference these agent skills inside your repository by initializing customizations and pulling the package:

```bash
# Initialize local customization directory
npx skills init

# Add skills package to your workspace
npx skills@latest add mrafiq825/SkillFlow
```

Alternatively, copy the specific `skills/` folders directly into your local `.agents/skills/` directory.

---

## Usage

Coding agents automatically load skills placed under `.agents/skills/` during workspace scanning.

### Direct Invocation
When you need the agent to execute a skill, reference it in your prompt:
```
Analyze the current codebase and run the /security-audit skill.
```

### Automatic Triggers
The agents will scan the frontmatter `description` of each skill and run the instruction workflow if it matches the current task type (e.g. debugging, releasing, or component design).

---

## Folder Structure

The repository structure follows this layout:

```
skillflow/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── package.json
├── docs/                      # Usage and integration guides
├── examples/                  # Local reference configurations
├── templates/                 # Reusable customization templates
└── skills/                    # Standardized AI agent engineering skills
    ├── architect/             # Tech stack design and project scaffolding
    ├── review/                # Deep review of project health and architecture
    ├── security-audit/        # Vulnerability, header, and credentials audit
    ├── performance/           # Speed, bundle size, and render optimization
    ├── seo/                   # Metadata, schemas, and indexing review
    ├── testing/               # Integration, unit, and E2E test plan construction
    ├── deployment/            # Production checklists and rollback setup
    ├── docker/                # Multi-stage containers and image tuning
    ├── ci-cd/                 # Automated pipeline structures
    ├── nextjs/                # App router, hydration, and routing checks
    ├── react/                 # Hooks, context, and state structure analysis
    ├── nodejs/                # Express/Koajs/Fastify API patterns and middleware
    ├── database/              # Schema normalization and index inspection
    ├── ai-agent/              # Prompts, memories, and tools control flow
    ├── prompt-engineering/    # Developer prompt optimization
    ├── documentation/         # Auto-generating READMEs and API reference pages
    ├── release/               # Semantic versioning and migration pathways
    └── code-review/           # Static review of code quality and complexity
```

---

## Detailed Skills Reference

Below are the detailed workflows and instructions for the 18 core AI engineering skills defined in `SkillFlow`:

### 1. Architect (`skills/architect/SKILL.md`)
- **Purpose**: Guide tech recommendations, project layout design, API endpoints, database schemas, and deployment architecture.
- **Workflow**:
  1. Review functional & non-functional requirements.
  2. Propose tech stack separation (frontend vs. backend).
  3. Design clean folder layouts.
  4. Write REST/GraphQL/RPC API endpoints structures.
  5. Design database normalization tables & indexes.
  6. Define deployment parameters and save specs to `docs/specs/`.

### 2. Review (`skills/review/SKILL.md`)
- **Purpose**: Run multi-dimensional checks covering naming, architecture, maintainability, and code quality.
- **Workflow**:
  1. Audit component structure against project paradigms.
  2. Inspect variables/functions naming and code complexity.
  3. Analyze render performance and DB query logs.
  4. Run security checks on cookies, headers, and inputs.
  5. Generate a single consolidated quality audit report.

### 3. Security Audit (`skills/security-audit/SKILL.md`)
- **Purpose**: Check systems for credential exposure, XSS, CSRF, IDOR, SQL injection, and insecure headers.
- **Workflow**:
  1. Scan files for hardcoded secrets/private keys.
  2. Inspect access control rules and dynamic routes for IDOR.
  3. Audit input fields for SQLi, SSRF, and XSS risks.
  4. Check HTTP headers (CSP, HSTS) and Cookie properties.
  5. Output a report detailing Severity, Risk, Impact, Recommendation, and Fix.

### 4. Performance (`skills/performance/SKILL.md`)
- **Purpose**: Optimize database speed, React rendering, bundle size, cache systems, and dynamic loading.
- **Workflow**:
  1. Inspect DB query execution plans (`EXPLAIN ANALYZE`).
  2. Audit React re-renders and hook dependency arrays.
  3. Check bundle budgets and tree-shaking support.
  4. Advise on lazy loading, code-splitting, and asset formatting (WebP/Fonts).
  5. Output a performance optimization guide.

### 5. SEO (`skills/seo/SKILL.md`)
- **Purpose**: Optimize page discoverability, sitemaps, structured schema data, and semantic headings.
- **Workflow**:
  1. Validate length of titles and meta descriptions.
  2. Enforce heading hierarchies (exactly one `<h1>` per page).
  3. Check canonical tags and sitemap.xml.
  4. Inspect Open Graph and Twitter Card tags.
  5. Output an SEO audit report.

### 6. Testing (`skills/testing/SKILL.md`)
- **Purpose**: Standardize writing of unit, integration, and E2E regression and accessibility test suites.
- **Workflow**:
  1. Define inputs domain coverage (happy paths, borders, errors).
  2. Scaffold isolated unit tests with mock structures.
  3. Write integration tests for database/service boundaries.
  4. Create E2E browser flows using Playwright/Cypress.
  5. Add accessibility checking (axe-core) test rules.

### 7. Deployment (`skills/deployment/SKILL.md`)
- **Purpose**: Review production configurations, CDNs, health logging, and rollback slots.
- **Workflow**:
  1. Validate environment variables presence on startup.
  2. Confirm production build optimizations and secure source-mapping.
  3. Check CDN cache rules and HTTP headers.
  4. Verify structured JSON logs and setup `/healthz` endpoints.
  5. Define rollback slots/containers tag reversion guidelines.

### 8. Docker (`skills/docker/SKILL.md`)
- **Purpose**: Optimize Docker files, Multi-stage builds, Compose networks, volumes, and non-root execution.
- **Workflow**:
  1. Select minimal secure base images (Alpine/Distroless).
  2. Design multi-stage build scripts separating dependencies.
  3. Leverage layering cache mechanics.
  4. Configure non-root executing users.
  5. Implement healthcheck instructions.

### 9. CI/CD (`skills/ci-cd/SKILL.md`)
- **Purpose**: Automate workflows for code formatting, tests execution, vulnerability scanning, and package publishing.
- **Workflow**:
  1. Set up formatting and linting pipelines.
  2. Configure automated parallel tests execution.
  3. Add gitleaks/npm-audit scans.
  4. Setup NPM/GitHub release pipelines.
  5. Verify token least-privilege configurations.

### 10. Next.js (`skills/nextjs/SKILL.md`)
- **Purpose**: Audit Next.js router conventions, RSC layouts, hydration performance, and metadata hooks.
- **Workflow**:
  1. Verify Router structures (App Router vs Pages).
  2. Audit Client Components vs React Server Components boundary.
  3. Configure cache/fetch parameters (`revalidate`).
  4. Enforce Next.js Image component guidelines.
  5. Setup Next.js Middleware check loops.

### 11. React (`skills/react/SKILL.md`)
- **Purpose**: Review React hooks, local/global states, re-renders, and composition.
- **Workflow**:
  1. Verify hook dependencies (`useEffect`, `useMemo`).
  2. Optimize state locations (Zustand, Context, local state).
  3. Implement composition patterns to prevent prop-drilling.
  4. Enforce cleanups for event listeners and timers.

### 12. Node.js (`skills/nodejs/SKILL.md`)
- **Purpose**: Direct backend folder design, schema validations, error middleware, and token authentication.
- **Workflow**:
  1. Set up global exception listeners (`unhandledRejection`).
  2. Implement strict input schema checking (Zod).
  3. Create custom middlewares for route authentication and rate limiting.
  4. Configure Winston/Pino structured JSON logs.

### 13. Database (`skills/database/SKILL.md`)
- **Purpose**: Review DB schema designs, index allocation, normalized structures, and migration rollback procedures.
- **Workflow**:
  1. Verify relationship schema constraints and normalization (up to 3NF).
  2. Build indexes for filter-heavy columns.
  3. Verify parameterized inputs on dynamic queries.
  4. Draft backward-compatible zero-downtime migration scripts.

### 14. AI Agent (`skills/ai-agent/SKILL.md`)
- **Purpose**: Design planning pipelines, context compression, tool descriptions, and convergence safety.
- **Workflow**:
  1. Construct prompt boundaries and behavioral limits.
  2. Implement context sliding windows or summaries.
  3. Define explicit schemas and validation rules for tool calls.
  4. Apply maximum execution limits to prevent infinite agent loops.

### 15. Prompt Engineering (`skills/prompt-engineering/SKILL.md`)
- **Purpose**: Standardize system instructions, XML variable separators, few-shot examples, and prompt tests.
- **Workflow**:
  1. Structure prompt sections using tags (e.g. `<instructions>`, `<rules>`).
  2. Include descriptive few-shot examples.
  3. Define positive/negative output format constraints.
  4. Setup evaluation assertions using test datasets.

### 16. Documentation (`skills/documentation/SKILL.md`)
- **Purpose**: Standardize writing API references, contributing guides, setup guides, and JSDoc annotations.
- **Workflow**:
  1. Document package configuration parameters and CLI scripts.
  2. Build REST/GraphQL endpoint reference guides.
  3. Detail local setup instructions and FAQs.
  4. Track releases changes in `CHANGELOG.md`.

### 17. Release (`skills/release/SKILL.md`)
- **Purpose**: Structure SemVer increments, release notes collection, and migration pathways.
- **Workflow**:
  1. Determine SemVer tag increments based on commit logs (Major/Minor/Patch).
  2. Compile release logs separating features and fixes.
  3. Document migration guides for breaking changes (before/after code snippets).
  4. Run checklist checks before publishing to registry.

### 18. Code Review (`skills/code-review/SKILL.md`)
- **Purpose**: Drive PR evaluations focusing on readability, cyclomatic complexity, code duplication, and modular designs.
- **Workflow**:
  1. Analyze incoming changes diff.
  2. Spot duplicated code blocks and suggest modular extractions.
  3. Review variable naming conventions and functions scope.
  4. Provide actionable code recommendations linked to specific diff lines.

---

## Contributing

We welcome additions of new skills or modifications to existing templates. Please read our [CONTRIBUTING.md](file:///Users/muhammadrafiq/Desktop/Agent%20Skills/skills-cli/CONTRIBUTING.md) to understand formatting rules, trigger conventions, and validation constraints.

---

## Roadmap

- [ ] Support automated sync of skills from public catalogs.
- [ ] Add interactive testing environments for validation.
- [ ] Include skills for rust, python, and go environments.

---

## License

Distributed under the [MIT License](file:///Users/muhammadrafiq/Desktop/Agent%20Skills/skills-cli/LICENSE).
