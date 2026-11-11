/*
 * measure_styles.js — Design audit measurements for the design-review skill.
 *
 * Run inside the page (Claude in Chrome javascript tool, Playwright page.evaluate,
 * or DevTools console). It's one expression that returns a compact JSON string.
 * Optional: set window.__DR_ROOT = '<css selector>' before running to audit one
 * component/region only (e.g. '.pricing-card').
 *
 * Output keys map to principle IDs (see references/principles/INDEX.md).
 */
(() => {
  const TYPE_SCALE = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72];            // TYP-01
  const SPACE_SCALE = [0, 1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256]; // LAY-03 (1-2px allowed for hairlines)
  const MAX_LIST = 12;

  const root = (window.__DR_ROOT && document.querySelector(window.__DR_ROOT)) || document.body;
  const all = [root, ...root.querySelectorAll('*')];
  const vw = window.innerWidth;

  const visible = (el, cs) => {
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  const px = v => Math.round(parseFloat(v) * 100) / 100;
  const parseColor = s => {
    const m = s && s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const toHsl = ({ r, g, b }) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0; const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
  };
  const hslStr = c => { const h = toHsl(c); return `hsl(${h.h},${h.s}%,${h.l}%)` + (c.a < 1 ? `/${c.a}` : ''); };
  const lum = ({ r, g, b }) => {
    const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  const contrast = (a, b) => { const L1 = lum(a), L2 = lum(b); return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05); };
  const effectiveBg = el => {
    let layers = [], hasImage = false;
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') hasImage = true;
      const c = parseColor(cs.backgroundColor);
      if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; }
    }
    let bg = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = layers.length - 1; i >= 0; i--) bg = blend(layers[i], bg);
    return { bg, hasImage };
  };
  const sel = el => {
    let s = el.tagName.toLowerCase();
    if (el.id) return s + '#' + el.id;
    const cls = [...el.classList].slice(0, 2).join('.');
    return cls ? `${s}.${cls}` : s;
  };
  const snippet = el => (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 40);
  const tally = (map, k) => map.set(k, (map.get(k) || 0) + 1);
  const top = (map, n = MAX_LIST) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([k, v]) => `${k} ×${v}`);
  const offScale = (v, scale) => v > 0 && !scale.includes(Math.round(v));
  const hasOwnText = el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 0);

  const fontSizes = new Map(), weights = new Map(), families = new Map(), textColors = new Map(),
        spacing = new Map(), radii = new Map(), shadows = new Map(), bgColors = new Map();
  const issues = {
    contrastFail: [], greyOnColor: [], thinWeights: [], uppercaseNoTracking: [], longCentered: [],
    longLines: [], tightLineHeight: [], loosHeadingLineHeight: [], centerMixedSizes: [], distortedImages: [],
    percentWidthSidebars: [], solidButtons: [], borderedElements: 0, emUnitsSuspect: []
  };
  const push = (arr, item) => { if (arr.length < MAX_LIST) arr.push(item); };

  for (const el of all) {
    const cs = getComputedStyle(el);
    if (!visible(el, cs)) continue;
    const r = el.getBoundingClientRect();

    // Spacing, radius, shadow, borders (LAY-03, PER-03, DEP-03, FIN-05)
    ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'marginTop', 'marginBottom', 'rowGap', 'columnGap'].forEach(p => {
      const v = px(cs[p]); if (v > 0) tally(spacing, v);
    });
    const br = px(cs.borderTopLeftRadius); if (br > 0) tally(radii, br >= 999 ? 'full' : br);
    if (cs.boxShadow && cs.boxShadow !== 'none') tally(shadows, cs.boxShadow.slice(0, 80));
    const bw = ['Top', 'Right', 'Bottom', 'Left'].filter(s => px(cs[`border${s}Width`]) > 0 && cs[`border${s}Style`] !== 'none');
    if (bw.length) issues.borderedElements++;
    const bgc = parseColor(cs.backgroundColor); if (bgc && bgc.a > 0) tally(bgColors, hslStr(bgc));

    // Buttons (HIE-13)
    if (el.matches('button, [role=button], a.btn, a.button, input[type=submit], input[type=button]')) {
      if (bgc && bgc.a > 0.9) {
        const h = toHsl(bgc);
        if (h.s > 25 && h.l < 75) push(issues.solidButtons, `${sel(el)} "${snippet(el)}" ${hslStr(bgc)}`);
      }
    }

    // Images (IMG-06)
    if (el.tagName === 'IMG' && el.naturalWidth && cs.objectFit === 'fill') {
      const nat = el.naturalWidth / el.naturalHeight, ren = r.width / r.height;
      if (Math.abs(nat - ren) / nat > 0.05) push(issues.distortedImages, `${sel(el)} natural ${nat.toFixed(2)} vs rendered ${ren.toFixed(2)}`);
    }

    // Sidebars sized in % (LAY-08)
    if ((el.tagName === 'ASIDE' || /sidebar|sidenav/i.test(el.className)) && /%/.test(el.style.width || '')) {
      push(issues.percentWidthSidebars, sel(el));
    }

    // Flex rows mixing font sizes with center alignment (TYP-06)
    if ((cs.display === 'flex' || cs.display === 'inline-flex') && cs.flexDirection.startsWith('row') && cs.alignItems === 'center') {
      const kids = [...el.children].filter(k => hasOwnText(k));
      const sizes = new Set(kids.map(k => px(getComputedStyle(k).fontSize)));
      if (kids.length >= 2 && sizes.size >= 2) {
        const arr = [...sizes]; if (Math.max(...arr) / Math.min(...arr) >= 1.25) push(issues.centerMixedSizes, `${sel(el)} sizes ${arr.join('/')}px`);
      }
    }

    if (!hasOwnText(el)) continue;
    // ---- Text checks ----
    const fs = px(cs.fontSize), fw = parseInt(cs.fontWeight, 10), lh = cs.lineHeight === 'normal' ? 1.2 : px(cs.lineHeight) / fs;
    tally(fontSizes, fs); tally(weights, fw); tally(families, cs.fontFamily.split(',')[0].replace(/["']/g, '').trim());
    if (fs % 1 !== 0) push(issues.emUnitsSuspect, `${sel(el)} ${fs}px`);
    const fg = parseColor(cs.color);
    if (!fg) continue;
    tally(textColors, hslStr(fg));
    const { bg, hasImage } = effectiveBg(el);
    const fgFlat = fg.a < 1 ? blend(fg, bg) : fg;
    const ratio = contrast(fgFlat, bg);
    const large = fs >= 24 || (fs >= 18.66 && fw >= 700);
    if (!hasImage && ratio < (large ? 3 : 4.5)) push(issues.contrastFail, `${sel(el)} "${snippet(el)}" ${ratio.toFixed(2)}:1 (${hslStr(fg)} on ${hslStr(bg)}, ${fs}px)`);
    // HIE-04: grey or translucent text on a saturated background
    const fh = toHsl(fg), bh = toHsl(bg);
    if (bh.s > 20 && bh.l < 90 && ((fh.s < 8 && fh.l > 20 && fh.l < 90) || fg.a < 1)) push(issues.greyOnColor, `${sel(el)} "${snippet(el)}" ${hslStr(fg)} on ${hslStr(bg)}`);
    // HIE-03
    if (fw < 400 && fs < 24) push(issues.thinWeights, `${sel(el)} ${fw} @ ${fs}px`);
    // TYP-11
    const txt = (el.innerText || '').trim();
    const isUpper = cs.textTransform === 'uppercase' || (txt.length > 3 && txt === txt.toUpperCase() && /[A-Z]/.test(txt));
    if (isUpper && (cs.letterSpacing === 'normal' || px(cs.letterSpacing) <= 0)) push(issues.uppercaseNoTracking, `${sel(el)} "${snippet(el)}"`);
    // TYP-10
    const lines = (r.height - px(cs.paddingTop) - px(cs.paddingBottom)) / (lh * fs);
    if (cs.textAlign === 'center' && lines > 3.2) push(issues.longCentered, `${sel(el)} ~${Math.round(lines)} lines centered`);
    // TYP-04 / TYP-07 / TYP-08
    const chars = r.width / (fs * 0.5);
    if (lines > 1.5 && chars > 80) push(issues.longLines, `${sel(el)} ~${Math.round(chars)} chars/line, lh ${lh.toFixed(2)}`);
    if (lines > 1.5 && fs <= 16 && lh < 1.35) push(issues.tightLineHeight, `${sel(el)} ${fs}px lh ${lh.toFixed(2)}`);
    if (fs >= 30 && lh >= 1.45) push(issues.loosHeadingLineHeight, `${sel(el)} ${fs}px lh ${lh.toFixed(2)}`);
  }

  const offType = [...fontSizes.keys()].filter(v => offScale(v, TYPE_SCALE)).sort((a, b) => a - b);
  const offSpace = [...spacing.keys()].filter(v => offScale(v, SPACE_SCALE)).sort((a, b) => a - b);

  return JSON.stringify({
    scope: window.__DR_ROOT || 'body', viewport: `${vw}x${window.innerHeight}`, url: location.href,
    typography: {                                   // TYP-01/02/03, HIE-03
      distinctFontSizes: fontSizes.size, fontSizes: top(fontSizes, 20), offTypeScale: offType,
      fontWeights: top(weights), fontFamilies: top(families, 6), fractionalSizes: issues.emUnitsSuspect,
      thinWeightsAtSmallSizes: issues.thinWeights, uppercaseWithoutTracking: issues.uppercaseNoTracking,
      longCenteredText: issues.longCentered, longLines: issues.longLines,
      tightLineHeight: issues.tightLineHeight, looseHeadingLineHeight: issues.loosHeadingLineHeight,
      mixedSizesCenterAligned: issues.centerMixedSizes
    },
    color: {                                        // HIE-03/04, COL-02/03/06/07
      distinctTextColors: textColors.size, textColors: top(textColors), backgroundColors: top(bgColors),
      contrastFailures: issues.contrastFail, greyOrTranslucentTextOnColor: issues.greyOnColor
    },
    spacing: { distinctValues: spacing.size, values: top(spacing, 20), offSpacingScale: offSpace },   // LAY-03
    shape: { borderRadii: top(radii), boxShadows: top(shadows, 8), distinctShadows: shadows.size,
             elementsWithBorders: issues.borderedElements },                                         // PER-03, DEP-03, FIN-05
    actions: { solidColoredButtons: issues.solidButtons },                                            // HIE-13
    layout: { percentWidthSidebars: issues.percentWidthSidebars, distortedImages: issues.distortedImages } // LAY-08, IMG-06
  });
})();
