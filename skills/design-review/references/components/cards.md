# Cards
_Containers with background, border or shadow grouping related content (product, profile, pricing, feed items, metric tiles)._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (31)

### HIE-02 · Size isn't everything — use weight and color
**Rule:** Don't rely on font size alone; it makes primary content too large and secondary content too small. Make primary elements bolder (allows a reasonable size) and secondary text a softer color (instead of tiny).
**Detect:** [measurable] Large size jumps at the same weight; secondary text below ~14px used to show it's unimportant; headings that are big but regular weight.
**Fix:** Reduce heading size and raise weight; raise tiny secondary text size and lower its contrast.
**Example:** Tour card. Bad: title 30px/400, description 16px/400, price 24px/400, footnote 14px/400, all same color. Good: title 24px/700, price 18px/700, description 18px grey hsl(201,23%,34%), footnote 16px light grey hsl(203,15%,47%), primary text dark hsl(202,57%,15%).
_Source: principles/hierarchy.md_

### HIE-04 · Don't use grey text on colored backgrounds
**Rule:** Grey-on-white works because it lowers contrast. On a colored background, lower contrast by hand-picking a color of the **same hue** as the background, adjusting saturation and lightness. Don't use plain grey, and don't use white with reduced opacity (looks dull, washed out, even disabled — and lets images/patterns show through the text).
**Detect:** [measurable] Text with grey color (saturation ≈ 0) or rgba/opacity < 1 on a non-neutral background.
**Fix:** Use a tint of the background hue, e.g. on teal background secondary text hsl(183,70%,84%).
**Example:** Testimonial card with teal footer: name in white, company in grey hsl(0,0%,78%) (bad), in hsla(0,0%,100%,0.6) (bad, pattern shows through), in hsl(183,70%,84%) (good).
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

### HIE-12 · Balance contrast with weight (thin borders)
**Rule:** When a low-contrast element is too subtle but darkening it looks harsh and noisy, increase its weight instead.
**Detect:** [measurable] 1px borders that are either very dark (harsh) or near-invisible.
**Fix:** Keep the soft color, increase width.
**Example:** Feed with left accent rules: 1px hsl(206,16%,74%) too dark; 1px hsl(210,23%,95%) too light; 2px hsl(210,23%,95%) balanced.
_Source: principles/hierarchy.md_

### HIE-13 · Semantics are secondary: design actions by hierarchy
**Rule:** Most pages have one primary action, a couple of secondary, a few tertiary. Primary: obvious — solid, high-contrast background. Secondary: clear but not prominent — outline or low-contrast background. Tertiary: discoverable but unobtrusive — styled as links. Works on light, dark and gradient backgrounds.
**Detect:** [measurable] Count solid high-contrast buttons per view/card (flag > 1). [visual] Buttons colored by semantics (red delete, blue edit, green publish) all at equal weight.
**Fix:** Pick the single primary action; demote others to outline/soft and link styles.
**Example:** Product listing card. Bad: red "Delete Listing", blue "Edit", green "Publish". Good: "Delete Listing" as a link, "Edit" light grey background, "Publish" solid.
_Source: principles/hierarchy.md_

### LAY-01 · Start with too much white space, then remove it
**Rule:** White space is usually *added* until something stops looking actively bad — that only gives the minimum. Start with way too much space and remove until happy. What feels "a little too much" for one element ends up "just enough" in the full UI.
**Detect:** [measurable] Card/section padding at the small end (≤ 12px around substantial content); headings touching the content below; groups with almost no separation. [visual] Cramped feel.
**Fix:** Increase padding and inter-group gaps by one or two scale steps, then reduce if needed.
**Example:** Two-factor setup card: cramped version with tight padding and a header crammed against the form vs. roomy version with generous padding and clear separation between header and "Setup your phone" section. Review widget: rating bars and "Review this product" with more vertical breathing room.
_Source: principles/layout-spacing.md_

### LAY-04 · You don't have to fill the whole screen
**Rule:** If content needs 600px, use 600px. Spreading things out or making them unnecessarily wide makes the UI harder to read; extra space at the edges never hurts. Applies to sections too: content doesn't need to be full-width just because the nav is. Give each element the space it needs — don't make it worse to match something else.
**Detect:** [measurable] Narrow-purpose content (forms, carts, login, single cards, reading text) stretched to full container width (e.g. > ~700px for a simple form). [visual] Labels far from their values (e.g. cart prices at the opposite edge of a wide screen).
**Fix:** Constrain the element with a max-width and center it (or place it in a column).
**Example:** Shopping cart stretched across a 1200px+ page (item, price and totals far apart) vs. same cart in a narrow centered column. Login card stays narrow under a full-width nav.
_Source: principles/layout-spacing.md_

### LAY-08 · Grids are overrated: not everything should be fluid
**Rule:** A 12-column grid is just constrained percentage widths. Don't treat it as a religion: many elements are better with a **fixed width** optimized for their content. Classic case: a sidebar at 25% grows uselessly on wide screens and shrinks below its usable minimum on narrow ones (awkward wrapping/truncation). Give the sidebar a fixed width and let the main area flex, with its own internal grid. Same inside components: don't use percentages unless you actually want the thing to scale.
**Detect:** [measurable] Sidebars, avatars, thumbnails, icons or images sized with % widths. [visual] Sidebar text wrapping/truncating at narrow widths, or sidebar oversized at wide widths.
**Fix:** Fixed width for sidebar / media; flexible width for main content.
**Example:** Invoices dashboard: fixed-width dark sidebar; main area shows 4 or 2 invoice cards depending on space. Comment cards keep a fixed avatar width while the text area flexes.
_Source: principles/layout-spacing.md_

### LAY-09 · Don't shrink an element until you need to
**Rule:** Don't size components by grid columns (e.g. login card = 6 of 12 columns, 8 on medium screens) — fluid columns can make it *wider* on medium screens than on large ones. If ~500px is optimal, use `max-width` and let it shrink only when the screen is narrower than that.
**Detect:** [measurable] Cards/forms/modals with %-based widths instead of max-width.
**Fix:** `width: 100%; max-width: <optimal>px`.
**Example:** "Welcome Back!" login card stays at its optimal width on large and medium screens and only narrows on phones.
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

### DEP-05 · Shadows can have two parts
**Rule:** Combine (1) a larger, softer shadow with bigger y-offset and blur — cast by direct light — and (2) a tighter, darker shadow with small offset/blur — the ambient-occlusion area right under the object. This keeps the big shadow subtle while edges stay defined. The tight shadow fades as elevation increases: distinct at the lowest level, almost or fully invisible at the highest.
**Detect:** [measurable] Single, very diffuse shadows that leave card edges undefined; high-elevation elements (modals) with a strong tight shadow.
**Example:** Event card `0 4px 6px hsla(0,0%,0%,.07), 0 5px 15px hsla(0,0%,0%,.1)`. See the two-part scale at top.
_Source: principles/depth.md_

### DEP-06 · Even flat designs can have depth
**Rule:** Without shadows/gradients, convey depth with:
- **Color:** lighter than the background = closer/raised; darker = farther/inset.
- **Solid shadows:** short vertical offset, no blur (e.g. `0 3px 0 hsl(220,7%,83%)`) lifts cards or buttons while keeping a flat look.
**Detect:** [visual] Flat UIs where raised/inset areas are indistinguishable from the page (same color as background, no shadow).
**Example:** Login form: white card (raised) on light grey page; "Don't have an account? Get Started" strip darker than the page (inset). Shopping-cart rows with solid bottom shadows.
_Source: principles/depth.md_

### DEP-07 · Overlap elements to create layers
**Rule:** Overlapping creates strong depth:
- Offset a card so it crosses the boundary between two backgrounds (e.g. search card on a hero with `margin-bottom: -60px`).
- Make an element taller than its parent so it overflows both sides (e.g. pricing card with `margin: -50px 0`).
- Overlap small controls (carousel arrows hanging off the card edges, `margin-left/right: -24px`).
- Overlapping images clash unless separated by an "invisible border" matching the background (e.g. avatar over cover photo with `border: 4px solid #fff`).
**Detect:** [visual] Hero + search/form card fully boxed inside the hero; overlapping avatars/images touching without a gap.
_Source: principles/depth.md_

### IMG-01 · Use good photos
**Rule:** Bad photos ruin an otherwise great design. Hire a professional for specific needs, or use high-quality stock (e.g. Unsplash). Never design with placeholders expecting to swap in smartphone photos later.
**Detect:** [visual] Dim, badly lit, poorly composed or low-resolution photos; inconsistent photo styles in one grid.
**Example:** Same apartment listing card: dim, cluttered bedroom photo vs bright, well-composed one.
_Source: principles/images.md_

### IMG-02 · Text on images needs consistent contrast
**Rule:** Photos have light and dark areas; any single text color gets lost somewhere. The problem is the image, not the text — reduce its dynamics:
- **Overlay:** semi-transparent black (light text) or white (dark text), e.g. `hsla(0,0%,0%,.55)`. Darkens/lightens the whole image.
- **Lower image contrast** (e.g. contrast −70%, brightness +40% for dark text), adjusting brightness to compensate.
- **Colorize:** lower contrast → desaturate → solid fill with multiply blend (e.g. brand blue #035581). Also ties the image to brand colors.
- **Text shadow as glow:** large blur, no offset (e.g. `text-shadow: 0 0 50px hsla(0,0%,0%,.4)`); combine with a milder contrast reduction to keep more image dynamics.
**Detect:** [visual] Hero headlines/CTAs partially unreadable over busy photos. [measurable] Text over background-image with no overlay, filter, or text-shadow.
_Source: principles/images.md_

### IMG-03 · Everything has an intended size: don't scale up icons
**Rule:** Icons drawn at 16–24px look chunky and lack detail at 3–4× size, even as SVG. If only small icons are available, enclose them in a shape with a background color (e.g. a tinted circle) so the glyph stays near its intended size while filling the space. Or use icons drawn for large sizes.
**Detect:** [measurable] Icons rendered ≥ ~2× typical UI size (e.g. 48px+) from a small-icon set. [visual] Chunky, oversimplified large icons.
**Example:** Feature row (Automatic rebalancing / Dividend reinvesting / Advice) with big bare icons → small icons inside light colored circles.
_Source: principles/images.md_

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

### FIN-01 · Supercharge the defaults
**Rule:** Liven up existing elements instead of adding new ones:
- Replace list bullets with icons — checkmarks/arrows generically, or content-specific (padlock for security features), often in a tinted circle.
- Promote testimonial quote marks into visual elements: larger and in a soft accent color.
- Style links: color + weight, or a thick colorful custom underline that partially overlaps the text.
- Custom checkboxes and radios using a brand color for selected states instead of browser defaults.
**Detect:** [visual] Plain browser-default bullets, checkboxes, radios; plain text-only quotes; default blue underlined links in a branded UI.
_Source: principles/finishing.md_

### FIN-02 · Add color with accent borders
**Rule:** A colored rectangle adds flair without graphic design skill. Places: across the top of a card; under the active nav item; along the left side of an alert; a short line under a headline; across the top of the whole layout.
**Detect:** [visual] Bland cards, alerts, nav, or pages with no brand color anywhere.
**Example:** Pricing card "Freelancer $12" plain vs same with a blue top border. Nav "Products" active in color only vs with a blue underline bar. "Pro user feature" alert with a blue left border.
_Source: principles/finishing.md_

### FIN-03 · Decorate your backgrounds
**Rule:** When a well-structured design still feels plain, add interest to a few backgrounds:
- **Change the background color** to emphasize a panel (e.g. highlighted "Premium" pricing card in solid indigo) or to distinguish page sections (colored hero, dark features band).
- **Slight gradient:** two hues ≤ ~30° apart.
- **Subtle repeating pattern** (e.g. Hero Patterns), full background or along one edge, with low contrast.
- **Simple shape or illustration** placed in specific spots: geometric shapes, a chunk of pattern, a simplified world map — keep contrast low so nothing interferes with content.
**Detect:** [visual] Long landing pages where every section is white; featured/recommended option not visually distinct.
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

### PER-03 · Border radius sets the tone — and must be consistent
**Rule:** Small radius = neutral. Large/pill = playful. None = serious, formal. Never mix square and rounded corners on equivalent components.
**Detect:** [measurable] Distinct border-radius values on buttons, inputs, cards, modals. Flags: 0 and large radii mixed on equivalent elements; many near-identical values.
**Fix:** Pick one style matching the personality and a short scale (e.g. small / medium / full) applied consistently.
**Example:** Square "Learn more" button for a venture fund (formal); pill buttons and very round metric cards for a startup dashboard (playful).
_Source: principles/personality.md_
