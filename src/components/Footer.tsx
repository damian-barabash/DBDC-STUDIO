import { Link } from 'react-router-dom'
import { useLang } from '../i18n'
import { COMPANY } from '../data/company'
import { PRODUCTS } from '../data/products'
import { Logo } from './Logo'

export function Footer() {
  const { t, href } = useLang()
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div className="footer-brand">
          <Link to={href('/')} className="brand">
            <span className="brand-mark"><Logo size={22} /></span>
            <span className="brand-name">{COMPANY.brand}</span>
          </Link>
          <p>{t.top.tagline}</p>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>

        <div className="footer-col">
          <h4>{t.footer.studio}</h4>
          <Link to={href('/#about')}>{t.tabs.about}</Link>
          <Link to={href('/#approach')}>{t.tabs.approach}</Link>
          <Link to={href('/#products')}>{t.tabs.products}</Link>
          <Link to={href('/#contact')}>{t.tabs.contact}</Link>
        </div>

        <div className="footer-col">
          <h4>{t.footer.products}</h4>
          {PRODUCTS.map((p) => (
            <a key={p.id} href={p.url} target="_blank" rel="noopener">{p.name}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4>{t.footer.company}</h4>
          <span>{COMPANY.legalName}</span>
          <span>{COMPANY.address}</span>
          <span>{COMPANY.city}</span>
          <span>NIP: {COMPANY.nip}</span>
          <span>REGON: {COMPANY.regon}</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY.brand}. {t.footer.rights}</span>
        <Link to={href('/privacy/')}>{t.actions.privacy}</Link>
      </div>
    </footer>
  )
}
