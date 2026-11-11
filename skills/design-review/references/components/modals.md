# Modals & overlays
_Dialogs, confirmations, popovers, drawers, anything floating above the page._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (9)

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

### LAY-01 · Start with too much white space, then remove it
**Rule:** White space is usually *added* until something stops looking actively bad — that only gives the minimum. Start with way too much space and remove until happy. What feels "a little too much" for one element ends up "just enough" in the full UI.
**Detect:** [measurable] Card/section padding at the small end (≤ 12px around substantial content); headings touching the content below; groups with almost no separation. [visual] Cramped feel.
**Fix:** Increase padding and inter-group gaps by one or two scale steps, then reduce if needed.
**Example:** Two-factor setup card: cramped version with tight padding and a header crammed against the form vs. roomy version with generous padding and clear separation between header and "Setup your phone" section. Review widget: rating bars and "Review this product" with more vertical breathing room.
_Source: principles/layout-spacing.md_

### LAY-09 · Don't shrink an element until you need to
**Rule:** Don't size components by grid columns (e.g. login card = 6 of 12 columns, 8 on medium screens) — fluid columns can make it *wider* on medium screens than on large ones. If ~500px is optimal, use `max-width` and let it shrink only when the screen is narrower than that.
**Detect:** [measurable] Cards/forms/modals with %-based widths instead of max-width.
**Fix:** `width: 100%; max-width: <optimal>px`.
**Example:** "Welcome Back!" login card stays at its optimal width on large and medium screens and only narrows on phones.
_Source: principles/layout-spacing.md_

### TYP-04 · Keep line length in check
**Rule:** Fit paragraphs to the best reading experience, not the layout. Aim for **45–75 characters per line**; `max-width: 20–35em` gets you there. Wider than 75 is risky.
**Detect:** [measurable] Paragraph width in em / approximate chars per line > 75 (e.g. ~120 chars per line is bad).
**Fix:** `max-width` on paragraphs, around 34em.
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

### FIN-05 · Use fewer borders
**Rule:** Don't reach for a border first; too many make a design busy. Alternatives:
- **Box shadow** to outline an element more subtly (works when the element's color differs from the background), e.g. `0 5px 15px 0 hsla(0,0%,0%,.15)`.
- **Different background colors** for adjacent areas (e.g. search field and footer in hsl(200,10%,94%)); if you already use different backgrounds, drop the border.
- **Extra spacing** between groups (e.g. separating list rows with small gaps and highlighting the selected row with a tinted rounded background instead of row borders).
**Detect:** [measurable] Count elements with visible borders inside a component (card + header + search + every row + footer all bordered = flag). [visual] Grid-like, boxy feel.
**Example:** "Contacts" invite modal with borders around the card, search input, every row and the footer → shadow-outlined card, grey search and footer backgrounds, spaced rows with a tinted selected row.
_Source: principles/finishing.md_

### PER-03 · Border radius sets the tone — and must be consistent
**Rule:** Small radius = neutral. Large/pill = playful. None = serious, formal. Never mix square and rounded corners on equivalent components.
**Detect:** [measurable] Distinct border-radius values on buttons, inputs, cards, modals. Flags: 0 and large radii mixed on equivalent elements; many near-identical values.
**Fix:** Pick one style matching the personality and a short scale (e.g. small / medium / full) applied consistently.
**Example:** Square "Learn more" button for a venture fund (formal); pill buttons and very round metric cards for a startup dashboard (playful).
_Source: principles/personality.md_
