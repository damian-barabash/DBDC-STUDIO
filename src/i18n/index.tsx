import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { en, type Dict } from './en'
import { pl } from './pl'
import { ru } from './ru'

export type Lang = 'en' | 'pl' | 'ru'
export const LANGS: Lang[] = ['en', 'pl', 'ru']
export const DICTS: Record<Lang, Dict> = { en, pl, ru }
export const LANG_KEY = 'dbdc.lang'

/** Язык живёт в адресе: `/` — английский, `/pl/…`, `/ru/…`. Так каждую версию видит поисковик. */
export function splitPath(pathname: string): { lang: Lang; rest: string } {
  const m = pathname.match(/^\/(pl|ru)(\/.*)?$/)
  if (m) return { lang: m[1] as Lang, rest: m[2] || '/' }
  return { lang: 'en', rest: pathname || '/' }
}

export const langBase = (lang: Lang) => (lang === 'en' ? '' : `/${lang}`)

/** Адрес той же страницы на другом языке */
export function pathFor(lang: Lang, rest: string) {
  return `${langBase(lang)}${rest.startsWith('/') ? rest : `/${rest}`}`
}

type Value = { lang: Lang; t: Dict; rest: string; href: (path: string) => string }
const Ctx = createContext<Value>({ lang: 'en', t: en, rest: '/', href: (p) => p })

export function LangProvider({ lang, rest, children }: { lang: Lang; rest: string; children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<Value>(() => ({ lang, t: DICTS[lang], rest, href: (path) => pathFor(lang, path) }), [lang, rest])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
export const useT = () => useContext(Ctx).t
