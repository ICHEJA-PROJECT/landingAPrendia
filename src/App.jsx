import Header from "./components/organism/headerOrganism"
import FeatureTemplate from "./components/template/featureTemplate"
import InterestTemplate from "./components/template/interestTemplat"
import IntroductionTemplate from "./components/template/introductionTemplate"
import WhatIaTemplate from "./components/template/whatIaTemplate"

function App() {


  return (
    <>
      <Header/>
      <main className="w-full px-42 pt-36">
          <IntroductionTemplate/>
          <WhatIaTemplate/>
          <FeatureTemplate/>
          <InterestTemplate/>
      </main>
    </>
  )
}

export default App
