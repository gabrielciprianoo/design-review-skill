# design-review-skill

[![npm](https://img.shields.io/npm/v/design-review-skill)](https://www.npmjs.com/package/design-review-skill)

An agent skill that audits a user interface against a structured catalogue of visual-design principles (hierarchy, spacing, typography, color, depth, images, finishing touches), ranks what is wrong, and proposes a corrected design you can see in the browser.

## Install

### Any agent (skills.sh)

```bash
npx skills add https://github.com/gabrielciprianoo/design-review-skill --skill design-review
```

This installs into the current project for the agents it detects. Common variants:

```bash
npx skills add gabrielciprianoo/design-review-skill --skill design-review -g              # personal, all projects
npx skills add gabrielciprianoo/design-review-skill --skill design-review -a claude-code  # one agent only
```

The `skills` CLI needs Node.js 22.20 or later. To update or uninstall:

```bash
npx skills update design-review
npx skills remove design-review
```

### Claude Code plugin

```
/plugin install design-review --marketplace gabrielciprianoo/design-review-skill
```

On older Claude Code versions, add the marketplace first:

```
/plugin marketplace add gabrielciprianoo/design-review-skill
/plugin install design-review@design-review-skill
```

## Quick start

After installing, ask your agent something like:

> Review the design of http://localhost:3000/pricing

## What it does

1. **Captures** the interface: screenshot, grayscale screenshot, and in-page style measurements (font sizes, spacing, colors, contrast, shadows) via a browser tool or the `design-review-skill` CLI (Playwright).
2. **Analyzes** the capture against the principles in `skills/design-review/references/`, loading only the files the task needs.
3. **Delivers** ranked findings (each tied to a principle ID with evidence and a concrete fix) and a proposal page.
4. **Compares** before and after in the browser, with live reload, so you can keep refining the proposal with the agent until it is right, and then apply it to your code.

## CLI

The skill calls this CLI when the agent has a shell. You can also run it yourself (Node 18.17+, uses your installed Chrome or Edge):

```bash
npx design-review-skill capture http://localhost:3000 --mobile    # → design-review-out/
npx design-review-skill compare                                   # before/after page with live reload
```

| Command | Output |
| --- | --- |
| `capture <url\|file> [--selector css] [--mobile] [--full-page] [--out dir]` | `screenshot.png`, `screenshot-gray.png`, `measurements.json`, `screenshot-mobile.png` |
| `compare [--out dir] [--before png] [--after html] [--findings json] [--no-open]` | Local page with before/after, findings, viewport and grayscale toggles. Reloads when `proposal.html` or `findings.json` change. |

No Chrome or Edge? Run `npx playwright install chromium` or pass `--chrome /path/to/chrome`.

## Repository layout

```
.claude-plugin/               ← Claude Code plugin + marketplace manifests
skills/design-review/         ← the skill (what skills.sh installs)
├── SKILL.md                  ← workflow + routing table
├── references/
│   ├── principles/           ← source of truth: 10 topic files + INDEX.md (80 principles)
│   └── components/           ← generated: 12 component checklists + INDEX.md
└── scripts/
    └── measure_styles.js     ← in-page measurements (browser JS tool / page.evaluate)
bin/cli.mjs, src/             ← the design-review-skill npm CLI (capture + compare)
test/                         ← node:test unit tests
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

Run the tests and try the CLI against the sample page:

```bash
npm install
npm test
node bin/cli.mjs capture examples/sample-bad-page.html --mobile --out /tmp/dr
node bin/cli.mjs compare --out /tmp/dr
```

Work happens through pull requests against `main`. Use [Conventional Commits](https://www.conventionalcommits.org/): release-please turns them into a release PR, and merging that PR tags the release, bumps the plugin version, and publishes the CLI to npm through trusted publishing (OIDC, no token secret).

## Attribution

The principles are original paraphrased summaries informed by the book *Refactoring UI* by Adam Wathan and Steve Schoger. This project is not affiliated with or endorsed by the authors. If you find the principles useful, buy the book.

## License

[MIT](LICENSE)
