import { useState, useRef, useCallback, forwardRef } from 'react'

export interface TeamVideo {
  id: string
  title: string
  subtitle: string
  category: string
  youtubeId: string   // real YouTube ID goes here
  duration: string
  thumbBg: string
}

// Replace youtubeId values with real YouTube video IDs
export const TEAM_VIDEOS: TeamVideo[] = [
  {
    id: 'v1',
    title: 'Welcome to MOB — Your First 24 Hours',
    subtitle: 'Everything you need to do on day one, step by step.',
    category: 'Getting Started',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '12:30',
    thumbBg: 'linear-gradient(135deg, #1a0a2e, #2e0a5e)',
  },
  {
    id: 'v2',
    title: 'Bitcoin 101 — What You Actually Need to Know',
    subtitle: 'No jargon. Just the essentials to get paid.',
    category: 'Bitcoin Basics',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '18:45',
    thumbBg: 'linear-gradient(135deg, #0a1a2e, #0a2e4e)',
  },
  {
    id: 'v3',
    title: 'The MOB Matrix — How Commissions Flow',
    subtitle: 'A clear breakdown of exactly how you earn.',
    category: 'Compensation',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '22:05',
    thumbBg: 'linear-gradient(135deg, #2e1a0a, #4e2e0a)',
  },
  {
    id: 'v4',
    title: 'Build Your First Funnel in 30 Minutes',
    subtitle: 'Live walkthrough using the platform tools.',
    category: 'Marketing Tools',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '28:10',
    thumbBg: 'linear-gradient(135deg, #0a2e1a, #0a4e2e)',
  },
  {
    id: 'v5',
    title: 'Inviting Your First 3 People',
    subtitle: 'Script, system, and mindset for your first referrals.',
    category: 'Recruiting',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '15:20',
    thumbBg: 'linear-gradient(135deg, #1a2e0a, #2e4e0a)',
  },
  {
    id: 'v6',
    title: 'Email & SMS Automation Masterclass',
    subtitle: 'Set it once, earn while you sleep.',
    category: 'Automation',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '31:00',
    thumbBg: 'linear-gradient(135deg, #0a2e2e, #0a4e4e)',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  'Getting Started': '#8B2CFF',
  'Bitcoin Basics':  '#D7A84F',
  'Compensation':    '#00D5FF',
  'Marketing Tools': '#28C840',
  'Recruiting':      '#FF6B6B',
  'Automation':      '#B449FF',
}

// Used by parent to scroll here
export const VideoShowcase = forwardRef<HTMLElement>((_, ref) => {
  const [selected, setSelected] = useState<TeamVideo>(TEAM_VIDEOS[0])
  const [animKey, setAnimKey] = useState(0)
  const playerTopRef = useRef<HTMLDivElement>(null)

  const handlePlay = useCallback((video: TeamVideo) => {
    playerTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Small delay so scroll starts before animation fires
    setTimeout(() => {
      setSelected(video)
      setAnimKey((k) => k + 1)
    }, 250)
  }, [])

  const catColor = CATEGORY_COLORS[selected.category] ?? '#8B2CFF'

  return (
    <section
      id="videos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 px-4"
      style={{ background: '#F5F3FF' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-center mb-4">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: 'rgba(139,44,255,0.1)',
              border: '1px solid rgba(139,44,255,0.3)',
              color: '#8B2CFF',
            }}
          >
            Team Training Vault
          </span>
        </div>

        <div className="text-center mb-14">
          <h2
            className="text-5xl md:text-6xl font-black leading-none mb-4"
            style={{ color: '#0D0D1A' }}
          >
            Learn. Build. <span className="text-gold-on-white">Earn.</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#666' }}>
            Click any video to load it in the featured player. All training is included free.
          </p>
        </div>

        {/* ── Featured Player ── */}
        <div ref={playerTopRef} className="scroll-mt-24 mb-12">
          <div
            key={animKey}
            className="video-player-enter rounded-3xl overflow-hidden"
            style={{
              boxShadow: '0 24px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(139,44,255,0.15)',
            }}
          >
            {/* Player chrome bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ background: '#0D0D1A' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: catColor + '25', color: catColor }}
                >
                  {selected.category}
                </span>
                <span className="text-xs font-semibold" style={{ color: '#A7A7B8' }}>
                  {selected.duration}
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>
            </div>

            {/* Embedded YouTube player */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                key={selected.id}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                title={selected.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video info bar */}
            <div
              className="px-6 py-5"
              style={{ background: '#FFFFFF' }}
            >
              <h3 className="text-xl font-black mb-1" style={{ color: '#0D0D1A' }}>
                {selected.title}
              </h3>
              <p className="text-sm" style={{ color: '#666' }}>
                {selected.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ── Video Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM_VIDEOS.map((video) => {
            const isActive = video.id === selected.id
            const cc = CATEGORY_COLORS[video.category] ?? '#8B2CFF'
            return (
              <div
                key={video.id}
                className="video-thumb rounded-2xl overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: isActive ? `2px solid ${cc}` : '2px solid transparent',
                  boxShadow: isActive
                    ? `0 0 0 4px ${cc}20, 0 8px 24px rgba(0,0,0,0.1)`
                    : '0 4px 16px rgba(0,0,0,0.06)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.2s ease',
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative w-full aspect-video flex items-center justify-center"
                  style={{ background: video.thumbBg }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,44,255,0.25) 0%, rgba(0,0,0,0.3) 100%)',
                    }}
                  />
                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.18)',
                      border: '2px solid rgba(255,255,255,0.5)',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    <span style={{ color: '#FFF', fontSize: 18, marginLeft: 3 }}>▶</span>
                  </div>
                  <span
                    className="absolute bottom-3 right-3 text-xs font-bold px-2 py-1 rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.75)', color: '#FFF' }}
                  >
                    {video.duration}
                  </span>
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ background: cc + 'dd', color: '#FFF' }}
                  >
                    {video.category}
                  </span>
                  {isActive && (
                    <span
                      className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full"
                      style={{ background: '#28C840', color: '#FFF' }}
                    >
                      ▶ Playing
                    </span>
                  )}
                </div>

                {/* Info + CTA */}
                <div className="p-5">
                  <p
                    className="text-sm font-bold mb-1 leading-snug"
                    style={{ color: '#0D0D1A' }}
                  >
                    {video.title}
                  </p>
                  <button
                    onClick={() => handlePlay(video)}
                    className="mt-3 text-xs font-bold px-4 py-2 rounded-xl w-full"
                    style={{
                      background: isActive ? cc + '18' : 'rgba(139,44,255,0.08)',
                      color: isActive ? cc : '#8B2CFF',
                      border: `1px solid ${isActive ? cc + '40' : 'rgba(139,44,255,0.2)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(139,44,255,0.15)'
                        e.currentTarget.style.borderColor = 'rgba(139,44,255,0.5)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(139,44,255,0.08)'
                        e.currentTarget.style.borderColor = 'rgba(139,44,255,0.2)'
                      }
                    }}
                  >
                    {isActive ? '▶ Currently Playing' : '▶ Play Now'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#join-team"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold no-underline"
          >
            Access Full Training Library Free →
          </a>
        </div>
      </div>
    </section>
  )
})

VideoShowcase.displayName = 'VideoShowcase'
export default VideoShowcase
