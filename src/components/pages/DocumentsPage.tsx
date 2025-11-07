import { FileText, Download, BookOpen, Bell } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Documents</h1>
          <p className="text-lg text-gray-600">Accédez à tous les documents officiels de l'établissement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Règlement intérieur</h3>
            <p className="text-gray-600 mb-4">Règles de vie scolaire</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Consulter →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Formulaires</h3>
            <p className="text-gray-600 mb-4">Documents administratifs</p>
            <button className="text-green-600 hover:text-green-800 font-medium">Télécharger →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Listes fournitures</h3>
            <p className="text-gray-600 mb-4">Matériel scolaire requis</p>
            <button className="text-purple-600 hover:text-purple-800 font-medium">Télécharger →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Bell className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Circulaires</h3>
            <p className="text-gray-600 mb-4">Informations officielles</p>
            <button className="text-orange-600 hover:text-orange-800 font-medium">Consulter →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Documents récents</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <FileText className="w-8 h-8 text-blue-600" />
                <div className="flex-1">
                  <h3 className="font-semibold">Règlement intérieur 2024-2025</h3>
                  <p className="text-sm text-gray-600">Mis à jour le 15 septembre 2024</p>
                </div>
                <Download className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <FileText className="w-8 h-8 text-green-600" />
                <div className="flex-1">
                  <h3 className="font-semibold">Liste fournitures 6ème</h3>
                  <p className="text-sm text-gray-600">Année scolaire 2024-2025</p>
                </div>
                <Download className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <Bell className="w-8 h-8 text-orange-600" />
                <div className="flex-1">
                  <h3 className="font-semibold">Circulaire n°003/2024</h3>
                  <p className="text-sm text-gray-600">Organisation des examens</p>
                </div>
                <Download className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Formulaires disponibles</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Demande de certificat de scolarité</h3>
                <p className="text-sm text-gray-600 mb-3">Pour obtenir un certificat officiel</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                  Télécharger
                </button>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Autorisation de sortie</h3>
                <p className="text-sm text-gray-600 mb-3">Pour les sorties pédagogiques</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
                  Télécharger
                </button>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-2">Fiche d'infirmerie</h3>
                <p className="text-sm text-gray-600 mb-3">Informations médicales de l'élève</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Listes de fournitures par classe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <h3 className="font-semibold text-blue-900 mb-2">6ème</h3>
              <p className="text-sm text-gray-600 mb-3">Liste complète des fournitures</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition w-full">
                Télécharger PDF
              </button>
            </div>

            <div className="p-4 bg-green-50 rounded-lg text-center">
              <h3 className="font-semibold text-green-900 mb-2">5ème</h3>
              <p className="text-sm text-gray-600 mb-3">Liste complète des fournitures</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition w-full">
                Télécharger PDF
              </button>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <h3 className="font-semibold text-purple-900 mb-2">4ème</h3>
              <p className="text-sm text-gray-600 mb-3">Liste complète des fournitures</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition w-full">
                Télécharger PDF
              </button>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg text-center">
              <h3 className="font-semibold text-orange-900 mb-2">3ème</h3>
              <p className="text-sm text-gray-600 mb-3">Liste complète des fournitures</p>
              <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700 transition w-full">
                Télécharger PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}