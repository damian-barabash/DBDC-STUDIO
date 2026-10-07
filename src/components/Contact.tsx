import { useState } from 'react'
import { useT } from '../i18n'
import { COMPANY } from '../data/company'
import { Strip } from './Strip'
import { ArrowUpRight, Check, Copy, Mail, Pin } from './Icons'

export function Contact() {
  const t = useT()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${COMPANY.email}`
    }
  }

  return (
    <section className="frame wrap" id="contact">
      <Strip active="contact" />
      <div className="cta" data-rv>
        <div className="cta-main">
          <h2>{t.contact.heading}</h2>
          <p>{t.contact.text}</p>
        </div>
        <div className="cta-cards">
          <div className="cta-card dark">
            <span className="cta-label"><Mail /> {t.contact.emailLabel}</span>
            <a className="cta-email" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email} <ArrowUpRight size={20} />
            </a>
            <button type="button" className="chip" onClick={copy} aria-live="polite">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? t.contact.copied : t.contact.copy}
            </button>
          </div>
          <div className="cta-card light">
            <span className="cta-label"><Pin /> {t.contact.companyLabel}</span>
            <address>
              <strong>{COMPANY.legalName}</strong>
              {COMPANY.address}, {COMPANY.city}
              <span>NIP: {COMPANY.nip} · REGON: {COMPANY.regon}</span>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
