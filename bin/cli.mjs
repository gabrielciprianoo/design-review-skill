#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { capture } from '../src/capture.mjs';
import { compare } from '../src/compare.mjs';

const HELP = `design-review-skill — capture and compare helper for the design-review skill

Usage:
  design-review-skill capture <url|file> [options]
      --out <dir>          output directory (default: design-review-out)
      --selector <css>     audit only this region
      --width <px>         viewport width (default: 1280)
      --height <px>        viewport height (default: 800)
      --mobile             also capture a 390x844 mobile screenshot
      --full-page          capture the full scrollable page
      --chrome <path>      Chrome/Chromium executable to use

  design-review-skill compare [options]
      --out <dir>          directory holding the files below (default: design-review-out)
      --before <png>       before screenshot (default: <out>/screenshot.png)
      --after <html>       proposal page (default: <out>/proposal.html)
      --findings <json>    findings list (default: <out>/findings.json, optional)
      --port <n>           port to listen on (default: random free port)
      --no-open            do not open the browser

  Outputs of capture: screenshot.png, screenshot-gray.png, measurements.json
  (+ screenshot-mobile.png). compare serves a before/after page that reloads
  whenever the proposal or findings change; stop it with Ctrl+C.
`;

const [command, ...rest] = process.argv.slice(2);

const options = {
  out: { type: 'string', default: 'design-review-out' },
  selector: { type: 'string' },
  width: { type: 'string', default: '1280' },
  height: { type: 'string', default: '800' },
  mobile: { type: 'boolean', default: false },
  'full-page': { type: 'boolean', default: false },
  chrome: { type: 'string' },
  before: { type: 'string' },
  after: { type: 'string' },
  findings: { type: 'string' },
  port: { type: 'string', default: '0' },
  'no-open': { type: 'boolean', default: false },
  help: { type: 'boolean', short: 'h', default: false },
};

async function main() {
  if (!command || command === '--help' || command === '-h' || command === 'help') {
    process.stdout.write(HELP);
    return;
  }
  const { values, positionals } = parseArgs({ args: rest, options, allowPositionals: true });
  if (values.help) {
    process.stdout.write(HELP);
    return;
  }

  if (command === 'capture') {
    if (!positionals[0]) throw new Error('capture needs a URL or file path. Run with --help.');
    const files = await capture({
      target: positionals[0],
      out: values.out,
      selector: values.selector,
      width: Number(values.width),
      height: Number(values.height),
      mobile: values.mobile,
      fullPage: values['full-page'],
      chrome: values.chrome,
    });
    process.stdout.write(`Saved to ${values.out}/: ${files.join(', ')}\n`);
    return;
  }

  if (command === 'compare') {
    await compare({
      out: values.out,
      before: values.before,
      after: values.after,
      findings: values.findings,
      port: Number(values.port),
      open: !values['no-open'],
    });
    return;
  }

  throw new Error(`Unknown command "${command}". Run with --help.`);
}

main().catch((err) => {
  process.stderr.write(`error: ${err.message}\n`);
  process.exit(1);
});
