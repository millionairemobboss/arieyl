import { features } from '../data/features'

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 px-4" style={{ background: '#030305' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#8B2CFF' }}
          >
            Everything You Need
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            One Platform.
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8B2CFF 0%, #00D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Endless Leverage.
            </span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#A7A7B8' }}>
            The same marketing stack used by agencies charging $3,000/month — included in your membership.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="glass-card rounded-2xl p-5 flex flex-col gap-3 group cursor-default"
              style={{ transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(139,44,255,0.5)'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 32px rgba(139,44,255,0.2)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(255,255,255,0.12)'
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              <span className="text-2xl">{feature.icon}</span>
              <div>
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ color: '#F8F8FF' }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#A7A7B8' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#join"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold no-underline"
          >
            Access All Tools Free →
          </a>
        </div>
      </div>
    </section>
  )
}
