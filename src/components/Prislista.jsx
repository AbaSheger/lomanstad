export default function Prislista() {
  const categories = [
    {
      id: 'hemstadning-pris',
      title: 'Hemstädning',
      icon: '🏠',
      description: 'Professionell städning av ditt hem – löpande eller vid enstaka tillfällen.',
      rows: [
        { label: 'Privatperson', price: '210 kr/tim', note: 'Ord. pris: 420 kr/tim' },
        { label: 'Pensionär (65+)', price: '195 kr/tim', note: 'Ord. pris: 390 kr/tim' },
      ],
    },
    {
      id: 'flyttstadning-pris',
      title: 'Flyttstädning',
      icon: '📦',
      description: 'Komplett flyttstädning där städgaranti alltid ingår!',
      rows: [
        { label: 'Pris per kvm', price: '30 kr/kvm', note: 'Ord. pris: 60 kr/kvm' },
        { label: 'Minimipris', price: '1 500 kr', note: 'efter RUT-avdrag' },
      ],
    },
    {
      id: 'fonsterputsning-pris',
      title: 'Fönsterputs',
      icon: '🪟',
      description: 'Skinande rena fönster utan ränder.',
      rows: [
        { label: 'Minimipris per besök', price: '350 kr', note: '' },
        { label: '2-sidig puts', price: '35 kr/st', note: '' },
        { label: '4-sidig puts', price: '55 kr/st', note: '' },
        { label: 'Spröjs-tillägg', price: '20–40 kr/fönster', note: '' },
        { label: 'Inglasad veranda', price: 'Från 400 kr', note: 'upp till 1 200 kr' },
      ],
    },
    {
      id: 'kontorsstadning-pris',
      title: 'Kontors- & Trappstädning',
      icon: '🏢',
      description: 'Vi hjälper lokala företag och bostadsrättsföreningar i Säter att hålla lokaler och trapphus skinande rena.',
      rows: null,
      bullets: [
        'Anpassade lösningar: Vi städar när det passar er verksamhet.',
        'Lokala i Säter: Snabb service och personlig kontakt.',
        'Trygghet: Vi är fullt försäkrade och har bra villkor för vår personal.',
      ],
      quote: 'Eftersom varje verksamhet har unika behov erbjuder vi alltid en kostnadsfri besiktning innan vi lämnar en offert med fast pris.',
    },
  ]

  const goodToKnow = [
    { icon: '🚗', label: 'Reseavgift', text: '0 kr inom Säters tätort!' },
    { icon: '🧹', label: 'Material', text: 'Vid hemstädning används kundens utrustning. Vid fönsterputs och flyttstädning ingår allt material.' },
    { icon: '🛡️', label: 'Trygghet', text: 'Vi har F-skatt och full ansvarsförsäkring hos Länsförsäkringar.' },
    { icon: '💳', label: 'RUT-avdrag', text: 'Skulle RUT-avdrag nekas debiteras det ordinarie priset.' },
    { icon: '📅', label: 'Avbokning', text: 'Senast 24h innan bokat besök för att undvika debitering.' },
  ]

  return (
    <section id="prislista" aria-labelledby="prislista-heading" className="bg-[#f7f9fc] py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <h2 id="prislista-heading" className="text-3xl font-bold text-gray-800 mb-3">Prislista</h2>
          <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto mb-4" aria-hidden="true" />
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            Här hittar du våra fasta priser för våra populäraste tjänster. Priser för privatpersoner visas efter{' '}
            <strong>50&nbsp;% RUT-avdrag</strong>. Vi sköter all kontakt med Skatteverket så att du får avdraget direkt på fakturan.
          </p>
        </div>

        {/* Price cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-[#1a7abf] px-5 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4">{cat.description}</p>

                {cat.rows && (
                  <table className="w-full text-sm">
                    <tbody>
                      {cat.rows.map((row) => (
                        <tr key={row.label} className="border-b border-gray-100 last:border-0">
                          <td className="py-2 text-gray-700 pr-2">{row.label}</td>
                          <td className="py-2 text-right font-semibold text-[#1a7abf] whitespace-nowrap">{row.price}</td>
                          {row.note && (
                            <td className="py-2 text-right text-gray-400 text-xs pl-2 whitespace-nowrap">{row.note}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {cat.bullets && (
                  <ul className="mb-3 space-y-1">
                    {cat.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-[#1a7abf] font-bold flex-shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {cat.quote && (
                  <blockquote className="mt-2 border-l-4 border-[#1a7abf] pl-3 text-gray-600 text-sm italic">
                    "{cat.quote}"
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Good to know */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="font-bold text-gray-800 text-lg mb-4">Bra att veta</h3>
          <ul className="sm:columns-2 sm:gap-x-6 space-y-3" role="list">
            {goodToKnow.map((item) => (
              <li key={item.label} className="break-inside-avoid flex gap-3 items-start">
                <div className="w-6 h-5 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-lg leading-none">{item.icon}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700 text-sm">{item.label}: </span>
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-[#1a7abf] rounded-xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-1">Kontakta oss för bokning!</h3>
          <p className="text-blue-100 text-sm mb-4">
            Vi hjälper dig gärna att få ihop vardagspusslet eller göra flytten smidigare.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="tel:0760076957" className="flex items-center justify-center gap-2 bg-white text-[#1a7abf] font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors">
              <span aria-hidden="true">📞</span> 076-007 69 57
            </a>
            <a href="mailto:info@lomanstad.se" className="flex items-center justify-center gap-2 bg-white/15 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/25 transition-colors">
              <span aria-hidden="true">✉️</span> info@lomanstad.se
            </a>
          </div>
          <p className="text-blue-200 text-xs mt-4">
            Loman Städ AB · Org.nr: 559574-7428 · F-skatt · Momsregistrerat · Fullt försäkrat
          </p>
        </div>

      </div>
    </section>
  )
}
