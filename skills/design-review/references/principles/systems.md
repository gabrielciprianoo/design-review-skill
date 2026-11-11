# Systems
Pick values from small predefined scales instead of an unlimited pool. Concrete scales for each property live in the topic files (spacing, typography, color, depth).

### SYS-01 · Limit your choices: define systems in advance
**Rule:** Use a restricted set of values: 8–10 shades per color picked ahead of time; a restrictive type scale (book example: 12, 14, 16, 18, 20, 24, 32, 48px). Never nudge a value 1px at a time.
**Detect:** [measurable] Count distinct font-size, color, padding, margin, box-shadow and border-radius values. Flags: near-duplicates (13/14/15px; greys or blues that barely differ); values off any scale.
**Fix:** Propose a scale and snap every existing value to its nearest step.
**Example:** Three "Download" buttons in #338188, #2F7083, #2078A0 — practically indistinguishable, so choosing between them is pointless.
**Applies to:** global

### SYS-02 · Decide by process of elimination
**Rule:** Guess the best value, then compare it with its neighbors on the scale. If both neighbors look clearly wrong, keep the middle; if a neighbor wins, repeat with it as the new middle.
**Detect:** [measurable] Icon/avatar sizes that aren't steps of a scale (e.g. 18, 22, 25px).
**Example:** Icon scale 12/16/24/32px for a "Bookmark" button: 12 too small, 24 too big → 16.
**Fix:** Justify each proposed size as the scale step that beats its neighbors.
**Applies to:** global, buttons

### SYS-03 · Systematize everything
**Rule:** Have systems for font size, font weight, line height, color, margin, padding, width, height, box shadows, border radius, border width, opacity — and any low-level decision you catch yourself repeating.
**Detect:** [measurable] Same distinct-value report as SYS-01, extended to font-weight, line-height, border-width, opacity.
**Applies to:** global
