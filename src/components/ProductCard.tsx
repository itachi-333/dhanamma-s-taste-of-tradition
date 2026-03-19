import { motion } from "framer-motion";
import { Product, getWhatsAppLink } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    className="bg-card p-3 rounded-[20px] shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_-4px_rgba(0,0,0,0.08)] flex flex-col gap-3"
  >
    <div className="relative aspect-square overflow-hidden rounded-xl">
      <img src={product.image} alt={product.name} className="object-cover w-full h-full" loading="lazy" />
      {product.badge && (
        <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          {product.badge}
        </span>
      )}
    </div>

    <div className="flex flex-col gap-1 flex-1">
      <h3 className="font-display text-base sm:text-lg leading-tight text-foreground">{product.name}</h3>
      <div className="flex justify-between items-baseline">
        <span className="text-sm text-muted-foreground">{product.weight}</span>
        <span className="font-bold text-primary text-lg font-body tabular-nums">₹{product.price}</span>
      </div>
    </div>

    <a
      href={getWhatsAppLink(product.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-primary text-primary-foreground py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold active:scale-95 transition-transform"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
      Add to Cart
    </a>
  </motion.div>
);

export default ProductCard;
