Project memory (update over time):
- This repo is a reusable template for new projects
- Prefer clean, minimal structure
- Stack: Vite + vanilla JS with `src/main.js` and `src/App.css`
- Footer reads app version from `package.json`
- Firebase Hosting expects `dist/` with SPA rewrites via `firebase.json`
- Universal template modules live in `src/app/` and `src/pages/`
- Hash router drives navigation with routes defined in `src/main.js`
- Web manifest is provided at `public/manifest.webmanifest`
