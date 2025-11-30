export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  color?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tour Horizon - Structure IGH",
    description:
      "Conception et analyse structurelle d'une tour mixte (bureaux/logements) de 35 étages. Utilisation d'ETABS pour les calculs sismiques et Revit pour la modélisation BIM collaborative. Optimisation de la structure béton armé pour réduire l'empreinte carbone et assurer la stabilité au vent.",
    imageUrl:
      "https://www.notion.so/image/attachment%3A2522dd98-6809-4891-8ddc-5d2d2a8d25a8%3AWhatsApp_Image_2025-11-03_at_3.31.40_PM.jpeg?table=block&id=2a92f733-57f2-8098-849a-f5512d879903&spaceId=64963c68-8247-4bdd-ae86-2b67ed200724&width=2000&userId=d4452dfd-e28f-4239-99a5-40d7e85378d9&cache=v2",
    link: "#",
    tags: ["ETABS", "Revit", "Béton Armé", "IGH"],
    featured: true,
  },
  {
    id: "2",
    title: "Résidence Les Cèdres",
    description:
      "Dimensionnement d'un ensemble résidentiel R+4 avec une structure mixte bois-béton. Réalisation des plans d'exécution détaillés sur AutoCAD et coordination avec les architectes sous Archicad. Respect des normes Eurocode 5 et 8.",
    imageUrl: "",
    link: "#",
    tags: ["AutoCAD", "Archicad", "Structure Mixte", "Eurocodes"],
    color: "bg-green-50",
  },
  {
    id: "3",
    title: "Réhabilitation Halle Industrielle",
    description:
      "Diagnostic et renforcement structurel d'une ancienne halle industrielle reconvertie en espace culturel. Modélisation de la charpente métallique existante et calcul des renforts nécessaires pour supporter les nouvelles charges d'exploitation.",
    imageUrl: "",
    link: "#",
    tags: ["Rénovation", "Charpente Métallique", "Diagnostic"],
    color: "bg-orange-50",
  },
];
