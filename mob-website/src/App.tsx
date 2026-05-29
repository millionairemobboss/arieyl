import { useRef } from 'react'
import TeamNav from './components/team/TeamNav'
import VideoHero from './components/team/VideoHero'
import TeamIntro from './components/team/TeamIntro'
import VideoShowcase from './components/team/VideoShowcase'
import WhyBitcoin from './components/team/WhyBitcoin'
import JoinTeamCTA from './components/team/JoinTeamCTA'
import TeamFooter from './components/team/TeamFooter'
import ScrollingBitcoin from './components/team/ScrollingBitcoin'

export default function App() {
  const videoSectionRef = useRef<HTMLElement>(null)

  const scrollToVideos = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ background: '#030305', minHeight: '100vh' }}>
      <ScrollingBitcoin />
      <TeamNav />
      <main>
        <VideoHero onWatchClick={scrollToVideos} />
        <TeamIntro />
        <VideoShowcase ref={videoSectionRef} />
        <WhyBitcoin />
        <JoinTeamCTA />
      </main>
      <TeamFooter />
    </div>
  )
}
