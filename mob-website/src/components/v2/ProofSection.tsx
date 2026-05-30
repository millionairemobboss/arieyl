import FadeUp from './FadeUp'

export default function ProofSection() {
  return (
    <section id="proof" className="py-20 px-4" style={{ background: '#080810' }}>
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <div
            className="rounded-3xl px-8 py-14 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0D0720,#080810)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            {/* Shield icons */}
            <div className="flex justify-center gap-6 mb-6">
              {['🛡️','📊','🛡️'].map((icon, i) => (
                <div key={i} className="text-3xl" style={{ opacity: i === 1 ? 1 : 0.4, fontSize: i === 1 ? 44 : 28 }}>
                  {icon}
                </div>
              ))}
            </div>

            {/* Diamond divider */}
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="divider-gold flex-1 max-w-32" />
              <span style={{ color: '#D7A84F', fontSize: 12, letterSpacing: '0.2em', fontWeight: 700 }}>◆ PROOF ◆</span>
              <div className="divider-gold flex-1 max-w-32" />
            </div>

            <h2
              className="font-black uppercase tracking-tight leading-none m-0 mb-4"
              style={{ fontSize: 'clamp(2rem,6vw,4.5rem)', color: '#F8F8FF', textShadow: '0 0 40px rgba(139,44,255,0.2)' }}
            >
              Documentation Beats{' '}
              <span className="text-bitcoin">Conversation</span>
            </h2>

            <p style={{ color: '#A7A7B8', fontSize: '0.9rem' }}>
              Results vary and are not guaranteed.
            </p>

            {/* Mini stat row */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { v: '2,400+', l: 'Active Members' },
                { v: '9,100+', l: 'Packages Activated' },
                { v: '₿ 47+',  l: 'Bitcoin Paid Out' },
              ].map(s => (
                <div key={s.l} className="flex flex-col items-center gap-1">
                  <span className="font-black text-2xl" style={{ color: '#D7A84F', animation: 'count-glow 3s ease-in-out infinite' }}>
                    {s.v}
                  </span>
                  <span className="text-xs uppercase tracking-widest" style={{ color: '#A7A7B8' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
