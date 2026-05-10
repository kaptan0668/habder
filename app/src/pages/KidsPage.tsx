import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Trophy, RotateCcw, ExternalLink } from 'lucide-react'
import { kidsActivities, gameItems, gameBins } from '@/data/mockData'
import SectionHeader from '@/components/SectionHeader'

function RecyclingGame() {
  const [score, setScore] = useState(0)
  const [currentItem, setCurrentItem] = useState(gameItems[0])
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const randomItem = useCallback(() => {
    setCurrentItem(gameItems[Math.floor(Math.random() * gameItems.length)])
  }, [])

  const recycle = (type: string) => {
    if (currentItem.type === type) {
      setScore((s) => {
        const newScore = s + 10
        if (newScore >= 50) {
          setShowConfetti(true)
          setTimeout(() => {
            setShowConfetti(false)
            return 0
          }, 3000)
          return 0
        }
        return newScore
      })
      setFeedback('correct')
      setTimeout(() => {
        setFeedback(null)
        randomItem()
      }, 800)
    } else {
      setScore((s) => Math.max(0, s - 5))
      setFeedback('wrong')
      setTimeout(() => {
        setFeedback(null)
        randomItem()
      }, 800)
    }
  }

  const celebrate = () => {
    const chars = ['✨', '🎉', '🌟', '⭐', '💚', '🌿', '🦋', '🌸']
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
      size: 10 + Math.random() * 35,
    }))
  }

  const [confetti] = useState(celebrate())

  return (
    <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute animate-confetti"
              style={{
                left: `${c.left}%`,
                top: '-20px',
                fontSize: `${c.size}px`,
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.duration}s`,
              }}
            >
              {c.char}
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-400" />
        <div className="text-2xl font-bold text-yellow-400">⭐ Skor: {score}</div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="text-6xl mb-2 py-6"
        >
          {currentItem.emoji}
        </motion.div>
      </AnimatePresence>
      <p className="text-lg text-white mb-6">{currentItem.name}</p>

      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`text-lg font-bold mb-4 ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}
        >
          {feedback === 'correct' ? '✅ Doğru! +10 puan' : `❌ Yanlış! -5 puan`}
        </motion.div>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        {gameBins.map((bin) => (
          <motion.button
            key={bin.type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => recycle(bin.type)}
            className="px-5 py-3 rounded-2xl font-semibold text-sm transition-all border border-white/10 hover:border-white/20"
            style={{ backgroundColor: `${bin.color}20`, color: bin.color }}
          >
            <span className="mr-1">{bin.icon}</span> {bin.name}
          </motion.button>
        ))}
      </div>

      <p className="text-sm text-zinc-500 mt-6">🌟 50 puanda ÇEVRE KAHRAMANI!</p>

      <button
        onClick={() => { setScore(0); randomItem(); }}
        className="mt-4 text-zinc-500 hover:text-white text-sm flex items-center gap-1 mx-auto transition-colors"
      >
        <RotateCcw className="w-3 h-3" /> Yeniden Başla
      </button>
    </div>
  )
}

export default function KidsPage() {
  const [modalContent, setModalContent] = useState<{ title: string; detail: string } | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Küçük Kaşifler" subtitle="Çevre bilincini artırmaya yönelik eğlenceli etkinlikler" />

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kidsActivities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 cursor-pointer group"
              onClick={() => {
                if (activity.action === 'boyama') {
                  window.open('https://www.wwf.org.tr/cocuk/boyama/', '_blank', 'noopener,noreferrer')
                } else {
                  setModalContent({ title: activity.title, detail: activity.detail || '' })
                }
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{activity.icon}</div>
              <h3 className="font-semibold text-white mb-2">{activity.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">{activity.desc}</p>
              <button className="text-sm px-4 py-2 rounded-xl bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors flex items-center gap-1">
                {activity.action === 'boyama' && <ExternalLink className="w-3 h-3" />}
                {activity.btn}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Game */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Gamepad2 className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Geri Dönüşüm Oyunu</h3>
          </div>
          <RecyclingGame />
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setModalContent(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-bold text-white mb-4">{modalContent.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{modalContent.detail}</p>
                <button
                  onClick={() => setModalContent(null)}
                  className="mt-6 w-full py-3 rounded-xl bg-green-400/20 text-green-400 hover:bg-green-400/30 transition-colors"
                >
                  Kapat
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
