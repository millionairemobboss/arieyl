import { useState, useEffect } from 'react'

interface TeamNavProps {
  heroVideoRef?: React.RefObject<HTMLElement | null>
}

export default function TeamNav(_props: TeamNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About',   href: '#about' },
    { label: 'Videos',  href: '#videos' },
    { label: 'Bitcoin', href: '#bitcoin' },
    { label: 'Join',    href: '#join-team' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="w-full max-w-6xl rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          background: scrolled ? 'rgba(3,3,5,0.92)' : 'rgba(3,3,5,0.5)',
          border: scrolled ? '1px solid rgba(215,168,79,0.25)' : '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(215,168,79,0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* MOB Logo */}
        <a href="#" className="flex items-center gap-3 no-underline" aria-label="MOB Home">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #8B2CFF 0%, #B449FF 50%, #00D5FF 100%)',
              boxShadow: '0 0 16px rgba(139,44,255,0.6)',
            }}
          >
            <span style={{ color: '#FFF8E7', fontSize: 15, letterSpacing: '-0.5px' }}>M</span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="font-black text-xl tracking-tight"
              style={{
                background: 'linear-gradient(90deg, #FFF8E7 0%, #D7A84F 60%, #FFF8E7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              MOB
            </span>
            <span className="text-[9px] tracking-widest uppercase hidden sm:block" style={{ color: '#A7A7B8' }}>
              Mindset Opportunity Blueprint
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold no-underline tracking-wide transition-all duration-200"
                style={{ color: '#A7A7B8' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#D7A84F'
                  e.currentTarget.style.textShadow = '0 0 12px rgba(215,168,79,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A7A7B8'
                  e.currentTarget.style.textShadow = 'none'
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#join-team"
            className="btn-gold hidden sm:inline-flex items-center px-5 py-2 rounded-xl text-sm no-underline"
          >
            Join the Team
          </a>
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#F8F8FF' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className="block h-0.5 bg-current" style={{ width: menuOpen ? 20 : 20, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
              <span className="block h-0.5 bg-current" style={{ width: 14, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span className="block h-0.5 bg-current" style={{ width: 20, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-4 right-4 mt-2 rounded-2xl py-4 px-6 flex flex-col gap-1 md:hidden"
          style={{ background: 'rgba(3,3,5,0.97)', border: '1px solid rgba(215,168,79,0.2)', backdropFilter: 'blur(20px)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold py-3 no-underline border-b"
              style={{ color: '#F8F8FF', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join-team"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-center px-5 py-3 rounded-xl text-sm mt-3 no-underline"
          >
            Join the Team
          </a>
        </div>
      )}
    </header>
  )
}
