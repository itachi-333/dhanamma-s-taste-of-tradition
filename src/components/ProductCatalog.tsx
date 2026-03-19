import { useState } from "react";
import { categories, products, Category } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="menu" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-2">Our Menu</h2>
      <p className="text-center text-muted-foreground mb-8">Authentic Telugu Pindi Vantalu made with Pure Ghee</p>

      {/* Filter bar */}
      <div className="flex overflow-x-auto gap-2 pb-4 mb-8 snap-x scrollbar-hide justify-center">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`shrink-0 snap-start rounded-full h-10 px-5 text-sm font-semibold transition-colors ${
              active === c.id
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground border border-border hover:border-primary/30"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
