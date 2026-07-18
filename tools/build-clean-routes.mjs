import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://veterinaryanatomy.com';
const lastmod = new Date().toISOString().slice(0, 10);
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

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

const regionIcons = {
  Introduction: 'fa-graduation-cap',
  Forelimb: 'fa-hand-point-up',
  'Hindlimb & Pelvis': 'fa-shoe-prints',
  Thorax: 'fa-lungs',
  Abdomen: 'fa-prescription-bottle-alt',
  'Head & Neck': 'fa-head-side-virus',
  Histology: 'fa-microscope',
  Embryology: 'fa-baby'
};

const whyCategoryLabels = {
  forelimb: 'Forelimb Biomechanics',
  hindlimb: 'Hindlimb Biomechanics',
  axial: 'Axial and Trunk Biomechanics',
  wildlife: 'Wildlife and Comparative Anatomy'
};

function loadData(files) {
  const context = vm.createContext({ console });
  for (const file of files) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  }
  return context;
}

const atlasData = loadData(atlasFiles).atlasData;
const whyData = loadData(['data-why.js']).anatomyData;
if (!atlasData || typeof atlasData !== 'object') throw new Error('atlasData was not loaded');
if (!Array.isArray(whyData)) throw new Error('WHY anatomyData was not loaded');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
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

function truncate(value, max = 158) {
  const text = plainText(value);
  if (text.length <= max) return text;
  const clipped = text.slice(0, max + 1);
  const at = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, at > max * 0.65 ? at : max).trim()}…`;
}

function slugify(value) {
  return String(value ?? '')
    .replace(/&/g, ' and ')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90)
    .replace(/-+$/g, '') || 'topic';
}

function route(parts) {
  return `/${parts.filter(Boolean).join('/')}/`;
}

function absolute(parts) {
  return `${origin}${route(parts)}`;
}

function jsonScript(value) {
  return JSON.stringify(value, null, 2).replaceAll('<', '\\u003c');
}

function breadcrumbSchema(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${origin}${crumb.path}`
    }))
  };
}

function schemaGraph({ url, title, description, crumbs, collection = false }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: { '@id': `${origin}/#website` }
      },
      breadcrumbSchema(crumbs),
      {
        '@type': collection ? 'CollectionPage' : 'LearningResource',
        '@id': `${url}#learning-resource`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        educationalLevel: 'Undergraduate',
        learningResourceType: collection ? 'Interactive anatomy collection' : 'Interactive anatomy lesson',
        about: ['Veterinary anatomy', 'B.V.Sc.'],
        publisher: {
          '@type': 'Organization',
          name: 'IVRI Veterinary Anatomy Atlas',
          url: `${origin}/`
        }
      }
    ]
  };
}

function replaceMeta(html, { title, description, url, graph }) {
  const desc = truncate(description);
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description"\s+content="[\s\S]*?">/i, `<meta name="description" content="${escapeHtml(desc)}">`)
    .replace(/<link rel="canonical" href="[^"]+">/i, `<link rel="canonical" href="${escapeHtml(url)}">`)
    .replace(/<meta property="og:type" content="[^"]+">/i, '<meta property="og:type" content="article">')
    .replace(/<meta property="og:title" content="[^"]+">/i, `<meta property="og:title" content="${escapeHtml(title)}">`)
    .replace(/<meta property="og:description"\s+content="[\s\S]*?">/i, `<meta property="og:description" content="${escapeHtml(desc)}">`)
    .replace(/<meta property="og:url" content="[^"]+">/i, `<meta property="og:url" content="${escapeHtml(url)}">`)
    .replace(/<meta name="twitter:title" content="[^"]+">/i, `<meta name="twitter:title" content="${escapeHtml(title)}">`)
    .replace(/<meta name="twitter:description"\s+content="[\s\S]*?">/i, `<meta name="twitter:description" content="${escapeHtml(desc)}">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${jsonScript(graph)}</script>`)
    .replace('</head>', `  <meta name="ivri-clean-route" content="${escapeHtml(new URL(url).pathname)}">\n</head>`);
}

function ensureRootBase(html) {
  if (/<base\s+href="\/">/i.test(html)) return html;
  return html.replace(/(<meta\s+charset="UTF-8">)/i, '$1\n  <base href="/">');
}

function activateView(html, view) {
  return html
    .replace('<section id="landing-view" class="view-section active">', '<section id="landing-view" class="view-section">')
    .replace(`<section id="${view}-view" class="view-section">`, `<section id="${view}-view" class="view-section active">`);
}

function replaceAtlasSelector(html, content, hidden = false) {
  return html.replace(
    /<div id="atlas-selector" class="portal-grid" style="gap: 30px;">\s*<!-- Injected by JavaScript -->\s*<\/div>/,
    `<div id="atlas-selector" class="portal-grid" style="gap: 30px;${hidden ? ' display:none;' : ''}">${content}</div>`
  );
}

function replaceTopicList(html, content) {
  return html.replace(
    /<div class="sidebar" id="topic-list">\s*<!-- Topics injected by JavaScript -->\s*<\/div>/,
    `<div class="sidebar" id="topic-list">${content}</div>`
  );
}

function replaceDetailPanel(html, content) {
  return html.replace(
    /<div class="content-area" id="detail-panel">\s*<div[\s\S]*?AWAITING INPUT SELECTION[\s\S]*?<\/div>\s*<\/div>/,
    `<div class="content-area" id="detail-panel">${content}</div>`
  );
}

function setAtlasWorkspaceVisible(html) {
  return html.replace('<div id="atlas-content" class="workspace" style="display:none;">', '<div id="atlas-content" class="workspace" style="display:grid;">');
}

function renderRegionCards() {
  return Object.keys(regionSlugs).map(region => `
    <a class="portal-card card-atlas" href="/atlas/${regionSlugs[region]}/" style="width:280px;height:300px;">
      <i class="fas ${regionIcons[region] || 'fa-bone'} orb-icon" style="color:var(--atlas-gold);font-size:3rem;margin-bottom:15px;z-index:2;"></i>
      <div class="card-label" style="font-size:1.4rem;font-weight:800;text-align:center;z-index:2;">${escapeHtml(region)}</div>
      <div class="card-sub" style="margin-bottom:15px;z-index:2;">REGIONAL ANATOMY MODULE</div>
    </a>`).join('');
}

function renderSystemCards(region) {
  return Object.entries(atlasData[region])
    .filter(([, topics]) => Array.isArray(topics) && topics.length)
    .map(([system, topics]) => `
      <a class="portal-card card-why" href="/atlas/${regionSlugs[region]}/${slugify(system)}/" style="width:280px;height:300px;">
        <i class="fas fa-book-medical orb-icon" style="color:var(--why-cyan);font-size:3rem;margin-bottom:15px;z-index:2;"></i>
        <div class="card-label" style="font-size:1.4rem;font-weight:800;text-align:center;z-index:2;">${escapeHtml(system)}</div>
        <div class="card-sub" style="margin-bottom:15px;z-index:2;">${topics.length} STRUCTURES</div>
      </a>`).join('');
}

function renderTopicLinks(region, system, activeIndex = -1) {
  return atlasData[region][system].map((topic, index) => `
    <a class="topic-btn${index === activeIndex ? ' active' : ''}" href="/atlas/${regionSlugs[region]}/${slugify(system)}/${slugify(topic.title)}/" data-index="${index}">${escapeHtml(topic.title.toUpperCase())}</a>`).join('');
}

function renderComparative(items) {
  if (!Array.isArray(items) || !items.length) return '';
  return `
    <h3 style="color:var(--atlas-gold);font-family:var(--font-code);margin-top:30px;">// COMPARATIVE ANALYSIS</h3>
    <table class="comp-table" style="width:100%;border-collapse:collapse;">${items.map(item => `
      <tr style="border-bottom:1px solid var(--border);">
        <td class="species-label" style="padding:15px;width:140px;font-weight:bold;color:var(--atlas-gold);font-family:var(--font-code);">${escapeHtml(String(item.species || 'Species').toUpperCase())}</td>
        <td style="padding:15px;line-height:1.6;">${safeRichHtml(item.note || '')}</td>
      </tr>`).join('')}</table>`;
}

function renderTopicDetail(region, system, topic) {
  const description = topic.desc || topic.eliteDesc || '';
  const elite = topic.eliteDesc ? `
    <div class="feature-box" style="background:rgba(255,255,255,0.03);padding:20px;border-radius:8px;margin-bottom:20px;">
      <strong style="color:var(--why-cyan);display:block;margin-bottom:10px;font-family:var(--font-code);">📚 DETAILED DESCRIPTION:</strong>
      <div style="line-height:1.8;color:var(--text-main);">${safeRichHtml(topic.eliteDesc)}</div>
    </div>` : '';
  const clinical = topic.clinical ? `
    <div class="clinical-box" style="margin-top:30px;padding:20px;border:1px solid var(--clinical-red);border-radius:8px;">
      <strong style="color:var(--clinical-red);display:block;margin-bottom:10px;font-family:var(--font-code);">CLINICAL RELEVANCE</strong>
      <div style="line-height:1.8;">${safeRichHtml(topic.clinical)}</div>
    </div>` : '';
  return `
    <div class="detail-header">
      <div><div class="h-title">${escapeHtml(topic.title)}</div><span class="h-sub">/// STANDARD MORPHOLOGY // ${escapeHtml(system.toUpperCase())}</span></div>
    </div>
    <div class="feature-box" style="background:rgba(255,255,255,0.03);padding:20px;border-radius:8px;margin-bottom:20px;">
      <strong style="color:var(--atlas-gold);display:block;margin-bottom:10px;font-family:var(--font-code);">📝 STANDARD DESCRIPTION:</strong>
      <div style="line-height:1.8;color:var(--text-main);">${safeRichHtml(description)}</div>
    </div>
    ${elite}${renderComparative(topic.comparative)}${clinical}`;
}

function replaceWhyGrid(html, items) {
  const cards = items.map(item => `
    <a class="card ${escapeHtml(item.category || '')}" href="/why/${slugify(item.category)}/${slugify(item.title)}/">
      <div><div class="card-header"><span class="card-category">${escapeHtml(item.category || '')}</span></div>
      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <div class="card-comparison">${escapeHtml(item.comparison || '')}</div>
      <p class="card-preview">${escapeHtml(truncate(item.why || '', 220))}</p></div>
      <div class="card-footer"><span class="read-more">Analyze <i class="fas fa-microscope"></i></span></div>
    </a>`).join('');
  return html.replace(
    /<main class="anatomy-grid" id="anatomyGrid">\s*<!-- Cards injected via JavaScript -->\s*<\/main>/,
    `<main class="anatomy-grid" id="anatomyGrid">${cards}</main>`
  );
}

function openWhyModal(html, item) {
  let output = html.replace('<div class="modal-overlay" id="modalOverlay">', '<div class="modal-overlay open" id="modalOverlay">');
  output = output.replace(/<span class="modal-category" id="modalCategory">[\s\S]*?<\/span>/, `<span class="modal-category" id="modalCategory">${escapeHtml(String(item.category || '').toUpperCase())}</span>`);
  output = output.replace(/<h2 class="modal-title" id="modalTitle">[\s\S]*?<\/h2>/, `<h2 class="modal-title" id="modalTitle">${escapeHtml(item.title)}</h2>`);
  output = output.replace(/<div class="modal-comparison-tag" id="modalComparison">[\s\S]*?<\/div>/, `<div class="modal-comparison-tag" id="modalComparison">Comparison: ${escapeHtml(item.comparison || '')}</div>`);
  output = output.replace(/<p class="modal-desc" id="modalWhy">[\s\S]*?<\/p>/, `<div class="modal-desc" id="modalWhy">${safeRichHtml(item.why || '')}</div>`);
  output = output.replace(/<div class="modal-clinical" id="modalClinical">[\s\S]*?<\/div>/, `<div class="modal-clinical" id="modalClinical">${safeRichHtml(item.clinical || '')}</div>`);
  if (item.img) output = output.replace('<img src="" alt="Anatomy Diagram" id="modalImg"', `<img src="/${escapeHtml(String(item.img).replace(/^\/+/, ''))}" alt="${escapeHtml(item.title)}" id="modalImg"`);
  return output;
}

const generated = [];
const appGenerated = [];
const sitemap = [{ loc: `${origin}/`, images: [] }];
const redirects = [];

function writePage({ parts, oldParts, title, description, crumbs, view, collection = false, transform }) {
  const relative = path.join(...parts, 'index.html');
  const destination = path.resolve(root, relative);
  const allowed = [path.join(root, 'atlas') + path.sep, path.join(root, 'why') + path.sep];
  if (!allowed.some(prefix => destination.startsWith(prefix))) throw new Error(`Unsafe generated path: ${destination}`);
  const url = absolute(parts);
  const graph = schemaGraph({ url, title, description: truncate(description), crumbs, collection });
  let html = ensureRootBase(replaceMeta(template, { title, description, url, graph }));
  html = activateView(html, view);
  html = transform(html);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html.replace(/[ \t]+$/gm, ''), 'utf8');
  generated.push(relative.replaceAll('\\', '/'));
  const imageMatches = [...html.matchAll(/<img[^>]+src="(\/images\/[^"?#]+)"/g)].map(match => `${origin}${match[1]}`);
  sitemap.push({ loc: url, images: [...new Set(imageMatches)] });
  if (oldParts) redirects.push({ from: route(oldParts), to: route(parts) });
}

function writeAppEntry({ parts, title, description }) {
  const relative = path.join(...parts, 'index.html');
  const destination = path.resolve(root, relative);
  const allowedRoots = ['dashboard', 'library', 'me', 'quiz'].map(folder => path.join(root, folder) + path.sep);
  if (!allowedRoots.some(prefix => destination.startsWith(prefix))) throw new Error(`Unsafe app entry path: ${destination}`);
  const url = absolute(parts);
  const graph = schemaGraph({
    url,
    title,
    description,
    crumbs: [homeCrumb, { name: title, path: route(parts) }],
    collection: false
  });
  let html = ensureRootBase(replaceMeta(template, { title, description, url, graph }));
  html = html.replace(
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">',
    '<meta name="robots" content="noindex, follow">'
  );
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html.replace(/[ \t]+$/gm, ''), 'utf8');
  appGenerated.push(relative.replaceAll('\\', '/'));
}

const homeCrumb = { name: 'Home', path: '/' };
const atlasCrumb = { name: 'Interactive Atlas', path: '/atlas/' };

writePage({
  parts: ['atlas'],
  oldParts: ['learn'],
  title: 'Interactive Veterinary Anatomy Atlas for B.V.Sc. Students | IVRI',
  description: 'Open the original interactive IVRI veterinary anatomy atlas with regional anatomy, histology, embryology, comparative notes and clinical relevance.',
  crumbs: [homeCrumb, atlasCrumb],
  view: 'atlas',
  collection: true,
  transform: html => replaceAtlasSelector(html, renderRegionCards())
});

for (const [region, systems] of Object.entries(atlasData).filter(([name]) => regionSlugs[name])) {
  const regionSlug = regionSlugs[region];
  const regionPath = `/atlas/${regionSlug}/`;
  const regionCrumb = { name: region, path: regionPath };
  const populated = Object.entries(systems).filter(([, topics]) => Array.isArray(topics) && topics.length);
  const topicCount = populated.reduce((sum, [, topics]) => sum + topics.length, 0);

  writePage({
    parts: ['atlas', regionSlug],
    oldParts: ['learn', regionSlug],
    title: `${region} Veterinary Anatomy | Interactive IVRI Atlas`,
    description: `Open ${topicCount} interactive ${region.toLowerCase()} veterinary anatomy lessons covering ${populated.map(([system]) => system).join(', ')}.`,
    crumbs: [homeCrumb, atlasCrumb, regionCrumb],
    view: 'atlas',
    collection: true,
    transform: html => replaceAtlasSelector(html, renderSystemCards(region))
  });

  for (const [system, topics] of populated) {
    const systemSlug = slugify(system);
    const systemPath = `/atlas/${regionSlug}/${systemSlug}/`;
    const systemCrumb = { name: system, path: systemPath };

    writePage({
      parts: ['atlas', regionSlug, systemSlug],
      oldParts: ['learn', regionSlug, systemSlug],
      title: `${system}: ${region} Veterinary Anatomy | IVRI`,
      description: `Open the original interactive ${system.toLowerCase()} atlas for the veterinary ${region.toLowerCase()}, with ${topics.length} detailed B.V.Sc. structures.`,
      crumbs: [homeCrumb, atlasCrumb, regionCrumb, systemCrumb],
      view: 'atlas',
      collection: true,
      transform: html => {
        html = replaceAtlasSelector(html, '', true);
        html = setAtlasWorkspaceVisible(html);
        return replaceTopicList(html, renderTopicLinks(region, system));
      }
    });

    topics.forEach((topic, index) => {
      const topicSlug = slugify(topic.title);
      const topicPath = `/atlas/${regionSlug}/${systemSlug}/${topicSlug}/`;
      const topicCrumb = { name: topic.title, path: topicPath };
      writePage({
        parts: ['atlas', regionSlug, systemSlug, topicSlug],
        oldParts: ['learn', regionSlug, systemSlug, topicSlug],
        title: `${topic.title} · ${system} · ${region} | IVRI Anatomy`,
        description: topic.desc || topic.eliteDesc || `${topic.title} veterinary anatomy in the interactive IVRI atlas.`,
        crumbs: [homeCrumb, atlasCrumb, regionCrumb, systemCrumb, topicCrumb],
        view: 'atlas',
        transform: html => {
          html = replaceAtlasSelector(html, '', true);
          html = setAtlasWorkspaceVisible(html);
          html = replaceTopicList(html, renderTopicLinks(region, system, index));
          return replaceDetailPanel(html, renderTopicDetail(region, system, topic));
        }
      });
    });
  }
}

const whyCrumb = { name: 'The Why of Anatomy', path: '/why/' };
writePage({
  parts: ['why'],
  oldParts: ['learn', 'why'],
  title: 'Veterinary Anatomy Biomechanics | Interactive IVRI Atlas',
  description: `${whyData.length} interactive veterinary anatomy explanations connecting structure, biomechanics, comparative species differences and clinical relevance.`,
  crumbs: [homeCrumb, whyCrumb],
  view: 'why',
  collection: true,
  transform: html => replaceWhyGrid(html, whyData)
});

for (const [category, label] of Object.entries(whyCategoryLabels)) {
  const items = whyData.filter(item => item.category === category);
  const categoryCrumb = { name: label, path: `/why/${category}/` };
  writePage({
    parts: ['why', category],
    oldParts: ['learn', 'why', category],
    title: `${label} | Interactive IVRI Veterinary Anatomy`,
    description: `Explore ${items.length} interactive ${label.toLowerCase()} explanations with species comparisons and clinical relevance.`,
    crumbs: [homeCrumb, whyCrumb, categoryCrumb],
    view: 'why',
    collection: true,
    transform: html => replaceWhyGrid(html, items)
  });

  items.forEach(item => {
    const itemSlug = slugify(item.title);
    const itemCrumb = { name: item.title, path: `/why/${category}/${itemSlug}/` };
    writePage({
      parts: ['why', category, itemSlug],
      oldParts: ['learn', 'why', category, itemSlug],
      title: `${item.title}: Veterinary Anatomy Explained | IVRI`,
      description: item.why || item.clinical || `${item.title} explained in the interactive IVRI veterinary anatomy atlas.`,
      crumbs: [homeCrumb, whyCrumb, categoryCrumb, itemCrumb],
      view: 'why',
      transform: html => openWhyModal(replaceWhyGrid(html, items), item)
    });
  });
}

[
  { parts: ['dashboard'], title: 'Study Dashboard | IVRI Anatomy', description: 'Personal veterinary anatomy study progress dashboard.' },
  { parts: ['me'], title: 'Student Profile | IVRI Anatomy', description: 'Personal IVRI Anatomy student profile and study statistics.' },
  { parts: ['quiz'], title: 'Veterinary Anatomy Quiz | IVRI Anatomy', description: 'Interactive veterinary anatomy quiz and revision tools.' },
  { parts: ['library'], title: 'Personal Study Library | IVRI Anatomy', description: 'Personal veterinary anatomy bookmarks, notes and highlights.' },
  { parts: ['library', 'bookmarks'], title: 'Bookmarks | IVRI Anatomy', description: 'Saved veterinary anatomy study bookmarks.' },
  { parts: ['library', 'highlights'], title: 'Highlights | IVRI Anatomy', description: 'Saved veterinary anatomy study highlights.' },
  { parts: ['library', 'notes'], title: 'Notes | IVRI Anatomy', description: 'Saved veterinary anatomy study notes.' }
].forEach(writeAppEntry);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemap.map(record => `  <url>
    <loc>${escapeHtml(record.loc)}</loc>
    <lastmod>${lastmod}</lastmod>${record.images.map(image => `
    <image:image><image:loc>${escapeHtml(image)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>
`;

const redirectLines = [
  '# Generated legacy learning-page redirects. Keep old indexed URLs working.',
  '/landing/ / 301',
  '/landing / 301',
  ...redirects.flatMap(({ from, to }) => {
    const withoutSlash = from === '/' ? from : from.replace(/\/$/, '');
    return [`${from} ${to} 301`, `${withoutSlash} ${to} 301`];
  })
];

fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(root, '_redirects'), `${redirectLines.join('\n')}\n`, 'utf8');
fs.writeFileSync(path.join(root, 'tools', 'clean-route-generated-files.json'), `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  files: generated,
  appFiles: appGenerated,
  redirects
}, null, 2)}\n`, 'utf8');

console.log(`Generated ${generated.length} clean interactive route pages.`);
console.log(`Generated ${appGenerated.length} non-indexed app entry pages.`);
console.log(`Sitemap contains ${sitemap.length} canonical URLs.`);
console.log(`Created ${redirects.length} permanent legacy route mappings.`);
