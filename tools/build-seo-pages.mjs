import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

// The public search architecture now uses the original interactive app at
// clean /atlas/... and /why/... routes. Keep this familiar command as the
// entry point, but delegate generation to the unified clean-route builder.
await import('./build-clean-routes.mjs');
process.exit(0);

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteOrigin = 'https://veterinaryanatomy.com';
const lastmod = new Date().toISOString().slice(0, 10);
const generatedManifest = path.join(projectRoot, 'tools', 'seo-generated-files.json');
const learnRoot = path.join(projectRoot, 'learn');

const atlasFiles = [
  'data-introduction.JS',
  'data-forelimb.JS',
  'data-head-neck.JS',
  'data-thorax.JS',
  'data-abdomen.JS',
  'data-hindlimb.JS',
  'data-splanchnology.JS',
  'data-histology.JS',
  'data-embryology.JS'
];

const regionSlugs = {
  Introduction: 'introduction',
  Forelimb: 'forelimb',
  'Head & Neck': 'head-neck',
  Thorax: 'thorax',
  Abdomen: 'abdomen',
  'Hindlimb & Pelvis': 'hindlimb-pelvis',
  Histology: 'histology',
  Embryology: 'embryology'
};

const whyCategoryLabels = {
  forelimb: 'Forelimb Biomechanics',
  hindlimb: 'Hindlimb Biomechanics',
  axial: 'Axial and Trunk Biomechanics',
  wildlife: 'Wildlife and Comparative Anatomy'
};

function loadScriptData(files) {
  const context = vm.createContext({ console });
  for (const file of files) {
    const fullPath = path.join(projectRoot, file);
    vm.runInContext(fs.readFileSync(fullPath, 'utf8'), context, { filename: file });
  }
  return context;
}

const atlasData = loadScriptData(atlasFiles).atlasData;
const whyData = loadScriptData(['data-why.js']).anatomyData;

if (!atlasData || typeof atlasData !== 'object') throw new Error('atlasData was not loaded');
if (!Array.isArray(whyData)) throw new Error('anatomyData from data-why.js was not loaded');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeXml(value) {
  return escapeHtml(value);
}

function safeRichHtml(value) {
  return String(value ?? '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
}

function plainText(value) {
  return String(value ?? '')
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateWords(value, maxLength) {
  const text = plainText(value);
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength + 1);
  const breakAt = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, breakAt > maxLength * 0.65 ? breakAt : maxLength).trim()}…`;
}

function slugify(value) {
  const slug = String(value ?? '')
    .replace(/&/g, ' and ')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90)
    .replace(/-+$/g, '');
  return slug || 'topic';
}

function jsonForScript(value) {
  return JSON.stringify(value, null, 2).replaceAll('<', '\\u003c');
}

function routeUrl(parts = []) {
  return `${siteOrigin}/${parts.filter(Boolean).join('/')}${parts.length ? '/' : ''}`;
}

function localHref(parts = []) {
  return `/${parts.filter(Boolean).join('/')}${parts.length ? '/' : ''}`;
}

function appHashFor(region, system, index) {
  const pieces = ['atlas', region];
  if (system !== undefined) pieces.push(system);
  if (index !== undefined) pieces.push(String(index));
  return `/#/${pieces.map(encodeURIComponent).join('/')}`;
}

function renderBreadcrumbs(crumbs) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${crumbs.map((crumb, index) => {
    const current = index === crumbs.length - 1;
    return `<li>${current ? `<span aria-current="page">${escapeHtml(crumb.name)}</span>` : `<a href="${escapeHtml(crumb.href)}">${escapeHtml(crumb.name)}</a>`}</li>`;
  }).join('')}</ol></nav>`;
}

function breadcrumbSchema(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.absolute
    }))
  };
}

function renderCards(items) {
  return `<div class="topic-grid">${items.map(item => `
    <article class="topic-card">
      <p class="card-kicker">${escapeHtml(item.kicker || 'Veterinary anatomy')}</p>
      <h2><a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a></h2>
      <p>${escapeHtml(item.description)}</p>
      <a class="text-link" href="${escapeHtml(item.href)}">Study this topic <span aria-hidden="true">→</span></a>
    </article>`).join('')}</div>`;
}

function renderComparative(comparative) {
  if (!Array.isArray(comparative) || comparative.length === 0) return '';
  return `<section class="content-section"><h2>Comparative anatomy</h2><div class="comparison-grid">${comparative.map(item => `
    <article class="comparison-card"><h3>${escapeHtml(item?.species || 'Species')}</h3><p>${safeRichHtml(item?.note || '')}</p></article>`).join('')}</div></section>`;
}

function renderImage(topic) {
  if (!topic?.img) return '';
  const relative = String(topic.img).replace(/^\/+/, '').replaceAll('/', path.sep);
  if (!fs.existsSync(path.join(projectRoot, relative))) return '';
  const src = `/${String(topic.img).replace(/^\/+/, '')}`;
  return `<figure class="lesson-figure"><img src="${escapeHtml(src)}" alt="${escapeHtml(topic.imgAlt || `${topic.title} veterinary anatomy`)}" loading="lazy"><figcaption>${escapeHtml(topic.imgCaption || `${topic.title} veterinary anatomy illustration`)}</figcaption></figure>`;
}

function renderRelated(items) {
  if (!items?.length) return '';
  return `<aside class="related"><h2>Related veterinary anatomy topics</h2><ul>${items.map(item => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a></li>`).join('')}</ul></aside>`;
}

const generatedFiles = [];
const sitemapRecords = [{ loc: `${siteOrigin}/`, lastmod, images: [] }];

function writeGenerated(relativePath, contents) {
  const normalized = relativePath.replaceAll('\\', '/');
  if (!normalized.startsWith('learn/')) throw new Error(`Refusing to generate outside learn/: ${normalized}`);
  const destination = path.resolve(projectRoot, relativePath);
  if (!destination.startsWith(`${learnRoot}${path.sep}`)) throw new Error(`Unsafe output path: ${destination}`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  const normalizedContents = contents.replace(/[ \t]+$/gm, '');
  fs.writeFileSync(destination, normalizedContents, 'utf8');
  generatedFiles.push(normalized);
}

function writePage({ parts, title, description, kicker, crumbs, body, related = [], appHref = '/', images = [], schemaType = 'LearningResource' }) {
  const url = routeUrl(parts);
  const href = localHref(parts);
  const metaDescription = truncateWords(description, 158);
  const documentTitle = title.length > 62 ? `${truncateWords(title, 43)} | IVRI Anatomy` : title;
  const graph = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: documentTitle,
      description: metaDescription,
      isPartOf: { '@id': `${siteOrigin}/#website` },
      inLanguage: 'en'
    },
    breadcrumbSchema(crumbs),
    {
      '@type': schemaType,
      '@id': `${url}#learning-resource`,
      name: title,
      description: metaDescription,
      url,
      inLanguage: 'en',
      educationalLevel: 'Undergraduate',
      learningResourceType: schemaType === 'CollectionPage' ? 'Study collection' : 'Study guide',
      about: ['Veterinary anatomy', kicker].filter(Boolean),
      publisher: {
        '@type': 'Organization',
        name: 'IVRI Veterinary Anatomy Atlas',
        url: `${siteOrigin}/`
      }
    }
  ];

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(documentTitle)}</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${escapeHtml(url)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="IVRI Veterinary Anatomy Atlas">
  <meta property="og:title" content="${escapeHtml(documentTitle)}">
  <meta property="og:description" content="${escapeHtml(metaDescription)}">
  <meta property="og:url" content="${escapeHtml(url)}">
  <meta property="og:image" content="${siteOrigin}/images/icon-512.png">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(documentTitle)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="${siteOrigin}/images/icon-512.png">
  <meta name="theme-color" content="#0a192f">
  <link rel="icon" href="/images/icon-192.png">
  <link rel="stylesheet" href="/seo-pages.css">
  <script type="application/ld+json">${jsonForScript({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="/"><img src="/images/icon-192.png" alt="" width="42" height="42"><span>IVRI Veterinary Anatomy</span></a>
    <nav aria-label="Main navigation"><a href="/learn/">Study Library</a><a class="app-link" href="${escapeHtml(appHref)}">Open Interactive Atlas</a></nav>
  </header>
  <main id="main-content" class="page-shell">
    ${renderBreadcrumbs(crumbs)}
    <article class="lesson">
      <p class="eyebrow">${escapeHtml(kicker)}</p>
      <h1>${escapeHtml(title)}</h1>
      <p class="lede">${escapeHtml(metaDescription)}</p>
      ${body}
    </article>
    ${renderRelated(related)}
  </main>
  <footer class="site-footer"><p>Free B.V.Sc. veterinary anatomy learning resource developed at IVRI, Bareilly.</p><p><a href="/">Interactive Atlas</a> · <a href="/learn/">Searchable Study Library</a></p></footer>
</body>
</html>`;

  const relativePath = path.join(...parts, 'index.html');
  writeGenerated(relativePath, html);
  sitemapRecords.push({ loc: url, lastmod, images });
  return { href, url };
}

// Remove only files explicitly listed by the previous generator run.
if (fs.existsSync(generatedManifest)) {
  const previous = JSON.parse(fs.readFileSync(generatedManifest, 'utf8'));
  for (const relative of previous.files || []) {
    const normalized = String(relative).replaceAll('\\', '/');
    if (!normalized.startsWith('learn/') || !normalized.endsWith('/index.html')) continue;
    const target = path.resolve(projectRoot, normalized);
    if (!target.startsWith(`${learnRoot}${path.sep}`)) throw new Error(`Unsafe previous generated path: ${target}`);
    fs.rmSync(target, { force: true });
  }
}

const regionEntries = Object.entries(atlasData).filter(([region]) => regionSlugs[region]);
const regionCounts = new Map();
for (const [region, systems] of regionEntries) {
  const count = Object.values(systems).reduce((total, topics) => total + (Array.isArray(topics) ? topics.length : 0), 0);
  regionCounts.set(region, count);
}

const homeCrumb = { name: 'Home', href: '/', absolute: `${siteOrigin}/` };
const learnCrumb = { name: 'Study Library', href: '/learn/', absolute: `${siteOrigin}/learn/` };

const libraryCards = regionEntries.map(([region, systems]) => ({
  kicker: `${regionCounts.get(region)} lessons`,
  title: region,
  href: `/learn/${regionSlugs[region]}/`,
  description: `Study ${Object.keys(systems).filter(key => Array.isArray(systems[key]) && systems[key].length).join(', ')} in veterinary ${region.toLowerCase()} anatomy.`
}));
libraryCards.push({ kicker: `${whyData.length} explanations`, title: 'The Why of Anatomy', href: '/learn/why/', description: 'Biomechanical, functional and comparative explanations across domestic animals and wildlife.' });

writePage({
  parts: ['learn'],
  title: 'Veterinary Anatomy Study Library | IVRI',
  description: `Explore ${[...regionCounts.values()].reduce((a, b) => a + b, 0)} atlas lessons and ${whyData.length} comparative explanations covering veterinary anatomy, histology and embryology for B.V.Sc. students.`,
  kicker: 'Complete B.V.Sc. learning library',
  crumbs: [homeCrumb, learnCrumb],
  body: `<section class="content-section"><h2>Browse veterinary anatomy by subject</h2><p>This crawlable library complements the interactive atlas. Choose a region or subject to study detailed standard notes, advanced descriptions, comparative anatomy and clinical relevance.</p>${renderCards(libraryCards)}</section>`,
  appHref: '/#/atlas',
  schemaType: 'CollectionPage'
});

for (const [region, systems] of regionEntries) {
  const regionSlug = regionSlugs[region];
  const populatedSystems = Object.entries(systems).filter(([, topics]) => Array.isArray(topics) && topics.length > 0);
  const regionCrumb = { name: region, href: `/learn/${regionSlug}/`, absolute: `${siteOrigin}/learn/${regionSlug}/` };
  const systemCards = populatedSystems.map(([system, topics]) => ({
    kicker: `${topics.length} topics`,
    title: system,
    href: `/learn/${regionSlug}/${slugify(system)}/`,
    description: `Study ${topics.slice(0, 4).map(topic => topic.title).join(', ')}${topics.length > 4 ? ' and more' : ''}.`
  }));

  writePage({
    parts: ['learn', regionSlug],
    title: `${region} Veterinary Anatomy | IVRI`,
    description: `Study ${region.toLowerCase()} veterinary anatomy through ${regionCounts.get(region)} detailed B.V.Sc. lessons covering ${populatedSystems.map(([system]) => system).join(', ')}.`,
    kicker: `${regionCounts.get(region)} detailed lessons`,
    crumbs: [homeCrumb, learnCrumb, regionCrumb],
    body: `<section class="content-section"><h2>${escapeHtml(region)} subjects</h2><p>The lessons below preserve the complete teaching detail from the interactive IVRI Veterinary Anatomy Atlas.</p>${renderCards(systemCards)}</section>`,
    related: libraryCards.filter(card => card.title !== region).slice(0, 6),
    appHref: appHashFor(region),
    schemaType: 'CollectionPage'
  });

  for (const [system, topics] of populatedSystems) {
    const systemSlug = slugify(system);
    const systemCrumb = { name: system, href: `/learn/${regionSlug}/${systemSlug}/`, absolute: `${siteOrigin}/learn/${regionSlug}/${systemSlug}/` };
    const topicCards = topics.map((topic, index) => ({
      kicker: `${region} · ${system}`,
      title: topic.title,
      href: `/learn/${regionSlug}/${systemSlug}/${slugify(topic.title)}/`,
      description: truncateWords(topic.desc || topic.eliteDesc || topic.title, 150),
      index
    }));

    writePage({
      parts: ['learn', regionSlug, systemSlug],
      title: `${system}: ${region} Veterinary Anatomy | IVRI`,
      description: `Detailed ${system.toLowerCase()} lessons for the veterinary ${region.toLowerCase()}, including comparative species notes and clinical anatomy for B.V.Sc. students.`,
      kicker: `${region} veterinary anatomy`,
      crumbs: [homeCrumb, learnCrumb, regionCrumb, systemCrumb],
      body: `<section class="content-section"><h2>${escapeHtml(system)} topics</h2>${renderCards(topicCards)}</section>`,
      related: systemCards.filter(card => card.title !== system),
      appHref: appHashFor(region, system),
      schemaType: 'CollectionPage'
    });

    topics.forEach((topic, index) => {
      const topicSlug = slugify(topic.title);
      const topicCrumb = { name: topic.title, href: `/learn/${regionSlug}/${systemSlug}/${topicSlug}/`, absolute: `${siteOrigin}/learn/${regionSlug}/${systemSlug}/${topicSlug}/` };
      const standard = topic.desc ? `<section class="content-section"><h2>Veterinary anatomy overview</h2><div class="rich-text">${safeRichHtml(topic.desc)}</div></section>` : '';
      const advanced = topic.eliteDesc ? `<section class="content-section"><h2>Detailed anatomy</h2><div class="rich-text">${safeRichHtml(topic.eliteDesc)}</div></section>` : '';
      const clinical = typeof topic.clinical === 'string' && topic.clinical.trim() ? `<section class="content-section clinical"><h2>Clinical relevance</h2><div class="rich-text">${safeRichHtml(topic.clinical)}</div></section>` : '';
      const image = renderImage(topic);
      const images = image ? [`${siteOrigin}/${String(topic.img).replace(/^\/+/, '')}`] : [];
      const relatedTopics = topicCards.filter((_, topicIndex) => topicIndex !== index).slice(Math.max(0, index - 2), Math.max(0, index - 2) + 6);

      writePage({
        parts: ['learn', regionSlug, systemSlug, topicSlug],
        title: `${topic.title} Veterinary Anatomy | IVRI`,
        description: topic.desc || topic.eliteDesc || `${topic.title} in veterinary ${region.toLowerCase()} anatomy.`,
        kicker: `${region} · ${system} · B.V.Sc.`,
        crumbs: [homeCrumb, learnCrumb, regionCrumb, systemCrumb, topicCrumb],
        body: `${image}${standard}${advanced}${renderComparative(topic.comparative)}${clinical}<p class="app-cta"><a href="${escapeHtml(appHashFor(region, system, index))}">Open ${escapeHtml(topic.title)} in the interactive atlas <span aria-hidden="true">→</span></a></p>`,
        related: relatedTopics,
        appHref: appHashFor(region, system, index),
        images
      });
    });
  }
}

const whyCrumb = { name: 'The Why of Anatomy', href: '/learn/why/', absolute: `${siteOrigin}/learn/why/` };
const whyGroups = Object.entries(whyCategoryLabels).map(([category, label]) => ({ category, label, topics: whyData.filter(item => item.category === category) }));
const whyCategoryCards = whyGroups.map(group => ({
  kicker: `${group.topics.length} explanations`,
  title: group.label,
  href: `/learn/why/${group.category}/`,
  description: `Functional and comparative explanations including ${group.topics.slice(0, 4).map(item => item.title).join(', ')}.`
}));

writePage({
  parts: ['learn', 'why'],
  title: 'Veterinary Anatomy Biomechanics and Functional Explanations | IVRI',
  description: `${whyData.length} veterinary anatomy explanations connecting structure, biomechanics, comparative species differences and clinical relevance.`,
  kicker: 'The Why of Veterinary Anatomy',
  crumbs: [homeCrumb, learnCrumb, whyCrumb],
  body: `<section class="content-section"><h2>Explore anatomy by function</h2><p>These lessons explain why anatomical structures are built as they are and how those designs relate to movement, species differences and clinical examination.</p>${renderCards(whyCategoryCards)}</section>`,
  appHref: '/#/why',
  schemaType: 'CollectionPage'
});

for (const group of whyGroups) {
  const categoryCrumb = { name: group.label, href: `/learn/why/${group.category}/`, absolute: `${siteOrigin}/learn/why/${group.category}/` };
  const categoryCards = group.topics.map(item => ({
    kicker: item.comparison || group.label,
    title: item.title,
    href: `/learn/why/${group.category}/${slugify(item.title)}/`,
    description: truncateWords(item.why || item.clinical || item.title, 150)
  }));

  writePage({
    parts: ['learn', 'why', group.category],
    title: `${group.label} | IVRI Veterinary Anatomy`,
    description: `Explore ${group.topics.length} veterinary anatomy explanations covering ${group.label.toLowerCase()}, functional design, species comparison and clinical relevance.`,
    kicker: 'Functional and comparative anatomy',
    crumbs: [homeCrumb, learnCrumb, whyCrumb, categoryCrumb],
    body: `<section class="content-section"><h2>${escapeHtml(group.label)} topics</h2>${renderCards(categoryCards)}</section>`,
    related: whyCategoryCards.filter(card => card.title !== group.label),
    appHref: '/#/why',
    schemaType: 'CollectionPage'
  });

  group.topics.forEach((item, index) => {
    const itemSlug = slugify(item.title);
    const itemCrumb = { name: item.title, href: `/learn/why/${group.category}/${itemSlug}/`, absolute: `${siteOrigin}/learn/why/${group.category}/${itemSlug}/` };
    const why = item.why ? `<section class="content-section"><h2>Why this anatomy matters</h2><div class="rich-text">${safeRichHtml(item.why)}</div></section>` : '';
    const analogy = item.analogy ? `<section class="content-section"><h2>Functional explanation</h2><div class="rich-text">${safeRichHtml(item.analogy)}</div></section>` : '';
    const clinical = item.clinical ? `<section class="content-section clinical"><h2>Clinical relevance</h2><div class="rich-text">${safeRichHtml(item.clinical)}</div></section>` : '';
    const image = renderImage(item);
    const images = image ? [`${siteOrigin}/${String(item.img).replace(/^\/+/, '')}`] : [];
    const selfCheck = item.quiz?.question ? `<section class="content-section self-check"><h2>Self-check question</h2><p>${escapeHtml(item.quiz.question)}</p></section>` : '';
    const relatedTopics = categoryCards.filter((_, topicIndex) => topicIndex !== index).slice(Math.max(0, index - 2), Math.max(0, index - 2) + 6);

    writePage({
      parts: ['learn', 'why', group.category, itemSlug],
      title: `${item.title}: Veterinary Anatomy Explained | IVRI`,
      description: item.why || item.clinical || `${item.title} explained through veterinary anatomy and biomechanics.`,
      kicker: item.comparison || group.label,
      crumbs: [homeCrumb, learnCrumb, whyCrumb, categoryCrumb, itemCrumb],
      body: `${image}${why}${analogy}${clinical}${selfCheck}<p class="app-cta"><a href="/#/why">Explore more in the interactive WHY atlas <span aria-hidden="true">→</span></a></p>`,
      related: relatedTopics,
      appHref: '/#/why',
      images
    });
  });
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapRecords.map(record => `  <url>
    <loc>${escapeXml(record.loc)}</loc>
    <lastmod>${record.lastmod}</lastmod>${record.images.map(image => `
    <image:image>
      <image:loc>${escapeXml(image)}</image:loc>
    </image:image>`).join('')}
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(projectRoot, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(generatedManifest, `${JSON.stringify({ generatedAt: new Date().toISOString(), files: generatedFiles }, null, 2)}\n`, 'utf8');

console.log(`Generated ${generatedFiles.length} crawlable HTML pages.`);
console.log(`Sitemap contains ${sitemapRecords.length} canonical URLs.`);
console.log(`Atlas topics: ${[...regionCounts.values()].reduce((a, b) => a + b, 0)}; WHY topics: ${whyData.length}.`);
