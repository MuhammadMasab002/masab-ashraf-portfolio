# @workspace/api-server

Production-ready backend API service built with **Express 5**, **Node.js 24**, and bundled using **esbuild**.

---

## 🚀 Overview

`@workspace/api-server` provides backend services, health endpoints, and database integrations for the portfolio ecosystem. It is configured to run independently or alongside the frontend application.

### Key Highlights
- **Framework:** Express v5 on Node.js 24.
- **Fast Bundling:** Uses `esbuild` for fast production builds with source map support.
- **Structured Logging:** Powered by `pino` and `pino-http` for low-overhead JSON logging, with pretty-printing during development.
- **Schema Validation:** Integrates `@workspace/api-zod` for validating request payloads and response contracts at runtime.
- **Database Integration:** Connects to PostgreSQL using `@workspace/db` (Drizzle ORM).
- **Security & Utilities:** `cors` and `cookie-parser` preconfigured.

---

## 📁 Directory Structure

```
apps/api-server/
├── src/
│   ├── index.ts               # Server entry point, port binding & lifecycle handlers
│   ├── app.ts                 # Express application configuration & middlewares
│   ├── lib/
│   │   └── logger.ts          # Pino logger setup
│   ├── middlewares/           # Custom Express middlewares (logging, auth, error handlers)
│   └── routes/
│       ├── index.ts           # Central route aggregator
│       └── health.ts          # Healthcheck endpoint (/api/healthz)
├── build.mjs                  # Custom esbuild compilation script
├── tsconfig.json              # TypeScript project configuration
└── package.json
```

---

## 🛠 Available Scripts

Run these commands from the monorepo root or inside this directory:

| Command | Action |
| :--- | :--- |
| `pnpm --filter @workspace/api-server run dev` | Builds and runs the API server in development mode on port `5000` |
| `pnpm --filter @workspace/api-server run build` | Compiles TypeScript source to `dist/index.mjs` using `esbuild` |
| `pnpm --filter @workspace/api-server run start` | Runs the compiled server from `dist/index.mjs` with source maps |
| `pnpm --filter @workspace/api-server run typecheck` | Validates TypeScript types with `tsc` |

---

## 🔑 Environment Variables

The server defaults to port `5000` if not specified. For database connectivity and production settings, configure:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/masab_portfolio_db
```

---

## 📡 Endpoints

| Method | Endpoint | Description | Validation |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/healthz` | Liveness and health check endpoint | `@workspace/api-zod: HealthCheckResponse` |
