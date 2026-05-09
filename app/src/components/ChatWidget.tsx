import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Leaf } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Merhaba! Ben HABDER Asistanı. Çevre konularında size nasıl yardımcı olabilirim?' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    setTimeout(() => {
      const responses = [
        'Karbon ayak izinizi hesaplamak için günlük aktivitelerinizi paylaşabilirsiniz.',
        'Türkiye\'de en temiz hava Antalya\'da ölçülüyor.',
        'Plastik atıkların geri dönüşümü 400-500 yıl sürebilir.',
        'Bir ağaç yılda ortalama 22 kg CO₂ tutar.',
        'Su tasarrufu için muslukları tam kapatmayı alışkanlık haline getirin.',
      ]
      setMessages(prev => [...prev, { from: 'bot', text: responses[Math.floor(Math.random() * responses.length)] }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-2 bg-green-400/10">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="font-semibold text-sm">HABDER Asistan</span>
              <button onClick={() => setOpen(false)} className="ml-auto text-zinc-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.from === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm p-3 rounded-xl ${
                    msg.from === 'user'
                      ? 'bg-green-400/20 text-green-100 ml-8'
                      : 'bg-white/5 text-zinc-300 mr-8'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
            <div className="p-3 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Sorunuzu yazın..."
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-green-400/50"
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-green-400/20 text-green-400 rounded-xl hover:bg-green-400/30 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-green-400 rounded-full shadow-lg shadow-green-400/20 flex items-center justify-center text-black hover:bg-green-500 transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}
