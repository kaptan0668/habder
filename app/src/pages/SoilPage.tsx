import { motion } from 'framer-motion'
import { Mountain, Sprout } from 'lucide-react'
import { worldSoil, turkeySoil } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import SectionHeader from '@/components/SectionHeader'

export default function SoilPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Toprak ve Sürdürülebilir Tarım" subtitle="Toprak erozyonu, çölleşme ve tarımsal etki verileri" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-semibold text-white">Dünya Toprak</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {worldSoil.map((s, i) => (
                <DataCard
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  warning={s.warning}
                  color={s.warning ? '#ef4444' : '#f59e0b'}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Mountain className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Türkiye Toprak</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {turkeySoil.map((s, i) => (
                <DataCard
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  color="#eab308"
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reforestation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 text-center border border-green-400/20 bg-green-400/5"
        >
          <Sprout className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Ağaçlandırma Seferberliği</h3>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-6 text-sm leading-relaxed">
            Türkiye'de 2024 yılında 352 milyon fidan dikildi. Hedef 2025'te 500 milyon fidan.
            Toprak erozyonunu önlemek ve biyolojik çeşitliliği korumak için her fidan önemli.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
            {[
              { label: '2024 Hedef', value: '352M' },
              { label: '2025 Hedef', value: '500M' },
              { label: 'Toplam Ağaç', value: '352M+' },
              { label: 'Orman Alanı', value: '23.1M ha' },
            ].map((stat) => (
              <div key={stat.label} className="bg-black/40 rounded-xl p-3">
                <div className="text-xl font-bold text-green-400">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
