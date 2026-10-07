import { useT } from '../i18n'
import { ArrowDown, BigArrow } from './Icons'

// Буквы «STUDIO» сыплются по диагонали, как PORTFOLIO на референсе: x/y — центр в % квадрата
const LETTERS = [
  { ch: 'S', x: 82, y: 14, r: 14 },
  { ch: 'T', x: 62, y: 21, r: -24 },
  { ch: 'U', x: 84, y: 37, r: 20 },
  { ch: 'D', x: 62, y: 44, r: -14 },
  { ch: 'I', x: 85, y: 60, r: 28 },
  { ch: 'O', x: 65, y: 67, r: 0 },
]

export function Hero() {
  const t = useT()
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">{t.hero.title}</h1>
          <BigArrow />
          <ul className="hashrows">
            {t.hero.tags.map((row, i) => (
              <li key={i}>
                {row.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="poster" role="img" aria-label="DBDC Studio">
          <span className="poster-caption">{t.hero.year}</span>
          {LETTERS.map((l, i) => (
            <span
              key={l.ch}
              className="poster-letter"
              style={{ left: `${l.x}%`, top: `${l.y}%`, ['--r' as string]: `${l.r}deg`, ['--i' as string]: i }}
            >
              {l.ch}
            </span>
          ))}
          <span className="poster-bar" />
          <span className="poster-word">DBDC</span>
        </div>
      </div>

      <a className="seemore" href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>
        {t.actions.seeMore}
        <span className="round sm"><ArrowDown size={14} /></span>
      </a>
    </section>
  )
}
