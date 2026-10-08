import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { COMPANY } from '../data/company'
import { PRIVACY, PRIVACY_INTRO } from '../data/privacy'
import { Logo } from '../components/Logo'

export function Privacy() {
  const { t, href } = useLang()
  useEffect(() => {
    document.title = t.meta.privacyTitle
  }, [t])

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="wrap policy">
      <div className="strip">
        <span className="strip-mark"><Logo size={18} /></span>
        <nav className="tabs">
          <Link className="tab" to={href('/')}>← {t.actions.home}</Link>
          <span className="tab on">{t.privacy.title}</span>
        </nav>
      </div>

      <header className="policy-head">
        <span className="pill accent">Privacy Statement</span>
        <h1>{t.privacy.title}</h1>
        {t.privacy.note && <p className="policy-note">{t.privacy.note}</p>}
        <p className="policy-intro" lang="en">{PRIVACY_INTRO}</p>
      </header>

      <div className="policy-grid">
        <aside className="toc">
          <h2>{t.privacy.contents}</h2>
          <ol lang="en">
            {PRIVACY.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} onClick={jump(s.id)}>{s.title}</a></li>
            ))}
          </ol>
        </aside>

        <article className="policy-body" lang="en">
          {PRIVACY.map((s, i) => (
            <section key={s.id} id={s.id}>
              <h2><span>{String(i + 1).padStart(2, '0')}</span>{s.title}</h2>
              {s.blocks.map((b, j) => (
                <div key={j}>
                  {b.sub && <h3>{b.sub}</h3>}
                  <p>{b.text}</p>
                </div>
              ))}
            </section>
          ))}

          <section className="controller" lang={undefined}>
            <h2><span>→</span>{t.privacy.controller}</h2>
            <address>
              <strong>{COMPANY.legalName}</strong>
              <span>{COMPANY.address}, {COMPANY.city}</span>
              <span>NIP: {COMPANY.nip}</span>
              <span>REGON: {COMPANY.regon}</span>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </address>
          </section>
        </article>
      </div>
    </main>
  )
}
