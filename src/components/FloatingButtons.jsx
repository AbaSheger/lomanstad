import { useState, useEffect } from 'react'
import { focusRing, focusRingDark } from '../constants'

export default function FloatingButtons({ cookieAccepted }) {
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
