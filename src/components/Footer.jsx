import logoImg from '../assets/logo.jpeg'
import { focusRing } from '../constants'

export default function Footer({ services = [], settings = {} }) {
  const {
    phone = '076-007 69 57',
    email = 'info@lomanstad.se',
    address = 'Bergstäktsvägen 21, 783 32, Säter',
  } = settings

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <img src={logoImg} alt="Loman Städ AB logotyp" className="h-20 w-auto object-contain rounded-lg mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Lokal städfirma i Säter med fokus på kvalitet, miljö och trygghet.
            </p>
          </div>

          <nav aria-label="Tjänster">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Tjänster</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id || s._id}>
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

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <span aria-hidden="true">📞</span>
                  <a href={`tel:+46${phone.replace(/^0/, '').replace(/[-\s]/g, '')}`} className={`hover:text-white transition-colors min-h-[44px] flex items-center ${focusRing}`}>
                    <span className="sr-only">Telefon: </span>{phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span aria-hidden="true">✉️</span>
                  <a href={`mailto:${email}`} className={`hover:text-white transition-colors min-h-[44px] flex items-center ${focusRing}`}>
                    <span className="sr-only">E-post: </span>{email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span aria-hidden="true">📍</span>
                  <span>{address}</span>
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
