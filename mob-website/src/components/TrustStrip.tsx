import { trustItems } from '../data/trustItems'

export default function TrustStrip() {
  return (
    <section
      className="relative py-12 px-4 overflow-hidden"
      style={{ background: '#080810', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {trustItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-1">
              <span
                className="text-3xl md:text-4xl font-black text-glow-gold"
                style={{ color: '#D7A84F' }}
              >
                {item.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-center" style={{ color: '#A7A7B8' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
