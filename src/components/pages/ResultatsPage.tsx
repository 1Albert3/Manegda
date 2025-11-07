import { FileText, Download, TrendingUp, Award, BarChart3, Eye, Calendar, Target } from 'lucide-react';

export default function ResultatsPage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">Suivi académique personnalisé</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Résultats & <span className="text-indigo-300">Bulletins</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Accédez à vos performances académiques en temps réel et suivez votre progression.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15.2</div>
            <p className="text-gray-600 font-medium">Moyenne générale</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">8/10</div>
            <p className="text-gray-600 font-medium">Matières maîtrisées</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
            <p className="text-gray-600 font-medium">Félicitations</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">+1.5</div>
            <p className="text-gray-600 font-medium">Progression</p>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Accès rapide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consultez vos résultats et gérez vos documents scolaires en quelques clics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Consultation en ligne</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Accédez à vos notes et évaluations en temps réel depuis votre espace personnel.</p>
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
              Consulter mes notes
              <Eye className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Téléchargement</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Téléchargez vos bulletins officiels au format PDF pour vos démarches.</p>
            <button className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold">
              Télécharger PDF
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Historique complet</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Consultez l'évolution de vos résultats sur plusieurs années scolaires.</p>
            <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
              Voir l'historique
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tableau de bord des résultats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Notes récentes */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Évaluations récentes</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Mathématiques</h3>
                  <p className="text-gray-600 mb-2">Contrôle - Géométrie</p>
                  <p className="text-sm text-gray-500">15 Mars 2025</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600 mb-1">16/20</div>
                  <div className="text-sm text-gray-500">Classe: 12.5/20</div>
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                    <TrendingUp className="w-3 h-3" />
                    Excellent
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Français</h3>
                  <p className="text-gray-600 mb-2">Rédaction - Argumentation</p>
                  <p className="text-sm text-gray-500">12 Mars 2025</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600 mb-1">14/20</div>
                  <div className="text-sm text-gray-500">Classe: 11.2/20</div>
                  <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                    <Award className="w-3 h-3" />
                    Bien
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sciences</h3>
                  <p className="text-gray-600 mb-2">TP - Chimie organique</p>
                  <p className="text-sm text-gray-500">10 Mars 2025</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600 mb-1">17/20</div>
                  <div className="text-sm text-gray-500">Classe: 13.8/20</div>
                  <div className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mt-2">
                    <Award className="w-3 h-3" />
                    Très bien
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Moyennes par matière */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Moyennes trimestrielles</h2>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Mathématiques</span>
                  <span className="text-xl font-bold text-green-600">16.2/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '81%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Progression: +0.8 points</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Français</span>
                  <span className="text-xl font-bold text-blue-600">14.5/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{width: '72.5%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Progression: +0.3 points</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Sciences</span>
                  <span className="text-xl font-bold text-purple-600">15.8/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{width: '79%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Progression: +1.2 points</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Histoire-Géo</span>
                  <span className="text-xl font-bold text-orange-600">13.7/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-1000" style={{width: '68.5%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Progression: +0.5 points</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Anglais</span>
                  <span className="text-xl font-bold text-teal-600">15.1/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-1000" style={{width: '75.5%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Progression: +0.9 points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}