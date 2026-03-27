import { focusRing, focusRingDark } from '../constants'

export default function CtaBanner() {
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
