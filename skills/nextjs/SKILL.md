---
name: nextjs
description: "Review Next.js systems focusing on App Router, Page structures, Server/Client components, metadata, caching mechanisms, image optimization, routing, API routes, and middleware."
---

# Purpose

The Next.js skill instructs the AI agent to review, design, and implement Next.js features, optimizing hydration, server components layout, caching behavior, and routing performance.

# When to Use

- When building full-stack web applications with Next.js (App Router or Pages Router).
- When debugging hydration errors, routing bottlenecks, or cache staleness.
- When optimizing core web vitals for Next.js deployments.

# When NOT to Use

- When working on pure backend APIs built on Node.js/Express (use nodejs skill instead).
- When working on React applications that are not built on Next.js.

# Inputs

- Next.js codebase files (`page.js`, `layout.js`, `middleware.js`, `next.config.js`).

# Expected Outputs

- Functional pages, layouts, custom hooks, or API route handlers.
- Code recommendations to optimize RSC usage, dynamic imports, metadata, and caching.

# Workflow

Step 1
Determine the router type (App Router vs. Pages Router) and verify folder structures conform to standard conventions.

Step 2
Audit Component roles: keep leaf components as Client Components (using `'use client'`) and data-fetching containers as Server Components.

Step 3
Analyze data fetching and caching strategies: check `fetch` cache options (`force-cache`, `no-store`) and revalidation rules.

Step 4
Verify Image components: ensure Next.js `<Image>` is used with appropriate width/height or `fill` and priority properties.

Step 5
Check SEO metadata configuration: use static or dynamic `generateMetadata` exports instead of raw header tags.

Step 6
Audit middleware functions: ensure paths matching and logic are lightweight to prevent blockages.

# Best Practices

- Fetch data directly in Server Components instead of setting up client-side `useEffect` fetches where possible.
- Wrap third-party providers in small wrapper Client Components to prevent making layouts Client Components.
- Use dynamic routes (`[id]`, `[[...slug]]`) safely with input validation in `generateStaticParams`.

# Common Mistakes

- Adding `'use client'` to every single file, which nullifies the benefits of Server Components.
- Passing large, un-serializable objects from Server Components to Client Components.
- Making synchronous block calls inside middlewares.

# Validation Checklist

- [ ] Data fetching is done in Server Components where possible.
- [ ] Next.js Image component is utilized for media assets.
- [ ] Metadata is declared using standard Next.js APIs.
- [ ] Hydration warnings are resolved.
