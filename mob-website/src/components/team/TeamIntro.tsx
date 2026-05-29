const PILLARS = [
  {
    icon: '🧠',
    title: 'Mindset',
    body: 'We believe success starts before the first dollar. MOB is built on frameworks for clarity, discipline, and long-term thinking.',
  },
  {
    icon: '🎯',
    title: 'Opportunity',
    body: 'We position early. Bitcoin is the greatest transfer of wealth in modern history — we help our team arrive before the crowd.',
  },
  {
    icon: '📐',
    title: 'Blueprint',
    body: 'Structure beats hustle every time. Our proven blueprint covers marketing, tools, onboarding, and team support from day one.',
  },
]

export default function TeamIntro() {
  return (
    <section
      id="about"
      className="py-28 px-4"
      style={{ background: '#FAFAFA' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Top tag */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(139,44,255,0.08)',
              border: '1px solid rgba(139,44,255,0.25)',
              color: '#8B2CFF',
            }}
          >
            Who We Are
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-none mb-4"
            style={{ color: '#0D0D1A' }}
          >
            Not a team.{' '}
            <span className="text-gold-on-white">A movement.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#555' }}>
            MOB — Mindset Opportunity Blueprint — is a structured Bitcoin affiliate team
            that gives you the tools, training, and team to actually activate.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 40px rgba(139,44,255,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'none'
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(139,44,255,0.08), rgba(0,213,255,0.08))',
                  border: '1px solid rgba(139,44,255,0.15)',
                }}
              >
                {p.icon}
              </div>
              <div>
                <h3
                  className="text-xl font-black mb-2"
                  style={{ color: '#0D0D1A' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
                  {p.body}
                </p>
              </div>
              <div
                className="h-1 w-12 rounded-full"
                style={{ background: 'linear-gradient(90deg, #8B2CFF, #00D5FF)' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: 'linear-gradient(135deg, #0D0D1A 0%, #1A0A2E 50%, #0D0D1A 100%)',
            boxShadow: '0 8px 48px rgba(139,44,255,0.2)',
          }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#D7A84F' }}>
              Independent Team — Real Tools
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-3d-white">
              We don't just talk about Bitcoin.
              <br />
              We position in it.
            </h3>
          </div>
          <a
            href="#join-team"
            className="btn-gold px-8 py-4 rounded-2xl text-sm font-black no-underline shrink-0"
          >
            Create Free Account →
          </a>
        </div>
      </div>
    </section>
  )
}
