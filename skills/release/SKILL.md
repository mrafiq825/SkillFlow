---
name: release
description: "Draft release notes, determine semantic versions, compile migration guides for breaking changes, and verify NPM/GitHub publishing checklists."
---

# Purpose

The Release skill teaches the agent how to determine release tags, draft release logs, write migration guides for breaking changes, and verify publishing checklists before deploying code to public registries.

# When to Use

- When preparing to publish packages to NPM, PyPI, or GitHub Releases.
- When incrementing package version configurations.
- When communicating breaking changes to consumers.

# When NOT to Use

- During initial branch creation or daily local check-ins.
- For profiling code performance or running accessibility audits.

# Inputs

- Git commit logs since last tag, configuration versions.
- Code diffs containing breaking changes.

# Expected Outputs

- Release notes (changelog updates, feature summaries).
- Semantic version recommendation (Major, Minor, Patch).
- Migration Guide detailing code changes for breaking modifications.

# Workflow

Step 1
Analyze commit logs since the last tag (look for prefix tags: feat, fix, chore, docs, BREAKING CHANGE).

Step 2
Determine version increment based on SemVer rules:
  - MAJOR: Breaking API changes.
  - MINOR: New backward-compatible feature.
  - PATCH: Backward-compatible bug fix.

Step 3
Group changes into categories (Features, Bug Fixes, Performance, Refactors, Docs) inside release draft.

Step 4
Document breaking changes, listing deprecated code and corresponding replacement APIs.

Step 5
Verify publishing checklists (check registry credentials, bundle outputs, size budgets).

# Best Practices

- Automate changelog drafts using semantic commit logs.
- Provide clear code examples showing "Before" and "After" versions for breaking changes.
- Never publish local uncommitted work (ensure clean git state).

# Common Mistakes

- Releasing breaking changes under patch version increments.
- Failing to document dependencies version upgrades.
- Leaving local tests or dev-only configurations in the published build.

# Validation Checklist

- [ ] Semantic version increment matches the code diff.
- [ ] Breaking changes have migration code snippets.
- [ ] All commits since the previous release are accounted for.
- [ ] Build files exist and match packaging configs.
