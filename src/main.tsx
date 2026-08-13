import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router'
import LandingPage from './pages/LandingPage.tsx'
import PixelClock from './widgets/PixelClock.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/notion-widgets">
      <Routes>
        <Route path="/" element={<LandingPage />} />

      <Route
        path="/widgets/clock"
        element={<PixelClock />}
      />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
