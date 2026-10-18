import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { projects } from '../lib/projects.ts';
import { localizeProject } from '../lib/projects-zh.ts';
const base='/danielle-design-portfolio';
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&#x27;',"'").replaceAll('&quot;','"');
test('all sixteen bilingual pages export, preserving case content and shared visual theme',async()=>{
 for(const locale of ['zh','en']){
  const lang=locale==='en'?'/en':'';
  const home=await readFile(`out${lang}/index.html`,'utf8');
  assert.ok(home.includes('hero-brand'));
  assert.ok(home.includes('Danning Li'));
  for(const p of projects){
   const html=decode(await readFile(`out${lang}/project/${p.slug}/index.html`,'utf8'));
   assert.ok(html.includes(localizeProject(p,locale).summary),`${locale} ${p.slug}: original summary`);
   assert.ok(html.includes('project-page case-editorial'),`${p.slug}: shared art direction`);
   for(const choice of ['zh','en']){
    const route=`${base}${choice==='en'?'/en':''}/project/${p.slug}`;
    assert.ok(html.includes(`href="${route}"`),`${p.slug}: language switch`);
   }
   assert.ok(home.includes(`${base}${lang}/project/${p.slug}`),`${p.slug}: homepage entry`);
   assert.ok(!html.includes('chatgpt.site'),`${p.slug}: independent metadata`);
  }
 }
});
test('every exported local link, font, script and image target exists',async()=>{
 async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){
  const f=path.join(dir,e.name);
  if(e.isDirectory())await walk(f);
  else if(e.name.endsWith('.html')){
   const html=await readFile(f,'utf8');
   for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(!match[1].startsWith(base+'/'))continue;
    const p=decodeURIComponent(new URL(match[1],'https://example.org').pathname.slice(base.length+1));
    const target=path.join('out',p);
    try{await access(target);}catch{assert.fail(`${f}: missing ${target}`);}
   }
  }
 }}
 await walk('out');
});
