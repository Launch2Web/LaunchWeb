import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Navigate to="/#services" replace />} />
          <Route path="service/:slug" element={<Home />} />
          <Route path="works" element={<Navigate to="/#work" replace />} />
          <Route path="about" element={<Navigate to="/#about" replace />} />
          <Route path="contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
