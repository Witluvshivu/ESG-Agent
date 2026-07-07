import React, { useState } from "react";
import AppShell from "./components/layout/AppShell.jsx";

/**
 * Aerofusion ESG Agent — app root.
 * View routing is intentionally simple state for now; swap for a router
 * when deep-linking is needed. See docs/HANDOFF.md §Screens for the spec
 * and design/prototype/ for the working reference.
 */
export default function App() {
  const [view, setView] = useState("chat");
  return <AppShell view={view} onNavigate={setView} />;
}
