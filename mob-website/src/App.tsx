import AnnouncementBar from './components/AnnouncementBar'
import HeaderNav from './components/HeaderNav'
import HeroSection from './components/HeroSection'
import TrustStrip from './components/TrustStrip'
import FeatureGrid from './components/FeatureGrid'
import HowItWorks from './components/HowItWorks'
import PackageLadder from './components/PackageLadder'
import MatrixExplainer from './components/MatrixExplainer'
import TrainingLibrary from './components/TrainingLibrary'
import ProofSection from './components/ProofSection'
import WalletSetup from './components/WalletSetup'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import FooterDisclosure from './components/FooterDisclosure'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <div style={{ background: '#030305', minHeight: '100vh' }}>
      <AnnouncementBar />
      <HeaderNav />
      <main>
        <HeroSection />
        <TrustStrip />
        <FeatureGrid />
        <HowItWorks />
        <PackageLadder />
        <MatrixExplainer />
        <TrainingLibrary />
        <ProofSection />
        <WalletSetup />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterDisclosure />
      <StickyMobileCTA />
    </div>
  )
}
