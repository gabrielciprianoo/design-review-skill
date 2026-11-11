# Process
Use only for new designs or full redesigns. Not needed for component fixes or polish.

### PRO-01 · Start with a feature, not a layout
**Rule:** Design a concrete piece of functionality first (e.g. "search for a flight"), not the app shell (top nav vs sidebar, logo position, container width). Decide navigation last, once several features exist.
**Detect:** [visual] Shell/chrome dominates the screen while the primary task is buried.
**Fix:** In a redesign, rework the main feature of the screen first; propose navigation changes only after.
**Example:** Three blank app shells with "?" vs one flight-search card (from, to, depart, return, button) — the final page is just a hero with that card.
**Applies to:** global, navigation

### PRO-02 · Detail comes later
**Rule:** In early stages skip typefaces, shadows, icons. Explore structure in low fidelity first.
**Fix:** When producing a corrected design, settle structure and hierarchy first (grayscale wireframe), then apply type, color, depth and finishing.
**Applies to:** global

### PRO-03 · Design in grayscale first
**Rule:** Hierarchy must come from spacing, contrast and size. Color is added afterwards to enhance, never to carry hierarchy.
**Detect:** [visual] Desaturate the screenshot. If primary vs secondary content and the primary action are no longer obvious, hierarchy depends on color.
**Fix:** Strengthen hierarchy with weight, size, grey contrast and spacing before touching the palette.
**Example:** Signup + storage-plan picker: the grayscale version is already clear (selected plan with border + check, dark CTA). The color version only turns CTA, check, toggle and active border indigo.
**Applies to:** global

### PRO-04 · Don't over-invest in mockups
**Rule:** Mockups are disposable; move to the real thing fast.
**Fix:** Deliver corrections concrete enough to implement (HTML/CSS or specific property changes), not a polished picture.
**Applies to:** global

### PRO-05 · Work in cycles; test edge cases on real UI
**Rule:** Design a simple version, build it, iterate on the working UI, then move to the next feature. Edge cases are easier to solve in a usable interface.
**Detect:** [visual] When auditing, stress real-data edge cases: long lists (2000 contacts), long text, error states, empty states, collisions (two events at the same time).
**Applies to:** global, forms, tables-lists, empty-states

### PRO-06 · Be a pessimist: don't imply unbuilt functionality
**Rule:** Design the smallest useful version that can ship. "Nice-to-haves" are designed later.
**Detect:** [visual] Controls promising something missing or half-done: dead drag-and-drop zones, permanently disabled buttons, empty tabs, "coming soon".
**Fix:** Remove or hide what doesn't work; show only the working version.
**Example:** Comment box with avatar, textarea, "Some HTML is OK" and "Post Comment" — the ambitious version adds "Attach files by dragging & dropping"; the shippable one drops it.
**Applies to:** global, forms
