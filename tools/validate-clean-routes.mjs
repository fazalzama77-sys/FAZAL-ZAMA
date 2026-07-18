import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://veterinaryanatomy.com';
const manifestPath = path.join(root, 'tools', 'clean-route-generated-files.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const errors = [];
const canonicals = new Set();
let checkedLinks = 0;

function error(message) { errors.push(message); }

function routeFile(pathname) {
  const relative = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (!relative) return path.join(root, 'index.html');
  if (pathname.endsWith('/')) return path.join(root, relative, 'index.html');
  return path.join(root, relative);
}

const virtualAppRoutes = new Set([
  '/dashboard/', '/me/', '/quiz/',
  '/library/', '/library/bookmarks/', '/library/highlights/', '/library/notes/'
]);

for (const relative of manifest.files) {
  if (!/^(atlas|why)\//.test(relative)) error(`Generated file outside clean public routes: ${relative}`);
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) { error(`Missing generated route: ${relative}`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  if (!/^<!doctype html>/i.test(html)) error(`Missing doctype: ${relative}`);
  if (!/<html lang="en">/i.test(html)) error(`Missing language: ${relative}`);
  if (!/<base href="\/">/i.test(html)) error(`Missing root base URL: ${relative}`);
  if (!/<meta name="description" content="[^"]{50,}/i.test(html)) error(`Weak description: ${relative}`);
  if (!/<meta name="robots" content="index, follow/i.test(html)) error(`Missing index directive: ${relative}`);
  if (!/<meta name="ivri-clean-route" content="[^"]+">/i.test(html)) error(`Missing clean-route marker: ${relative}`);
  if (!/id="bottom-nav"/i.test(html) || !/src="app\.js"/i.test(html)) error(`Original interactive app shell missing: ${relative}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/i)?.[1];
  if (!canonical) error(`Missing canonical: ${relative}`);
  else {
    if (canonicals.has(canonical)) error(`Duplicate canonical: ${canonical}`);
    canonicals.add(canonical);
    const expected = `/${relative.replace(/index\.html$/, '').replaceAll('\\', '/')}`;
    if (new URL(canonical).pathname !== expected) error(`Canonical mismatch in ${relative}: ${canonical}`);
    if (canonical.includes('/learn/') || canonical.includes('#/')) error(`Legacy canonical in ${relative}: ${canonical}`);
  }

  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
  if (!jsonLd) error(`Missing structured data: ${relative}`);
  else {
    try { JSON.parse(jsonLd); }
    catch (parseError) { error(`Invalid structured data in ${relative}: ${parseError.message}`); }
  }

  if (relative.split('/').length >= 5 && relative.startsWith('atlas/')) {
    if (!/id="detail-panel">[\s\S]*?class="h-title">/i.test(html)) error(`Atlas topic is not pre-rendered in original panel: ${relative}`);
  }
  if (relative.split('/').length >= 4 && relative.startsWith('why/')) {
    if (!/class="modal-overlay open" id="modalOverlay"/i.test(html)) error(`WHY topic modal is not pre-rendered: ${relative}`);
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith('#') || href.startsWith('data:') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    const url = new URL(href, origin);
    if (url.origin !== origin) continue;
    checkedLinks += 1;
    if (virtualAppRoutes.has(url.pathname)) continue;
    const target = routeFile(url.pathname);
    if (!fs.existsSync(target)) error(`Broken internal link in ${relative}: ${href}`);
  }
}

for (const relative of manifest.appFiles || []) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) { error(`Missing app entry page: ${relative}`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  if (!/^<!doctype html>/i.test(html)) error(`Missing app-entry doctype: ${relative}`);
  if (!/<meta name="robots" content="noindex, follow">/i.test(html)) error(`App entry must be excluded from search: ${relative}`);
  if (!/id="bottom-nav"/i.test(html) || !/src="app\.js"/i.test(html)) error(`Original app shell missing from app entry: ${relative}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/i)?.[1];
  const expected = `/${relative.replace(/index\.html$/, '').replaceAll('\\', '/')}`;
  if (!canonical || new URL(canonical).pathname !== expected) error(`App-entry canonical mismatch in ${relative}`);
}

const sitemapText = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemapText.matchAll(/<loc>(https:\/\/veterinaryanatomy\.com\/[^<]*)<\/loc>/g)].map(match => match[1]);
const pageUrls = sitemapUrls.filter(url => !url.includes('/images/'));
const uniquePages = new Set(pageUrls);
if (pageUrls.length !== uniquePages.size) error('Duplicate page URL in sitemap');
if (!uniquePages.has(`${origin}/`)) error('Homepage missing from sitemap');
if (pageUrls.some(url => url.includes('/learn/') || url.includes('#/'))) error('Legacy URL remains in sitemap');
for (const canonical of canonicals) if (!uniquePages.has(canonical)) error(`Canonical missing from sitemap: ${canonical}`);

const redirectsText = fs.readFileSync(path.join(root, '_redirects'), 'utf8');
if (!redirectsText.includes('/landing/ / 301')) error('Missing legacy /landing/ redirect');
for (const mapping of manifest.redirects) {
  const expected = `${mapping.from} ${mapping.to} 301`;
  if (!redirectsText.includes(expected)) error(`Missing permanent redirect: ${expected}`);
}

const rootHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (rootHtml.includes('Searchable Study Library')) error('Technical Study Library link returned to the original interface');

if (errors.length) {
  console.error(`Clean-route validation failed with ${errors.length} error(s):`);
  for (const message of errors.slice(0, 100)) console.error(`- ${message}`);
  process.exit(1);
}

console.log(`Clean-route validation passed for ${manifest.files.length} interactive pages.`);
console.log(`${(manifest.appFiles || []).length} non-indexed app entry pages passed.`);
console.log(`${canonicals.size} unique canonicals; ${pageUrls.length} sitemap page URLs; ${manifest.redirects.length} legacy redirects; ${checkedLinks} crawlable internal links checked.`);
