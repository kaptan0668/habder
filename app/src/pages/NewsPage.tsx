import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Newspaper, X, Clock, RefreshCw, ExternalLink, Leaf } from 'lucide-react'
import { fetchEnvironmentalNews, NewsItem } from '@/lib/api'
import SectionHeader from '@/components/SectionHeader'

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    setLoading(true)
    try {
      const data = await fetchEnvironmentalNews()
      setNews(data)
      setLastUpdate(new Date())
    } catch (error) {
      console.error('News load error:', error)
    }
    setLoading(false)
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      iklim: '🌡️',
      yangın: '🔥',
      su: '💧',
      buzulu: '🧊',
      orman: '🌲',
      hava: '💨',
      deniz: '🌊',
      atık: '♻️',
      toprak: '🌾',
      canlı: '🦋',
      enerji: '⚡',
      tarım: '🌾',
    }
    return icons[category] || '📰'
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      iklim: 'bg-red-500/20 text-red-400',
      yangın: 'bg-orange-500/20 text-orange-400',
      su: 'bg-blue-500/20 text-blue-400',
      buzul: 'bg-cyan-500/20 text-cyan-400',
      orman: 'bg-green-500/20 text-green-400',
      hava: 'bg-purple-500/20 text-purple-400',
      deniz: 'bg-teal-500/20 text-teal-400',
      atık: 'bg-yellow-500/20 text-yellow-400',
      toprak: 'bg-amber-500/20 text-amber-400',
      canlı: 'bg-emerald-500/20 text-emerald-400',
      enerji: 'bg-orange-500/20 text-orange-400',
      tarım: 'bg-lime-500/20 text-lime-400',
    }
    return colors[category] || 'bg-gray-500/20 text-gray-400'
  }

  const formatTime = (time: string) => {
    return time
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <SectionHeader title="Çevre Haberleri" subtitle="Güncel çevre haberleri ve gelişmeler - Anlık güncellenir" />
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Leaf className="w-4 h-4 text-green-400" />
              <span>Son güncelleme: {lastUpdate.toLocaleTimeString('tr-TR')}</span>
            </div>
            <button
              onClick={loadNews}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-400/10 text-green-400 hover:bg-green-400/20 transition-colors text-sm disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Yenile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                <div className="h-4 bg-zinc-800 rounded w-1/3 mb-4" />
                <div className="h-6 bg-zinc-800 rounded w-full mb-2" />
                <div className="h-4 bg-zinc-800 rounded w-2/3" />
              </div>
            ))
          ) : (
            news.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedNews(item)}
                className="glass-card rounded-2xl p-6 cursor-pointer group hover:border-green-400/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-zinc-500">{item.source}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getCategoryColor(item.category)}`}>
                    {getCategoryIcon(item.category)} {item.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                  {item.detail}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-zinc-600">
                    <Clock className="w-3 h-3" /> {item.timestamp}
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-green-400 transition-colors" />
                </div>
              </motion.div>
            ))
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🌍</div>
            <h4 className="font-semibold text-white mb-1">Dünya Verileri</h4>
            <p className="text-xs text-zinc-500">NASA, Copernicus</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🇹🇷</div>
            <h4 className="font-semibold text-white mb-1">Türkiye Verileri</h4>
            <p className="text-xs text-zinc-500">MGM, DSİ, Tarım Bakanlığı</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <h4 className="font-semibold text-white mb-1">Anlık Güncelleme</h4>
            <p className="text-xs text-zinc-500">Her 5 dakikada bir</p>
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-zinc-500">{selectedNews.source}</span>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-medium ${getCategoryColor(selectedNews.category)}`}>
                  {getCategoryIcon(selectedNews.category)} {selectedNews.category}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-4">{selectedNews.title}</h2>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">{selectedNews.detail}</p>
              
              <div className="flex items-center gap-2 text-xs text-zinc-600 pt-4 border-t border-white/10">
                <Clock className="w-3 h-3" />
                {selectedNews.timestamp}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
