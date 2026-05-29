const WALLET_STEPS = [
  {
    step: '1',
    title: 'Download a Bitcoin Wallet',
    body: 'We recommend Coinbase, Cash App, or Exodus. All are beginner-friendly and available on iOS and Android.',
    icon: '📲',
  },
  {
    step: '2',
    title: 'Create & Secure Your Wallet',
    body: 'Follow the setup wizard, write down your 12-word seed phrase, and store it somewhere safe offline. Never share it.',
    icon: '🔐',
  },
  {
    step: '3',
    title: 'Copy Your Bitcoin Address',
    body: 'Your wallet will generate a unique Bitcoin address (a string of letters and numbers). This is where you receive payments.',
    icon: '₿',
  },
  {
    step: '4',
    title: 'Add It to Your Profile',
    body: 'Paste your Bitcoin address into your platform profile. All commissions will flow directly to your wallet automatically.',
    icon: '✅',
  },
]

export default function WalletSetup() {
  return (
    <section className="py-24 px-4" style={{ background: '#030305' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#00D5FF' }}
          >
            Getting Paid
          </p>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ color: '#F8F8FF' }}
          >
            Set Up Your
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00D5FF 0%, #8B2CFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Bitcoin Wallet
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#A7A7B8' }}>
            You need a personal Bitcoin wallet to receive commissions. Setup takes about 5 minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {WALLET_STEPS.map((s) => (
            <div
              key={s.step}
              className="glass-card rounded-2xl p-7 flex gap-5"
              style={{ transition: 'border-color 0.2s ease' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,213,255,0.4)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{
                  background: 'rgba(0,213,255,0.1)',
                  border: '1px solid rgba(0,213,255,0.3)',
                }}
              >
                {s.icon}
              </div>
              <div>
                <div className="text-xs font-semibold mb-1" style={{ color: '#00D5FF' }}>
                  Step {s.step}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: '#F8F8FF' }}>
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: '#A7A7B8' }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-5 rounded-2xl text-center"
          style={{
            background: 'rgba(139,44,255,0.08)',
            border: '1px solid rgba(139,44,255,0.2)',
          }}
        >
          <p className="text-sm" style={{ color: '#A7A7B8' }}>
            <span style={{ color: '#B449FF' }}>₿</span> &nbsp; Full wallet setup training is included inside the platform when you create your free account.
          </p>
        </div>
      </div>
    </section>
  )
}
