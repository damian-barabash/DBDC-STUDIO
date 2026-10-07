// Картинка для соцсетей public/og.png (1200×630) — снимок hero собранного сайта.
// Запуск: npm run build && npx vite preview --port 4173 & npm run og
import puppeteer from 'puppeteer-core'

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 })
await page.evaluateOnNewDocument(() => localStorage.setItem('dbdc.lang', 'en'))
await page.goto(process.argv[2] || 'http://localhost:4173/', { waitUntil: 'networkidle0' })
await page.addStyleTag({
  content: `
    .topbar, .seemore { display: none !important; }
    .hero { padding: 35px 44px !important; max-width: none !important; }
    .hero-grid { grid-template-columns: minmax(0, 1fr) 560px !important; gap: 44px !important; }
    .hero-title { font-size: 46px !important; }
    .poster-letter { animation: none !important; }
  `,
})
await new Promise((r) => setTimeout(r, 600))
await page.screenshot({ path: new URL('../public/og.png', import.meta.url).pathname, clip: { x: 0, y: 0, width: 1200, height: 630 } })
await browser.close()
console.log('public/og.png')
