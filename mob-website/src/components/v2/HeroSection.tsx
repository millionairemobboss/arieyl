import { useEffect, useRef, useState } from 'react'

const COINS = [
  { left: '4%',  dur: '7s',  delay: '0s',   size: 20 },
  { left: '10%', dur: '9s',  delay: '1.2s', size: 16 },
  { left: '88%', dur: '7.5s',delay: '0.8s', size: 20 },
  { left: '93%', dur: '5.5s',delay: '1.9s', size: 16 },
  { left: '97%', dur: '8.5s',delay: '0.2s', size: 22 },
]

const BARS = [0.4, 0.6, 0.35, 0.75, 0.5, 0.85, 0.6, 0.9, 0.65, 0.8, 0.7, 1.0]

export default function HeroSection() {
  const [parallax, setParallax] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const fn = () => {
      const pct = window.scrollY / window.innerHeight
      setParallax(Math.min(pct * 50, 50))
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
      {/* ── Founder photo as full-bleed background ── */}
      <img
        src="/founder.jpg"
        alt="Tazz Smith — MOB Team"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ transform: `translateY(${parallax}px) scale(1.06)`, transition: 'transform 0.05s linear', transformOrigin: 'top center' }}
      />

      {/* ── Multi-layer overlays for readability + brand feel ── */}
      {/* Base dark */}
      <div className="absolute inset-0" style={{ background: 'rgba(3,3,5,0.45)' }} />
      {/* Left-to-right gradient — slightly lighter on left (shows founder), darkens right for text */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(100deg, rgba(3,3,5,0.15) 0%, rgba(3,3,5,0.55) 50%, rgba(3,3,5,0.88) 100%)',
      }} />
      {/* Purple glow bloom from left/center */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 70% at 30% 60%, rgba(139,44,255,0.2) 0%, transparent 65%)',
      }} />
      {/* Cyan rim from top-right */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 50% 50% at 85% 20%, rgba(0,213,255,0.1) 0%, transparent 55%)',
      }} />
      {/* Bottom fade to page */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #030305)' }} />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(3,3,5,0.6), transparent)' }} />

      {/* ── Falling Bitcoin ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {COINS.map((c, i) => (
          <span key={i} className="btc-coin"
            style={{ left: c.left, fontSize: c.size, animationDuration: c.dur, animationDelay: c.delay }}>
            ₿
          </span>
        ))}
      </div>

      {/* ── Animated chart bars (left edge, very subtle) ── */}
      <div className="absolute left-0 bottom-0 top-0 w-28 pointer-events-none hidden lg:flex items-end pb-24 px-3 gap-0.5"
        style={{ opacity: 0.18 }}>
        {BARS.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm"
            style={{
              height: `${h * 160}px`,
              background: i % 2 === 0
                ? 'linear-gradient(to top, #8B2CFF, rgba(139,44,255,0.05))'
                : 'linear-gradient(to top, #00D5FF, rgba(0,213,255,0.02))',
              animationName: 'chart-bar',
              animationDuration: `${0.4 + i * 0.06}s`,
              animationTimingFunction: 'ease-out',
              animationFillMode: 'both',
              animationDelay: `${0.1 + i * 0.05}s`,
              transformOrigin: 'bottom',
            }} />
        ))}
      </div>

      {/* ── Content — centered with slight right bias ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-end pt-36 pb-24 min-h-screen">
        <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:max-w-xl">

          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <span className="section-label label-purple"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ background: '#B449FF', boxShadow: '0 0 6px #B449FF' }} />
              Official MOB Team · Bitcoin Powered
            </span>
          </div>

          {/* 3-line headline */}
          <h1 className="font-black leading-[0.92] tracking-tight m-0"
            style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}>
            <span style={{ color: '#FFFFFF', display: 'block', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
              POSITION
            </span>
            <span style={{ color: '#FFFFFF', display: 'block', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
              YOURSELF EARLY
            </span>
            <span className="text-bitcoin" style={{ display: 'block', fontSize: '1.08em' }}>
              IN BITCOIN
            </span>
            <span className="text-italic-gold"
              style={{ display: 'block', fontSize: '0.52em', fontWeight: 500, marginTop: 6 }}>
              with the MOB team
            </span>
          </h1>

          {/* Copy */}
          <p style={{ color: '#C8C8D8', fontSize: '1rem', lineHeight: 1.65, maxWidth: 460, textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
            className="mx-auto lg:mx-0">
            Get access to digital marketing tools, team training, and a simple
            Bitcoin-powered referral system designed for people who want structure before they start.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#cta"
              className="btn-purple px-8 py-4 rounded-2xl text-base font-bold gap-2">
              Create Free Account <span>›</span>
            </a>
            <a href="#training"
              className="btn-outline px-8 py-4 rounded-2xl text-base font-semibold gap-2">
              <span style={{ fontSize: 13 }}>▶</span> Watch Training First
            </a>
          </div>

          {/* Disclaimer */}
          <p style={{ color: '#888AA0', fontSize: '0.72rem', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
            className="mx-auto lg:mx-0">
            This is an independent affiliate funnel and not the official Salarium Life website.
          </p>
        </div>
      </div>
    </section>
  )
}
