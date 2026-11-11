# Tables & lists
_Data tables, list views, feeds, row-based collections, spec sheets, search results._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (23)

### HIE-01 · Not all elements are equal
**Rule:** Deliberately de-emphasize secondary and tertiary information and highlight what matters most. When everything competes for attention the UI reads as a noisy wall of content.
**Detect:** [visual] Squint/blur test: is there one clear focal point per region? Flags: every text the same size/weight/color; every row's actions colored; all data given equal emphasis.
**Fix:** Rank content (primary / secondary / tertiary) and apply HIE-02…HIE-05. Colors, fonts and layout can stay the same.
**Example:** Brokerage dashboard. Bad: balances as plain "Label: value" text, blue Buy + red Sell buttons on every holdings row. Good: balances in one colored summary panel with small uppercase labels and large values, row actions as neutral outline buttons, active tab as a pill.
_Source: principles/hierarchy.md_

### HIE-06 · Labels are a last resort
**Rule:** Avoid naive "Label: value" display for data. Format often identifies the data (email, phone, price); context does too ("Customer Support" under a name is obviously the department). Without labels you can emphasize what matters.
**Detect:** [visual] Stacks of "Name:", "Email:", "Phone:" labels with all values at equal emphasis.
**Fix:** Drop self-evident labels, then style by importance (name prominent, department colored/secondary, contact info muted).
**Example:** Employee card with Name/Job Title/Email/Phone labels → name, "Customer Support" in accent color, email and phone in grey, no labels.
_Source: principles/hierarchy.md_

### HIE-07 · Combine labels and values
**Rule:** When data isn't clear alone, add clarifying text to the value instead of a label.
**Detect:** [visual] Data shown as "Label: value" pairs that could read as one phrase ("In stock: 12", "Bedrooms: 3").
**Example:** "In stock: 12" → "12 left in stock". "Bedrooms: 3 · Bathrooms: 2" → icon + "3 bedrooms", icon + "2 bathrooms".
**Fix:** Merge label and value into one phrase so each unit can be styled meaningfully.
_Source: principles/hierarchy.md_

### HIE-08 · When labels are needed, treat them as secondary
**Rule:** For scannable repeated data (dashboards), keep labels but de-emphasize them: smaller, lower contrast, lighter weight, or a mix. The data is what matters.
**Detect:** [measurable] In metric tiles, label font-size/weight ≥ the value's; label same color as value.
**Example:** Heart-rate widget. Bad: "Heart rate" bold, "82 BPM" small regular. Good: "HEART RATE" small uppercase grey, "82" large bold, "BPM" small.
_Source: principles/hierarchy.md_

### HIE-09 · Emphasize the label when users scan for it
**Rule:** On information-dense pages where users look for the label (e.g. tech specs: they scan for "Depth", not "7.6mm"), emphasize the label — but don't bury the data: darker label, slightly lighter value is enough.
**Detect:** [visual] Spec/settings pages where users scan for labels but labels are faint and values dominate.
**Example:** Specs table: section "Dimensions" bold; "Height:" bold dark, "2.31 inches (58.6 mm)" regular grey.
_Source: principles/hierarchy.md_

### HIE-11 · Balance weight with contrast (icons)
**Rule:** Heavy elements (solid icons, bold shapes) feel emphasized because they cover more surface area. Counterbalance by lowering contrast (softer color).
**Detect:** [visual] Solid icons next to text that visually overpower their labels.
**Fix:** Give icons a softer color than the text.
**Example:** Sidebar menu: icons hsl(212,20%,13%) same as text (bad) → icons hsl(212,20%,68%), text hsl(212,20%,13%) (good).
_Source: principles/hierarchy.md_

### HIE-12 · Balance contrast with weight (thin borders)
**Rule:** When a low-contrast element is too subtle but darkening it looks harsh and noisy, increase its weight instead.
**Detect:** [measurable] 1px borders that are either very dark (harsh) or near-invisible.
**Fix:** Keep the soft color, increase width.
**Example:** Feed with left accent rules: 1px hsl(206,16%,74%) too dark; 1px hsl(210,23%,95%) too light; 2px hsl(210,23%,95%) balanced.
_Source: principles/hierarchy.md_

### LAY-02 · Dense UIs have their place — deliberately
**Rule:** Compact layouts are fine when lots of information must be visible at once (e.g. dashboards, sports stats), but density must be a deliberate decision, not the default.
**Detect:** [visual] Is the density justified by the need to see much data at once? If not, apply LAY-01.
**Example:** Hockey game summary: team stats, scoring and player table packed tightly on one screen — acceptable.
_Source: principles/layout-spacing.md_

### LAY-04 · You don't have to fill the whole screen
**Rule:** If content needs 600px, use 600px. Spreading things out or making them unnecessarily wide makes the UI harder to read; extra space at the edges never hurts. Applies to sections too: content doesn't need to be full-width just because the nav is. Give each element the space it needs — don't make it worse to match something else.
**Detect:** [measurable] Narrow-purpose content (forms, carts, login, single cards, reading text) stretched to full container width (e.g. > ~700px for a simple form). [visual] Labels far from their values (e.g. cart prices at the opposite edge of a wide screen).
**Fix:** Constrain the element with a max-width and center it (or place it in a column).
**Example:** Shopping cart stretched across a 1200px+ page (item, price and totals far apart) vs. same cart in a narrow centered column. Login card stays narrow under a full-width nav.
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

### TYP-10 · Align with readability in mind
**Rule:**
- Left-align most text (match the language direction).
- Center only headlines or short independent blocks; anything longer than 2–3 lines should be left-aligned. If one of several centered blocks is too long, rewrite it shorter (also improves consistency).
- **Right-align numbers in tables** so decimals line up and values are easy to compare.
- Justified text needs `hyphens: auto` to avoid word gaps; reserve it for print-like/formal looks.
**Detect:** [measurable] text-align: center on blocks > 3 lines; numeric table columns not right-aligned; text-align: justify without hyphens.
**Example:** Feature trio with one description much longer than the others → shortened so all three are 2 lines. Stock table: Price/Chg/Mkt cap left-aligned (bad) vs right-aligned (good).
_Source: principles/typography.md_

### TYP-11 · Use letter-spacing effectively
**Rule:** Generally trust the typeface designer and leave it alone, except:
- **Tighten headlines** set in fonts designed for small sizes (wide spacing, e.g. Open Sans): ~`letter-spacing: -0.05em` mimics a headline font (e.g. Oswald). Don't do the reverse — headline fonts rarely work small even with more spacing.
- **Widen all-caps text:** caps all share the same height, so default spacing reduces legibility. Add ~`letter-spacing: 0.05em`.
**Detect:** [measurable] text-transform: uppercase (or all-caps strings) with letter-spacing ≤ 0; large headings in text fonts with default spacing.
_Source: principles/typography.md_

### COL-07 · Accessible doesn't have to mean ugly
**Rule:** WCAG: normal text (< ~18px) contrast ≥ 4.5:1; large text ≥ 3:1. Easy for dark-on-light; hard with color.
- **Flip the contrast:** white text on a colored background needs a very dark color to pass, which makes secondary elements (badges, status pills) grab too much attention. Use dark colored text on a light tinted background instead.
- **Rotate the hue for colored text on colored backgrounds:** lightening/desaturating the background color forces you near white. Rotate toward a bright hue (cyan, magenta, yellow) to gain contrast while staying colorful.
**Detect:** [measurable] Contrast ratio for every text node vs its effective background; flag < 4.5:1 (< 3:1 for ≥ 18px or bold ≥ 14px). [visual] Dark solid badges/pills overpowering a table.
**Example:** Status badges "Approved / Awaiting Approval / Declined": white on bright green/yellow/pink fails (2.25, 1.56, 3.14); white on dark versions passes (~5–6) but is too loud; dark text on light tints passes AAA (9.0, 9.8, 12.3) and stays calm. Help panel bg hsl(240,34%,34%): secondary text hsl(240,44%,89%) is AAA but looks almost like the white headline; hsl(188,100%,85%) is AAA and clearly distinct.
_Source: principles/color.md_

### COL-08 · Don't rely on color alone
**Rule:** Color-blind users can't decode meaning carried only by color. Add another signal (icons, text, shape). For multi-series charts, prefer **contrast** (light vs dark shades of one hue) over distinct hues. Color should support what the design already says, never be the only channel.
**Detect:** [visual] Positive/negative changes shown only as green vs red; status shown only by dot color; chart series distinguished only by hue; required/error fields marked only in red.
**Fix:** Add ↑/↓ icons or +/− signs, labels, patterns; use a single-hue light-to-dark chart palette.
**Example:** Metric cards "1.4%" green / "11.1%" red look identical under red-green blindness → add up/down arrows. Leads donut in blue/green/orange becomes ambiguous for blue-yellow blindness → three shades of blue (light/medium/dark) remain distinct.
_Source: principles/color.md_

### DEP-04 · Combine shadows with interaction
**Rule:** Use elevation changes as feedback: raise a draggable item (add shadow) when grabbed so it pops above the list; make a button feel pressed by reducing/removing its shadow on click (e.g. `0 4px 6px` → `0 1px 3px`).
**Detect:** [visual] Draggable rows with no lift; pressed states identical to rest state.
_Source: principles/depth.md_

### IMG-06 · Control the shape and size of user-uploaded images
**Rule:** User images at intrinsic aspect ratios wreck grids. Center them in fixed containers and crop the overflow (`object-fit: cover` or `background-size: cover`).
**Detect:** [measurable] `<img>` in repeated cards/lists without fixed aspect ratio or object-fit; mismatched heights across a grid.
**Example:** Burger recipe grid with tall, short and wide photos breaking alignment → all cropped to the same box.
_Source: principles/images.md_

### IMG-07 · Prevent background bleed on user images
**Rule:** When an uploaded image's background resembles the UI background, the image loses its shape. Don't fix it with a visible border (clashes with image colors); use a subtle inner shadow `box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.1)` or a semi-transparent inner border.
**Detect:** [visual] Light avatars/photos dissolving into white backgrounds.
**Example:** Chat list avatars with white backgrounds blending into the white list; `border: 2px solid hsl(212,12%,72%)` looks heavy; the inset 1px shadow is barely noticeable yet defines the shape.
_Source: principles/images.md_

### FIN-04 · Don't overlook empty states
**Rule:** For features depending on user-generated content, the empty state is the user's first impression — design it as a priority. Include an image/illustration to grab attention and emphasize the call-to-action. Hide supporting UI (tabs, filters, search) that does nothing until content exists.
**Detect:** [visual] Bare "No contacts found." text; empty tables still showing filters, tabs and search; CTA not prominent.
**Example:** Contacts screen "No contacts found." → avatar illustration + "Add a new contact and start messaging." + primary "Add contact" button. Discounts page with tabs/filters/search around an empty list → just a headline "Create a discount code", short description, primary button, and a large faint illustration.
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

### PRO-05 · Work in cycles; test edge cases on real UI
**Rule:** Design a simple version, build it, iterate on the working UI, then move to the next feature. Edge cases are easier to solve in a usable interface.
**Detect:** [visual] When auditing, stress real-data edge cases: long lists (2000 contacts), long text, error states, empty states, collisions (two events at the same time).
_Source: principles/process.md_
