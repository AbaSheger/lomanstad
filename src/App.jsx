import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import logoImg from './assets/logo.jpeg'
import hemstadningImg from './assets/hemstadning.jpeg'
import introImg from './assets/hero.png'
import flyttstadningImg from './assets/flyttstadning.jpeg'
import kontorsstadningImg from './assets/kontorsstadning.jpeg'
import storstadningImg from './assets/storstadning.jpeg'
import trappstadningImg from './assets/trappstadning.jpeg'
import fonsterputsningImg from './assets/fonsterputsning.jpeg'

const services = [
  {
    id: 'hemstadning',
    title: 'Hemstädning',
    icon: null,
    image: hemstadningImg,
    badge: 'RUT-avdrag',
    short: 'Återkommande städning hemma med RUT-avdrag.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Dammsugning av golv, mattor, soffor',
          'Golven moppas',
          'Avtorkning av dörrar, karmar, fönsterbrädor, möbler, lampor',
          'Putsning av speglar',
          'Tömning av papperskorgar',
        ],
      },
      {
        heading: 'Kök',
        items: [
          'Avtorkning av köksluckor, utsidan av vitvaror',
          'Avtorkning av ugn, insidan av mikron',
          'Rengöring av kakel, köksbänk, spis och diskho',
          'Tömning av sopor',
        ],
      },
      {
        heading: 'Badrum',
        items: [
          'Rengöring av dusch och handfat',
          'Rengöring av toalett',
          'Putsning av speglar',
          'Moppning av golv',
        ],
      },
    ],
  },
  {
    id: 'flyttstadning',
    title: 'Flyttstädning',
    icon: null,
    image: flyttstadningImg,
    badge: 'Garanti',
    short: 'Komplett flyttstädning med garanti.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Fönsterputs',
          'Rengöring av golvlister, dörrar, karmar',
          'Rengöring av garderober',
        ],
      },
      {
        heading: 'Kök',
        items: [
          'Rengöring av kyl, frys, spis, ugn, diskmaskin',
          'Rengöring av skåp och bänkar',
        ],
      },
      {
        heading: 'Badrum',
        items: [
          'Rengöring av toalett, dusch, badkar',
          'Rengöring av kakelväggar',
          'Rengöring av tvättmaskin, torktumlare',
        ],
      },
    ],
  },
  {
    id: 'storstadning',
    title: 'Storstädning',
    icon: null,
    image: storstadningImg,
    short: 'Grundlig rengöring av hela hemmet.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Dammsugning och moppning',
          'Avtorkning av alla ytor även högt upp',
          'Skakning av mattor',
        ],
      },
      {
        heading: 'Badrum',
        items: [
          'Rengöring av väggar, badkar, toalett',
          'Rengöring av kranar och golvbrunn',
        ],
      },
      {
        heading: 'Kök',
        items: [
          'Rengöring av ugn, mikro, fläkt',
          'Rengöring av köksluckor, spis, kakel',
        ],
      },
    ],
  },
  {
    id: 'kontorsstadning',
    title: 'Kontorsstädning',
    icon: null,
    image: kontorsstadningImg,
    short: 'Regelbunden städning av kontorslokaler.',
    details: [
      {
        heading: 'Alla rum',
        items: [
          'Dammsuga och fuktmoppa',
          'Damma fria ytor',
          'Ta bort fläckar',
          'Tömma papperskorgar',
        ],
      },
      {
        heading: 'Toaletter',
        items: ['Rengöra invändigt och utvändigt'],
      },
      {
        heading: 'Kök/pentry',
        items: [
          'Rengöra kök och avtorkning av bänkar',
          'Tömning av diskmaskin',
          'Avtorkning av kyl',
        ],
      },
    ],
  },
  {
    id: 'fonsterputsning',
    title: 'Fönsterputsning',
    icon: null,
    image: fonsterputsningImg,
    short: 'Professionell rengöring av glasytor.',
    details: [
      {
        heading: 'Vad ingår',
        items: [
          'Rengöring av glasytor invändigt och/eller utvändigt',
          'Grundlig borttagning av fläckar och fingeravtryck',
          'Avtorkning av fönsterbrädor, spröjs, karmar och fönsterbleck',
          'Avlägsning av damm runt lister och kanter',
        ],
      },
    ],
  },
  {
    id: 'trappstadning',
    title: 'Trappstädning',
    icon: null,
    image: trappstadningImg,
    short: 'Städning av trapphus och gemensamma utrymmen.',
    details: [
      {
        heading: 'Vad ingår',
        items: [
          'Våttorkning av trappor och vilplan',
          'Rengöring av handledare, räcken och ledstänger',
          'Avtorkning av entrédörrar, glasytor och lister',
          'Rengöring av lampknappar och trappräcken',
        ],
      },
    ],
  },
]

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a7abf]'
const focusRingDark = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a7abf] focus-visible:ring-offset-2'

/* ── Navbar ── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const sectionIds = ['hemstadning', 'flyttstadning', 'storstadning', 'kontorsstadning', 'fonsterputsning', 'trappstadning']
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      const threshold = window.innerHeight * 0.4
      let current = null
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = sectionIds[i]
          break
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Hemstädning', href: '#hemstadning' },
    { label: 'Flyttstädning', href: '#flyttstadning' },
    { label: 'Storstädning', href: '#storstadning' },
    { label: 'Kontorsstädning', href: '#kontorsstadning' },
    { label: 'Fönsterputsning', href: '#fonsterputsning' },
    { label: 'Trappstädning', href: '#trappstadning' },
  ]

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <nav aria-label="Huvudnavigering" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a] shadow-xl' : 'bg-[#2a2a2a] shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className={`flex-shrink-0 rounded-lg overflow-hidden ${focusRing}`}
            aria-label="Loman Städ – tillbaka till toppen"
          >
            <img
              src={logoImg}
              alt="Loman Städ AB logotyp"
              className="h-16 w-auto object-contain rounded-lg"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1" role="list">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="listitem"
                onClick={(e) => handleLink(e, link.href)}
                className={`text-sm px-3 py-2 rounded transition-all whitespace-nowrap ${focusRing} ${activeSection === link.href.slice(1) ? 'text-white bg-white/15 font-semibold' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={(e) => handleLink(e, '#kontakt')}
              className={`ml-3 bg-white text-[#1a7abf] hover:bg-blue-50 text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap ${focusRingDark}`}
            >
              Kontakt
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${focusRing}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-[#1a1a1a] border-t border-white/10 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
        aria-hidden={!menuOpen}
      >
        <div className="px-4 pt-2 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLink(e, link.href)}
              className={`block text-gray-300 hover:text-white py-3 text-sm border-b border-white/10 last:border-0 transition-colors min-h-[44px] flex items-center ${focusRing}`}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={(e) => handleLink(e, '#kontakt')}
            className={`block mt-3 text-center bg-white text-[#1a7abf] font-semibold py-3 rounded-full text-sm min-h-[44px] flex items-center justify-center ${focusRingDark}`}
            tabIndex={menuOpen ? 0 : -1}
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  const handleClick = (e) => {
    e.preventDefault()
    document.querySelector('#kontakt').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      aria-label="Introduktion"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0 bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${introImg})` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" aria-hidden="true" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 sm:mb-6 border border-white/30">
          Lokal städfirma i Säter
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-5 leading-tight tracking-tight">
          Din personliga städhjälp
        </h1>
        <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Loman Städ – trygg, noggrann och miljövänlig städservice för hem och företag.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#kontakt"
            onClick={handleClick}
            className={`inline-flex items-center justify-center bg-[#1a7abf] hover:bg-[#1568a3] text-white font-semibold px-8 py-4 sm:py-3.5 rounded-full transition-colors text-base shadow-lg shadow-blue-900/30 min-h-[48px] ${focusRingDark}`}
          >
            Begär offert
          </a>
          <a
            href="#tjanster"
            onClick={(e) => { e.preventDefault(); document.querySelector('#tjanster').scrollIntoView({ behavior: 'smooth' }) }}
            className={`inline-flex items-center justify-center bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-4 sm:py-3.5 rounded-full transition-colors text-base backdrop-blur-sm min-h-[48px] ${focusRing}`}
          >
            Våra tjänster
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Intro ── */
function Intro() {
  const trustPoints = [
    { icon: '🌿', title: 'Miljömedvetna', text: 'Enbart miljöcertifierade städprodukter' },
    { icon: '🛡️', title: 'Försäkrade städare', text: 'Utbildad personal med ansvarsförsäkring' },
    { icon: '💰', title: 'RUT-avdrag', text: 'Upp till 50% rabatt för privatpersoner' },
  ]

  return (
    <section aria-labelledby="intro-heading" className="bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="intro-heading" className="text-3xl font-bold text-gray-800 mb-3">Välkommen till Loman Städ</h2>
        <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto mb-6" aria-hidden="true" />
        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Vi hjälper privatpersoner och företag med trygg, noggrann och miljövänlig städservice.
          Vi arbetar med utbildad personal, tydliga rutiner och ansvarsförsäkring – så att du alltid
          kan känna dig trygg med resultatet.
        </p>
        {/* Stats strip */}
        <div className="grid grid-cols-3 mb-12 py-6 border-y border-gray-100">
          {[
            { number: '6', label: 'Tjänster' },
            { number: '50%', label: 'RUT-avdrag' },
            { number: '24h', label: 'Svarstid' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-2 sm:px-10 border-r last:border-r-0 border-gray-200">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#1a7abf]">{stat.number}</span>
              <span className="text-gray-500 text-xs sm:text-sm mt-0.5 text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="flex flex-col items-center gap-3 bg-[#f7f9fc] rounded-xl p-6 border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-2xl" aria-hidden="true">
                {point.icon}
              </div>
              <p className="font-semibold text-gray-800">{point.title}</p>
              <p className="text-gray-600 text-sm text-center">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Service Card ── */
function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `details-${service.id}`

  return (
    <article
      id={service.id}
      className="bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden
                 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 ease-out group"
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} – Loman Städ`}
          className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
        {service.badge && (
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white px-2.5 py-1 rounded-full shadow">
            {service.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-3">
          <h3 className="text-white text-lg font-bold drop-shadow">{service.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.short}</p>

        {/* Expanded details */}
        <div
          id={detailsId}
          role="region"
          aria-label={`Detaljer för ${service.title}`}
          style={{
            maxHeight: expanded ? '600px' : '0',
            opacity: expanded ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.3s ease',
          }}
        >
          <div className="border-t border-gray-100 pt-4 pb-2 space-y-4">
            {service.details.map((section) => (
              <div key={section.heading}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a7abf]" aria-hidden="true" />
                  <p className="font-bold text-gray-700 text-xs uppercase tracking-wider">
                    {section.heading}
                  </p>
                </div>
                <ul className="space-y-1.5 pl-3.5">
                  {section.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2 leading-snug">
                      <svg className="w-3.5 h-3.5 text-[#1a7abf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className={`mt-auto flex items-center justify-between w-full pt-3 text-sm font-semibold
                     text-[#1a7abf] border-t border-gray-100 hover:text-[#1568a3] transition-colors
                     min-h-[44px] group/btn ${focusRingDark}`}
        >
          <span>{expanded ? 'Dölj detaljer' : 'Se vad som ingår'}</span>
          <span className="w-8 h-8 rounded-full bg-blue-50 group-hover/btn:bg-blue-100 flex items-center justify-center transition-colors flex-shrink-0" aria-hidden="true">
            <svg
              className={`w-4 h-4 motion-safe:transition-transform motion-safe:duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </div>
    </article>
  )
}

/* ── CTA Banner ── */
function CtaBanner() {
  return (
    <section aria-label="Kontakta oss" className="bg-[#1568a3] py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white text-xl font-bold leading-snug">Redo att boka?</p>
          <p className="text-gray-400 text-sm mt-1">Vi svarar inom 24 timmar – utan bindningstid.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="tel:+460760076957"
            className={`inline-flex items-center justify-center gap-2 bg-white text-[#1a7abf] hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-colors text-sm min-h-[48px] ${focusRingDark}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            076-007 69 57
          </a>
          <a
            href="#kontakt"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontakt').scrollIntoView({ behavior: 'smooth' }) }}
            className={`inline-flex items-center justify-center bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm min-h-[48px] ${focusRing}`}
          >
            Begär offert
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Services ── */
function Services() {
  return (
    <section id="tjanster" aria-labelledby="services-heading" className="bg-[#f7f9fc] py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-800 mb-3">Våra tjänster</h2>
          <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto mb-4" aria-hidden="true" />
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Vi erbjuder ett brett utbud av städtjänster för både privatpersoner och företag i Säterområdet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why Us ── */
function WhyUs() {
  const points = [
    {
      icon: '📍',
      title: 'Lokal kännedom i Säter',
      text: 'Vi känner till Säter och omnejd och erbjuder en personlig service nära dig.',
    },
    {
      icon: '🌱',
      title: 'Miljömärkta rengöringsmedel',
      text: 'Vi använder enbart miljögodkända och skonsamma rengöringsprodukter.',
    },
    {
      icon: '✅',
      title: 'Försäkrad och utbildad personal',
      text: 'Vår personal är utbildad och ansvarsförsäkrad.',
    },
    {
      icon: '💸',
      title: 'RUT-avdrag upp till 50%',
      text: 'Som privatperson kan du utnyttja RUT-avdraget och betala halva priset.',
    },
    {
      icon: '🤝',
      title: 'Nöjd-Kund-Garanti',
      text: 'Vi vill att du ska vara helt nöjd med vår städning. Om något mot förmodan inte skulle vara utfört enligt vår checklista eller överenskommelse, kontakta oss inom 24 timmar efter avslutad städning. Vi kommer då ut och åtgärdar det som du inte är nöjd med helt kostnadsfritt.',
    },
  ]

  return (
    <section aria-labelledby="whyus-heading" className="bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="whyus-heading" className="text-3xl font-bold text-gray-800 mb-3">Varför välja Loman Städ?</h2>
          <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto" aria-hidden="true" />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
          {points.map((point) => (
            <li
              key={point.title}
              className="flex gap-4 items-start bg-[#f7f9fc] rounded-xl p-5 border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">
                {point.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

/* ── Contact ── */
function Contact() {
  const [formData, setFormData] = useState({
    fornamn: '', efternamn: '', epost: '', telefon: '', tjanst: '', meddelande: '', gdpr: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    if (formErrors[name]) setFormErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!formData.fornamn.trim()) errors.fornamn = 'Förnamn krävs'
    if (!formData.efternamn.trim()) errors.efternamn = 'Efternamn krävs'
    if (!formData.epost.trim()) errors.epost = 'E-post krävs'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.epost)) errors.epost = 'Ogiltig e-postadress'
    if (!formData.gdpr) errors.gdpr = 'Du måste godkänna integritetspolicyn'
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return }
    setFormErrors({})
    setSending(true)
    setSendError(false)
    emailjs.send(
      'service_4qlw0gr',
      'template_sxa9f83',
      {
        fornamn: formData.fornamn,
        efternamn: formData.efternamn,
        epost: formData.epost,
        telefon: formData.telefon,
        tjanst: formData.tjanst,
        meddelande: formData.meddelande,
      },
      'BPBbQ4VtSqYgBZE30'
    ).then(() => {
      setSending(false)
      setSubmitted(true)
    }).catch(() => {
      setSending(false)
      setSendError(true)
    })
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-[#1a7abf] focus:bg-white transition-colors placeholder-gray-300 min-h-[48px]'

  return (
    <>
    <section id="kontakt" aria-labelledby="contact-heading" className="bg-[#f7f9fc] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="contact-heading" className="text-3xl font-bold text-gray-800 mb-3">Begär offert</h2>
          <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto mb-3" aria-hidden="true" />
          <p className="text-gray-600 text-sm">Fyll i formuläret så återkommer vi inom 24 timmar.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 bg-[#1a7abf] rounded-2xl p-7 text-white">
            <h3 className="font-bold text-lg mb-1">Kontakta oss direkt</h3>
            <p className="text-gray-400 text-sm mb-6">Vi finns här för dig – hör av dig så hjälper vi dig!</p>
            <ul className="space-y-5">
              <li>
                <a href="tel:+460760076957" className={`flex items-center gap-3 group ${focusRing} rounded`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Telefon</p>
                    <p className="text-white font-semibold">076-007 69 57</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@lomanstad.se" className={`flex items-center gap-3 group ${focusRing} rounded`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">E-post</p>
                    <p className="text-white font-semibold">info@lomanstad.se</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Adress</p>
                  <p className="text-white font-semibold">Bergstäktsvägen 21, 783 32, Säter</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Öppettider</p>
                  <p className="text-white font-semibold">Bokning: Vardagar 08–17</p>
                  <p className="text-white text-sm">Städtjänster: 7 dagar i veckan</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-white rounded-2xl shadow-sm border border-green-100 p-10 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tack för din förfrågan!</h3>
            <p className="text-gray-600 text-sm">Vi återkommer inom 24 timmar.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fornamn" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Förnamn <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="fornamn" type="text" name="fornamn" required
                  aria-required="true" aria-describedby={formErrors.fornamn ? 'err-fornamn' : undefined}
                  value={formData.fornamn}
                  onChange={handleChange} className={`${inputClass} ${formErrors.fornamn ? 'border-red-400' : ''}`} placeholder="Anna"
                  autoComplete="given-name"
                />
                {formErrors.fornamn && <p id="err-fornamn" className="text-xs text-red-500 mt-1">{formErrors.fornamn}</p>}
              </div>
              <div>
                <label htmlFor="efternamn" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Efternamn <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="efternamn" type="text" name="efternamn" required
                  aria-required="true" aria-describedby={formErrors.efternamn ? 'err-efternamn' : undefined}
                  value={formData.efternamn}
                  onChange={handleChange} className={`${inputClass} ${formErrors.efternamn ? 'border-red-400' : ''}`} placeholder="Lindgren"
                  autoComplete="family-name"
                />
                {formErrors.efternamn && <p id="err-efternamn" className="text-xs text-red-500 mt-1">{formErrors.efternamn}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="epost" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  E-post <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="epost" type="email" name="epost" required
                  aria-required="true" aria-describedby={formErrors.epost ? 'err-epost' : undefined}
                  value={formData.epost}
                  onChange={handleChange} className={`${inputClass} ${formErrors.epost ? 'border-red-400' : ''}`} placeholder="anna@exempel.se"
                  autoComplete="email"
                />
                {formErrors.epost && <p id="err-epost" className="text-xs text-red-500 mt-1">{formErrors.epost}</p>}
              </div>
              <div>
                <label htmlFor="telefon" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Telefon
                </label>
                <input
                  id="telefon" type="tel" name="telefon" value={formData.telefon}
                  onChange={handleChange} className={inputClass} placeholder="076-007 69 57"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div>
              <label htmlFor="tjanst" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Tjänst
              </label>
              <select
                id="tjanst" name="tjanst" value={formData.tjanst}
                onChange={handleChange} className={inputClass}
              >
                <option value="">Välj tjänst...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="meddelande" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Meddelande
              </label>
              <textarea
                id="meddelande" name="meddelande" rows={4}
                value={formData.meddelande} onChange={handleChange}
                className={`${inputClass} min-h-[120px] resize-none`}
                placeholder="Berätta gärna mer om vad du behöver hjälp med..."
              />
            </div>
            {/* GDPR consent */}
            <div className="flex items-start gap-3">
              <input
                id="gdpr" name="gdpr" type="checkbox"
                required aria-required="true"
                checked={formData.gdpr} onChange={handleChange}
                className={`mt-0.5 w-4 h-4 accent-[#1a7abf] flex-shrink-0 cursor-pointer ${focusRingDark}`}
              />
              <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed">
                Jag godkänner att Loman Städ lagrar mina uppgifter för att hantera min förfrågan, i enlighet med{' '}
                <button
                  type="button"
                  onClick={() => setShowPrivacy(true)}
                  className={`text-[#1a7abf] underline hover:text-[#1568a3] transition-colors ${focusRingDark}`}
                >
                  integritetspolicyn
                </button>
                . <span aria-hidden="true" className="text-red-400">*</span>
              </label>
            </div>
            {formErrors.gdpr && <p className="text-xs text-red-500 -mt-2">{formErrors.gdpr}</p>}

            <button
              type="submit"
              disabled={sending}
              className={`w-full bg-[#1a7abf] hover:bg-[#1568a3] disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors text-sm tracking-wide shadow-md shadow-blue-200 min-h-[52px] ${focusRingDark}`}
            >
              {sending ? 'Skickar...' : 'Skicka förfrågan'}
            </button>
            {sendError && (
              <p className="text-center text-sm text-red-500">Något gick fel. Försök igen eller ring oss direkt.</p>
            )}
            <p className="text-center text-xs text-gray-400">
              <span aria-hidden="true">*</span> Obligatoriska fält · Vi svarar inom 24 timmar · Ingen bindningstid
            </p>
          </form>
        )}
          </div>
        </div>
      </div>
    </section>

    {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  )
}

/* ── Privacy Modal ── */
function PrivacyModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog" aria-modal="true" aria-labelledby="privacy-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 id="privacy-title" className="text-lg font-bold text-gray-800">Integritetspolicy</h2>
          <button
            onClick={onClose}
            aria-label="Stäng integritetspolicy"
            className={`w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors ${focusRingDark}`}
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto text-sm text-gray-600 space-y-4 leading-relaxed">
          <p><strong className="text-gray-800">Personuppgiftsansvarig:</strong> Loman Städ AB, Bergstäktsvägen 21, 783 32, Säter. Kontakt: info@lomanstad.se</p>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">Vilka uppgifter samlar vi in?</h3>
            <p>Vi samlar in de uppgifter du lämnar i kontaktformuläret: namn, e-postadress, telefonnummer samt ditt meddelande.</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">Varför samlar vi in uppgifterna?</h3>
            <p>Uppgifterna används enbart för att besvara din förfrågan och återkomma med offert. Vi säljer eller delar inte dina uppgifter med tredje part. Den rättsliga grunden är artikel 6.1 b i dataskyddsförordningen (GDPR) — behandlingen är nödvändig för att vidta åtgärder på din begäran innan ett avtal ingås.</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">Hur länge sparar vi uppgifterna?</h3>
            <p>Vi sparar dina uppgifter i högst 12 månader, därefter raderas de. Uppgifter kopplade till ingångna avtal sparas enligt bokföringslagen (7 år).</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">Dina rättigheter</h3>
            <p>Du har rätt att begära tillgång till, rättelse eller radering av dina uppgifter, begränsning av behandlingen, dataportabilitet samt att invända mot behandlingen. Kontakta oss på info@lomanstad.se så hjälper vi dig.</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">Klagomål</h3>
            <p>Om du anser att vi hanterar dina uppgifter felaktigt kan du kontakta <strong>Integritetsskyddsmyndigheten (IMY)</strong> på imy.se.</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">Cookies</h3>
            <p>Webbplatsen använder enbart tekniskt nödvändiga cookies (för att spara ditt cookiegodkännande). Inga spårnings- eller marknadsföringscookies används.</p>
          </div>

          <p className="text-gray-400 text-xs">Senast uppdaterad: mars 2026</p>
        </div>
        <div className="px-6 pb-6 pt-3 border-t border-gray-100">
          <button
            onClick={onClose}
            className={`w-full bg-[#1a7abf] hover:bg-[#1568a3] text-white font-semibold py-3 rounded-xl transition-colors text-sm ${focusRingDark}`}
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Cookie Banner ── */
function CookieBanner({ cookieAccepted, onAccept }) {
  if (cookieAccepted) return null

  return (
    <div
      role="alertdialog"
      aria-label="Cookiemeddelande"
      className="fixed bottom-0 left-0 right-0 z-[90] bg-gray-900 text-white px-4 py-4 sm:py-5"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
          Vi använder nödvändiga cookies för att webbplatsen ska fungera korrekt. Inga spårningscookies används.{' '}
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={onAccept}
            className={`bg-[#1a7abf] hover:bg-[#1568a3] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors min-h-[44px] ${focusRing}`}
          >
            Godkänn
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Floating buttons ── */
function FloatingButtons({ cookieAccepted }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 150)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <div className={`fixed right-4 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${cookieAccepted ? 'bottom-6' : 'bottom-24 sm:bottom-6'}`}>
      {/* Scroll to top — desktop only */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scrolla upp till toppen"
        className={`hidden lg:flex w-11 h-11 bg-white border border-gray-200 rounded-full shadow-lg items-center justify-center text-[#1a7abf] hover:bg-blue-50 hover:border-blue-200 transition-colors ${focusRingDark}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Floating call button — mobile only */}
      <a
        href="tel:+460760076957"
        aria-label="Ring oss: 076-007 69 57"
        className={`lg:hidden flex items-center gap-2 bg-[#1a7abf] hover:bg-[#1568a3] text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-blue-900/30 transition-colors ${focusRing}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-sm">Ring oss</span>
      </a>
    </div>
  )
}

/* ── Footer ── */
function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="Loman Städ AB logotyp"
              className="h-20 w-auto object-contain rounded-lg mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Lokal städfirma i Säter med fokus på kvalitet, miljö och trygghet.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Tjänster">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Tjänster</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(`#${s.id}`) }}
                    className={`text-gray-400 hover:text-white text-sm transition-colors ${focusRing}`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <span aria-hidden="true">📞</span>
                  <a href="tel:+460760076957" className={`hover:text-white transition-colors min-h-[44px] flex items-center ${focusRing}`}>
                    <span className="sr-only">Telefon: </span>076-007 69 57
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span aria-hidden="true">✉️</span>
                  <a href="mailto:info@lomanstad.se" className={`hover:text-white transition-colors min-h-[44px] flex items-center ${focusRing}`}>
                    <span className="sr-only">E-post: </span>info@lomanstad.se
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span aria-hidden="true">📍</span>
                  <span>Bergstäktsvägen 21, 783 32, Säter</span>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/75 text-xs">
          <span>© 2026 Loman Städ. Alla rättigheter förbehållna.</span>
          <span>Byggd av <a href="https://abasheger.github.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Abenezer Anglo</a></span>
        </div>
      </div>
    </footer>
  )
}

/* ── App ── */
export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(() => localStorage.getItem('cookies_accepted') === 'true')
  const acceptCookie = () => {
    localStorage.setItem('cookies_accepted', 'true')
    setCookieAccepted(true)
  }

  return (
    <>
      {/* Skip to main content – for keyboard & screen reader users */}
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
        <Contact />
      </main>

      <Footer />
      <FloatingButtons cookieAccepted={cookieAccepted} />
      <CookieBanner cookieAccepted={cookieAccepted} onAccept={acceptCookie} />
    </>
  )
}
