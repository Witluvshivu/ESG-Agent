# CLAUDE.md — Aerofusion ESG Agent

## What this is
Chat-first ESG application for Aerofusion Dynamics (fictional Indian aircraft-parts manufacturer). An admin converses with an AI agent; all modules (maturity, materiality, data hub, surveys, peers, reports) are conversations grounded in admin-approved files. Framework context: BRSR (India).

## Source of truth, in order
1. `docs/HANDOFF.md` — the full implementation spec (screens, components, interactions, state, tokens).
2. `design/prototype/AD ESG Agent.dc.html` — working hi-fi reference. Open `design/prototype/AD ESG Agent (standalone).html` in a browser to see exact intended behavior. Do NOT copy this code; recreate in React. `support.js` is a design-tool runtime — never ship it.
3. `design/wireframes/` — lo-fi exploration history (context only).

## Design system
Witluvshivu (github.com/Witluvshivu/witluvshivu). Tokens are vendored at `src/styles/tokens/` and imported by `src/styles/global.css`.
- Use CSS variables only — never hardcode colors. Dark mode = `.dark` class on body.
- Type: Geist / Geist Mono; tabular numerals for all stats.
- Icons: Lucide, inline SVG, stroke 1.8–2.
- Motion: 120–200ms ease-out; no scale effects.

## Stack & commands
Vite + React 18 (JS, no TS yet). `npm install`, `npm run dev`, `npm run build`. View prototype: `npm run design:proto`.

## Conventions
- Components under `src/components/<area>/` (see src/components/README.md for the map).
- One component per file, PascalCase filenames, function components + hooks.
- App-level state (files, tasks, messages, view) stays lifted; approving a file anywhere must update every view (badges, tables, callouts).
- Agent answers are structured objects ({ kind, data, sources[] }) rendered by block components — never raw HTML strings.
- No new dependencies without asking.

## Design → code workflow (versioning)
Each product iteration follows: lo-fi wireframes → review → hi-fi prototype (component set) → implement.
- New design rounds land in `design/wireframes/` and `design/prototype/` with version suffixes (e.g. `AD ESG Agent v2.dc.html`).
- When a new prototype version lands, diff it against HANDOFF.md, update the spec, then implement.
- Keep `docs/CHANGELOG.md` updated per version.
