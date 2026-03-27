import { useEffect } from 'react'
import { focusRingDark } from '../constants'

export default function PrivacyModal({ onClose }) {
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
