# @workspace/db

Database abstraction layer and schema definitions powered by **PostgreSQL**, **Drizzle ORM**, and **drizzle-zod**.

---

## 🚀 Overview

`@workspace/db` provides a type-safe connection pool and data access layer for PostgreSQL databases. It is shared across services (primarily consumed by `@workspace/api-server`) and defines database models and automatic Zod validation schemas.

### Key Highlights
- **ORM:** Drizzle ORM (`drizzle-orm/node-postgres`).
- **Driver:** Node-Postgres (`pg`).
- **Migrations & Prototyping:** Managed using `drizzle-kit`.
- **Validation:** Automatic Zod schema generation with `drizzle-zod`.

---

## 📁 Directory Structure

```
packages/db/
├── src/
│   ├── index.ts               # Connection pool instantiation and db client export
│   └── schema/
│       └── index.ts           # Schema aggregator and table definitions
├── drizzle.config.ts          # Drizzle Kit CLI configuration
├── tsconfig.json              # TypeScript compilation setup
└── package.json
```

---

## 🛠 Available Scripts

Run these commands from the monorepo root:

| Command | Action |
| :--- | :--- |
| `pnpm --filter @workspace/db run push` | Synchronizes local schema changes directly with the PostgreSQL database |
| `pnpm --filter @workspace/db run push-force` | Forces schema synchronization in case of breaking changes |

---

## 🔑 Environment Configuration

To connect to PostgreSQL, ensure the `DATABASE_URL` environment variable is defined in your root `.env` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

---

## 💡 How to Add New Models

1. Create a table file under `packages/db/src/schema/` (e.g., `projects.ts`):
   ```typescript
   import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
   import { createInsertSchema, createSelectSchema } from "drizzle-zod";

   export const projects = pgTable("projects", {
     id: serial("id").primaryKey(),
     title: text("title").notNull(),
     createdAt: timestamp("created_at").defaultNow(),
   });

   export const insertProjectSchema = createInsertSchema(projects);
   export const selectProjectSchema = createSelectSchema(projects);
   export type Project = typeof projects.$inferSelect;
   ```
2. Re-export the table from `packages/db/src/schema/index.ts`.
3. Push changes to your database with `pnpm --filter @workspace/db run push`.
