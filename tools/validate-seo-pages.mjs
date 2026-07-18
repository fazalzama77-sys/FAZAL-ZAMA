import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const cleanRouteManifest = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'clean-route-generated-files.json');
if (fs.existsSync(cleanRouteManifest)) {
  await import('./validate-clean-routes.mjs');
  process.exit(0);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://veterinaryanatomy.com';
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'tools', 'seo-generated-files.json'), 'utf8'));
const errors = [];
const canonicals = new Set();
let checkedLinks = 0;

function error(message) { errors.push(message); }

function hrefToFile(href) {
  if (href === '/' || href.startsWith('/#/')) return path.join(root, 'index.html');
  const url = new URL(href, origin);
  if (url.origin !== origin) return null;
  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  if (!relative) return path.join(root, 'index.html');
  if (url.pathname.endsWith('/')) return path.join(root, relative, 'index.html');
  return path.join(root, relative);
}

for (const relative of manifest.files) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) { error(`Missing generated page: ${relative}`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  if (!/^<!doctype html>/i.test(html)) error(`Missing doctype: ${relative}`);
  if (!/<html lang="en">/i.test(html)) error(`Missing language: ${relative}`);
  if (!/<h1>[^<]+<\/h1>/i.test(html)) error(`Missing H1: ${relative}`);
  if (!/<meta name="description" content="[^"]{50,}/i.test(html)) error(`Weak or missing description: ${relative}`);
  if (!/<meta name="robots" content="index, follow/i.test(html)) error(`Missing index directive: ${relative}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/i)?.[1];
  if (!canonical) error(`Missing canonical: ${relative}`);
  else {
    if (canonicals.has(canonical)) error(`Duplicate canonical: ${canonical}`);
    canonicals.add(canonical);
    const expectedPath = `/${relative.replace(/index\.html$/, '').replaceAll('\\', '/')}`;
    if (new URL(canonical).pathname !== expectedPath) error(`Canonical mismatch in ${relative}: ${canonical}`);
  }

  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
  if (!jsonLd) error(`Missing structured data: ${relative}`);
  else {
    try { JSON.parse(jsonLd); } catch (parseError) { error(`Invalid structured data in ${relative}: ${parseError.message}`); }
  }

  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
  for (const href of hrefs) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    const target = hrefToFile(href);
    if (!target) continue;
    checkedLinks += 1;
    if (!fs.existsSync(target)) error(`Broken internal link in ${relative}: ${href}`);
  }

  const sources = [...html.matchAll(/(?:src|href)="(\/(?:images\/[^"?#]+|seo-pages\.css))"/g)].map(match => match[1]);
  for (const source of sources) {
    checkedLinks += 1;
    const target = hrefToFile(source);
    if (!target || !fs.existsSync(target)) error(`Missing asset in ${relative}: ${source}`);
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(https:\/\/veterinaryanatomy\.com\/[^<]*)<\/loc>/g)].map(match => match[1]);
const pageUrls = sitemapUrls.filter(url => !url.includes('/images/'));
const uniquePageUrls = new Set(pageUrls);
if (pageUrls.length !== uniquePageUrls.size) error('Duplicate page URL in sitemap');
if (!uniquePageUrls.has(`${origin}/`)) error('Homepage missing from sitemap');
for (const canonical of canonicals) if (!uniquePageUrls.has(canonical)) error(`Canonical missing from sitemap: ${canonical}`);

if (errors.length) {
  console.error(`SEO validation failed with ${errors.length} error(s):`);
  for (const message of errors.slice(0, 100)) console.error(`- ${message}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${manifest.files.length} generated pages.`);
console.log(`${canonicals.size} unique canonicals; ${pageUrls.length} sitemap page URLs; ${checkedLinks} internal links/assets checked.`);
