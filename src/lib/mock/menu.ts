export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  category: string;
  tags: string[];
  calories: number;
  ingredients: string[];
}

export const CATEGORIES = [
  "All",
  "Coffee",
  "Burgers",
  "Desserts",
  "Mocktails"
];

export const MOCK_MENU: MenuItem[] = [
  {
    id: "cappuccino",
    title: "Artisan Cappuccino",
    description: "Espresso with steamed milk foam, topped with customized artisan latte art.",
    price: 180,
    rating: 4.9,
    reviewsCount: 124,
    image: "/hero/cappuccino.png",
    category: "Coffee",
    tags: ["Popular", "Hot"],
    calories: 120,
    ingredients: ["Espresso", "Whole Milk", "Cocoa Powder"]
  },
  {
    id: "burger",
    title: "Double Smash Burger",
    description: "Two premium grilled patties, cheddar cheese, fresh lettuce, tomato, and signature BC sauce.",
    price: 280,
    rating: 4.8,
    reviewsCount: 98,
    image: "/hero/burger.png",
    category: "Burgers",
    tags: ["Best Seller", "Non-Veg"],
    calories: 540,
    ingredients: ["Beef Patty", "Brioche Bun", "Cheddar", "BC Sauce"]
  },
  {
    id: "cream-bomb",
    title: "Decadent Cream Bomb",
    description: "Soft powdered sugar pastry filled with thick sweet whipped cream and chocolate drizzle.",
    price: 150,
    rating: 4.7,
    reviewsCount: 86,
    image: "/hero/cream_bomb.png",
    category: "Desserts",
    tags: ["New", "Veg"],
    calories: 320,
    ingredients: ["Choux Pastry", "Whipped Cream", "Chocolate Sauce"]
  },
  {
    id: "cold-brew",
    title: "Nitro Cold Brew",
    description: "Slow-steeped cold brew coffee infused with nitrogen for a rich, creamy head.",
    price: 200,
    rating: 4.9,
    reviewsCount: 74,
    image: "/hero/cappuccino.png", // fallback to cappuccino for demo
    category: "Coffee",
    tags: ["Popular", "Cold"],
    calories: 5,
    ingredients: ["Steeped Coffee", "Nitrogen Gas"]
  },
  {
    id: "spicy-burger",
    title: "Jalapeno Crunch Burger",
    description: "Crispy chicken breast, spicy jalapenos, pepperjack cheese, and fiery chipotle mayo.",
    price: 260,
    rating: 4.6,
    reviewsCount: 65,
    image: "/hero/burger.png", // fallback
    category: "Burgers",
    tags: ["Spicy", "Non-Veg"],
    calories: 490,
    ingredients: ["Chicken Patty", "Jalapenos", "Pepperjack", "Chipotle Mayo"]
  }
];

export const MOCK_OFFERS = [
  {
    id: "offer1",
    title: "Welcome Discount",
    description: "Get 50% off on your first order using code BC50.",
    code: "BC50",
    badge: "50% OFF"
  },
  {
    id: "offer2",
    title: "Happy Hours",
    description: "Buy 1 Get 1 Free on all espresso drinks from 4 PM to 7 PM.",
    code: "BOGO",
    badge: "B1G1 FREE"
  }
];

export const MOCK_TESTIMONIALS = [
  {
    id: "t1",
    name: "Aravind Swamy",
    role: "Local Guide",
    comment: "BC Cafe has revolutionized my remote work routine. The Nitro Cold Brew is spectacular, and the space feels extremely premium yet welcoming.",
    rating: 5
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Food Blogger",
    comment: "The Double Smash Burger is a masterclass in seasoning and grilling. Hands down the best burger joint in Anna Nagar!",
    rating: 5
  },
  {
    id: "t3",
    name: "Rohan Das",
    role: "UI Engineer",
    comment: "Love the Nothing OS x Apple styled aesthetic. Every interaction feels fast and fluid. Coffee is 10/10.",
    rating: 5
  }
];
