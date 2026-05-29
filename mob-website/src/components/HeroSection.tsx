export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden marble-bg pt-32 pb-20 px-4"
      style={{ background: '#030305' }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,44,255,0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,213,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,44,255,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            border: '1px solid rgba(139,44,255,0.5)',
            background: 'rgba(139,44,255,0.1)',
            color: '#B449FF',
          }}
        >
          <span>₿</span>
          Bitcoin-Powered Income System
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-black leading-none tracking-tight text-glow-purple"
          style={{ color: '#F8F8FF' }}
        >
          POSITION YOURSELF
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #8B2CFF 0%, #00D5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            EARLY IN BITCOIN
          </span>
        </h1>

        {/* Accent */}
        <p
          className="text-lg md:text-xl font-semibold tracking-wide uppercase"
          style={{ color: '#D7A84F' }}
        >
          with the MOB team
        </p>

        {/* Subtext */}
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ color: '#A7A7B8' }}
        >
          Get access to digital marketing tools, team training, and a simple
          Bitcoin-powered referral system designed for people who want structure
          before they start.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#join"
            id="join"
            className="btn-primary px-8 py-4 rounded-2xl text-base font-bold no-underline w-full sm:w-auto text-center min-w-48"
          >
            Create Free Account
          </a>
          <a
            href="#training"
            className="btn-secondary px-8 py-4 rounded-2xl text-base font-semibold no-underline w-full sm:w-auto text-center min-w-48"
            style={{ color: '#F8F8FF' }}
          >
            ▶ Watch Training First
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="flex flex-wrap justify-center items-center gap-4 mt-4 text-xs"
          style={{ color: '#A7A7B8' }}
        >
          <span className="flex items-center gap-1">
            <span style={{ color: '#00D5FF' }}>✓</span> Free to join
          </span>
          <span className="flex items-center gap-1">
            <span style={{ color: '#00D5FF' }}>✓</span> No credit card
          </span>
          <span className="flex items-center gap-1">
            <span style={{ color: '#00D5FF' }}>✓</span> Bitcoin payouts
          </span>
          <span className="flex items-center gap-1">
            <span style={{ color: '#00D5FF' }}>✓</span> 12+ marketing tools
          </span>
        </div>

        {/* Disclosure */}
        <p className="text-xs mt-2" style={{ color: '#A7A7B8', opacity: 0.7 }}>
          This is an independent affiliate funnel and not the official Salarium Life website.
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #030305)',
        }}
      />
    </section>
  )
}
