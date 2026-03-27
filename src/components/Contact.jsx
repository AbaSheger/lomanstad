import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { services } from '../data/services'
import { focusRing, focusRingDark } from '../constants'
import PrivacyModal from './PrivacyModal'

export default function Contact() {
  const [formData, setFormData] = useState({
    fornamn: '', efternamn: '', epost: '', telefon: '', tjanst: '', meddelande: '', gdpr: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
    if (formErrors[name]) setFormErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!formData.fornamn.trim()) errors.fornamn = 'Förnamn krävs'
    if (!formData.efternamn.trim()) errors.efternamn = 'Efternamn krävs'
    if (!formData.epost.trim()) errors.epost = 'E-post krävs'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.epost)) errors.epost = 'Ogiltig e-postadress'
    if (!formData.gdpr) errors.gdpr = 'Du måste godkänna integritetspolicyn'
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return }
    setFormErrors({})
    setSending(true)
    setSendError(false)
    emailjs.send(
      'service_4qlw0gr',
      'template_sxa9f83',
      {
        fornamn: formData.fornamn,
        efternamn: formData.efternamn,
        epost: formData.epost,
        telefon: formData.telefon,
        tjanst: formData.tjanst,
        meddelande: formData.meddelande,
      },
      'BPBbQ4VtSqYgBZE30'
    ).then(() => {
      setSending(false)
      setSubmitted(true)
    }).catch(() => {
      setSending(false)
      setSendError(true)
    })
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-3.5 py-3 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-[#1a7abf] focus:bg-white transition-colors placeholder-gray-300 min-h-[48px]'

  return (
    <>
    <section id="kontakt" aria-labelledby="contact-heading" className="bg-[#f7f9fc] py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="contact-heading" className="text-3xl font-bold text-gray-800 mb-3">Begär offert</h2>
          <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto mb-3" aria-hidden="true" />
          <p className="text-gray-600 text-sm">Fyll i formuläret så återkommer vi inom 24 timmar.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 bg-[#1a7abf] rounded-2xl p-7 text-white">
            <h3 className="font-bold text-lg mb-1">Kontakta oss direkt</h3>
            <p className="text-gray-400 text-sm mb-6">Vi finns här för dig – hör av dig så hjälper vi dig!</p>
            <ul className="space-y-5">
              <li>
                <a href="tel:+460760076957" className={`flex items-center gap-3 group ${focusRing} rounded`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Telefon</p>
                    <p className="text-white font-semibold">076-007 69 57</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@lomanstad.se" className={`flex items-center gap-3 group ${focusRing} rounded`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">E-post</p>
                    <p className="text-white font-semibold">info@lomanstad.se</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Adress</p>
                  <p className="text-white font-semibold">Bergstäktsvägen 21, 783 32, Säter</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Öppettider</p>
                  <p className="text-white font-semibold">Bokning: Vardagar 08–17</p>
                  <p className="text-white text-sm">Städtjänster: 7 dagar i veckan</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-white rounded-2xl shadow-sm border border-green-100 p-10 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tack för din förfrågan!</h3>
            <p className="text-gray-600 text-sm">Vi återkommer inom 24 timmar.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fornamn" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Förnamn <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="fornamn" type="text" name="fornamn" required
                  aria-required="true" aria-describedby={formErrors.fornamn ? 'err-fornamn' : undefined}
                  value={formData.fornamn}
                  onChange={handleChange} className={`${inputClass} ${formErrors.fornamn ? 'border-red-400' : ''}`} placeholder="Anna"
                  autoComplete="given-name"
                />
                {formErrors.fornamn && <p id="err-fornamn" className="text-xs text-red-500 mt-1">{formErrors.fornamn}</p>}
              </div>
              <div>
                <label htmlFor="efternamn" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Efternamn <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="efternamn" type="text" name="efternamn" required
                  aria-required="true" aria-describedby={formErrors.efternamn ? 'err-efternamn' : undefined}
                  value={formData.efternamn}
                  onChange={handleChange} className={`${inputClass} ${formErrors.efternamn ? 'border-red-400' : ''}`} placeholder="Lindgren"
                  autoComplete="family-name"
                />
                {formErrors.efternamn && <p id="err-efternamn" className="text-xs text-red-500 mt-1">{formErrors.efternamn}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="epost" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  E-post <span aria-hidden="true" className="text-red-400">*</span>
                </label>
                <input
                  id="epost" type="email" name="epost" required
                  aria-required="true" aria-describedby={formErrors.epost ? 'err-epost' : undefined}
                  value={formData.epost}
                  onChange={handleChange} className={`${inputClass} ${formErrors.epost ? 'border-red-400' : ''}`} placeholder="anna@exempel.se"
                  autoComplete="email"
                />
                {formErrors.epost && <p id="err-epost" className="text-xs text-red-500 mt-1">{formErrors.epost}</p>}
              </div>
              <div>
                <label htmlFor="telefon" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Telefon
                </label>
                <input
                  id="telefon" type="tel" name="telefon" value={formData.telefon}
                  onChange={handleChange} className={inputClass} placeholder="076-007 69 57"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div>
              <label htmlFor="tjanst" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Tjänst
              </label>
              <select
                id="tjanst" name="tjanst" value={formData.tjanst}
                onChange={handleChange} className={inputClass}
              >
                <option value="">Välj tjänst...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="meddelande" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Meddelande
              </label>
              <textarea
                id="meddelande" name="meddelande" rows={4}
                value={formData.meddelande} onChange={handleChange}
                className={`${inputClass} min-h-[120px] resize-none`}
                placeholder="Berätta gärna mer om vad du behöver hjälp med..."
              />
            </div>
            {/* GDPR consent */}
            <div className="flex items-start gap-3">
              <input
                id="gdpr" name="gdpr" type="checkbox"
                required aria-required="true"
                checked={formData.gdpr} onChange={handleChange}
                className={`mt-0.5 w-4 h-4 accent-[#1a7abf] flex-shrink-0 cursor-pointer ${focusRingDark}`}
              />
              <label htmlFor="gdpr" className="text-xs text-gray-500 leading-relaxed">
                Jag godkänner att Loman Städ lagrar mina uppgifter för att hantera min förfrågan, i enlighet med{' '}
                <button
                  type="button"
                  onClick={() => setShowPrivacy(true)}
                  className={`text-[#1a7abf] underline hover:text-[#1568a3] transition-colors ${focusRingDark}`}
                >
                  integritetspolicyn
                </button>
                . <span aria-hidden="true" className="text-red-400">*</span>
              </label>
            </div>
            {formErrors.gdpr && <p className="text-xs text-red-500 -mt-2">{formErrors.gdpr}</p>}

            <button
              type="submit"
              disabled={sending}
              className={`w-full bg-[#1a7abf] hover:bg-[#1568a3] disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-colors text-sm tracking-wide shadow-md shadow-blue-200 min-h-[52px] ${focusRingDark}`}
            >
              {sending ? 'Skickar...' : 'Skicka förfrågan'}
            </button>
            {sendError && (
              <p className="text-center text-sm text-red-500">Något gick fel. Försök igen eller ring oss direkt.</p>
            )}
            <p className="text-center text-xs text-gray-400">
              <span aria-hidden="true">*</span> Obligatoriska fält · Vi svarar inom 24 timmar · Ingen bindningstid
            </p>
          </form>
        )}
          </div>
        </div>
      </div>
    </section>

    {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  )
}
