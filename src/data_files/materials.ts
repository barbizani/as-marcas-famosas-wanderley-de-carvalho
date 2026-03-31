import aerialView from "@/images/aerial-view.avif";
import industry from "@/images/industry.avif";
import machines from "@/images/machines.avif";
import tools from "@/images/tools.avif";

export const materials = [
  {
    title: "Construção Civil",
    materials: [
      "Vergalhões para Construção",
      "Fio Máquina",
      "Arames",
      "Pregos",
      "Telas",
      "Treliças",
      "Telas Coluna",
    ],
    image: aerialView,
    alt: "Construção civil",
  },
  {
    title: "Indústria",
    materials: [
      "Tubos",
      "Chapas de aço",
      "Bobinas",
      "Perfis",
      "Slytyer",
      "Telhas",
      "Barras Chatas",
      "Barras quadradas",
      "Barras Redondas",
      "Cantoneiras",
    ],
    image: industry,
    alt: "Indústria",
  },
  {
    title: "Máquinas",
    materials: [
      "Eletrodos",
      "Abrasivos",
      "Máquinas de solda",
      "Varetas",
      "Arames",
      "Insumos e Acessórios",
    ],
    image: machines,
    alt: "Máquinas",
  },
  {
    title: "Ferramentas",
    materials: [
      "Parafusadeiras",
      "Furadeiras, marteletes e chaves de impacto",

      "Brocas",
      "Sopradores, lavadoras e aparador de grama",

      "Soldas",
      "Discos",
      "Ferro e aço",
      "Ferramentas manuais",
      "Jogos de ferramentas",
      "Jogos de soquetes",
      "Medição",
      "Ventosa",
      "Pistolas de pintura",
      "Automotivo",
      "Linha gourmet",
      "Camping",
    ],
    image: tools,
    alt: "Ferramentas",
  },
];
