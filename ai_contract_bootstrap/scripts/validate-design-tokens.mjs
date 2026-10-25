#!/usr/bin/env node
/** Checks token references against canonical TOML keys; requires @iarna/toml. */
import fs from 'node:fs';
import path from 'node:path';
import toml from '@iarna/toml';
const root=process.cwd(); const errors=[];
const p='docs/GLOBAL_DESIGN_SYSTEM.toml';
if(!fs.existsSync(path.join(root,p))){console.error(`Missing ${p}`);process.exit(1);}
const d=toml.parse(fs.readFileSync(path.join(root,p),'utf8'));
const vars=new Set();
for(const [k,v] of Object.entries(d.colors?.primitives??{})) vars.add(`--color-${k.replaceAll('_','-')}`);
for(const [k,v] of Object.entries(d.typography?.families??{})) vars.add(`--font-${k.replaceAll('_','-')}`);
for(const [k,v] of Object.entries(d.typography?.scale??{})) vars.add(`--${k.replaceAll('_','-')}`);
for(const [k,v] of Object.entries(d.spacing??{})) vars.add(`--${k.replaceAll('_','-')}`);
function walk(dir){if(!fs.existsSync(dir))return[];let out=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())out.push(...walk(p));else if(/\.(css|scss)$/.test(e.name))out.push(p);}return out;}
for(const f of [...walk(path.join(root,'src'))]){const s=fs.readFileSync(f,'utf8');for(const m of s.matchAll(/var\((--[a-zA-Z0-9-]+)/g))if(!vars.has(m[1]))errors.push(`${path.relative(root,f)}: unknown token ${m[1]}`);}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log('Token reference validation PASS.');
