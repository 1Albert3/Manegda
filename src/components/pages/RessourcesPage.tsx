import { FileText, Download, BookOpen, Bell, HelpCircle, ChevronDown, Search, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function RessourcesPage() {
  const [activeTab, setActiveTab] = useState('documents');
  const [activeCategory, setActiveCategory] = useState('inscriptions');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'inscriptions', name: 'Inscriptions', icon: '📝' },
    { id: 'paiements', name: 'Paiements', icon: '💳' },
    { id: 'programmes', name: 'Programmes', icon: '📚' },
    { id: 'transport', name: 'Transport', icon: '🚌' },
    { id: 'general', name: 'Général', icon: '❓' }
  ];

  const faqData = {
    inscriptions: [
      {
        question: "Quand ont lieu les inscriptions pour l'année scolaire 2025-2026 ?",
        answer: "Les inscriptions se déroulent du 1er mai au 30 juin 2025. Les réinscriptions pour les anciens élèves commencent le 15 avril."
      },
      {
        question: "Quels documents sont nécessaires pour l'inscription ?",
        answer: "Vous devez fournir : acte de naissance, certificat médical, photos d'identité, bulletins de l'année précédente, et le formulaire d'inscription complété."
      },
      {
        question: "Y a-t-il un test d'admission ?",
        answer: "Oui, un test d'évaluation est organisé pour les nouveaux élèves afin de déterminer leur niveau et leur classe d'affectation."
      }
    ],
    paiements: [
      {
        question: "Quels sont les modes de paiement acceptés ?",
        answer: "Nous acceptons les paiements en espèces, par chèque, virement bancaire, et mobile money (Orange Money, Moov Money)."
      },
      {
        question: "Peut-on payer les frais de scolarité en plusieurs fois ?",
        answer: "Oui, un échéancier de paiement peut être établi. Les frais peuvent être réglés en 3 tranches maximum."
      }
    ],
    programmes: [
      {
        question: "Quelles matières sont enseignées au collège ?",
        answer: "Nous enseignons toutes les matières du programme officiel : Français, Mathématiques, Histoire-Géographie, Sciences, Anglais, EPS, Arts plastiques, et Éducation civique."
      },
      {
        question: "Y a-t-il des cours de soutien ?",
        answer: "Oui, des cours de soutien sont organisés les mercredis et samedis pour les élèves en difficulté, ainsi que des cours de renforcement pour les élèves avancés."
      }
    ],
    transport: [
      {
        question: "Le collège propose-t-il un service de transport ?",
        answer: "Oui, nous avons un service de transport scolaire qui dessert 12 secteurs de Ouagadougou avec des bus sécurisés."
      }
    ],
    general: [
      {
        question: "Quels sont les horaires de cours ?",
        answer: "Les cours se déroulent de 7h30 à 16h30 du lundi au vendredi, avec une pause déjeuner de 12h00 à 13h30."
      },
      {
        question: "Y a-t-il une cantine scolaire ?",
        answer: "Oui, notre cantine propose des repas équilibrés préparés sur place. Le tarif mensuel est de 25,000 FCFA."
      }
    ]
  };

  const filteredQuestions = faqData[activeCategory as keyof typeof faqData].filter(
    item => item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-['Inter',sans-serif] bg-gradient-to-br from-orange-50 to-red-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-600 bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Centre de ressources</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ressources & <span className="text-orange-300">Support</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Accédez à tous les documents officiels et trouvez les réponses à vos questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Navigation par onglets */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'documents'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Documents officiels
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'faq'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Questions fréquentes
            </button>
          </div>
        </div>

        {/* Section Documents */}
        {activeTab === 'documents' && (
          <div>
            {/* Types de documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Règlement intérieur</h3>
                <p className="text-gray-600 mb-6">Règles de vie scolaire et code de conduite</p>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                  Consulter
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Formulaires</h3>
                <p className="text-gray-600 mb-6">Documents administratifs à télécharger</p>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-colors font-semibold">
                  Télécharger
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Listes fournitures</h3>
                <p className="text-gray-600 mb-6">Matériel scolaire requis par classe</p>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                  Télécharger
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Bell className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Circulaires</h3>
                <p className="text-gray-600 mb-6">Informations officielles et actualités</p>
                <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-xl hover:bg-orange-700 transition-colors font-semibold">
                  Consulter
                </button>
              </div>
            </div>

            {/* Documents récents et formulaires */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Documents récents</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Règlement intérieur 2024-2025</h4>
                      <p className="text-gray-600 text-sm">Mis à jour le 15 septembre 2024</p>
                    </div>
                    <Download className="w-5 h-5 text-blue-600" />
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Liste fournitures 6ème</h4>
                      <p className="text-gray-600 text-sm">Année scolaire 2024-2025</p>
                    </div>
                    <Download className="w-5 h-5 text-green-600" />
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">Circulaire n°003/2024</h4>
                      <p className="text-gray-600 text-sm">Organisation des examens</p>
                    </div>
                    <Download className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Formulaires disponibles</h3>
                <div className="space-y-6">
                  <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all">
                    <h4 className="font-bold text-gray-900 mb-3">Certificat de scolarité</h4>
                    <p className="text-gray-600 mb-4">Pour obtenir un certificat officiel de scolarité</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold">
                      Télécharger
                    </button>
                  </div>

                  <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all">
                    <h4 className="font-bold text-gray-900 mb-3">Autorisation de sortie</h4>
                    <p className="text-gray-600 mb-4">Pour les sorties pédagogiques et activités</p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold">
                      Télécharger
                    </button>
                  </div>

                  <div className="p-6 border-2 border-gray-100 rounded-2xl hover:border-purple-200 hover:shadow-md transition-all">
                    <h4 className="font-bold text-gray-900 mb-3">Fiche d'infirmerie</h4>
                    <p className="text-gray-600 mb-4">Informations médicales de l'élève</p>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-semibold">
                      Télécharger
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Listes de fournitures par classe */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Listes de fournitures par classe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['6ème', '5ème', '4ème', '3ème'].map((classe, index) => {
                  const colors = ['blue', 'green', 'purple', 'orange'];
                  const color = colors[index];
                  return (
                    <div key={classe} className={`p-6 bg-${color}-50 rounded-2xl text-center border border-${color}-100`}>
                      <h4 className={`font-bold text-${color}-900 mb-3 text-xl`}>{classe}</h4>
                      <p className="text-gray-600 mb-4">Liste complète des fournitures scolaires</p>
                      <button className={`bg-${color}-600 text-white px-6 py-3 rounded-xl hover:bg-${color}-700 transition-colors font-semibold w-full`}>
                        Télécharger PDF
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Section FAQ */}
        {activeTab === 'faq' && (
          <div>
            {/* Barre de recherche */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Catégories */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-32">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">Catégories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 ${
                          activeCategory === category.id
                            ? 'bg-orange-100 text-orange-900 font-semibold shadow-md'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="text-2xl">{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Questions et réponses */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-xl p-10">
                  <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-gray-900">
                    <span className="text-3xl">
                      {categories.find(c => c.id === activeCategory)?.icon}
                    </span>
                    {categories.find(c => c.id === activeCategory)?.name}
                  </h2>

                  {filteredQuestions.length === 0 ? (
                    <div className="text-center py-12">
                      <HelpCircle className="w-20 h-20 text-gray-300 mx-auto mb-6" />
                      <p className="text-gray-500 text-lg">Aucune question trouvée pour votre recherche.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {filteredQuestions.map((item, index) => (
                        <div key={index} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-all"
                          >
                            <span className="font-semibold text-gray-900 pr-6 text-lg">{item.question}</span>
                            <ChevronDown
                              className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
                                openQuestion === index ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openQuestion === index && (
                            <div className="px-6 pb-6">
                              <div className="pt-4 border-t-2 border-gray-100">
                                <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Contact */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-10">
          <div className="text-center mb-12">
            <HelpCircle className="w-20 h-20 text-orange-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Besoin d'aide supplémentaire ?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos démarches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Téléphone</h3>
              <p className="text-gray-600 mb-4">Appelez-nous directement</p>
              <p className="font-semibold text-blue-600">+226 XX XX XX XX</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Email</h3>
              <p className="text-gray-600 mb-4">Écrivez-nous un message</p>
              <p className="font-semibold text-green-600">contact@wendmanegda.bf</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Horaires</h3>
              <p className="text-gray-600 mb-4">Nous sommes ouverts</p>
              <p className="font-semibold text-purple-600">Lun-Ven: 7h30-17h00</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Nous contacter
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all font-bold text-lg">
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}