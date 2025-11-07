import { Users, GraduationCap, Settings, LogIn, Calendar, Clock, User, MapPin, Building, Monitor, Shield, Globe } from 'lucide-react';

export default function OrganisationPage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Building className="w-5 h-5" />
            <span className="text-sm font-medium">Gestion et planification</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Organisation <span className="text-purple-300">Scolaire</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Accédez à vos espaces numériques personnalisés et consultez les emplois du temps en temps réel.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Section Espaces Numériques */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Monitor className="w-5 h-5" />
              <span className="text-sm font-medium">Espaces Numériques</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Accès personnalisé par profil</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque utilisateur dispose d'un espace adapté à ses besoins et responsabilités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Espace Parents/Élèves</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Suivez la scolarité, consultez les notes et communiquez avec l'établissement en toute simplicité.
                </p>
                
                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold text-blue-900 mb-4">Fonctionnalités disponibles :</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Suivi des notes en temps réel
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Téléchargement des bulletins
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Messagerie avec les enseignants
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Calendrier des événements
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Gestion des absences
                    </li>
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Se connecter
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Espace Enseignants</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gérez vos classes, saisissez les notes et suivez la progression de vos élèves efficacement.
                </p>
                
                <div className="bg-green-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold text-green-900 mb-4">Outils pédagogiques :</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Saisie des notes et appréciations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Gestion des emplois du temps
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Suivi des présences
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Ressources pédagogiques
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Communication parents
                    </li>
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Accès enseignant
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Espace Administration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Tableau de bord complet pour la gestion administrative et le pilotage de l'établissement.
                </p>
                
                <div className="bg-purple-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold text-purple-900 mb-4">Gestion complète :</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Gestion des inscriptions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Suivi des paiements
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Statistiques et rapports
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Gestion du personnel
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Configuration système
                    </li>
                  </ul>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  Accès admin
                </button>
              </div>
            </div>
          </div>

          {/* Connexion rapide */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Connexion rapide</h3>
            <div className="max-w-md mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Type d'utilisateur</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all">
                    <option>Parent/Élève</option>
                    <option>Enseignant</option>
                    <option>Administration</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Identifiant</label>
                  <input 
                    type="text" 
                    placeholder="Votre identifiant" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Mot de passe</label>
                  <input 
                    type="password" 
                    placeholder="Votre mot de passe" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 w-4 h-4 text-blue-600 rounded" />
                    <span className="text-sm text-gray-600">Se souvenir de moi</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">Mot de passe oublié ?</a>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section Emplois du temps */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Emplois du temps</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planning et horaires</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consultez les emplois du temps par classe, enseignant ou salle en temps réel
            </p>
          </div>

          {/* Options de consultation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Par classe</h3>
              <p className="text-gray-600 mb-6">Emploi du temps complet des classes de la 6ème à la 3ème</p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                Consulter
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Par enseignant</h3>
              <p className="text-gray-600 mb-6">Planning personnalisé de chaque membre du corps enseignant</p>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-colors font-semibold">
                Consulter
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Par salle</h3>
              <p className="text-gray-600 mb-6">Occupation et disponibilité des salles de classe et laboratoires</p>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                Consulter
              </button>
            </div>
          </div>

          {/* Exemple d'emploi du temps */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Emploi du temps - 6ème A</h3>
              <div className="flex items-center gap-4">
                <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                  <option>6ème A</option>
                  <option>6ème B</option>
                  <option>5ème A</option>
                  <option>5ème B</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                  Imprimer
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <th className="border border-blue-500 p-4 text-left font-bold">Horaires</th>
                    <th className="border border-blue-500 p-4 text-center font-bold">Lundi</th>
                    <th className="border border-blue-500 p-4 text-center font-bold">Mardi</th>
                    <th className="border border-blue-500 p-4 text-center font-bold">Mercredi</th>
                    <th className="border border-blue-500 p-4 text-center font-bold">Jeudi</th>
                    <th className="border border-blue-500 p-4 text-center font-bold">Vendredi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 p-4 font-semibold bg-gray-100">8h00 - 9h00</td>
                    <td className="border border-gray-200 p-4 text-center bg-blue-100 font-medium">
                      <div className="text-blue-800">Mathématiques</div>
                      <div className="text-xs text-blue-600">Salle 101</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-green-100 font-medium">
                      <div className="text-green-800">Français</div>
                      <div className="text-xs text-green-600">Salle 205</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-yellow-100 font-medium">
                      <div className="text-yellow-800">Histoire</div>
                      <div className="text-xs text-yellow-600">Salle 302</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-purple-100 font-medium">
                      <div className="text-purple-800">Sciences</div>
                      <div className="text-xs text-purple-600">Labo 1</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-red-100 font-medium">
                      <div className="text-red-800">Anglais</div>
                      <div className="text-xs text-red-600">Salle 108</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 p-4 font-semibold bg-gray-100">9h00 - 10h00</td>
                    <td className="border border-gray-200 p-4 text-center bg-green-100 font-medium">
                      <div className="text-green-800">Français</div>
                      <div className="text-xs text-green-600">Salle 205</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-blue-100 font-medium">
                      <div className="text-blue-800">Mathématiques</div>
                      <div className="text-xs text-blue-600">Salle 101</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-purple-100 font-medium">
                      <div className="text-purple-800">Sciences</div>
                      <div className="text-xs text-purple-600">Labo 1</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-yellow-100 font-medium">
                      <div className="text-yellow-800">Géographie</div>
                      <div className="text-xs text-yellow-600">Salle 302</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-red-100 font-medium">
                      <div className="text-red-800">Anglais</div>
                      <div className="text-xs text-red-600">Salle 108</div>
                    </td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-200 p-4 font-semibold text-center" colSpan={6}>
                      <div className="text-gray-600">10h00 - 10h15 : Récréation</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 p-4 font-semibold bg-gray-100">10h15 - 11h15</td>
                    <td className="border border-gray-200 p-4 text-center bg-orange-100 font-medium">
                      <div className="text-orange-800">EPS</div>
                      <div className="text-xs text-orange-600">Gymnase</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-pink-100 font-medium">
                      <div className="text-pink-800">Arts plastiques</div>
                      <div className="text-xs text-pink-600">Atelier</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-teal-100 font-medium">
                      <div className="text-teal-800">Musique</div>
                      <div className="text-xs text-teal-600">Salle 401</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-indigo-100 font-medium">
                      <div className="text-indigo-800">Technologie</div>
                      <div className="text-xs text-indigo-600">Labo Tech</div>
                    </td>
                    <td className="border border-gray-200 p-4 text-center bg-green-100 font-medium">
                      <div className="text-green-800">Français</div>
                      <div className="text-xs text-green-600">Salle 205</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Support et aide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Aide & Support</h3>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3">Guide d'utilisation</h4>
                <p className="text-gray-600 mb-4">Consultez notre guide complet pour utiliser efficacement votre espace numérique</p>
                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  Télécharger le guide
                  <Globe className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-900 mb-3">Support technique</h4>
                <p className="text-gray-600 mb-4">Notre équipe est disponible pour vous accompagner dans l'utilisation de la plateforme</p>
                <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition-colors">
                  Contacter le support
                  <Users className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nouveautés</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h4 className="font-bold text-gray-900 mb-2">Application mobile disponible</h4>
                <p className="text-gray-600 mb-2">Accédez à votre espace depuis votre smartphone iOS ou Android</p>
                <p className="text-xs text-gray-500">Il y a 2 jours</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h4 className="font-bold text-gray-900 mb-2">Messagerie améliorée</h4>
                <p className="text-gray-600 mb-2">Nouvelle fonctionnalité de chat en temps réel avec les enseignants</p>
                <p className="text-xs text-gray-500">Il y a 1 semaine</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h4 className="font-bold text-gray-900 mb-2">Emplois du temps interactifs</h4>
                <p className="text-gray-600 mb-2">Consultez et exportez vos plannings avec de nouvelles options</p>
                <p className="text-xs text-gray-500">Il y a 2 semaines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}