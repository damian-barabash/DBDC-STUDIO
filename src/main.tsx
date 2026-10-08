import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/quicksand'
import '@fontsource-variable/nunito'
import '@fontsource/unbounded/900.css'
import './styles/main.css'
import { App } from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// В сборке страница уже отрисована на этапе пререндера — подхватываем готовую разметку
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
