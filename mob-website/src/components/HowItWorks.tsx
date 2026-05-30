import { steps } from '../data/steps'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4" style={{ background: '#080810' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#00D5FF' }}
          >
            Simple Process
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            Three Steps to
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00D5FF 0%, #8B2CFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Getting Started
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line - desktop only */}
          <div
            className="absolute top-10 left-1/6 right-1/6 h-px hidden md:block"
            style={{
              background: 'linear-gradient(90deg, rgba(139,44,255,0.5) 0%, rgba(0,213,255,0.5) 100%)',
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-8 flex flex-col gap-4 relative"
            >
              {/* Number badge */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black"
                style={{
                  background: i === 0
                    ? 'linear-gradient(135deg, #8B2CFF, #B449FF)'
                    : i === 1
                    ? 'linear-gradient(135deg, #5B1BCC, #8B2CFF)'
                    : 'linear-gradient(135deg, #00D5FF, #0099CC)',
                  color: '#F8F8FF',
                  boxShadow: i === 0
                    ? '0 4px 20px rgba(139,44,255,0.4)'
                    : i === 2
                    ? '0 4px 20px rgba(0,213,255,0.3)'
                    : '0 4px 20px rgba(91,27,204,0.3)',
                }}
              >
                {step.number}
              </div>

              <div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: '#F8F8FF' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: '#D7A84F' }}
                >
                  {step.description}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#A7A7B8' }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
