import FadeUp from './FadeUp'

const CARDS = [
  { icon: '⚡', title: 'Funnel Builder',   desc: 'Build high-converting funnels in minutes',       color: '#8B2CFF' },
  { icon: '🌐', title: 'Website Builder',  desc: 'Launch professional sites fast',                  color: '#00D5FF' },
  { icon: '✉️', title: 'Email Marketing',  desc: 'Broadcast. Automate. Convert.',                   color: '#B449FF' },
  { icon: '📱', title: 'SMS Campaigns',    desc: 'Text marketing that gets results',                color: '#00D5FF' },
  { icon: '🤖', title: 'Automations',      desc: 'Save time. Scale faster with automation',         color: '#8B2CFF' },
  { icon: '📊', title: 'CRM & Pipelines', desc: 'Track leads and close more sales',                color: '#D7A84F' },
  { icon: '👥', title: 'Communities',      desc: 'Build your tribe and grow engagement',            color: '#00D5FF' },
  { icon: '🔗', title: 'Affiliate Manager',desc: 'Manage your team and payouts',                   color: '#B449FF' },
]

export default function WhatYouGet() {
  return (
    <section
      id="what-you-get"
      className="py-28 px-4 marble-bg-alt"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-5">
              <span className="section-label label-purple">
                <span>◆</span> What You Get
              </span>
            </div>
            <h2 className="font-black leading-tight m-0 mb-4" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#F8F8FF' }}>
              One Platform. <span className="text-bitcoin">Endless Leverage.</span>
            </h2>
            <p style={{ color: '#A7A7B8', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
              The same marketing stack agencies charge $3,000/month for — included in your membership.
            </p>
          </div>
        </FadeUp>

        {/* 4×2 grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((c, i) => (
            <FadeUp key={c.title} delay={i * 60}>
              <div
                className="glass-dark rounded-2xl p-6 flex flex-col gap-4 h-full card-lift"
                style={{ border: `1px solid rgba(255,255,255,0.08)`, minHeight: 160 }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${c.color}55`
                  el.style.boxShadow = `0 8px 32px ${c.color}22`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.08)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}35` }}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm m-0 mb-1" style={{ color: '#F8F8FF' }}>{c.title}</h3>
                  <p className="text-xs m-0 leading-relaxed" style={{ color: '#A7A7B8' }}>{c.desc}</p>
                </div>
                <div className="mt-auto h-0.5 w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <div className="text-center mt-12">
            <a href="#cta" className="btn-purple px-8 py-4 rounded-2xl text-sm font-bold">
              Access All Tools Free →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
