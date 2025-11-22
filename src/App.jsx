import { useState } from "react"
import Header from "./components/organism/headerOrganism"
import FeatureTemplate from "./components/template/featureTemplate"
import Footer from "./components/template/footerTemplat"
import InterestTemplate from "./components/template/interestTemplat"
import IntroductionTemplate from "./components/template/introductionTemplate"
import WhatIaTemplate from "./components/template/whatIaTemplate"
import ScrollToTop from "./components/atoms/scrollToTop"
import VideoModal from "./components/organism/videoModal"

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(true)

  return (
    <>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <Header />
      <main className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-20 pt-20 sm:pt-24 md:pt-32 lg:pt-36">

          <IntroductionTemplate />

         <section id="que-es" className="pt-6 md:pt-10">
          <WhatIaTemplate />
        </section>

        <section id="caracteristicas">
          <FeatureTemplate />
        </section>

        <section id="me-interesa">
          <InterestTemplate />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
