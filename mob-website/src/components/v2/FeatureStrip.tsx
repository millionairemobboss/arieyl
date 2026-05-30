import FadeUp from './FadeUp'

const FEATURES = [
  { icon: '🖥️', title: 'Digital Tools',       desc: 'Everything In One Platform' },
  { icon: '₿',  title: 'BTC Rewards',         desc: 'Get Paid In Bitcoin' },
  { icon: '🎓', title: 'Team Training',        desc: 'Learn & Grow Together' },
  { icon: '✅', title: 'No Autoship',          desc: '100% Optional' },
  { icon: '🤝', title: 'Step-By-Step Support', desc: 'We Walk With You' },
]

export default function FeatureStrip() {
  return (
    <section
      className="py-8 px-4"
      style={{ background: '#080810', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {FEATURES.map((f, i) => (
            <FadeUp key={f.title} delay={i * 80}>
              <div
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 px-4 py-4 rounded-2xl card-lift"
                style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(139,44,255,0.2), rgba(0,213,255,0.1))', border: '1px solid rgba(139,44,255,0.3)' }}
                >
                  {f.icon}
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold m-0" style={{ color: '#F8F8FF' }}>{f.title}</p>
                  <p className="text-xs m-0 mt-0.5" style={{ color: '#A7A7B8' }}>{f.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
