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
  { name: "Ariselu", price: 80, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1666751032571-83e78d4c5fd4?w=400", badge: "Pure Ghee" },
  { name: "Gulabi Puvvulu", price: 100, weight: "6 pcs", category: "sweets", image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=400", badge: "Pure Ghee" },
  { name: "Pappu Undalu", price: 100, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1627308595229-7830a5c18264?w=400" },
  { name: "Bellam Gavvalu", price: 100, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1605197584547-985580a1b8ee?w=400" },
  { name: "Nuvulu Laddu", price: 100, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1666751032488-d8fc52be5a64?w=400", badge: "Pure Ghee" },
  { name: "Pakam Kajjikayalu", price: 120, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400" },
  { name: "Sunnundalu", price: 120, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1666751032571-83e78d4c5fd4?w=400" },
  { name: "Sunnundalu (Dry Fruits)", price: 150, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400", badge: "Premium" },
  { name: "Bobbatlu", price: 150, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400" },
  { name: "Dry Fruit Laddu", price: 250, weight: "250gm", category: "sweets", image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=400", badge: "Premium" },
  // HOT SNACKS
  { name: "Karappusa", price: 70, weight: "250gm", category: "hot", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" },
  { name: "Mixture Boondi", price: 100, weight: "250gm", category: "hot", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400" },
  { name: "Palukula Boondi", price: 100, weight: "250gm", category: "hot", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400" },
  { name: "Karam Gavvalu", price: 100, weight: "250gm", category: "hot", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" },
  { name: "Janthikalu", price: 100, weight: "20 pcs", category: "hot", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400" },
  { name: "Beetroot Muruku", price: 100, weight: "250gm", category: "hot", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400" },
  // PICKLES
  { name: "Chicken Pickle", price: 250, weight: "250gm", category: "pickles", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" },
  // SPICY POWDERS
  { name: "Kandi Podi", price: 100, weight: "250gm", category: "powders", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400" },
  { name: "Nuvvula Karam Podi", price: 100, weight: "250gm", category: "powders", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400" },
  { name: "Avisaginjala Podi", price: 120, weight: "250gm", category: "powders", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400" },
];

export const WHATSAPP_NUMBER = "917799186907";
export const getWhatsAppLink = (productName?: string) => {
  const text = productName
    ? `Hi! I want to order ${productName}`
    : "Hi! I want to place an order";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
