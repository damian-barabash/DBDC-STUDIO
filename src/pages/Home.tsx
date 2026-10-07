import { useEffect } from 'react'
import { useT } from '../i18n'
import { useReveal } from '../lib/reveal'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Approach } from '../components/Approach'
import { Products } from '../components/Products'
import { Contact } from '../components/Contact'

export function Home() {
  const t = useT()
  useReveal()
  useEffect(() => {
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  return (
    <main>
      <Hero />
      <About />
      <Approach />
      <Products />
      <Contact />
    </main>
  )
}
