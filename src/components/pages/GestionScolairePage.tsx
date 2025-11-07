import { FileText, Download, CreditCard, Calendar, Users, CheckCircle, UserCheck, BookOpen, Shield, Heart, Star, Trophy } from 'lucide-react';

export default function GestionScolairePage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-emerald-50 to-teal-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <UserCheck className="w-5 h-5" />
            <span className="text-sm font-medium">Gestion administrative</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Gestion <span className="text-emerald-300">Scolaire</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Inscriptions, vie scolaire et accompagnement personnalisé pour la réussite de chaque élève.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Section Inscriptions */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Inscriptions 2025-2026</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Processus d'inscription</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez l'excellence éducative du Collège Wend-Manegda avec un processus d'inscription simplifié
            </p>
          </div>

          {/* Étapes du processus */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dossier</h3>
              <p className="text-gray-600">Téléchargez et complétez le dossier d'inscription</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Documents</h3>
              <p className="text-gray-600">Rassemblez les pièces justificatives requises</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Soumission</h3>
              <p className="text-gray-600">Déposez votre dossier complet au secrétariat</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Confirmation</h3>
              <p className="text-gray-600">Recevez la confirmation d'inscription</p>
            </div>
          </div>

          {/* Services d'inscription */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Conditions d'admission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Découvrez les critères d'admission et les prérequis académiques pour intégrer notre établissement.</p>
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dossier d'inscription</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Téléchargez le formulaire d'inscription officiel et les documents nécessaires.</p>
              <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition-colors">
                Télécharger
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Frais de scolarité</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Consultez les tarifs et modalités de paiement pour l'année scolaire 2025-2026.</p>
              <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                Voir les tarifs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Formulaire d'inscription */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pré-inscription en ligne</h3>
              <p className="text-lg text-gray-600">Commencez votre démarche d'inscription dès maintenant</p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Nom de famille de l'élève</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg" 
                  placeholder="Entrez le nom de famille"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Prénom de l'élève</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg" 
                  placeholder="Entrez le prénom"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Date de naissance</label>
                <input 
                  type="date" 
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Classe demandée</label>
                <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg">
                  <option value="">Sélectionnez une classe</option>
                  <option value="6eme">6ème</option>
                  <option value="5eme">5ème</option>
                  <option value="4eme">4ème</option>
                  <option value="3eme">3ème</option>
                </select>
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-3">Email du parent/tuteur</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg" 
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-8 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Soumettre la pré-inscription
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Vous recevrez un email de confirmation avec les prochaines étapes
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Section Vie Scolaire */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Vie étudiante enrichissante</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vie scolaire dynamique</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une communauté éducative bienveillante où chaque élève s'épanouit et développe ses talents
            </p>
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Clubs & Associations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Plus de 15 clubs pour développer vos passions et talents.</p>
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Découvrir
                <Users className="w-4 h-4" />
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
                <h3 className="text-3xl font-bold text-gray-900">Clubs populaires</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Club de lecture</h4>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Club de débat</h4>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Club scientifique</h4>
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
                <h3 className="text-3xl font-bold text-gray-900">Événements à venir</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">Journée portes ouvertes</h4>
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
                    <h4 className="text-xl font-bold text-gray-900">Concours de mathématiques</h4>
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
                    <h4 className="text-xl font-bold text-gray-900">Festival culturel</h4>
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
    </div>
  );
}