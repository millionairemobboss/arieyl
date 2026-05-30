export default function AnnouncementBar() {
  return (
    <div
      className="w-full text-center text-xs py-2 px-4 font-medium tracking-wide"
      style={{
        background: 'linear-gradient(90deg, #8B2CFF 0%, #00D5FF 50%, #8B2CFF 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite',
        color: '#F8F8FF',
      }}
    >
      <style>{`@keyframes shimmer { 0%{background-position:0% 0%} 100%{background-position:200% 0%} }`}</style>
      ₿ This is an independent affiliate funnel and not the official Salarium Life website. &nbsp;|&nbsp; Free to join — No card required.
    </div>
  )
}
