Tasks (current iteration)

UI
- [x] Implement top navigation bar in `src/main.js`/`src/App.css`
- [x] Implement main area with three large buttons and event handlers
- [x] Implement footer showing version from `package.json`

Hosting
- [x] Add `firebase.json` targeting `dist/` with SPA rewrites

Universal features
- [x] Add `src/app/config.js` for constants (name, version)
- [x] Add `src/app/router.js` hash router with 404 + title
- [x] Add `src/app/storage.js` JSON-safe localStorage helper
- [x] Add `src/app/events.js` event emitter
- [x] Add `src/pages/` modules for Home/Open/Settings
- [x] Wire `src/main.js` to render routes and update nav
- [x] Add `public/manifest.webmanifest` and link in `index.html`

Docs
- [x] Update `README.md` with dev/build/deploy steps

Validation
- [ ] Run `npm run dev`
- [ ] Run `npm run build` and `npm run preview`
