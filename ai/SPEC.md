Project specification

Purpose
Bootstrap a minimal Firebase-hosted single-page app template that is easy to extend.

Goals
- SPA served from Firebase Hosting
- Buildable with `npm run build`
- Minimal, well-documented starter UI in `src/`
- PWA-friendly baseline (manifest and service worker optional follow-up)
- Universal template features for reusable SPA projects

Success criteria
- `npm install` then `npm run dev` serves the app locally
- `npm run build` produces a production bundle in `dist/`
- Firebase Hosting configured to serve the built `dist/` directory and SPA routes

Constraints
- Prefer small, well-known tools (Vite + vanilla JS) to keep dependency weight low
- Do not perform large rewrites; changes should be incremental and reversible

Current implementation
- Vite + vanilla JS initialized with `src/main.js` and `src/App.css`
- Starter UI: top nav, three large buttons, and a footer
- Footer displays app version from `package.json`
- `firebase.json` configured to serve `dist/` with SPA rewrites
 - Universal template features (router, storage, events, app config) to be added

UI requirements (first iteration)
- Top navigation bar with project title/brand on the left
- Main area centered with three large buttons: `New Project`, `Open Project`, `Settings`
- Footer showing application version (read from `package.json`)

Universal template features (this iteration)
- Hash-based router with route table, 404 handling, and title updates
- Simple app config/constants module (name, version)
- Local storage helper with JSON-safe get/set
- Lightweight event emitter for cross-module signals
- Basic page modules for Home, Open, Settings
- Optional manifest + meta tags for installable baseline

Out of scope (first iteration)
- Complex service worker strategies
- Authentication, database, or backend integration
