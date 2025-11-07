export interface MenuItem {
  label: string;
  url: string;
  external?: boolean;
  submenu?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    label: "ACCUEIL",
    url: "/"
  },
  {
    label: "ÉTABLISSEMENT",
    url: "/etablissement",
    submenu: [
      { label: "Mot du Proviseur", url: "/etablissement/proviseur" },
      { label: "Présentation du lycée", url: "/etablissement/presentation" },
      {
        label: "Administration",
        url: "/etablissement/administration",
        submenu: [
          { label: "Secrétariat & Standard", url: "/etablissement/administration/secretariat" },
          { label: "Censorat", url: "/etablissement/administration/censorat" },
          { label: "Intendance", url: "/etablissement/administration/intendance" },
          { label: "Les divisions", url: "/etablissement/administration/divisions" },
          { label: "Inspectorat d'orientation", url: "/etablissement/administration/orientation" },
          { label: "Service médico-social", url: "/etablissement/administration/medico-social" },
          { label: "Service informatique", url: "/etablissement/administration/informatique" }
        ]
      },
      {
        label: "Enseignants",
        url: "/etablissement/enseignants",
        submenu: [
          { label: "Conseils d'Enseignements", url: "/etablissement/enseignants/conseils" },
          { label: "Activités de fin de trimestre", url: "/etablissement/enseignants/activites" },
          { label: "Saisies des notes", url: "https://notes.lyceesaintemarie.ci", external: true }
        ]
      },
      { label: "Plateforme LIMITLESS", url: "https://limitless.lyceesaintemarie.ci", external: true },
      { label: "Projet établissement", url: "/etablissement/projet" },
      { label: "Communauté Saint François-Xavier", url: "/etablissement/communaute" }
    ]
  },
  {
    label: "INFORMATIONS",
    url: "/informations",
    submenu: [
      { label: "Résultats scolaires", url: "/informations/resultats" },
      {
        label: "Admission",
        url: "/informations/admission",
        submenu: [
          { label: "Présentation", url: "/informations/admission/presentation" },
          { label: "Inscription en ligne", url: "/informations/admission/en-ligne" },
          { label: "Inscription physique", url: "/informations/admission/physique" }
        ]
      },
      { label: "Internat & réfectoire", url: "/informations/internat" },
      { label: "Transport", url: "/informations/transport" },
      { label: "Accès à CODIPOST", url: "https://codipost.ci", external: true },
      { label: "Galerie photos", url: "/informations/galerie" }
    ]
  },
  {
    label: "VIE SCOLAIRE",
    url: "/vie-scolaire",
    submenu: [
      { label: "COGES", url: "/vie-scolaire/coges" },
      { label: "Conseil scolaire", url: "/vie-scolaire/conseil" },
      {
        label: "Activités extrascolaires",
        url: "/vie-scolaire/activites",
        submenu: [
          { label: "Présentation", url: "/vie-scolaire/activites/presentation" },
          { label: "Journée des talents", url: "/vie-scolaire/activites/talents" },
          { label: "Passation de flambeau", url: "/vie-scolaire/activites/passation" }
        ]
      },
      { label: "Fondation Sainte Marie", url: "/vie-scolaire/fondation" },
      { label: "Clubs & Associations", url: "/vie-scolaire/clubs" }
    ]
  },
  {
    label: "CDI",
    url: "/cdi",
    submenu: [
      { label: "Présentation", url: "/cdi/presentation" },
      { label: "Catalogue en ligne", url: "https://catalogue.lyceesaintemarie.ci", external: true },
      { label: "Activités", url: "/cdi/activites" },
      { label: "Page Facebook", url: "https://facebook.com/cdi.saintemarie", external: true },
      { label: "Bibliothèques numériques", url: "/cdi/bibliotheques" }
    ]
  },
  {
    label: "BLOG",
    url: "/blog"
  },
  {
    label: "RESSOURCES",
    url: "/ressources"
  },
  {
    label: "CONTACTS",
    url: "/contacts"
  }
];
