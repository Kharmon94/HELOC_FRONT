#!/usr/bin/env node
/**
 * Figma sync: check and diff against BlackCollar27/HELOC-Guru.
 * Usage: node scripts/figma-sync.js check | diff
 * Env: FIGMA_REPO_URL (default https://github.com/BlackCollar27/HELOC-Guru.git)
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const DEFAULT_REPO = 'https://github.com/BlackCollar27/HELOC-Guru.git'
const REPO_URL = process.env.FIGMA_REPO_URL || DEFAULT_REPO
const ROOT = path.resolve(__dirname, '..')
const TEMP_DIR = path.join(ROOT, 'temp', 'figma-repo')
const SRC_DIR = path.join(ROOT, 'src')
const STATE_FILE = path.join(ROOT, '.figma-sync-state.json')
const REPORTS_DIR = path.join(ROOT, 'reports')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function cloneOrPull() {
  ensureDir(path.dirname(TEMP_DIR))
  if (fs.existsSync(path.join(TEMP_DIR, '.git'))) {
    execSync('git fetch origin && git reset --hard origin/main', {
      cwd: TEMP_DIR,
      stdio: 'pipe'
    })
  } else {
    execSync(`git clone --depth 1 ${REPO_URL} "${TEMP_DIR}"`, { stdio: 'pipe' })
  }
  const rev = execSync('git rev-parse HEAD', { cwd: TEMP_DIR, encoding: 'utf8' }).trim()
  return rev
}

function listFiles(dir, base = dir) {
  let out = []
  if (!fs.existsSync(dir)) return out
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    const rel = path.relative(base, full)
    if (e.isDirectory()) {
      out = out.concat(listFiles(full, base))
    } else {
      out.push(rel.replace(/\\/g, '/'))
    }
  }
  return out
}

function cmdCheck() {
  const rev = cloneOrPull()
  const figmaFiles = listFiles(path.join(TEMP_DIR, 'src'))
  const ourFiles = listFiles(SRC_DIR)
  const state = {
    lastFigmaCommit: rev,
    checkedAt: new Date().toISOString(),
    figmaFileCount: figmaFiles.length,
    ourFileCount: ourFiles.length
  }
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2))
  console.log('Figma repo:', TEMP_DIR)
  console.log('Last commit:', rev)
  console.log('Figma src files:', state.figmaFileCount)
  console.log('Our src files:', state.ourFileCount)
  console.log('State saved to', STATE_FILE)
}

function hasIntegrationHint(content) {
  if (!content) return false
  return /apiService|\.\.\/services\/api|\.\.\/types|from ['"]\.\.\/types/.test(content)
}

function cmdDiff() {
  if (!fs.existsSync(TEMP_DIR)) {
    cloneOrPull()
  }
  ensureDir(REPORTS_DIR)
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)
  const reportPath = path.join(REPORTS_DIR, `figma-diff-${timestamp}.md`)
  const figmaSrc = path.join(TEMP_DIR, 'src')
  const lines = [
    '# Figma diff report',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Figma repo (HELOC-Guru) src structure',
    ''
  ]
  const figmaFiles = listFiles(figmaSrc).sort()
  for (const f of figmaFiles) {
    lines.push(`- ${f}`)
  }
  lines.push('', '## Our src structure', '')
  const ourFiles = listFiles(SRC_DIR).sort()
  for (const f of ourFiles) {
    lines.push(`- ${f}`)
  }
  lines.push('', '## Files to preserve (backend integration)', '')
  for (const f of ourFiles) {
    const full = path.join(SRC_DIR, f)
    try {
      const content = fs.readFileSync(full, 'utf8')
      if (hasIntegrationHint(content)) {
        lines.push(`- \`${f}\` – uses apiService, types, or services/api`)
      }
    } catch (_) {}
  }
  fs.writeFileSync(reportPath, lines.join('\n'))
  console.log('Report written to', reportPath)
}

const cmd = process.argv[2]
if (cmd === 'check') {
  cmdCheck()
} else if (cmd === 'diff') {
  cmdDiff()
} else {
  console.log('Usage: node scripts/figma-sync.js check | diff')
  process.exit(1)
}
