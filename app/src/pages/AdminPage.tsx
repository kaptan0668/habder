import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, LogIn, Shield, AlertCircle } from 'lucide-react'

export default function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const adminLogin = () => {
    if (username === 'habder' && password === 'Habder2025!') {
      setSuccess(true)
      setError('')
    } else {
      setError('Kullanıcı adı veya şifre hatalı!')
      setSuccess(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-md w-full mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Yönetici Girişi</h2>
            <p className="text-sm text-zinc-500">HABDER Yönetim Paneli</p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Giriş Başarılı!</h3>
              <p className="text-zinc-400 text-sm">Yönetim paneline yönlendiriliyorsunuz...</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && adminLogin()}
                  placeholder="Kullanıcı adı"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400/50 transition-all"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && adminLogin()}
                  placeholder="Şifre"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400/50 transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={adminLogin}
                className="w-full py-4 rounded-2xl bg-green-400 text-black font-semibold hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-400/20"
              >
                <LogIn className="w-4 h-4" /> Giriş Yap
              </motion.button>

              <div className="text-center pt-4">
                <p className="text-xs text-zinc-600">
                  Demo: Kullanıcı: <span className="text-zinc-500">habder</span> | Şifre: <span className="text-zinc-500">Habder2025!</span>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
