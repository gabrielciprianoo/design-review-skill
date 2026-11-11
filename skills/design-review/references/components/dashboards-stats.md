# Dashboards & stats
_Metric tiles, KPIs, charts, summary panels, data-dense overview screens._

## Core global checks (always apply; details in principles/)
- HIE-01 · Not all elements are equal → principles/hierarchy.md
- HIE-03 · Two or three text colors, two font weights → principles/hierarchy.md
- PRO-03 · Design in grayscale first → principles/process.md
- SYS-01 · Limit your choices: define systems in advance → principles/systems.md
- LAY-03 · Establish a spacing and sizing system → principles/layout-spacing.md
- LAY-12 · Avoid ambiguous spacing → principles/layout-spacing.md
- TYP-01 · Establish a type scale → principles/typography.md
- COL-07 · Accessible doesn't have to mean ugly → principles/color.md

## Component principles (11)

### HIE-01 · Not all elements are equal
**Rule:** Deliberately de-emphasize secondary and tertiary information and highlight what matters most. When everything competes for attention the UI reads as a noisy wall of content.
**Detect:** [visual] Squint/blur test: is there one clear focal point per region? Flags: every text the same size/weight/color; every row's actions colored; all data given equal emphasis.
**Fix:** Rank content (primary / secondary / tertiary) and apply HIE-02…HIE-05. Colors, fonts and layout can stay the same.
**Example:** Brokerage dashboard. Bad: balances as plain "Label: value" text, blue Buy + red Sell buttons on every holdings row. Good: balances in one colored summary panel with small uppercase labels and large values, row actions as neutral outline buttons, active tab as a pill.
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

### LAY-02 · Dense UIs have their place — deliberately
**Rule:** Compact layouts are fine when lots of information must be visible at once (e.g. dashboards, sports stats), but density must be a deliberate decision, not the default.
**Detect:** [visual] Is the density justified by the need to see much data at once? If not, apply LAY-01.
**Example:** Hockey game summary: team stats, scoring and player table packed tightly on one screen — acceptable.
_Source: principles/layout-spacing.md_

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

### COL-01 · Ditch hex for HSL
**Rule:** Hex/RGB hide relationships (#03369E, #507DD7, #9FB9ED look unrelated). HSL matches perception: hue (0° red, 120° green, 240° blue), saturation (0% = grey), lightness (0% black, 50% pure color, 100% white). HSL ≠ HSB: browsers only understand HSL.
**Fix:** Express and compare colors in HSL when auditing or proposing palettes (e.g. the three donut-chart blues are hsl(220,95%,34%), hsl(220,65%,61%), hsl(220,69%,80%) — clearly one family).
_Source: principles/color.md_

### COL-02 · You need more colors than you think
**Rule:** A 5-color generator palette is unusable (applied literally it produces a garish UI). Build a full palette: greys (almost everything — text, backgrounds, panels, form controls — is grey), primary shades (actions, active nav; ultra-light shades tint alert backgrounds, dark shades work for text), and accents used sparingly (eye-catching color for "NEW" feature badges; red for destructive confirmation; yellow for warnings; green for positive trends; extra hues for chart lines, calendar events, tags).
**Detect:** [measurable] Palette summary: number of hues and shades in use. Flags: only a handful of saturated colors applied to large areas; no grey range (pure black/white only); semantic states missing or using the primary color.
**Fix:** Derive a full scale per color and reassign large areas to greys and light tints.
**Example:** Chat app painted with 5 generator colors (blue sidebar, yellow content, red alert) vs same app using greys, a primary blue scale, and tinted yellow/red only for alerts and badges.
_Source: principles/color.md_

### COL-08 · Don't rely on color alone
**Rule:** Color-blind users can't decode meaning carried only by color. Add another signal (icons, text, shape). For multi-series charts, prefer **contrast** (light vs dark shades of one hue) over distinct hues. Color should support what the design already says, never be the only channel.
**Detect:** [visual] Positive/negative changes shown only as green vs red; status shown only by dot color; chart series distinguished only by hue; required/error fields marked only in red.
**Fix:** Add ↑/↓ icons or +/− signs, labels, patterns; use a single-hue light-to-dark chart palette.
**Example:** Metric cards "1.4%" green / "11.1%" red look identical under red-green blindness → add up/down arrows. Leads donut in blue/green/orange becomes ambiguous for blue-yellow blindness → three shades of blue (light/medium/dark) remain distinct.
_Source: principles/color.md_

### FIN-04 · Don't overlook empty states
**Rule:** For features depending on user-generated content, the empty state is the user's first impression — design it as a priority. Include an image/illustration to grab attention and emphasize the call-to-action. Hide supporting UI (tabs, filters, search) that does nothing until content exists.
**Detect:** [visual] Bare "No contacts found." text; empty tables still showing filters, tabs and search; CTA not prominent.
**Example:** Contacts screen "No contacts found." → avatar illustration + "Add a new contact and start messaging." + primary "Add contact" button. Discounts page with tabs/filters/search around an empty list → just a headline "Create a discount code", short description, primary button, and a large faint illustration.
_Source: principles/finishing.md_
