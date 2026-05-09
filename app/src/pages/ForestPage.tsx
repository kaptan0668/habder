import { motion } from 'framer-motion'
import { TreePine, Flame } from 'lucide-react'
import { worldForest, turkeyForest } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import SectionHeader from '@/components/SectionHeader'

export default function ForestPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="relative">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(/assets/forest-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <SectionHeader title="Orman ve Ekosistem Verileri" subtitle="Orman kapsamı, yangın riskleri ve koruma çabaları" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TreePine className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Dünya Orman</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {worldForest.map((f, i) => (
                  <DataCard
                    key={f.label}
                    label={f.label}
                    value={f.value}
                    warning={f.warning}
                    color={f.warning ? '#ef4444' : '#22c55e'}
                    index={i}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <TreePine className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Türkiye Orman</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {turkeyForest.map((f, i) => (
                  <DataCard
                    key={f.label}
                    label={f.label}
                    value={f.value}
                    warning={f.warning}
                    color={f.warning ? '#ef4444' : '#22c55e'}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Fire Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Türkiye Yangın Risk Haritası</h3>
            </div>
            <div className="relative flex items-center justify-center">
              <svg viewBox="0 0 400 200" className="w-full max-w-lg">
                {/* Turkey simplified shape */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  d="M60,80 Q80,60 120,65 Q150,50 180,70 Q220,55 260,75 Q290,60 320,80 Q340,100 330,130 Q300,150 260,140 Q220,155 180,145 Q140,160 100,140 Q70,150 50,120 Q40,100 60,80 Z"
                  fill="rgba(34,197,94,0.1)"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
                {/* Fire risk dots */}
                {[
                  { x: 120, y: 100, label: 'Antalya' },
                  { x: 200, y: 90, label: 'Muğla' },
                  { x: 280, y: 95, label: 'Mersin' },
                  { x: 160, y: 120, label: 'Aydın' },
                  { x: 250, y: 110, label: 'Adana' },
                ].map((dot, i) => (
                  <g key={dot.label}>
                    <motion.circle
                      initial={{ r: 0 }}
                      whileInView={{ r: 6 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.2 }}
                      cx={dot.x}
                      cy={dot.y}
                      fill="#ef4444"
                      className="animate-pulse-dot"
                    />
                    <motion.circle
                      initial={{ r: 0, opacity: 0.5 }}
                      whileInView={{ r: 12, opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.2, duration: 2, repeat: Infinity }}
                      cx={dot.x}
                      cy={dot.y}
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="1"
                    />
                    <text x={dot.x} y={dot.y + 20} textAnchor="middle" fill="#a1a1aa" fontSize="8">{dot.label}</text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex items-center gap-6 mt-4 justify-center text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500" /> Güvenli
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500" /> Dikkat
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse-dot" /> Yangın Riski
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
