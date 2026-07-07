import React from "react";

/**
 * AppShell — sidebar + header + view outlet.
 * Spec: docs/HANDOFF.md §1 (App shell). Reference: design/prototype/.
 * TODO(claude-code): implement per handoff — 240px collapsible sidebar,
 * burger toggle, MODULES/WORKSPACE nav with pending-count badges,
 * dark mode via .dark class on <body>.
 */
export default function AppShell({ view, onNavigate }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: 240, borderRight: "1px solid var(--border)", padding: 16 }}>
        Aerofusion ESG — sidebar (see HANDOFF.md §1)
      </aside>
      <main style={{ flex: 1, padding: 24 }}>
        Current view: {view} — implement views per HANDOFF.md §§2–8
      </main>
    </div>
  );
}
