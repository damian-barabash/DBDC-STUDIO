import { useT } from '../i18n'
import { PRODUCTS } from '../data/products'
import { Heading, Strip } from './Strip'
import { ArrowUpRight } from './Icons'

export function Products() {
  const t = useT()
  const p = t.products
  return (
    <section className="frame wrap" id="products">
      <Strip active="products" />
      <div className="products-head">
        <Heading as="h2">{p.heading}</Heading>
        <p className="col-text">{p.lead}</p>
      </div>

      <div className="products">
        {PRODUCTS.map((item, i) => {
          const c = p.items[item.id]
          return (
            <article className={`product ${item.tone}`} key={item.id} data-rv>
              <a className="product-media" href={item.url} target="_blank" rel="noopener" tabIndex={-1} aria-label={`${item.name} — ${item.domain}`}>
                <span className="shot-desktop">
                  <span className="shot-bar"><i /><i /><i /><b>{item.domain}</b></span>
                  <img src={item.desktop} alt={`${item.name} — ${c.tagline}: ${p.shotAlt} ${item.domain}`} loading="lazy" decoding="async" width={1600} height={1000} />
                </span>
                <span className="shot-mobile">
                  <img src={item.mobile} alt={`${item.name} — ${p.mobileAlt}`} loading="lazy" decoding="async" width={390} height={844} />
                </span>
              </a>

              <div className="product-body">
                <div className="product-top">
                  <span className="pill">{c.category}</span>
                  <span className="product-n">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="product-name">
                  <img src={item.logo} alt={`${item.name} logo`} width={56} height={56} loading="lazy" decoding="async" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{c.tagline}</p>
                  </div>
                </div>
                <p className="product-text">{c.text}</p>
                <ul className="pills">
                  {c.features.map((f) => (
                    <li className="pill" key={f}>{f}</li>
                  ))}
                </ul>
                <dl className="facts">
                  <div><dt>{p.platforms}</dt><dd>{c.platforms}</dd></div>
                  <div><dt>{p.languages}</dt><dd>{c.languages}</dd></div>
                  <div><dt>{p.pricing}</dt><dd>{c.pricing}</dd></div>
                </dl>
                <a className="btn" href={item.url} target="_blank" rel="noopener">
                  {p.visit} {item.domain}
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
