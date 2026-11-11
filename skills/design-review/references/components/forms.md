# Forms & inputs
_Text inputs, selects, checkboxes, radios, labels, validation, multi-step forms, settings pages, login/signup._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (21)

### HIE-10 · Separate visual hierarchy from document hierarchy
**Rule:** Choose HTML elements (h1, h2…) for semantics; style them for visual hierarchy. In app UIs, section titles often act as labels and should be small; the content is the focus. A title can even be visually hidden (kept for accessibility) if content speaks for itself.
**Detect:** [measurable] Page/section titles in app UIs styled with large browser-default heading sizes that dominate the content.
**Fix:** Shrink titles to label-like sizes.
**Example:** "Manage Account" h1 at 24px (bad) → 16px (good), with tabs and form as the focus.
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

### LAY-04 · You don't have to fill the whole screen
**Rule:** If content needs 600px, use 600px. Spreading things out or making them unnecessarily wide makes the UI harder to read; extra space at the edges never hurts. Applies to sections too: content doesn't need to be full-width just because the nav is. Give each element the space it needs — don't make it worse to match something else.
**Detect:** [measurable] Narrow-purpose content (forms, carts, login, single cards, reading text) stretched to full container width (e.g. > ~700px for a simple form). [visual] Labels far from their values (e.g. cart prices at the opposite edge of a wide screen).
**Fix:** Constrain the element with a max-width and center it (or place it in a column).
**Example:** Shopping cart stretched across a 1200px+ page (item, price and totals far apart) vs. same cart in a narrow centered column. Login card stays narrow under a full-width nav.
_Source: principles/layout-spacing.md_

### LAY-06 · Think in columns instead of widening
**Rule:** When something works best narrow but looks unbalanced in a wide UI, split it into columns rather than stretching it.
**Detect:** [visual] Narrow form floating alone in a wide page with section descriptions stacked above fields.
**Fix:** Move supporting text (section title + description) to a left column; keep the form at its optimal width on the right.
**Example:** "Account Settings": section descriptions ("Basics", "Profile") moved to a left column, fields stay narrow on the right — balanced without hurting usability.
_Source: principles/layout-spacing.md_

### LAY-09 · Don't shrink an element until you need to
**Rule:** Don't size components by grid columns (e.g. login card = 6 of 12 columns, 8 on medium screens) — fluid columns can make it *wider* on medium screens than on large ones. If ~500px is optimal, use `max-width` and let it shrink only when the screen is narrower than that.
**Detect:** [measurable] Cards/forms/modals with %-based widths instead of max-width.
**Fix:** `width: 100%; max-width: <optimal>px`.
**Example:** "Welcome Back!" login card stays at its optimal width on large and medium screens and only narrows on phones.
_Source: principles/layout-spacing.md_

### LAY-11 · Scale component properties independently
**Rule:** Don't define padding in terms of font size so components zoom proportionally. Larger variants should get disproportionately more generous padding, smaller ones disproportionately tighter, so a large button *feels* large instead of zoomed.
**Detect:** [measurable] Button size variants where padding is an exact constant ratio of font-size.
**Example:** Proportional (bad): 20px font/15×20 padding, 16px/12×16, 14px/10.5×14, 12px/9×12. Independent (good): 20px font / 15px 30px padding, 16px / 12px 16px, 14px / 8px 10px, 12px / 6px 8px.
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

### COL-08 · Don't rely on color alone
**Rule:** Color-blind users can't decode meaning carried only by color. Add another signal (icons, text, shape). For multi-series charts, prefer **contrast** (light vs dark shades of one hue) over distinct hues. Color should support what the design already says, never be the only channel.
**Detect:** [visual] Positive/negative changes shown only as green vs red; status shown only by dot color; chart series distinguished only by hue; required/error fields marked only in red.
**Fix:** Add ↑/↓ icons or +/− signs, labels, patterns; use a single-hue light-to-dark chart palette.
**Example:** Metric cards "1.4%" green / "11.1%" red look identical under red-green blindness → add up/down arrows. Leads donut in blue/green/orange becomes ambiguous for blue-yellow blindness → three shades of blue (light/medium/dark) remain distinct.
_Source: principles/color.md_

### DEP-01 · Emulate a light source: light comes from above
**Rule:** Raised surfaces have a lighter top edge and a shadow below; inset surfaces have a shadow at the top and a lighter bottom lip. Users look slightly down at screens, so:
- **Raised** (e.g. button): reveal a slightly lighter top edge (top border or `inset 0 1px 0 <lighter hand-picked color>`) plus a small, sharp, dark shadow below (`0 1px 3px hsla(0,0%,0%,.2)`). Keep blur to a couple of px. Hand-pick the highlight color — semi-transparent white sucks saturation.
- **Inset** (wells, text inputs, checkboxes): lighter bottom lip (`0 -2px 0 hsla(0,0%,100%,.15)` or bottom border) plus a small dark inset shadow at the top (`inset 0 2px 2px hsla(0,0%,0%,.1)`).
**Detect:** [measurable] box-shadow on buttons/inputs: inverted light direction (highlight at bottom of raised elements), huge blur on small raised elements, white-alpha highlights.
**Example:** "Create Account" button gets `inset 0 1px 0 hsl(224,84%,74%)` + `0 1px 3px hsla(0,0%,0%,.2)`. Dark "drag and drop to upload" well and newsletter input/checkbox get the inset treatment.
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

### FIN-01 · Supercharge the defaults
**Rule:** Liven up existing elements instead of adding new ones:
- Replace list bullets with icons — checkmarks/arrows generically, or content-specific (padlock for security features), often in a tinted circle.
- Promote testimonial quote marks into visual elements: larger and in a soft accent color.
- Style links: color + weight, or a thick colorful custom underline that partially overlaps the text.
- Custom checkboxes and radios using a brand color for selected states instead of browser defaults.
**Detect:** [visual] Plain browser-default bullets, checkboxes, radios; plain text-only quotes; default blue underlined links in a branded UI.
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

### PER-04 · Language sets the tone
**Rule:** UI copy matters as much as color or type. Impersonal = official/professional ("Thank you Mr. Benson. Please provide a phone number…"). Casual = friendly ("Sweet, thanks Steve! Where can we send you a code?").
**Detect:** [visual] Tone inconsistent across screens, or contradicting the visual personality.
_Source: principles/personality.md_

### PRO-05 · Work in cycles; test edge cases on real UI
**Rule:** Design a simple version, build it, iterate on the working UI, then move to the next feature. Edge cases are easier to solve in a usable interface.
**Detect:** [visual] When auditing, stress real-data edge cases: long lists (2000 contacts), long text, error states, empty states, collisions (two events at the same time).
_Source: principles/process.md_

### PRO-06 · Be a pessimist: don't imply unbuilt functionality
**Rule:** Design the smallest useful version that can ship. "Nice-to-haves" are designed later.
**Detect:** [visual] Controls promising something missing or half-done: dead drag-and-drop zones, permanently disabled buttons, empty tabs, "coming soon".
**Fix:** Remove or hide what doesn't work; show only the working version.
**Example:** Comment box with avatar, textarea, "Some HTML is OK" and "Post Comment" — the ambitious version adds "Attach files by dragging & dropping"; the shippable one drops it.
_Source: principles/process.md_
