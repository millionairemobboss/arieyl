import FadeUp from './FadeUp'

const STEPS = [
  {
    num: '1',
    icon: '👤',
    title: 'Create Your Free Account',
    desc: 'Sign up in minutes. Fast, free, and gives you instant access to the platform, tools, and your personal affiliate link.',
  },
  {
    num: '2',
    icon: '📦',
    title: 'Select Your Package',
    desc: 'Choose the level that fits your goals — from $10 to $4,000. Higher levels unlock higher earning potential.',
  },
  {
    num: '3',
    icon: '💰',
    title: 'Invite Others And Get Paid',
    desc: 'Earn Bitcoin when your team takes action. Commissions paid peer-to-peer, directly to your wallet.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-4" style={{ background: '#030305' }}>
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-5">
              <span className="section-label label-cyan">
                <span>◇</span> How It Works
              </span>
            </div>
            <h2 className="font-black m-0 mb-3" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#F8F8FF' }}>
              Three Steps to <span className="text-bitcoin">Getting Started</span>
            </h2>
          </div>
        </FadeUp>

        {/* Steps row */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 md:gap-0 relative">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex flex-col md:flex-row items-center flex-1">
              <FadeUp delay={i * 120} className="flex-1 w-full">
                <div
                  className="glass-dark rounded-3xl p-8 flex flex-col gap-5 h-full card-lift"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {/* Number */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-3xl shrink-0"
                      style={{
                        background: i === 0
                          ? 'linear-gradient(135deg, #6B0FFF, #B449FF)'
                          : i === 1
                          ? 'linear-gradient(135deg, #4A0DCC, #8B2CFF)'
                          : 'linear-gradient(135deg, #008BB0, #00D5FF)',
                        boxShadow: i === 0 ? '0 4px 20px rgba(139,44,255,0.5)' : i === 2 ? '0 4px 20px rgba(0,213,255,0.4)' : '0 4px 20px rgba(91,27,204,0.4)',
                        color: '#FFF',
                      }}
                    >
                      {s.num}
                    </div>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base m-0 mb-2" style={{ color: '#F8F8FF' }}>{s.title}</h3>
                    <p className="text-sm m-0 leading-relaxed" style={{ color: '#A7A7B8' }}>{s.desc}</p>
                  </div>
                </div>
              </FadeUp>

              {/* Connector */}
              {i < STEPS.length - 1 && (
                <div className="step-connector hidden md:block mx-4 shrink-0" style={{ width: 60, marginTop: -40 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
