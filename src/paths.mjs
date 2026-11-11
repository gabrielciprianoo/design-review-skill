import path from 'node:path';
import { pathToFileURL } from 'node:url';

/** Turn a CLI target into a URL: anything with a scheme passes through, the rest is a local file. */
export function toUrl(target) {
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(target)) return target;
  return pathToFileURL(path.resolve(target)).href;
}

/**
 * Resolve a URL path inside `root`, or return null if it would escape it.
 * Used by the compare server to serve the proposal's assets.
 */
export function safeJoin(root, urlPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  if (decoded.includes('\0')) return null;
  const resolvedRoot = path.resolve(root);
  const full = path.resolve(resolvedRoot, '.' + path.posix.normalize('/' + decoded));
  if (full !== resolvedRoot && !full.startsWith(resolvedRoot + path.sep)) return null;
  return full;
}
