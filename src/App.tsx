import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LANG_KEY, LangProvider, splitPath } from './i18n'
import { TopBar } from './components/TopBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'
import { NotFound } from './pages/NotFound'

// Переход между страницами — наверх; переход к якорю — прокрутка к секции
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return null
}

// Первый визит на корень без сохранённого выбора: предлагаем язык браузера.
// Поисковый робот приходит с английским — для него `/` остаётся английской версией.
function FirstVisitLang() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname !== '/') return
    try {
      if (localStorage.getItem(LANG_KEY)) return
      const nav = (navigator.language || 'en').toLowerCase()
      const lang = nav.startsWith('pl') ? 'pl' : /^(ru|uk|be)/.test(nav) ? 'ru' : 'en'
      localStorage.setItem(LANG_KEY, lang)
      if (lang !== 'en') navigate(`/${lang}/`, { replace: true })
    } catch {
      /* хранилище недоступно — остаёмся на английской версии */
    }
  }, [pathname, navigate])
  return null
}

export function App() {
  const { pathname } = useLocation()
  const { lang, rest } = splitPath(pathname)
  const page = rest === '/' ? <Home /> : rest === '/privacy' || rest === '/privacy/' ? <Privacy /> : <NotFound />

  return (
    <LangProvider lang={lang} rest={rest}>
      <ScrollManager />
      <FirstVisitLang />
      <TopBar />
      {page}
      <Footer />
    </LangProvider>
  )
}
