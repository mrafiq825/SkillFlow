# Release Strategy

This document outlines the versioning, branching, and releasing strategy for `skills-cli`.

## Versioning Standards
We strictly follow **Semantic Versioning (SemVer)**:
- **Major (X.0.0)**: Breaking changes that change CLI syntax, drop supported Node.js versions, or change frontmatter expectations.
- **Minor (1.Y.0)**: New features or commands (e.g. adding new validation rules, supporting global directories).
- **Patch (1.0.Z)**: Bug fixes, performance improvements, and documentation updates.

## Release Process
Releases are automated using GitHub Actions.

1. **Prepare Release**
   - Create a release branch `release/vX.Y.Z`.
   - Update `version` in `package.json`.
   - Update `CHANGELOG.md` to move items from `## Unreleased` to a version header.
   - Commit and push changes, then open a pull request.

2. **Publishing**
   - Once the PR is merged into `main`, pull the latest `main` branch locally.
   - Create a tagged commit:
     ```bash
     git tag -a vX.Y.Z -m "Release vX.Y.Z"
     git push origin vX.Y.Z
     ```
   - Pushing the tag triggers the `.github/workflows/release.yml` pipeline which compiles changelogs and creates a draft GitHub Release.
