---
name: docker
description: "Review Dockerfile, docker-compose.yml, volumes, virtual networks, image sizes, multi-stage builds, container security, health checks, and optimizations."
---

# Purpose

The Docker skill directs the AI agent to write and optimize Dockerfiles and Compose configurations, ensuring secure runtimes, minimal image footprints, and proper network/volume mapping.

# When to Use

- When containerizing a frontend, backend, or full-stack application.
- When configuring local development environments using docker-compose.
- When optimizing CI/CD build speeds and caching layers for Docker.

# When NOT to Use

- When deploying directly to serverless platforms that handle containers implicitly (unless writing custom Dockerfiles for them).
- For writing CSS or HTML components.

# Inputs

- Code repository, dependency manifest (e.g. `package.json`).
- Existing `Dockerfile` or `docker-compose.yml` (if available).

# Expected Outputs

- Optimized production-ready `Dockerfile` (using multi-stage builds) and `docker-compose.yml` (where applicable).
- Optimization feedback detailing base image choices, layers caching, health checks, and user privileges.

# Workflow

Step 1
Choose minimal secure base images (e.g., node:alpine, distroless, or debian-slim).

Step 2
Design multi-stage build processes separating build dependencies from the final running environment.

Step 3
Leverage caching layers by copying dependency specifications (`package.json`, `package-lock.json`) before copying the rest of the source code.

Step 4
Define non-root execution users (avoid running containers as `root`).

Step 5
Configure health checks inside the `Dockerfile` or Compose files.

Step 6
Configure isolated virtual networks and persistent volume mounts.

# Best Practices

- Do not install unnecessary packages or build dependencies in the final runner stage.
- Always use a `.dockerignore` file to prevent copying `node_modules`, logs, or local secrets.
- Use explicit version tags for base images instead of `latest`.

# Common Mistakes

- Running application processes inside containers as the `root` user.
- Storing secrets or passwords directly inside the `Dockerfile` environment parameters.
- Forgetting to map volumes for persistent databases, resulting in data loss when containers restart.

# Validation Checklist

- [ ] Multi-stage build structure is used.
- [ ] Non-root user is configured.
- [ ] Explicit image tags are used.
- [ ] Health check is implemented.
- [ ] `.dockerignore` is present.
