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
    title: "Maison d’habitation R+1 à plancher haut accessible",
    description:
      "Conception technique complète d’une habitation R+2 sur AutoCAD, un projet réalisé pour mon mémoire de BTS qui m’a permis de structurer des plans détaillés intégrant un rez-de-chaussée fonctionnel, un étage pour invités et une dalle accessible, tout en assurant une gestion précise des surfaces et de la distribution spatiale.",
    imageUrl:
      "https://hulking-card-e35.notion.site/image/attachment%3Acceb4e0d-8ef0-4fd6-9668-73332799d460%3ACapture_dcran_RDC_structure.png?table=block&id=28d25d35-c96b-8085-8806-f622f675dc2a&spaceId=3f525d35-c96b-8153-8803-00037150897e&width=1420&userId=&cache=v2",
    link: "https://hulking-card-e35.notion.site/Projet-d-AutoCAD-1-Maison-d-habitation-R-1-plancher-haut-accessible-28d25d35c96b80558e0fe875f1e44821",
    tags: ["AutoCAD", "Dessin Technique", "Plans 2D"],
    color: "bg-blue-50",
    featured: true,
  },
  {
    id: "6",
    title: "Villa KEKELI R+1 à plancher haut accessible ",
    description:
      "Conception de la Villa KEKELI (R+1) sur AutoCAD pour mon mémoire de Licence, un projet qui m'a permis de gérer la planification architecturale d'une résidence de grand standing intégrant des espaces commerciaux et privés, tout en optimisant la distribution complexe de 7 chambres et d'une dalle accessible.",
    imageUrl:
      "https://hulking-card-e35.notion.site/image/attachment%3A61aaa557-5af6-43cf-a3eb-4399007da21f%3ACapture_dcran_R1_str.png?table=block&id=28f25d35-c96b-8047-bd7b-d5e43f4115c4&spaceId=3f525d35-c96b-8153-8803-00037150897e&width=1420&userId=&cache=v2",
    link: "https://hulking-card-e35.notion.site/Projet-d-AutoCAD-2-Villa-KEKELI-R-1-plancher-haut-accessible-28d25d35c96b80a68bd9d1b60109e6f9",
    tags: ["Rénovation", "Charpente Métallique", "Diagnostic"],
  },
  {
    id: "5",
    title: "Projets Archicad (Duplex & Villa) ",
    description:
      "Modélisation d'un duplex et d'une villa sur Archicad 28, un projet qui m'a permis de perfectionner ma précision technique et de maîtriser les détails constructifs, tout en assurant un respect rigoureux des mesures pour un rendu professionnel.",
    imageUrl:
      "https://hulking-card-e35.notion.site/image/attachment%3A717b589f-2eca-47a6-98fd-1eab32741064%3ACapture_dcran_Duplex1.png?table=block&id=27d25d35-c96b-80c0-94d3-cc7f7ca652b2&spaceId=3f525d35-c96b-8153-8803-00037150897e&width=1420&userId=&cache=v2",
    link: "https://hulking-card-e35.notion.site/Mes-Projets-Archicad-27c25d35c96b80b7a9d3c90f73a5b7ec",
    tags: ["ETABS", "Revit", "Béton Armé", "IGH"],
    color: "bg-blue-50",
  },
  {
    id: "2",
    title:
      "Etude des sollicitations d’un bâtiment R+1 à plancher haut accessible avec RSA",
    description:
      "Modélisation structurelle d'un bâtiment R+1 sur Robot Structural Analysis, un projet qui m'a permis d'analyser les sollicitations mécaniques et de vérifier la résistance des éléments en béton armé pour garantir la stabilité et la sécurité de l'ouvrage.",
    imageUrl:
      "https://hulking-card-e35.notion.site/image/attachment%3A9e7a95d2-f214-4662-860a-cf8adc27220f%3ACapture_dcran3D.png?table=block&id=27f25d35-c96b-807c-98be-cc38f7c182c6&spaceId=3f525d35-c96b-8153-8803-00037150897e&width=1420&userId=&cache=v2",
    link: "https://hulking-card-e35.notion.site/Projet-Robot-1-Etude-des-sollicitations-d-un-b-timent-R-1-plancher-haut-accessible-avec-Robot-St-27f25d35c96b805c889fe7ba047aeed9",
    tags: ["AutoCAD", "Archicad", "Structure Mixte", "Eurocodes"],
  },
  {
    id: "3",
    title:
      "Etude de la structure d’un bâtiment d’habitation R+2 à plancher haut accessible avec RSA",
    description:
      "Étude de structure pour bâtiments R+1 et R+2 sur le logiciel RSA, un projet qui m'a permis de dimensionner les éléments en béton armé et de calculer les sections d'acier nécessaires, garantissant ainsi la stabilité et la conformité technique de chaque ouvrage.",
    imageUrl:
      "https://hulking-card-e35.notion.site/image/attachment%3A69bc7eea-1a54-4427-bdfb-327defe1ebfb%3ACapture_dcran_3D.png?table=block&id=28325d35-c96b-806f-b86e-d31b17e19729&spaceId=3f525d35-c96b-8153-8803-00037150897e&width=1420&userId=&cache=v2",
    link: "https://hulking-card-e35.notion.site/Projet-Robot-2-Etude-de-la-structure-d-un-b-timent-d-habitation-R-2-plancher-haut-accessible-ave-28225d35c96b809e9bbeebe78acedfe0",
    tags: ["Rénovation", "Charpente Métallique", "Diagnostic"],
    color: "bg-blue-50",
  },
  {
    id: "4",
    title: "Conception et dimensionnement d’une charpente métallique sur RSA",
    description:
      "Conception et dimensionnement d’une charpente métallique sur Robot Structural Analysis, un projet qui m’a permis de modéliser des structures en acier complexes et d’analyser les efforts de stabilité pour déterminer les sections optimales garantissant la résistance de l’ouvrage.",
    imageUrl:
      "https://hulking-card-e35.notion.site/image/attachment%3A30a67cbc-e65f-4bd2-9e5b-aff8c7baf967%3ACapture_dcran_2025-12-03_105403.png?table=block&id=2be25d35-c96b-808a-8fc5-e35f085825ae&spaceId=3f525d35-c96b-8153-8803-00037150897e&width=1420&userId=&cache=v2",
    link: "https://hulking-card-e35.notion.site/Projet-Robot-3-Conception-et-dimensionnement-d-une-charpente-m-tallique-sur-Robot-structural-analy-2bd25d35c96b809191e3c68c3f41af50",
    tags: ["Rénovation", "Charpente Métallique", "Diagnostic"],
  },
];
