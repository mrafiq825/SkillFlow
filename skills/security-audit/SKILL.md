---
name: security-audit
description: "Inspect secrets, auth, rate limiting, env, vulnerabilities, XSS, CSRF, SQLi, SSRF, IDOR, headers, cookies, and APIs. Output Severity, Risk, Impact, Rec, and Fix."
---

# Purpose

The Security Audit skill trains the agent to systematically identify vulnerabilities, poor access control, and configuration weaknesses in codebases, configuration files, and dependencies, providing a structured remediation report.

# When to Use

- Before launching a new service, API, or system to production.
- During security reviews of dependency updates.
- Following compliance requirements (e.g. SOC2, PCI-DSS).

# When NOT to Use

- For generic software styling or code-readability reviews.
- When performing high-performance load testing (use specialized performance tools instead).

# Inputs

- Source code files, particularly handlers, middlewares, database queries, and package configurations.
- Environment variables template files (e.g. `.env.example`).
- Deployment configurations (Dockerfiles, Kubernetes configs).

# Expected Outputs

- Security Audit report, mapping each finding to:
  - **Severity**: Critical, High, Medium, Low
  - **Risk**: Explanation of the vulnerability
  - **Impact**: Potential consequences if exploited
  - **Recommendation**: Technical remediation guidance
  - **Fix**: Direct code or configuration snippet resolving the issue

# Workflow

Step 1
Scan for exposed secrets, passwords, tokens, API keys, or private keys in the codebase.

Step 2
Inspect authentication and authorization endpoints to ensure correct token validation, session checks, and protection against IDOR (Insecure Direct Object Reference) and Broken Access Control.

Step 3
Check rate limiting configurations on public APIs and sensitive endpoints (login, forgot-password).

Step 4
Inspect input parameters for XSS, CSRF, SQL Injection, and SSRF (Server-Side Request Forgery).

Step 5
Verify that file upload paths restrict execution permissions and filter file extensions.

Step 6
Analyze HTTP headers (HSTS, CSP, X-Frame-Options, CORS) and Cookie flags (Secure, HttpOnly, SameSite).

Step 7
Check audit logging configuration. Ensure sensitive data (PII, tokens, passwords) is never logged.

# Best Practices

- Always sanitize and validate all untrusted inputs on the server.
- Follow the principle of least privilege for APIs, database roles, and cloud IAM.
- Keep dependencies updated using automated scanners (e.g. npm audit, Dependabot).

# Common Mistakes

- Trusting client-side validation for access control or business logic.
- Storing keys or database credentials directly in code repository files.
- Permissive CORS policies (e.g., `Access-Control-Allow-Origin: *`) on authenticated endpoints.

# Validation Checklist

- [ ] All inputs are validated using a schemas validator (e.g., Zod, Joi).
- [ ] No raw SQL queries are built using string concatenation.
- [ ] Cookies and JWTs are signed, encrypted, and configured securely.
- [ ] APIs are rate-limited.
- [ ] Findings are categorized with clear Remediation (Fix) code blocks.
