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
  if (!/<meta property="og:site_name" content="Veterinary Anatomy Studio">/i.test(html)) error(`Outdated site name: ${relative}`);
  if (!/<meta name="ivri-clean-route" content="[^"]+">/i.test(html)) error(`Missing clean-route marker: ${relative}`);
  if (!/id="bottom-nav"/i.test(html) || !/src="\/app\.js"/i.test(html)) error(`Original interactive app shell missing: ${relative}`);
  if (!/href="\/vendor\/fontawesome\/css\/all\.min\.css"/i.test(html)) error(`Local offline icon stylesheet missing: ${relative}`);

  const primaryHeadings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (primaryHeadings.length !== 1) error(`Expected one page-specific H1 in ${relative}, found ${primaryHeadings.length}`);

  for (const match of html.matchAll(/<(?:script|img|source|video|audio|iframe)\b[^>]*\s(?:src|poster)="([^"]*)"/gi)) {
    const reference = match[1];
    if (/\s/.test(reference)) error(`Unencoded whitespace in asset URL in ${relative}: ${reference}`);
    if (!reference || /^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(reference)) continue;
    error(`Nested-route asset risk in ${relative}: ${reference}`);
  }
  for (const match of html.matchAll(/<link\b[^>]*\shref="([^"]*)"/gi)) {
    const reference = match[1];
    if (!reference || /^(?:[a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(reference)) continue;
    error(`Nested-route link asset risk in ${relative}: ${reference}`);
  }

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
    if (!/id="detail-panel">[\s\S]*?<h1 class="h-title">/i.test(html)) error(`Atlas topic is not pre-rendered with a primary heading: ${relative}`);
  }
  if (relative.split('/').length >= 4 && relative.startsWith('why/')) {
    if (!/class="modal-overlay open" id="modalOverlay"/i.test(html)) error(`WHY topic modal is not pre-rendered: ${relative}`);
    if (/src=["']\/https?:\/\//i.test(html)) error(`Root-prefixed external asset path in WHY topic: ${relative}`);
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
  if (!/id="bottom-nav"/i.test(html) || !/src="\/app\.js"/i.test(html)) error(`Original app shell missing from app entry: ${relative}`);
  if (!/href="\/vendor\/fontawesome\/css\/all\.min\.css"/i.test(html)) error(`Local offline icon stylesheet missing from app entry: ${relative}`);
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
if (!/<title>Veterinary Anatomy Studio \| Notes, Quizzes &amp; Learning<\/title>/i.test(rootHtml)) {
  error('Homepage title does not use the approved Veterinary Anatomy Studio brand');
}
if (!/<meta property="og:site_name" content="Veterinary Anatomy Studio">/i.test(rootHtml)) {
  error('Homepage Open Graph site name is outdated');
}
if (!/"@type": "WebSite"[\s\S]*?"name": "Veterinary Anatomy Studio"/i.test(rootHtml)) {
  error('Homepage WebSite structured-data name is outdated');
}
const pwaManifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
if (pwaManifest.name !== 'Veterinary Anatomy Studio') error('PWA manifest name is outdated');
if (pwaManifest.launch_handler?.client_mode !== 'navigate-existing') {
  error('Desktop PWA launch handler must reuse the existing app window');
}
const expectedPwaShortcuts = ['/atlas/', '/why/', '/quiz/', '/dashboard/'];
const actualPwaShortcuts = (pwaManifest.shortcuts || []).map((shortcut) => shortcut.url);
for (const shortcut of expectedPwaShortcuts) {
  if (!actualPwaShortcuts.includes(shortcut)) error(`Desktop PWA shortcut is missing: ${shortcut}`);
}
if (rootHtml.includes('Searchable Study Library')) error('Technical Study Library link returned to the original interface');
if (/<base\s+href="\/">/i.test(rootHtml)) error('Root index uses a web-only base URL and will fail when opened through file://');
for (const match of rootHtml.matchAll(/<(?:script|link)\b[^>]+(?:src|href)="([^"]+)"/gi)) {
  const reference = match[1];
  if (/^(?:https?:|data:|#)/i.test(reference) || reference === '/') continue;
  if (reference.startsWith('/')) {
    error(`Root index has a file-incompatible absolute dependency: ${reference}`);
    continue;
  }
  const dependency = path.resolve(root, reference.split(/[?#]/)[0]);
  if (!fs.existsSync(dependency)) error(`Root index dependency is missing: ${reference}`);
}
const appSource = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
if (!appSource.includes("location.protocol === 'file:'") || !appSource.includes('app._legacyRouteFromHash()')) {
  error('Local file routing compatibility is missing from app.js');
}
if (!appSource.includes("new Set(['Veterinary Anatomy Studio', 'IVRI Anatomy'])")) {
  error('Legacy IVRI Anatomy backups are no longer import-compatible');
}
if (!appSource.includes('/service-worker.js?v=20260809-desktop-pwa-v6')
  || !appSource.includes('_initDesktopPwaExperience')
  || !appSource.includes('PWA_STATUS_DISMISS_KEY')
  || !appSource.includes('pwa-status-close')
  || !appSource.includes('fas fa-download me-card-icon')
  || !appSource.includes('_initDesktopBackButton')
  || !appSource.includes('hasNativeBack')
  || !appSource.includes('_setPwaStatusVisible')) {
  error('Desktop PWA readiness or versioned worker registration is missing');
}
const serviceWorkerSource = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
if (!serviceWorkerSource.includes("veterinary-anatomy-studio-offline-v6")
  || serviceWorkerSource.includes("./images/ivri-logo.png")
  || serviceWorkerSource.includes("./pomelli_creative_video_9_16_0607 (1).mp4")
  || !serviceWorkerSource.includes('isNonessentialMediaRequest')
  || !serviceWorkerSource.includes("./annotation-editor'")
  || !serviceWorkerSource.includes('./vendor/fontawesome/css/all.min.css')
  || serviceWorkerSource.includes('cdnjs.cloudflare.com/ajax/libs/font-awesome')
  || !serviceWorkerSource.includes('OPTIONAL_DESKTOP_ASSETS')) {
  error('Desktop PWA offline shell is incomplete or uses the wrong cache version');
}
const fontAwesomeAssets = [
  'vendor/fontawesome/css/all.min.css',
  'vendor/fontawesome/webfonts/fa-brands-400.ttf',
  'vendor/fontawesome/webfonts/fa-brands-400.woff2',
  'vendor/fontawesome/webfonts/fa-regular-400.ttf',
  'vendor/fontawesome/webfonts/fa-regular-400.woff2',
  'vendor/fontawesome/webfonts/fa-solid-900.ttf',
  'vendor/fontawesome/webfonts/fa-solid-900.woff2',
  'vendor/fontawesome/webfonts/fa-v4compatibility.ttf',
  'vendor/fontawesome/webfonts/fa-v4compatibility.woff2'
];
for (const asset of fontAwesomeAssets) {
  if (!fs.existsSync(path.join(root, asset))) error(`Local offline icon asset is missing: ${asset}`);
  if (!serviceWorkerSource.includes(`./${asset}`)) error(`Offline shell does not require icon asset: ${asset}`);
}
if (!rootHtml.includes('href="vendor/fontawesome/css/all.min.css"')) {
  error('Root app does not use the file-compatible local icon stylesheet');
}
const annotationEditorHtml = fs.readFileSync(path.join(root, 'annotation-editor.html'), 'utf8');
if (!annotationEditorHtml.includes('href="vendor/fontawesome/css/all.min.css"')) {
  error('Annotation editor does not use the local icon stylesheet');
}
const fontAwesomeCss = fs.readFileSync(path.join(root, 'vendor/fontawesome/css/all.min.css'), 'utf8');
const iconUtilityClasses = new Set([
  'fa-fw', 'fa-spin', 'fa-pulse', 'fa-beat', 'fa-bounce', 'fa-fade', 'fa-flip', 'fa-shake', 'fa-beat-fade',
  'fa-xs', 'fa-sm', 'fa-lg', 'fa-xl', 'fa-2xl', 'fa-1x', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x',
  'fa-6x', 'fa-7x', 'fa-8x', 'fa-9x', 'fa-10x', 'fa-ul', 'fa-li', 'fa-border', 'fa-pull-left',
  'fa-pull-right', 'fa-rotate-90', 'fa-rotate-180', 'fa-rotate-270', 'fa-flip-horizontal',
  'fa-flip-vertical', 'fa-flip-both', 'fa-stack', 'fa-stack-1x', 'fa-stack-2x', 'fa-inverse'
]);
const iconSourcePaths = [
  'index.html', 'annotation-editor.html', 'app.js', 'annotation-editor.js', 'dashboard.js', 'enhanced-quiz.js',
  'elite-guide.js', 'events.js', 'search.js', 'srs.js', 'glossary.js', 'tools/build-clean-routes.mjs'
];
const usedIconClasses = new Set(iconSourcePaths.flatMap((relative) =>
  [...fs.readFileSync(path.join(root, relative), 'utf8').matchAll(/\bfa-[a-z0-9-]+\b/g)].map((match) => match[0])
));
for (const iconClass of usedIconClasses) {
  if (iconUtilityClasses.has(iconClass)) continue;
  if (!fontAwesomeCss.includes(`.${iconClass}:before`) && !fontAwesomeCss.includes(`.${iconClass}::before`)) {
    error(`Unsupported Font Awesome icon class: ${iconClass}`);
  }
}

const notFoundHtml = fs.readFileSync(path.join(root, '404.html'), 'utf8');
if (!/<meta name="robots" content="noindex, follow">/i.test(notFoundHtml)) {
  error('404 page must remain excluded from search results while allowing link discovery');
}
if (!/href="\/atlas\/"/i.test(notFoundHtml) || !/href="\/why\/"/i.test(notFoundHtml)) {
  error('404 page must preserve crawlable links to the Atlas and WHY hubs');
}

if (errors.length) {
  console.error(`Clean-route validation failed with ${errors.length} error(s):`);
  for (const message of errors.slice(0, 100)) console.error(`- ${message}`);
  process.exit(1);
}

console.log(`Clean-route validation passed for ${manifest.files.length} interactive pages.`);
console.log(`${(manifest.appFiles || []).length} non-indexed app entry pages passed.`);
console.log(`${canonicals.size} unique canonicals; ${pageUrls.length} sitemap page URLs; ${manifest.redirects.length} legacy redirects; ${checkedLinks} crawlable internal links checked.`);
