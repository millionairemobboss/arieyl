export default function FinalCTA() {
  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: '#030305' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,44,255,0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8B2CFF, #00D5FF, transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center text-3xl"
          style={{
            background: 'linear-gradient(135deg, #8B2CFF, #00D5FF)',
            boxShadow: '0 0 40px rgba(139,44,255,0.5), 0 0 80px rgba(0,213,255,0.2)',
          }}
        >
          ₿
        </div>

        <div>
          <h2
            className="text-4xl md:text-6xl font-black leading-none mb-4 text-glow-purple"
            style={{ color: '#F8F8FF' }}
          >
            Ready to Position
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #8B2CFF 0%, #B449FF 50%, #00D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Yourself Early?
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: '#A7A7B8' }}>
            Join the MOB team. Create your free account today and get instant access to the training vault, marketing tools, and your personal affiliate link.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#join"
            className="btn-primary px-10 py-5 rounded-2xl text-base font-black no-underline text-center min-w-56"
          >
            Create Free Account →
          </a>
          <a
            href="#how-it-works"
            className="btn-secondary px-10 py-5 rounded-2xl text-base font-semibold no-underline text-center min-w-56"
            style={{ color: '#F8F8FF' }}
          >
            See How It Works
          </a>
        </div>

        {/* Trust bullets */}
        <div
          className="flex flex-wrap justify-center gap-6 text-xs"
          style={{ color: '#A7A7B8' }}
        >
          {[
            'Free to join — no credit card',
            'Bitcoin payouts — peer-to-peer',
            '12+ marketing tools included',
            'Team training on day one',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span style={{ color: '#8B2CFF' }}>●</span>
              {item}
            </span>
          ))}
        </div>

        <p className="text-xs" style={{ color: '#A7A7B8', opacity: 0.55 }}>
          This is an independent affiliate funnel. Results are not guaranteed. Income varies by individual activity.
        </p>
      </div>
    </section>
  )
}
