# CLAUDE.md

Guidance for agents working in this repository.

## Purpose

Source for the `design-review` agent skill, distributed through skills.sh (`npx skills@latest add gabrielciprianoo/design-review-skill`).

## Layout

- `skills/design-review/` is the installable skill. Everything inside it ships to users.
- `skills/design-review/references/principles/*.md` are the source of truth. `references/*/INDEX.md` and `references/components/*.md` are generated: never edit them by hand, run `python3 tools/build_indexes.py skills/design-review`.
- `tools/` and `examples/` are for maintainers only and are not part of the skill.

## Conventions

- Skill text is written in English; the skill tells the agent to answer in the user's language.
- Principles are paraphrased summaries. Never paste text from the book.
- Work goes through pull requests to `main` with Conventional Commit messages (release-please builds the changelog).
