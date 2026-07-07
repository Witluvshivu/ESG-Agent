# Components

Implementation lives here, mirroring the prototype's structure. Suggested layout:

- `layout/` — AppShell, Sidebar, Header
- `chat/` — ChatHome, Thread, Composer, message blocks (Scorecard, PeerComparison, GapsList, UploadFlow)
- `dashboard/` — StatCard, PillarScores, UnitScores, TaskList, ApprovalsQueue, ComplianceCalendar
- `datahub/` — FilesTable, FilterChips, CoverageCard
- `org/` — OrgTree, SbuCard, SupplierGrid

Rules:
- Style with Witluvshivu tokens only (`var(--…)` from src/styles/tokens). No hardcoded colors.
- Match the prototype in design/prototype/ pixel-for-pixel; it is the source of truth for FY26/v0.2.
- Every agent answer component must render source-citation chips.
