import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import HomePage from './pages/HomePage'
import WorldPage from './pages/WorldPage'
import AirPage from './pages/AirPage'
import WaterPage from './pages/WaterPage'
import ForestPage from './pages/ForestPage'
import IcePage from './pages/IcePage'
import SoilPage from './pages/SoilPage'
import EducationPage from './pages/EducationPage'
import KidsPage from './pages/KidsPage'
import CartoonPage from './pages/CartoonPage'
import NewsPage from './pages/NewsPage'
import AdminPage from './pages/AdminPage'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa]">
      <Navbar />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/world" element={<WorldPage />} />
            <Route path="/air" element={<AirPage />} />
            <Route path="/water" element={<WaterPage />} />
            <Route path="/forest" element={<ForestPage />} />
            <Route path="/ice" element={<IcePage />} />
            <Route path="/soil" element={<SoilPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/cartoon" element={<CartoonPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
