import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Activity {
  title: string;
  description: string;
  image: string;
  link: string;
}

const activities: Activity[] = [
  {
    title: "La journée des talents",
    description: "Un événement annuel où nos élèves célèbrent la diversité culturelle en portant des tenues traditionnelles et en présentant leurs talents artistiques, musicaux et créatifs. C'est un moment de partage qui valorise les richesses culturelles de chacun et renforce la cohésion de notre communauté scolaire.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/vie-scolaire/activites/talents"
  },
  {
    title: "La passation de flambeau",
    description: "Cérémonie symbolique qui marque la fin de l'année scolaire et le passage de témoin entre les générations d'élèves. Les terminales transmettent leurs expériences et leurs valeurs aux plus jeunes, perpétuant ainsi l'esprit d'excellence et de solidarité qui caractérise notre établissement.",
    image: "https://images.pexels.com/photos/8500343/pexels-photo-8500343.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/vie-scolaire/activites/passation"
  }
];

export default function MissionSection() {
  const [currentActivity, setCurrentActivity] = useState(0);

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800" />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-blue-200 font-semibold mb-4">
            Notre engagement
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Activités extrascolaires
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Des activités qui enrichissent l'expérience éducative et développent les talents de nos élèves
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-xl overflow-hidden group">
                <img
                  src={activities[currentActivity].image}
                  alt={activities[currentActivity].title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>

              <div className="text-white">
                <span className="inline-block px-4 py-1 bg-blue-600/30 rounded-full text-blue-200 text-sm font-medium mb-4">
                  Activité {currentActivity + 1} sur {activities.length}
                </span>
                <h3 className="text-3xl font-bold mb-4 text-white">{activities[currentActivity].title}</h3>
                <p className="text-gray-200 leading-relaxed mb-8 text-lg">
                  {activities[currentActivity].description}
                </p>
                <a
                  href={activities[currentActivity].link}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium group"
                >
                  Plus de détails
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prevActivity}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20 hover:border-white/40 group"
                aria-label="Activité précédente"
              >
                <ChevronLeft className="w-6 h-6 text-white transform group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-3">
                {activities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentActivity(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentActivity
                        ? 'bg-blue-500 w-8'
                        : 'bg-white/30 w-2 hover:bg-white/50'
                    }`}
                    aria-label={`Activité ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextActivity}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20 hover:border-white/40 group"
                aria-label="Activité suivante"
              >
                <ChevronRight className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
