# Navigation
_Top nav, sidebars, tabs, breadcrumbs, dropdown menus, steppers._

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

### HIE-04 · Don't use grey text on colored backgrounds
**Rule:** Grey-on-white works because it lowers contrast. On a colored background, lower contrast by hand-picking a color of the **same hue** as the background, adjusting saturation and lightness. Don't use plain grey, and don't use white with reduced opacity (looks dull, washed out, even disabled — and lets images/patterns show through the text).
**Detect:** [measurable] Text with grey color (saturation ≈ 0) or rgba/opacity < 1 on a non-neutral background.
**Fix:** Use a tint of the background hue, e.g. on teal background secondary text hsl(183,70%,84%).
**Example:** Testimonial card with teal footer: name in white, company in grey hsl(0,0%,78%) (bad), in hsla(0,0%,100%,0.6) (bad, pattern shows through), in hsl(183,70%,84%) (good).
_Source: principles/hierarchy.md_

### HIE-05 · Emphasize by de-emphasizing
**Rule:** When the main element doesn't stand out and nothing can be added to it, soften the elements competing with it.
**Detect:** [visual] Active nav item / primary panel only slightly different from its neighbors; sidebars with backgrounds competing with main content.
**Fix:** Give inactive nav items a softer color. Remove a competing sidebar's background so it sits directly on the page background.
**Example:** Nav with "Orders" active in indigo but other items in dark text → still flat; making the others grey makes "Orders" pop.
_Source: principles/hierarchy.md_

### HIE-11 · Balance weight with contrast (icons)
**Rule:** Heavy elements (solid icons, bold shapes) feel emphasized because they cover more surface area. Counterbalance by lowering contrast (softer color).
**Detect:** [visual] Solid icons next to text that visually overpower their labels.
**Fix:** Give icons a softer color than the text.
**Example:** Sidebar menu: icons hsl(212,20%,13%) same as text (bad) → icons hsl(212,20%,68%), text hsl(212,20%,13%) (good).
_Source: principles/hierarchy.md_

### LAY-08 · Grids are overrated: not everything should be fluid
**Rule:** A 12-column grid is just constrained percentage widths. Don't treat it as a religion: many elements are better with a **fixed width** optimized for their content. Classic case: a sidebar at 25% grows uselessly on wide screens and shrinks below its usable minimum on narrow ones (awkward wrapping/truncation). Give the sidebar a fixed width and let the main area flex, with its own internal grid. Same inside components: don't use percentages unless you actually want the thing to scale.
**Detect:** [measurable] Sidebars, avatars, thumbnails, icons or images sized with % widths. [visual] Sidebar text wrapping/truncating at narrow widths, or sidebar oversized at wide widths.
**Fix:** Fixed width for sidebar / media; flexible width for main content.
**Example:** Invoices dashboard: fixed-width dark sidebar; main area shows 4 or 2 invoice cards depending on space. Comment cards keep a fixed avatar width while the text area flexes.
_Source: principles/layout-spacing.md_

### TYP-06 · Baseline, not center
**Rule:** When mixing font sizes on one line (big card title + small actions), align by **baseline**, not vertical center. Center-aligned mixed sizes have offset baselines, which looks awkward — especially when close together.
**Detect:** [measurable] Flex rows containing text of different font-sizes with `align-items: center`.
**Fix:** `align-items: baseline`.
**Example:** "Who to follow" card header with "Refresh · See all": center alignment (bad) vs baseline alignment (good).
_Source: principles/typography.md_

### TYP-09 · Not every link needs a color
**Rule:** Links inside paragraph text must stand out (color/underline). But in UIs where almost everything is a link (cards, lists), colored links are overbearing: emphasize subtly with heavier weight or darker color. Ancillary links off the main path can stay unstyled and show underline/color only on hover.
**Detect:** [visual] Grids/lists where titles, authors and meta are all bright link-blue.
**Example:** Video grid with every title and channel name in blue (bad) → titles dark and semibold, channel/meta grey, channel underlined only on hover (good).
_Source: principles/typography.md_

### DEP-03 · Use shadows to convey elevation
**Rule:** Shadows place elements on a z-axis. Small, tight shadow = slightly raised; large, blurry shadow = close to the user. Closer = more attention.
- Small: buttons (noticed but not dominating) — e.g. `0 1px 3px hsla(0,0%,0%,.2)`.
- Medium: dropdowns/popovers — e.g. `0 4px 6px hsla(0,0%,0%,.1)`.
- Large: modals — e.g. `0 15px 35px hsla(0,0%,0%,.2)`.
Decide where the element sits on the z-axis, then assign the shadow — don't design the shadow itself.
**Detect:** [measurable] Shadow size vs component role: modals/dropdowns with tiny or no shadow (feel flat, blend with page), buttons/cards with huge shadows; many unrelated shadow values (no system).
**Fix:** Define ~5 shadows (smallest and largest first, fill the middle roughly linearly) and map each component to one.
**Example:** "Publish" button flat (bad) vs small shadow (good); user dropdown with no shadow (bad) vs medium (good); password modal with weak shadow (bad) vs large (good).
_Source: principles/depth.md_

### DEP-05 · Shadows can have two parts
**Rule:** Combine (1) a larger, softer shadow with bigger y-offset and blur — cast by direct light — and (2) a tighter, darker shadow with small offset/blur — the ambient-occlusion area right under the object. This keeps the big shadow subtle while edges stay defined. The tight shadow fades as elevation increases: distinct at the lowest level, almost or fully invisible at the highest.
**Detect:** [measurable] Single, very diffuse shadows that leave card edges undefined; high-elevation elements (modals) with a strong tight shadow.
**Example:** Event card `0 4px 6px hsla(0,0%,0%,.07), 0 5px 15px hsla(0,0%,0%,.1)`. See the two-part scale at top.
_Source: principles/depth.md_

### IMG-05 · Don't scale down icons/logos either
**Rule:** Icons drawn large become choppy and fuzzy when shrunk; a 128px logo at 16px favicon size becomes mush. Redraw a simplified version at the target size.
**Detect:** [visual] Blurry or mushy small logos/favicons/icons downscaled from large artwork.
_Source: principles/images.md_

### FIN-02 · Add color with accent borders
**Rule:** A colored rectangle adds flair without graphic design skill. Places: across the top of a card; under the active nav item; along the left side of an alert; a short line under a headline; across the top of the whole layout.
**Detect:** [visual] Bland cards, alerts, nav, or pages with no brand color anywhere.
**Example:** Pricing card "Freelancer $12" plain vs same with a blue top border. Nav "Products" active in color only vs with a blue underline bar. "Pro user feature" alert with a blue left border.
_Source: principles/finishing.md_

### FIN-05 · Use fewer borders
**Rule:** Don't reach for a border first; too many make a design busy. Alternatives:
- **Box shadow** to outline an element more subtly (works when the element's color differs from the background), e.g. `0 5px 15px 0 hsla(0,0%,0%,.15)`.
- **Different background colors** for adjacent areas (e.g. search field and footer in hsl(200,10%,94%)); if you already use different backgrounds, drop the border.
- **Extra spacing** between groups (e.g. separating list rows with small gaps and highlighting the selected row with a tinted rounded background instead of row borders).
**Detect:** [measurable] Count elements with visible borders inside a component (card + header + search + every row + footer all bordered = flag). [visual] Grid-like, boxy feel.
**Example:** "Contacts" invite modal with borders around the card, search input, every row and the footer → shadow-outlined card, grey search and footer backgrounds, spaced rows with a tinted selected row.
_Source: principles/finishing.md_

### FIN-06 · Think outside the box
**Rule:** Components don't have to look like their conventional form:
- **Dropdowns:** sections, multiple columns, supporting text, colorful icons (e.g. Features menu with icon + title + description per item and a secondary links section).
- **Tables:** combine non-sortable related columns into one cell with hierarchy (name + role; amount + policy type); add images (avatars) and color (status badges).
- **Radio buttons:** when the choice is important, use selectable cards (e.g. plan picker: Hobby 1 GB / Growth 5 GB / Business 10 GB / Enterprise 20 GB with a highlighted selected card and check).
**Detect:** [visual] Plain link-list dropdowns in key navigation; tables with many single-value columns (Name | Role | Policy | Policy type | Location | Status); a key decision rendered as a bare radio list.
_Source: principles/finishing.md_

### PRO-01 · Start with a feature, not a layout
**Rule:** Design a concrete piece of functionality first (e.g. "search for a flight"), not the app shell (top nav vs sidebar, logo position, container width). Decide navigation last, once several features exist.
**Detect:** [visual] Shell/chrome dominates the screen while the primary task is buried.
**Fix:** In a redesign, rework the main feature of the screen first; propose navigation changes only after.
**Example:** Three blank app shells with "?" vs one flight-search card (from, to, depart, return, button) — the final page is just a hero with that card.
_Source: principles/process.md_
