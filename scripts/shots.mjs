// Снимает скриншоты живых сайтов продуктов → src/assets/products/*.webp
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUT = new URL('../src/assets/products/', import.meta.url).pathname
const SITES = [
  { id: 'ticketflow', url: 'https://ticketflow.pl/' },
  { id: 'sake', url: 'https://sakecontrol.pl/' },
  { id: 'catmon', url: 'https://catmongame.app/' },
]

await mkdir(OUT, { recursive: true })
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' })
for (const s of SITES) {
  for (const [kind, vp, width] of [
    ['desktop', { width: 1440, height: 900, deviceScaleFactor: 2 }, 1600],
    ['mobile', { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true }, 780],
  ]) {
    const page = await browser.newPage()
    await page.setViewport(vp)
    await page.evaluateOnNewDocument(() => {
      try { for (const k of ['tf_lang', 'sake_lang', 'catmon.lang']) localStorage.setItem(k, 'en') } catch {}
    })
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en' })
    await page.goto(s.url, { waitUntil: 'networkidle2', timeout: 60000 })
    await new Promise((r) => setTimeout(r, 4000))
    // закрыть cookie-баннер, чтобы не попал в кадр
    await page.evaluate(() => {
      const b = [...document.querySelectorAll('button')].find((x) => /^(accept|принять|akceptuj|akceptuję)$/i.test(x.textContent.trim()))
      if (b) b.click()
    })
    await new Promise((r) => setTimeout(r, 2500))
    const buf = await page.screenshot({ type: 'png' })
    await sharp(buf).resize({ width }).webp({ quality: 82 }).toFile(`${OUT}${s.id}-${kind}.webp`)
    console.log(s.id, kind)
    await page.close()
  }
}
await browser.close()
