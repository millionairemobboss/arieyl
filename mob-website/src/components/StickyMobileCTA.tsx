import { useState, useEffect } from 'react'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:hidden"
      style={{
        background: 'linear-gradient(to top, rgba(3,3,5,0.98) 60%, transparent)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <a
        href="#join"
        className="btn-primary block w-full text-center py-4 rounded-2xl text-base font-black no-underline"
      >
        Create Free Account — Join MOB Team ₿
      </a>
    </div>
  )
}
