// Серверный вход для пререндера (scripts/prerender.mjs): разметка страницы + данные для <head>
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'

export { DICTS, LANGS, pathFor } from './i18n'
export { PRODUCTS } from './data/products'
export { COMPANY } from './data/company'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
