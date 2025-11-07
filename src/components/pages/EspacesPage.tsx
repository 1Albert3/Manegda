import { Users, GraduationCap, Settings, LogIn } from 'lucide-react';

export default function EspacesPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Espaces Numériques</h1>
          <p className="text-lg text-gray-600">Accédez à votre espace personnalisé selon votre profil</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-8 text-center">
              <Users className="w-20 h-20 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Espace Parents/Élèves</h3>
              <p className="text-gray-600 mb-6">
                Consultez les notes, emplois du temps, bulletins et communiquez avec l'établissement
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Suivi des notes en temps réel</li>
                <li>• Téléchargement des bulletins</li>
                <li>• Messagerie avec les enseignants</li>
                <li>• Calendrier des événements</li>
                <li>• Gestion des absences</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                Se connecter
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-8 text-center">
              <GraduationCap className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Espace Enseignants</h3>
              <p className="text-gray-600 mb-6">
                Gérez vos classes, saisissez les notes et suivez la progression de vos élèves
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Saisie des notes et appréciations</li>
                <li>• Gestion des emplois du temps</li>
                <li>• Suivi des présences</li>
                <li>• Ressources pédagogiques</li>
                <li>• Communication parents</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                Accès enseignant
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="p-8 text-center">
              <Settings className="w-20 h-20 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Espace Administration</h3>
              <p className="text-gray-600 mb-6">
                Tableau de bord complet pour la gestion administrative de l'établissement
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Gestion des inscriptions</li>
                <li>• Suivi des paiements</li>
                <li>• Statistiques et rapports</li>
                <li>• Gestion du personnel</li>
                <li>• Configuration système</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition font-medium flex items-center justify-center gap-2">
                <LogIn className="w-5 h-5" />
                Accès admin
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Connexion Rapide</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type d'utilisateur</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Parent/Élève</option>
                  <option>Enseignant</option>
                  <option>Administration</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Identifiant</label>
                <input type="text" placeholder="Votre identifiant" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
                <input type="password" placeholder="Votre mot de passe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-600">Se souvenir de moi</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Mot de passe oublié ?</a>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium">
                Se connecter
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Aide & Support</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Guide d'utilisation</h3>
                <p className="text-sm text-gray-600">Consultez notre guide complet pour utiliser votre espace</p>
                <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">Télécharger le guide →</button>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Support technique</h3>
                <p className="text-sm text-gray-600">Besoin d'aide ? Contactez notre équipe support</p>
                <button className="mt-2 text-green-600 hover:text-green-800 text-sm font-medium">Contacter le support →</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Nouveautés</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Nouvelle interface mobile</h3>
                <p className="text-sm text-gray-600">Application mobile disponible sur iOS et Android</p>
                <p className="text-xs text-gray-500">Il y a 2 jours</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Messagerie améliorée</h3>
                <p className="text-sm text-gray-600">Nouvelle fonctionnalité de chat en temps réel</p>
                <p className="text-xs text-gray-500">Il y a 1 semaine</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}