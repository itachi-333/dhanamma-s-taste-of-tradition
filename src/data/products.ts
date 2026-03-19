import productImg from "@/assets/dhanamma-product.png";

export type Category = "all" | "sweets" | "hot" | "pickles" | "powders";

export interface Product {
  name: string;
  price: number;
  weight: string;
  category: Category;
  image: string;
  badge?: string;
}

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sweets", label: "Sweets" },
  { id: "hot", label: "Hot Snacks" },
  { id: "pickles", label: "Pickles" },
  { id: "powders", label: "Spicy Powders" },
];

export const products: Product[] = [
  // SWEETS
  { name: "Ariselu", price: 80, weight: "250gm", category: "sweets", image: productImg, badge: "Pure Ghee" },
  { name: "Gulabi Puvvulu", price: 100, weight: "6 pcs", category: "sweets", image: productImg, badge: "Pure Ghee" },
  { name: "Pappu Undalu", price: 100, weight: "250gm", category: "sweets", image: productImg },
  { name: "Bellam Gavvalu", price: 100, weight: "250gm", category: "sweets", image: productImg },
  { name: "Nuvulu Laddu", price: 100, weight: "250gm", category: "sweets", image: productImg, badge: "Pure Ghee" },
  { name: "Pakam Kajjikayalu", price: 120, weight: "250gm", category: "sweets", image: productImg },
  { name: "Sunnundalu", price: 120, weight: "250gm", category: "sweets", image: productImg },
  { name: "Sunnundalu (Dry Fruits)", price: 150, weight: "250gm", category: "sweets", image: productImg, badge: "Premium" },
  { name: "Bobbatlu", price: 150, weight: "250gm", category: "sweets", image: productImg },
  { name: "Dry Fruit Laddu", price: 250, weight: "250gm", category: "sweets", image: productImg, badge: "Premium" },
  // HOT SNACKS
  { name: "Karappusa", price: 70, weight: "250gm", category: "hot", image: productImg },
  { name: "Mixture Boondi", price: 100, weight: "250gm", category: "hot", image: productImg },
  { name: "Palukula Boondi", price: 100, weight: "250gm", category: "hot", image: productImg },
  { name: "Karam Gavvalu", price: 100, weight: "250gm", category: "hot", image: productImg },
  { name: "Janthikalu", price: 100, weight: "20 pcs", category: "hot", image: productImg },
  { name: "Beetroot Muruku", price: 100, weight: "250gm", category: "hot", image: productImg },
  // PICKLES
  { name: "Chicken Pickle", price: 250, weight: "250gm", category: "pickles", image: productImg },
  // SPICY POWDERS
  { name: "Kandi Podi", price: 100, weight: "250gm", category: "powders", image: productImg },
  { name: "Nuvvula Karam Podi", price: 100, weight: "250gm", category: "powders", image: productImg },
  { name: "Avisaginjala Podi", price: 120, weight: "250gm", category: "powders", image: productImg },
];

export const WHATSAPP_NUMBER = "917799186907";
export const getWhatsAppLink = (productName?: string) => {
  const text = productName
    ? `Hi! I want to order ${productName}`
    : "Hi! I want to place an order";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
