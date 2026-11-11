# Depth

**Elevation scale (book's 5 shadows, single-shadow form):** `0 1px 3px hsla(0,0%,0%,.2)` · `0 4px 6px hsla(0,0%,0%,.2)` · `0 5px 15px hsla(0,0%,0%,.2)` · `0 10px 24px hsla(0,0%,0%,.2)` · `0 15px 35px hsla(0,0%,0%,.2)`.
**Two-part version (direct + ambient):** `0 1px 3px hsla(0,0%,0%,.12), 0 1px 2px hsla(0,0%,0%,.24)` · `0 3px 6px hsla(0,0%,0%,.15), 0 2px 4px hsla(0,0%,0%,.12)` · `0 10px 20px hsla(0,0%,0%,.15), 0 3px 6px hsla(0,0%,0%,.10)` · `0 15px 25px hsla(0,0%,0%,.15), 0 5px 10px hsla(0,0%,0%,.05)` · `0 20px 40px hsla(0,0%,0%,.2)`.

### DEP-01 · Emulate a light source: light comes from above
**Rule:** Raised surfaces have a lighter top edge and a shadow below; inset surfaces have a shadow at the top and a lighter bottom lip. Users look slightly down at screens, so:
- **Raised** (e.g. button): reveal a slightly lighter top edge (top border or `inset 0 1px 0 <lighter hand-picked color>`) plus a small, sharp, dark shadow below (`0 1px 3px hsla(0,0%,0%,.2)`). Keep blur to a couple of px. Hand-pick the highlight color — semi-transparent white sucks saturation.
- **Inset** (wells, text inputs, checkboxes): lighter bottom lip (`0 -2px 0 hsla(0,0%,100%,.15)` or bottom border) plus a small dark inset shadow at the top (`inset 0 2px 2px hsla(0,0%,0%,.1)`).
**Detect:** [measurable] box-shadow on buttons/inputs: inverted light direction (highlight at bottom of raised elements), huge blur on small raised elements, white-alpha highlights.
**Example:** "Create Account" button gets `inset 0 1px 0 hsl(224,84%,74%)` + `0 1px 3px hsla(0,0%,0%,.2)`. Dark "drag and drop to upload" well and newsletter input/checkbox get the inset treatment.
**Applies to:** buttons, forms, cards

### DEP-02 · Don't get carried away with realism
**Rule:** Borrow a few real-world light cues for depth; don't chase photo-realism — it makes UIs busy and unclear.
**Applies to:** global

### DEP-03 · Use shadows to convey elevation
**Rule:** Shadows place elements on a z-axis. Small, tight shadow = slightly raised; large, blurry shadow = close to the user. Closer = more attention.
- Small: buttons (noticed but not dominating) — e.g. `0 1px 3px hsla(0,0%,0%,.2)`.
- Medium: dropdowns/popovers — e.g. `0 4px 6px hsla(0,0%,0%,.1)`.
- Large: modals — e.g. `0 15px 35px hsla(0,0%,0%,.2)`.
Decide where the element sits on the z-axis, then assign the shadow — don't design the shadow itself.
**Detect:** [measurable] Shadow size vs component role: modals/dropdowns with tiny or no shadow (feel flat, blend with page), buttons/cards with huge shadows; many unrelated shadow values (no system).
**Fix:** Define ~5 shadows (smallest and largest first, fill the middle roughly linearly) and map each component to one.
**Example:** "Publish" button flat (bad) vs small shadow (good); user dropdown with no shadow (bad) vs medium (good); password modal with weak shadow (bad) vs large (good).
**Applies to:** buttons, modals, navigation, cards, global

### DEP-04 · Combine shadows with interaction
**Rule:** Use elevation changes as feedback: raise a draggable item (add shadow) when grabbed so it pops above the list; make a button feel pressed by reducing/removing its shadow on click (e.g. `0 4px 6px` → `0 1px 3px`).
**Detect:** [visual] Draggable rows with no lift; pressed states identical to rest state.
**Applies to:** buttons, tables-lists, cards

### DEP-05 · Shadows can have two parts
**Rule:** Combine (1) a larger, softer shadow with bigger y-offset and blur — cast by direct light — and (2) a tighter, darker shadow with small offset/blur — the ambient-occlusion area right under the object. This keeps the big shadow subtle while edges stay defined. The tight shadow fades as elevation increases: distinct at the lowest level, almost or fully invisible at the highest.
**Detect:** [measurable] Single, very diffuse shadows that leave card edges undefined; high-elevation elements (modals) with a strong tight shadow.
**Example:** Event card `0 4px 6px hsla(0,0%,0%,.07), 0 5px 15px hsla(0,0%,0%,.1)`. See the two-part scale at top.
**Applies to:** cards, modals, navigation, global

### DEP-06 · Even flat designs can have depth
**Rule:** Without shadows/gradients, convey depth with:
- **Color:** lighter than the background = closer/raised; darker = farther/inset.
- **Solid shadows:** short vertical offset, no blur (e.g. `0 3px 0 hsl(220,7%,83%)`) lifts cards or buttons while keeping a flat look.
**Detect:** [visual] Flat UIs where raised/inset areas are indistinguishable from the page (same color as background, no shadow).
**Example:** Login form: white card (raised) on light grey page; "Don't have an account? Get Started" strip darker than the page (inset). Shopping-cart rows with solid bottom shadows.
**Applies to:** cards, forms, buttons, global

### DEP-07 · Overlap elements to create layers
**Rule:** Overlapping creates strong depth:
- Offset a card so it crosses the boundary between two backgrounds (e.g. search card on a hero with `margin-bottom: -60px`).
- Make an element taller than its parent so it overflows both sides (e.g. pricing card with `margin: -50px 0`).
- Overlap small controls (carousel arrows hanging off the card edges, `margin-left/right: -24px`).
- Overlapping images clash unless separated by an "invisible border" matching the background (e.g. avatar over cover photo with `border: 4px solid #fff`).
**Detect:** [visual] Hero + search/form card fully boxed inside the hero; overlapping avatars/images touching without a gap.
**Applies to:** headers-hero, cards, avatars-images, forms
