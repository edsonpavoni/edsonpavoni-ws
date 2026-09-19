// Builds dist/sitemap.xml from the pages Astro emitted. Runs after `astro build`.
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://edsonpavoni.art';
const DIST = new URL('../dist/', import.meta.url).pathname;
const EXCLUDE = [/^\/tools\//, /^\/index_meta\//, /^\/404/];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(p);
  }
  return out;
}
const urls = walk(DIST)
  .map((p) => p.slice(DIST.length - 1).replace(/index\.html$/, ''))
  .map((p) => (p.startsWith('/') ? p : '/' + p))
  .filter((p) => p !== '/' && !EXCLUDE.some((re) => re.test(p)))
  .sort();

const today = new Date().toISOString().slice(0, 10);
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`;
writeFileSync(join(DIST, 'sitemap.xml'), xml);
console.log(`sitemap: ${urls.length} urls`);
