import Header from "./components/organism/headerOrganism"
import FeatureTemplate from "./components/template/featureTemplate"
import Footer from "./components/template/footerTemplat"
import InterestTemplate from "./components/template/interestTemplat"
import IntroductionTemplate from "./components/template/introductionTemplate"
import WhatIaTemplate from "./components/template/whatIaTemplate"

function App() {
  return (
    <>
      <Header />
      <main className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-42 pt-20 sm:pt-24 md:pt-32 lg:pt-36">
       

          <IntroductionTemplate />
     

         <div id="que-es" className="pt-6 md:pt-10">
          <WhatIaTemplate />
        </div>

        <div id="caracteristicas">
          <FeatureTemplate />
        </div>

        <div id="me-interesa">
          <InterestTemplate />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
