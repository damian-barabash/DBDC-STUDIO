import { Link } from 'react-router-dom'
import { LANGS, LANG_KEY, pathFor, useLang, type Lang } from '../i18n'
import { Logo } from './Logo'

export function TopBar() {
  const { lang, t, rest, href } = useLang()
  const remember = (l: Lang) => {
    try {
      localStorage.setItem(LANG_KEY, l)
    } catch {
      /* ignore */
    }
  }
  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <Link to={href('/')} className="brand" aria-label={t.top.name}>
          <span className="brand-mark"><Logo size={22} /></span>
          <span className="brand-name">{t.top.name}</span>
        </Link>
        <span className="topbar-tagline">{t.top.tagline}</span>
        <nav className="langs" aria-label={t.top.language}>
          {LANGS.map((l) => (
            <Link key={l} to={pathFor(l, rest)} hrefLang={l} lang={l} className={l === lang ? 'lang on' : 'lang'} aria-current={l === lang ? 'true' : undefined} onClick={() => remember(l)}>
              {l.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
