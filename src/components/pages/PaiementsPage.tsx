import { CreditCard, Receipt, DollarSign, Calendar } from 'lucide-react';

export default function PaiementsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Paiements & Scolarité</h1>
          <p className="text-lg text-gray-600">Gérez vos paiements et consultez vos factures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <DollarSign className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frais de scolarité</h3>
            <p className="text-gray-600 mb-4">Tarifs et modalités</p>
            <button className="text-green-600 hover:text-green-800 font-medium">Voir les tarifs →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <Calendar className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Suivi paiements</h3>
            <p className="text-gray-600 mb-4">État des paiements</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Consulter →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <CreditCard className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Paiement en ligne</h3>
            <p className="text-gray-600 mb-4">Payer en ligne sécurisé</p>
            <button className="text-purple-600 hover:text-purple-800 font-medium">Payer maintenant →</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <Receipt className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reçus & Factures</h3>
            <p className="text-gray-600 mb-4">Télécharger les documents</p>
            <button className="text-orange-600 hover:text-orange-800 font-medium">Télécharger →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Paiement rapide</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Montant à payer</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Frais de scolarité - 150,000 FCFA</option>
                  <option>Cantine - 25,000 FCFA</option>
                  <option>Transport - 30,000 FCFA</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mode de paiement</label>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-500 transition">
                    <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Carte bancaire</div>
                  </button>
                  <button type="button" className="p-4 border-2 border-green-200 rounded-lg hover:border-green-500 transition">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Mobile Money</div>
                  </button>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium">
                Procéder au paiement
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Historique des paiements</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div>
                  <h3 className="font-semibold">Frais de scolarité T1</h3>
                  <p className="text-sm text-gray-600">15 Janvier 2025</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">150,000 FCFA</div>
                  <div className="text-xs text-green-600">Payé</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <div>
                  <h3 className="font-semibold">Cantine T2</h3>
                  <p className="text-sm text-gray-600">En attente</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-yellow-600">25,000 FCFA</div>
                  <div className="text-xs text-yellow-600">En attente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}