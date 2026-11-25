/*
 * Site content in one place.
 * Everything marked TODO is placeholder copy written for the concept and
 * must be replaced with real Sorriso information before a public launch.
 */
import type { CoffeeItem } from "@/components/ui/coffee-pour-menu";

export const hours = [
  // TODO: real opening hours
  { days: "Mon to Fri", time: "07:30 to 19:00" },
  { days: "Saturday", time: "08:30 to 19:00" },
  { days: "Sunday", time: "09:00 to 14:00" },
];

export const address = {
  // TODO: real address and map link
  line1: "Rua de exemplo, 00",
  line2: "4000-000 Porto, Portugal",
  mapUrl: "https://maps.google.com/?q=Porto",
};

export const instagram = "https://instagram.com/"; // TODO: real handle

export const drinks: CoffeeItem[] = [
  // TODO: confirm menu names and sizes
  {
    id: "bica",
    name: "Bica",
    subtitle: "30 ml · Porto's espresso",
    description: "a short, intense espresso with golden crema",
    vessel: "demitasse",
    layers: [{ type: "espresso", amount: 0.72 }],
    crema: true,
  },
  {
    id: "abatanado",
    name: "Abatanado",
    subtitle: "200 ml · long and smooth",
    description: "espresso lengthened with hot water",
    vessel: "glass-mug",
    layers: [
      { type: "water", amount: 0.54 },
      { type: "espresso", amount: 0.24 },
    ],
    crema: true,
    blend: 0.9,
  },
  {
    id: "meia-de-leite",
    name: "Meia de leite",
    subtitle: "180 ml · half coffee, half milk",
    description: "espresso with steamed milk and a little foam",
    vessel: "cup",
    layers: [
      { type: "espresso", amount: 0.3 },
      { type: "milk", amount: 0.44 },
    ],
    foam: 0.14,
    art: "heart",
  },
  {
    id: "galao",
    name: "Galão",
    subtitle: "300 ml · milky, in a glass",
    description: "espresso with lots of steamed milk, served in a tall glass",
    vessel: "tall-glass",
    layers: [
      { type: "espresso", amount: 0.25 },
      { type: "milk", amount: 0.51 },
    ],
    foam: 0.11,
    blend: 0.15,
  },
];

export const pastries = [
  // TODO: real pastry list and prices
  { name: "Pastel de nata", note: "Warm, every morning" },
  { name: "Bola de Berlim", note: "Custard filled" },
  { name: "Torrada", note: "Thick toast, salted butter" },
];

export const shop = [
  // TODO: real product names, prices and shop link
  {
    name: "House blend, red bag",
    note: "Whole bean, 250 g",
    src: "/sorriso/sorriso-bag-red.webp",
    bg: "bg-sorriso-sky",
    size: "tall",
  },
  {
    name: "Rooster cups",
    note: "Takeaway, three colours",
    src: "/sorriso/sorriso-cups.jpg",
    bg: "bg-sorriso-blue",
    size: "wide",
    cover: true,
  },
  {
    name: "Single origin, blue bag",
    note: "Whole bean, 250 g",
    src: "/sorriso/sorriso-bag-blue.webp",
    bg: "bg-sorriso-beige",
    size: "tall",
  },
  {
    name: "Sorriso mug",
    note: "Stoneware, 300 ml",
    src: "/sorriso/sorriso-mug-red.webp",
    bg: "bg-sorriso-beige",
    size: "square",
  },
  {
    name: "Sticker set",
    note: "Four smiles",
    src: "/sorriso/sorriso-sticker-3.svg",
    bg: "bg-sorriso-sky",
    size: "square",
  },
] as const;
