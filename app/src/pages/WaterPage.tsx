import { motion } from 'framer-motion'
import { Droplets, Waves, AlertTriangle } from 'lucide-react'
import { worldWater, turkeyDams } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import SectionHeader from '@/components/SectionHeader'

export default function WaterPage() {
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
          <SectionHeader title="Su Kaynakları ve Durum" subtitle="Deniz sıcaklıkları ve baraj doluluk oranları" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Waves className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Deniz Sıcaklıkları</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {worldWater.map((w, i) => (
                  <DataCard
                    key={w.label}
                    label={w.label}
                    value={w.value}
                    detail={w.detail}
                    color="#3b82f6"
                    index={i}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Droplets className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Baraj Doluluk Oranları</h3>
              </div>
              <div className="space-y-4">
                {turkeyDams.map((dam, i) => (
                  <motion.div
                    key={dam.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white">{dam.name}</h4>
                        <span className="text-xs text-zinc-500">Kapasite: {dam.capacity}</span>
                      </div>
                      <span className="text-2xl font-bold text-cyan-400">{dam.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dam.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                  Akdeniz su sıcaklığı 28°C'yi aştı. Copernicus verilerine göre mercan resifleri ciddi risk altında. 
                  Deniz seviyesi yükselişi kıyı şehirleri için tehdit oluşturuyor. Acil önlem alınması gerekiyor.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
