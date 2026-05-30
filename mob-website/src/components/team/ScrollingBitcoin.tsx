import { useState, useEffect } from 'react'

export default function ScrollingBitcoin() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) setProgress(window.scrollY / total)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const topPct = 8 + progress * 82

  return (
    <div
      className="scroll-btc fixed right-4 z-40 hidden lg:flex flex-col items-center gap-1 pointer-events-none"
      style={{ top: `${topPct}vh`, transition: 'top 0.08s linear' }}
    >
      <div
        className="w-px flex-1"
        style={{
          height: 40,
          background: 'linear-gradient(to bottom, transparent, rgba(215,168,79,0.6))',
        }}
      />
      <span
        className="text-2xl"
        style={{
          color: '#D7A84F',
          textShadow: '0 0 12px rgba(215,168,79,0.9), 0 0 24px rgba(139,44,255,0.4)',
        }}
      >
        ₿
      </span>
      <div
        className="w-px"
        style={{
          height: 40,
          background: 'linear-gradient(to bottom, rgba(215,168,79,0.6), transparent)',
        }}
      />
    </div>
  )
}
