import { packages } from '../data/packages'

export default function PackageLadder() {
  return (
    <section id="packages" className="py-24 px-4" style={{ background: '#030305' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#D7A84F' }}
          >
            Investment Levels
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            Choose Your
            <br />
            <span style={{ color: '#D7A84F' }} className="text-glow-gold">
              Entry Point
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#A7A7B8' }}>
            You earn on referrals who match your level or below. Higher packages unlock higher earning ceilings.
          </p>
        </div>

        {/* Package grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.price}
              className="package-card glass-card rounded-2xl p-6 flex flex-col gap-4 relative"
              style={
                pkg.highlight
                  ? {
                      border: '1px solid rgba(215,168,79,0.6)',
                      boxShadow: '0 0 30px rgba(215,168,79,0.2), 0 0 60px rgba(139,44,255,0.15)',
                    }
                  : {}
              }
            >
              {pkg.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(90deg, #D7A84F, #F0C870)',
                    color: '#030305',
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Price */}
              <div>
                <div
                  className="text-3xl font-black"
                  style={{ color: pkg.highlight ? '#D7A84F' : '#F8F8FF' }}
                >
                  ${pkg.price.toLocaleString()}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mt-1"
                  style={{ color: '#A7A7B8' }}
                >
                  {pkg.label}
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px"
                style={{ background: pkg.highlight ? 'rgba(215,168,79,0.3)' : 'rgba(255,255,255,0.08)' }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2 list-none p-0 m-0 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs" style={{ color: '#A7A7B8' }}>
                    <span style={{ color: pkg.highlight ? '#D7A84F' : '#8B2CFF', marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className="block text-center py-3 rounded-xl text-sm font-bold no-underline mt-2"
                style={
                  pkg.highlight
                    ? {
                        background: 'linear-gradient(135deg, #D7A84F, #F0C870)',
                        color: '#030305',
                      }
                    : {
                        background: 'rgba(139,44,255,0.15)',
                        border: '1px solid rgba(139,44,255,0.4)',
                        color: '#B449FF',
                      }
                }
              >
                Select Package
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#A7A7B8', opacity: 0.6 }}>
          Past profits do not guarantee or predict future earnings. Results vary based on referrals, activity, positioning, package movement, participation, and effort.
        </p>
      </div>
    </section>
  )
}
