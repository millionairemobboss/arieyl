const LINKS = [
  { label: 'Product',      href: '#what-you-get' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Packages',     href: '#packages' },
  { label: 'Training',     href: '#training' },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-14 px-4" style={{ background: '#030305', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-7">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-base"
            style={{ background: 'linear-gradient(135deg,#6B0FFF,#B449FF,#00D5FF)', color: '#FFF8E7', boxShadow: '0 0 16px rgba(139,44,255,0.4)' }}>
            M
          </div>
          <div>
            <div className="font-black text-lg" style={{ background: 'linear-gradient(90deg,#FFF,#D7A84F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              MOB
            </div>
            <div className="text-[9px] tracking-widest uppercase" style={{ color: '#A7A7B8' }}>
              Mindset Opportunity Blueprint
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-5">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-xs font-semibold no-underline"
              style={{ color: '#A7A7B8', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D7A84F'}
              onMouseLeave={e => e.currentTarget.style.color = '#A7A7B8'}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="divider-gold w-full max-w-xl" />

        {/* Disclosure */}
        <div className="glass-gold rounded-2xl p-5 text-center max-w-3xl w-full">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#D7A84F' }}>
            Important Disclosure
          </p>
          <p className="text-xs leading-relaxed m-0" style={{ color: '#A7A7B8' }}>
            This is an <strong style={{ color: '#F8F8FF' }}>independent affiliate team website</strong> and is not the official Salarium Life platform. Earnings are not guaranteed. Results vary based on individual effort, referrals, activity, package selection, and market conditions. This is not financial, investment, or legal advice. Past performance does not predict future results.
          </p>
        </div>

        <p className="text-xs" style={{ color: '#A7A7B8', opacity: 0.35 }}>
          © {year} MOB Team — Mindset Opportunity Blueprint. Independent affiliate team.
        </p>
      </div>
    </footer>
  )
}
