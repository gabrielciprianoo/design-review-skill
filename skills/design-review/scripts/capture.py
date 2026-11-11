#!/usr/bin/env python3
"""Fallback capture for environments without a browser tool (e.g. Claude Code + Playwright).

Takes a screenshot and runs measure_styles.js on a URL or local HTML file.

Usage:
  python3 capture.py <url-or-file> [--selector ".card"] [--width 1280] [--height 800] [--out ./design-review-out]
  # needs: pip install playwright && playwright install chromium   (or --chrome /path/to/chrome)

Outputs: <out>/screenshot.png, <out>/screenshot-gray.png (PRO-03 grayscale test), <out>/measurements.json
"""
import argparse
import json
import pathlib
from playwright.sync_api import sync_playwright

ap = argparse.ArgumentParser()
ap.add_argument("target")
ap.add_argument("--selector", default=None, help="audit only this region (CSS selector)")
ap.add_argument("--width", type=int, default=1280)
ap.add_argument("--height", type=int, default=800)
ap.add_argument("--out", default="design-review-out")
ap.add_argument("--chrome", default=None, help="path to a Chrome/Chromium executable")
ap.add_argument("--full-page", action="store_true")
a = ap.parse_args()

out = pathlib.Path(a.out)
out.mkdir(parents=True, exist_ok=True)
js = (pathlib.Path(__file__).parent / "measure_styles.js").read_text()
url = a.target if "://" in a.target else pathlib.Path(a.target).resolve().as_uri()

with sync_playwright() as p:
    kw = {"args": ["--no-sandbox"]}
    if a.chrome:
        kw["executable_path"] = a.chrome
    b = p.chromium.launch(**kw)
    pg = b.new_page(viewport={"width": a.width, "height": a.height})
    pg.goto(url, wait_until="networkidle")
    if a.selector:
        pg.evaluate("s => window.__DR_ROOT = s", a.selector)
        pg.locator(a.selector).first.screenshot(path=str(out / "screenshot.png"))
    else:
        pg.screenshot(path=str(out / "screenshot.png"), full_page=a.full_page)
    data = json.loads(pg.evaluate(js))
    (out / "measurements.json").write_text(json.dumps(data, indent=1))
    pg.add_style_tag(content="html{filter:grayscale(1)!important}")
    if a.selector:
        pg.locator(a.selector).first.screenshot(path=str(out / "screenshot-gray.png"))
    else:
        pg.screenshot(path=str(out / "screenshot-gray.png"), full_page=a.full_page)
    b.close()

print(f"Saved to {out}/: screenshot.png, screenshot-gray.png, measurements.json")
