# Empty states
_Screens or sections with no data yet: first-run, zero results, cleared lists._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (7)

### TYP-04 · Keep line length in check
**Rule:** Fit paragraphs to the best reading experience, not the layout. Aim for **45–75 characters per line**; `max-width: 20–35em` gets you there. Wider than 75 is risky.
**Detect:** [measurable] Paragraph width in em / approximate chars per line > 75 (e.g. ~120 chars per line is bad).
**Fix:** `max-width` on paragraphs, around 34em.
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

### IMG-03 · Everything has an intended size: don't scale up icons
**Rule:** Icons drawn at 16–24px look chunky and lack detail at 3–4× size, even as SVG. If only small icons are available, enclose them in a shape with a background color (e.g. a tinted circle) so the glyph stays near its intended size while filling the space. Or use icons drawn for large sizes.
**Detect:** [measurable] Icons rendered ≥ ~2× typical UI size (e.g. 48px+) from a small-icon set. [visual] Chunky, oversimplified large icons.
**Example:** Feature row (Automatic rebalancing / Dividend reinvesting / Advice) with big bare icons → small icons inside light colored circles.
_Source: principles/images.md_

### IMG-04 · Don't scale down screenshots
**Rule:** A full-size screenshot shrunk 70% turns 16px text into 4px mush. Instead: screenshot a smaller layout (tablet) and give it more space; show a **partial** screenshot of the relevant area; or draw a **simplified illustration** of the UI with small text replaced by lines.
**Detect:** [visual] Marketing screenshots with unreadable text.
_Source: principles/images.md_

### FIN-04 · Don't overlook empty states
**Rule:** For features depending on user-generated content, the empty state is the user's first impression — design it as a priority. Include an image/illustration to grab attention and emphasize the call-to-action. Hide supporting UI (tabs, filters, search) that does nothing until content exists.
**Detect:** [visual] Bare "No contacts found." text; empty tables still showing filters, tabs and search; CTA not prominent.
**Example:** Contacts screen "No contacts found." → avatar illustration + "Add a new contact and start messaging." + primary "Add contact" button. Discounts page with tabs/filters/search around an empty list → just a headline "Create a discount code", short description, primary button, and a large faint illustration.
_Source: principles/finishing.md_

### PER-04 · Language sets the tone
**Rule:** UI copy matters as much as color or type. Impersonal = official/professional ("Thank you Mr. Benson. Please provide a phone number…"). Casual = friendly ("Sweet, thanks Steve! Where can we send you a code?").
**Detect:** [visual] Tone inconsistent across screens, or contradicting the visual personality.
_Source: principles/personality.md_

### PRO-05 · Work in cycles; test edge cases on real UI
**Rule:** Design a simple version, build it, iterate on the working UI, then move to the next feature. Edge cases are easier to solve in a usable interface.
**Detect:** [visual] When auditing, stress real-data edge cases: long lists (2000 contacts), long text, error states, empty states, collisions (two events at the same time).
_Source: principles/process.md_
