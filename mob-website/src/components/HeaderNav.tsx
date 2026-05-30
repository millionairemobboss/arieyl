import { useState, useEffect } from 'react'

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Packages', href: '#packages' },
    { label: 'Training', href: '#training' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className="w-full max-w-6xl glass-card rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          transition: 'box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 0 40px rgba(139,44,255,0.25)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
            style={{ background: 'linear-gradient(135deg, #8B2CFF, #00D5FF)' }}
          >
            M
          </div>
          <span className="font-black text-lg tracking-tight" style={{ color: '#F8F8FF' }}>
            MOB
          </span>
          <span className="text-xs hidden sm:block" style={{ color: '#A7A7B8' }}>
            Mindset Opportunity Blueprint
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium no-underline transition-colors"
                style={{ color: '#A7A7B8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F8F8FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#A7A7B8')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="btn-primary hidden sm:inline-flex items-center px-5 py-2 rounded-xl text-sm no-underline"
          >
            Get Started Free
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#F8F8FF', background: 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block w-5 h-0.5" style={{ background: '#F8F8FF', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
              <span className="block w-5 h-0.5" style={{ background: '#F8F8FF', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span className="block w-5 h-0.5" style={{ background: '#F8F8FF', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full mt-2 left-4 right-4 glass-card rounded-2xl py-4 px-6 flex flex-col gap-3 md:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium py-2 no-underline border-b"
              style={{ color: '#F8F8FF', borderColor: 'rgba(255,255,255,0.08)' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            className="btn-primary text-center px-5 py-3 rounded-xl text-sm mt-2 no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Create Free Account
          </a>
        </div>
      )}
    </header>
  )
}
