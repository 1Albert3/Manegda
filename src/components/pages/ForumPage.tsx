import { MessageCircle, Share2, BookOpen, HelpCircle } from 'lucide-react';

export default function ForumPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Forum Éducatif</h1>
          <p className="text-lg text-gray-600">Espace d'échange et de partage pour la communauté éducative</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discussions</h3>
            <p className="text-gray-600 mb-4">Échanges entre élèves et enseignants</p>
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-gray-500">Messages aujourd'hui</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Share2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Partage cours</h3>
            <p className="text-gray-600 mb-4">Ressources partagées</p>
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-gray-500">Documents partagés</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Devoirs</h3>
            <p className="text-gray-600 mb-4">Aide aux devoirs</p>
            <div className="text-2xl font-bold text-purple-600">42</div>
            <div className="text-sm text-gray-500">Questions en attente</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <HelpCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Conseils révisions</h3>
            <p className="text-gray-600 mb-4">Méthodes de travail</p>
            <div className="text-2xl font-bold text-orange-600">23</div>
            <div className="text-sm text-gray-500">Conseils partagés</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Discussions récentes</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">AM</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">Aide en mathématiques - Équations du 2nd degré</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Mathématiques</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Bonjour, j'ai des difficultés avec les équations du second degré. Quelqu'un pourrait-il m'expliquer la méthode du discriminant ?
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Par Aminata M. - 6ème A</span>
                      <span>Il y a 2h</span>
                      <span>5 réponses</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">IB</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">Partage : Résumé cours d'histoire</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Histoire</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Salut tout le monde ! Je partage mon résumé du chapitre sur l'indépendance du Burkina Faso. J'espère que ça vous aidera !
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Par Ibrahim B. - 4ème C</span>
                      <span>Il y a 4h</span>
                      <span>12 téléchargements</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">FS</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">Conseils pour bien réviser les examens</h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Méthodologie</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Voici quelques conseils qui m'ont aidé à réussir mes examens : planification, fiches de révision, et pauses régulières...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Par Fatou S. - 3ème B</span>
                      <span>Il y a 1 jour</span>
                      <span>8 réponses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Créer une discussion</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                <input type="text" placeholder="Titre de votre discussion" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} placeholder="Décrivez votre question ou partagez vos ressources..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium">
                Publier la discussion
              </button>
            </form>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Règles du forum</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Respectez vos camarades</li>
                <li>• Pas de contenu inapproprié</li>
                <li>• Aidez-vous mutuellement</li>
                <li>• Vérifiez avant de poser une question</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Ressources partagées récemment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Formulaire mathématiques</h3>
                  <p className="text-sm text-gray-600">Par Prof. Ouédraogo</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Toutes les formules importantes pour le BEPC</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Télécharger →</button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <Share2 className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold">Carte mentale - SVT</h3>
                  <p className="text-sm text-gray-600">Par Salif K. - 3ème A</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Reproduction humaine - Schémas et explications</p>
              <button className="text-green-600 hover:text-green-800 text-sm font-medium">Voir →</button>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold">Méthode dissertation</h3>
                  <p className="text-sm text-gray-600">Par Mariam T. - 4ème B</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">Comment bien structurer une dissertation en français</p>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">Lire →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}