# design-review-skill

An agent skill that audits a user interface against a structured catalogue of visual-design principles (hierarchy, spacing, typography, color, depth, images, finishing touches), ranks what is wrong, and proposes a corrected design you can see in the browser.

## Quick start

```bash
npx skills@latest add gabrielciprianoo/design-review-skill
```

Then ask your agent something like:

> Review the design of http://localhost:3000/pricing

To uninstall:

```bash
npx skills@latest remove gabrielciprianoo/design-review-skill
```

## What it does

1. **Captures** the interface: screenshot, grayscale screenshot, and in-page style measurements (font sizes, spacing, colors, contrast, shadows) via a browser tool or Playwright.
2. **Analyzes** the capture against the principles in `skills/design-review/references/`, loading only the files the task needs.
3. **Delivers** ranked findings (each tied to a principle ID with evidence and a concrete fix) and a corrected design, shown before/after.

## Repository layout

```
skills/design-review/         ← the skill (what skills.sh installs)
├── SKILL.md                  ← workflow + routing table
├── references/
│   ├── principles/           ← source of truth: 10 topic files + INDEX.md (80 principles)
│   └── components/           ← generated: 12 component checklists + INDEX.md
└── scripts/
    ├── measure_styles.js     ← in-page measurements (browser JS tool / page.evaluate)
    └── capture.py            ← Playwright fallback: screenshot + grayscale + measurements.json
tools/
└── build_indexes.py          ← regenerates INDEX.md files and components/ from principles/
examples/
└── sample-bad-page.html      ← test page with deliberate problems
```

## Manual install

Copy `skills/design-review/` to `<repo>/.claude/skills/design-review/` (project) or `~/.claude/skills/design-review/` (personal).

## Development

After editing any principle file, regenerate the indexes and component checklists:

```bash
python3 tools/build_indexes.py skills/design-review
```

Every principle needs `### ABC-00 · Title`, a `**Detect:** [measurable|visual]` line when auditable, and `**Applies to:**` with tags from the component list in `build_indexes.py`.

Test the capture script against the sample page:

```bash
pip install playwright && playwright install chromium
python3 skills/design-review/scripts/capture.py examples/sample-bad-page.html --out /tmp/dr
```

Work happens through pull requests against `main`. Use [Conventional Commits](https://www.conventionalcommits.org/) so release-please can version and changelog releases.

## Attribution

The principles are original paraphrased summaries informed by the book *Refactoring UI* by Adam Wathan and Steve Schoger. This project is not affiliated with or endorsed by the authors. If you find the principles useful, buy the book.

## License

[MIT](LICENSE)
