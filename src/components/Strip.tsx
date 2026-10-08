import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { COMPANY } from '../data/company'
import { Logo } from './Logo'
import { ArrowUp, Doc, Mail } from './Icons'

export type TabId = 'about' | 'approach' | 'products' | 'contact'
const TABS: TabId[] = ['about', 'approach', 'products', 'contact']

/** Полоса с вкладками, которой на референсе открывается каждый экран */
export function Strip({ active }: { active: TabId }) {
  const { t, href } = useLang()
  return (
    <div className="strip">
      <span className="strip-mark"><Logo size={18} /></span>
      <nav className="tabs" aria-label={t.tabs[active]}>
        {TABS.map((id) => (
          <Link key={id} to={href(`/#${id}`)} className={id === active ? 'tab on' : 'tab'} aria-current={id === active ? 'true' : undefined}>
            {t.tabs[id]}
          </Link>
        ))}
      </nav>
      <div className="strip-icons">
        <a className="round" href={`mailto:${COMPANY.email}`} aria-label={t.actions.email} title={t.actions.email}><Mail /></a>
        <Link className="round dark" to={href('/privacy/')} aria-label={t.actions.privacy} title={t.actions.privacy}><Doc /></Link>
        <a className="round" href="#top" aria-label={t.actions.top} title={t.actions.top} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}><ArrowUp /></a>
      </div>
    </div>
  )
}

export function Heading({ children, as: Tag = 'h3' }: { children: React.ReactNode; as?: 'h2' | 'h3' }) {
  return (
    <div className="heading">
      <Tag>{children}</Tag>
      <span className="round sm" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </span>
    </div>
  )
}
