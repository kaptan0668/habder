import { motion } from 'framer-motion'
import { Globe, Flag } from 'lucide-react'
import { worldData, turkeyData } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import SectionHeader from '@/components/SectionHeader'

export default function WorldPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Küresel ve Yerel Veriler" subtitle="Dünya genelindeki ölçümler ve Türkiye'ye özgü veriler" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Dünya Verileri</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {worldData.map((d, i) => (
                <DataCard
                  key={d.label}
                  label={d.label}
                  value={d.value}
                  color={d.color}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Flag className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-white">Türkiye Verileri</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {turkeyData.map((d, i) => (
                <DataCard
                  key={d.label}
                  label={d.label}
                  value={d.value}
                  color={d.color}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Amazon Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass-card rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/assets/fire-warning.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-orange-400 font-medium mb-2 block">Öne Çıkan</span>
              <h3 className="text-2xl font-bold text-white mb-2">Amazon Yangınları Azaldı</h3>
              <p className="text-zinc-300 max-w-lg">Brezilya'da koruma önlemleriyle 2025 yılında yangınlar %45 oranında azaldı. Bu, orman ekosisteminin iyileşmesi için umut verici bir gelişme.</p>
            </div>
            <div className="text-5xl font-bold text-orange-400">-45%</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
