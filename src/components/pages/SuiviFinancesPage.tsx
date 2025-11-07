import { FileText, Download, TrendingUp, Award, BarChart3, Eye, Calendar, Target, CreditCard, Receipt, DollarSign, CheckCircle } from 'lucide-react';

export default function SuiviFinancesPage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-violet-50 to-purple-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-violet-900 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-violet-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-medium">Suivi académique et financier</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Suivi & <span className="text-violet-300">Finances</span>
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
            Consultez vos résultats scolaires et gérez vos paiements en toute simplicité.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Section Résultats */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Résultats & Bulletins</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Performance académique</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suivez votre progression et accédez à vos évaluations en temps réel
            </p>
          </div>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Notes récentes */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Évaluations récentes</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Mathématiques</h4>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Français</h4>
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
                    <h4 className="text-xl font-bold text-gray-900 mb-1">Sciences</h4>
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
                <h3 className="text-3xl font-bold text-gray-900">Moyennes trimestrielles</h3>
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

        {/* Section Paiements */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium">Paiements & Scolarité</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gestion financière</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gérez vos paiements et consultez vos factures en toute sécurité
            </p>
          </div>

          {/* Services de paiement */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Frais de scolarité</h3>
              <p className="text-gray-600 mb-6">Consultez les tarifs et modalités de paiement</p>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-colors font-semibold">
                Voir les tarifs
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Suivi paiements</h3>
              <p className="text-gray-600 mb-6">Consultez l'état de vos paiements en cours</p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                Consulter
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Paiement en ligne</h3>
              <p className="text-gray-600 mb-6">Effectuez vos paiements de manière sécurisée</p>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                Payer maintenant
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Reçus & Factures</h3>
              <p className="text-gray-600 mb-6">Téléchargez vos documents officiels</p>
              <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-xl hover:bg-orange-700 transition-colors font-semibold">
                Télécharger
              </button>
            </div>
          </div>

          {/* Paiement et historique */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Paiement rapide */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Paiement rapide</h3>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Montant à payer</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-100 focus:border-green-500 transition-all">
                    <option>Frais de scolarité - 150,000 FCFA</option>
                    <option>Cantine - 25,000 FCFA</option>
                    <option>Transport - 30,000 FCFA</option>
                    <option>Fournitures - 15,000 FCFA</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Mode de paiement</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="p-6 border-2 border-blue-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                      <CreditCard className="w-10 h-10 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="font-semibold text-gray-900">Carte bancaire</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard</div>
                    </button>
                    <button type="button" className="p-6 border-2 border-green-200 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all group">
                      <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="font-semibold text-gray-900">Mobile Money</div>
                      <div className="text-sm text-gray-600">Orange, Moov</div>
                    </button>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Procéder au paiement
                </button>
                
                <p className="text-center text-sm text-gray-500">
                  Paiement sécurisé par SSL • Vos données sont protégées
                </p>
              </form>
            </div>

            {/* Historique des paiements */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Historique des paiements</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Frais de scolarité T1</h4>
                      <p className="text-gray-600">15 Janvier 2025</p>
                      <p className="text-sm text-gray-500">Référence: PAY-2025-001</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">150,000 FCFA</div>
                    <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Payé
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cantine T2</h4>
                      <p className="text-gray-600">Échéance: 15 Mars 2025</p>
                      <p className="text-sm text-gray-500">Référence: PAY-2025-002</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">25,000 FCFA</div>
                    <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      En attente
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Transport T1</h4>
                      <p className="text-gray-600">10 Janvier 2025</p>
                      <p className="text-sm text-gray-500">Référence: PAY-2025-003</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">30,000 FCFA</div>
                    <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Payé
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total payé cette année :</span>
                  <span className="text-2xl font-bold text-green-600">180,000 FCFA</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Solde restant :</span>
                  <span className="text-xl font-bold text-orange-600">25,000 FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}