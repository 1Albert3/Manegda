import { Utensils, Bus, Heart, Clock, MapPin, Shield, Star, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-rose-50 to-pink-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-900 to-pink-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5" />
            <span className="text-sm font-medium">Services d'excellence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Services <span className="text-rose-300">Scolaires</span>
          </h1>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
            Des services de qualité supérieure pour le bien-être et l'épanouissement de nos élèves.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Statistiques des services */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">450+</div>
            <p className="text-gray-600 font-medium">Repas servis/jour</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bus className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
            <p className="text-gray-600 font-medium">Zones desservies</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <p className="text-gray-600 font-medium">Suivi médical</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <p className="text-gray-600 font-medium">Satisfaction</p>
          </div>
        </div>

        {/* Services principaux */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos services d'excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un accompagnement complet pour assurer le bien-être et la réussite de chaque élève
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Restauration</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Repas équilibrés et nutritifs préparés avec des ingrédients frais et locaux</p>
              
              <div className="bg-green-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-green-900 mb-4">Horaires des repas :</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      Petit-déjeuner:
                    </span>
                    <span className="font-semibold text-green-800">7h30 - 8h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      Déjeuner:
                    </span>
                    <span className="font-semibold text-green-800">12h00 - 13h30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      Goûter:
                    </span>
                    <span className="font-semibold text-green-800">15h30 - 16h00</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                S'inscrire à la cantine
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bus className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Transport</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Service de transport scolaire sécurisé couvrant 12 zones de Ouagadougou</p>
              
              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-blue-900 mb-4">Informations pratiques :</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      Départ matin:
                    </span>
                    <span className="font-semibold text-blue-800">6h30 - 7h30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      Retour soir:
                    </span>
                    <span className="font-semibold text-blue-800">16h30 - 17h30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      Zones couvertes:
                    </span>
                    <span className="font-semibold text-blue-800">12 secteurs</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                S'inscrire au transport
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Santé Scolaire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Suivi médical complet et service d'urgence pour la sécurité de nos élèves</p>
              
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-red-900 mb-4">Services médicaux :</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      Infirmerie:
                    </span>
                    <span className="font-semibold text-red-800">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-600" />
                      Médecin:
                    </span>
                    <span className="font-semibold text-red-800">Lun-Mer-Ven</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-600" />
                      Urgences:
                    </span>
                    <span className="font-semibold text-red-800">24h/24</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl hover:from-red-700 hover:to-red-800 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Fiche médicale
              </button>
            </div>
          </div>
        </div>

        {/* Tarifs et inscription */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Tarifs des services</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Cantine (mensuel)</h4>
                    <p className="text-gray-600">3 repas équilibrés par jour</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">25,000</div>
                  <div className="text-sm text-gray-500">FCFA</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Bus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Transport (mensuel)</h4>
                    <p className="text-gray-600">Aller-retour quotidien sécurisé</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">30,000</div>
                  <div className="text-sm text-gray-500">FCFA</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Santé (annuel)</h4>
                    <p className="text-gray-600">Suivi médical complet</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600">15,000</div>
                  <div className="text-sm text-gray-500">FCFA</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-4">Avantages famille nombreuse :</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>2ème enfant :</span>
                  <span className="font-semibold text-green-600">-10%</span>
                </div>
                <div className="flex justify-between">
                  <span>3ème enfant et plus :</span>
                  <span className="font-semibold text-green-600">-20%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Inscription aux services</h3>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-4">Services souhaités</label>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-300 transition-colors cursor-pointer">
                    <input type="checkbox" className="mr-4 w-5 h-5 text-green-600 rounded" />
                    <div className="flex items-center gap-3">
                      <Utensils className="w-6 h-6 text-green-600" />
                      <span className="font-medium">Cantine - Restauration complète</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors cursor-pointer">
                    <input type="checkbox" className="mr-4 w-5 h-5 text-blue-600 rounded" />
                    <div className="flex items-center gap-3">
                      <Bus className="w-6 h-6 text-blue-600" />
                      <span className="font-medium">Transport scolaire sécurisé</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-red-300 transition-colors cursor-pointer">
                    <input type="checkbox" className="mr-4 w-5 h-5 text-red-600 rounded" />
                    <div className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-red-600" />
                      <span className="font-medium">Suivi santé scolaire</span>
                    </div>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Nom complet de l'élève</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition-all" 
                  placeholder="Nom et prénom de l'élève"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Classe</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition-all">
                  <option>Sélectionnez la classe</option>
                  <option>6ème</option>
                  <option>5ème</option>
                  <option>4ème</option>
                  <option>3ème</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">Contact parent/tuteur</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-rose-100 focus:border-rose-500 transition-all" 
                  placeholder="Numéro de téléphone"
                />
              </div>
              
              <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Soumettre la demande d'inscription
              </button>
              
              <p className="text-center text-sm text-gray-500">
                Vous recevrez une confirmation par SMS dans les 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}