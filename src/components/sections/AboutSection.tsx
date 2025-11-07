import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full flex justify-center" style={{ height: '650px' }}>
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: '585px', height: '600px', marginTop: '0px' }}>
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lycée Sainte Marie"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 right-6 rounded-lg overflow-hidden shadow-xl z-10" style={{ width: '260px', height: '300px' }}>
              <img
                src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Élèves du lycée"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">
              A propos du lycée sainte Marie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lycée Sainte Marie de Cocody (Abidjan)
            </h2>
            <h3 className="text-lg text-gray-700 mb-6">
              Fondé en 1960 à la demande du Président Félix Houphouët-Boigny et de Mère Madeleine DANIELOU
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le Lycée Sainte Marie de Cocody est un établissement d'enseignement secondaire privé d'excellence
              qui forme des générations de jeunes ivoiriens depuis plus de 60 ans. Notre mission est de
              développer les talents intellectuels, moraux et spirituels de nos élèves dans un environnement
              propice à l'épanouissement personnel et à la réussite académique.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Membre du réseau des écoles associées de l'UNESCO, nous nous engageons à promouvoir les valeurs
              de paix, de dialogue interculturel, de développement durable et d'excellence éducative. Notre
              établissement offre un cadre moderne avec des infrastructures de qualité pour accompagner chaque
              élève vers la réussite.
            </p>
            <a
              href="/etablissement/presentation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Plus de détails
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
