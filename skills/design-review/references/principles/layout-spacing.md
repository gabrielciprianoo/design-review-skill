# Layout and Spacing

**Spacing & sizing scale (book's example, base 16px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768 px. Tight steps at the small end, wider at the large end; no two adjacent values closer than ~25%.

### LAY-01 · Start with too much white space, then remove it
**Rule:** White space is usually *added* until something stops looking actively bad — that only gives the minimum. Start with way too much space and remove until happy. What feels "a little too much" for one element ends up "just enough" in the full UI.
**Detect:** [measurable] Card/section padding at the small end (≤ 12px around substantial content); headings touching the content below; groups with almost no separation. [visual] Cramped feel.
**Fix:** Increase padding and inter-group gaps by one or two scale steps, then reduce if needed.
**Example:** Two-factor setup card: cramped version with tight padding and a header crammed against the form vs. roomy version with generous padding and clear separation between header and "Setup your phone" section. Review widget: rating bars and "Review this product" with more vertical breathing room.
**Applies to:** global, cards, forms, modals

### LAY-02 · Dense UIs have their place — deliberately
**Rule:** Compact layouts are fine when lots of information must be visible at once (e.g. dashboards, sports stats), but density must be a deliberate decision, not the default.
**Detect:** [visual] Is the density justified by the need to see much data at once? If not, apply LAY-01.
**Example:** Hockey game summary: team stats, scoring and player table packed tightly on one screen — acceptable.
**Applies to:** dashboards-stats, tables-lists

### LAY-03 · Establish a spacing and sizing system
**Rule:** Never pick between 120px and 125px. Use a predefined, non-linear scale (see top of file). A linear rule like "multiples of 4px" isn't enough: at small sizes a few px matter (12→16px is +33%), at large sizes they don't (500→520px card is +4%, imperceptible). Keep adjacent steps ≥ ~25% apart. Base 16px works well (divides nicely; browser default font size).
**Detect:** [measurable] Collect padding, margin, gap, width, height values. Flags: off-scale values (13, 15, 21, 25, 26px…), many near-duplicates, inconsistent spacing between equivalent elements.
**Fix:** Snap each value to the nearest scale step. Not enough space? Try the next step up — it's usually right.
**Example:** Hotel suite card. Bad: arbitrary spacings 26, 24, 12, 15, 21, 25, 13, 22px. Good: only 24 and 12px, visibly cleaner and more consistent.
**Applies to:** global

### LAY-04 · You don't have to fill the whole screen
**Rule:** If content needs 600px, use 600px. Spreading things out or making them unnecessarily wide makes the UI harder to read; extra space at the edges never hurts. Applies to sections too: content doesn't need to be full-width just because the nav is. Give each element the space it needs — don't make it worse to match something else.
**Detect:** [measurable] Narrow-purpose content (forms, carts, login, single cards, reading text) stretched to full container width (e.g. > ~700px for a simple form). [visual] Labels far from their values (e.g. cart prices at the opposite edge of a wide screen).
**Fix:** Constrain the element with a max-width and center it (or place it in a column).
**Example:** Shopping cart stretched across a 1200px+ page (item, price and totals far apart) vs. same cart in a narrow centered column. Login card stays narrow under a full-width nav.
**Applies to:** global, forms, cards, tables-lists, long-text

### LAY-05 · Shrink the canvas: design mobile first
**Rule:** If designing a small interface on a large canvas is hard, shrink the canvas. For responsive apps start at ~400px wide, then move to larger screens and adjust only what felt compromised.
**Fix:** In a redesign, propose the narrow layout first, then the desktop adaptation.
**Example:** Podcast app designed at phone width (header, now-playing card, past episodes list) translates almost unchanged to desktop.
**Applies to:** global

### LAY-06 · Think in columns instead of widening
**Rule:** When something works best narrow but looks unbalanced in a wide UI, split it into columns rather than stretching it.
**Detect:** [visual] Narrow form floating alone in a wide page with section descriptions stacked above fields.
**Fix:** Move supporting text (section title + description) to a left column; keep the form at its optimal width on the right.
**Example:** "Account Settings": section descriptions ("Basics", "Profile") moved to a left column, fields stay narrow on the right — balanced without hurting usability.
**Applies to:** forms, global

### LAY-07 · Don't force it
**Rule:** Don't cram things into a small area either. If something needs a lot of space, use it; just don't feel obliged to fill space you don't need.
**Applies to:** global

### LAY-08 · Grids are overrated: not everything should be fluid
**Rule:** A 12-column grid is just constrained percentage widths. Don't treat it as a religion: many elements are better with a **fixed width** optimized for their content. Classic case: a sidebar at 25% grows uselessly on wide screens and shrinks below its usable minimum on narrow ones (awkward wrapping/truncation). Give the sidebar a fixed width and let the main area flex, with its own internal grid. Same inside components: don't use percentages unless you actually want the thing to scale.
**Detect:** [measurable] Sidebars, avatars, thumbnails, icons or images sized with % widths. [visual] Sidebar text wrapping/truncating at narrow widths, or sidebar oversized at wide widths.
**Fix:** Fixed width for sidebar / media; flexible width for main content.
**Example:** Invoices dashboard: fixed-width dark sidebar; main area shows 4 or 2 invoice cards depending on space. Comment cards keep a fixed avatar width while the text area flexes.
**Applies to:** navigation, global, cards, avatars-images

### LAY-09 · Don't shrink an element until you need to
**Rule:** Don't size components by grid columns (e.g. login card = 6 of 12 columns, 8 on medium screens) — fluid columns can make it *wider* on medium screens than on large ones. If ~500px is optimal, use `max-width` and let it shrink only when the screen is narrower than that.
**Detect:** [measurable] Cards/forms/modals with %-based widths instead of max-width.
**Fix:** `width: 100%; max-width: <optimal>px`.
**Example:** "Welcome Back!" login card stays at its optimal width on large and medium screens and only narrows on phones.
**Applies to:** forms, cards, modals

### LAY-10 · Relative sizing doesn't scale
**Rule:** Don't lock sizes to each other with em ratios across screen sizes. Large elements must shrink *faster* than small ones; the difference between small and large elements should be less extreme on small screens.
**Detect:** [measurable] Headlines defined as large em multiples of body text that become oversized on mobile.
**Fix:** Set sizes independently per breakpoint.
**Example:** Article: desktop body 18px / headline 45px (2.5em). Mobile body 14px → 2.5em = 35px, way too big. Better mobile headline 20–24px (only 1.5–1.7× body).
**Applies to:** long-text, headers-hero, global

### LAY-11 · Scale component properties independently
**Rule:** Don't define padding in terms of font size so components zoom proportionally. Larger variants should get disproportionately more generous padding, smaller ones disproportionately tighter, so a large button *feels* large instead of zoomed.
**Detect:** [measurable] Button size variants where padding is an exact constant ratio of font-size.
**Example:** Proportional (bad): 20px font/15×20 padding, 16px/12×16, 14px/10.5×14, 12px/9×12. Independent (good): 20px font / 15px 30px padding, 16px / 12px 16px, 14px / 8px 10px, 12px / 6px 8px.
**Applies to:** buttons, forms, alerts-badges

### LAY-12 · Avoid ambiguous spacing
**Rule:** Without visible separators (borders, backgrounds), grouping relies on spacing. Always put **more space around a group than within it**.
- Stacked form fields: space below a label must be smaller than the space between fields.
- Articles: more space above a section heading than below it.
- Bulleted lists: space between bullets larger than the line-height within a bullet.
- Horizontal groups: icon closer to its own count than to the next item.
**Detect:** [measurable] Equal gaps label→input and input→next label; heading margin-top ≤ margin-bottom; list-item gap ≈ line-height; equal horizontal gaps in icon+count rows.
**Fix:** Tighten within-group spacing and/or widen between-group spacing by a scale step.
**Example:** Billing form: label 20px / field gap 20px (ambiguous) → 10px below label, 20px between groups. Article heading 24/24px → 36px above, 12px below. Benefit list 24/24px → 24px line spacing, 36px between bullets. Feed actions: like-icon/count 16px/16px apart from comment icon → 6px to its count, 36px to the next action.
**Applies to:** forms, long-text, cards, tables-lists, global
