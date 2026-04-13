import { useState } from 'react'
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

export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(() => localStorage.getItem('cookies_accepted') === 'true')
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
        <Hero />
        <Intro />
        <Services />
        <CtaBanner />
        <WhyUs />
        <Prislista />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons cookieAccepted={cookieAccepted} />
      <CookieBanner cookieAccepted={cookieAccepted} onAccept={acceptCookie} />
    </>
  )
}
