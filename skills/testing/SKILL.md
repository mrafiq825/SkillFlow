---
name: testing
description: "Generate unit, integration, end-to-end, regression, performance, and accessibility tests, and construct test coverage reports and strategy."
---

# Purpose

The Testing skill teaches the agent how to design a testing strategy, write high-quality test suites using modern frameworks, and measure test coverage to verify code reliability.

# When to Use

- After writing new functions, routes, React components, or workflows.
- When fixing a bug (creating a regression test to prevent recurrence).
- When configuring CI pipelines to run test assertions automatically.

# When NOT to Use

- During initial brainstorming or pure conceptual prototyping where logic is not finalized.
- When verifying spelling or comment grammar (unless it's part of a localization test).

# Inputs

- Source files to test.
- Existing testing configurations (Jest, Vitest, Playwright, Cypress).
- Technical requirements or specification files.

# Expected Outputs

- Functional test suites (unit, integration, or E2E tests).
- A documented testing strategy containing test environments, mocks, and coverage thresholds.

# Workflow

Step 1
Identify the critical paths, input domains (happy paths, boundary conditions, invalid inputs), and dependency structures of the target code.

Step 2
Scaffold unit tests to isolate single functions, utilities, or components using mocks/stubs for external requests.

Step 3
Develop integration tests to verify that components, middleware, and database layers work together correctly.

Step 4
Create End-to-End (E2E) tests to validate complete user journeys (login, form submissions, navigation) using tools like Playwright or Cypress.

Step 5
Add accessibility test suites using tools like axe-core or jest-axe to assert WCAG compliance.

Step 6
Write regression tests mapping directly to fixed bugs.

# Best Practices

- Write tests that assert behavior, not internal implementation details (avoid mocking implementation internals).
- Target a code coverage of at least 80% for business-critical logic.
- Keep tests fast, clean, and isolated from external shared state.

# Common Mistakes

- Connecting to live databases or remote APIs in unit tests (always mock or use in-memory instances).
- Relying on flaky sleep timers instead of waiting for elements or network hooks to resolve.
- Skipping assertions for edge cases and errors.

# Validation Checklist

- [ ] Unit tests assert edge cases, errors, and success states.
- [ ] Integration tests use isolated databases or clean mock providers.
- [ ] Accessibility tests check color contrast and correct ARIA structures.
- [ ] No hardcoded configuration credentials exist in test configurations.
