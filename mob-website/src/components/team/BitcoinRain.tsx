const COINS = [
  { left: '5%',  delay: '0s',    duration: '6s',  size: 28, opacity: 0.9 },
  { left: '12%', delay: '1.2s',  duration: '8s',  size: 20, opacity: 0.7 },
  { left: '20%', delay: '0.5s',  duration: '7s',  size: 32, opacity: 0.8 },
  { left: '28%', delay: '2.1s',  duration: '5.5s',size: 18, opacity: 0.6 },
  { left: '35%', delay: '0.8s',  duration: '9s',  size: 24, opacity: 0.85 },
  { left: '42%', delay: '3.0s',  duration: '6.5s',size: 22, opacity: 0.7 },
  { left: '50%', delay: '1.5s',  duration: '7.5s',size: 30, opacity: 0.9 },
  { left: '57%', delay: '0.3s',  duration: '8.5s',size: 16, opacity: 0.6 },
  { left: '64%', delay: '2.5s',  duration: '6s',  size: 26, opacity: 0.8 },
  { left: '71%', delay: '1.0s',  duration: '7s',  size: 20, opacity: 0.7 },
  { left: '78%', delay: '0.7s',  duration: '9.5s',size: 28, opacity: 0.85 },
  { left: '85%', delay: '1.8s',  duration: '5s',  size: 18, opacity: 0.6 },
  { left: '91%', delay: '3.5s',  duration: '8s',  size: 24, opacity: 0.75 },
  { left: '96%', delay: '0.9s',  duration: '6.8s',size: 20, opacity: 0.65 },
  { left: '8%',  delay: '4.2s',  duration: '7.2s',size: 22, opacity: 0.8 },
  { left: '32%', delay: '2.8s',  duration: '8.2s',size: 14, opacity: 0.55 },
  { left: '60%', delay: '1.3s',  duration: '6.3s',size: 26, opacity: 0.7 },
  { left: '75%', delay: '3.9s',  duration: '9s',  size: 16, opacity: 0.6 },
  { left: '48%', delay: '0.2s',  duration: '7.8s',size: 20, opacity: 0.75 },
  { left: '88%', delay: '2.2s',  duration: '5.8s',size: 28, opacity: 0.8 },
]

export default function BitcoinRain() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {COINS.map((coin, i) => (
        <span
          key={i}
          className="btc-coin"
          style={{
            left: coin.left,
            fontSize: coin.size,
            opacity: coin.opacity,
            animationDuration: `${coin.duration}, ${parseFloat(coin.duration) * 1.6}s`,
            animationDelay: `${coin.delay}, ${coin.delay}`,
          }}
        >
          ₿
        </span>
      ))}
    </div>
  )
}
