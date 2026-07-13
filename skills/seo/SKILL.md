---
name: seo
description: "Review metadata, Open Graph, Twitter Cards, Schema, structured data, canonical URLs, robots.txt, sitemaps, internal links, titles, and heading structures to generate an SEO report."
---

# Purpose

The SEO skill directs the AI agent to review a website's code and page structures to ensure maximum search engine discoverability, structured data compliance, and proper metadata mapping.

# When to Use

- When building public-facing marketing pages, blogs, or e-commerce directories.
- Prior to releasing a site for indexing on search engines.

# When NOT to Use

- For private dashboards, intranets, or auth-walled admin portals that should not be indexed.
- For purely backend API design tasks.

# Inputs

- HTML templates, React/Next.js pages, and layouts.
- Configuration files (`sitemap.xml`, `robots.txt`).

# Expected Outputs

- An SEO Audit Report highlighting deficiencies in titles, metadata, Open Graph configurations, structured data schema, headings hierarchy, and accessibility rules.

# Workflow

Step 1
Examine each page for unique page title tags and descriptive meta descriptions (ensuring character lengths are within 50-60 and 150-160 characters respectively).

Step 2
Inspect heading hierarchy (ensure exactly one `<h1>` per page, followed by logical `<h2>` to `<h6>` nesting).

Step 3
Verify canonical URL definitions to prevent duplicate content indexing.

Step 4
Check Open Graph (OG) and Twitter Card tags to ensure correct title, description, and image rendering on social platforms.

Step 5
Analyze structured JSON-LD data schema (Product, Article, LocalBusiness, Breadcrumbs).

Step 6
Verify existence and correctness of `robots.txt` directives and `sitemap.xml` references.

# Best Practices

- Always use semantic HTML elements (`<main>`, `<article>`, `<header>`, `<footer>`) to help crawl structures.
- Ensure all images have descriptive `alt` tags.
- Provide descriptive anchor text for internal links rather than generic phrases like "click here".

# Common Mistakes

- Having multiple `<h1>` elements on a single page.
- Forgetting to declare a canonical URL tag, leading to duplicate indexing issues for queries and UTM parameters.
- Missing `robots.txt` or referencing outdated URLs in the sitemap.

# Validation Checklist

- [ ] Page titles are descriptive and of proper length.
- [ ] Exactly one `<h1>` is defined on each page.
- [ ] Semantic HTML and alt text are utilized.
- [ ] Open Graph tags are defined in layout metadata.
- [ ] JSON-LD schema is validly formed.
