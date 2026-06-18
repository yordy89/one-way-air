export type Product = {
  slug: string;
  name: string;
  price: number;
  category: "Tees" | "Long Sleeve" | "Jersey" | "Headwear";
  colorway: string;
  base: string; // primary garment color
  accent: string; // secondary
  badge?: string;
  drop: string;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  lowStock?: boolean;
  soldOut?: boolean;
};

export const products: Product[] = [
  {
    slug: "one-way-air-field-tee-black",
    name: "One Way Air Field Tee",
    price: 28,
    category: "Tees",
    colorway: "Onyx",
    base: "#15151a",
    accent: "#ff5a1f",
    badge: "Best Seller",
    drop: "The Collection",
    rating: 5,
    reviews: 214,
    description:
      "The flagship tee. Premium dry-fit cotton blend built for Florida heat. Clean fit, bold colors, everyday wear. The same energy we put in every home, now on you.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    lowStock: true,
  },
  {
    slug: "the-right-way-longsleeve-flame",
    name: "The Right Way Long Sleeve",
    price: 38,
    category: "Long Sleeve",
    colorway: "Flame",
    base: "#e8431a",
    accent: "#1e7fff",
    badge: "Just Dropped",
    drop: "The Collection",
    rating: 5,
    reviews: 168,
    description:
      "Heating and cooling done the right way. Full-back logo print on a breathable performance long sleeve. Made to move, made to last.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "crew-performance-jersey-ice",
    name: "Crew Performance Jersey",
    price: 46,
    category: "Jersey",
    colorway: "Ice",
    base: "#10243f",
    accent: "#4aa3ff",
    badge: "Limited",
    drop: "The Collection",
    rating: 5,
    reviews: 97,
    description:
      "Moisture-wicking mesh jersey with sublimated fire & ice graphics. Sleeve patch detailing. For the crew that shows up the right way.",
    sizes: ["S", "M", "L", "XL"],
    lowStock: true,
  },
  {
    slug: "hot-cold-dry-fit-tee-white",
    name: "Hot & Cold Dry-Fit Tee",
    price: 30,
    category: "Tees",
    colorway: "Frost White",
    base: "#ededf2",
    accent: "#ff5a1f",
    drop: "The Collection",
    rating: 5,
    reviews: 142,
    description:
      "Soft, breathable, built for everyday wear. Fire & ice chest mark with the One Way signature back hit. Clean, bold, unmistakable.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "one-way-signature-cap",
    name: "One Way Signature Cap",
    price: 24,
    category: "Headwear",
    colorway: "Midnight",
    base: "#101016",
    accent: "#1e7fff",
    badge: "New",
    drop: "The Collection",
    rating: 5,
    reviews: 63,
    description:
      "Structured 6-panel cap with embroidered fire & ice mark. Adjustable strap. Top off the fit the right way.",
    sizes: ["One Size"],
  },
  {
    slug: "the-honest-way-hoodie-ember",
    name: "The Honest Way Hoodie",
    price: 64,
    category: "Long Sleeve",
    colorway: "Ember",
    base: "#1c1116",
    accent: "#ff7a3c",
    badge: "Just Dropped",
    drop: "The Collection",
    rating: 5,
    reviews: 88,
    description:
      "Heavyweight fleece hoodie with split flame-to-ice gradient hit. More than merch — it's a way of doing things. The honest way.",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "crew-tech-shorts-onyx",
    name: "Crew Tech Shorts",
    price: 34,
    category: "Jersey",
    colorway: "Onyx",
    base: "#141318",
    accent: "#1e7fff",
    drop: "The Collection",
    rating: 5,
    reviews: 51,
    description:
      "Lightweight tech shorts with zip pocket and reflective One Way taping. Built for the grind in any climate.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "founders-flame-tee-orange",
    name: "Founders Flame Tee",
    price: 32,
    category: "Tees",
    colorway: "Pure Flame",
    base: "#ff5a1f",
    accent: "#0a0a0c",
    badge: "Sold Out",
    drop: "The Collection",
    rating: 5,
    reviews: 309,
    description:
      "The one that started it all. A bold all-flame tee with the original One Way back graphic. A founding piece for the crew.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    soldOut: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const reviews = [
  {
    name: "Marcus D.",
    text: "Best fit I own. The dry-fit is unreal in Florida heat and the colors are so clean.",
    stars: 5,
  },
  {
    name: "Jenna R.",
    text: "Quality is way better than I expected. Worth every dollar — ordering the whole drop.",
    stars: 5,
  },
  {
    name: "Tyler M.",
    text: "Love repping a brand I actually believe in. The fire & ice thing just hits.",
    stars: 5,
  },
  {
    name: "Sofia L.",
    text: "Shipping was fast and the long sleeve feels premium. This is the one way.",
    stars: 5,
  },
];
