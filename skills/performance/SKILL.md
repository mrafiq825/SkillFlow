---
name: performance
description: "Analyze database speed, React renders, bundle size, caching, memory, APIs, network requests, images, fonts, SSR, lazy loading, and code splitting. Output optimization report."
---

# Purpose

The Performance skill guides the AI agent to profile a codebase and running application configuration to find latency bottlenecks, memory leaks, bloating bundles, and inefficient render cycles.

# When to Use

- When page load speed or TTFB (Time to First Byte) is low.
- When client-side React components feel sluggish or laggy.
- Before bundle publication or web deployment.

# When NOT to Use

- For verifying API functionality or correctness (use testing skills).
- For resolving code styling formatting inconsistencies.

# Inputs

- Source code (specifically frontend components, data fetching functions, and db queries).
- Bundle metrics (if available) and Lighthouse reports (if provided).

# Expected Outputs

- Performance Optimization Report listing bottlenecks, impact, and proposed code changes for caching, rendering, database indices, and bundle optimization.

# Workflow

Step 1
Analyze database query patterns (look for N+1 queries, missing indexes, and unoptimized joins).

Step 2
Examine React components for unnecessary re-renders (verify dependency arrays in `useMemo`/`useCallback`, check context sizes).

Step 3
Check bundle size and import structures (identify large third-party imports, advise on tree-shaking).

Step 4
Inspect code splitting and lazy loading implementation (dynamic imports for pages and heavy modal dialogues).

Step 5
Verify caching strategies (HTTP Cache-Control headers, Redis/Memcached backend caches, CDN setups).

Step 6
Analyze asset optimization (image resizing, Next.js `<Image>`, webp conversion, custom font preloading).

# Best Practices

- Prefer static generation (SSG) or incremental static regeneration (ISR) over SSR where data changes infrequently.
- Set strict budget limits on JS bundles.
- Keep the number of critical-path network requests to a minimum.

# Common Mistakes

- Adding `useCallback` everywhere blindly without understanding if the child component is actually re-rendering.
- Fetching large datasets in a single API call without cursor-based pagination.
- Loading unoptimized, raw PNG/JPEG images in public-facing interfaces.

# Validation Checklist

- [ ] All database queries use proper indexes.
- [ ] Large components are loaded dynamically.
- [ ] Asset optimization practices (Next.js Image or similar) are set up.
- [ ] API responses are compressed and cached where appropriate.
