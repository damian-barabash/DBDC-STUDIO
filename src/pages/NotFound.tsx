import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n'

export function NotFound() {
  const { t, href } = useLang()
  useEffect(() => {
    document.title = `404 — ${t.top.name}`
  }, [t])
  return (
    <main className="wrap notfound">
      <span className="pill accent">404</span>
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.text}</p>
      <Link className="btn" to={href('/')}>{t.actions.home}</Link>
    </main>
  )
}
