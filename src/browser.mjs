import { chromium } from 'playwright-core';

const NO_BROWSER = `No Chrome/Chromium found. Fix one of:
  - install Google Chrome or Microsoft Edge
  - run: npx playwright install chromium
  - pass --chrome /path/to/chrome`;

/**
 * Launch a Chromium-based browser without downloading one when possible:
 * explicit path → system Chrome → system Edge → Playwright's own Chromium.
 */
export async function launchBrowser({ chrome } = {}) {
  const base = { headless: true, args: ['--no-sandbox'] };
  if (chrome) return chromium.launch({ ...base, executablePath: chrome });

  for (const attempt of [{ channel: 'chrome' }, { channel: 'msedge' }, {}]) {
    try {
      return await chromium.launch({ ...base, ...attempt });
    } catch {
      // try the next option
    }
  }
  throw new Error(NO_BROWSER);
}
