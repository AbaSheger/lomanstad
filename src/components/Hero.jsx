import introImg from '../assets/hero.png'
import { focusRing, focusRingDark } from '../constants'

export default function Hero() {
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
