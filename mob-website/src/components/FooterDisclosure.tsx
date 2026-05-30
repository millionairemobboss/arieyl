export default function FooterDisclosure() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Packages', href: '#packages' },
    { label: 'Training', href: '#training' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <footer
      className="py-16 px-4"
      style={{
        background: '#080810',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-base"
              style={{ background: 'linear-gradient(135deg, #8B2CFF, #00D5FF)' }}
            >
              M
            </div>
            <span className="font-black text-xl" style={{ color: '#F8F8FF' }}>
              MOB
            </span>
          </div>
          <span className="text-xs" style={{ color: '#A7A7B8' }}>
            Mindset Opportunity Blueprint
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs no-underline"
              style={{ color: '#A7A7B8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F8F8FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#A7A7B8')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }}
        />

        {/* Disclosure */}
        <div
          className="glass-card rounded-2xl p-6 text-center max-w-3xl"
          style={{ border: '1px solid rgba(215,168,79,0.2)' }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#D7A84F' }}
          >
            Important Disclosure
          </p>
          <p className="text-xs leading-relaxed" style={{ color: '#A7A7B8' }}>
            This is an independent affiliate funnel and <strong style={{ color: '#F8F8FF' }}>not the official Salarium Life website</strong>. This site is operated independently by a MOB team affiliate. Past profits do not guarantee or predict future earnings. Results vary based on referrals, activity, positioning, package movement, participation, and effort. This is not financial, investment, or legal advice. Always conduct your own due diligence before making any financial decision.
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: '#A7A7B8', opacity: 0.5 }}>
          © {currentYear} MOB — Mindset Opportunity Blueprint. Independent affiliate team.
        </p>
      </div>
    </footer>
  )
}
