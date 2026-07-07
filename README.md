# Aerofusion ESG Agent

Chat-first ESG application for **Aerofusion Dynamics (AD)** — a (fictional) Indian aircraft-parts manufacturer. An admin (sustainability manager / ESG analyst) works through a Claude-like chat with an AI agent; every module — maturity analysis, materiality, data hub, surveys, peer benchmarking, reports — is a conversation grounded in admin-approved data. Reporting framework: BRSR (India).

Built on the [Witluvshivu design system](https://github.com/Witluvshivu/witluvshivu).

## Repo layout

- `src/` — React app (Vite). Scaffold in place; implemented per `docs/HANDOFF.md`.
  - `src/styles/tokens/` — vendored Witluvshivu design tokens (authoritative)
  - `src/components/` — see its README for the component map
- `design/` — design artifacts, the visual source of truth
  - `wireframes/` — v0.1 lo-fi exploration
  - `prototype/` — v0.2 hi-fi interactive prototype (+ single-file standalone build)
- `docs/` — `HANDOFF.md` (implementation spec), `CHANGELOG.md`, `DESIGN_WORKFLOW.md`
- `CLAUDE.md` — instructions for Claude Code

## Getting started

```bash
npm install
npm run dev          # run the React app
npm run design:proto # serve the hi-fi prototype for reference
```

Or just open `design/prototype/AD ESG Agent (standalone).html` in a browser — fully self-contained.

## Status

**v0.2.0** — hi-fi prototype accepted; React implementation scaffolded, pending. See `docs/CHANGELOG.md`.
