import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Leaf, Sparkles } from 'lucide-react'
import { sanitizeInput } from '@/lib/utils'
import { processUserMessage } from '@/lib/chatbot'

interface Message {
  from: 'bot' | 'user'
  text: string
  timestamp?: string
}

const welcomeMessage = `🌿 Merhaba! Ben HABDER Asistanıyım.

Size şu konularda yardımcı olabilirim:

• 🌡️ Türkiye illerinin hava kalitesi
• 💧 Baraj ve göl doluluk oranları
• 🔥 Orman yangını durumu
• 🌍 Karbon ayak izi hesaplama
• 📰 Çevre haberleri
• 💡 Çevre dostu öneriler

Sormak istediğiniz bir şey var mı?`

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: welcomeMessage }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (open) {
      scrollToBottom()
    }
  }, [messages, open])

  const sendMessage = () => {
    if (!input.trim() || isTyping) return
    const sanitized = sanitizeInput(input.trim())
    
    const newMessages = [...messages, { from: 'user', text: sanitized }]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)
    
    setTimeout(() => {
      const responses = processUserMessage(sanitized)
      const botResponse = responses[responses.length - 1]
      
      setMessages(prev => [...prev, { from: 'bot', text: botResponse.text }])
      setIsTyping(false)
    }, 800 + Math.random() * 500)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20">
              <div className="relative">
                <Leaf className="w-5 h-5 text-green-400" />
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-pulse" />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-sm text-white">HABDER Asistan</span>
                <p className="text-xs text-green-400/70">Yapay Zeka Destekli</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-3" role="log" aria-label="Sohbet mesajları">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.from === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm p-3 rounded-xl whitespace-pre-wrap ${
                    msg.from === 'user'
                      ? 'bg-green-400/20 text-green-100 ml-8'
                      : 'bg-white/5 text-zinc-300 mr-8'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/5 text-zinc-500 mr-8 p-3 rounded-xl text-sm flex items-center gap-2"
                >
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                  <span className="text-xs">Yazıyor...</span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Sorunuzu yazın..."
                disabled={isTyping}
                className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-green-400/50 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !input.trim()}
                className="p-2 bg-green-400/20 text-green-400 rounded-xl hover:bg-green-400/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
        aria-label={open ? 'Sohbet penceresini kapat' : 'Sohbet penceresini aç'}
        className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-400/30 flex items-center justify-center text-black hover:shadow-green-400/50 transition-all"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}
