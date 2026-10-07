import { useT } from '../i18n'
import { COMPANY } from '../data/company'
import { Logo } from './Logo'
import { Heading, Strip } from './Strip'
import { Mail, Pencil, Pin } from './Icons'

export function About() {
  const t = useT()
  const subject = encodeURIComponent(t.about.mailSubject)
  return (
    <section className="frame wrap" id="about">
      <Strip active="about" />
      <div className="about-grid">
        <div className="hello-card" data-rv>
          <Logo className="hello-logo" size={320} />
          <div className="hello-top">
            <span className="hello-hi">{t.about.hello}</span>
            <h2 className="hello-title">{t.about.cardTitle}</h2>
          </div>
          <p className="hello-text">{t.about.cardText}</p>
        </div>

        <div className="about-right">
          <Heading>{t.about.introHeading}</Heading>
          <div className="intro-card" data-rv>
            <div>
              <h3 className="intro-title">{t.about.introTitle}</h3>
              <p>{t.about.introText}</p>
            </div>
            <PhoneArt />
          </div>

          <div className="rule" />
          <Heading>{t.about.touchHeading}</Heading>
          <div className="touch" data-rv>
            <a className="touch-card dark" href={`mailto:${COMPANY.email}`}>
              <Mail size={30} />
              <span className="touch-line" />
              <span className="touch-label">{t.about.touch.email}</span>
              <span className="touch-value">{COMPANY.email}</span>
            </a>
            <a className="touch-card accent" href={`mailto:${COMPANY.email}?subject=${subject}`}>
              <Pencil size={30} />
              <span className="touch-line" />
              <span className="touch-label">{t.about.touch.project}</span>
              <span className="touch-value">{t.about.touch.projectHint}</span>
            </a>
            <div className="touch-card light">
              <Pin size={30} />
              <span className="touch-line" />
              <span className="touch-label">{t.about.touch.location}</span>
              <span className="touch-value">{t.about.touch.locationHint}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Маленькая иллюстрация в карточке «Introduction» (на референсе там рисунок)
function PhoneArt() {
  return (
    <svg className="phone-art" viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="62" cy="104" rx="46" ry="8" fill="#111318" />
      <circle cx="78" cy="56" r="34" fill="var(--accent)" />
      <rect x="30" y="14" width="46" height="88" rx="10" fill="#111318" />
      <rect x="35" y="22" width="36" height="66" rx="5" fill="#f3f3f1" />
      <rect x="40" y="29" width="18" height="5" rx="2.5" fill="#111318" />
      <rect x="40" y="40" width="26" height="14" rx="4" fill="var(--accent)" />
      <rect x="40" y="59" width="26" height="4" rx="2" fill="#c9c9c4" />
      <rect x="40" y="67" width="18" height="4" rx="2" fill="#c9c9c4" />
      <circle cx="53" cy="95" r="2.5" fill="#f3f3f1" />
    </svg>
  )
}
