const LEVELS = [
  { tier: 1, label: 'You', count: 1, color: '#8B2CFF', glowColor: 'rgba(139,44,255,0.5)' },
  { tier: 2, label: 'Direct Referrals', count: 3, color: '#B449FF', glowColor: 'rgba(180,73,255,0.4)' },
  { tier: 3, label: 'Level 2', count: 9, color: '#00D5FF', glowColor: 'rgba(0,213,255,0.3)' },
  { tier: 4, label: 'Level 3', count: 27, color: '#D7A84F', glowColor: 'rgba(215,168,79,0.25)' },
]

export default function MatrixExplainer() {
  return (
    <section className="py-24 px-4" style={{ background: '#080810' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#8B2CFF' }}
          >
            Compensation Structure
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            How The
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8B2CFF, #00D5FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Matrix Works
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#A7A7B8' }}>
            You earn commission when people you refer purchase a package at or below your level. Your network compounds as your team grows.
          </p>
        </div>

        {/* Visual tree */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col items-center gap-0">
            {LEVELS.map((level, i) => (
              <div key={level.tier} className="flex flex-col items-center w-full">
                {/* Connector */}
                {i > 0 && (
                  <div
                    className="w-px h-8"
                    style={{
                      background: `linear-gradient(to bottom, ${LEVELS[i - 1].color}, ${level.color})`,
                    }}
                  />
                )}

                {/* Level row */}
                <div
                  className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg py-4 px-6 rounded-2xl"
                  style={{
                    border: `1px solid ${level.color}40`,
                    background: `${level.glowColor.replace(')', ', 0.05)').replace('rgba', 'rgba')}`,
                    boxShadow: `0 0 20px ${level.glowColor}`,
                  }}
                >
                  {/* Nodes */}
                  <div className="flex items-center gap-1 flex-wrap justify-center">
                    {Array.from({ length: Math.min(level.count, 9) }).map((_, j) => (
                      <div
                        key={j}
                        className="rounded-full"
                        style={{
                          width: level.tier === 1 ? 20 : level.tier === 2 ? 16 : 12,
                          height: level.tier === 1 ? 20 : level.tier === 2 ? 16 : 12,
                          background: level.color,
                          boxShadow: `0 0 8px ${level.color}`,
                        }}
                      />
                    ))}
                    {level.count > 9 && (
                      <span className="text-xs font-bold" style={{ color: level.color }}>
                        +{level.count - 9}
                      </span>
                    )}
                  </div>

                  {/* Text */}
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-sm" style={{ color: '#F8F8FF' }}>
                      {level.label}
                    </div>
                    <div className="text-xs" style={{ color: '#A7A7B8' }}>
                      {level.count === 1 ? 'Your position' : `Up to ${level.count} positions`}
                    </div>
                  </div>

                  {/* Tier badge */}
                  <div className="sm:ml-auto">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `${level.color}20`,
                        color: level.color,
                        border: `1px solid ${level.color}40`,
                      }}
                    >
                      Tier {level.tier}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div
            className="mt-8 p-4 rounded-xl text-center text-sm"
            style={{
              background: 'rgba(139,44,255,0.08)',
              border: '1px solid rgba(139,44,255,0.2)',
              color: '#A7A7B8',
            }}
          >
            ₿ &nbsp;Commissions are paid <strong style={{ color: '#F8F8FF' }}>peer-to-peer in Bitcoin</strong> — no delays, no middlemen. Results are not guaranteed and depend on your activity and team performance.
          </div>
        </div>
      </div>
    </section>
  )
}
