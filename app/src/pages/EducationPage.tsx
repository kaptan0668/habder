import { motion } from 'framer-motion'
import { BookOpen, Calendar, TreePine, Users, MapPin } from 'lucide-react'
import { education } from '@/data/mockData'
import SectionHeader from '@/components/SectionHeader'

const events = [
  { date: '15 Mayıs 2025', title: 'Ağaç Dikme Etkinliği', location: 'Belgrad Ormanı, İstanbul', icon: <TreePine className="w-4 h-4" /> },
  { date: '22 Mayıs 2025', title: 'Atık Toplama Gönüllülüğü', location: 'Kızılırmak Deltası', icon: <Users className="w-4 h-4" /> },
  { date: '5 Haziran 2025', title: 'Dünya Çevre Günü Paneli', location: 'Online', icon: <BookOpen className="w-4 h-4" /> },
  { date: '12 Haziran 2025', title: 'Doğa Yürüyüşü', location: 'Uludağ Milli Parkı', icon: <MapPin className="w-4 h-4" /> },
]

export default function EducationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <SectionHeader title="Çevre Eğitim Merkezi" subtitle="Eğitim kaynakları, kılavuzlar ve belgeler" />

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{edu.icon}</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">{edu.title}</h3>
              <p className="text-sm text-zinc-400 mb-3">{edu.desc}</p>
              <div className="text-xs text-zinc-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {edu.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Events Timeline */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-8">
            <Calendar className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Yaklaşan Etkinlikler</h3>
          </div>
          <div className="space-y-4">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-green-400/20 flex items-center justify-center text-green-400">
                  {event.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-green-400 font-medium">{event.date}</span>
                  </div>
                  <h4 className="font-medium text-white">{event.title}</h4>
                  <span className="text-xs text-zinc-500">{event.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
