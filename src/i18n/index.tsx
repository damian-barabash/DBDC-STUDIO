import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en, type Dict } from './en'
import { pl } from './pl'
import { ru } from './ru'

export type Lang = 'en' | 'pl' | 'ru'
export const LANGS: Lang[] = ['en', 'pl', 'ru']
const DICTS: Record<Lang, Dict> = { en, pl, ru }
const KEY = 'dbdc.lang'

function detect(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'en' || saved === 'pl' || saved === 'ru') return saved
  } catch {
    /* хранилище недоступно — берём язык браузера */
  }
  const nav = (navigator.language || 'en').toLowerCase()
  if (nav.startsWith('pl')) return 'pl'
  if (nav.startsWith('ru') || nav.startsWith('uk') || nav.startsWith('be')) return 'ru'
  return 'en'
}

const Ctx = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({ lang: 'en', t: en, setLang: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, set] = useState<Lang>(detect)

  const setLang = useCallback((l: Lang) => {
    set(l)
    try {
      localStorage.setItem(KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, t: DICTS[lang], setLang }), [lang, setLang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
export const useT = () => useContext(Ctx).t
