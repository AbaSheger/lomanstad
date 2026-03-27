import { focusRing } from '../constants'

export default function CookieBanner({ cookieAccepted, onAccept }) {
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
