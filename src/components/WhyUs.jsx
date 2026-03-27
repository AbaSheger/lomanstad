export default function WhyUs() {
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
