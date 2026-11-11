---
name: design-review
description: Audit and redesign user interfaces using the principles of the book Refactoring UI (hierarchy, spacing, typography, color, depth, images, finishing touches). Use when the user asks to review, critique, audit, improve, polish or redesign a UI, web page, app screen or component (cards, forms, tables, navigation, buttons, dashboards, modals, empty states), whether it's open in the browser, given as a URL, a screenshot, or HTML/CSS code.
---

# Design Review (Refactoring UI)

Knowledge lives in `references/`. **Never load everything.** Follow the chain:
`SKILL.md → INDEX.md → only the file(s) needed`.

## 1. Classify the request

| Task type | Signals | Load |
|---|---|---|
| **Component fix** | "review these cards / this form / the navbar" | `references/components/INDEX.md` → 1–2 `components/<name>.md` |
| **Screen audit** | "review this page / screen / app" | `references/principles/INDEX.md` → `hierarchy.md`, `layout-spacing.md`, `typography.md`, `color.md`; add `depth.md`, `images.md`, `finishing.md` only if relevant |
| **Redesign** | "redesign / propose a better version" | Screen audit set + `personality.md` + `systems.md` (+ `process.md`) |
| **Polish** | "make it look more polished / finishing touches" | `finishing.md`, `depth.md`, `images.md` |
| **New design** | "design a … from scratch" | `process.md`, `personality.md`, `systems.md`, then topic files as needed |

Also identify which components are on screen (see `components/INDEX.md` descriptions); for a screen audit, open the component files for the 1–2 dominant components.

## 2. Capture the interface

Use whatever is available, in this order:
1. **Browser tool** (Claude in Chrome, built-in browser, Playwright MCP): open the page, take a screenshot, then run `scripts/measure_styles.js` with the tool's JavaScript execution. To scope to a region, first run `window.__DR_ROOT = '<css selector>'`.
2. **Shell + Playwright** (Claude Code): `python3 scripts/capture.py <url|file> [--selector ".card"] [--out dir]` → screenshot, grayscale screenshot, `measurements.json`.
3. **Screenshot only**: visual checks only; say measurements were unavailable.
4. **Code only**: read the CSS/markup and compute the same signals by hand.

Always do the **grayscale test** (PRO-03): view a desaturated version (capture.py makes one; in a browser tool apply `document.documentElement.style.filter='grayscale(1)'`, screenshot, then remove it).

## 3. Analyze

- Map every finding to a principle ID. Use measurements as evidence (`measurements.json` keys reference IDs in comments of `measure_styles.js`).
- Check in this order of impact: **hierarchy → spacing/layout → typography → color/contrast → depth → images → finishing**.
- Measurements are hints, not verdicts: confirm each against the screenshot before reporting it.
- Respect the existing brand/personality unless asked to change it (PER-*). For redesigns, state the target personality first.
- `[process]` principles guide redesigns; don't report them as defects in an audit.

## 4. Deliver

**A. Findings** — ranked by impact, max ~10, each as:
`[ID] Problem — evidence (measured value or what's visible) → fix (concrete values from the book's scales)`

**B. Corrected design** — unless the user only wants the critique:
- Rebuild the screen/component as a self-contained HTML/CSS page applying the fixes, using the scales from the principle files (spacing 4/8/12/16/24/32/48/64…, type 12/14/16/18/20/24/30/36/48…, 5-level shadows, 100–900 color shades). Show before (screenshot) and after side by side when possible.
- Or, if the user wants code changes, give a CSS/markup patch.

**C. System summary** (redesigns) — the type scale, spacing scale, palette (greys + primary + accents in HSL) and shadows used, so the team can adopt them.

## Rules
- Cite IDs; never invent principles beyond the references. If something isn't covered, say it's outside the book.
- Prefer few, high-impact changes over long lists.
- Don't copy the book's text; the references are paraphrased summaries.

## Maintenance
Principle files are the source of truth. After editing them, regenerate indexes and component files:
`python3 tools/build_indexes.py skills/design-review` (script lives in the source repo's `tools/`, not in the installed skill).
