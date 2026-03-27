import { services } from '../data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="tjanster" aria-labelledby="services-heading" className="bg-[#f7f9fc] py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-800 mb-3">Våra tjänster</h2>
          <div className="w-12 h-1 bg-[#1a7abf] rounded mx-auto mb-4" aria-hidden="true" />
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Vi erbjuder ett brett utbud av städtjänster för både privatpersoner och företag i Säterområdet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
