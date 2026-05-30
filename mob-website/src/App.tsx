import AnnouncementBar from './components/v2/AnnouncementBar'
import NavBar        from './components/v2/NavBar'
import HeroSection   from './components/v2/HeroSection'
import FeatureStrip  from './components/v2/FeatureStrip'
import WhatYouGet    from './components/v2/WhatYouGet'
import HowItWorks    from './components/v2/HowItWorks'
import PackageLevels from './components/v2/PackageLevels'
import MatrixTraining from './components/v2/MatrixTraining'
import ProofSection  from './components/v2/ProofSection'
import FinalCTA      from './components/v2/FinalCTA'
import SiteFooter    from './components/v2/SiteFooter'

export default function App() {
  return (
    <div style={{ background: '#030305', minHeight: '100vh' }}>
      <AnnouncementBar />
      <NavBar />
      <main>
        <HeroSection />
        <FeatureStrip />
        <WhatYouGet />
        <HowItWorks />
        <PackageLevels />
        <MatrixTraining />
        <ProofSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
