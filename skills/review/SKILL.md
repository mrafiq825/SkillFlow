---
name: review
description: "Review architecture, code quality, naming, performance, maintainability, scalability, security, docs, accessibility, and UX, then output a consolidated report."
---

# Purpose

The Review skill instructs the AI agent to run a thorough multi-dimensional review on a file, PR, or entire workspace, highlighting issues and recommending concrete fixes.

# When to Use

- Before submitting a pull request.
- After implementing a major feature to ensure code quality standards.
- Periodic health checks of the repository.

# When NOT to Use

- During active, quick coding iterations where formatting and structure are still volatile.
- When focused strictly on single-line syntax errors (use compiler/linter instead).

# Inputs

- Source files to review.
- Project specifications or architectural guidelines.

# Expected Outputs

- A consolidated review report detailing findings in:
  - Architecture
  - Code Quality & Complexity
  - Naming Conventions
  - Performance & Caching
  - Maintainability & Scalability
  - Security & Authentication
  - Documentation
  - Accessibility & UX

# Assumptions

- Code is syntactically valid and compilation/build checks have passed.

# Required Context

- Relevant framework version (React, Node.js, Next.js, etc.) and design system specs.

# Workflow

Step 1
Examine the code architecture and file layout against the design specifications.

Step 2
Inspect naming conventions, complexity, duplication, and adherence to clean code principles.

Step 3
Analyze potential performance issues (unnecessary renders, missing caching, slow queries).

Step 4
Verify security practices (no hardcoded credentials, safe data validation, robust input sanitization).

Step 5
Evaluate accessibility (ARIA, semantic HTML) and UX layouts.

Step 6
Check documentation coverage (comments, JSDoc, README).

Step 7
Generate a single consolidated report in Markdown summarizing all findings and recommendations.

# Best Practices

- Always provide actionable, copy-pasteable code examples for recommended fixes.
- Group feedback by severity: Critical, Major, Minor, and Info.
- Be objective, positive, and constructive.

# Common Mistakes

- Listing nitpicks (like whitespace) that should be handled automatically by Prettier/ESLint.
- Recommending massive refactors without explaining the concrete benefit.
- Ignoring context-specific constraints (e.g. recommending server-side hooks in server-only modules).

# Validation Checklist

- [ ] Architecture matches project paradigms.
- [ ] Code is dry, readable, and free of unnecessary complexity.
- [ ] Security practices conform to SAIF/OWASP principles.
- [ ] Accessibility standards (WCAG) are respected.
- [ ] A single consolidated report is generated.

# Success Criteria

- The review report is generated containing actionable feedback.
- All 10 review aspects (architecture, code, naming, performance, maintainability, scalability, security, docs, accessibility, UX) are evaluated.
