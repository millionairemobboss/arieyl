const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Videos', href: '#videos' },
  { label: 'Bitcoin', href: '#bitcoin' },
  { label: 'Join', href: '#join-team' },
]

export default function TeamFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-16 px-4"
      style={{
        background: '#030305',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg"
            style={{
              background: 'linear-gradient(135deg, #8B2CFF, #B449FF, #00D5FF)',
              boxShadow: '0 0 20px rgba(139,44,255,0.4)',
              color: '#FFF8E7',
            }}
          >
            M
          </div>
          <div>
            <div
              className="font-black text-xl"
              style={{
                background: 'linear-gradient(90deg, #FFF8E7, #D7A84F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              MOB
            </div>
            <div className="text-[10px] tracking-widest uppercase" style={{ color: '#A7A7B8' }}>
              Mindset Opportunity Blueprint
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold no-underline tracking-wide"
              style={{ color: '#A7A7B8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D7A84F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A7A7B8')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Gradient line */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(215,168,79,0.4) 30%, rgba(139,44,255,0.4) 70%, transparent 95%)' }}
        />

        {/* Disclosure box */}
        <div
          className="rounded-2xl p-6 text-center max-w-3xl w-full"
          style={{
            background: 'rgba(215,168,79,0.04)',
            border: '1px solid rgba(215,168,79,0.15)',
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: '#D7A84F' }}
          >
            Important Disclosure
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#A7A7B8' }}>
            This is an <strong style={{ color: '#F8F8FF' }}>independent affiliate team website</strong> and is not the official Salarium Life platform. This site is operated by a MOB team affiliate. Earnings are not guaranteed. Results vary based on individual effort, referrals, activity, package selection, and market conditions. This is not financial, investment, tax, or legal advice. Past performance does not predict future results. Always do your own research before making financial decisions.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: '#A7A7B8', opacity: 0.4 }}>
          © {year} MOB Team — Mindset Opportunity Blueprint. Independent affiliate team.
        </p>
      </div>
    </footer>
  )
}
