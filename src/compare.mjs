import { spawn } from 'node:child_process';
import { createReadStream, watch } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { safeJoin } from './paths.mjs';

const PAGE = new URL('./compare-page.html', import.meta.url);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

const WAITING = `<!doctype html><meta charset="utf-8"><title>Waiting</title>
<style>html{font:15px/1.5 system-ui,sans-serif;color:#64748b;display:grid;place-items:center;height:100%;margin:0}</style>
<p>Waiting for the proposal file&hellip; this view reloads when it appears.</p>`;

async function isFile(file) {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
}

function sendFile(res, file) {
  res.writeHead(200, {
    'content-type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'cache-control': 'no-store',
  });
  createReadStream(file).pipe(res);
}

function openInBrowser(url) {
  const [cmd, args] =
    process.platform === 'darwin' ? ['open', [url]]
    : process.platform === 'win32' ? ['cmd', ['/c', 'start', '', url]]
    : ['xdg-open', [url]];
  try {
    spawn(cmd, args, { stdio: 'ignore', detached: true }).on('error', () => {}).unref();
  } catch {
    // the URL is printed anyway
  }
}

/**
 * Serve a before/after page for the proposal and push a reload to it over
 * server-sent events whenever the proposal, its assets, the findings or the
 * before screenshot change on disk.
 */
export async function compare({ out, before, after, findings, port, open }) {
  const beforeFile = path.resolve(before || path.join(out, 'screenshot.png'));
  const afterFile = path.resolve(after || path.join(out, 'proposal.html'));
  const beforeMobileFile = beforeFile.replace(/(\.[a-z]+)?$/i, '-mobile$1');
  const findingsFile = path.resolve(findings || path.join(out, 'findings.json'));
  const afterDir = path.dirname(afterFile);
  const afterName = path.basename(afterFile);
  const page = (await readFile(PAGE, 'utf8')).replace('__AFTER_NAME__', encodeURIComponent(afterName));

  const clients = new Set();
  const broadcast = (kind) => {
    for (const res of clients) res.write(`data: ${kind}\n\n`);
  };

  const server = http.createServer(async (req, res) => {
    const { pathname } = new URL(req.url, 'http://localhost');

    if (pathname === '/') {
      res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-store' });
      return res.end(page);
    }
    if (pathname === '/events') {
      res.writeHead(200, {
        'content-type': 'text/event-stream',
        'cache-control': 'no-store',
        connection: 'keep-alive',
      });
      res.write('retry: 1000\n\n');
      clients.add(res);
      req.on('close', () => clients.delete(res));
      return;
    }
    if (pathname === '/before.png') {
      if (await isFile(beforeFile)) return sendFile(res, beforeFile);
      res.writeHead(404);
      return res.end();
    }
    if (pathname === '/before-mobile.png') {
      if (await isFile(beforeMobileFile)) return sendFile(res, beforeMobileFile);
      res.writeHead(404);
      return res.end();
    }
    if (pathname === '/findings.json') {
      if (await isFile(findingsFile)) return sendFile(res, findingsFile);
      res.writeHead(404);
      return res.end();
    }
    if (pathname.startsWith('/after/')) {
      const file = safeJoin(afterDir, pathname.slice('/after/'.length) || afterName);
      if (file && (await isFile(file))) return sendFile(res, file);
      if (file === afterFile) {
        res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-store' });
        return res.end(WAITING);
      }
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(404);
    res.end();
  });

  const timers = new Map();
  const notify = (kind) => {
    clearTimeout(timers.get(kind));
    timers.set(kind, setTimeout(() => broadcast(kind), 120));
  };
  const watched = new Set();
  for (const dir of new Set([afterDir, path.dirname(beforeFile), path.dirname(findingsFile)])) {
    try {
      watched.add(
        watch(dir, (_event, name) => {
          const file = name ? path.join(dir, name.toString()) : '';
          if (file === findingsFile) notify('findings');
          else if (file === beforeFile || file === beforeMobileFile) notify('before');
          else if (dir === afterDir) notify('after');
        }),
      );
    } catch {
      // directory may not exist yet; the page still works, just without live reload for it
    }
  }

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });
  const url = `http://127.0.0.1:${server.address().port}/`;
  process.stdout.write(`Design review compare page: ${url}\nWatching ${afterFile}\nPress Ctrl+C to stop.\n`);
  if (open) openInBrowser(url);

  const stop = () => {
    for (const w of watched) w.close();
    for (const res of clients) res.end();
    server.close(() => process.exit(0));
  };
  process.once('SIGINT', stop);
  process.once('SIGTERM', stop);
  return { url, server, stop };
}
