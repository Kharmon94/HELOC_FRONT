#!/usr/bin/env node
/**
 * Ensure npm-installed native binaries are executable (fixes EACCES in Docker/Railway).
 * No-op on Windows; on Unix chmods known paths when present.
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const binaries = [
  'node_modules/@esbuild/linux-x64/bin/esbuild',
];

if (process.platform === 'win32') {
  process.exit(0);
}

for (const rel of binaries) {
  const p = path.join(root, rel);
  if (fs.existsSync(p)) {
    try {
      fs.chmodSync(p, 0o755);
    } catch (err) {
      console.warn('fix-binaries:', rel, err.message);
    }
  }
}
