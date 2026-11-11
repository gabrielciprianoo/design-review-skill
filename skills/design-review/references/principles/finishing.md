# Finishing Touches
Apply after hierarchy, spacing, typography and color are solid. These add polish without changing structure.

### FIN-01 · Supercharge the defaults
**Rule:** Liven up existing elements instead of adding new ones:
- Replace list bullets with icons — checkmarks/arrows generically, or content-specific (padlock for security features), often in a tinted circle.
- Promote testimonial quote marks into visual elements: larger and in a soft accent color.
- Style links: color + weight, or a thick colorful custom underline that partially overlaps the text.
- Custom checkboxes and radios using a brand color for selected states instead of browser defaults.
**Detect:** [visual] Plain browser-default bullets, checkboxes, radios; plain text-only quotes; default blue underlined links in a branded UI.
**Applies to:** long-text, forms, headers-hero, cards

### FIN-02 · Add color with accent borders
**Rule:** A colored rectangle adds flair without graphic design skill. Places: across the top of a card; under the active nav item; along the left side of an alert; a short line under a headline; across the top of the whole layout.
**Detect:** [visual] Bland cards, alerts, nav, or pages with no brand color anywhere.
**Example:** Pricing card "Freelancer $12" plain vs same with a blue top border. Nav "Products" active in color only vs with a blue underline bar. "Pro user feature" alert with a blue left border.
**Applies to:** cards, navigation, alerts-badges, headers-hero, global

### FIN-03 · Decorate your backgrounds
**Rule:** When a well-structured design still feels plain, add interest to a few backgrounds:
- **Change the background color** to emphasize a panel (e.g. highlighted "Premium" pricing card in solid indigo) or to distinguish page sections (colored hero, dark features band).
- **Slight gradient:** two hues ≤ ~30° apart.
- **Subtle repeating pattern** (e.g. Hero Patterns), full background or along one edge, with low contrast.
- **Simple shape or illustration** placed in specific spots: geometric shapes, a chunk of pattern, a simplified world map — keep contrast low so nothing interferes with content.
**Detect:** [visual] Long landing pages where every section is white; featured/recommended option not visually distinct.
**Applies to:** headers-hero, cards, global

### FIN-04 · Don't overlook empty states
**Rule:** For features depending on user-generated content, the empty state is the user's first impression — design it as a priority. Include an image/illustration to grab attention and emphasize the call-to-action. Hide supporting UI (tabs, filters, search) that does nothing until content exists.
**Detect:** [visual] Bare "No contacts found." text; empty tables still showing filters, tabs and search; CTA not prominent.
**Example:** Contacts screen "No contacts found." → avatar illustration + "Add a new contact and start messaging." + primary "Add contact" button. Discounts page with tabs/filters/search around an empty list → just a headline "Create a discount code", short description, primary button, and a large faint illustration.
**Applies to:** empty-states, tables-lists, dashboards-stats

### FIN-05 · Use fewer borders
**Rule:** Don't reach for a border first; too many make a design busy. Alternatives:
- **Box shadow** to outline an element more subtly (works when the element's color differs from the background), e.g. `0 5px 15px 0 hsla(0,0%,0%,.15)`.
- **Different background colors** for adjacent areas (e.g. search field and footer in hsl(200,10%,94%)); if you already use different backgrounds, drop the border.
- **Extra spacing** between groups (e.g. separating list rows with small gaps and highlighting the selected row with a tinted rounded background instead of row borders).
**Detect:** [measurable] Count elements with visible borders inside a component (card + header + search + every row + footer all bordered = flag). [visual] Grid-like, boxy feel.
**Example:** "Contacts" invite modal with borders around the card, search input, every row and the footer → shadow-outlined card, grey search and footer backgrounds, spaced rows with a tinted selected row.
**Applies to:** cards, tables-lists, forms, modals, navigation

### FIN-06 · Think outside the box
**Rule:** Components don't have to look like their conventional form:
- **Dropdowns:** sections, multiple columns, supporting text, colorful icons (e.g. Features menu with icon + title + description per item and a secondary links section).
- **Tables:** combine non-sortable related columns into one cell with hierarchy (name + role; amount + policy type); add images (avatars) and color (status badges).
- **Radio buttons:** when the choice is important, use selectable cards (e.g. plan picker: Hobby 1 GB / Growth 5 GB / Business 10 GB / Enterprise 20 GB with a highlighted selected card and check).
**Detect:** [visual] Plain link-list dropdowns in key navigation; tables with many single-value columns (Name | Role | Policy | Policy type | Location | Status); a key decision rendered as a bare radio list.
**Applies to:** navigation, tables-lists, forms, cards

### FIN-07 · Keep leveling up
**Rule:** Study designs you like: look for decisions you wouldn't have made (inverted dark datepicker, button inside the text input, two-color headline). Rebuild favorite interfaces from scratch without devtools to discover tricks (reduced heading line-height ~1.2, letter-spacing on uppercase, multiple shadows, cropped images).
**Fix:** In a redesign, consider one or two such unexpected touches once fundamentals are fixed.
**Applies to:** global
