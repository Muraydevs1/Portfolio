---
name: verify
description: Build, launch, and drive this Vite + React portfolio app to verify changes at the browser surface.
---

# Verifying this project

Vite + React 19 SPA (JavaScript/JSX, Tailwind v3). No tests. Surface is the browser.

## Build / lint

```bash
npm run lint
npm run build
```

## Launch

```bash
npm run dev -- --port 5199 --strictPort   # run in background; serves http://localhost:5199
```

## Drive (headless browser)

No Playwright in the repo. Use `puppeteer-core` (install in the scratchpad, not the repo)
pointed at the system Chrome:

```js
executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
```

Useful checks: `document.documentElement.className` (theme class), `localStorage.getItem('theme')`
(theme persistence via next-themes, key `theme`, values `light|dark|system`), screenshots of the
sticky navbar (theme switcher + flip clock live there).

## Gotchas

- Pre-existing console errors (not regressions): `TextType` in `App.jsx` receives unknown
  `variableSpeed*` props that leak to the DOM, and a duplicate React key `2` warning from
  the flip-clock/marquee area.
- `index.html` hardcodes `class="dark"` on `<html>`; next-themes corrects it on mount.
