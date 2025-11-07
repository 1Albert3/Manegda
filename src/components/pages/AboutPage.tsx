import { History, Target, Users, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">À propos du Collège</h1>
          <p className="text-lg text-gray-600">Découvrez notre histoire, notre mission et notre équipe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <History className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Historique</h3>
            <p className="text-gray-600">Notre riche passé depuis 1985</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vision & Mission</h3>
            <p className="text-gray-600">Excellence éducative pour tous</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Équipe</h3>
            <p className="text-gray-600">Personnel dévoué et qualifié</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projet pédagogique</h3>
            <p className="text-gray-600">Approche moderne d'enseignement</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Notre Histoire</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fondé en 1985, le Collège Wend-Manegda s'est imposé comme un établissement de référence dans l'enseignement secondaire au Burkina Faso. 
            Depuis près de 40 ans, nous formons des générations d'élèves avec un engagement constant vers l'excellence académique.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Notre établissement tire son nom de "Wend-Manegda", qui signifie "Dieu est grand" en mooré, reflétant nos valeurs de respect, 
            d'intégrité et de développement harmonieux de la personne humaine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Notre Mission</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Offrir une éducation de qualité accessible à tous</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Développer l'esprit critique et la créativité</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Promouvoir les valeurs citoyennes et morales</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Préparer les leaders de demain</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Nos Valeurs</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">Excellence</h3>
                <p className="text-sm text-gray-600">Recherche constante de la qualité dans tous nos programmes</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900">Intégrité</h3>
                <p className="text-sm text-gray-600">Honnêteté et transparence dans toutes nos actions</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900">Respect</h3>
                <p className="text-sm text-gray-600">Valorisation de chaque individu et de sa dignité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}