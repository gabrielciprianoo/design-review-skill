# Buttons & actions
_Clickable actions: buttons, button groups, links styled as buttons, icon buttons, CTAs._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (16)

### HIE-04 · Don't use grey text on colored backgrounds
**Rule:** Grey-on-white works because it lowers contrast. On a colored background, lower contrast by hand-picking a color of the **same hue** as the background, adjusting saturation and lightness. Don't use plain grey, and don't use white with reduced opacity (looks dull, washed out, even disabled — and lets images/patterns show through the text).
**Detect:** [measurable] Text with grey color (saturation ≈ 0) or rgba/opacity < 1 on a non-neutral background.
**Fix:** Use a tint of the background hue, e.g. on teal background secondary text hsl(183,70%,84%).
**Example:** Testimonial card with teal footer: name in white, company in grey hsl(0,0%,78%) (bad), in hsla(0,0%,100%,0.6) (bad, pattern shows through), in hsl(183,70%,84%) (good).
_Source: principles/hierarchy.md_

### HIE-11 · Balance weight with contrast (icons)
**Rule:** Heavy elements (solid icons, bold shapes) feel emphasized because they cover more surface area. Counterbalance by lowering contrast (softer color).
**Detect:** [visual] Solid icons next to text that visually overpower their labels.
**Fix:** Give icons a softer color than the text.
**Example:** Sidebar menu: icons hsl(212,20%,13%) same as text (bad) → icons hsl(212,20%,68%), text hsl(212,20%,13%) (good).
_Source: principles/hierarchy.md_

### HIE-13 · Semantics are secondary: design actions by hierarchy
**Rule:** Most pages have one primary action, a couple of secondary, a few tertiary. Primary: obvious — solid, high-contrast background. Secondary: clear but not prominent — outline or low-contrast background. Tertiary: discoverable but unobtrusive — styled as links. Works on light, dark and gradient backgrounds.
**Detect:** [measurable] Count solid high-contrast buttons per view/card (flag > 1). [visual] Buttons colored by semantics (red delete, blue edit, green publish) all at equal weight.
**Fix:** Pick the single primary action; demote others to outline/soft and link styles.
**Example:** Product listing card. Bad: red "Delete Listing", blue "Edit", green "Publish". Good: "Delete Listing" as a link, "Edit" light grey background, "Publish" solid.
_Source: principles/hierarchy.md_

### HIE-14 · Destructive actions aren't automatically big and red
**Rule:** If a destructive action isn't the page's primary action, give it secondary (red outline/text) or tertiary (link) treatment. Use big, red, bold styling in the confirmation step, where it *is* the primary action.
**Detect:** [visual] Solid red destructive buttons on pages where deletion isn't the main task; confirmation dialogs where the destructive action is NOT the visually primary button.
**Example:** "Unpublish" as solid red / red outline / plain link depending on rank. Confirmation modal "Deactivate account": explanatory text, "Cancel" as plain text, "Deactivate" solid red.
_Source: principles/hierarchy.md_

### LAY-11 · Scale component properties independently
**Rule:** Don't define padding in terms of font size so components zoom proportionally. Larger variants should get disproportionately more generous padding, smaller ones disproportionately tighter, so a large button *feels* large instead of zoomed.
**Detect:** [measurable] Button size variants where padding is an exact constant ratio of font-size.
**Example:** Proportional (bad): 20px font/15×20 padding, 16px/12×16, 14px/10.5×14, 12px/9×12. Independent (good): 20px font / 15px 30px padding, 16px / 12px 16px, 14px / 8px 10px, 12px / 6px 8px.
_Source: principles/layout-spacing.md_

### TYP-11 · Use letter-spacing effectively
**Rule:** Generally trust the typeface designer and leave it alone, except:
- **Tighten headlines** set in fonts designed for small sizes (wide spacing, e.g. Open Sans): ~`letter-spacing: -0.05em` mimics a headline font (e.g. Oswald). Don't do the reverse — headline fonts rarely work small even with more spacing.
- **Widen all-caps text:** caps all share the same height, so default spacing reduces legibility. Add ~`letter-spacing: 0.05em`.
**Detect:** [measurable] text-transform: uppercase (or all-caps strings) with letter-spacing ≤ 0; large headings in text fonts with default spacing.
_Source: principles/typography.md_

### COL-05 · Use perceived brightness: rotate hue to lighten/darken
**Rule:** Each hue has inherent perceived brightness (yellow at L50% looks much lighter than blue at L50%). Formula: √(0.299r² + 0.587g² + 0.114b²) / 255. Local minima: red 0°, green 120°, blue 240°; maxima: yellow 60°, cyan 180°, magenta 300°. Changing only lightness moves a color toward white/black and loses intensity. Instead: **to lighten, rotate hue toward 60°/180°/300°; to darken, rotate toward 0°/120°/240°.** Keep rotation ≤ 20–30°. Can be combined with lightness changes.
**Detect:** [visual] Light/dark shades of a hue that look dull, muddy or brownish (especially yellows/oranges darkened by lightness only).
**Example:** Play-icon gradient hsl(210,100%,75%)→hsl(210,100%,50%) (lightness only) vs hsl(190,100%,50%)→hsl(210,100%,50%) (hue rotation, more vivid). Yellow scale: darkening by lightness alone turns dull brown; rotating toward orange gives warm, rich darks. Testimonial: background hsl(221,49%,33%), text hsl(194,49%,73%).
_Source: principles/color.md_

### COL-07 · Accessible doesn't have to mean ugly
**Rule:** WCAG: normal text (< ~18px) contrast ≥ 4.5:1; large text ≥ 3:1. Easy for dark-on-light; hard with color.
- **Flip the contrast:** white text on a colored background needs a very dark color to pass, which makes secondary elements (badges, status pills) grab too much attention. Use dark colored text on a light tinted background instead.
- **Rotate the hue for colored text on colored backgrounds:** lightening/desaturating the background color forces you near white. Rotate toward a bright hue (cyan, magenta, yellow) to gain contrast while staying colorful.
**Detect:** [measurable] Contrast ratio for every text node vs its effective background; flag < 4.5:1 (< 3:1 for ≥ 18px or bold ≥ 14px). [visual] Dark solid badges/pills overpowering a table.
**Example:** Status badges "Approved / Awaiting Approval / Declined": white on bright green/yellow/pink fails (2.25, 1.56, 3.14); white on dark versions passes (~5–6) but is too loud; dark text on light tints passes AAA (9.0, 9.8, 12.3) and stays calm. Help panel bg hsl(240,34%,34%): secondary text hsl(240,44%,89%) is AAA but looks almost like the white headline; hsl(188,100%,85%) is AAA and clearly distinct.
_Source: principles/color.md_

### DEP-01 · Emulate a light source: light comes from above
**Rule:** Raised surfaces have a lighter top edge and a shadow below; inset surfaces have a shadow at the top and a lighter bottom lip. Users look slightly down at screens, so:
- **Raised** (e.g. button): reveal a slightly lighter top edge (top border or `inset 0 1px 0 <lighter hand-picked color>`) plus a small, sharp, dark shadow below (`0 1px 3px hsla(0,0%,0%,.2)`). Keep blur to a couple of px. Hand-pick the highlight color — semi-transparent white sucks saturation.
- **Inset** (wells, text inputs, checkboxes): lighter bottom lip (`0 -2px 0 hsla(0,0%,100%,.15)` or bottom border) plus a small dark inset shadow at the top (`inset 0 2px 2px hsla(0,0%,0%,.1)`).
**Detect:** [measurable] box-shadow on buttons/inputs: inverted light direction (highlight at bottom of raised elements), huge blur on small raised elements, white-alpha highlights.
**Example:** "Create Account" button gets `inset 0 1px 0 hsl(224,84%,74%)` + `0 1px 3px hsla(0,0%,0%,.2)`. Dark "drag and drop to upload" well and newsletter input/checkbox get the inset treatment.
_Source: principles/depth.md_

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

### DEP-04 · Combine shadows with interaction
**Rule:** Use elevation changes as feedback: raise a draggable item (add shadow) when grabbed so it pops above the list; make a button feel pressed by reducing/removing its shadow on click (e.g. `0 4px 6px` → `0 1px 3px`).
**Detect:** [visual] Draggable rows with no lift; pressed states identical to rest state.
_Source: principles/depth.md_

### DEP-06 · Even flat designs can have depth
**Rule:** Without shadows/gradients, convey depth with:
- **Color:** lighter than the background = closer/raised; darker = farther/inset.
- **Solid shadows:** short vertical offset, no blur (e.g. `0 3px 0 hsl(220,7%,83%)`) lifts cards or buttons while keeping a flat look.
**Detect:** [visual] Flat UIs where raised/inset areas are indistinguishable from the page (same color as background, no shadow).
**Example:** Login form: white card (raised) on light grey page; "Don't have an account? Get Started" strip darker than the page (inset). Shopping-cart rows with solid bottom shadows.
_Source: principles/depth.md_

### IMG-03 · Everything has an intended size: don't scale up icons
**Rule:** Icons drawn at 16–24px look chunky and lack detail at 3–4× size, even as SVG. If only small icons are available, enclose them in a shape with a background color (e.g. a tinted circle) so the glyph stays near its intended size while filling the space. Or use icons drawn for large sizes.
**Detect:** [measurable] Icons rendered ≥ ~2× typical UI size (e.g. 48px+) from a small-icon set. [visual] Chunky, oversimplified large icons.
**Example:** Feature row (Automatic rebalancing / Dividend reinvesting / Advice) with big bare icons → small icons inside light colored circles.
_Source: principles/images.md_

### PER-02 · Color sets the tone
**Rule:** Choose by how colors feel. Blue = safe, familiar. Gold/beige = expensive, sophisticated. Pink = fun, less serious.
**Detect:** [visual] Brand/action color contradicts the product's tone.
_Source: principles/personality.md_

### PER-03 · Border radius sets the tone — and must be consistent
**Rule:** Small radius = neutral. Large/pill = playful. None = serious, formal. Never mix square and rounded corners on equivalent components.
**Detect:** [measurable] Distinct border-radius values on buttons, inputs, cards, modals. Flags: 0 and large radii mixed on equivalent elements; many near-identical values.
**Fix:** Pick one style matching the personality and a short scale (e.g. small / medium / full) applied consistently.
**Example:** Square "Learn more" button for a venture fund (formal); pill buttons and very round metric cards for a startup dashboard (playful).
_Source: principles/personality.md_

### SYS-02 · Decide by process of elimination
**Rule:** Guess the best value, then compare it with its neighbors on the scale. If both neighbors look clearly wrong, keep the middle; if a neighbor wins, repeat with it as the new middle.
**Detect:** [measurable] Icon/avatar sizes that aren't steps of a scale (e.g. 18, 22, 25px).
**Example:** Icon scale 12/16/24/32px for a "Bookmark" button: 12 too small, 24 too big → 16.
**Fix:** Justify each proposed size as the scale step that beats its neighbors.
_Source: principles/systems.md_
