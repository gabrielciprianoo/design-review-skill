#!/usr/bin/env python3
"""Generate principles/INDEX.md, components/*.md and components/INDEX.md from principle files.

Usage: python3 build_indexes.py <path-to-skill-root>
Re-run whenever a principle file changes.
"""
import re
import sys
from pathlib import Path

ROOT = Path(sys.argv[1])
P = ROOT / "references" / "principles"
C = ROOT / "references" / "components"

TOPIC_ORDER = ["hierarchy", "layout-spacing", "typography", "color", "depth",
               "images", "finishing", "personality", "systems", "process"]

COMPONENTS = {
    "buttons": ("Buttons & actions", "Clickable actions: buttons, button groups, links styled as buttons, icon buttons, CTAs."),
    "cards": ("Cards", "Containers with background, border or shadow grouping related content (product, profile, pricing, feed items, metric tiles)."),
    "forms": ("Forms & inputs", "Text inputs, selects, checkboxes, radios, labels, validation, multi-step forms, settings pages, login/signup."),
    "tables-lists": ("Tables & lists", "Data tables, list views, feeds, row-based collections, spec sheets, search results."),
    "navigation": ("Navigation", "Top nav, sidebars, tabs, breadcrumbs, dropdown menus, steppers."),
    "headers-hero": ("Headers & hero sections", "Page titles, section headings, landing-page heroes, marketing sections, feature rows."),
    "dashboards-stats": ("Dashboards & stats", "Metric tiles, KPIs, charts, summary panels, data-dense overview screens."),
    "modals": ("Modals & overlays", "Dialogs, confirmations, popovers, drawers, anything floating above the page."),
    "empty-states": ("Empty states", "Screens or sections with no data yet: first-run, zero results, cleared lists."),
    "alerts-badges": ("Alerts & badges", "Alerts, banners, toasts, status pills, tags, 'NEW' labels, inline notices."),
    "avatars-images": ("Avatars & images", "Photos, avatars, thumbnails, icons, illustrations, screenshots, user-uploaded media."),
    "long-text": ("Long-form text", "Paragraphs, articles, docs, descriptions, blog posts, help content."),
}

CORE_GLOBAL = ["HIE-01", "HIE-03", "PRO-03", "SYS-01", "LAY-03", "LAY-12", "TYP-01", "COL-07"]

head_re = re.compile(r"^### ([A-Z]{3}-\d{2}) · (.+)$")


def parse():
    items = []
    for topic in TOPIC_ORDER:
        f = P / f"{topic}.md"
        text = f.read_text()
        blocks = re.split(r"(?m)^(?=### )", text)
        for b in blocks:
            m = head_re.match(b.splitlines()[0]) if b.strip() else None
            if not m:
                continue
            am = re.search(r"(?m)^\*\*Applies to:\*\* (.+)$", b)
            if not am:
                raise SystemExit(f"Missing 'Applies to' in {m.group(1)}")
            applies = [a.strip() for a in am.group(1).split(",")]
            for a in applies:
                if a != "global" and a not in COMPONENTS:
                    raise SystemExit(f"Unknown component '{a}' in {m.group(1)}")
            detect = re.findall(r"\[(measurable|visual)\]", b)
            body = re.sub(r"(?m)^\*\*Applies to:\*\*.*\n?", "", b).rstrip() + "\n"
            items.append(dict(id=m.group(1), title=m.group(2), topic=topic,
                              applies=applies, detect=sorted(set(detect)), body=body))
    return items


def main():
    items = parse()
    by_id = {i["id"]: i for i in items}
    C.mkdir(parents=True, exist_ok=True)

    # principles/INDEX.md
    lines = ["# Principles index",
             f"{len(items)} principles from *Refactoring UI*. One line each: ID · title · file · detection · applies to.",
             "Open only the topic file(s) you need; each ID is a `### ID` heading inside its file.", ""]
    for topic in TOPIC_ORDER:
        lines.append(f"## {topic}.md")
        for i in (x for x in items if x["topic"] == topic):
            det = "/".join(i["detect"]) or "process"
            lines.append(f"- {i['id']} · {i['title']} · [{det}] · {', '.join(i['applies'])}")
        lines.append("")
    (P / "INDEX.md").write_text("\n".join(lines))

    # components/*.md
    cidx = ["# Components index",
            "Pick the file(s) matching what's on screen or what the user asked about. Each file is self-contained: "
            "all component-specific principles in full + pointers to core global checks.", ""]
    for key, (name, desc) in COMPONENTS.items():
        rel = [i for i in items if key in i["applies"]]
        out = [f"# {name}", f"_{desc}_", "",
               "## Core global checks (always apply; details in principles/)"]
        for gid in CORE_GLOBAL:
            g = by_id[gid]
            out.append(f"- {gid} · {g['title']} → principles/{g['topic']}.md")
        out += ["", f"## Component principles ({len(rel)})", ""]
        for i in rel:
            out.append(i["body"].replace("### ", f"### ", 1).rstrip())
            out.append(f"_Source: principles/{i['topic']}.md_")
            out.append("")
        (C / f"{key}.md").write_text("\n".join(out))
        cidx.append(f"- **{key}.md** — {name} ({len(rel)} principles). {desc}")
    (C / "INDEX.md").write_text("\n".join(cidx) + "\n")
    print(f"{len(items)} principles; components written: {len(COMPONENTS)}")


if __name__ == "__main__":
    main()
