import { motion } from 'framer-motion'

interface DataCardProps {
  label: string
  value: string | number
  detail?: string
  warning?: boolean
  color?: string
  icon?: React.ReactNode
  index?: number
}

export default function DataCard({ label, value, detail, warning, color, icon, index = 0 }: DataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(74, 222, 128, 0.1)' }}
      className="glass-card rounded-2xl p-6 cursor-default transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-widest text-green-400 font-medium">
          {label}
        </span>
        {warning && (
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-dot" />
        )}
        {icon && <span className="text-zinc-500 group-hover:text-green-400 transition-colors">{icon}</span>}
      </div>
      <div
        className="text-3xl font-bold mb-2"
        style={{ color: color || '#fafafa' }}
      >
        {value}
      </div>
      {detail && (
        <p className="text-sm text-zinc-500 leading-relaxed">{detail}</p>
      )}
    </motion.div>
  )
}
