const REASONS = [
  {
    icon: '🌍',
    title: 'Global & Borderless',
    body: 'Bitcoin moves instantly, anywhere on earth. No banks, no delays, no declined transactions.',
  },
  {
    icon: '🔒',
    title: 'You Own It',
    body: 'Not a bank account that can be frozen. When you hold the keys, you hold the asset.',
  },
  {
    icon: '📈',
    title: 'Deflationary by Design',
    body: 'Only 21 million Bitcoin will ever exist. As demand rises and supply stays fixed, value follows.',
  },
  {
    icon: '⚡',
    title: 'Peer-to-Peer Payments',
    body: 'No middle man taking a cut. Commissions go directly wallet-to-wallet, within minutes.',
  },
]

export default function WhyBitcoin() {
  return (
    <section
      id="bitcoin"
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: '#030305' }}
    >
      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(215,168,79,0.12) 0%, rgba(139,44,255,0.08) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Tag */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(215,168,79,0.1)',
              border: '1px solid rgba(215,168,79,0.4)',
              color: '#D7A84F',
            }}
          >
            ₿ Why Bitcoin
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-black leading-none mb-4 text-3d-gold"
          >
            The Biggest Wealth Transfer
            <br />
            in Modern History.
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#A7A7B8' }}>
            We're still early. The people who position before the mainstream arrives
            are the ones who change their financial story forever.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="glass-card rounded-2xl p-7 flex flex-col gap-4"
              style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 40px rgba(215,168,79,0.15)'
                el.style.borderColor = 'rgba(215,168,79,0.35)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'rgba(215,168,79,0.1)', border: '1px solid rgba(215,168,79,0.25)' }}
              >
                {r.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-2" style={{ color: '#F8F8FF' }}>{r.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#A7A7B8' }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Big quote */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(215,168,79,0.08) 0%, rgba(139,44,255,0.08) 100%)',
            border: '1px solid rgba(215,168,79,0.25)',
          }}
        >
          <div style={{ fontSize: 40, color: '#D7A84F', marginBottom: 16, opacity: 0.6 }}>"</div>
          <p
            className="text-2xl md:text-3xl font-black leading-snug mb-6 text-3d-gold"
          >
            The best time to position yourself in Bitcoin was 10 years ago.
            The second best time is today.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #8B2CFF, #00D5FF)', color: '#FFF' }}
            >
              M
            </div>
            <span className="font-bold text-sm" style={{ color: '#D7A84F' }}>MOB Team Leadership</span>
          </div>
        </div>
      </div>
    </section>
  )
}
