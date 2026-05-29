const STAT_CARDS = [
  { label: 'Active Team Members', value: '2,400+', trend: '+18% this month', color: '#8B2CFF' },
  { label: 'Packages Activated', value: '9,100+', trend: '+312 this week', color: '#00D5FF' },
  { label: 'Bitcoin Paid Out', value: '₿ 47+', trend: 'Peer-to-peer direct', color: '#D7A84F' },
]

export default function ProofSection() {
  return (
    <section className="py-24 px-4" style={{ background: '#080810' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#D7A84F' }}
          >
            Team Activity
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            Documentation Beats
            <br />
            <span style={{ color: '#D7A84F' }} className="text-glow-gold">
              Conversation
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#A7A7B8' }}>
            Real dashboard data from team activity. Results vary and are not guaranteed.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {STAT_CARDS.map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-2xl p-7 text-center flex flex-col gap-3"
              style={{ border: `1px solid ${s.color}30` }}
            >
              <div
                className="text-4xl font-black"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-sm font-semibold" style={{ color: '#F8F8FF' }}>
                {s.label}
              </div>
              <div
                className="text-xs px-3 py-1 rounded-full self-center"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                {s.trend}
              </div>
            </div>
          ))}
        </div>

        {/* Fake dashboard screenshot placeholder */}
        <div
          className="glass-card rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(139,44,255,0.2)' }}
        >
          {/* Browser chrome */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ background: 'rgba(8,8,16,0.8)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            <div
              className="ml-3 flex-1 h-6 rounded-lg text-xs flex items-center px-3"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#A7A7B8' }}
            >
              app.platform.com/dashboard
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { l: 'Total Earnings', v: '₿ 0.48', c: '#D7A84F' },
              { l: 'This Month', v: '₿ 0.12', c: '#00D5FF' },
              { l: 'Team Size', v: '14', c: '#8B2CFF' },
              { l: 'Pending', v: '₿ 0.03', c: '#B449FF' },
            ].map((item) => (
              <div
                key={item.l}
                className="rounded-xl p-4 text-center"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="text-xl font-black mb-1" style={{ color: item.c }}>
                  {item.v}
                </div>
                <div className="text-xs" style={{ color: '#A7A7B8' }}>
                  {item.l}
                </div>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="px-6 pb-6">
            <div
              className="w-full h-24 rounded-xl flex items-end gap-1 px-4 pb-2 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i % 3 === 0
                      ? 'linear-gradient(to top, #8B2CFF, #B449FF)'
                      : i % 3 === 1
                      ? 'linear-gradient(to top, #00D5FF44, #00D5FF88)'
                      : 'linear-gradient(to top, #8B2CFF44, #8B2CFF88)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs mt-6" style={{ color: '#A7A7B8', opacity: 0.65 }}>
          Past profits do not guarantee or predict future earnings. Results vary based on referrals, activity, positioning, package movement, participation, and effort.
        </p>
      </div>
    </section>
  )
}
