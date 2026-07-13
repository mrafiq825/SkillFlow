---
name: database
description: "Review database schemas, index layouts, table relationships, normalization rules, query efficiency, data security, migrations, and backups."
---

# Purpose

The Database skill instructs the AI agent to optimize SQL and NoSQL databases, construct correct migration scripts, and review indexing, security, and relationship normalization strategies.

# When to Use

- When designing schemas, database tables, or collections.
- When writing schema migrations or seed scripts.
- When resolving slow query execution plans or indexing issues.

# When NOT to Use

- When configuring client-side component code.
- When designing UI layouts or web styling sheets.

# Inputs

- SQL DDL scripts, prisma schemas, or mongoose models.
- Database query logs or explain plan reports.

# Expected Outputs

- Optimized database schema definitions, SQL queries, or migration scripts.
- Schema Audit Report detailing relationship issues, indexing recommendations, and query plans.

# Workflow

Step 1
Examine table structures for normalization (up to 3NF) or appropriate NoSQL denormalization.

Step 2
Inspect foreign keys, cascading rules, and check constraints.

Step 3
Analyze query execution plans (using `EXPLAIN ANALYZE`) to identify table scans, slow joins, and missing indexes.

Step 4
Verify that database migrations are write-only additions to support zero-downtime rolls.

Step 5
Check database connection pooling configurations and timeout settings.

Step 6
Ensure data access rules prevent SQL injection (always use parameterized queries).

# Best Practices

- Always write migrations that can be rolled back.
- Create indexes for columns frequently used in `WHERE`, `JOIN`, or `ORDER BY` statements.
- Configure automated, periodic backups and regularly test the restoration procedure.

# Common Mistakes

- Creating too many indexes, which slows down write (INSERT/UPDATE) operations.
- Selecting all columns (`SELECT *`) in queries instead of requesting only the columns required.
- Hardcoding connection strings in code files.

# Validation Checklist

- [ ] All dynamic queries are parameterized.
- [ ] Columns used in filters are indexed.
- [ ] Migration rollback steps are documented.
- [ ] Connection pool sizes match server capabilities.
- [ ] Database credentials are loaded from environment variables.
