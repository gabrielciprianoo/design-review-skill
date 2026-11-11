# Headers & hero sections
_Page titles, section headings, landing-page heroes, marketing sections, feature rows._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (25)

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

### HIE-10 · Separate visual hierarchy from document hierarchy
**Rule:** Choose HTML elements (h1, h2…) for semantics; style them for visual hierarchy. In app UIs, section titles often act as labels and should be small; the content is the focus. A title can even be visually hidden (kept for accessibility) if content speaks for itself.
**Detect:** [measurable] Page/section titles in app UIs styled with large browser-default heading sizes that dominate the content.
**Fix:** Shrink titles to label-like sizes.
**Example:** "Manage Account" h1 at 24px (bad) → 16px (good), with tabs and form as the focus.
_Source: principles/hierarchy.md_

### HIE-13 · Semantics are secondary: design actions by hierarchy
**Rule:** Most pages have one primary action, a couple of secondary, a few tertiary. Primary: obvious — solid, high-contrast background. Secondary: clear but not prominent — outline or low-contrast background. Tertiary: discoverable but unobtrusive — styled as links. Works on light, dark and gradient backgrounds.
**Detect:** [measurable] Count solid high-contrast buttons per view/card (flag > 1). [visual] Buttons colored by semantics (red delete, blue edit, green publish) all at equal weight.
**Fix:** Pick the single primary action; demote others to outline/soft and link styles.
**Example:** Product listing card. Bad: red "Delete Listing", blue "Edit", green "Publish". Good: "Delete Listing" as a link, "Edit" light grey background, "Publish" solid.
_Source: principles/hierarchy.md_

### LAY-10 · Relative sizing doesn't scale
**Rule:** Don't lock sizes to each other with em ratios across screen sizes. Large elements must shrink *faster* than small ones; the difference between small and large elements should be less extreme on small screens.
**Detect:** [measurable] Headlines defined as large em multiples of body text that become oversized on mobile.
**Fix:** Set sizes independently per breakpoint.
**Example:** Article: desktop body 18px / headline 45px (2.5em). Mobile body 14px → 2.5em = 35px, way too big. Better mobile headline 20–24px (only 1.5–1.7× body).
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

### TYP-06 · Baseline, not center
**Rule:** When mixing font sizes on one line (big card title + small actions), align by **baseline**, not vertical center. Center-aligned mixed sizes have offset baselines, which looks awkward — especially when close together.
**Detect:** [measurable] Flex rows containing text of different font-sizes with `align-items: center`.
**Fix:** `align-items: baseline`.
**Example:** "Who to follow" card header with "Refresh · See all": center alignment (bad) vs baseline alignment (good).
_Source: principles/typography.md_

### TYP-08 · Line-height is inversely proportional to font size
**Rule:** Small text needs taller line-height; large text needs less. Large headlines can use line-height 1.
**Detect:** [measurable] Small body text (≤ 14px) with line-height ≤ 1.3; large headings (≥ ~30px) with line-height ≥ 1.5 (looks gappy when wrapping).
**Example:** Small paragraph 1.25 (bad) → 1.75 (good). Two-line serif headline 1.5 (bad) → 1 (good).
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

### COL-04 · Don't let lightness kill your saturation
**Rule:** Saturation looks weaker near 0% and 100% lightness. Increase saturation as shades move away from 50% lightness, or light/dark shades look washed out (matters most on large areas).
**Detect:** [measurable] Light tints / dark shades with the same or lower saturation than the base, looking greyish.
**Fix:** Raise saturation for the extremes of the scale (U-shaped saturation curve).
_Source: principles/color.md_

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

### IMG-04 · Don't scale down screenshots
**Rule:** A full-size screenshot shrunk 70% turns 16px text into 4px mush. Instead: screenshot a smaller layout (tablet) and give it more space; show a **partial** screenshot of the relevant area; or draw a **simplified illustration** of the UI with small text replaced by lines.
**Detect:** [visual] Marketing screenshots with unreadable text.
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

### PER-01 · Font sets the tone
**Rule:** Elegant/classic → serif. Playful → rounded sans serif. Plain/neutral (let other elements carry personality) → neutral sans serif.
**Detect:** [measurable] font-family in use. [visual] Does it contradict the product's tone (ornate serif in a dev tool, rounded sans in a bank)?
**Fix:** Pick a family matching the target personality.
**Example:** Serif (Freight Text) for a bookkeeping site; rounded sans (Proxima Soft) with pill buttons for an icon set; neutral sans (Freight Sans) for a coworking brand.
_Source: principles/personality.md_

### PER-02 · Color sets the tone
**Rule:** Choose by how colors feel. Blue = safe, familiar. Gold/beige = expensive, sophisticated. Pink = fun, less serious.
**Detect:** [visual] Brand/action color contradicts the product's tone.
_Source: principles/personality.md_
