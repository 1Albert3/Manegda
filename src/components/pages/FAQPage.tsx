import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
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
      },
      {
        question: "Peut-on s'inscrire en cours d'année ?",
        answer: "Les inscriptions en cours d'année sont possibles sous réserve de places disponibles et après étude du dossier scolaire."
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
      },
      {
        question: "Que se passe-t-il en cas de retard de paiement ?",
        answer: "Un délai de grâce de 15 jours est accordé. Au-delà, des frais de retard peuvent s'appliquer et l'élève peut être exclu temporairement."
      },
      {
        question: "Les frais de scolarité incluent-ils les fournitures ?",
        answer: "Non, les frais de scolarité couvrent uniquement l'enseignement. Les fournitures scolaires sont à la charge des familles."
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
      },
      {
        question: "Le collège prépare-t-il au BEPC ?",
        answer: "Absolument. Nos élèves de 3ème bénéficient d'une préparation intensive au BEPC avec des examens blancs réguliers."
      },
      {
        question: "Y a-t-il des activités parascolaires ?",
        answer: "Oui, nous proposons des clubs (lecture, débat, sciences), des activités sportives, et des sorties pédagogiques."
      }
    ],
    transport: [
      {
        question: "Le collège propose-t-il un service de transport ?",
        answer: "Oui, nous avons un service de transport scolaire qui dessert 12 secteurs de Ouagadougou avec des bus sécurisés."
      },
      {
        question: "Quels sont les horaires du transport scolaire ?",
        answer: "Départ le matin entre 6h30 et 7h30, retour le soir entre 16h30 et 17h30 selon les secteurs."
      },
      {
        question: "Quel est le coût du transport scolaire ?",
        answer: "Le tarif mensuel est de 30,000 FCFA. Des réductions sont accordées pour les familles nombreuses (2ème enfant -10%, 3ème enfant -20%)."
      },
      {
        question: "Que faire si mon enfant rate le bus ?",
        answer: "En cas d'absence au point de ramassage, l'enfant doit se rendre au collège par ses propres moyens. Le bus ne peut pas attendre."
      }
    ],
    general: [
      {
        question: "Quels sont les horaires de cours ?",
        answer: "Les cours se déroulent de 7h30 à 16h30 du lundi au vendredi, avec une pause déjeuner de 12h00 à 13h30."
      },
      {
        question: "Comment contacter l'administration ?",
        answer: "Vous pouvez nous joindre par téléphone, email, ou vous présenter directement au secrétariat aux heures d'ouverture."
      },
      {
        question: "Y a-t-il une cantine scolaire ?",
        answer: "Oui, notre cantine propose des repas équilibrés préparés sur place. Le tarif mensuel est de 25,000 FCFA."
      },
      {
        question: "Comment suivre les résultats de mon enfant ?",
        answer: "Les parents ont accès à un espace numérique pour consulter les notes, bulletins et emplois du temps en temps réel."
      }
    ]
  };

  const filteredQuestions = faqData[activeCategory as keyof typeof faqData].filter(
    item => item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Questions Fréquentes</h1>
          <p className="text-lg text-gray-600">Trouvez rapidement les réponses à vos questions</p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
              <h3 className="text-lg font-bold mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition flex items-center gap-3 ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-900 font-medium'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">
                  {categories.find(c => c.id === activeCategory)?.icon}
                </span>
                {categories.find(c => c.id === activeCategory)?.name}
              </h2>

              {filteredQuestions.length === 0 ? (
                <div className="text-center py-8">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Aucune question trouvée pour votre recherche.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                        className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition"
                      >
                        <span className="font-medium pr-4">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            openQuestion === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openQuestion === index && (
                        <div className="px-4 pb-4">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-gray-600 mb-6">
              Notre équipe est là pour vous aider. N'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                Nous contacter
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Téléphone</h3>
            <p className="text-sm text-gray-600">+226 XX XX XX XX</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-600">contact@wendmanegda.bf</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕒</span>
            </div>
            <h3 className="font-semibold mb-2">Horaires</h3>
            <p className="text-sm text-gray-600">Lun-Ven: 7h30-17h00</p>
          </div>
        </div>
      </div>
    </div>
  );
}