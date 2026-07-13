---
name: nodejs
description: "Review Node.js services focusing on folder architecture, custom middleware, data validation, security, logging, error handling, env variables, and API design."
---

# Purpose

The Node.js skill instructs the AI agent to audit and construct robust backend servers and CLI scripts, focusing on structured error handling, middleware execution, validation schemas, and secure API design.

# When to Use

- When building REST APIs, GraphQL endpoints, microservices, or CLI scripts in Node.js.
- When creating custom Express, Fastify, or Koa middleware.
- When designing global error handler catches and logging systems.

# When NOT to Use

- When developing client-side layouts or styling browser sheets.
- When configuring deployment networks (use deployment/docker skills).

# Inputs

- Node.js scripts (`.js`, `.mjs`, `.ts`).
- Dependency manifest `package.json`.

# Expected Outputs

- Backend handlers, route definitions, schemas, or middleware components.
- Audit feedback regarding memory configurations, uncaught exceptions, and secure route handling.

# Workflow

Step 1
Examine directory structure (controllers, service layers, repositories) to check separation of concerns.

Step 2
Audit error handling: ensure all Promise rejections and exceptions are captured by global exception handlers.

Step 3
Check data validation: verify all incoming payloads are parsed and validated using schema libraries (e.g. Zod).

Step 4
Verify security: check for CORS, rate-limiting, Helmet headers, and secure password-hashing setups (e.g., bcrypt/argon2).

Step 5
Audit logging configuration: ensure loggers (e.g. Winston, Pino) output structured JSON.

Step 6
Inspect environment variable loading: ensure all inputs are parsed and verified at server startup.

# Best Practices

- Always use async/await and wrap handlers to catch rejected promises automatically.
- Keep dependencies updated and monitor for event-loop blocks using performance monitoring.
- Never crash the node process for expected business errors (e.g., validation failures).

# Common Mistakes

- Ignoring `uncaughtException` and `unhandledRejection` events, which can leave processes hanging.
- Trusting client-side input sizes, exposing servers to Denial of Service (DoS) attacks.
- Saving state variables in global scopes, causing race conditions in multi-client requests.

# Validation Checklist

- [ ] Global error middleware is registered.
- [ ] Schema validation checks all dynamic inputs.
- [ ] Environment configurations are validated at startup.
- [ ] No secrets are logged.
