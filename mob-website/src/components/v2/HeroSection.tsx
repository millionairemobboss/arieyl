import { useEffect, useRef, useState } from 'react'

const COINS = [
  { left: '4%',  dur: '7s',  delay: '0s',   size: 20 },
  { left: '10%', dur: '9s',  delay: '1.2s', size: 16 },
  { left: '16%', dur: '6s',  delay: '0.4s', size: 24 },
  { left: '22%', dur: '8s',  delay: '2.1s', size: 18 },
  { left: '88%', dur: '7.5s',delay: '0.8s', size: 20 },
  { left: '93%', dur: '5.5s',delay: '1.9s', size: 16 },
  { left: '97%', dur: '8.5s',delay: '0.2s', size: 22 },
]

// Chart bar animation data
const BARS = [0.4, 0.6, 0.35, 0.75, 0.5, 0.85, 0.6, 0.9, 0.65, 0.8, 0.7, 1.0]

export default function HeroSection() {
  const [parallax, setParallax] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fn = () => {
      if (sectionRef.current) {
        const pct = window.scrollY / window.innerHeight
        setParallax(Math.min(pct * 40, 40))
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#030305' }}
    >
      {/* ── Video BG ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${parallax}px)`, transition: 'transform 0.05s linear' }}
        src="/hero-scroll.mp4"
        autoPlay muted loop playsInline
      />

      {/* ── Overlays ── */}
      <div className="absolute inset-0" style={{ background: 'rgba(3,3,5,0.72)' }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 70% 80% at 15% 50%, rgba(139,44,255,0.18) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, transparent 60%, #030305 100%)',
      }} />

      {/* ── Falling Bitcoin (edges only) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {COINS.map((c, i) => (
          <span key={i} className="btc-coin"
            style={{ left: c.left, fontSize: c.size, animationDuration: c.dur, animationDelay: c.delay }}>
            ₿
          </span>
        ))}
      </div>

      {/* ── Animated chart lines (left edge) ── */}
      <div className="absolute left-0 bottom-0 top-0 w-32 pointer-events-none hidden lg:flex items-end pb-20 px-4 gap-1 opacity-30">
        {BARS.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm"
            style={{
              height: `${h * 180}px`,
              background: i % 2 === 0
                ? 'linear-gradient(to top, #8B2CFF, rgba(139,44,255,0.1))'
                : 'linear-gradient(to top, #00D5FF, rgba(0,213,255,0.05))',
              animationName: 'chart-bar',
              animationDuration: `${0.4 + i * 0.06}s`,
              animationTimingFunction: 'ease-out',
              animationFillMode: 'both',
              animationDelay: `${0.1 + i * 0.05}s`,
              transformOrigin: 'bottom',
            }} />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-8 items-center pt-32 pb-20">

        {/* LEFT — Founder photo */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative">
            {/* Rim light glow */}
            <div className="absolute -inset-4 rounded-2xl pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 80% 50%, rgba(139,44,255,0.4) 0%, transparent 60%)',
                filter: 'blur(16px)',
              }} />
            {/* Photo or placeholder */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                width: 'clamp(280px, 38vw, 460px)',
                aspectRatio: '3/4',
                background: 'linear-gradient(145deg, #0D0720 0%, #1A0A35 50%, #080810 100%)',
                border: '1px solid rgba(139,44,255,0.3)',
                boxShadow: '8px 0 40px rgba(0,0,0,0.8), -4px 0 30px rgba(139,44,255,0.3)',
              }}>
              <img
                src="/founder.jpg"
                alt="Tazz Smith — MOB Team"
                className="w-full h-full object-cover object-top"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              {/* Overlay for image depth */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to right, rgba(3,3,5,0.2) 0%, transparent 40%, transparent 70%, rgba(3,3,5,0.5) 100%)',
              }} />
              {/* Placeholder shown when no image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 founder-placeholder"
                style={{ display: 'none' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black"
                  style={{ background: 'linear-gradient(135deg, #6B0FFF, #00D5FF)', color: '#FFF' }}>
                  T
                </div>
                <p className="text-xs text-center px-6" style={{ color: '#A7A7B8' }}>
                  Drop <code style={{ color: '#B449FF' }}>public/founder.jpg</code><br />to show founder photo
                </p>
              </div>
            </div>
            {/* Bottom name tag */}
            <div className="absolute -bottom-4 left-4 right-4 glass-dark rounded-xl px-4 py-2 flex items-center gap-3"
              style={{ border: '1px solid rgba(215,168,79,0.25)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#28C840', boxShadow: '0 0 8px #28C840' }} />
              <span className="text-xs font-bold" style={{ color: '#F8F8FF' }}>Tazz Smith</span>
              <span className="text-xs ml-auto" style={{ color: '#D7A84F' }}>MOB Founder</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Headline & CTAs */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 text-center lg:text-left">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <span className="section-label label-purple" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#B449FF', boxShadow: '0 0 6px #B449FF' }} />
              Official MOB Team · Bitcoin Powered
            </span>
          </div>

          {/* Main headline */}
          <div>
            <h1 className="font-black leading-[0.95] tracking-tight m-0" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.2rem)' }}>
              <span style={{ color: '#F8F8FF', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}>
                POSITION
              </span>
              <span style={{ color: '#F8F8FF', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}>
                YOURSELF EARLY
              </span>
              <span className="text-bitcoin" style={{ display: 'block', fontSize: '1.12em' }}>
                IN BITCOIN
              </span>
              <span className="text-italic-gold" style={{ display: 'block', fontSize: '0.55em', fontWeight: 500, letterSpacing: '0.01em', marginTop: 4 }}>
                with the MOB team
              </span>
            </h1>
          </div>

          {/* Supporting copy */}
          <p style={{ color: '#B0B0C4', fontSize: '1rem', lineHeight: 1.65, maxWidth: 480 }}
            className="mx-auto lg:mx-0">
            Get access to digital marketing tools, team training, and a simple
            Bitcoin-powered referral system designed for people who want structure before they start.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#cta" className="btn-purple px-8 py-4 rounded-2xl text-base font-bold gap-2">
              Create Free Account <span>›</span>
            </a>
            <a href="#training" className="btn-outline px-8 py-4 rounded-2xl text-base font-semibold gap-2">
              <span style={{ fontSize: 13 }}>▶</span> Watch Training First
            </a>
          </div>

          {/* Disclaimer */}
          <p style={{ color: '#666880', fontSize: '0.72rem' }} className="mx-auto lg:mx-0">
            This is an independent affiliate funnel and not the official Salarium Life website.
          </p>
        </div>
      </div>
    </section>
  )
}
