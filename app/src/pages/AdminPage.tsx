import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, LogIn, Shield, AlertCircle } from 'lucide-react'
import { simpleHash } from '@/lib/utils'
import { useApp } from '@/context/AppContext'
import { toast } from 'sonner'

const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USER || 'admin'
const ADMIN_PASSWORD_HASH = import.meta.env.VITE_ADMIN_HASH || '7d2a1c3e9f5b8c4d6a2e8f3b7c5d9a1e'

export default function AdminPage() {
  const { admin } = useApp()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const adminLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setError('Lütfen kullanıcı adı ve şifre giriniz!')
      return
    }

    setIsLoading(true)
    setError('')

    await new Promise(resolve => setTimeout(resolve, 800))

    const inputHash = simpleHash(username + password)
    
    if (inputHash === ADMIN_PASSWORD_HASH && username.toLowerCase() === ADMIN_USERNAME.toLowerCase()) {
      admin.login()
      toast.success('Yönetici girişi başarılı!')
    } else {
      setError('Kullanıcı adı veya şifre hatalı!')
      toast.error('Giriş başarısız!')
    }
    setIsLoading(false)
  }

  const success = admin.isAuthenticated

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
              <h3 className="text-xl font-bold text-green-400 mb-2">Zaten Giriş Yaptınız!</h3>
              <p className="text-zinc-400 text-sm">Yönetim paneline erişiminiz var.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center gap-2 text-sm text-red-400"
                  role="alert"
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
                  aria-label="Kullanıcı adı"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400/50 transition-all"
                  disabled={isLoading}
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
                  aria-label="Şifre"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-green-400/50 transition-all"
                  disabled={isLoading}
                />
              </div>

              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                onClick={adminLogin}
                disabled={isLoading}
                className="w-full py-4 rounded-2xl bg-green-400 text-black font-semibold hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-4 h-4" /> Giriş Yap
                  </>
                )}
              </motion.button>

              <div className="text-center pt-4">
                <p className="text-xs text-zinc-600">
                  Yönetici erişimi için yetkili kişilerle iletişime geçiniz.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}