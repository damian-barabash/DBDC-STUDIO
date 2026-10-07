// GitHub Pages отдаёт только файлы: кладём копию index.html на каждый маршрут
// (ответ 200 вместо 404) и 404.html как запасной вход в приложение.
import { copyFile, mkdir } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
const ROUTES = ['privacy']

for (const r of ROUTES) {
  await mkdir(new URL(`${r}/`, dist), { recursive: true })
  await copyFile(new URL('index.html', dist), new URL(`${r}/index.html`, dist))
}
await copyFile(new URL('index.html', dist), new URL('404.html', dist))
console.log(`postbuild: ${ROUTES.length} route(s) + 404.html`)
