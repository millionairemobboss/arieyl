import { trainingVideos } from '../data/trainingVideos'

export default function TrainingLibrary() {
  return (
    <section id="training" className="py-24 px-4" style={{ background: '#030305' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#00D5FF' }}
          >
            Team Training Vault
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            Learn Before
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00D5FF 0%, #8B2CFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              You Invest
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#A7A7B8' }}>
            Full access to the MOB training library the moment you create your free account.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingVideos.map((video) => (
            <div
              key={video.id}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 16px 48px rgba(139,44,255,0.25)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Thumbnail */}
              <div
                className="relative w-full aspect-video flex items-center justify-center"
                style={{ background: video.thumbnail }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,44,255,0.3) 0%, rgba(0,0,0,0.4) 100%)',
                  }}
                />
                {/* Play button */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '2px solid rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <span style={{ color: '#F8F8FF', fontSize: 18, marginLeft: 3 }}>▶</span>
                </div>
                {/* Duration */}
                <span
                  className="absolute bottom-3 right-3 text-xs font-bold px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', color: '#F8F8FF' }}
                >
                  {video.duration}
                </span>
                {/* Category */}
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(139,44,255,0.7)', color: '#F8F8FF' }}
                >
                  {video.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="text-sm font-bold leading-snug"
                  style={{ color: '#F8F8FF' }}
                >
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#join"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold no-underline"
          >
            Access Full Training Library →
          </a>
        </div>
      </div>
    </section>
  )
}
