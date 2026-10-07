import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { TopBar } from './components/TopBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'

// Переход между страницами — наверх; переход к якорю — прокрутка к секции
function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return null
}

export function App() {
  return (
    <>
      <ScrollManager />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacy/" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
