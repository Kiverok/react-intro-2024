import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'


export default function App() {
  return (
    <>
    <Header />
    <main>
      <TabsSection />
      <IntroSection />
      <TeachingSection />
<DifferencesSection />
    </main>
   </>
  )
}

 
