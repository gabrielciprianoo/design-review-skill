# Personality
A design's personality comes from a few concrete factors: font, color, border radius and language. Declare the target personality before proposing visual changes; if the UI already has a coherent one, keep it.

### PER-01 · Font sets the tone
**Rule:** Elegant/classic → serif. Playful → rounded sans serif. Plain/neutral (let other elements carry personality) → neutral sans serif.
**Detect:** [measurable] font-family in use. [visual] Does it contradict the product's tone (ornate serif in a dev tool, rounded sans in a bank)?
**Fix:** Pick a family matching the target personality.
**Example:** Serif (Freight Text) for a bookkeeping site; rounded sans (Proxima Soft) with pill buttons for an icon set; neutral sans (Freight Sans) for a coworking brand.
**Applies to:** global, headers-hero

### PER-02 · Color sets the tone
**Rule:** Choose by how colors feel. Blue = safe, familiar. Gold/beige = expensive, sophisticated. Pink = fun, less serious.
**Detect:** [visual] Brand/action color contradicts the product's tone.
**Applies to:** global, buttons, headers-hero

### PER-03 · Border radius sets the tone — and must be consistent
**Rule:** Small radius = neutral. Large/pill = playful. None = serious, formal. Never mix square and rounded corners on equivalent components.
**Detect:** [measurable] Distinct border-radius values on buttons, inputs, cards, modals. Flags: 0 and large radii mixed on equivalent elements; many near-identical values.
**Fix:** Pick one style matching the personality and a short scale (e.g. small / medium / full) applied consistently.
**Example:** Square "Learn more" button for a venture fund (formal); pill buttons and very round metric cards for a startup dashboard (playful).
**Applies to:** buttons, cards, forms, modals, alerts-badges

### PER-04 · Language sets the tone
**Rule:** UI copy matters as much as color or type. Impersonal = official/professional ("Thank you Mr. Benson. Please provide a phone number…"). Casual = friendly ("Sweet, thanks Steve! Where can we send you a code?").
**Detect:** [visual] Tone inconsistent across screens, or contradicting the visual personality.
**Applies to:** global, forms, empty-states

### PER-05 · Choosing a personality
**Rule:** Without a gut feeling, look at sites your audience uses (serious vs playful) and follow that direction. Don't borrow too much from direct competitors.
**Applies to:** global
