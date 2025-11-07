import { Play, FileText, Award, Download } from 'lucide-react';

export default function ELearningPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">E-Learning</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plateforme d'apprentissage en ligne pour un enseignement moderne et interactif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <Play className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cours en ligne</h3>
            <p className="text-gray-600 mb-4">Vidéos pédagogiques interactives</p>
            <button className="text-red-600 hover:text-red-800 font-medium">Accéder →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <FileText className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ressources</h3>
            <p className="text-gray-600 mb-4">Documents et supports de cours</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Télécharger →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <Award className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quiz interactifs</h3>
            <p className="text-gray-600 mb-4">Évaluations en temps réel</p>
            <button className="text-green-600 hover:text-green-800 font-medium">Commencer →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <Download className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Devoirs numériques</h3>
            <p className="text-gray-600 mb-4">Soumission en ligne</p>
            <button className="text-purple-600 hover:text-purple-800 font-medium">Soumettre →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cours disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mathématiques 6ème</h3>
                    <p className="text-sm text-gray-600">15 leçons</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-xs text-gray-600">Progression: 75%</p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Français 6ème</h3>
                    <p className="text-sm text-gray-600">12 leçons</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <p className="text-xs text-gray-600">Progression: 60%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistiques</h2>
            <div className="space-y-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Taux de réussite</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">24h</div>
                <div className="text-sm text-gray-600">Temps d'étude</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}