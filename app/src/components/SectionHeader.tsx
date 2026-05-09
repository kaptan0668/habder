import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1 h-8 bg-green-400 rounded-full" />
        <h2 className="text-2xl lg:text-3xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-zinc-400 text-sm ml-4">{subtitle}</p>
      )}
    </motion.div>
  )
}
