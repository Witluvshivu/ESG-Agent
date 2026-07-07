# Design workflow

This product iterates design-first, per version:

1. **Lo-fi** — wireframes in `design/wireframes/` (fast, many options, throwaway).
2. **Review** — pick directions; decisions recorded in docs/CHANGELOG.md.
3. **Hi-fi** — interactive prototype in `design/prototype/` built from the Witluvshivu component set. This becomes the visual source of truth.
4. **Spec** — docs/HANDOFF.md updated to match the accepted prototype.
5. **Implement** — Claude Code recreates the prototype in `src/` per CLAUDE.md.

Naming: keep prior versions; suffix new ones (`AD ESG Agent v2.dc.html`). Never edit an accepted prototype in place.

Token updates: sync `src/styles/tokens/` from the Witluvshivu repo; do not hand-edit values.
