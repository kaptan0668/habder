import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import ErrorBoundary from './components/ErrorBoundary'
import PageLayout from './components/PageLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const WorldPage = lazy(() => import('./pages/WorldPage'))
const AirPage = lazy(() => import('./pages/AirPage'))
const WaterPage = lazy(() => import('./pages/WaterPage'))
const ForestPage = lazy(() => import('./pages/ForestPage'))
const IcePage = lazy(() => import('./pages/IcePage'))
const SoilPage = lazy(() => import('./pages/SoilPage'))
const EducationPage = lazy(() => import('./pages/EducationPage'))
const KidsPage = lazy(() => import('./pages/KidsPage'))
const CartoonPage = lazy(() => import('./pages/CartoonPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin" />
    </div>
  )
}

function App() {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#050505] text-[#fafafa]">
        <Toaster 
          position="top-right"
          richColors
          pauseWhenPageIsHidden
        />
        <Navbar />
        <main className="pt-16">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
                <Route path="/world" element={<PageLayout><WorldPage /></PageLayout>} />
                <Route path="/air" element={<PageLayout><AirPage /></PageLayout>} />
                <Route path="/water" element={<PageLayout><WaterPage /></PageLayout>} />
                <Route path="/forest" element={<PageLayout><ForestPage /></PageLayout>} />
                <Route path="/ice" element={<PageLayout><IcePage /></PageLayout>} />
                <Route path="/soil" element={<PageLayout><SoilPage /></PageLayout>} />
                <Route path="/education" element={<PageLayout><EducationPage /></PageLayout>} />
                <Route path="/kids" element={<PageLayout><KidsPage /></PageLayout>} />
                <Route path="/cartoon" element={<PageLayout><CartoonPage /></PageLayout>} />
                <Route path="/news" element={<PageLayout><NewsPage /></PageLayout>} />
                <Route path="/admin" element={<PageLayout><AdminPage /></PageLayout>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </ErrorBoundary>
  )
}

export default App