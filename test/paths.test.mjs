import assert from 'node:assert/strict';
import path from 'node:path';
import { test } from 'node:test';
import { safeJoin, toUrl } from '../src/paths.mjs';

test('toUrl keeps URLs with a scheme', () => {
  assert.equal(toUrl('http://localhost:3000/a'), 'http://localhost:3000/a');
  assert.equal(toUrl('file:///tmp/x.html'), 'file:///tmp/x.html');
});

test('toUrl turns a relative path into a file URL', () => {
  const url = toUrl('examples/page.html');
  assert.ok(url.startsWith('file://'));
  assert.ok(url.endsWith('/examples/page.html'));
});

test('safeJoin resolves files inside the root', () => {
  const root = path.resolve('/srv/out');
  assert.equal(safeJoin(root, 'proposal.html'), path.join(root, 'proposal.html'));
  assert.equal(safeJoin(root, 'assets/a%20b.png'), path.join(root, 'assets', 'a b.png'));
});

test('safeJoin rejects paths that escape the root', () => {
  const root = path.resolve('/srv/out');
  assert.equal(safeJoin(root, '../secret'), path.join(root, 'secret'));
  assert.equal(safeJoin(root, '..%2F..%2Fetc%2Fpasswd'), path.join(root, 'etc', 'passwd'));
  assert.equal(safeJoin(root, '%00'), null);
  assert.equal(safeJoin(root, '%E0%A4%A'), null);
});
