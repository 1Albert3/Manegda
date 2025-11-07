import { useState, useEffect } from 'react';
import { Partner } from '../../data/partnersData';

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-4">
            Nos collaborations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Partenaires de confiance
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Des institutions qui nous accompagnent dans notre mission éducative
          </p>
        </div>

        <div className="relative overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group transition-all duration-500 ${
                  index === currentIndex ? 'scale-105 opacity-100' : 'scale-100 opacity-80'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all border border-white/10 hover:border-white/20">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full h-12 object-contain mx-auto filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Partenaire ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-full bg-gradient-to-r from-gray-900/90 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-full bg-gradient-to-l from-blue-900/90 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
