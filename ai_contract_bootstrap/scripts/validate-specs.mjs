#!/usr/bin/env node
/** Contract syntax and cross-reference validator. Requires @iarna/toml. */
import fs from 'node:fs';
import path from 'node:path';
import toml from '@iarna/toml';

const ROOT = process.cwd();
const errors = [];
const warn = [];
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const fail = (p, m) => errors.push(`${p}: ${m}`);
const note = (p, m) => warn.push(`${p}: ${m}`);
function parse(p) {
  if (!exists(p)) { fail(p, 'required file missing'); return null; }
  try { return toml.parse(read(p)); }
  catch (e) { fail(p, `TOML parse error: ${e.message}`); return null; }
}
function validateArchitecture() {
  const p = 'docs/ARCHITECTURE_INDEX.toml';
  const d = parse(p); if (!d) return;
  if (!Array.isArray(d.features) || d.features.length === 0) { fail(p, 'features must be a non-empty array'); return; }
  const ids = new Set(), routes = new Set(), names = new Set();
  for (const f of d.features) {
    for (const k of ['id','name','path','tier','status','dependencies']) if (!(k in f)) fail(p, `feature missing required field: ${k}`);
    if (ids.has(f.id)) fail(p, `duplicate feature ID: ${f.id}`); ids.add(f.id);
    if (names.has(f.name)) fail(p, `duplicate feature name: ${f.name}`); names.add(f.name);
    if (f.public_route) { if (routes.has(f.public_route)) fail(p, `duplicate route: ${f.public_route}`); routes.add(f.public_route); }
    if (!['planned','in_development','experimental','available','deferred','retired'].includes(f.status)) fail(p, `${f.name}: invalid status ${f.status}`);
    for (const key of ['spec_toml','spec_md','wireframe_toml']) if (f[key] && !exists(f[key])) note(p, `${f.name}: referenced file not created yet: ${f[key]}`);
  }
  const md = 'docs/ARCHITECTURE_INDEX.md';
  if (exists(md)) for (const f of d.features) if (!read(md).includes(f.id) && !read(md).includes(f.name)) note(md, `feature not explicitly indexed by ID/name: ${f.id}/${f.name}`);
}
function validateOnboarding() {
  const p = 'src/features/onboarding/docs/FEATURE_SPEC.toml';
  const d = parse(p); if (!d) return;
  const states = d.domain?.state_machine?.states ?? [];
  const initial = d.domain?.state_machine?.initial;
  if (!states.includes(initial)) fail(p, `initial state '${initial}' is not in declared states`);
  const transitions = d.domain?.state_machine?.transitions ?? {};
  for (const [from, tos] of Object.entries(transitions)) {
    if (!states.includes(from)) fail(p, `transition source is undeclared: ${from}`);
    if (!Array.isArray(tos)) fail(p, `transition list must be array: ${from}`);
    else for (const to of tos) if (!states.includes(to)) fail(p, `transition target is undeclared: ${from} -> ${to}`);
  }
  const invs = d.domain?.invariants ?? [];
  const invIds = new Set();
  for (const inv of invs) { if (!inv.id) fail(p, 'invariant missing id'); if (invIds.has(inv.id)) fail(p, `duplicate invariant ID: ${inv.id}`); invIds.add(inv.id); }
  const md = 'src/features/onboarding/docs/FEATURE_SPEC.md';
  if (!exists(md)) fail(md, 'companion Markdown specification missing');
  else for (const id of invIds) if (!read(md).includes(id)) fail(md, `missing invariant reference ${id}`);
  const wp = 'src/features/onboarding/docs/UI_UX_WIREFRAME.toml';
  const w = parse(wp);
  if (w) {
    if (!w.view?.root) fail(wp, 'view.root is required');
    const nodes = w.view?.nodes ?? [];
    const nodeIds = new Set();
    for (const n of nodes) { if (!n.id) fail(wp, 'node missing id'); if (nodeIds.has(n.id)) fail(wp, `duplicate node id: ${n.id}`); nodeIds.add(n.id); }
    for (const key of ['aria_labelledby','aria_describedby']) if (w.view?.root?.[key] && !nodeIds.has(w.view.root[key])) fail(wp, `root ${key} references missing node ${w.view.root[key]}`);
  }
}
function validateDesignTokens() {
  const p = 'docs/GLOBAL_DESIGN_SYSTEM.toml'; const d = parse(p); if (!d) return;
  for (const [k,v] of Object.entries(d.colors?.primitives ?? {})) if (!/^#[0-9A-Fa-f]{6}$/.test(v)) fail(p, `color primitive ${k} is not a 6-digit hex: ${v}`);
  for (const [k,v] of Object.entries(d.spacing ?? {})) if (!/^\d+(\.\d+)?(rem|px)$/.test(v)) fail(p, `spacing token ${k} has unsupported unit/value: ${v}`);
}
function validateGateway() { parse('docs/CORE_GATEWAY_CONTRACTS.toml'); }
function run() {
  console.log('Binary Sequence contract validation');
  validateArchitecture(); validateDesignTokens(); validateGateway(); validateOnboarding();
  if (warn.length) { console.warn('\nWarnings:'); for (const w of warn) console.warn(`- ${w}`); }
  if (errors.length) { console.error('\nFAILED:'); for (const e of errors) console.error(`- ${e}`); process.exitCode = 1; }
  else console.log('\nPASS: no contract errors found. Warnings do not imply implementation readiness.');
}
run();
