# Principles index
80 principles from *Refactoring UI*. One line each: ID · title · file · detection · applies to.
Open only the topic file(s) you need; each ID is a `### ID` heading inside its file.

## hierarchy.md
- HIE-01 · Not all elements are equal · [visual] · global, dashboards-stats, tables-lists
- HIE-02 · Size isn't everything — use weight and color · [measurable] · global, cards, headers-hero, long-text
- HIE-03 · Two or three text colors, two font weights · [measurable] · global
- HIE-04 · Don't use grey text on colored backgrounds · [measurable] · cards, headers-hero, navigation, alerts-badges, buttons
- HIE-05 · Emphasize by de-emphasizing · [visual] · navigation, global
- HIE-06 · Labels are a last resort · [visual] · cards, tables-lists, dashboards-stats
- HIE-07 · Combine labels and values · [visual] · cards, tables-lists, dashboards-stats
- HIE-08 · When labels are needed, treat them as secondary · [measurable] · dashboards-stats, cards, tables-lists
- HIE-09 · Emphasize the label when users scan for it · [visual] · tables-lists, long-text
- HIE-10 · Separate visual hierarchy from document hierarchy · [measurable] · headers-hero, global, forms
- HIE-11 · Balance weight with contrast (icons) · [visual] · navigation, buttons, tables-lists, global
- HIE-12 · Balance contrast with weight (thin borders) · [measurable] · cards, tables-lists, forms
- HIE-13 · Semantics are secondary: design actions by hierarchy · [measurable/visual] · buttons, cards, forms, modals, headers-hero
- HIE-14 · Destructive actions aren't automatically big and red · [visual] · buttons, modals, forms

## layout-spacing.md
- LAY-01 · Start with too much white space, then remove it · [measurable/visual] · global, cards, forms, modals
- LAY-02 · Dense UIs have their place — deliberately · [visual] · dashboards-stats, tables-lists
- LAY-03 · Establish a spacing and sizing system · [measurable] · global
- LAY-04 · You don't have to fill the whole screen · [measurable/visual] · global, forms, cards, tables-lists, long-text
- LAY-05 · Shrink the canvas: design mobile first · [process] · global
- LAY-06 · Think in columns instead of widening · [visual] · forms, global
- LAY-07 · Don't force it · [process] · global
- LAY-08 · Grids are overrated: not everything should be fluid · [measurable/visual] · navigation, global, cards, avatars-images
- LAY-09 · Don't shrink an element until you need to · [measurable] · forms, cards, modals
- LAY-10 · Relative sizing doesn't scale · [measurable] · long-text, headers-hero, global
- LAY-11 · Scale component properties independently · [measurable] · buttons, forms, alerts-badges
- LAY-12 · Avoid ambiguous spacing · [measurable] · forms, long-text, cards, tables-lists, global

## typography.md
- TYP-01 · Establish a type scale · [measurable] · global
- TYP-02 · Avoid em units for font sizes · [measurable] · global
- TYP-03 · Use good fonts · [measurable] · global, long-text, headers-hero
- TYP-04 · Keep line length in check · [measurable] · long-text, headers-hero, empty-states, modals
- TYP-05 · Limit paragraph width even in wide content areas · [measurable] · headers-hero, long-text, global
- TYP-06 · Baseline, not center · [measurable] · cards, headers-hero, navigation, tables-lists
- TYP-07 · Line-height is proportional to line length · [measurable] · long-text
- TYP-08 · Line-height is inversely proportional to font size · [measurable] · long-text, headers-hero, global
- TYP-09 · Not every link needs a color · [visual] · cards, tables-lists, navigation, long-text
- TYP-10 · Align with readability in mind · [measurable] · long-text, tables-lists, headers-hero, empty-states, dashboards-stats
- TYP-11 · Use letter-spacing effectively · [measurable] · headers-hero, alerts-badges, buttons, tables-lists, dashboards-stats

## color.md
- COL-01 · Ditch hex for HSL · [process] · global, dashboards-stats
- COL-02 · You need more colors than you think · [measurable] · global, alerts-badges, dashboards-stats
- COL-03 · Define your shades up front · [measurable] · global
- COL-04 · Don't let lightness kill your saturation · [measurable] · global, alerts-badges, headers-hero
- COL-05 · Use perceived brightness: rotate hue to lighten/darken · [visual] · global, headers-hero, buttons
- COL-06 · Greys don't have to be grey: set a temperature · [measurable] · global
- COL-07 · Accessible doesn't have to mean ugly · [measurable/visual] · alerts-badges, tables-lists, buttons, headers-hero, global
- COL-08 · Don't rely on color alone · [visual] · dashboards-stats, alerts-badges, forms, tables-lists

## depth.md
- DEP-01 · Emulate a light source: light comes from above · [measurable] · buttons, forms, cards
- DEP-02 · Don't get carried away with realism · [process] · global
- DEP-03 · Use shadows to convey elevation · [measurable] · buttons, modals, navigation, cards, global
- DEP-04 · Combine shadows with interaction · [visual] · buttons, tables-lists, cards
- DEP-05 · Shadows can have two parts · [measurable] · cards, modals, navigation, global
- DEP-06 · Even flat designs can have depth · [visual] · cards, forms, buttons, global
- DEP-07 · Overlap elements to create layers · [visual] · headers-hero, cards, avatars-images, forms

## images.md
- IMG-01 · Use good photos · [visual] · avatars-images, cards, headers-hero
- IMG-02 · Text on images needs consistent contrast · [measurable/visual] · headers-hero, cards, avatars-images
- IMG-03 · Everything has an intended size: don't scale up icons · [measurable/visual] · headers-hero, empty-states, cards, buttons
- IMG-04 · Don't scale down screenshots · [visual] · headers-hero, avatars-images, empty-states
- IMG-05 · Don't scale down icons/logos either · [visual] · navigation, avatars-images, global
- IMG-06 · Control the shape and size of user-uploaded images · [measurable] · avatars-images, cards, tables-lists
- IMG-07 · Prevent background bleed on user images · [visual] · avatars-images, tables-lists, cards

## finishing.md
- FIN-01 · Supercharge the defaults · [visual] · long-text, forms, headers-hero, cards
- FIN-02 · Add color with accent borders · [visual] · cards, navigation, alerts-badges, headers-hero, global
- FIN-03 · Decorate your backgrounds · [visual] · headers-hero, cards, global
- FIN-04 · Don't overlook empty states · [visual] · empty-states, tables-lists, dashboards-stats
- FIN-05 · Use fewer borders · [measurable/visual] · cards, tables-lists, forms, modals, navigation
- FIN-06 · Think outside the box · [visual] · navigation, tables-lists, forms, cards
- FIN-07 · Keep leveling up · [process] · global

## personality.md
- PER-01 · Font sets the tone · [measurable/visual] · global, headers-hero
- PER-02 · Color sets the tone · [visual] · global, buttons, headers-hero
- PER-03 · Border radius sets the tone — and must be consistent · [measurable] · buttons, cards, forms, modals, alerts-badges
- PER-04 · Language sets the tone · [visual] · global, forms, empty-states
- PER-05 · Choosing a personality · [process] · global

## systems.md
- SYS-01 · Limit your choices: define systems in advance · [measurable] · global
- SYS-02 · Decide by process of elimination · [measurable] · global, buttons
- SYS-03 · Systematize everything · [measurable] · global

## process.md
- PRO-01 · Start with a feature, not a layout · [visual] · global, navigation
- PRO-02 · Detail comes later · [process] · global
- PRO-03 · Design in grayscale first · [visual] · global
- PRO-04 · Don't over-invest in mockups · [process] · global
- PRO-05 · Work in cycles; test edge cases on real UI · [visual] · global, forms, tables-lists, empty-states
- PRO-06 · Be a pessimist: don't imply unbuilt functionality · [visual] · global, forms
