import { Link } from 'react-router-dom'
import { LANGS, useLang } from '../i18n'
import { Logo } from './Logo'

export function TopBar() {
  const { lang, t, setLang } = useLang()
  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <Link to="/" className="brand" aria-label={t.top.name}>
          <span className="brand-mark"><Logo size={22} /></span>
          <span className="brand-name">{t.top.name}</span>
        </Link>
        <span className="topbar-tagline">{t.top.tagline}</span>
        <div className="langs" role="group" aria-label={t.top.language}>
          {LANGS.map((l) => (
            <button key={l} type="button" className={l === lang ? 'lang on' : 'lang'} aria-pressed={l === lang} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
