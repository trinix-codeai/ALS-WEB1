This is a Vite + React + TypeScript project for the Alpha Legal Solutions website.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, typically `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the codebase.

## Routing

Client-side routing is handled with `react-router-dom`. If you deploy this as a single-page app, configure your host to rewrite unknown routes to `index.html` so deep links continue to work.

## Styling

Tailwind CSS v4 is loaded through `src/app/globals.css`, with shared site styles and utility classes defined there.

## Structure

- `src/App.tsx` defines the top-level layout and route table.
- `src/app/` contains the page modules used by the router.
- `src/components/` contains reusable UI and section components.
- `src/lib/site-data.ts` contains the service, team, and case-study content.
