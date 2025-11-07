import { Users, Calendar, BookOpen, Shield, Star, Trophy, Heart, Zap } from 'lucide-react';

export default function VieScolairePage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-emerald-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-green-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium">Vie étudiante enrichissante</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Vie <span className="text-green-300">Scolaire</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Une communauté éducative dynamique où chaque élève s'épanouit et développe ses talents.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        {/* Statistiques de la vie scolaire */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
            <p className="text-gray-600 font-medium">Clubs actifs</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <p className="text-gray-600 font-medium">Événements/an</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <p className="text-gray-600 font-medium">Participation</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
            <p className="text-gray-600 font-medium">Satisfaction</p>
          </div>
        </div>

        {/* Domaines d'activités */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos domaines d'activités</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez la diversité des activités proposées pour l'épanouissement de chaque élève
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Clubs & Associations</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Plus de 15 clubs pour développer vos passions et talents.</p>
            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Découvrir
              <Zap className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Événements</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Un calendrier riche en activités culturelles et sportives.</p>
            <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition-colors">
              Planning
              <Calendar className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Règlement</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Cadre de vie respectueux et bienveillant pour tous.</p>
            <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
              Consulter
              <BookOpen className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Encadrement</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Suivi personnalisé et accompagnement de qualité.</p>
            <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
              Détails
              <Shield className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clubs et événements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Clubs populaires */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Clubs populaires</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Club de lecture</h3>
                  <p className="text-gray-600 leading-relaxed">Développement de la culture littéraire et de l'expression écrite</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">45 membres</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Club de débat</h3>
                  <p className="text-gray-600 leading-relaxed">Amélioration de l'expression orale et des compétences d'argumentation</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">32 membres</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Club scientifique</h3>
                  <p className="text-gray-600 leading-relaxed">Expériences et projets scientifiques innovants</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">28 membres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Événements à venir */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Événements à venir</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Journée portes ouvertes</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Bientôt</span>
                </div>
                <p className="text-gray-600 mb-3">Découvrez notre établissement et rencontrez nos équipes</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    15 Mars 2025
                  </span>
                  <span>9h00 - 17h00</span>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Concours de mathématiques</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Inscriptions ouvertes</span>
                </div>
                <p className="text-gray-600 mb-3">Compétition inter-classes pour stimuler l'excellence</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    22 Mars 2025
                  </span>
                  <span>14h00 - 16h00</span>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Festival culturel</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Préparation</span>
                </div>
                <p className="text-gray-600 mb-3">Spectacles, expositions et performances artistiques</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    5 Avril 2025
                  </span>
                  <span>Toute la journée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}