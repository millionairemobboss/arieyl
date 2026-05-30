const MESSAGE = '⚡ LIMITED MOMENTUM WINDOW — New team members are positioning now in Bitcoin &nbsp;·&nbsp; ₿ Free to join &nbsp;·&nbsp; Peer-to-peer Bitcoin payouts &nbsp;·&nbsp; 12+ marketing tools included &nbsp;·&nbsp; '

export default function AnnouncementBar() {
  const repeated = Array.from({ length: 4 }, () => MESSAGE).join('')
  return (
    <div
      className="w-full overflow-hidden relative z-50"
      style={{
        background: 'linear-gradient(90deg, #0D0720 0%, #120930 50%, #0D0720 100%)',
        borderBottom: '1px solid rgba(139,44,255,0.3)',
        height: 36,
      }}
    >
      {/* Side glow */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0D0720, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0D0720, transparent)' }} />

      <div className="flex items-center h-full">
        <div className="marquee-track">
          {[1,2].map(n => (
            <span key={n} className="flex items-center whitespace-nowrap text-xs font-semibold px-4"
              style={{ color: '#B449FF', letterSpacing: '0.06em' }}
              dangerouslySetInnerHTML={{ __html: repeated }} />
          ))}
        </div>
      </div>
    </div>
  )
}
