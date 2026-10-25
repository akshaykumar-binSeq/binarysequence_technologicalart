#!/usr/bin/env node
/** Lightweight import-boundary check. Requires source files to exist; complements ESLint/TS checks. */
import fs from 'node:fs';
import path from 'node:path';
const ROOT = process.cwd();
const errors = [];
const sourceExt = new Set(['.ts','.tsx','.js','.jsx','.mjs']);
function walk(dir, out=[]) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir,{withFileTypes:true})) {
    const p=path.join(dir,ent.name);
    if (ent.isDirectory()) walk(p,out); else if (sourceExt.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}
function imports(code) {
  const out=[]; const re=/(?:import\s+(?:[\s\S]*?\s+from\s+)?|export\s+[\s\S]*?\s+from\s+|import\()\s*['"]([^'"]+)['"]/g;
  let m; while((m=re.exec(code))) out.push(m[1]); return out;
}
function check() {
  const featuresRoot=path.join(ROOT,'src/features');
  const files=walk(featuresRoot);
  for(const file of files) {
    const rel=path.relative(ROOT,file).replaceAll('\\','/');
    const m=rel.match(/^src\/features\/([^/]+)\/(.*)$/); if(!m) continue;
    const feature=m[1], rest=m[2]; const code=fs.readFileSync(file,'utf8');
    for(const spec of imports(code)) {
      const normalized=spec.replaceAll('\\','/');
      const target=normalized.startsWith('@/') ? normalized.slice(2) : normalized;
      const other=target.match(/(?:^|\/)features\/([^/]+)\//);
      if(other && other[1]!==feature) errors.push(`${rel}: cross-feature import '${spec}' (B-01)`);
      if(rest.startsWith('domain/')) {
        if(/(?:^|\/)application\//.test(target)||/(?:^|\/)infrastructure\//.test(target)||/(?:^|\/)presentation\//.test(target)) errors.push(`${rel}: domain imports forbidden layer '${spec}' (B-02)`);
        if(/^(?:window|localStorage|document|navigator)(?:\/|$)/.test(spec)||/from\s+['"](?:next\/|react)['"]/.test(`from '${spec}'`) && /^(?:next\/|react)$/.test(spec)) errors.push(`${rel}: framework/browser dependency in domain '${spec}' (B-02)`);
      }
    }
  }
  // Public-surface discipline is enforced for relative/alias imports targeting a feature internal path.
  const consumers=[...walk(path.join(ROOT,'src/app')),...walk(path.join(ROOT,'src/core'))];
  for(const file of consumers) {
    const rel=path.relative(ROOT,file).replaceAll('\\','/'); const code=fs.readFileSync(file,'utf8');
    for(const spec of imports(code)) if(/(?:^|\/)features\/[^/]+\/(?!index(?:\.[cm]?[jt]sx?)?$)/.test(spec)) errors.push(`${rel}: import bypasses feature public index '${spec}' (B-03)`);
  }
  if(errors.length){console.error('Boundary validation FAILED:'); errors.forEach(e=>console.error(`- ${e}`));process.exitCode=1;}
  else console.log('Boundary validation PASS (only existing source files checked).');
}
check();
