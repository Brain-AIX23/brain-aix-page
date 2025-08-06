'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { useTranslation } from '@/services/translation.service'

interface SpotCounterProps {
  total: number
  remaining: number
  className?: string
}

export default function SpotCounter({ total, remaining, className = '' }: SpotCounterProps) {
  const { t } = useTranslation()
  const percentage = ((total - remaining) / total) * 100

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 ${className}`}
    >
      <Flame className="h-3 w-3 text-red-400 animate-pulse" />
      <span className="text-white/90 text-xs font-medium">
        {t('counter.remaining').replace('{remaining}', remaining.toString()).replace('{total}', total.toString())}
      </span>
      <div className="w-12 h-1.5 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
        />
      </div>
    </motion.div>
  )
} 