# Hierarchy
Visual hierarchy — how important elements look relative to each other — is the single most effective tool for making a UI feel "designed". Check it first in any audit.

### HIE-01 · Not all elements are equal
**Rule:** Deliberately de-emphasize secondary and tertiary information and highlight what matters most. When everything competes for attention the UI reads as a noisy wall of content.
**Detect:** [visual] Squint/blur test: is there one clear focal point per region? Flags: every text the same size/weight/color; every row's actions colored; all data given equal emphasis.
**Fix:** Rank content (primary / secondary / tertiary) and apply HIE-02…HIE-05. Colors, fonts and layout can stay the same.
**Example:** Brokerage dashboard. Bad: balances as plain "Label: value" text, blue Buy + red Sell buttons on every holdings row. Good: balances in one colored summary panel with small uppercase labels and large values, row actions as neutral outline buttons, active tab as a pill.
**Applies to:** global, dashboards-stats, tables-lists

### HIE-02 · Size isn't everything — use weight and color
**Rule:** Don't rely on font size alone; it makes primary content too large and secondary content too small. Make primary elements bolder (allows a reasonable size) and secondary text a softer color (instead of tiny).
**Detect:** [measurable] Large size jumps at the same weight; secondary text below ~14px used to show it's unimportant; headings that are big but regular weight.
**Fix:** Reduce heading size and raise weight; raise tiny secondary text size and lower its contrast.
**Example:** Tour card. Bad: title 30px/400, description 16px/400, price 24px/400, footnote 14px/400, all same color. Good: title 24px/700, price 18px/700, description 18px grey hsl(201,23%,34%), footnote 16px light grey hsl(203,15%,47%), primary text dark hsl(202,57%,15%).
**Applies to:** global, cards, headers-hero, long-text

### HIE-03 · Two or three text colors, two font weights
**Rule:** Text colors: dark (primary), grey (secondary, e.g. a date), lighter grey (tertiary, e.g. footer copyright). Weights: normal 400–500 for most text, bold 600–700 for emphasis. Avoid weights under 400 in UI — only acceptable for large headings; to de-emphasize use lighter color or smaller size instead.
**Detect:** [measurable] Distinct text colors (flag > ~4 on neutral backgrounds), distinct font-weights (flag > ~3), any font-weight < 400 at body/UI sizes.
**Fix:** Collapse text colors to 3 tiers and weights to 2.
**Applies to:** global

### HIE-04 · Don't use grey text on colored backgrounds
**Rule:** Grey-on-white works because it lowers contrast. On a colored background, lower contrast by hand-picking a color of the **same hue** as the background, adjusting saturation and lightness. Don't use plain grey, and don't use white with reduced opacity (looks dull, washed out, even disabled — and lets images/patterns show through the text).
**Detect:** [measurable] Text with grey color (saturation ≈ 0) or rgba/opacity < 1 on a non-neutral background.
**Fix:** Use a tint of the background hue, e.g. on teal background secondary text hsl(183,70%,84%).
**Example:** Testimonial card with teal footer: name in white, company in grey hsl(0,0%,78%) (bad), in hsla(0,0%,100%,0.6) (bad, pattern shows through), in hsl(183,70%,84%) (good).
**Applies to:** cards, headers-hero, navigation, alerts-badges, buttons

### HIE-05 · Emphasize by de-emphasizing
**Rule:** When the main element doesn't stand out and nothing can be added to it, soften the elements competing with it.
**Detect:** [visual] Active nav item / primary panel only slightly different from its neighbors; sidebars with backgrounds competing with main content.
**Fix:** Give inactive nav items a softer color. Remove a competing sidebar's background so it sits directly on the page background.
**Example:** Nav with "Orders" active in indigo but other items in dark text → still flat; making the others grey makes "Orders" pop.
**Applies to:** navigation, global

### HIE-06 · Labels are a last resort
**Rule:** Avoid naive "Label: value" display for data. Format often identifies the data (email, phone, price); context does too ("Customer Support" under a name is obviously the department). Without labels you can emphasize what matters.
**Detect:** [visual] Stacks of "Name:", "Email:", "Phone:" labels with all values at equal emphasis.
**Fix:** Drop self-evident labels, then style by importance (name prominent, department colored/secondary, contact info muted).
**Example:** Employee card with Name/Job Title/Email/Phone labels → name, "Customer Support" in accent color, email and phone in grey, no labels.
**Applies to:** cards, tables-lists, dashboards-stats

### HIE-07 · Combine labels and values
**Rule:** When data isn't clear alone, add clarifying text to the value instead of a label.
**Detect:** [visual] Data shown as "Label: value" pairs that could read as one phrase ("In stock: 12", "Bedrooms: 3").
**Example:** "In stock: 12" → "12 left in stock". "Bedrooms: 3 · Bathrooms: 2" → icon + "3 bedrooms", icon + "2 bathrooms".
**Fix:** Merge label and value into one phrase so each unit can be styled meaningfully.
**Applies to:** cards, tables-lists, dashboards-stats

### HIE-08 · When labels are needed, treat them as secondary
**Rule:** For scannable repeated data (dashboards), keep labels but de-emphasize them: smaller, lower contrast, lighter weight, or a mix. The data is what matters.
**Detect:** [measurable] In metric tiles, label font-size/weight ≥ the value's; label same color as value.
**Example:** Heart-rate widget. Bad: "Heart rate" bold, "82 BPM" small regular. Good: "HEART RATE" small uppercase grey, "82" large bold, "BPM" small.
**Applies to:** dashboards-stats, cards, tables-lists

### HIE-09 · Emphasize the label when users scan for it
**Rule:** On information-dense pages where users look for the label (e.g. tech specs: they scan for "Depth", not "7.6mm"), emphasize the label — but don't bury the data: darker label, slightly lighter value is enough.
**Detect:** [visual] Spec/settings pages where users scan for labels but labels are faint and values dominate.
**Example:** Specs table: section "Dimensions" bold; "Height:" bold dark, "2.31 inches (58.6 mm)" regular grey.
**Applies to:** tables-lists, long-text

### HIE-10 · Separate visual hierarchy from document hierarchy
**Rule:** Choose HTML elements (h1, h2…) for semantics; style them for visual hierarchy. In app UIs, section titles often act as labels and should be small; the content is the focus. A title can even be visually hidden (kept for accessibility) if content speaks for itself.
**Detect:** [measurable] Page/section titles in app UIs styled with large browser-default heading sizes that dominate the content.
**Fix:** Shrink titles to label-like sizes.
**Example:** "Manage Account" h1 at 24px (bad) → 16px (good), with tabs and form as the focus.
**Applies to:** headers-hero, global, forms

### HIE-11 · Balance weight with contrast (icons)
**Rule:** Heavy elements (solid icons, bold shapes) feel emphasized because they cover more surface area. Counterbalance by lowering contrast (softer color).
**Detect:** [visual] Solid icons next to text that visually overpower their labels.
**Fix:** Give icons a softer color than the text.
**Example:** Sidebar menu: icons hsl(212,20%,13%) same as text (bad) → icons hsl(212,20%,68%), text hsl(212,20%,13%) (good).
**Applies to:** navigation, buttons, tables-lists, global

### HIE-12 · Balance contrast with weight (thin borders)
**Rule:** When a low-contrast element is too subtle but darkening it looks harsh and noisy, increase its weight instead.
**Detect:** [measurable] 1px borders that are either very dark (harsh) or near-invisible.
**Fix:** Keep the soft color, increase width.
**Example:** Feed with left accent rules: 1px hsl(206,16%,74%) too dark; 1px hsl(210,23%,95%) too light; 2px hsl(210,23%,95%) balanced.
**Applies to:** cards, tables-lists, forms

### HIE-13 · Semantics are secondary: design actions by hierarchy
**Rule:** Most pages have one primary action, a couple of secondary, a few tertiary. Primary: obvious — solid, high-contrast background. Secondary: clear but not prominent — outline or low-contrast background. Tertiary: discoverable but unobtrusive — styled as links. Works on light, dark and gradient backgrounds.
**Detect:** [measurable] Count solid high-contrast buttons per view/card (flag > 1). [visual] Buttons colored by semantics (red delete, blue edit, green publish) all at equal weight.
**Fix:** Pick the single primary action; demote others to outline/soft and link styles.
**Example:** Product listing card. Bad: red "Delete Listing", blue "Edit", green "Publish". Good: "Delete Listing" as a link, "Edit" light grey background, "Publish" solid.
**Applies to:** buttons, cards, forms, modals, headers-hero

### HIE-14 · Destructive actions aren't automatically big and red
**Rule:** If a destructive action isn't the page's primary action, give it secondary (red outline/text) or tertiary (link) treatment. Use big, red, bold styling in the confirmation step, where it *is* the primary action.
**Detect:** [visual] Solid red destructive buttons on pages where deletion isn't the main task; confirmation dialogs where the destructive action is NOT the visually primary button.
**Example:** "Unpublish" as solid red / red outline / plain link depending on rank. Confirmation modal "Deactivate account": explanatory text, "Cancel" as plain text, "Deactivate" solid red.
**Applies to:** buttons, modals, forms
