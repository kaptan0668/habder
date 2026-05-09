import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Snowflake, Clock, ArrowUp, ArrowDown } from 'lucide-react'
import { worldIce, turkeyClimate } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import SectionHeader from '@/components/SectionHeader'

function CountdownTimer() {
  const targetDate = new Date('2040-01-01').getTime()
  const [timeLeft, setTimeLeft] = useState({ years: 0, days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = targetDate - now
      setTimeLeft({
        years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
        days: Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      })
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-3">
      {[
        { label: 'YIL', value: timeLeft.years },
        { label: 'GÜN', value: timeLeft.days },
        { label: 'SAAT', value: timeLeft.hours },
        { label: 'DK', value: timeLeft.minutes },
      ].map((unit) => (
        <div key={unit.label} className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
          <div className="text-2xl font-bold text-red-400">{unit.value}</div>
          <div className="text-xs text-zinc-500 uppercase">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function IcePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Buzul ve İklim Değişikliği" subtitle="Buzul erimesi ve Türkiye iklim projeksiyonları" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Snowflake className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Küresel Buzul</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {worldIce.map((i, idx) => (
                <DataCard
                  key={i.label}
                  label={i.label}
                  value={i.value}
                  color="#06b6d4"
                  index={idx}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Snowflake className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Türkiye İklim</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {turkeyClimate.map((c, idx) => (
                <DataCard
                  key={c.label}
                  label={c.label}
                  value={c.value}
                  detail={c.trend === 'up' ? 'Artıyor' : 'Azalıyor'}
                  color={c.trend === 'up' ? '#ef4444' : '#22c55e'}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Critical Threshold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 border-l-4 border-red-400 bg-red-400/5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-bold text-white">Kritik Eşik: 2040</h3>
          </div>
          <p className="text-zinc-300 mb-6 text-sm leading-relaxed">
            Bilim insanlarına göre 2040 yılına kadar küresel sıcaklık artışı 1.5°C'yi aşarsa, 
            geri dönüşü olmayan iklim değişikliği süreçleri başlayacak. Bu tarihe kadar geçen süreyi aşağıda görebilirsiniz.
          </p>
          <CountdownTimer />
          <div className="flex items-center gap-4 mt-6 text-sm">
            <div className="flex items-center gap-1 text-red-400">
              <ArrowUp className="w-4 h-4" /> Sıcaklık artıyor
            </div>
            <div className="flex items-center gap-1 text-green-400">
              <ArrowDown className="w-4 h-4" /> Kar yağışı azalıyor
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
