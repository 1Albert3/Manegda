import { Play, FileText, Award, Download, MessageCircle, Share2, BookOpen, HelpCircle, Users, Zap, Monitor, Globe } from 'lucide-react';

export default function PlateformeNumeriquePage() {
  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-cyan-50 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-cyan-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Monitor className="w-5 h-5" />
            <span className="text-sm font-medium">Apprentissage numérique innovant</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Plateforme <span className="text-cyan-300">Numérique</span>
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre écosystème d'apprentissage interactif alliant cours en ligne et communauté éducative.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Statistiques de la plateforme */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
            <p className="text-gray-600 font-medium">Cours vidéo</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">1,200+</div>
            <p className="text-gray-600 font-medium">Utilisateurs actifs</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
            <p className="text-gray-600 font-medium">Messages échangés</p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <p className="text-gray-600 font-medium">Taux de réussite</p>
          </div>
        </div>

        {/* Section E-Learning */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
              <Play className="w-5 h-5" />
              <span className="text-sm font-medium">E-Learning</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cours en ligne interactifs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accédez à une bibliothèque complète de cours vidéo, ressources et évaluations interactives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Cours vidéo HD</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Leçons interactives avec supports visuels et exercices pratiques.</p>
              <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold transition-colors">
                Accéder aux cours
                <Play className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ressources PDF</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Documents de cours, fiches de révision et supports téléchargeables.</p>
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                Télécharger
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quiz interactifs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Évaluations en temps réel avec correction automatique et feedback.</p>
              <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition-colors">
                Commencer un quiz
                <Zap className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Accès 24/7</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Apprenez à votre rythme, où que vous soyez, à tout moment.</p>
              <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                Se connecter
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cours populaires */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Cours les plus populaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mathématiques 6ème</h4>
                    <p className="text-sm text-gray-600">15 leçons • 8h de contenu</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div className="bg-blue-600 h-3 rounded-full transition-all duration-1000" style={{width: '75%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progression: 75%</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">En cours</span>
                </div>
              </div>

              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Français 5ème</h4>
                    <p className="text-sm text-gray-600">12 leçons • 6h de contenu</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div className="bg-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '60%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progression: 60%</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">En cours</span>
                </div>
              </div>

              <div className="border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sciences 4ème</h4>
                    <p className="text-sm text-gray-600">18 leçons • 10h de contenu</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div className="bg-purple-600 h-3 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progression: 90%</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Presque fini</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Forum */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Forum Éducatif</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Communauté d'apprentissage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Échangez, partagez et apprenez ensemble dans notre espace communautaire bienveillant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Discussions</h3>
              <p className="text-gray-600 mb-4">Échanges entre élèves et enseignants</p>
              <div className="text-3xl font-bold text-blue-600 mb-1">156</div>
              <div className="text-sm text-gray-500">Messages aujourd'hui</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Partage de cours</h3>
              <p className="text-gray-600 mb-4">Ressources partagées</p>
              <div className="text-3xl font-bold text-green-600 mb-1">89</div>
              <div className="text-sm text-gray-500">Documents partagés</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Aide aux devoirs</h3>
              <p className="text-gray-600 mb-4">Entraide scolaire</p>
              <div className="text-3xl font-bold text-purple-600 mb-1">42</div>
              <div className="text-sm text-gray-500">Questions en attente</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Conseils révisions</h3>
              <p className="text-gray-600 mb-4">Méthodes de travail</p>
              <div className="text-3xl font-bold text-orange-600 mb-1">23</div>
              <div className="text-sm text-gray-500">Conseils partagés</div>
            </div>
          </div>

          {/* Discussions récentes et création */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Discussions récentes</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">AM</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-bold text-gray-900">Aide en mathématiques - Équations du 2nd degré</h4>
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Mathématiques</span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      Bonjour, j'ai des difficultés avec les équations du second degré. Quelqu'un pourrait-il m'expliquer la méthode du discriminant ?
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>Par Aminata M. - 6ème A</span>
                      <span>Il y a 2h</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        5 réponses
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">IB</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-bold text-gray-900">Partage : Résumé cours d'histoire</h4>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Histoire</span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      Salut tout le monde ! Je partage mon résumé du chapitre sur l'indépendance du Burkina Faso. J'espère que ça vous aidera !
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>Par Ibrahim B. - 4ème C</span>
                      <span>Il y a 4h</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        12 téléchargements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Créer une discussion</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Catégorie</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all">
                    <option>Mathématiques</option>
                    <option>Français</option>
                    <option>Histoire-Géographie</option>
                    <option>Sciences</option>
                    <option>Anglais</option>
                    <option>Méthodologie</option>
                    <option>Général</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Titre</label>
                  <input 
                    type="text" 
                    placeholder="Titre de votre discussion" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Décrivez votre question ou partagez vos ressources..." 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Publier la discussion
                </button>
              </form>

              <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4">Règles du forum</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Respectez vos camarades
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Pas de contenu inapproprié
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Aidez-vous mutuellement
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Vérifiez avant de poser une question
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}