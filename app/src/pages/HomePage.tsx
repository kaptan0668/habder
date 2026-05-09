import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Wind, Droplets, Thermometer, Globe, Flame, Waves, TrendingUp, Newspaper } from 'lucide-react'
import { worldData, cityData, damByCity, newsList } from '@/data/mockData'
import DataCard from '@/components/DataCard'
import ChatWidget from '@/components/ChatWidget'

export default function HomePage() {
  const [cityInput, setCityInput] = useState('İstanbul')
  const [selectedCity, setSelectedCity] = useState('İstanbul')
  const [cityStats, setCityStats] = useState(cityData['İstanbul'])
  const [damInfo, setDamInfo] = useState<{ name: string; level: number } | null>(damByCity['İstanbul'])

  const searchCity = () => {
    const city = cityInput.trim()
    if (cityData[city]) {
      setSelectedCity(city)
      setCityStats(cityData[city])
      setDamInfo(damByCity[city] || null)
    } else {
      const s = city.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
      setSelectedCity(city)
      setCityStats({
        aqi: 35 + (s % 100),
        temp: 18 + (s % 15),
        wind: 5 + (s % 30),
        ozone: 280 + (s % 40),
        fire: s % 6,
        sea: 18 + (s % 10),
        co2: 426,
        ice: 400 + (s % 150),
      })
      setDamInfo(null)
    }
  }

  useEffect(() => {
    searchCity()
  }, [])

  const dashboardStats = [
    { icon: <Globe className="w-6 h-6" />, label: selectedCity, value: `AQI: ${cityStats.aqi}` },
    { icon: <Thermometer className="w-6 h-6" />, label: 'Sıcaklık', value: `${cityStats.temp}°C` },
    { icon: <Wind className="w-6 h-6" />, label: 'Rüzgar', value: `${cityStats.wind} km/h` },
    { icon: <Droplets className="w-6 h-6" />, label: 'Ozon', value: `${cityStats.ozone} DU` },
    { icon: <Flame className="w-6 h-6" />, label: 'Yangın', value: `${cityStats.fire}` },
    { icon: <Waves className="w-6 h-6" />, label: 'Deniz', value: `${cityStats.sea}°C` },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'CO₂', value: `${cityStats.co2} ppm` },
    { icon: <Globe className="w-6 h-6" />, label: 'Buzul', value: `${cityStats.ice} Gt` },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-green-950/30" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/assets/forest-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-green-400 font-medium mb-4 block">
              Küresel Çevre Göstergeleri
            </span>
            <h1 className="text-4xl lg:text-6xl font-extralight text-white mb-4 leading-tight">
              Dünyamızı <span className="text-gradient-green font-normal">İzliyoruz</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl mb-8 leading-relaxed">
              Gerçek zamanlı çevre verileri, iklim göstergeleri ve doğal kaynak izleme platformu.
              Geleceğimizi korumak için bilinçli adımlar atıyoruz.
            </p>
          </motion.div>

          {/* Global Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {worldData.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="text-xs uppercase tracking-widest text-green-400 font-medium mb-2">{stat.label}</div>
                <div className="text-3xl lg:text-4xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              </motion.div>
            ))}
          </div>

          {/* City Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-3 max-w-xl"
          >
            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchCity()}
              placeholder="İstanbul, Ankara, İzmir..."
              className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400/50 transition-all"
            />
            <button
              onClick={searchCity}
              className="bg-green-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-green-500 transition-all flex items-center gap-2 shadow-lg shadow-green-400/20"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Sorgula</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* City Dashboard */}
      <section className="py-16 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-1 h-8 bg-green-400 rounded-full" />
            <h2 className="text-2xl font-bold text-white">{selectedCity} Çevre Verileri</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {dashboardStats.map((stat, i) => (
              <DataCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                index={i}
              />
            ))}
          </div>

          {damInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-green-400 font-medium">Baraj Doluluk</span>
                <h3 className="text-xl font-bold text-white mt-1">{damInfo.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-green-400">{damInfo.level}%</div>
                <div className="w-48 h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${damInfo.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* News Ticker */}
      <section className="py-12 bg-black/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <Newspaper className="w-5 h-5 text-orange-400" />
            <span className="text-xs uppercase tracking-widest text-orange-400 font-medium">Son Dakika Haberleri</span>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-6" style={{ width: 'max-content' }}>
            {[...newsList, ...newsList].map((news, i) => (
              <motion.div
                key={`${news.id}-${i}`}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-5 w-80 flex-shrink-0 cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse-dot" />
                  <span className="text-xs text-zinc-500">{news.source}</span>
                </div>
                <h3 className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ChatWidget />
    </motion.div>
  )
}
