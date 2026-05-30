import { useState, useRef, useCallback } from 'react'
import FadeUp from './FadeUp'

const VIDEOS = [
  { id: 'v1', title: 'Team Website Walkthrough', dur: '14:20', bg: 'linear-gradient(135deg,#1a0a2e,#2e0a5e)', ytId: 'dQw4w9WgXcQ' },
  { id: 'v2', title: 'How To Build A 2x2 Matrix', dur: '22:05', bg: 'linear-gradient(135deg,#0a1a2e,#0a2e4e)', ytId: 'dQw4w9WgXcQ' },
  { id: 'v3', title: 'Easy Duplication',           dur: '18:30', bg: 'linear-gradient(135deg,#2e1a0a,#4e2e0a)', ytId: 'dQw4w9WgXcQ' },
  { id: 'v4', title: 'Overview Video',             dur: '9:45',  bg: 'linear-gradient(135deg,#0a2e1a,#0a4e2e)', ytId: 'dQw4w9WgXcQ' },
]

export default function MatrixTraining() {
  const [selected, setSelected] = useState(VIDEOS[0])
  const [animKey, setAnimKey] = useState(0)
  const playerRef = useRef<HTMLDivElement>(null)

  const play = useCallback((v: typeof VIDEOS[0]) => {
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    setTimeout(() => { setSelected(v); setAnimKey(k => k + 1) }, 200)
  }, [])

  return (
    <section id="training" className="py-28 px-4" style={{ background: '#030305' }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-label label-purple">
                <span>◆</span> System & Training
              </span>
            </div>
            <h2 className="font-black m-0 mb-3" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#F8F8FF' }}>
              The <span className="text-bitcoin">2×2 Matrix</span> + Training Library
            </h2>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Matrix diagram */}
          <FadeUp>
            <div className="glass-dark rounded-3xl p-8 h-full" style={{ border: '1px solid rgba(139,44,255,0.2)' }}>
              <h3 className="font-bold text-base mb-6 text-center m-0" style={{ color: '#F8F8FF' }}>
                How The 2×2 Matrix Works
              </h3>
              <svg viewBox="0 0 320 260" className="w-full" style={{ maxHeight: 300 }}>
                {/* Connectors */}
                <line x1="160" y1="55"  x2="95"  y2="115" stroke="rgba(139,44,255,0.5)" strokeWidth="2" />
                <line x1="160" y1="55"  x2="225" y2="115" stroke="rgba(0,213,255,0.5)"  strokeWidth="2" />
                <line x1="95"  y1="160" x2="55"  y2="210" stroke="rgba(139,44,255,0.35)" strokeWidth="1.5" />
                <line x1="95"  y1="160" x2="135" y2="210" stroke="rgba(139,44,255,0.35)" strokeWidth="1.5" />
                <line x1="225" y1="160" x2="185" y2="210" stroke="rgba(0,213,255,0.35)"  strokeWidth="1.5" />
                <line x1="225" y1="160" x2="265" y2="210" stroke="rgba(0,213,255,0.35)"  strokeWidth="1.5" />
                {/* YOU node */}
                <circle cx="160" cy="38" r="28" fill="url(#youGrad)" />
                <text x="160" y="43" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">YOU</text>
                {/* Level 1 */}
                <circle cx="95"  cy="138" r="22" fill="url(#leftGrad)" />
                <text x="95"  y="143" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">LEFT</text>
                <circle cx="225" cy="138" r="22" fill="url(#rightGrad)" />
                <text x="225" y="143" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">RIGHT</text>
                {/* Level 2 — 4 circles */}
                {[55, 135, 185, 265].map((cx, i) => (
                  <g key={i}>
                    <circle cx={cx} cy="222" r="16" fill="rgba(30,20,60,0.9)" stroke={i < 2 ? 'rgba(139,44,255,0.5)' : 'rgba(0,213,255,0.5)'} strokeWidth="1.5" />
                    <text x={cx} y="227" textAnchor="middle" fontSize="9" fill="#A7A7B8">L{i+1}</text>
                  </g>
                ))}
                {/* Gradients */}
                <defs>
                  <radialGradient id="youGrad"><stop offset="0%" stopColor="#B449FF"/><stop offset="100%" stopColor="#6B0FFF"/></radialGradient>
                  <radialGradient id="leftGrad"><stop offset="0%" stopColor="#8B2CFF"/><stop offset="100%" stopColor="#4A0DCC"/></radialGradient>
                  <radialGradient id="rightGrad"><stop offset="0%" stopColor="#00D5FF"/><stop offset="100%" stopColor="#0099BB"/></radialGradient>
                </defs>
              </svg>
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(139,44,255,0.08)', border: '1px solid rgba(139,44,255,0.2)' }}>
                <p className="text-xs leading-relaxed m-0" style={{ color: '#A7A7B8' }}>
                  You earn when people you refer purchase a package <strong style={{ color: '#F8F8FF' }}>at or below your level</strong>. Your earnings grow as your team builds their own teams. Commissions flow peer-to-peer in ₿ Bitcoin.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT — Video cards */}
          <FadeUp delay={100}>
            <div className="flex flex-col gap-4">
              {/* Featured player */}
              <div ref={playerRef} className="rounded-2xl overflow-hidden" key={animKey}
                style={{ boxShadow: '0 16px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,44,255,0.15)' }}>
                <div className="flex items-center justify-between px-4 py-2" style={{ background: '#0D0D1A' }}>
                  <span className="text-xs font-bold" style={{ color: '#B449FF' }}>▶ Now Playing</span>
                  <div className="flex gap-1.5">
                    {['#FF5F57','#FFBD2E','#28C840'].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
                  </div>
                </div>
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${selected.ytId}?rel=0&modestbranding=1`}
                    title={selected.title} frameBorder="0" allowFullScreen />
                </div>
                <div className="px-4 py-3" style={{ background: '#0D0D1A' }}>
                  <p className="font-bold text-sm m-0" style={{ color: '#F8F8FF' }}>{selected.title}</p>
                </div>
              </div>

              {/* Video grid 2x2 */}
              <div className="grid grid-cols-2 gap-3">
                {VIDEOS.map(v => (
                  <div key={v.id} className="rounded-xl overflow-hidden card-lift"
                    style={{
                      border: v.id === selected.id ? '1px solid rgba(139,44,255,0.6)' : '1px solid rgba(255,255,255,0.07)',
                      background: '#0D0D1A',
                      transition: 'all 0.2s ease',
                    }}>
                    <div className="relative aspect-video flex items-center justify-center" style={{ background: v.bg }}>
                      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
                      <button onClick={() => play(v)}
                        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', cursor: 'pointer' }}>
                        <span style={{ color: '#FFF', fontSize: 12, marginLeft: 2 }}>▶</span>
                      </button>
                      <span className="absolute bottom-2 right-2 text-xs font-bold px-1.5 py-0.5 rounded"
                        style={{ background: 'rgba(0,0,0,0.75)', color: '#FFF' }}>{v.dur}</span>
                    </div>
                    <div className="px-3 py-2">
                      <p className="text-xs font-semibold m-0 leading-snug" style={{ color: '#F8F8FF' }}>{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#cta" className="btn-outline py-3 rounded-xl text-sm font-semibold gap-2 w-full">
                📚 View All Training
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
