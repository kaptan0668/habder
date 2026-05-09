import { motion } from 'framer-motion'
import { Wind, TrendingUp } from 'lucide-react'
import { worldAir, turkeyAir } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import SectionHeader from '@/components/SectionHeader'

function getAQIColor(aqi: number) {
  if (aqi <= 50) return '#22c55e'
  if (aqi <= 100) return '#eab308'
  if (aqi <= 150) return '#f97316'
  return '#ef4444'
}

function getAQIStatus(aqi: number) {
  if (aqi <= 50) return 'İyi'
  if (aqi <= 100) return 'Orta'
  if (aqi <= 150) return 'Hassas'
  if (aqi <= 200) return 'Sağlıksız'
  return 'Tehlikeli'
}

export default function AirPage() {
  const tempData = [18, 19, 21, 22, 24, 26, 25, 23, 21, 19, 18, 17]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Hava Kalitesi ve İklim Ölçümleri" subtitle="Dünya ve Türkiye şehirlerinin hava kalitesi endeksi" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Wind className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Dünya Hava Kalitesi</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {worldAir.map((a, i) => (
                <DataCard
                  key={a.city}
                  label={a.city}
                  value={`AQI: ${a.aqi}`}
                  detail={getAQIStatus(a.aqi)}
                  color={getAQIColor(a.aqi)}
                  index={i}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Wind className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Türkiye Hava Kalitesi</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {turkeyAir.map((a, i) => (
                <DataCard
                  key={a.city}
                  label={a.city}
                  value={`AQI: ${a.aqi}`}
                  detail={getAQIStatus(a.aqi)}
                  color={getAQIColor(a.aqi)}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mini Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Son 24 Saat Sıcaklık Eğilimi</h3>
          </div>
          <svg viewBox="0 0 600 150" className="w-full h-40">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              d={`M 0 ${150 - tempData[0] * 4} ${tempData.map((t, i) => `L ${i * 50} ${150 - t * 4}`).join(' ')}`}
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              d={`M 0 ${150 - tempData[0] * 4} ${tempData.map((t, i) => `L ${i * 50} ${150 - t * 4}`).join(' ')} L 550 150 L 0 150 Z`}
              fill="url(#chartGradient)"
            />
            {tempData.map((t, i) => (
              <motion.circle
                key={i}
                initial={{ r: 0 }}
                whileInView={{ r: 4 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                cx={i * 50}
                cy={150 - t * 4}
                fill="#4ade80"
              />
            ))}
          </svg>
          <div className="flex justify-between mt-2 text-xs text-zinc-500">
            {['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
