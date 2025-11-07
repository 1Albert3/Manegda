export interface BlogArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  views: number;
  image?: string;
  excerpt: string;
  content: string;
}

export const blogData: BlogArticle[] = [
  {
    id: 1,
    title: "EXAMEN 2022-2023",
    category: "Education",
    date: "28-07-2023",
    time: "14:30",
    views: 2209,
    image: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Résultats exceptionnels pour nos élèves lors des examens de l'année scolaire 2022-2023.",
    content: "Les résultats des examens 2022-2023 témoignent une fois de plus de l'excellence académique du Lycée Sainte Marie de Cocody..."
  },
  {
    id: 2,
    title: "EXAMEN BACCALAUREAT 2022-2023",
    category: "Education",
    date: "28-07-2023",
    time: "10:15",
    views: 2350,
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Taux de réussite record au baccalauréat pour la promotion 2022-2023.",
    content: "Nos bacheliers ont brillé lors des épreuves du baccalauréat avec un taux de réussite exceptionnel..."
  },
  {
    id: 3,
    title: "CEREMONIE D'HONNEUR A L'EMBLEME NATIONAL",
    category: "Événements",
    date: "06-12-2022",
    time: "08:00",
    views: 1551,
    image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Cérémonie solennelle en l'honneur du drapeau national et des valeurs patriotiques.",
    content: "Une cérémonie empreinte de patriotisme et de respect s'est déroulée dans notre établissement..."
  },
  {
    id: 4,
    title: "LE GRAND DRAPEAU",
    category: "Événements",
    date: "24-10-2022",
    time: "09:30",
    views: 2416,
    image: "https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Installation d'un grand drapeau symbolisant l'unité et les valeurs de notre établissement.",
    content: "Le grand drapeau flottant fièrement représente notre engagement envers l'excellence et les valeurs nationales..."
  },
  {
    id: 5,
    title: "INAUGURATION DU THEATRE EXTERIEUR",
    category: "Infrastructure",
    date: "24-10-2022",
    time: "15:00",
    views: 1782,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Ouverture officielle du nouveau théâtre extérieur pour les activités culturelles.",
    content: "Un nouvel espace dédié aux arts et à la culture enrichit notre établissement..."
  }
];
