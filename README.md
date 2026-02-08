# AI Project Template

Minimal Vite + Vanilla JS starter for Firebase Hosting.

## Template features
- Hash-based SPA router with route table and 404
- Page modules in `src/pages/`
- App config constants in `src/app/config.js`
- Local storage helpers in `src/app/storage.js`
- Simple event emitter in `src/app/events.js`
- Optional web manifest for installable baseline

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Firebase Hosting

The build output is `dist/`, and `firebase.json` is configured to serve the SPA.

```bash
firebase init hosting
firebase deploy
```

## Adding a page

1. Create a page module in `src/pages/`
2. Add it to the route table in `src/main.js`
3. Add a nav link if it should appear in the header
