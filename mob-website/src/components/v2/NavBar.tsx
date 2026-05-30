import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Product',      href: '#what-you-get' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Packages',     href: '#packages' },
  { label: 'Training',     href: '#training' },
  { label: 'FAQ',          href: '#proof' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-9 left-0 right-0 z-40 flex justify-center px-4">
      <nav
        className="w-full max-w-7xl rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          background: scrolled ? 'rgba(3,3,5,0.96)' : 'rgba(3,3,5,0.4)',
          border: scrolled ? '1px solid rgba(139,44,255,0.25)' : '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.6)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <div className="flex flex-col items-center justify-center w-10 h-10 rounded-xl font-black text-base relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #6B0FFF, #B449FF 50%, #00D5FF)', boxShadow: '0 0 18px rgba(139,44,255,0.55)', color: '#FFF8E7' }}>
            M
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-black text-xl tracking-tight" style={{ background: 'linear-gradient(90deg, #FFF 0%, #D7A84F 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              MOB
            </span>
            <span className="text-[9px] tracking-widest uppercase" style={{ color: '#A7A7B8' }}>Mindset Opportunity Blueprint</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold no-underline transition-all duration-200"
                style={{ color: '#A7A7B8' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F8F8FF' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#A7A7B8' }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a href="#cta" className="btn-purple hidden sm:inline-flex px-5 py-2 rounded-xl text-sm gap-2">
            Create Free Account
          </a>
          <button className="md:hidden flex flex-col gap-1.5 p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}>
            {[0,1,2].map(i => (
              <span key={i} className="block w-5 h-0.5" style={{ background: '#F8F8FF',
                transition: 'transform 0.2s, opacity 0.2s',
                transform: open ? (i===0 ? 'rotate(45deg) translate(3px,3px)' : i===2 ? 'rotate(-45deg) translate(3px,-3px)' : 'none') : 'none',
                opacity: open && i===1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl py-4 px-6 flex flex-col gap-1 md:hidden"
          style={{ background: 'rgba(3,3,5,0.98)', border: '1px solid rgba(139,44,255,0.2)', backdropFilter: 'blur(20px)' }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-semibold py-3 no-underline border-b"
              style={{ color: '#F8F8FF', borderColor: 'rgba(255,255,255,0.06)' }}>
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="btn-purple py-3 rounded-xl text-sm mt-3">
            Create Free Account
          </a>
        </div>
      )}
    </header>
  )
}
