// Визуальная проверка сборки: node scripts/qc.mjs <outDir> [baseUrl]
// Снимает страницы на десктопе и телефоне, ловит ошибки консоли и горизонтальный скролл.
import puppeteer from 'puppeteer-core'
import { mkdir } from 'node:fs/promises'

const out = process.argv[2] || 'qc'
const base = process.argv[3] || 'http://localhost:4173'
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
await mkdir(out, { recursive: true })

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
let bad = 0
for (const lang of (process.env.LANGS || 'en').split(',')) {
  for (const [name, w, h] of [['desktop', 1440, 900], ['tablet', 820, 1100], ['phone', 390, 844], ['small', 340, 700]]) {
    for (const path of ['/', '/privacy/']) {
      const page = await browser.newPage()
      const errors = []
      page.on('pageerror', (e) => errors.push(String(e)))
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
      await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 })
      await page.evaluateOnNewDocument((l) => localStorage.setItem('dbdc.lang', l), lang)
      await page.goto(base + path, { waitUntil: 'networkidle0' })
      // прокрутка, чтобы сработало появление блоков и ленивые картинки
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) {
          window.scrollTo({ top: y, behavior: 'instant' })
          await new Promise((r) => setTimeout(r, 90))
        }
        window.scrollTo({ top: 0, behavior: 'instant' })
        await new Promise((r) => setTimeout(r, 900))
      })
      const m = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        hidden: document.querySelectorAll('[data-rv]:not(.in)').length,
        broken: [...document.images].filter((i) => !i.naturalWidth).length,
      }))
      const file = `${out}/${lang}-${name}${path === '/' ? '-home' : '-privacy'}.png`
      await page.screenshot({ path: file, fullPage: true })
      const ok = !errors.length && m.overflow <= 0 && !m.hidden && !m.broken
      if (!ok) bad++
      console.log(ok ? 'OK ' : 'BAD', file, JSON.stringify(m), errors.join(' | '))
      await page.close()
    }
  }
}
await browser.close()
process.exit(bad ? 1 : 0)
