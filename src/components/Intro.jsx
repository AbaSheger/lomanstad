export default function Intro() {
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
