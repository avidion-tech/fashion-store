export const products = [
  // Women's Collection
  {
    id: "w001",
    name: "Classic White Shirt",
    price: 2999,
    originalPrice: 3999,
    images: [
      "/product-images/classic-white-shirt.svg",
      // "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "women",
    subcategory: "tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream", "Light Blue"],
    description:
      "Elegant and versatile white shirt perfect for both office and casual wear. Made from premium cotton blend.",
    isNew: false,
    isSale: true,
  },
  {
    id: "w002",
    name: "Floral Summer Dress",
    price: 4999,
    images: [
      "/product-images/floral-summer-dress.svg",
      // "https://images.unsplash.com/photo-1515372039744-7ca4ac833fb9?w=500",
    ],
    category: "women",
    subcategory: "dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print", "Navy Floral", "Pink Floral"],
    description:
      "Beautiful floral dress perfect for summer occasions. Lightweight and breathable fabric.",
    isNew: true,
    isSale: false,
  },
  {
    id: "w003",
    name: "High Waist Jeans",
    price: 3499,
    originalPrice: 4499,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      // "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
    ],
    category: "women",
    subcategory: "bottoms",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    description:
      "Comfortable high-waist jeans with a flattering fit. Perfect for everyday wear.",
    isNew: false,
    isSale: true,
  },
  {
    id: "w004",
    name: "Silk Blouse",
    price: 5999,
    images: [
      "/product-images/silk-blouse.svg",
      // "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "women",
    subcategory: "tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Blush Pink", "Navy"],
    description:
      "Luxurious silk blouse for special occasions. Elegant and sophisticated design.",
    isNew: true,
    isSale: false,
  },
  {
    id: "w005",
    name: "Pleated Midi Skirt",
    price: 2799,
    images: [
      "/product-images/midi-skirt.svg",
      // "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    ],
    category: "women",
    subcategory: "bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    description:
      "Classic pleated midi skirt that pairs well with any top. Versatile and timeless.",
    isNew: false,
    isSale: false,
  },

  // Men's Collection
  {
    id: "m001",
    name: "Cotton Polo Shirt",
    price: 1999,
    originalPrice: 2799,
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500",
    ],
    category: "men",
    subcategory: "tops",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "White", "Grey"],
    description:
      "Premium cotton polo shirt with classic fit. Perfect for casual and semi-formal occasions.",
    isNew: false,
    isSale: true,
  },
  {
    id: "m002",
    name: "Formal Blazer",
    price: 8999,
    images: [
      "/product-images/formal-blazer.svg",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    ],
    category: "men",
    subcategory: "formal",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Charcoal", "Black"],
    description:
      "Elegant formal blazer crafted from premium fabric. Perfect for business meetings and formal events.",
    isNew: true,
    isSale: false,
  },
  {
    id: "m003",
    name: "Chino Pants",
    price: 2999,
    images: [
      "/product-images/chino-pants.svg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    ],
    category: "men",
    subcategory: "bottoms",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive"],
    description:
      "Comfortable chino pants suitable for both casual and smart-casual looks.",
    isNew: false,
    isSale: false,
  },
  {
    id: "m004",
    name: "Denim Jacket",
    price: 4999,
    originalPrice: 6999,
    images: [
      "/product-images/denim-jacket.svg",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500",
    ],
    category: "men",
    subcategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Classic Blue", "Dark Blue", "Light Blue"],
    description:
      "Classic denim jacket with a modern fit. A wardrobe essential for layering.",
    isNew: false,
    isSale: true,
  },
  {
    id: "m005",
    name: "Linen Shirt",
    price: 3499,
    images: [
      "/product-images/linen-shirt.svg",
      // "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500",
    ],
    category: "men",
    subcategory: "tops",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Beige"],
    description:
      "Breathable linen shirt perfect for summer. Relaxed fit with a comfortable feel.",
    isNew: true,
    isSale: false,
  },

  // Accessories
  {
    id: "a001",
    name: "Leather Handbag",
    price: 7999,
    originalPrice: 9999,
    images: [
      "/product-images/leather-bag.svg",
      // "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    ],
    category: "accessories",
    subcategory: "bags",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    description:
      "Premium leather handbag with multiple compartments. Perfect for everyday use.",
    isNew: false,
    isSale: true,
  },
  {
    id: "a002",
    name: "Classic Watch",
    price: 12999,
    images: [
      "/product-images/classic-watch.svg",
      // "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500",
    ],
    category: "accessories",
    subcategory: "watches",
    sizes: ["One Size"],
    colors: ["Silver", "Gold", "Rose Gold"],
    description:
      "Elegant classic watch with leather strap. Timeless design that complements any outfit.",
    isNew: true,
    isSale: false,
  },
  {
    id: "a003",
    name: "Silk Scarf",
    price: 1999,
    images: [
      "/product-images/silk-scarf.jpg",
      "https://images.unsplash.com/photo-1582142306909-195724d50b76?w=500",
    ],
    category: "accessories",
    subcategory: "scarves",
    sizes: ["One Size"],
    colors: ["Floral", "Geometric", "Solid"],
    description:
      "Luxurious silk scarf with beautiful patterns. Adds elegance to any outfit.",
    isNew: false,
    isSale: false,
  },
  {
    id: "a004",
    name: "Designer Sunglasses",
    price: 4999,
    originalPrice: 6999,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
      // "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    ],
    category: "accessories",
    subcategory: "sunglasses",
    sizes: ["One Size"],
    colors: ["Black", "Tortoise", "Brown"],
    description:
      "Stylish designer sunglasses with UV protection. Perfect for sunny days.",
    isNew: false,
    isSale: true,
  },

  // New Collection
  {
    id: "n001",
    name: "Athletic Hoodie",
    price: 3999,
    images: [
      "/product-images/athletic-hoodie.svg",
      // "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    ],
    category: "new",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Navy", "Black"],
    description:
      "Comfortable athletic hoodie perfect for workouts and casual wear.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n002",
    name: "Performance Leggings",
    price: 2499,
    images: [
      "/product-images/leggings.svg",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
    ],
    category: "new",
    subcategory: "activewear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Grey"],
    description: "High-performance leggings with moisture-wicking technology.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n003",
    name: "Sports Bra",
    price: 1499,
    images: [
      "/product-images/sports-bra.svg",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "new",
    subcategory: "activewear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Pink"],
    description: "Supportive sports bra designed for high-impact activities.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n004",
    name: "Training Shorts",
    price: 1999,
    images: [
      "/product-images/training-shorts.svg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    ],
    category: "new",
    subcategory: "activewear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"],
    description: "Lightweight training shorts with quick-dry technology.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n005",
    name: "Zip-up Hoodie",
    price: 4499,
    images: [
      "/product-images/zip-up-hoodie.svg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    ],
    category: "new",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    description: "Comfortable zip-up hoodie perfect for layering.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n006",
    name: "Running Tank",
    price: 1299,
    images: [
      "/product-images/running-tank.svg",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "new",
    subcategory: "activewear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Pink"],
    description: "Breathable running tank with mesh panels for ventilation.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n007",
    name: "Fleece Hoodie",
    price: 3499,
    images: [
      "/product-images/fleece-hoodie.svg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    ],
    category: "new",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Grey", "Black", "Navy"],
    description: "Soft fleece hoodie for ultimate comfort and warmth.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n008",
    name: "Yoga Pants",
    price: 2799,
    images: [
      "/product-images/yoga-pants.svg",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
    ],
    category: "new",
    subcategory: "activewear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    description: "Flexible yoga pants with four-way stretch fabric.",
    isNew: true,
    isSale: false,
  },
  {
    id: "n009",
    name: "Crew Neck Hoodie",
    price: 3799,
    images: [
      "/product-images/crew-neck-hoodie.svg",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    ],
    category: "new",
    subcategory: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    description: "Classic crew neck hoodie with a relaxed fit.",
    isNew: true,
    isSale: false,
  },

  // Sale Items
  {
    id: "s001",
    name: "Winter Coat",
    price: 6999,
    originalPrice: 9999,
    images: [
      "/product-images/winter-coat.svg",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500",
    ],
    category: "sale",
    subcategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"],
    description: "Warm winter coat with insulation. Perfect for cold weather.",
    isNew: false,
    isSale: true,
  },
  {
    id: "s002",
    name: "Cashmere Sweater",
    price: 4999,
    originalPrice: 7999,
    images: [
      "/product-images/cashmere-sweater.svg",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "sale",
    subcategory: "knitwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Grey", "Navy"],
    description: "Luxurious cashmere sweater with a soft feel.",
    isNew: false,
    isSale: true,
  },
  {
    id: "s003",
    name: "Wool Cardigan",
    price: 3999,
    originalPrice: 5999,
    images: [
      "/product-images/wool-cardigan.svg",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "sale",
    subcategory: "knitwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Brown"],
    description: "Cozy wool cardigan perfect for layering.",
    isNew: false,
    isSale: true,
  },
  {
    id: "s004",
    name: "Puffer Jacket",
    price: 5999,
    originalPrice: 8999,
    images: [
      "/product-images/puffer-jacket.svg",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500",
    ],
    category: "sale",
    subcategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Red"],
    description: "Insulated puffer jacket for extra warmth.",
    isNew: false,
    isSale: true,
  },
  {
    id: "s005",
    name: "Knit Pullover",
    price: 2999,
    originalPrice: 4499,
    images: [
      "/product-images/knit-pullover.svg",
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    ],
    category: "sale",
    subcategory: "knitwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Grey", "Black"],
    description: "Comfortable knit pullover with a classic design.",
    isNew: false,
    isSale: true,
  },
  {
    id: "s006",
    name: "Trench Coat",
    price: 8999,
    originalPrice: 12999,
    images: [
      "/product-images/trench-coat.svg",
      "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=500",
    ],
    category: "sale",
    subcategory: "outerwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige", "Navy", "Black"],
    description: "Classic trench coat with a timeless design.",
    isNew: false,
    isSale: true,
  },
];

// Utility functions for filtering and organizing products
export const getNewArrivals = () => {
  return products.filter((product) => product.isNew);
};

export const getSaleItems = () => {
  return products.filter((product) => product.isSale);
};

export const getBestSellers = () => {
  // Return products from women's and accessories categories as best sellers
  return products
    .filter(
      (product) =>
        product.category === "women" || product.category === "accessories"
    )
    .slice(0, 6);
};

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getSubcategories = (category: string) => {
  const categoryProducts = getProductsByCategory(category);
  const subcategories = [
    ...new Set(
      categoryProducts.map((product) => product.subcategory).filter(Boolean)
    ),
  ] as string[];
  return subcategories;
};

export const filterProducts = (
  products: any[],
  filters: {
    subcategory?: string;
    priceRange?: string;
    size?: string;
    color?: string;
  }
) => {
  return products.filter((product) => {
    // Subcategory filter
    if (filters.subcategory && product.subcategory !== filters.subcategory) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max) {
        if (product.price < min || product.price > max) return false;
      } else {
        // Handle "7000+" case
        if (product.price < min) return false;
      }
    }

    // Size filter
    if (filters.size && !product.sizes.includes(filters.size)) {
      return false;
    }

    // Color filter
    if (filters.color && !product.colors.includes(filters.color)) {
      return false;
    }

    return true;
  });
};

export const sortProducts = (products: any[], sortBy: string) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "name":
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case "newest":
    default:
      return sortedProducts.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
  }
};
