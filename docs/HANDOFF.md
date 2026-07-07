# Handoff: Aerofusion ESG Agent

## Overview
Chat-first ESG management app. An admin reviews corporate ESG performance, monitors data, uploads evidence files (approved into a Data hub), and gets cited, chart-rich answers from an AI agent. Company context: Aerofusion Dynamics Ltd (parent) → 3 SBUs (AD Aerostructures, AD Propulsion Systems, AD Avionics & Interiors) → 2 plants each (Nashik, Coimbatore, Bengaluru, Hosur, Hyderabad, Pune) + 4 suppliers (Shakti Alloys, Meghdoot Composites, Trident Fasteners, Kaveri Polymers). Reporting framework: BRSR (India), FY26.

## About the design files
The files in `prototype/` are **design references created in HTML** — a working prototype showing intended look and behavior, not production code to copy directly. Recreate these designs in the target codebase's environment (e.g. React + the Witluvshivu component library) using its established patterns. `support.js` is a design-tool runtime and must not ship.

## Fidelity
**High-fidelity.** Colors, typography, spacing and radii come straight from the Witluvshivu tokens (`tokens/*.css`) and should be matched exactly. Agent intelligence is simulated: keyword-routed scripted answers with ~900 ms artificial latency.

## Screens / views

### 1. App shell
- Left sidebar, 240 px, 1 px right border `var(--border)`, toggled by a burger button in the header (width animates 240↔0, 180 ms ease-out).
- Sidebar: AD logomark (26 px square, `--primary` bg, radius 6), "Aerofusion ESG" 14 px/600; "New chat" outline button (34 px); MODULES nav (Chat home, Dashboard, Maturity analysis, Materiality analysis, Data hub, Surveys, Peer benchmarking, Reports); WORKSPACE nav (My tasks, Approvals queue, Compliance calendar, Organization structure); user card pinned bottom (avatar initials, name, role).
- Nav item: 33 px tall, radius 8, 13.5 px; active = `--secondary` bg, 500 weight; hover = `--accent`; amber count badges (`--warning`) on Data hub / My tasks / Approvals queue.
- Header: burger (32 px icon button), view title 14 px/600, context line "Aerofusion Dynamics · FY26 · BRSR" in `--muted-foreground`, light/dark pill toggle right (toggles `.dark` class on body).

### 2. Chat home (default)
- Empty state: centered 40 px logomark, H1 26 px/600 "How can I help with Aerofusion's ESG today?", one-line helper, 3 starter prompt cards (full-width max 520 px, radius 12, 1 px border, icon + label).
- Thread: max-width 720 px centered. User bubbles right-aligned, `--secondary` bg, radius 14/14/4/14. Agent answers left, plain or rich cards (below). Typing indicator: pulsing 7 px dot + "Working on it…".
- Composer: pill container radius 14, 1 px `--input` border; paperclip icon button (upload), text input, primary send button (32 px, `--primary`). Below: slash-command chips `/maturity /compare /gaps /upload` in Geist Mono 11 px.
- Query routing (prototype): "maturity|score" → scorecard answer; "compare|peer|scope|emission" → peer comparison; "missing|brsr|gap|filing" → gaps answer; else generic text.

### 3. Rich answer blocks (in-thread, max 560 px)
- **Scorecard**: lead sentence with bold figures (64/100, +6, median 71); 3 metric cards (22 px tabular numerals + 12 px label); trend bar chart FY23–26 (48/53/58/64, current bar `--chart-1`, past `--chart-3`); source chips (Geist Mono 11 px, `--muted` bg): file names the answer used; follow-up chips + blue deep-link "Open Maturity analysis →" (`--info` border/text).
- **Peer comparison**: horizontal bars (Aerofusion 4.1, sector 3.7, Bharat Aerospace 3.2, Garuda 3.5 tCO₂e/₹cr); **stale-data callout** (amber 1 px border): "figure uses FY25 audit — Energy audit FY26.xlsx awaiting approval" with an inline **Approve now** button that approves the file globally and swaps the callout to a resolved state ("recalculates to 3.9"); sources; follow-up chips.
- **Gaps answer**: 4 missing BRSR fields in a bordered list (field, owner unit, amber "missing" pill); actions: "Draft requests to owners" (primary) and "Open Data hub →".

### 4. Upload flow (in chat; also triggered by Data hub Upload button and /upload)
1. User-side file card (name, size).
2. Agent categorization card: detected summary ("supplier ESG assessment, FY26, 142 line items…"), editable tag chips (Category — cycles Suppliers→Emissions→Surveys→Maturity on click; Year; Scope), trust note "Until approved, I won't use this file in any answer or report.", buttons **Approve & store** (primary) / **Discard**.
3. Stored card: "✓ Saved to Data hub › {category}", follow-up chips (Summarize it, Update supplier scores, View in hub →). Approving appends the file to the Data hub as approved.

### 5. Dashboard
- 4 stat cards: ESG maturity 64/100 (+6, median 71), BRSR readiness 78% (amber note "4 fields missing · due Jul 27"), Peer position 4 of 7, Survey response 41%. Card: radius 12, 1 px border, `--shadow-xs`, 28 px tabular value.
- Amber alert banner: BRSR filing countdown + "Ask the agent to chase" (jumps to chat, runs gaps query).
- Left column: Pillar scores (E 58 / S 71 / G 62 progress bars); Unit ESG scores (6 plants with SBU label + bar); My tasks (checkbox list, toggleable, due dates).
- Right column: Approvals required (pending file cards with Approve buttons — shared state with Data hub); Compliance calendar (Jul 27 BRSR, Aug 30 CDP, Sep 15 internal audit, Oct 10 materiality refresh; nearest deadline amber); Data coverage (78%, 94 of 120 fields).

### 6. Data hub
- Two-column: files table (1fr) + 260 px side rail.
- Filter chips: All / Pending / Maturity / Emissions / Suppliers / Revenue / Reports (active = `--primary` fill). "Approvals queue" nav lands here with Pending pre-selected.
- Table: FILE / CATEGORY (mono chip) / UPLOADED BY / DATE / STATUS. Pending rows tinted `--muted` with inline Approve button; approved = green outline pill "✓ approved".
- Side rail: BRSR coverage card (78% bar + missing list), "Ask agent to chase gaps →" (`--info` outline, jumps to chat), Categories card.

### 7. Organization structure
- Parent card (logomark + description), 3 SBU cards in a grid each containing 2 plant rows with ESG scores, suppliers card (4 tiles). Note: every node has a data owner for agent routing.

### 8. Module stubs (Maturity, Materiality, Surveys, Peers, Reports, My tasks, Calendar)
- Centered title + one-line description + 3 context prompt cards that navigate to chat and send the query. In production these become full module conversations.

## Interactions & behavior
- All navigation is client-side view switching; sidebar burger toggle; dark mode = `.dark` on body (tokens swap automatically).
- Chat auto-scrolls to bottom on new messages (container scrollTop, not scrollIntoView).
- Enter or send button submits; starter cards, slash chips, follow-up chips and cross-view buttons all inject queries into chat.
- Approve actions are single-source-of-truth: approving a file anywhere (chat callout, dashboard, data hub) updates badges and all views.
- Hovers: `--accent` bg on ghost/outline elements; no scale effects. Motion 120–200 ms ease-out only.

## State management
- `view` (chat | dashboard | datahub | org | module key), `sidebar`, `dark`, `draft`, `typing`
- `msgs[]` — { id, role, kind: text|scorecard|compare|gaps|upload-drop|upload-cat|upload-stored, cat?, stale? }
- `files[]` — { name, category, uploadedBy, date, status: approved|pending }; pending count drives 3 badges
- `tasks[]` — { label, due, done }
- Production: answers come from an agent API with retrieval over approved files only; every answer must return source file references (render as citation chips).

## Design tokens
From `tokens/` (authoritative): neutral gray ramp `--gray-0…950` (oklch, chroma 0); semantic `--background/--foreground/--card/--muted/--border/--primary/--secondary/--accent`; status `--warning` oklch(0.681 0.145 65), `--success` oklch(0.577 0.145 155), `--info` oklch(0.577 0.175 255), `--destructive` oklch(0.577 0.215 27); charts `--chart-1..3` grays. Type: Geist 400–700, Geist Mono for numbers/file names/commands; body 13.5–14 px; tabular numerals for all stats. Spacing: 4 px grid; controls 26–36 px tall. Radius: 8 default, 6 small, 12 cards, full pills. Shadows: `--shadow-xs` on cards only.

## Assets
- Lucide icons (ISC), inline SVG, stroke 1.8–2, 14–17 px.
- Geist / Geist Mono via Google Fonts (see `tokens/fonts.css`).
- No logo — "AD" initials block as logomark placeholder.

## Files
- `prototype/AD ESG Agent.dc.html` — entire app (markup + logic)
- `prototype/styles.css`, `prototype/tokens/*.css` — design tokens
- `prototype/support.js` — prototype runtime only, do not ship
