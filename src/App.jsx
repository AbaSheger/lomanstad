import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import CtaBanner from './components/CtaBanner'
import WhyUs from './components/WhyUs'
import Prislista from './components/Prislista'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import CookieBanner from './components/CookieBanner'
import { sanityClient, QUERIES } from './lib/sanity'
import { services as hardcodedServices } from './data/services'

const defaultSettings = {
  heroTitle: 'Din personliga städhjälp',
  heroSubtitle: 'Loman Städ – trygg, noggrann och miljövänlig städservice för hem och företag.',
  phone: '076-007 69 57',
  email: 'info@lomanstad.se',
  address: 'Bergstäktsvägen 21, 783 32, Säter',
}

const defaultCtaBanner = { headline: 'Redo att boka?', subtext: 'Vi svarar inom 24 timmar – utan bindningstid.' }

export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(() => localStorage.getItem('cookies_accepted') === 'true')
  const [services, setServices] = useState(hardcodedServices)
  const [settings, setSettings] = useState(defaultSettings)
  const [prislista, setPrislista] = useState(null)
  const [whyUs, setWhyUs] = useState(null)
  const [intro, setIntro] = useState(null)
  const [ctaBanner, setCtaBanner] = useState(defaultCtaBanner)

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(QUERIES.services),
      sanityClient.fetch(QUERIES.siteSettings),
      sanityClient.fetch(QUERIES.prislista),
      sanityClient.fetch(QUERIES.whyUs),
      sanityClient.fetch(QUERIES.intro),
      sanityClient.fetch(QUERIES.ctaBanner),
    ]).then(([sanityServices, sanitySettings, sanityPrislista, sanityWhyUs, sanityIntro, sanityCtaBanner]) => {
      if (sanityServices?.length) {
        setServices(sanityServices.map(s => ({
          ...s,
          id: s._id.replace('service-', ''),
          image: s.imageUrl || hardcodedServices.find(hs => hs.id === s._id.replace('service-', ''))?.image,
        })))
      }
      if (sanitySettings) setSettings(sanitySettings)
      if (sanityPrislista) setPrislista(sanityPrislista)
      if (sanityWhyUs) setWhyUs(sanityWhyUs)
      if (sanityIntro) setIntro(sanityIntro)
      if (sanityCtaBanner) setCtaBanner(sanityCtaBanner)
    }).catch((err) => console.error('Sanity fetch failed:', err))
  }, [])

  const acceptCookie = () => {
    localStorage.setItem('cookies_accepted', 'true')
    setCookieAccepted(true)
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#1a7abf] focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Hoppa till huvudinnehåll
      </a>

      <Navbar />

      <main id="main-content" className="pt-16">
        <Hero settings={settings} />
        <Intro intro={intro} />
        <Services services={services} />
        <CtaBanner ctaBanner={ctaBanner} />
        <WhyUs whyUs={whyUs} />
        <Prislista prislista={prislista} />
        <Contact services={services} settings={settings} />
      </main>

      <Footer services={services} settings={settings} />
      <FloatingButtons cookieAccepted={cookieAccepted} />
      <CookieBanner cookieAccepted={cookieAccepted} onAccept={acceptCookie} />
    </>
  )
}
