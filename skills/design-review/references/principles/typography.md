# Typography

**Type scale (book's hand-crafted example, aligns with the spacing scale):** 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72 px. Use px or rem, never em.

### TYP-01 · Establish a type scale
**Rule:** Most UIs use far too many font sizes (every value from 10 to 24px somewhere), causing inconsistency and slow decisions. Use a constrained scale. A linear scale won't work: small jumps at the bottom, big ones at the top. Modular scales (ratio-based: 4:5, 2:3, golden 1:1.618) produce fractional px (31.25, 39.06…) and too few useful UI sizes (rounded 3:4 → 12, 16, 21, 28 — gaps where you need sizes). For UI, prefer a **hand-picked** scale (see top). If you do use a ratio, round the values yourself.
**Detect:** [measurable] Distinct computed font-sizes; flag off-scale values, fractional px, and > ~8–10 distinct sizes in one view.
**Fix:** Snap each size to the nearest scale step.
**Example:** Sofa product card. Bad: 18, 13, 11, 26, 15, 13, 12, 17, 14px (9 sizes). Good: 18, 14, 14, 24, 16, 14, 14, 16, 14px (4 sizes) — looks the same, but consistent.
**Applies to:** global

### TYP-02 · Avoid em units for font sizes
**Rule:** em is relative to the parent, so nested elements compute to off-scale sizes (1.25em parent × 0.875em child = 17.5px). Use px or rem.
**Detect:** [measurable] Computed font-sizes that are fractional or off-scale inside nested components.
**Applies to:** global

### TYP-03 · Use good fonts
**Rule:**
- **Play it safe:** for UI, a neutral sans serif (Helvetica-like). If unsure, use the system font stack: `-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue`.
- **Ignore typefaces with < 5 weights** — families with many weights are usually crafted with more care (on Google Fonts, filtering to 10+ styles cuts ~85% of options).
- **Optimize for legibility:** headline fonts have tight letter-spacing and short x-height; text fonts have wider spacing and taller x-height. Don't use condensed, short-x-height faces for main UI text (e.g. Futura PT = headline-ish; Proxima Nova = good for UI).
- **Trust popularity:** popular fonts are usually good — useful for picking a serif with personality (e.g. EB Garamond, Alegreya, Cormorant Garamond).
- **Steal from people who care:** inspect well-designed sites to see their fonts.
**Detect:** [measurable] font-family list; flag decorative/condensed faces used for body/UI text, families with few weights, many families mixed.
**Fix:** Switch body/UI text to a neutral, multi-weight sans (or the system stack); keep personality fonts for headings.
**Applies to:** global, long-text, headers-hero

### TYP-04 · Keep line length in check
**Rule:** Fit paragraphs to the best reading experience, not the layout. Aim for **45–75 characters per line**; `max-width: 20–35em` gets you there. Wider than 75 is risky.
**Detect:** [measurable] Paragraph width in em / approximate chars per line > 75 (e.g. ~120 chars per line is bad).
**Fix:** `max-width` on paragraphs, around 34em.
**Applies to:** long-text, headers-hero, empty-states, modals

### TYP-05 · Limit paragraph width even in wide content areas
**Rule:** When text sits alongside images or wide components, still constrain the paragraph width even if the content area is wider. Mixed widths in one area look more polished.
**Detect:** [measurable] Intro/description paragraphs inheriting full section width (> ~75ch) next to grids or wide media.
**Example:** "The one-size-fits-all platform": intro paragraph with `max-width: none` stretched across the 3-column features row (bad) vs `max-width: 34em` centered above it (good).
**Applies to:** headers-hero, long-text, global

### TYP-06 · Baseline, not center
**Rule:** When mixing font sizes on one line (big card title + small actions), align by **baseline**, not vertical center. Center-aligned mixed sizes have offset baselines, which looks awkward — especially when close together.
**Detect:** [measurable] Flex rows containing text of different font-sizes with `align-items: center`.
**Fix:** `align-items: baseline`.
**Example:** "Who to follow" card header with "Refresh · See all": center alignment (bad) vs baseline alignment (good).
**Applies to:** cards, headers-hero, navigation, tables-lists

### TYP-07 · Line-height is proportional to line length
**Rule:** "1.5 everywhere" is too simple. Line spacing helps eyes find the next line; the longer the line, the more help needed. Narrow content can use ~1.5; wide content may need up to 2.
**Detect:** [measurable] Paragraphs with long lines (> ~65ch) and line-height ≤ 1.5; tight line-height in wide text blocks.
**Applies to:** long-text

### TYP-08 · Line-height is inversely proportional to font size
**Rule:** Small text needs taller line-height; large text needs less. Large headlines can use line-height 1.
**Detect:** [measurable] Small body text (≤ 14px) with line-height ≤ 1.3; large headings (≥ ~30px) with line-height ≥ 1.5 (looks gappy when wrapping).
**Example:** Small paragraph 1.25 (bad) → 1.75 (good). Two-line serif headline 1.5 (bad) → 1 (good).
**Applies to:** long-text, headers-hero, global

### TYP-09 · Not every link needs a color
**Rule:** Links inside paragraph text must stand out (color/underline). But in UIs where almost everything is a link (cards, lists), colored links are overbearing: emphasize subtly with heavier weight or darker color. Ancillary links off the main path can stay unstyled and show underline/color only on hover.
**Detect:** [visual] Grids/lists where titles, authors and meta are all bright link-blue.
**Example:** Video grid with every title and channel name in blue (bad) → titles dark and semibold, channel/meta grey, channel underlined only on hover (good).
**Applies to:** cards, tables-lists, navigation, long-text

### TYP-10 · Align with readability in mind
**Rule:**
- Left-align most text (match the language direction).
- Center only headlines or short independent blocks; anything longer than 2–3 lines should be left-aligned. If one of several centered blocks is too long, rewrite it shorter (also improves consistency).
- **Right-align numbers in tables** so decimals line up and values are easy to compare.
- Justified text needs `hyphens: auto` to avoid word gaps; reserve it for print-like/formal looks.
**Detect:** [measurable] text-align: center on blocks > 3 lines; numeric table columns not right-aligned; text-align: justify without hyphens.
**Example:** Feature trio with one description much longer than the others → shortened so all three are 2 lines. Stock table: Price/Chg/Mkt cap left-aligned (bad) vs right-aligned (good).
**Applies to:** long-text, tables-lists, headers-hero, empty-states, dashboards-stats

### TYP-11 · Use letter-spacing effectively
**Rule:** Generally trust the typeface designer and leave it alone, except:
- **Tighten headlines** set in fonts designed for small sizes (wide spacing, e.g. Open Sans): ~`letter-spacing: -0.05em` mimics a headline font (e.g. Oswald). Don't do the reverse — headline fonts rarely work small even with more spacing.
- **Widen all-caps text:** caps all share the same height, so default spacing reduces legibility. Add ~`letter-spacing: 0.05em`.
**Detect:** [measurable] text-transform: uppercase (or all-caps strings) with letter-spacing ≤ 0; large headings in text fonts with default spacing.
**Applies to:** headers-hero, alerts-badges, buttons, tables-lists, dashboards-stats
