import { GraduationCap, Users, TrendingUp, BookOpen, Target, Award, Compass, Star } from 'lucide-react';

export default function OrientationPage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-teal-50 to-cyan-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 to-cyan-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Compass className="w-5 h-5" />
            <span className="text-sm font-medium">Accompagnement personnalisé</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Orientation & <span className="text-teal-300">Avenir</span>
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Construisez votre parcours académique et professionnel avec nos conseillers d'orientation expérimentés.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Statistiques de réussite */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <p className="text-gray-600 font-medium">Réussite BEPC</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">87%</div>
            <p className="text-gray-600 font-medium">Poursuivent au lycée</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">78%</div>
            <p className="text-gray-600 font-medium">Obtiennent le BAC</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">65%</div>
            <p className="text-gray-600 font-medium">Accèdent au supérieur</p>
          </div>
        </div>

        {/* Services d'orientation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services d'accompagnement</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un accompagnement complet pour vous aider à faire les meilleurs choix pour votre avenir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Suivi post-collège</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Accompagnement personnalisé après l'obtention du BEPC pour choisir la meilleure voie.</p>
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              En savoir plus
              <TrendingUp className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Réseau d'anciens</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Connectez-vous avec nos diplômés qui réussissent dans différents domaines.</p>
            <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition-colors">
              Rejoindre le réseau
              <Users className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Mentorat</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Bénéficiez de conseils personnalisés de professionnels expérimentés.</p>
            <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
              Trouver un mentor
              <BookOpen className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Parcours supérieur</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Découvrez les opportunités d'études supérieures et les débouchés.</p>
            <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
              Explorer les parcours
              <GraduationCap className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filières et témoignages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Filières disponibles</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 text-xl">Lycée Général</h4>
                <p className="text-gray-600 mb-3">Préparation au Baccalauréat séries A, C, D avec un enseignement complet et équilibré.</p>
                <div className="bg-blue-100 rounded-xl p-3">
                  <span className="font-semibold text-blue-800">Débouchés :</span>
                  <span className="text-blue-700"> Universités, Grandes écoles, Classes préparatoires</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-900 mb-3 text-xl">Lycée Technique</h4>
                <p className="text-gray-600 mb-3">Formation professionnelle spécialisée alliant théorie et pratique dans différents domaines.</p>
                <div className="bg-green-100 rounded-xl p-3">
                  <span className="font-semibold text-green-800">Débouchés :</span>
                  <span className="text-green-700"> Emploi direct, BTS, Écoles techniques supérieures</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <h4 className="font-bold text-purple-900 mb-3 text-xl">Formation Professionnelle</h4>
                <p className="text-gray-600 mb-3">Apprentissage de métiers spécifiques avec une insertion rapide sur le marché du travail.</p>
                <div className="bg-purple-100 rounded-xl p-3">
                  <span className="font-semibold text-purple-800">Débouchés :</span>
                  <span className="text-purple-700"> Insertion professionnelle immédiate, Entrepreneuriat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Témoignages de réussite</h3>
            </div>
            
            <div className="space-y-8">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AK</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Abdoul Karim SAWADOGO</h4>
                    <p className="text-blue-600 font-medium">Promotion 2018 - Ingénieur en informatique</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Le collège Wend-Manegda m'a donné des bases solides qui m'ont permis de réussir mes études d'ingénieur. L'accompagnement personnalisé des professeurs a été déterminant dans mon parcours."
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">MO</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Mariam OUÉDRAOGO</h4>
                    <p className="text-green-600 font-medium">Promotion 2019 - Médecin généraliste</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "Grâce à l'excellence de l'enseignement reçu et à l'encadrement de qualité, j'ai pu intégrer la faculté de médecine. Je recommande vivement cet établissement à tous les parents."
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Ibrahim SANOGO</h4>
                    <p className="text-purple-600 font-medium">Promotion 2020 - Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "L'esprit d'initiative et de leadership développé au collège m'a permis de créer ma propre entreprise. Les valeurs inculquées continuent de me guider aujourd'hui."
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Conseil et ressources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Demande de conseil</h3>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Nom de l'élève</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all" 
                  placeholder="Nom complet de l'élève"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Classe actuelle</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all">
                  <option>6ème</option>
                  <option>5ème</option>
                  <option>4ème</option>
                  <option>3ème</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Domaine d'intérêt</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all">
                  <option>Sciences exactes (Math, Physique, Chimie)</option>
                  <option>Sciences humaines (Histoire, Géographie, Philo)</option>
                  <option>Techniques et technologies</option>
                  <option>Arts et lettres</option>
                  <option>Commerce et gestion</option>
                  <option>Santé et médecine</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Questions spécifiques</label>
                <textarea 
                  rows={4} 
                  placeholder="Décrivez vos questions sur l'orientation, vos préoccupations ou vos objectifs..." 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all"
                ></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-6 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Demander un conseil personnalisé
              </button>
            </form>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Ressources utiles</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Guide d'orientation post-BEPC</h4>
                    <p className="text-gray-600">Document complet sur les choix après le collège</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  Télécharger PDF
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Annuaire des lycées</h4>
                    <p className="text-gray-600">Liste des établissements secondaires au Burkina Faso</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition-colors">
                  Consulter l'annuaire
                  <GraduationCap className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-purple-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Fiches métiers</h4>
                    <p className="text-gray-600">Découvrez les différents métiers et formations</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                  Explorer les métiers
                  <Target className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Réseau professionnel</h4>
                    <p className="text-gray-600">Connectez-vous avec des professionnels</p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                  Rejoindre le réseau
                  <Users className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}