import { Handshake, Award, Target, Users } from 'lucide-react';

export default function PartenariatsPage() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Partenariats</h1>
          <p className="text-lg text-gray-600">Nos collaborations pour enrichir l'expérience éducative</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nos partenaires</h3>
            <p className="text-gray-600 mb-4">Institutions collaboratrices</p>
            <div className="text-2xl font-bold text-blue-600">25+</div>
            <div className="text-sm text-gray-500">Partenaires actifs</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sponsors</h3>
            <p className="text-gray-600 mb-4">Soutien financier et matériel</p>
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-500">Sponsors principaux</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Projets collaboratifs</h3>
            <p className="text-gray-600 mb-4">Initiatives communes</p>
            <div className="text-2xl font-bold text-purple-600">18</div>
            <div className="text-sm text-gray-500">Projets en cours</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Nos Partenaires Institutionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Ministère de l'Éducation</h3>
              <p className="text-sm text-gray-600 mb-3">Partenariat officiel pour l'amélioration de la qualité éducative</p>
              <div className="text-xs text-blue-600 font-medium">Partenaire depuis 2010</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">UNESCO</h3>
              <p className="text-sm text-gray-600 mb-3">École associée UNESCO pour la promotion de l'éducation de qualité</p>
              <div className="text-xs text-green-600 font-medium">Membre depuis 2015</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Université de Ouagadougou</h3>
              <p className="text-sm text-gray-600 mb-3">Collaboration pour l'orientation et la préparation universitaire</p>
              <div className="text-xs text-purple-600 font-medium">Partenaire depuis 2012</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Institut Français</h3>
              <p className="text-sm text-gray-600 mb-3">Échanges culturels et linguistiques avec la France</p>
              <div className="text-xs text-orange-600 font-medium">Partenaire depuis 2018</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">ONG Plan International</h3>
              <p className="text-sm text-gray-600 mb-3">Programmes d'éducation et de protection de l'enfance</p>
              <div className="text-xs text-red-600 font-medium">Partenaire depuis 2016</div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Fondation Orange</h3>
              <p className="text-sm text-gray-600 mb-3">Soutien aux technologies éducatives et à l'innovation</p>
              <div className="text-xs text-indigo-600 font-medium">Partenaire depuis 2020</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Projets en Cours</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-900 mb-2">Laboratoire Numérique</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Création d'un laboratoire informatique moderne avec 30 ordinateurs
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">En cours</span>
                  <span className="text-gray-500">Avec Fondation Orange</span>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-900 mb-2">Programme d'Excellence</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Formation continue des enseignants et amélioration pédagogique
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Actif</span>
                  <span className="text-gray-500">Avec UNESCO</span>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-900 mb-2">Échanges Internationaux</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Programme d'échange avec des collèges français et canadiens
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Planifié</span>
                  <span className="text-gray-500">Avec Institut Français</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Nos Sponsors</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Banque Atlantique</h3>
                  <p className="text-sm text-gray-600">Sponsor principal - Bourses d'excellence</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">Niveau Or</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Coris Bank</h3>
                  <p className="text-sm text-gray-600">Soutien aux activités sportives</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-600">Niveau Argent</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Onatel</h3>
                  <p className="text-sm text-gray-600">Connectivité internet et téléphonie</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-orange-600">Niveau Bronze</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Burkina Mining Company</h3>
                  <p className="text-sm text-gray-600">Équipements scientifiques</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-orange-600">Niveau Bronze</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Devenir Sponsor</h3>
              <p className="text-sm text-gray-600 mb-3">
                Rejoignez nos partenaires et contribuez à l'excellence éducative
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                Nous contacter
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Impact de nos Partenariats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Élèves bénéficiaires</div>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">50</div>
              <div className="text-sm text-gray-600">Bourses accordées</div>
            </div>
            
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15M</div>
              <div className="text-sm text-gray-600">FCFA investis</div>
            </div>
            
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}