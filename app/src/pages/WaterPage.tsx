import { motion } from 'framer-motion'
import { Droplets, Waves, AlertTriangle, Anchor, Navigation } from 'lucide-react'
import { getTurkeyDams, getLakesAndRivers } from '@/lib/api'
import SectionHeader from '@/components/SectionHeader'

export default function WaterPage() {
  const dams = getTurkeyDams()
  const { lakes, rivers } = getLakesAndRivers()

  const getStatusColor = (level: number) => {
    if (level > 70) return 'from-green-400 to-emerald-500'
    if (level > 40) return 'from-yellow-400 to-orange-500'
    return 'from-red-400 to-pink-500'
  }

  const getStatusLabel = (level: number) => {
    if (level > 70) return 'İyi'
    if (level > 40) return 'Orta'
    return 'Kritik'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/assets/water-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <SectionHeader title="Su Kaynakları ve Durum" subtitle="Türkiye barajları, göller ve nehirler - Anlık veriler" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Barajlar */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Droplets className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Baraj Doluluk Oranları</h3>
                <span className="ml-auto text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded">{dams.length} baraj</span>
              </div>
              <div className="space-y-4">
                {dams.map((dam, i) => (
                  <motion.div
                    key={dam.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white">{dam.name}</h4>
                        <span className="text-xs text-zinc-500">{dam.city} • {dam.type}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-cyan-400">{dam.level}%</span>
                        <span className="text-xs text-zinc-500 ml-2">({dam.capacity})</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dam.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: i * 0.05 }}
                        className={`h-full bg-gradient-to-r ${getStatusColor(dam.level)} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Göller ve Nehirler */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Anchor className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Önemli Göller</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {lakes.map((lake, i) => (
                    <motion.div
                      key={lake.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card rounded-xl p-4"
                    >
                      <h4 className="font-medium text-white text-sm mb-1">{lake.name}</h4>
                      <div className="flex justify-between text-xs text-zinc-500">
                        <span>Doluluk: {lake.level}%</span>
                        <span className={lake.type === 'tatlı' ? 'text-green-400' : 'text-orange-400'}>{lake.type}</span>
                      </div>
                      <div className="mt-2 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full" 
                          style={{ width: `${lake.level}%` }} 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Navigation className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-semibold text-white">Nehirler</h3>
                </div>
                <div className="space-y-3">
                  {rivers.map((river, i) => (
                    <motion.div
                      key={river.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card rounded-xl p-3 flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-medium text-white text-sm">{river.name}</h4>
                        <span className="text-xs text-zinc-500">Uzunluk: {river.length}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-emerald-400">{river.flow}</span>
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded ${
                          river.status === 'normal' ? 'bg-green-400/20 text-green-400' :
                          river.status === 'kritik' ? 'bg-orange-400/20 text-orange-400' :
                          'bg-red-400/20 text-red-400'
                        }`}>
                          {river.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Özet İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                {Math.round(dams.reduce((a, b) => a + b.level, 0) / dams.length)}%
              </div>
              <div className="text-xs text-zinc-500">Ortalama Baraj</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-blue-400 mb-1">{lakes.length}</div>
              <div className="text-xs text-zinc-500">Göl</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-emerald-400 mb-1">{rivers.length}</div>
              <div className="text-xs text-zinc-500">Nehir</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-orange-400 mb-1">
                {dams.filter(d => d.level < 40).length}
              </div>
              <div className="text-xs text-zinc-500">Kritik Baraj</div>
            </motion.div>
          </div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 border-l-4 border-orange-400 bg-orange-400/5"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-2">Su Krizi Uyarısı</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Türkiye genelinde baraj doluluk oranı ortalaması kritik seviyelerde. 
                  İç Anadolu bölgesinde su stresi yüksek. 
                  Su tasarrufu için bireysel önlemler alınmalı: kısa duş, muslukları kapatma, sızıntıları tamir etme.
                  Kaynak: DSİ (2026 verileri)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
