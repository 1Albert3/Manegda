import { Calendar, Clock, User, Tag } from 'lucide-react';

export default function ActualitesPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Actualités</h1>
          <p className="text-lg text-gray-600">Restez informés de la vie de notre établissement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Articles récents</h3>
            <p className="text-gray-600 mb-4">Dernières nouvelles</p>
            <div className="text-2xl font-bold text-blue-600">24</div>
            <div className="text-sm text-gray-500">Ce mois-ci</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Événements</h3>
            <p className="text-gray-600 mb-4">Activités à venir</p>
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-500">Prochainement</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <User className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calendrier scolaire</h3>
            <p className="text-gray-600 mb-4">Dates importantes</p>
            <button className="text-purple-600 hover:text-purple-800 font-medium">Consulter →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Tag className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Annonces</h3>
            <p className="text-gray-600 mb-4">Informations importantes</p>
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-sm text-gray-500">Nouvelles annonces</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <img 
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Article principal" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Éducation</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    15 Mars 2025
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Direction
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Excellents résultats au BEPC 2024</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nous sommes fiers d'annoncer que nos élèves ont obtenu un taux de réussite exceptionnel de 95% au BEPC 2024, 
                  plaçant notre établissement parmi les meilleurs du pays. Cette performance remarquable témoigne de la qualité 
                  de notre enseignement et de l'engagement de nos élèves.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Lire la suite →</button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex gap-4">
                  <img 
                    src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Article" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Sport</span>
                      <span>12 Mars 2025</span>
                    </div>
                    <h3 className="font-semibold mb-2">Championnat inter-collèges de football</h3>
                    <p className="text-sm text-gray-600">Notre équipe de football remporte le championnat régional...</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex gap-4">
                  <img 
                    src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Article" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Culture</span>
                      <span>10 Mars 2025</span>
                    </div>
                    <h3 className="font-semibold mb-2">Semaine culturelle 2025</h3>
                    <p className="text-sm text-gray-600">Découvrez le programme riche de notre semaine culturelle annuelle...</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex gap-4">
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Article" 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Technologie</span>
                      <span>8 Mars 2025</span>
                    </div>
                    <h3 className="font-semibold mb-2">Nouveau laboratoire informatique</h3>
                    <p className="text-sm text-gray-600">Inauguration de notre laboratoire informatique moderne...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Événements à venir</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Journée portes ouvertes</h4>
                  <p className="text-sm text-gray-600">Samedi 20 Mars 2025</p>
                  <p className="text-xs text-gray-500">9h00 - 16h00</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Concours de mathématiques</h4>
                  <p className="text-sm text-gray-600">Vendredi 25 Mars 2025</p>
                  <p className="text-xs text-gray-500">14h00 - 16h00</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Spectacle de fin d'année</h4>
                  <p className="text-sm text-gray-600">Samedi 15 Juin 2025</p>
                  <p className="text-xs text-gray-500">18h00 - 21h00</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Annonces importantes</h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900">Rappel paiement</h4>
                  <p className="text-sm text-red-700">Date limite : 30 Mars 2025</p>
                </div>
                
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-900">Réunion parents</h4>
                  <p className="text-sm text-yellow-700">Samedi 22 Mars à 10h00</p>
                </div>
                
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900">Vacances de Pâques</h4>
                  <p className="text-sm text-blue-700">Du 28 Mars au 7 Avril</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Archives</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">Mars 2025 (24)</button>
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">Février 2025 (18)</button>
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">Janvier 2025 (15)</button>
                <button className="w-full text-left p-2 hover:bg-gray-50 rounded">Décembre 2024 (22)</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Calendrier scolaire 2024-2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">1er Trimestre</h3>
              <p className="text-sm text-gray-600">1er Octobre - 22 Décembre 2024</p>
              <div className="mt-2 text-xs text-blue-700">
                <div>• Rentrée : 1er Octobre</div>
                <div>• Vacances Toussaint : 28 Oct - 4 Nov</div>
                <div>• Fin trimestre : 22 Décembre</div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">2ème Trimestre</h3>
              <p className="text-sm text-gray-600">8 Janvier - 28 Mars 2025</p>
              <div className="mt-2 text-xs text-green-700">
                <div>• Reprise : 8 Janvier</div>
                <div>• Vacances Carnaval : 17-24 Février</div>
                <div>• Fin trimestre : 28 Mars</div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">3ème Trimestre</h3>
              <p className="text-sm text-gray-600">8 Avril - 4 Juillet 2025</p>
              <div className="mt-2 text-xs text-purple-700">
                <div>• Reprise : 8 Avril</div>
                <div>• Examens BEPC : 15-20 Juin</div>
                <div>• Fin année : 4 Juillet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}