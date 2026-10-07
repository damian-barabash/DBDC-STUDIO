import { useT } from '../i18n'
import { STACK } from '../data/company'
import { Heading, Strip } from './Strip'
import { Check } from './Icons'

export function Approach() {
  const t = useT()
  const a = t.approach
  return (
    <section className="frame wrap" id="approach">
      <Strip active="approach" />
      <div className="cols">
        <div className="col">
          <Heading>{a.processHeading}</Heading>
          <ol className="steps">
            {a.steps.map((s, i) => (
              <li className="step" key={s.n} data-rv>
                <div className="step-top">
                  <span className={i % 2 ? 'pill dark' : 'pill accent'}>{s.n}</span>
                  <span className="dot" />
                </div>
                <span className="step-label">{s.label}</span>
                <span className="step-title">{s.title}</span>
                <span className="timeline"><i /><i /></span>
                <span className="timeline-ends"><span>{s.from}</span><span>{s.to}</span></span>
              </li>
            ))}
          </ol>
        </div>

        <div className="col">
          <Heading>{a.expertiseHeading}</Heading>
          <p className="col-text">{a.expertiseText}</p>
          <div className="rule" />
          <Heading>{a.stackHeading}</Heading>
          <div className="stack-card" data-rv>
            <span className="stack-caption">{a.stackCaption}</span>
            <ul className="stack">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="rule" />
          <Heading>{a.valuesHeading}</Heading>
          <ul className="pills" data-rv>
            {a.values.map((v, i) => (
              <li key={v} className={i === 0 || i === 4 ? 'pill accent' : 'pill'}>{v}</li>
            ))}
          </ul>
        </div>

        <div className="col">
          <Heading>{a.platformsHeading}</Heading>
          <ul className="platforms">
            {a.platforms.map((p) => (
              <li className="platform" key={p.title} data-rv>
                <div className="step-top">
                  <span className="pill light">{p.tag}</span>
                  <span className="tick"><Check size={12} /></span>
                </div>
                <span className="platform-title">{p.title}</span>
                <span className="platform-note">{p.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="manifesto">
        <Heading as="h2">{a.manifestoHeading}</Heading>
        <div className="manifesto-grid">
          {a.manifesto.map((p, i) => (
            <p key={i} data-rv><span className="manifesto-n">{String(i + 1).padStart(2, '0')}</span>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
