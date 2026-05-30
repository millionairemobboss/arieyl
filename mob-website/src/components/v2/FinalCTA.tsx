import FadeUp from './FadeUp'

export default function FinalCTA() {
  return (
    <section id="cta" className="py-32 px-4 relative overflow-hidden marble-bg">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 5%, #D7A84F 30%, #8B2CFF 70%, transparent 95%)' }} />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,44,255,0.2) 0%, rgba(215,168,79,0.06) 40%, transparent 70%)', filter: 'blur(30px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <FadeUp>
          {/* MOB Logo big */}
          <div className="flex flex-col items-center gap-2 mb-2">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center font-black text-3xl"
              style={{ background: 'linear-gradient(135deg, #6B0FFF, #B449FF 50%, #00D5FF)', boxShadow: '0 0 40px rgba(139,44,255,0.5), 0 0 80px rgba(0,213,255,0.15)', color: '#FFF8E7' }}>
              M
            </div>
            <div style={{ color: '#A7A7B8', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Mindset Opportunity Blueprint
            </div>
          </div>

          <h2 className="font-black uppercase leading-none m-0" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', color: '#F8F8FF' }}>
            Start With{' '}
            <span className="text-3d-white">Structure.</span>
            <br />
            Build With{' '}
            <span className="text-italic-gold">The Team.</span>
          </h2>

          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#A7A7B8' }}>
            Join the most structured Bitcoin affiliate team in the game. Free to start. Powerful to scale.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://earnbtc.info" target="_blank" rel="noopener noreferrer"
              className="btn-purple px-10 py-5 rounded-2xl text-base font-bold gap-2">
              Create Free Account <span>›</span>
            </a>
            <a href="#training" className="btn-outline px-10 py-5 rounded-2xl text-base font-semibold gap-2">
              <span style={{ fontSize: 13 }}>▶</span> Watch Training First
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={150}>
          <p className="text-xs" style={{ color: '#666880' }}>
            This is an independent affiliate funnel and not the official Salarium Life website.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
