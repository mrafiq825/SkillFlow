---
name: deployment
description: "Review production readiness, hosting configurations, environment variables, CDNs, security headers, logging, monitoring, and rollback strategies."
---

# Purpose

The Deployment skill instructs the AI agent to review applications for production deployment readiness, ensuring secure configs, stable CDNs, robust logging, monitoring setups, and a clean rollback path.

# When to Use

- Before preparing a build for staging or production deployment.
- When configuring cloud infrastructure, DNS, CDNs, or custom domain mappings.
- When drafting release verification procedures.

# When NOT to Use

- For local development setup instructions.
- For writing component-level React logic or backend business features.

# Inputs

- Deployment configs (Terraform, Docker Compose, PM2 config, or platform configs).
- Build scripts and environment variables template.

# Expected Outputs

- Production Deployment Checklist.
- Recommendation report detailing CDNs, logging configuration, health monitoring, and rollback steps.

# Workflow

Step 1
Verify that all secret values are injected through environment variables and never hardcoded in configurations or repositories.

Step 2
Inspect build output configurations (ensure optimizations, bundle minification, and source map options are secure).

Step 3
Check CDN configurations and cache-invalidation paths.

Step 4
Verify security headers configuration (HSTS, CSP, X-Content-Type-Options) in server configs (Next.js config, Nginx config, etc.).

Step 5
Check logging configuration: ensure logs write to stdout/stderr in JSON format, capturing error details without leaking PII or secrets.

Step 6
Define monitoring health-check endpoints (`/api/health` or `/healthz`) and SLA metrics.

Step 7
Establish a rollback plan (container tag reverting, deployment slot swap, or blue-green failbacks).

# Best Practices

- Automate deployments entirely via CI/CD pipelines (no manual SSH/FTP uploads).
- Configure active monitoring and alerts for high error rates or latency spikes.
- Perform database schema migrations backwards-compatibly to support zero-downtime rolls.

# Common Mistakes

- Forgetting to configure HSTS, leaving connections vulnerable to SSL stripping.
- Deploying to production without a verified fallback database rollback procedure.
- Logging raw HTTP request payloads containing customer passwords.

# Validation Checklist

- [ ] Secrets are loaded securely from env.
- [ ] CDN caches are configured correctly.
- [ ] Health check endpoint (`/healthz`) exists and returns database health.
- [ ] Rollback steps are defined and tested.
