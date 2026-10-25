# AI Development Contract System — Bootstrap Package

This is a proposed bootstrap package for the Binary Sequence Technological Art website. It is not a patch applied to the live website repository and does not establish that the proposed stack, routes, or feature files already exist.

## Install into a repository

1. Inspect the target repository and back up or commit current work.
2. Merge the `docs/`, `scripts/`, and `src/` paths into the repository; do not overwrite existing files without reviewing differences.
3. Merge `package.scripts.fragment.json` into the existing `package.json` scripts and devDependencies rather than replacing `package.json`.
4. Install dependencies using the repository's existing package manager.
5. Run `npm run verify:specs`, `npm run verify:boundaries`, and `npm run verify:tokens`.
6. Review warnings and `docs/DISCREPANCY_REGISTER.md`. These validators are initial guards, not complete proof of correctness.

## Important limitations

- Feature specifications for all eleven contexts are not generated here; onboarding is the only pilot spec included.
- JSON schemas are initial structural schemas. The current validator does not yet execute JSON Schema validation against every TOML document.
- `generate-docs.mjs` intentionally exits as unconfigured; do not wire it into a passing CI gate until deterministic generation is implemented.
- Boundary validation is a lightweight first pass. Configure ESLint or another AST-based import-boundary tool after inspecting path aliases and repository conventions.
- Route and stack declarations are proposed baselines and must be reconciled with repository ground truth.
- `binarysequence.techart@gmail.com` is the only declared contact email in the discrepancy register; delivery/access has not been verified by this package.
