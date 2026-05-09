import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Newspaper, X, Clock } from 'lucide-react'
import { newsList } from '@/data/mockData'
import SectionHeader from '@/components/SectionHeader'

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<typeof newsList[0] | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Çevre Haberleri" subtitle="Güncel çevre haberleri ve gelişmeler" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsList.map((news, i) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedNews(news)}
              className="glass-card rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse-dot" />
                <span className="text-xs text-zinc-500">{news.source}</span>
              </div>
              <h3 className="font-semibold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                {news.title}
              </h3>
              <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                {news.detail}
              </p>
              <div className="flex items-center gap-1 mt-4 text-xs text-zinc-600">
                <Clock className="w-3 h-3" /> Son güncelleme: Bugün
              </div>
            </motion.div>
          ))}
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
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-zinc-500">{selectedNews.source}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-4">{selectedNews.title}</h2>
              <p className="text-zinc-300 text-sm leading-relaxed">{selectedNews.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
