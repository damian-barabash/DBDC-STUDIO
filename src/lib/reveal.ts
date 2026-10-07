import { useEffect } from 'react'

/** Плавное появление блоков с атрибутом data-rv при входе в кадр */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>('[data-rv]:not(.in)')]
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    document.documentElement.classList.add('rv-on')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
