// Пререндер после сборки: каждая страница становится готовым HTML со своим <head>
// (title, description, canonical, hreflang, Open Graph, JSON-LD), плюс sitemap.xml и 404.html.
// GitHub Pages отдаёт такие файлы с кодом 200, а поисковик видит текст без выполнения скриптов.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'

const SITE = 'https://dbdcstudio.pl'
const dist = new URL('../dist/', import.meta.url)
const { render, DICTS, LANGS, pathFor, PRODUCTS, COMPANY } = await import(new URL('../dist-ssr/entry-server.js', import.meta.url))

const template = await readFile(new URL('index.html', dist), 'utf8')
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const abs = (p) => SITE + p
const OG_LOCALE = { en: 'en_US', pl: 'pl_PL', ru: 'ru_RU' }
const today = new Date().toISOString().slice(0, 10)

const ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: COMPANY.brand,
  legalName: COMPANY.legalName,
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/icon-512.png`, width: 512, height: 512 },
  image: `${SITE}/og.png`,
  email: COMPANY.email,
  taxID: COMPANY.nip,
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address,
    postalCode: '02-786',
    addressLocality: 'Warszawa',
    addressCountry: 'PL',
  },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: COMPANY.email, availableLanguage: ['en', 'pl', 'ru'] },
  knowsAbout: ['Mobile app development', 'Mobile game development', 'iOS', 'Android', 'Flutter', 'UI/UX design', 'SaaS'],
}

const PRODUCT_LD = {
  ticketflow: { '@type': 'SoftwareApplication', applicationCategory: 'BusinessApplication', operatingSystem: 'Web, iOS, Android, macOS, Windows', price: '12.00' },
  sake: { '@type': 'SoftwareApplication', applicationCategory: 'DeveloperApplication', operatingSystem: 'Web, iOS, Android', price: '7.00' },
  catmon: { '@type': 'VideoGame', applicationCategory: 'GameApplication', operatingSystem: 'iOS, Android', gamePlatform: ['iOS', 'Android'], price: '0' },
}

function homeGraph(lang, url) {
  const t = DICTS[lang]
  return [
    { ...ORG, description: t.meta.description },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: `${SITE}/`,
      name: COMPANY.brand,
      inLanguage: LANGS,
      publisher: { '@id': ORG['@id'] },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: t.meta.title,
      description: t.meta.description,
      inLanguage: lang,
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': ORG['@id'] },
      primaryImageOfPage: `${SITE}/og.png`,
    },
    {
      '@type': 'ItemList',
      name: t.products.heading,
      itemListElement: PRODUCTS.map((p, i) => {
        const { price, ...kind } = PRODUCT_LD[p.id]
        const c = t.products.items[p.id]
        return {
          '@type': 'ListItem',
          position: i + 1,
          item: {
            ...kind,
            name: p.name,
            url: p.url,
            description: c.text,
            image: abs(p.desktop),
            inLanguage: c.languages.split(' · ').map((x) => x.toLowerCase()),
            author: { '@id': ORG['@id'] },
            publisher: { '@id': ORG['@id'] },
            offers: { '@type': 'Offer', price, priceCurrency: 'USD' },
          },
        }
      }),
    },
  ]
}

function privacyGraph(lang, url) {
  const t = DICTS[lang]
  return [
    ORG,
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: t.meta.privacyTitle,
      description: t.meta.privacyDescription,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: COMPANY.brand, item: abs(pathFor(lang, '/')) },
        { '@type': 'ListItem', position: 2, name: t.privacy.title, item: url },
      ],
    },
  ]
}

function head({ title, description, canonical, lang, alternates, robots, graph }) {
  const lines = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="author" content="${esc(COMPANY.brand)}" />`,
    `<meta name="robots" content="${robots}" />`,
  ]
  if (canonical) lines.push(`<link rel="canonical" href="${canonical}" />`)
  for (const [hl, href] of alternates) lines.push(`<link rel="alternate" hreflang="${hl}" href="${href}" />`)
  lines.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(COMPANY.brand)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${canonical || SITE + '/'}" />`,
    `<meta property="og:image" content="${SITE}/og.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(COMPANY.brand)} — ${esc(DICTS[lang].top.tagline)}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
    ...LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${SITE}/og.png" />`,
  )
  if (graph) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
    lines.push(`<script type="application/ld+json">${json}</script>`)
  }
  return lines.join('\n    ')
}

async function write(file, route, lang, seo) {
  const html = template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head({ ...seo, lang }))
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  const target = new URL(file, dist)
  await mkdir(new URL('./', target), { recursive: true })
  await writeFile(target, html)
}

const homeAlternates = [...LANGS.map((l) => [l, abs(pathFor(l, '/'))]), ['x-default', abs('/')]]
const pages = []

for (const lang of LANGS) {
  const t = DICTS[lang]
  const home = pathFor(lang, '/')
  await write(`${home.slice(1)}index.html`, home, lang, {
    title: t.meta.title,
    description: t.meta.description,
    canonical: abs(home),
    alternates: homeAlternates,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    graph: homeGraph(lang, abs(home)),
  })
  pages.push(home)

  // Текст политики один (английский) на всех языковых адресах — канонической считаем /privacy/
  const privacy = pathFor(lang, '/privacy/')
  await write(`${privacy.slice(1)}index.html`, privacy, lang, {
    title: t.meta.privacyTitle,
    description: t.meta.privacyDescription,
    canonical: abs('/privacy/'),
    alternates: [],
    robots: 'index, follow',
    graph: privacyGraph(lang, abs(privacy)),
  })
}

await write('404.html', '/404', 'en', {
  title: `404 — ${COMPANY.brand}`,
  description: DICTS.en.notFound.text,
  canonical: '',
  alternates: [],
  robots: 'noindex, follow',
})

const xhtml = homeAlternates.map(([hl, href]) => `    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}" />`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((p) => `  <url>\n    <loc>${abs(p)}</loc>\n    <lastmod>${today}</lastmod>\n${xhtml}\n  </url>`).join('\n')}
  <url>
    <loc>${abs('/privacy/')}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`
await writeFile(new URL('sitemap.xml', dist), sitemap)
await rm(new URL('../dist-ssr/', import.meta.url), { recursive: true, force: true })
console.log(`prerender: ${LANGS.length * 2} pages + 404.html + sitemap.xml`)
