# Server-side code dropped during the Astro port

The source (`genai/`) was a **TanStack Start** app with a server runtime.
Astro here is configured for **static output** (`output: 'static'`), so the
following server-only modules do **not** translate and were intentionally
left behind in `genai/` (read-only reference). If/when any of this behavior
is needed, re-implement it as an Astro endpoint, middleware, or an external
service.

## Dropped files (in `genai/src/`)

- `server.ts` — Cloudflare/h3 server entry. Wraps `@tanstack/react-start`
  SSR, normalizes catastrophic 500 responses, renders an error page.
  TODO: not needed for static output. For dynamic SSR, port to an Astro
  adapter (`@astrojs/cloudflare`) + middleware.
- `start.ts` — `createStart()` with server-side error middleware.
  TODO: equivalent would be Astro middleware (`src/middleware.ts`).
- `router.tsx` / `routeTree.gen.ts` — TanStack Router setup + generated
  route tree. TODO: replaced by Astro file-based routing (`src/pages/`).
- `lib/config.server.ts` — server-only config loader.
  TODO: move to env vars / `import.meta.env` if any value is still needed.
- `lib/api/example.functions.ts` — TanStack server functions (RPC).
  TODO: re-implement as Astro API routes (`src/pages/api/*.ts`) if needed.
- `lib/error-capture.ts`, `lib/error-page.ts`,
  `lib/lovable-error-reporting.ts` — Lovable/runtime error plumbing tied to
  the TanStack server. TODO: drop or replace with your own error reporting.

## Lead form

Done 2026-10-03: `LeadForm` posts to Web3Forms (same pattern as
threadradar.xyz), key from `PUBLIC_WEB3FORMS_KEY`. Unset key → visible error,
never a fake "received". Regression test: `src/__tests__/lead-form.test.js`.
