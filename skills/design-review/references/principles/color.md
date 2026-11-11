# Color

**Palette structure (book):** greys 8–10 shades (dark grey → off-white, never pure black); 1–2 primary colors with 5–10 shades; accent colors (highlight + semantic: red/danger, yellow/warning, green/success, plus more for categories) with 5–10 shades each. Complex UIs can need ~10 colors × 5–10 shades. Name shades 100 (lightest) … 900 (darkest), base = 500.

### COL-01 · Ditch hex for HSL
**Rule:** Hex/RGB hide relationships (#03369E, #507DD7, #9FB9ED look unrelated). HSL matches perception: hue (0° red, 120° green, 240° blue), saturation (0% = grey), lightness (0% black, 50% pure color, 100% white). HSL ≠ HSB: browsers only understand HSL.
**Fix:** Express and compare colors in HSL when auditing or proposing palettes (e.g. the three donut-chart blues are hsl(220,95%,34%), hsl(220,65%,61%), hsl(220,69%,80%) — clearly one family).
**Applies to:** global, dashboards-stats

### COL-02 · You need more colors than you think
**Rule:** A 5-color generator palette is unusable (applied literally it produces a garish UI). Build a full palette: greys (almost everything — text, backgrounds, panels, form controls — is grey), primary shades (actions, active nav; ultra-light shades tint alert backgrounds, dark shades work for text), and accents used sparingly (eye-catching color for "NEW" feature badges; red for destructive confirmation; yellow for warnings; green for positive trends; extra hues for chart lines, calendar events, tags).
**Detect:** [measurable] Palette summary: number of hues and shades in use. Flags: only a handful of saturated colors applied to large areas; no grey range (pure black/white only); semantic states missing or using the primary color.
**Fix:** Derive a full scale per color and reassign large areas to greys and light tints.
**Example:** Chat app painted with 5 generator colors (blue sidebar, yellow content, red alert) vs same app using greys, a primary blue scale, and tinted yellow/red only for alerts and badges.
**Applies to:** global, alerts-badges, dashboards-stats

### COL-03 · Define your shades up front
**Rule:** Don't generate shades on the fly with lighten()/darken() — that's how you get 35 blues that look the same. Fix a set beforehand:
1. **Base (500):** a shade that works as a button background (not too dark, not too washed out). No "50% lightness" rule — use your eyes.
2. **Edges:** darkest (900) for text; lightest (100) for tinted backgrounds. An alert (dark text on light tint) is a good place to pick both.
3. **Fill gaps:** pick 700 and 300 as compromises between neighbors, then 800, 600, 400, 200. At least 5 shades, ideally ~9.
4. **Greys:** same process; darkest = darkest text color, lightest = subtle off-white background.
5. **Not a science:** tweak saturation/lightness by eye once in use, but avoid adding new shades often.
**Detect:** [measurable] Many near-identical shades of the same hue (ΔL < ~5%) in use.
**Fix:** Consolidate into a 100–900 scale and map every used color to its nearest step.
**Applies to:** global

### COL-04 · Don't let lightness kill your saturation
**Rule:** Saturation looks weaker near 0% and 100% lightness. Increase saturation as shades move away from 50% lightness, or light/dark shades look washed out (matters most on large areas).
**Detect:** [measurable] Light tints / dark shades with the same or lower saturation than the base, looking greyish.
**Fix:** Raise saturation for the extremes of the scale (U-shaped saturation curve).
**Applies to:** global, alerts-badges, headers-hero

### COL-05 · Use perceived brightness: rotate hue to lighten/darken
**Rule:** Each hue has inherent perceived brightness (yellow at L50% looks much lighter than blue at L50%). Formula: √(0.299r² + 0.587g² + 0.114b²) / 255. Local minima: red 0°, green 120°, blue 240°; maxima: yellow 60°, cyan 180°, magenta 300°. Changing only lightness moves a color toward white/black and loses intensity. Instead: **to lighten, rotate hue toward 60°/180°/300°; to darken, rotate toward 0°/120°/240°.** Keep rotation ≤ 20–30°. Can be combined with lightness changes.
**Detect:** [visual] Light/dark shades of a hue that look dull, muddy or brownish (especially yellows/oranges darkened by lightness only).
**Example:** Play-icon gradient hsl(210,100%,75%)→hsl(210,100%,50%) (lightness only) vs hsl(190,100%,50%)→hsl(210,100%,50%) (hue rotation, more vivid). Yellow scale: darkening by lightness alone turns dull brown; rotating toward orange gives warm, rich darks. Testimonial: background hsl(221,49%,33%), text hsl(194,49%,73%).
**Applies to:** global, headers-hero, buttons

### COL-06 · Greys don't have to be grey: set a temperature
**Rule:** Many "greys" are noticeably saturated (e.g. hsl(212,56%,16%), hsl(212,18%,35%), hsl(210,32%,93%), hsl(210,38%,97%)). Saturate greys with blue for a cool feel or yellow/orange for a warm feel. Increase saturation for the lightest and darkest shades to keep the temperature consistent. Amount is a taste decision.
**Example:** Neutral greys S 0% · cool greys H ~207–210, S 12–16% (darks/lights up to ~21%) · warm greys H ~39–41, S 12–21%.
**Detect:** [measurable] Greys with saturation 0% in an otherwise branded UI (flat, lifeless); mixed cool and warm greys (inconsistent temperature).
**Fix:** Tint the grey scale toward the primary hue (cool) or a warm hue, consistently.
**Applies to:** global

### COL-07 · Accessible doesn't have to mean ugly
**Rule:** WCAG: normal text (< ~18px) contrast ≥ 4.5:1; large text ≥ 3:1. Easy for dark-on-light; hard with color.
- **Flip the contrast:** white text on a colored background needs a very dark color to pass, which makes secondary elements (badges, status pills) grab too much attention. Use dark colored text on a light tinted background instead.
- **Rotate the hue for colored text on colored backgrounds:** lightening/desaturating the background color forces you near white. Rotate toward a bright hue (cyan, magenta, yellow) to gain contrast while staying colorful.
**Detect:** [measurable] Contrast ratio for every text node vs its effective background; flag < 4.5:1 (< 3:1 for ≥ 18px or bold ≥ 14px). [visual] Dark solid badges/pills overpowering a table.
**Example:** Status badges "Approved / Awaiting Approval / Declined": white on bright green/yellow/pink fails (2.25, 1.56, 3.14); white on dark versions passes (~5–6) but is too loud; dark text on light tints passes AAA (9.0, 9.8, 12.3) and stays calm. Help panel bg hsl(240,34%,34%): secondary text hsl(240,44%,89%) is AAA but looks almost like the white headline; hsl(188,100%,85%) is AAA and clearly distinct.
**Applies to:** alerts-badges, tables-lists, buttons, headers-hero, global

### COL-08 · Don't rely on color alone
**Rule:** Color-blind users can't decode meaning carried only by color. Add another signal (icons, text, shape). For multi-series charts, prefer **contrast** (light vs dark shades of one hue) over distinct hues. Color should support what the design already says, never be the only channel.
**Detect:** [visual] Positive/negative changes shown only as green vs red; status shown only by dot color; chart series distinguished only by hue; required/error fields marked only in red.
**Fix:** Add ↑/↓ icons or +/− signs, labels, patterns; use a single-hue light-to-dark chart palette.
**Example:** Metric cards "1.4%" green / "11.1%" red look identical under red-green blindness → add up/down arrows. Leads donut in blue/green/orange becomes ambiguous for blue-yellow blindness → three shades of blue (light/medium/dark) remain distinct.
**Applies to:** dashboards-stats, alerts-badges, forms, tables-lists
