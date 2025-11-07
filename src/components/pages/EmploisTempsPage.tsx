import { Calendar, Clock, User, MapPin } from 'lucide-react';

export default function EmploisTempsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Emplois du temps</h1>
          <p className="text-lg text-gray-600">Consultez les emplois du temps par classe, enseignant ou salle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Par classe</h3>
            <p className="text-gray-600">Emploi du temps des classes</p>
          </button>
          
          <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Par enseignant</h3>
            <p className="text-gray-600">Planning des professeurs</p>
          </button>
          
          <button className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Par salle</h3>
            <p className="text-gray-600">Occupation des salles</p>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Emploi du temps - 6ème A</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border p-3 text-left">Horaires</th>
                  <th className="border p-3 text-center">Lundi</th>
                  <th className="border p-3 text-center">Mardi</th>
                  <th className="border p-3 text-center">Mercredi</th>
                  <th className="border p-3 text-center">Jeudi</th>
                  <th className="border p-3 text-center">Vendredi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-medium">8h00 - 9h00</td>
                  <td className="border p-3 text-center bg-blue-100">Mathématiques</td>
                  <td className="border p-3 text-center bg-green-100">Français</td>
                  <td className="border p-3 text-center bg-yellow-100">Histoire</td>
                  <td className="border p-3 text-center bg-purple-100">Sciences</td>
                  <td className="border p-3 text-center bg-red-100">Anglais</td>
                </tr>
                <tr>
                  <td className="border p-3 font-medium">9h00 - 10h00</td>
                  <td className="border p-3 text-center bg-green-100">Français</td>
                  <td className="border p-3 text-center bg-blue-100">Mathématiques</td>
                  <td className="border p-3 text-center bg-purple-100">Sciences</td>
                  <td className="border p-3 text-center bg-yellow-100">Géographie</td>
                  <td className="border p-3 text-center bg-red-100">Anglais</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}