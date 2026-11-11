import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { launchBrowser } from './browser.mjs';
import { toUrl } from './paths.mjs';

const MEASURE_SCRIPT = new URL('../skills/design-review/scripts/measure_styles.js', import.meta.url);
const MOBILE = { width: 390, height: 844 };

/**
 * Screenshot a page, run measure_styles.js on it and take the grayscale
 * screenshot used by the PRO-03 test. Returns the names of the files written.
 */
export async function capture({ target, out, selector, width, height, mobile, fullPage, chrome }) {
  await mkdir(out, { recursive: true });
  const script = await readFile(MEASURE_SCRIPT, 'utf8');
  const url = toUrl(target);
  const files = [];

  const browser = await launchBrowser({ chrome });
  try {
    const page = await browser.newPage({ viewport: { width, height } });
    await page.goto(url, { waitUntil: 'networkidle' });

    const shoot = async (name) => {
      const file = path.join(out, name);
      if (selector) await page.locator(selector).first().screenshot({ path: file });
      else await page.screenshot({ path: file, fullPage });
      files.push(name);
    };

    if (selector) await page.evaluate((s) => { window.__DR_ROOT = s; }, selector);
    await shoot('screenshot.png');

    const measurements = JSON.parse(await page.evaluate(script));
    await writeFile(path.join(out, 'measurements.json'), JSON.stringify(measurements, null, 1));
    files.push('measurements.json');

    const gray = await page.addStyleTag({ content: 'html{filter:grayscale(1)!important}' });
    await shoot('screenshot-gray.png');
    await gray.evaluate((el) => el.remove());

    if (mobile) {
      await page.setViewportSize(MOBILE);
      await page.waitForTimeout(300);
      await shoot('screenshot-mobile.png');
    }
  } finally {
    await browser.close();
  }
  return files;
}
