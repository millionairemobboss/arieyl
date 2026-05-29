import BitcoinRain from './BitcoinRain'

// Swap this for the generated video URL when ready
const HERO_VIDEO_SRC = ''

interface VideoHeroProps {
  onWatchClick: () => void
}

export default function VideoHero({ onWatchClick }: VideoHeroProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#030305' }}
    >
      {/* ── Video background (swaps in when HERO_VIDEO_SRC is set) ── */}
      {HERO_VIDEO_SRC ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <BitcoinRain />
      )}

      {/* ── Dark gradient overlays ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(139,44,255,0.22) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,213,255,0.1) 0%, transparent 50%)',
        }}
      />
      {/* Video overlay darkening */}
      {HERO_VIDEO_SRC && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(3,3,5,0.65)' }}
        />
      )}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-8 pt-32">

        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: 'rgba(215,168,79,0.12)',
            border: '1px solid rgba(215,168,79,0.5)',
            color: '#D7A84F',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: '#D7A84F',
              boxShadow: '0 0 8px rgba(215,168,79,0.8)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
          Official MOB Team Website · Bitcoin Powered
        </div>

        {/* 3D Headline */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-3d-gold"
            style={{ letterSpacing: '-3px' }}
          >
            MOB
          </h1>
          <div
            className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest uppercase text-3d-white"
            style={{ letterSpacing: '6px' }}
          >
            Mindset · Opportunity · Blueprint
          </div>
        </div>

        {/* Divider line */}
        <div className="flex items-center gap-4 w-full max-w-lg">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(215,168,79,0.6))' }} />
          <span style={{ color: '#D7A84F', fontSize: 20 }}>₿</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(215,168,79,0.6))' }} />
        </div>

        {/* Sub-headline */}
        <p
          className="text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
          style={{ color: '#C8C8D8' }}
        >
          The most structured Bitcoin team in the game.
          Marketing tools, training, and a peer-to-peer income system — all in one place.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#join-team"
            className="btn-gold px-9 py-4 rounded-2xl text-base font-black no-underline w-full sm:w-auto text-center min-w-52"
          >
            Join the Team — It's Free
          </a>
          <button
            onClick={onWatchClick}
            className="btn-secondary px-9 py-4 rounded-2xl text-base font-semibold w-full sm:w-auto text-center min-w-52"
            style={{ color: '#F8F8FF' }}
          >
            ▶ Watch Team Training
          </button>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {[
            { v: '₿ Direct', l: 'Bitcoin Payouts' },
            { v: '$0', l: 'To Create Account' },
            { v: '12+', l: 'Marketing Tools' },
            { v: '8 Levels', l: 'Income Tiers' },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center gap-1">
              <span
                className="text-xl font-black"
                style={{ color: '#D7A84F', textShadow: '0 0 16px rgba(215,168,79,0.5)' }}
              >
                {s.v}
              </span>
              <span className="text-xs uppercase tracking-widest" style={{ color: '#A7A7B8' }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ color: '#A7A7B8' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(215,168,79,0.8), transparent)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030305)' }}
      />
    </section>
  )
}
