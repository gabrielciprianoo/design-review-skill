# Long-form text
_Paragraphs, articles, docs, descriptions, blog posts, help content._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (13)

### HIE-02 · Size isn't everything — use weight and color
**Rule:** Don't rely on font size alone; it makes primary content too large and secondary content too small. Make primary elements bolder (allows a reasonable size) and secondary text a softer color (instead of tiny).
**Detect:** [measurable] Large size jumps at the same weight; secondary text below ~14px used to show it's unimportant; headings that are big but regular weight.
**Fix:** Reduce heading size and raise weight; raise tiny secondary text size and lower its contrast.
**Example:** Tour card. Bad: title 30px/400, description 16px/400, price 24px/400, footnote 14px/400, all same color. Good: title 24px/700, price 18px/700, description 18px grey hsl(201,23%,34%), footnote 16px light grey hsl(203,15%,47%), primary text dark hsl(202,57%,15%).
_Source: principles/hierarchy.md_

### HIE-09 · Emphasize the label when users scan for it
**Rule:** On information-dense pages where users look for the label (e.g. tech specs: they scan for "Depth", not "7.6mm"), emphasize the label — but don't bury the data: darker label, slightly lighter value is enough.
**Detect:** [visual] Spec/settings pages where users scan for labels but labels are faint and values dominate.
**Example:** Specs table: section "Dimensions" bold; "Height:" bold dark, "2.31 inches (58.6 mm)" regular grey.
_Source: principles/hierarchy.md_

### LAY-04 · You don't have to fill the whole screen
**Rule:** If content needs 600px, use 600px. Spreading things out or making them unnecessarily wide makes the UI harder to read; extra space at the edges never hurts. Applies to sections too: content doesn't need to be full-width just because the nav is. Give each element the space it needs — don't make it worse to match something else.
**Detect:** [measurable] Narrow-purpose content (forms, carts, login, single cards, reading text) stretched to full container width (e.g. > ~700px for a simple form). [visual] Labels far from their values (e.g. cart prices at the opposite edge of a wide screen).
**Fix:** Constrain the element with a max-width and center it (or place it in a column).
**Example:** Shopping cart stretched across a 1200px+ page (item, price and totals far apart) vs. same cart in a narrow centered column. Login card stays narrow under a full-width nav.
_Source: principles/layout-spacing.md_

### LAY-10 · Relative sizing doesn't scale
**Rule:** Don't lock sizes to each other with em ratios across screen sizes. Large elements must shrink *faster* than small ones; the difference between small and large elements should be less extreme on small screens.
**Detect:** [measurable] Headlines defined as large em multiples of body text that become oversized on mobile.
**Fix:** Set sizes independently per breakpoint.
**Example:** Article: desktop body 18px / headline 45px (2.5em). Mobile body 14px → 2.5em = 35px, way too big. Better mobile headline 20–24px (only 1.5–1.7× body).
_Source: principles/layout-spacing.md_

### LAY-12 · Avoid ambiguous spacing
**Rule:** Without visible separators (borders, backgrounds), grouping relies on spacing. Always put **more space around a group than within it**.
- Stacked form fields: space below a label must be smaller than the space between fields.
- Articles: more space above a section heading than below it.
- Bulleted lists: space between bullets larger than the line-height within a bullet.
- Horizontal groups: icon closer to its own count than to the next item.
**Detect:** [measurable] Equal gaps label→input and input→next label; heading margin-top ≤ margin-bottom; list-item gap ≈ line-height; equal horizontal gaps in icon+count rows.
**Fix:** Tighten within-group spacing and/or widen between-group spacing by a scale step.
**Example:** Billing form: label 20px / field gap 20px (ambiguous) → 10px below label, 20px between groups. Article heading 24/24px → 36px above, 12px below. Benefit list 24/24px → 24px line spacing, 36px between bullets. Feed actions: like-icon/count 16px/16px apart from comment icon → 6px to its count, 36px to the next action.
_Source: principles/layout-spacing.md_

### TYP-03 · Use good fonts
**Rule:**
- **Play it safe:** for UI, a neutral sans serif (Helvetica-like). If unsure, use the system font stack: `-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue`.
- **Ignore typefaces with < 5 weights** — families with many weights are usually crafted with more care (on Google Fonts, filtering to 10+ styles cuts ~85% of options).
- **Optimize for legibility:** headline fonts have tight letter-spacing and short x-height; text fonts have wider spacing and taller x-height. Don't use condensed, short-x-height faces for main UI text (e.g. Futura PT = headline-ish; Proxima Nova = good for UI).
- **Trust popularity:** popular fonts are usually good — useful for picking a serif with personality (e.g. EB Garamond, Alegreya, Cormorant Garamond).
- **Steal from people who care:** inspect well-designed sites to see their fonts.
**Detect:** [measurable] font-family list; flag decorative/condensed faces used for body/UI text, families with few weights, many families mixed.
**Fix:** Switch body/UI text to a neutral, multi-weight sans (or the system stack); keep personality fonts for headings.
_Source: principles/typography.md_

### TYP-04 · Keep line length in check
**Rule:** Fit paragraphs to the best reading experience, not the layout. Aim for **45–75 characters per line**; `max-width: 20–35em` gets you there. Wider than 75 is risky.
**Detect:** [measurable] Paragraph width in em / approximate chars per line > 75 (e.g. ~120 chars per line is bad).
**Fix:** `max-width` on paragraphs, around 34em.
_Source: principles/typography.md_

### TYP-05 · Limit paragraph width even in wide content areas
**Rule:** When text sits alongside images or wide components, still constrain the paragraph width even if the content area is wider. Mixed widths in one area look more polished.
**Detect:** [measurable] Intro/description paragraphs inheriting full section width (> ~75ch) next to grids or wide media.
**Example:** "The one-size-fits-all platform": intro paragraph with `max-width: none` stretched across the 3-column features row (bad) vs `max-width: 34em` centered above it (good).
_Source: principles/typography.md_

### TYP-07 · Line-height is proportional to line length
**Rule:** "1.5 everywhere" is too simple. Line spacing helps eyes find the next line; the longer the line, the more help needed. Narrow content can use ~1.5; wide content may need up to 2.
**Detect:** [measurable] Paragraphs with long lines (> ~65ch) and line-height ≤ 1.5; tight line-height in wide text blocks.
_Source: principles/typography.md_

### TYP-08 · Line-height is inversely proportional to font size
**Rule:** Small text needs taller line-height; large text needs less. Large headlines can use line-height 1.
**Detect:** [measurable] Small body text (≤ 14px) with line-height ≤ 1.3; large headings (≥ ~30px) with line-height ≥ 1.5 (looks gappy when wrapping).
**Example:** Small paragraph 1.25 (bad) → 1.75 (good). Two-line serif headline 1.5 (bad) → 1 (good).
_Source: principles/typography.md_

### TYP-09 · Not every link needs a color
**Rule:** Links inside paragraph text must stand out (color/underline). But in UIs where almost everything is a link (cards, lists), colored links are overbearing: emphasize subtly with heavier weight or darker color. Ancillary links off the main path can stay unstyled and show underline/color only on hover.
**Detect:** [visual] Grids/lists where titles, authors and meta are all bright link-blue.
**Example:** Video grid with every title and channel name in blue (bad) → titles dark and semibold, channel/meta grey, channel underlined only on hover (good).
_Source: principles/typography.md_

### TYP-10 · Align with readability in mind
**Rule:**
- Left-align most text (match the language direction).
- Center only headlines or short independent blocks; anything longer than 2–3 lines should be left-aligned. If one of several centered blocks is too long, rewrite it shorter (also improves consistency).
- **Right-align numbers in tables** so decimals line up and values are easy to compare.
- Justified text needs `hyphens: auto` to avoid word gaps; reserve it for print-like/formal looks.
**Detect:** [measurable] text-align: center on blocks > 3 lines; numeric table columns not right-aligned; text-align: justify without hyphens.
**Example:** Feature trio with one description much longer than the others → shortened so all three are 2 lines. Stock table: Price/Chg/Mkt cap left-aligned (bad) vs right-aligned (good).
_Source: principles/typography.md_

### FIN-01 · Supercharge the defaults
**Rule:** Liven up existing elements instead of adding new ones:
- Replace list bullets with icons — checkmarks/arrows generically, or content-specific (padlock for security features), often in a tinted circle.
- Promote testimonial quote marks into visual elements: larger and in a soft accent color.
- Style links: color + weight, or a thick colorful custom underline that partially overlaps the text.
- Custom checkboxes and radios using a brand color for selected states instead of browser defaults.
**Detect:** [visual] Plain browser-default bullets, checkboxes, radios; plain text-only quotes; default blue underlined links in a branded UI.
_Source: principles/finishing.md_
