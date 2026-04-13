import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpeg'
import { focusRing, focusRingDark } from '../constants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const sectionIds = ['hemstadning', 'flyttstadning', 'storstadning', 'kontorsstadning', 'fonsterputsning', 'trappstadning', 'prislista']
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
    { label: 'Prislista', href: '#prislista' },
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
