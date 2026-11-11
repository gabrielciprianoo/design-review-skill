# Alerts & badges
_Alerts, banners, toasts, status pills, tags, 'NEW' labels, inline notices._

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

### HIE-04 · Don't use grey text on colored backgrounds
**Rule:** Grey-on-white works because it lowers contrast. On a colored background, lower contrast by hand-picking a color of the **same hue** as the background, adjusting saturation and lightness. Don't use plain grey, and don't use white with reduced opacity (looks dull, washed out, even disabled — and lets images/patterns show through the text).
**Detect:** [measurable] Text with grey color (saturation ≈ 0) or rgba/opacity < 1 on a non-neutral background.
**Fix:** Use a tint of the background hue, e.g. on teal background secondary text hsl(183,70%,84%).
**Example:** Testimonial card with teal footer: name in white, company in grey hsl(0,0%,78%) (bad), in hsla(0,0%,100%,0.6) (bad, pattern shows through), in hsl(183,70%,84%) (good).
_Source: principles/hierarchy.md_

### LAY-11 · Scale component properties independently
**Rule:** Don't define padding in terms of font size so components zoom proportionally. Larger variants should get disproportionately more generous padding, smaller ones disproportionately tighter, so a large button *feels* large instead of zoomed.
**Detect:** [measurable] Button size variants where padding is an exact constant ratio of font-size.
**Example:** Proportional (bad): 20px font/15×20 padding, 16px/12×16, 14px/10.5×14, 12px/9×12. Independent (good): 20px font / 15px 30px padding, 16px / 12px 16px, 14px / 8px 10px, 12px / 6px 8px.
_Source: principles/layout-spacing.md_

### TYP-11 · Use letter-spacing effectively
**Rule:** Generally trust the typeface designer and leave it alone, except:
- **Tighten headlines** set in fonts designed for small sizes (wide spacing, e.g. Open Sans): ~`letter-spacing: -0.05em` mimics a headline font (e.g. Oswald). Don't do the reverse — headline fonts rarely work small even with more spacing.
- **Widen all-caps text:** caps all share the same height, so default spacing reduces legibility. Add ~`letter-spacing: 0.05em`.
**Detect:** [measurable] text-transform: uppercase (or all-caps strings) with letter-spacing ≤ 0; large headings in text fonts with default spacing.
_Source: principles/typography.md_

### COL-02 · You need more colors than you think
**Rule:** A 5-color generator palette is unusable (applied literally it produces a garish UI). Build a full palette: greys (almost everything — text, backgrounds, panels, form controls — is grey), primary shades (actions, active nav; ultra-light shades tint alert backgrounds, dark shades work for text), and accents used sparingly (eye-catching color for "NEW" feature badges; red for destructive confirmation; yellow for warnings; green for positive trends; extra hues for chart lines, calendar events, tags).
**Detect:** [measurable] Palette summary: number of hues and shades in use. Flags: only a handful of saturated colors applied to large areas; no grey range (pure black/white only); semantic states missing or using the primary color.
**Fix:** Derive a full scale per color and reassign large areas to greys and light tints.
**Example:** Chat app painted with 5 generator colors (blue sidebar, yellow content, red alert) vs same app using greys, a primary blue scale, and tinted yellow/red only for alerts and badges.
_Source: principles/color.md_

### COL-04 · Don't let lightness kill your saturation
**Rule:** Saturation looks weaker near 0% and 100% lightness. Increase saturation as shades move away from 50% lightness, or light/dark shades look washed out (matters most on large areas).
**Detect:** [measurable] Light tints / dark shades with the same or lower saturation than the base, looking greyish.
**Fix:** Raise saturation for the extremes of the scale (U-shaped saturation curve).
_Source: principles/color.md_

### COL-07 · Accessible doesn't have to mean ugly
**Rule:** WCAG: normal text (< ~18px) contrast ≥ 4.5:1; large text ≥ 3:1. Easy for dark-on-light; hard with color.
- **Flip the contrast:** white text on a colored background needs a very dark color to pass, which makes secondary elements (badges, status pills) grab too much attention. Use dark colored text on a light tinted background instead.
- **Rotate the hue for colored text on colored backgrounds:** lightening/desaturating the background color forces you near white. Rotate toward a bright hue (cyan, magenta, yellow) to gain contrast while staying colorful.
**Detect:** [measurable] Contrast ratio for every text node vs its effective background; flag < 4.5:1 (< 3:1 for ≥ 18px or bold ≥ 14px). [visual] Dark solid badges/pills overpowering a table.
**Example:** Status badges "Approved / Awaiting Approval / Declined": white on bright green/yellow/pink fails (2.25, 1.56, 3.14); white on dark versions passes (~5–6) but is too loud; dark text on light tints passes AAA (9.0, 9.8, 12.3) and stays calm. Help panel bg hsl(240,34%,34%): secondary text hsl(240,44%,89%) is AAA but looks almost like the white headline; hsl(188,100%,85%) is AAA and clearly distinct.
_Source: principles/color.md_

### COL-08 · Don't rely on color alone
**Rule:** Color-blind users can't decode meaning carried only by color. Add another signal (icons, text, shape). For multi-series charts, prefer **contrast** (light vs dark shades of one hue) over distinct hues. Color should support what the design already says, never be the only channel.
**Detect:** [visual] Positive/negative changes shown only as green vs red; status shown only by dot color; chart series distinguished only by hue; required/error fields marked only in red.
**Fix:** Add ↑/↓ icons or +/− signs, labels, patterns; use a single-hue light-to-dark chart palette.
**Example:** Metric cards "1.4%" green / "11.1%" red look identical under red-green blindness → add up/down arrows. Leads donut in blue/green/orange becomes ambiguous for blue-yellow blindness → three shades of blue (light/medium/dark) remain distinct.
_Source: principles/color.md_

### FIN-02 · Add color with accent borders
**Rule:** A colored rectangle adds flair without graphic design skill. Places: across the top of a card; under the active nav item; along the left side of an alert; a short line under a headline; across the top of the whole layout.
**Detect:** [visual] Bland cards, alerts, nav, or pages with no brand color anywhere.
**Example:** Pricing card "Freelancer $12" plain vs same with a blue top border. Nav "Products" active in color only vs with a blue underline bar. "Pro user feature" alert with a blue left border.
_Source: principles/finishing.md_

### PER-03 · Border radius sets the tone — and must be consistent
**Rule:** Small radius = neutral. Large/pill = playful. None = serious, formal. Never mix square and rounded corners on equivalent components.
**Detect:** [measurable] Distinct border-radius values on buttons, inputs, cards, modals. Flags: 0 and large radii mixed on equivalent elements; many near-identical values.
**Fix:** Pick one style matching the personality and a short scale (e.g. small / medium / full) applied consistently.
**Example:** Square "Learn more" button for a venture fund (formal); pill buttons and very round metric cards for a startup dashboard (playful).
_Source: principles/personality.md_
