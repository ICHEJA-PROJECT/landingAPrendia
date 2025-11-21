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
      <main className="w-full px-42 pt-36">
        <IntroductionTemplate />
        <div id="que-es">
          <WhatIaTemplate />
        </div>
        <div id="caracteristicas">
          <FeatureTemplate />
        </div>
        <div id="me-interesa">
          <InterestTemplate />
        </div>
  
      </main>
            <Footer/>
    </>
  )
}

export default App
