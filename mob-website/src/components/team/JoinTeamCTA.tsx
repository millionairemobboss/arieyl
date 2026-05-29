const CHECKLIST = [
  'Free account — no credit card ever required',
  'Instant access to 12+ marketing tools',
  'Full team training vault on day one',
  'Personal Bitcoin affiliate link',
  'Direct peer-to-peer commission payments',
  'MOB team support community access',
]

export default function JoinTeamCTA() {
  return (
    <section
      id="join-team"
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: '#080810' }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,44,255,0.2) 0%, rgba(215,168,79,0.08) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 5%, #D7A84F 30%, #8B2CFF 70%, transparent 95%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#D7A84F' }}>
                Ready to start?
              </p>
              <h2
                className="text-5xl md:text-6xl font-black leading-none text-3d-gold"
              >
                Join the
                <br />
                MOB Team.
              </h2>
            </div>

            <p className="text-base leading-relaxed" style={{ color: '#A7A7B8' }}>
              Creating your account is free. You choose if and when to invest in a package.
              No pressure — just access.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#C8C8D8' }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-black"
                    style={{ background: 'rgba(215,168,79,0.15)', color: '#D7A84F', border: '1px solid rgba(215,168,79,0.3)' }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xs" style={{ color: '#A7A7B8', opacity: 0.55 }}>
              This is an independent affiliate funnel. Income is not guaranteed and varies by individual activity.
            </p>
          </div>

          {/* Right — CTA card */}
          <div
            className="glass-card rounded-3xl p-10 flex flex-col gap-6"
            style={{ border: '1px solid rgba(215,168,79,0.25)', boxShadow: '0 0 60px rgba(139,44,255,0.2), 0 0 100px rgba(215,168,79,0.1)' }}
          >
            {/* MOB logo */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #8B2CFF, #B449FF, #00D5FF)',
                  boxShadow: '0 0 30px rgba(139,44,255,0.5)',
                  color: '#FFF8E7',
                }}
              >
                M
              </div>
              <div className="text-center">
                <p className="font-black text-lg" style={{ color: '#F8F8FF' }}>Create Your Free Account</p>
                <p className="text-xs mt-1" style={{ color: '#A7A7B8' }}>Get instant access — no card needed</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '$0', l: 'Join fee' },
                { v: '₿', l: 'Paid in Bitcoin' },
                { v: '12+', l: 'Tools included' },
                { v: '24/7', l: 'Team training' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="text-center py-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="font-black text-lg" style={{ color: '#D7A84F' }}>{s.v}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#A7A7B8' }}>{s.l}</div>
                </div>
              ))}
            </div>

            <a
              href="https://earnbtc.info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center py-5 rounded-2xl text-base font-black no-underline block"
            >
              Create Free Account →
            </a>

            <a
              href="#videos"
              className="btn-secondary w-full text-center py-4 rounded-2xl text-sm font-semibold no-underline block"
              style={{ color: '#F8F8FF' }}
            >
              ▶ Watch Training First
            </a>

            <p className="text-center text-xs" style={{ color: '#A7A7B8', opacity: 0.5 }}>
              Independent affiliate team. Not the official Salarium Life site.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
