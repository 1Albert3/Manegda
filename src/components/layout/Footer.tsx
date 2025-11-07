import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeMessage('Veuillez entrer une adresse e-mail valide.');
      return;
    }
    setSubscribeMessage('Merci pour votre inscription !');
    setEmail('');
    setTimeout(() => setSubscribeMessage(''), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nous contacter</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  Lycée Sainte Marie de Cocody<br />
                  Cocody, Abidjan<br />
                  Côte d'Ivoire
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+22522440965" className="text-sm text-gray-300 hover:text-white">
                  (+225) 22 44 09 65
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@lyceesaintemarie.ci" className="text-sm text-gray-300 hover:text-white">
                  contact@lyceesaintemarie.ci
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="#" className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/etablissement" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Etablissement
                </a>
              </li>
              <li>
                <a href="/informations" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Informations
                </a>
              </li>
              <li>
                <a href="/vie-scolaire" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Vie scolaire
                </a>
              </li>
              <li>
                <a href="/cdi" className="text-sm text-gray-300 hover:text-white transition-colors">
                  CDI
                </a>
              </li>
              <li>
                <a href="/contacts" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://menetfp.gouv.ci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  MENETFP
                </a>
              </li>
              <li>
                <a
                  href="https://www.unesco.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  UNESCO
                </a>
              </li>
              <li>
                <a
                  href="https://www.goethe.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  GOETHE Institut
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  DECO
                </a>
              </li>
              <li>
                <a
                  href="https://www.unesco.org/en/aspnet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Réseau des écoles associées
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  ALYSMA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Restez informé(e) de nos activités et information
            </p>
            <form onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                Votre adresse e-mail :
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors"
                >
                  Souscrire
                </button>
              </div>
              {subscribeMessage && (
                <p className={`text-sm mt-2 ${subscribeMessage.includes('Merci') ? 'text-green-400' : 'text-red-400'}`}>
                  {subscribeMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              LSM
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Copyright &copy; 2020 Lycée Sainte Marie de Cocody, Abidjan | Tous les droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
