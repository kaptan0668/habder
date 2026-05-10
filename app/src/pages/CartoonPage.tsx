import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X, Clock, BookOpen, Star } from 'lucide-react'
import { getEducationalCartoonVideos, CartoonVideo } from '@/lib/api'
import SectionHeader from '@/components/SectionHeader'

export default function CartoonPage() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const videos = getEducationalCartoonVideos()

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      orman: 'bg-green-500/20 text-green-400',
      su: 'bg-blue-500/20 text-blue-400',
      atık: 'bg-purple-500/20 text-purple-400',
      canlı: 'bg-yellow-500/20 text-yellow-400',
      enerji: 'bg-orange-500/20 text-orange-400',
      buzul: 'bg-cyan-500/20 text-cyan-400',
      iklim: 'bg-red-500/20 text-red-400',
      bitki: 'bg-emerald-500/20 text-emerald-400',
    }
    return colors[category] || 'bg-gray-500/20 text-gray-400'
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      orman: 'Orman',
      su: 'Su',
      atık: 'Atık',
      canlı: 'Canlılar',
      enerji: 'Enerji',
      buzul: 'Buzul',
      iklim: 'İklim',
      bitki: 'Bitki',
    }
    return labels[category] || category
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader 
          title="Çevre Kahramanları" 
          subtitle="Çocuklar için eğitici çizgi filmler ve animasyonlar - Öğrenirken eğlenin!" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-green-400/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-2xl p-4">
                  {video.thumbnail}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getCategoryColor(video.category)}`}>
                      {getCategoryLabel(video.category)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-400 mb-4">{video.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    {video.ageGroup} yaş
                  </span>
                  <span className="flex items-center gap-1 text-xs text-blue-400">
                    <BookOpen className="w-3 h-3" />
                    Eğitici
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPlayingVideo(video.url)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/20"
                >
                  <Play className="w-4 h-4" /> İzle
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-2xl p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
          <h3 className="text-lg font-semibold text-white mb-2">💡 Ebeveynler İçin</h3>
          <p className="text-sm text-zinc-400">
            Bu videolar çocukların çevre bilincini geliştirmek için tasarlanmıştır. 
            Çocuklarınızla birlikte izleyerek öğrenmeyi daha eğlenceli hale getirebilirsiniz.
            Her video sonrasında çocuğunuza sorular sorarak bilgiyi pekiştirebilirsiniz.
          </p>
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
