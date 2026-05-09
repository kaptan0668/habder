import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { episodes } from '@/data/mockData'
import SectionHeader from '@/components/SectionHeader'

export default function CartoonPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Çevre Kahramanları" subtitle="Eğitici çizgi filmler ve belgeseller" />

        <div className="space-y-6">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-full bg-orange-400/20 flex items-center justify-center text-orange-400 font-bold text-xl flex-shrink-0 group-hover:bg-orange-400/30 transition-colors">
                {ep.num}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                  {ep.title}
                </h3>
                <p className="text-sm text-zinc-400">{ep.desc}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlayingVideo(ep.url)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
              >
                <Play className="w-4 h-4" /> İzle
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setPlayingVideo(null)}
          >
            <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-green-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video rounded-2xl overflow-hidden bg-black border border-white/10">
                <iframe
                  src={playingVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
