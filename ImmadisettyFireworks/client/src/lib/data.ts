// Product Categories
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "sparklers",
    name: "Sparklers",
    description: "Hand-held sparklers of various sizes and durations",
    image: "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "flower-pots",
    name: "Flower Pots",
    description: "Beautiful fountain-style fireworks in various colors",
    image: "https://pixabay.com/get/ga801cd857f53267fe68dd192eeee7a24fa65c68e86eea16e5e4f8e3be24812f08ceec08290421f7d8b9316d37309d91fd828c17c71da720a8897132cda6f9dc4_1280.jpg"
  },
  {
    id: "rockets",
    name: "Rockets",
    description: "Sky-shooting rockets with various effects and colors",
    image: "https://pixabay.com/get/g8e3da9b2a19550a63db474024081389a414bc07584b9a02c428877a49e223995e3bb8dd14930e6c388084f47148145b38cee064e69c82e77f4c52f6fd63dd110_1280.jpg"
  },
  {
    id: "gift-combos",
    name: "Gift Combos",
    description: "Specially curated combos for festivals and celebrations",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

// Products
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  type: "Retail" | "Wholesale";
}

export const products: Product[] = [
  {
    id: "1",
    name: "Golden Sparklers",
    description: "12-inch golden sparklers that burn for 60 seconds with minimal smoke.",
    price: 120,
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "sparklers",
    type: "Retail"
  },
  {
    id: "2",
    name: "Rainbow Flower Pot",
    description: "Multi-color fountain with 7 color changes and 45 seconds duration.",
    price: 350,
    image: "https://pixabay.com/get/ge5958491ae590e55cac295076409e67a7864177c335af7b1a7ad42002ed525672b2c7095e747787d7ffca7617be1582e8cfde0faa1208f20aa3485d1ef1b8b9e_1280.jpg",
    category: "flower-pots",
    type: "Retail"
  },
  {
    id: "3",
    name: "Sky Blaster Rocket",
    description: "High altitude rocket with multi-color explosion. Pack of 10.",
    price: 850,
    image: "https://pixabay.com/get/ga0bea41cac4a8dd77b9b909bef772e081cd23802f80b49ad1adb489d1d7bd52849db9a08b09763e12350cd13d21ba40dc29defa33fcc9a2b53b925df25c110ea_1280.jpg",
    category: "rockets",
    type: "Wholesale"
  },
  {
    id: "4",
    name: "Diwali Special Combo",
    description: "Complete family package with variety of 15 different items.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1481162854517-d9e353af153d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "gift-combos",
    type: "Retail"
  },
  {
    id: "5",
    name: "Spinning Chakkar",
    description: "Ground spinner with colorful sparks. Safe for confined spaces.",
    price: 200,
    image: "https://pixabay.com/get/g0f282359a217590044e9d39f70f24748814f1a8139cb4e274400137e55c57c31b0a4facc58f1bfc0cd7f5477c6f235977ce58bde8c559620b2776ec1482ff3a6_1280.jpg",
    category: "ground-chakkars",
    type: "Retail"
  },
  {
    id: "6",
    name: "Kids Special Pack",
    description: "Safety-approved fireworks for children. Includes 6 varieties.",
    price: 450,
    image: "https://pixabay.com/get/gab7ee2070d1f19c0331bf076d06cf22c0c31d61557c9de620aa580b14eaa3e0ecc4fe9ca6c3d56746867379bdcb2baebc4ffec70139db5cc03120172cac4810d_1280.jpg",
    category: "kids",
    type: "Retail"
  },
  {
    id: "7",
    name: "Wedding Special",
    description: "Premium fireworks package for wedding celebrations with aerial displays.",
    price: 15000,
    image: "https://pixabay.com/get/g3036035447ea1eb2e1ada9230b0b7a3c482fae3ef7e6aa7e9fd287603d0db273eee1c4d8ae756226f4ed76401a3fd8b7dbf395b577dab17445669c39297ae191_1280.jpg",
    category: "gift-combos",
    type: "Wholesale"
  },
  {
    id: "8",
    name: "Aerial Bombs Set",
    description: "Set of 20 aerial bombs with various effects and colors.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "bombs",
    type: "Wholesale"
  }
];

// Gallery Images
export interface GalleryImage {
  id: string;
  alt: string;
  image: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    alt: "Wedding celebration fireworks",
    image: "https://images.unsplash.com/photo-1546541612-82d19b258cd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "2",
    alt: "Diwali celebration fireworks",
    image: "https://pixabay.com/get/g42b9d227ddcb88c8863fd8a7e3d9b7e15637ced4e912feec5694945e6a6cd2c766cfa205cabae510f03a3ae15d58c48bae5553492a4f4acf398c0a2411078f2a_1280.jpg"
  },
  {
    id: "3",
    alt: "Corporate event fireworks",
    image: "https://pixabay.com/get/gb1ace8d6db82bad7969b5abbd4e8b046066b6fd3e4821ba9e94ad6ee0a876d66664f8a0626cbff3e7b3e72cf35137b7d81e5906033d393ab5fb48f2c2e60a641_1280.jpg"
  },
  {
    id: "4",
    alt: "Kids with sparklers",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "5",
    alt: "Shop display",
    image: "https://pixabay.com/get/g5d4752f36b1531c99df4b618903eafc27ab3194cf1613e78cb4d7b2b38dca9618ad47fa03fb79a3cacdbed7dec51576f549766119e7bfc676da161fb1ee73fb7_1280.jpg"
  },
  {
    id: "6",
    alt: "Packaging and delivery",
    image: "https://pixabay.com/get/g51514307eb778a3537b97ba4338594e25bf1721eacb3049dbe606ffa6385400846407c69a6e583098f2d0e796a42cf840ae6c59fec42e111b0a179503dc7ea25_1280.jpg"
  }
];

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Patel",
    role: "Wedding Event",
    text: "We ordered the Wedding Special package for our daughter's wedding. The fireworks display was spectacular and exactly what we wanted! The team was professional and handled everything perfectly.",
    rating: 5
  },
  {
    id: "2",
    name: "Sunita Shah",
    role: "Retail Store Owner",
    text: "As a retailer, I've been sourcing from Immadisetty Crackers for over 5 years. Their products are consistently high quality, and their wholesale prices are competitive. Great business partner!",
    rating: 5
  },
  {
    id: "3",
    name: "Priya Reddy",
    role: "Regular Customer",
    text: "Ordered the Diwali Special Combo for my family. The variety was excellent, and the kids loved the sparklers. Will definitely shop here again next Diwali. Highly recommended!",
    rating: 4.5
  }
];
