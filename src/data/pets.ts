export interface Pet {
  id: number;
  name: string;
  gender: string;
  image: string;
  species: string;
  ageInMonths: number;
  price: number;
  breed?: string;
  traits?: string[];
}
export const pets: Pet[] = [
  {
    id: 1,
    name: "saul",
    gender: "macho",
    image: "/assets/pets/saul.jpg",
    price: 129.9,
    ageInMonths: 4,
    species: "cachorro",
    breed: "maltipoo",
    traits: ["sociável", "pequeno", "fala muito"],
  },
  {
    id: 2,
    name: "mochi",
    gender: "fêmea",
    image: "/assets/pets/mochi.jpg",
    price: 89.0,
    ageInMonths: 5,
    species: "gato",
    traits: ["fofinha", "dorme muito", "ronrona"],
  },
  {
    id: 3,
    name: "hammond",
    gender: "macho",
    image: "/assets/pets/hammond.jpg",
    price: 59.9,
    ageInMonths: 12,
    species: "hamster",
    breed: "hamster roborovski",
    traits: ["pequeno", "rápido", "explorador"],
  },
  {
    id: 4,
    name: "redstone",
    gender: "macho",
    image: "/assets/pets/redstone.jpg",
    price: 49.9,
    ageInMonths: 6,
    species: "coelho",
    traits: ["cava buracos", "nerd", "ama carinho"],
  },
  {
    id: 5,
    name: "ghost",
    gender: "macho",
    image: "/assets/pets/ghost.jpg",
    price: 199.9,
    ageInMonths: 48,
    species: "cachorro",
    breed: "husky siberiano",
    traits: ["silencioso", "leal", "ágil"],
  },
  {
    id: 6,
    name: "khaleesi",
    gender: "fêmea",
    image: "/assets/pets/khaleesi.jpg",
    price: 179.9,
    ageInMonths: 30,
    species: "gato",
    breed: "persa",
    traits: ["majestosa", "exigente", "gosta de tronos"],
  },
  {
    id: 7,
    name: "anubis",
    gender: "macho",
    image: "/assets/pets/anubis.jpg",
    price: 159.9,
    ageInMonths: 60,
    species: "cachorro",
    breed: "cão egípcio do faraó",
    traits: ["misterioso", "protetor", "elegante"],
  },
  {
    id: 8,
    name: "neko",
    gender: "fêmea",
    image: "/assets/pets/neko.jpg",
    price: 99.9,
    ageInMonths: 18,
    species: "tartaruga",
    traits: ["sortuda", "fofa", "minimalista"],
  },
  {
    id: 9,
    name: "ponyo",
    gender: "fêmea",
    image: "/assets/pets/splash.jpg",
    price: 39.9,
    ageInMonths: 4,
    species: "peixe",
    breed: "peixe beta",
    traits: ["colorida", "nadadora olímpica", "antissocial"],
  },
  {
    id: 10,
    name: "nimbus",
    gender: "macho",
    image: "/assets/pets/nimbus.jpg",
    price: 149.9,
    ageInMonths: 20,
    species: "coelho",
    traits: ["pula alto", "ama nuvens", "silencioso"],
  },
];
