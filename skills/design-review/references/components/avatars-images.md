# Avatars & images
_Photos, avatars, thumbnails, icons, illustrations, screenshots, user-uploaded media._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (8)

### LAY-08 · Grids are overrated: not everything should be fluid
**Rule:** A 12-column grid is just constrained percentage widths. Don't treat it as a religion: many elements are better with a **fixed width** optimized for their content. Classic case: a sidebar at 25% grows uselessly on wide screens and shrinks below its usable minimum on narrow ones (awkward wrapping/truncation). Give the sidebar a fixed width and let the main area flex, with its own internal grid. Same inside components: don't use percentages unless you actually want the thing to scale.
**Detect:** [measurable] Sidebars, avatars, thumbnails, icons or images sized with % widths. [visual] Sidebar text wrapping/truncating at narrow widths, or sidebar oversized at wide widths.
**Fix:** Fixed width for sidebar / media; flexible width for main content.
**Example:** Invoices dashboard: fixed-width dark sidebar; main area shows 4 or 2 invoice cards depending on space. Comment cards keep a fixed avatar width while the text area flexes.
_Source: principles/layout-spacing.md_

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

### IMG-04 · Don't scale down screenshots
**Rule:** A full-size screenshot shrunk 70% turns 16px text into 4px mush. Instead: screenshot a smaller layout (tablet) and give it more space; show a **partial** screenshot of the relevant area; or draw a **simplified illustration** of the UI with small text replaced by lines.
**Detect:** [visual] Marketing screenshots with unreadable text.
_Source: principles/images.md_

### IMG-05 · Don't scale down icons/logos either
**Rule:** Icons drawn large become choppy and fuzzy when shrunk; a 128px logo at 16px favicon size becomes mush. Redraw a simplified version at the target size.
**Detect:** [visual] Blurry or mushy small logos/favicons/icons downscaled from large artwork.
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
