import { useState } from 'react'
import { focusRingDark } from '../constants'

export default function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = `details-${service.id}`

  return (
    <article
      id={service.id}
      className="bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden
                 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 ease-out group"
    >
      {/* Image header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={`${service.title} – Loman Städ`}
          className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" aria-hidden="true" />
        {service.badge && (
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white px-2.5 py-1 rounded-full shadow">
            {service.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-3">
          <h3 className="text-white text-lg font-bold drop-shadow">{service.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.short}</p>

        {/* Expanded details */}
        <div
          id={detailsId}
          role="region"
          aria-label={`Detaljer för ${service.title}`}
          style={{
            maxHeight: expanded ? '600px' : '0',
            opacity: expanded ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease, opacity 0.3s ease',
          }}
        >
          <div className="border-t border-gray-100 pt-4 pb-2 space-y-4">
            {service.details.map((section) => (
              <div key={section.heading}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a7abf]" aria-hidden="true" />
                  <p className="font-bold text-gray-700 text-xs uppercase tracking-wider">
                    {section.heading}
                  </p>
                </div>
                <ul className="space-y-1.5 pl-3.5">
                  {section.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2 leading-snug">
                      <svg className="w-3.5 h-3.5 text-[#1a7abf] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className={`mt-auto flex items-center justify-between w-full pt-3 text-sm font-semibold
                     text-[#1a7abf] border-t border-gray-100 hover:text-[#1568a3] transition-colors
                     min-h-[44px] group/btn ${focusRingDark}`}
        >
          <span>{expanded ? 'Dölj detaljer' : 'Se vad som ingår'}</span>
          <span className="w-8 h-8 rounded-full bg-blue-50 group-hover/btn:bg-blue-100 flex items-center justify-center transition-colors flex-shrink-0" aria-hidden="true">
            <svg
              className={`w-4 h-4 motion-safe:transition-transform motion-safe:duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </div>
    </article>
  )
}
