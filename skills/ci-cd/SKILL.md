---
name: ci-cd
description: "Review and configure GitHub Actions pipelines for linting, testing, building, security scanning, dependency vulnerability checking, releasing, caching, and artifact management."
---

# Purpose

The CI/CD skill instructs the agent to audit, configure, and optimize automated integration and delivery pipelines, ensuring fast feedback loops, secure builds, and automatic version releases.

# When to Use

- When configuring continuous integration pipelines (GitHub Actions, GitLab CI).
- When integrating automated lint, formatting, testing, and security scanning steps.
- When optimizing cache setups to speed up build runs.

# When NOT to Use

- For manual development commands executed solely on local machines.
- For designing UX layouts or writing frontend CSS components.

# Inputs

- Workflow files (e.g. `.github/workflows/*.yml`).
- Repository configuration files (`package.json`, lint settings).

# Expected Outputs

- Operational GitHub Actions configuration YAML.
- Pipeline Optimization Report detailing caching, parallelism, vulnerability checks, and security practices.

# Workflow

Step 1
Set up linting and code formatting checks to ensure style consistency.

Step 2
Configure automated testing stages with proper database/service mocking.

Step 3
Implement dependency vulnerability scanners (e.g., Snyk, npm audit, trivy) and secret scanners (e.g., gitleaks).

Step 4
Define caching configurations for dependency managers (`actions/cache` or setup package caches) to reduce build times.

Step 5
Verify permissions on GitHub tokens (follow least privilege: use read-only permissions where possible).

Step 6
Configure automatic version bump and changelog generation workflows on main branch merges.

# Best Practices

- Run lint and unit test stages in parallel to minimize pipeline duration.
- Avoid using third-party GitHub Actions without pinning to specific commit hashes (security protection).
- Fail pipelines immediately when build warnings, type errors, or test failures are detected.

# Common Mistakes

- Running workflows without caching `node_modules` or package manager directories, causing slow runtimes.
- Using write-access tokens in pipelines that run on un-reviewed pull requests.
- Forgetting to clean up or limit retention of stored build artifacts.

# Validation Checklist

- [ ] Lint and test stages fail on error.
- [ ] Dependencies are cached.
- [ ] Third-party actions are pinned to secure versions.
- [ ] Secrets are referenced via repository secrets rather than inline values.
