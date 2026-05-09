import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface StatCounterProps {
  value: string | number
  label: string
  index: number
}

export default function StatCounter({ value, label, index }: StatCounterProps) {
  const stripRef = useRef<HTMLDivElement>(null)
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const numMatch = String(value).match(/[\d.]+/)
    if (!numMatch) {
      setDisplayValue(String(value))
      return
    }
    const targetNum = parseFloat(numMatch[0])
    const obj = { val: 0 }

    const tl = gsap.timeline({ delay: index * 0.2 })
    tl.to(obj, {
      val: targetNum,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => {
        const formatted = targetNum % 1 === 0
          ? Math.round(obj.val).toString()
          : obj.val.toFixed(1)
        setDisplayValue(String(value).replace(numMatch[0], formatted))
      },
    })

    if (stripRef.current) {
      tl.fromTo(
        stripRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        index * 0.2
      )
    }

    return () => { tl.kill() }
  }, [value, index])

  return (
    <div className="overflow-hidden" ref={stripRef}>
      <div className="text-5xl lg:text-6xl font-thin text-white mb-2 tracking-tight">
        {displayValue}
      </div>
      <div className="text-sm uppercase tracking-widest text-green-400 font-medium">
        {label}
      </div>
    </div>
  )
}
