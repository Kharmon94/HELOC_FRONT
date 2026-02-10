# Figma Sync Guide

This frontend syncs design and layout from the **HELOC-Guru** Figma design repo (read-only):  
https://github.com/BlackCollar27/HELOC-Guru

## Workflow

1. **Check** – Clone or fetch the Figma repo and compare with our `src/`:
   ```bash
   npm run figma:check
   ```
   Writes `.figma-sync-state.json` with last commit and file counts.

2. **Diff** – Generate a report of Figma vs our structure and flag integration-sensitive files:
   ```bash
   npm run figma:diff
   ```
   Creates `reports/figma-diff-<timestamp>.md`.

3. **Review** the report, then apply design/layout/copy from Figma as needed.

## Preservation rules

When bringing in changes from the Figma repo, **preserve backend integration**:

- Keep all `apiService.*` calls and any usage of the API service.
- Keep imports from `../services/api`, `../types`, or `@/types`.
- Keep existing `useState` / `useEffect` and API event handlers.
- Keep navigation logic (`onNavigate`, `setCurrentPage`, etc.).
- **Only** apply design, layout, and copy from Figma (markup, styles, text).

The diff report marks files that use `apiService`, `../services/api`, or `../types` so you can protect them during sync.

## Configuration

- **Repo URL**: Set `FIGMA_REPO_URL` to use a different repo (default: `https://github.com/BlackCollar27/HELOC-Guru.git`).
- **Paths**: Figma repo is cloned into `temp/figma-repo/`; reports go to `reports/`.

## Troubleshooting

- **Clone fails**: Ensure `git` is installed and the repo URL is reachable. For private repos, configure credentials.
- **Permission errors**: Ensure `temp/` and `reports/` are writable (they are in `.gitignore`).
- **State file**: Deleting `.figma-sync-state.json` only resets the stored commit; run `figma:check` again to refresh.
