import FadeUp from './FadeUp'

const PACKAGES = [
  { price: '$10',    name: 'STARTER',     desc: 'Get started and learn',          highlight: false },
  { price: '$25',    name: 'BUILDER',     desc: 'Build your foundation',          highlight: false },
  { price: '$50',    name: 'GROWER',      desc: 'Grow your network',              highlight: false },
  { price: '$100',   name: 'PRO',         desc: 'Accelerate your growth',         highlight: false },
  { price: '$500',   name: 'LEADER',      desc: 'Lead with leverage',             highlight: true  },
  { price: '$1,000', name: 'ELITE',       desc: 'Scale at a higher level',        highlight: false },
  { price: '$2,000', name: 'EXECUTIVE',   desc: 'Build long-term residuals',      highlight: false },
  { price: '$4,000', name: 'PRESIDENTIAL',desc: 'Maximize your impact',           highlight: false },
]

export default function PackageLevels() {
  return (
    <section id="packages" className="py-28 px-4 marble-bg-alt">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-label label-gold">
                <span>◆</span> Package Levels
              </span>
            </div>
            <h2 className="font-black m-0 mb-3" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#F8F8FF' }}>
              Choose Your <span className="text-3d-gold">Entry Point</span>
            </h2>
            <p style={{ color: '#A7A7B8', maxWidth: 480, margin: '0 auto' }}>
              You earn on referrals at or below your level. Higher packages unlock higher earning ceilings.
            </p>
          </div>
        </FadeUp>

        {/* Card row — scrollable on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4" style={{ minWidth: 'max-content' }}>
            {PACKAGES.map((p, i) => (
              <FadeUp key={p.name} delay={i * 55}>
                <div
                  className="flex flex-col items-center gap-4 rounded-2xl px-5 py-6 card-lift relative"
                  style={{
                    width: 148,
                    minHeight: 200,
                    background: p.highlight
                      ? 'linear-gradient(145deg, #1A0A35, #0D0720)'
                      : 'rgba(12,10,28,0.8)',
                    border: p.highlight
                      ? '1px solid rgba(215,168,79,0.55)'
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: p.highlight
                      ? '0 0 30px rgba(215,168,79,0.2), 0 0 60px rgba(139,44,255,0.1)'
                      : 'none',
                  }}
                >
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-black whitespace-nowrap"
                      style={{ background: 'linear-gradient(90deg, #C49A28, #F0C870)', color: '#030305' }}>
                      Most Popular
                    </div>
                  )}

                  {/* Price */}
                  <div className="text-center">
                    <div className="font-black" style={{
                      fontSize: '1.75rem',
                      color: p.highlight ? '#D7A84F' : '#F8F8FF',
                      filter: p.highlight ? 'drop-shadow(0 0 12px rgba(215,168,79,0.5))' : 'none',
                    }}>
                      {p.price}
                    </div>
                    <div className="font-bold text-xs tracking-widest mt-1" style={{ color: '#A7A7B8' }}>
                      {p.name}
                    </div>
                  </div>

                  <div className="w-full h-px" style={{ background: p.highlight ? 'rgba(215,168,79,0.3)' : 'rgba(255,255,255,0.07)' }} />

                  <p className="text-xs text-center leading-snug m-0" style={{ color: '#A7A7B8' }}>
                    {p.desc}
                  </p>

                  {/* Bitcoin coin accent */}
                  <div className="mt-auto text-lg" style={{
                    filter: p.highlight
                      ? 'drop-shadow(0 0 8px rgba(215,168,79,0.7))'
                      : 'drop-shadow(0 0 4px rgba(215,168,79,0.3))',
                    color: '#D7A84F',
                  }}>
                    ₿
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={100}>
          <div className="text-center mt-10">
            <a href="#cta" className="btn-purple px-8 py-4 rounded-2xl text-sm font-bold">
              Start With Any Package →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
