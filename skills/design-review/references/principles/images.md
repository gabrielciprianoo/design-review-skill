# Images

### IMG-01 · Use good photos
**Rule:** Bad photos ruin an otherwise great design. Hire a professional for specific needs, or use high-quality stock (e.g. Unsplash). Never design with placeholders expecting to swap in smartphone photos later.
**Detect:** [visual] Dim, badly lit, poorly composed or low-resolution photos; inconsistent photo styles in one grid.
**Example:** Same apartment listing card: dim, cluttered bedroom photo vs bright, well-composed one.
**Applies to:** avatars-images, cards, headers-hero

### IMG-02 · Text on images needs consistent contrast
**Rule:** Photos have light and dark areas; any single text color gets lost somewhere. The problem is the image, not the text — reduce its dynamics:
- **Overlay:** semi-transparent black (light text) or white (dark text), e.g. `hsla(0,0%,0%,.55)`. Darkens/lightens the whole image.
- **Lower image contrast** (e.g. contrast −70%, brightness +40% for dark text), adjusting brightness to compensate.
- **Colorize:** lower contrast → desaturate → solid fill with multiply blend (e.g. brand blue #035581). Also ties the image to brand colors.
- **Text shadow as glow:** large blur, no offset (e.g. `text-shadow: 0 0 50px hsla(0,0%,0%,.4)`); combine with a milder contrast reduction to keep more image dynamics.
**Detect:** [visual] Hero headlines/CTAs partially unreadable over busy photos. [measurable] Text over background-image with no overlay, filter, or text-shadow.
**Applies to:** headers-hero, cards, avatars-images

### IMG-03 · Everything has an intended size: don't scale up icons
**Rule:** Icons drawn at 16–24px look chunky and lack detail at 3–4× size, even as SVG. If only small icons are available, enclose them in a shape with a background color (e.g. a tinted circle) so the glyph stays near its intended size while filling the space. Or use icons drawn for large sizes.
**Detect:** [measurable] Icons rendered ≥ ~2× typical UI size (e.g. 48px+) from a small-icon set. [visual] Chunky, oversimplified large icons.
**Example:** Feature row (Automatic rebalancing / Dividend reinvesting / Advice) with big bare icons → small icons inside light colored circles.
**Applies to:** headers-hero, empty-states, cards, buttons

### IMG-04 · Don't scale down screenshots
**Rule:** A full-size screenshot shrunk 70% turns 16px text into 4px mush. Instead: screenshot a smaller layout (tablet) and give it more space; show a **partial** screenshot of the relevant area; or draw a **simplified illustration** of the UI with small text replaced by lines.
**Detect:** [visual] Marketing screenshots with unreadable text.
**Applies to:** headers-hero, avatars-images, empty-states

### IMG-05 · Don't scale down icons/logos either
**Rule:** Icons drawn large become choppy and fuzzy when shrunk; a 128px logo at 16px favicon size becomes mush. Redraw a simplified version at the target size.
**Detect:** [visual] Blurry or mushy small logos/favicons/icons downscaled from large artwork.
**Applies to:** navigation, avatars-images, global

### IMG-06 · Control the shape and size of user-uploaded images
**Rule:** User images at intrinsic aspect ratios wreck grids. Center them in fixed containers and crop the overflow (`object-fit: cover` or `background-size: cover`).
**Detect:** [measurable] `<img>` in repeated cards/lists without fixed aspect ratio or object-fit; mismatched heights across a grid.
**Example:** Burger recipe grid with tall, short and wide photos breaking alignment → all cropped to the same box.
**Applies to:** avatars-images, cards, tables-lists

### IMG-07 · Prevent background bleed on user images
**Rule:** When an uploaded image's background resembles the UI background, the image loses its shape. Don't fix it with a visible border (clashes with image colors); use a subtle inner shadow `box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.1)` or a semi-transparent inner border.
**Detect:** [visual] Light avatars/photos dissolving into white backgrounds.
**Example:** Chat list avatars with white backgrounds blending into the white list; `border: 2px solid hsl(212,12%,72%)` looks heavy; the inset 1px shadow is barely noticeable yet defines the shape.
**Applies to:** avatars-images, tables-lists, cards
