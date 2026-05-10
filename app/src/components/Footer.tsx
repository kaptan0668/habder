import { Link } from 'react-router-dom'
import { Leaf, Github, Twitter, Mail, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-zinc-900/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="text-lg font-bold text-gradient-green">HABDER</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Küresel çevre verilerini gerçek zamanlı izleyen premium çevre veri portalı. 
              Geleceğimiz için bilinçli adımlar.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Site Haritası</h4>
            <div className="space-y-2">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Dünya Verileri', path: '/world' },
                { name: 'Hava Kalitesi', path: '/air' },
                { name: 'Su Kaynakları', path: '/water' },
                { name: 'Ormanlar', path: '/forest' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-zinc-500 hover:text-green-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kaynaklar</h4>
            <div className="space-y-2">
              {[
                { name: 'Eğitim', path: '/education' },
                { name: 'Çocuk Köşesi', path: '/kids' },
                { name: 'Çizgi Filmler', path: '/cartoon' },
                { name: 'Haberler', path: '/news' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-zinc-500 hover:text-green-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <a href="mailto:info@habder.org" className="flex items-center gap-2 text-zinc-500 hover:text-green-400 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                info@habder.org
              </a>
              <div className="flex items-center gap-3 pt-2">
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-green-400 hover:bg-white/10 transition-all">
                  <Twitter className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#" className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-green-400 hover:bg-white/10 transition-all">
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://habder.org" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-green-400 hover:bg-white/10 transition-all" aria-label="HABDER web sitesi">
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-zinc-600 text-sm">
            &copy; 2025 HABDER Çevre Veri Portalı. Tüm hakları saklıdır. |{' '}
            <a href="https://habder.org" target="_blank" rel="noopener noreferrer" className="text-green-400/60 hover:text-green-400 transition-colors">habder.org</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
